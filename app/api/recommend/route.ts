import { NextResponse } from "next/server";
import { performGoogleSearch } from "@/lib/search";
import { generateRAGPrompt } from "@/lib/prompts";
import { getGeminiModel } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { topic, languages } = await req.json();

    // 1. Validation
    if (!topic || !languages || !Array.isArray(languages) || languages.length === 0) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // 2. Fetch Real Search Results (Serper)
    const searchResults = await performGoogleSearch(topic, languages);

    // 3. Prepare AI Processing
    const model = getGeminiModel();
    const prompt = generateRAGPrompt(topic, languages, searchResults);

    // 4. Generate JSON Response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Clean markdown formatting if present
    let text = response.text();
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    const data = JSON.parse(text);

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("API Error:", error);

    // Handle Gemini Overload (503) specifically
    if (error?.message?.includes("503") || error?.status === 503) {
      return NextResponse.json(
        { error: "Service busy. Please try again in a moment." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch courses." },
      { status: 500 }
    );
  }
}