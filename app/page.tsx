"use client";

import { useState } from "react";
import { Course } from "@/types";

import { Background } from "@/components/ui/background";
import { Header } from "@/components/ui/header";
import { EmptyState } from "@/components/ui/empty-state";
import { SearchBar } from "@/components/search/search-bar";
import { Suggestions } from "@/components/search/suggestions";
import { CourseCard } from "@/components/courses/course-card";
import { CourseSkeleton } from "@/components/courses/course-skeleton";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // --- LOGIC: Assign Random Local Images ---
  const assignRandomImages = (fetchedCourses: Course[]) => {
    // 1. Create an array of your file names (1 to 10)
    const availableImages = [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", 
      "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"
    ];

    // 2. Shuffle the array so the order is random every time
    const shuffled = availableImages.sort(() => 0.5 - Math.random());

    // 3. Map courses and assign an image
    return fetchedCourses.map((course, index) => ({
      ...course,
      // Use the modulo operator (%) to loop back if you have more courses than images
      thumbnail: `/course-patterns/${shuffled[index % shuffled.length]}`
    }));
  };

  const fetchCourses = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setCourses([]);
    setHasSearched(true);
    setTopic(query);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: query }),
      });

      const data = await res.json();
      
      if (data.courses) {
        // Inject the local images here before setting state
        const coursesWithImages = assignRandomImages(data.courses);
        setCourses(coursesWithImages);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
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

        <div className="max-w-2xl mx-auto space-y-6">
          <SearchBar 
            topic={topic} 
            setTopic={setTopic} 
            onSearch={handleFormSubmit} 
            loading={loading} 
          />
          
          {!hasSearched && !loading && (
            <Suggestions onSelect={fetchCourses} />
          )}
        </div>

        <div className="space-y-6 min-h-100">
          {loading && (
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <CourseSkeleton key={i} />
              ))}
            </div>
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
