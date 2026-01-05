import { 
  ExternalLink, 
  Clock, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Code2, 
  Cpu 
} from "lucide-react";
import { Course } from "@/types";
import Image from "next/image";

export function CourseCard({ course }: { course: Course }) {
  
  // 1. Helper to determine the Certificate Badge style
  const getCertificateBadge = (status?: string) => {
    switch (status) {
      case "Free":
        return (
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
            <CheckCircle className="w-3 h-3" />
            <span>FREE CERT</span>
          </div>
        );
      case "Paid":
        return (
          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
            <AlertCircle className="w-3 h-3" />
            <span>PAID CERT</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-400/10 px-2.5 py-1 rounded-full border border-slate-400/20">
            <XCircle className="w-3 h-3" />
            <span>NO CERT</span>
          </div>
        );
    }
  };

  // 2. Safety fallback for thumbnail (though page.tsx should always provide one)
  const thumbnailSrc = course.thumbnail || "/course-patterns/01.jpg";

  return (
    <div className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)] hover:-translate-y-1">
      
      {/* --- Section A: Course Thumbnail --- */}
      <div className="relative h-48 w-full bg-slate-800">
        <Image 
          src={thumbnailSrc} 
          alt={course.title}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        
        {/* Floating Platform Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-[10px] font-bold px-2 py-1 rounded text-slate-200 uppercase tracking-wider shadow-lg">
            {course.platform}
          </div>
        </div>
      </div>

      {/* --- Section B: Card Content --- */}
      <div className="p-6 flex flex-col grow">
        
        {/* Header: Certificate Status */}
        <div className="flex justify-between items-start mb-3">
          {getCertificateBadge(course.certificate)}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight line-clamp-2">
          {course.title}
        </h3>

        {/* Dynamic Content: Skills OR Description */}
        {course.skills && course.skills.length > 0 ? (
          <div className="mb-4 grow">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-2">Skills you'll gain:</p>
            <div className="flex flex-wrap gap-2">
              {course.skills.slice(0, 3).map((skill, i) => (
                <span key={i} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700/50">
                  {skill}
                </span>
              ))}
              {course.skills.length > 3 && (
                <span className="text-xs text-slate-500 px-1 py-1">+{course.skills.length - 3}</span>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3 flex-grow">
            {course.description}
          </p>
        )}

        {/* --- Section C: Footer Metadata --- */}
        <div className="mt-auto pt-5 border-t border-slate-800 flex items-center justify-between">
          
          {/* Left: Duration & Language */}
          <div className="flex flex-col gap-1.5 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              {course.duration && (
                <div className="flex items-center gap-1.5" title="Duration">
                  <Clock className="w-3.5 h-3.5 text-emerald-500/80" />
                  <span>{course.duration}</span>
                </div>
              )}
              {course.language && (
                <div className="flex items-center gap-1.5" title="Language">
                  <Globe className="w-3.5 h-3.5 text-indigo-500/80" />
                  <span>{course.language}</span>
                </div>
              )}
            </div>
            {/* Instructor Name */}
            <div className="flex items-center gap-1.5 text-slate-400 mt-1">
               {course.platform === "Official Docs" ? <Code2 className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
               <span className="truncate max-w-35">By {course.instructor}</span>
            </div>
          </div>
          
          {/* Right: CTA Button */}
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 bg-slate-100 hover:bg-emerald-400 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold transition-all transform active:scale-95 shadow-lg shadow-emerald-500/0 hover:shadow-emerald-500/20"
          >
            Start Learning
            <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}