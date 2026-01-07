import { SearchResult } from "@/types";

export function generateRAGPrompt(topic: string, languages: string[], results: SearchResult[]) {
  return `
    I have a list of search results for "${topic}" in ${languages.join(", ")}.
    
    Here are the search results:
    ${JSON.stringify(results)}

    **Your Task:**
    1. Analyze these search results.
    2. Select the top 5 most relevant courses.
    3. For each selected course, use the specific "link" provided in the search result. **DO NOT INVENT NEW LINKS.**
    4. Infer the "skills", "duration" (guess if not shown), and "certificate" status based on the snippet and platform.
    
    **Constraints:**
    - **STRICTLY EXCLUDE YOUTUBE:** If any YouTube link slipped through, discard it immediately.
    - Only include Video Courses.
    - Map "certificate" to "Free", "Paid", or "No" based on the platform.
    - Return strict JSON.

    Output JSON Format:
    {
      "courses": [
        {
          "title": "Exact Title from result",
          "platform": "Platform Name",
          "instructor": "Inferred from snippet",
          "description": "Short summary",
          "url": "THE_EXACT_LINK_FROM_INPUT",
          "skills": ["Skill 1", "Skill 2"],
          "duration": "e.g. 4 Weeks",
          "language": "Inferred Language",
          "certificate": "Free" | "Paid" | "No"
        }
      ]
    }
  `;
}