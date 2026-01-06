export function generateCoursePrompt(topic: string, languages: string[]) {
  // Create a string like "English" or "English or Hindi"
  const languageString = languages.join(" or ");

  return `
    Find the top 5 best **VIDEO COURSES** available on the internet for learning: "${topic}".

    **CRITICAL SEARCH & FILTERING GUIDELINES:**
    
    1.  **LANGUAGE IS KEY:** The course MUST be taught in **${languageString}**. Do NOT provide courses in other languages.
    2.  **STRICTLY VIDEO ONLY:** The course MUST be a video-based format. Do NOT provide text-based tutorials or documentation.
    3.  **CERTIFICATE INFORMATION:** For each course, you MUST determine the certificate status.
        - "Free": The certificate is given free of charge upon completion.
        - "Paid": The content might be free (freemium), but the certificate requires payment (e.g., Coursera, edX, NPTEL).
        - "No": No certificate is offered.
    4.  **PRIORITIZE REPUTABLE SOURCES:** Look for courses from well-known platforms like Coursera, edX, NPTEL, Swayam, Udemy (if free/high quality), and reputable universities.
    5.  **DIRECT URLs:** Provide the direct link to the course page.

    **Do NOT search for images or thumbnails.**

    Return the response in strictly valid JSON format:
    {
      "courses": [
        {
          "title": "Course Name",
          "platform": "Platform Name (e.g., Coursera, NPTEL)",
          "instructor": "Instructor or University Name",
          "description": "A punchy 1-sentence summary of the course focus.",
          "url": "https://direct-link-to-course",
          "skills": ["Skill 1", "Skill 2", "Skill 3"],
          "duration": "e.g. 12 Weeks",
          "language": "The language of instruction (must be one of: ${languageString})",
          "certificate": "Free" or "Paid" or "No"
        }
      ]
    }
  `;
}