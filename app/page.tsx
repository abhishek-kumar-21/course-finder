"use client";

import { useState } from "react";
import { Course } from "@/types";

import { Background } from "@/components/ui/background";
import { Header } from "@/components/ui/header";
import { EmptyState } from "@/components/ui/empty-state";
import { SearchBar } from "@/components/search/search-bar";
import { Suggestions } from "@/components/search/suggestions";
import { CourseCard } from "@/components/courses/course-card";
import { AiAnalysisLoader } from "@/components/ui/ai-analysis-loader";
import { LanguageSelector } from "@/components/search/language-selector";

export default function Home() {
  const [topic, setTopic] = useState("");
  // Default language is English
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English"]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Logic to assign random local images
  const assignRandomImages = (fetchedCourses: Course[]) => {
    const availableImages = [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", 
      "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"
    ];
    const shuffled = availableImages.sort(() => 0.5 - Math.random());
    return fetchedCourses.map((course, index) => ({
      ...course,
      thumbnail: `/course-patterns/${shuffled[index % shuffled.length]}`
    }));
  };

  const fetchCourses = async (query: string) => {
    if (!query.trim()) return;
    
    // Safety check
    if (selectedLanguages.length === 0) {
        alert("Please select at least one language.");
        return;
    }

    setLoading(true);
    setCourses([]);
    setHasSearched(true);
    setTopic(query);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send both topic and selected languages to the backend
        body: JSON.stringify({ topic: query, languages: selectedLanguages }),
      });

      if (res.status === 429) {
        alert("You are searching too fast! Please wait a minute and try again.");
        setLoading(false);
        return;
      }
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      
      if (data.courses) {
        const coursesWithImages = assignRandomImages(data.courses);
        setCourses(coursesWithImages);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCourses(topic);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden">
      
      <Background />

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        
        <Header />

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Language Selector Component */}
          <LanguageSelector 
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
          />

          <div className="space-y-3">
             <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Step 2: Enter Skill or Topic
            </p>
            <SearchBar 
              topic={topic} 
              setTopic={setTopic} 
              onSearch={handleFormSubmit} 
              loading={loading}
              // Pass condition to enable/disable search button
              canSearch={selectedLanguages.length > 0}
            />
          </div>
          
          {!hasSearched && !loading && (
            <Suggestions onSelect={fetchCourses} />
          )}
        </div>

        <div className="space-y-6 min-h-100">
          {/* Show new AI Analysis Loader when searching */}
          {loading && (
            <AiAnalysisLoader />
          )}

          {!loading && hasSearched && courses.length === 0 && (
            <EmptyState />
          )}

          {!loading && courses.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 perspective-1000">
              {courses.map((course, idx) => (
                <CourseCard key={idx} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}