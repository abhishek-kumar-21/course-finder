import { SearchResult } from "@/types";

export async function performGoogleSearch(topic: string, languages: string[]): Promise<SearchResult[]> {
  const languageQuery = languages.join(" OR ");
  
  // Strict Query: Whitelist reputable sites, blacklist YouTube
  const searchQuery = `best free video courses for ${topic} in ${languageQuery} with certificate site:coursera.org OR site:edx.org OR site:udemy.com OR site:freecodecamp.org OR site:nptel.ac.in -site:youtube.com`;

  const response = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "X-API-KEY": process.env.SERPER_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: searchQuery,
      num: 10, // Fetch top 10 to ensure quality
    }),
  });

  if (!response.ok) {
    throw new Error(`Serper API Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.organic || [];
}