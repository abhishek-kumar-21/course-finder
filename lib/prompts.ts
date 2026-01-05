export function generateCoursePrompt(topic: string) {
  return `
    Find the top 5 best **VIDEO COURSES** available on the internet for learning: "${topic}".

    Search & Filtering Guidelines:
    1. **STRICTLY VIDEO ONLY:** The course MUST be a video-based format.
    2. **EXCLUDE DOCUMENTATION:** Do NOT provide links to text-based tutorials.
    3. **PRIORITIZE CERTIFICATES:** Look for courses that offer a certificate.
    4. **INCLUDE "FREEMIUM":** Prioritize platforms like Coursera, edX, NPTEL, Swayam.
    5. **Direct URLs:** Provide the direct link to the course page.

    **Do NOT search for images or thumbnails.**

    Return the response in strictly valid JSON format:
    {
      "courses": [
        {
          "title": "Course Name",
          "platform": "Platform Name (e.g., Coursera)",
          "instructor": "Instructor Name",
          "description": "A punchy 1-sentence summary.",
          "url": "https://link-to-course",
          "skills": ["Skill 1", "Skill 2", "Skill 3"],
          "duration": "e.g. 12 Weeks",
          "language": "e.g. English",
          "certificate": "Free" or "Paid" or "No"
        }
      ]
    }
  `;
}