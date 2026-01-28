# Free Course Finder

An AI-powered course discovery platform built with **Next.js 16** and **Gemini 2.5 Flash** that finds the best **100% free**, high-quality learning resources from the live internet - without YouTube spam or paid course junk.

---

## 🚀 Features

* **AI-Driven Search:** Uses Gemini 2.5 Flash with Google Search grounding
* **Strict Content Filtering**

  * ✅ Interactive platforms (freeCodeCamp, Odin Project)
  * ✅ Official documentation (MDN, framework docs)
  * ✅ University archives (MIT OpenCourseWare)
  * 🚫 YouTube playlists, Udemy, paywalled content
* **Smart Categorization:** Interactive · Documentation · University Course
* **Modern UI:** Glassmorphism, skeleton loaders, trending topic suggestions

---

## 🛠 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **AI:** Gemini 2.5 Flash
* **Styling:** Tailwind CSS + Lucide React
* **API:** Edge Functions

---

## 📂 Project Structure

```text
/
├── app/
│   ├── api/recommend/   # Gemini-powered API
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── search/          # Search + suggestions
│   ├── courses/         # Course cards & loaders
│   └── ui/              # Shared UI components
│
├── lib/
│   └── prompts.ts       # Strict prompt rules
│
└── types/
    └── index.ts
```

---

## 🧠 How It Works

1. User enters a topic
2. Gemini searches the live web
3. Paid, video-only, and low-quality sources are rejected
4. Top free resources are returned as structured JSON

---

## 🚀 Getting Started

```bash
git clone https://github.com/abhishek-kumar-21/course-finder
cd course-finder
npm install
npm run dev
```

Create `.env.local`:

```env
GEMINI_API_KEY=your_api_key_here
SERPER_API_KEY=your_api_key_here
```

Open: [http://localhost:3000](http://localhost:3000)
