export function generateCoursePrompt(topic: string) {
    return `
      Find the top 5 best **100% FREE** website-based courses or text/interactive tutorials for learning: "${topic}".
      
      Search Guidelines:
      1. **STRICTLY EXCLUDE YouTube.** Do not provide video links from YouTube or similar video-only aggregators.
      2. Prioritize: 
         - **Interactive Platforms:** freeCodeCamp, The Odin Project, Scrimba (free tier), W3Schools, Codecademy (free tier).
         - **University Archives:** MIT OpenCourseWare, Harvard CS50 notes, Stanford Online.
         - **Official Documentation:** (e.g., React.dev, Python.org docs, MDN Web Docs).
         - **Reputable Text Guides:** Roadmap.sh, GeeksforGeeks, Dev.to guides.
      3. The resource must be accessible directly via a website URL.
      4. Ensure the content is free (no paywall for the core learning material).
      
      Return the response in strictly valid JSON format:
      {
        "courses": [
          {
            "title": "Course/Guide Name",
            "platform": "Website Name (e.g., MDN, The Odin Project)",
            "instructor": "Author or Organization",
            "description": "Why this website resource is excellent (1 sentence).",
            "url": "https://link-to-website",
            "type": "Interactive" or "Documentation" or "University Course"
          }
        ]
      }
    `;
}
