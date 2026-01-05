import { ExternalLink, Terminal, BookOpen, Globe, Code2, Cpu } from "lucide-react";
import { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  
  const getTypeIcon = (type: string) => {
    const t = (type || "").toLowerCase();
    if (t.includes("interactive") || t.includes("code")) return <Terminal className="w-3.5 h-3.5" />;
    if (t.includes("university")) return <BookOpen className="w-3.5 h-3.5" />;
    return <Globe className="w-3.5 h-3.5" />;
  };

  return (
    <div className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)] hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-slate-800 text-[10px] font-bold px-2 py-1 rounded border border-slate-700 uppercase tracking-wider text-slate-300">
          {course.platform}
        </div>
        <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${
            course.type?.toLowerCase().includes('interactive') 
            ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        }`}>
          {getTypeIcon(course.type)}
          <span>{course.type || "Resource"}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
        {course.title}
      </h3>
      
      <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3 grow">
        {course.description}
      </p>

      <div className="mt-auto pt-5 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          {course.platform === "Official Docs" ? <Code2 className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
          <span className="truncate max-w-30">{course.instructor}</span>
        </div>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 hover:bg-emerald-400 hover:text-slate-950 px-4 py-2 rounded-lg text-xs font-bold transition-all transform active:scale-95"
        >
          Start Learning
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}