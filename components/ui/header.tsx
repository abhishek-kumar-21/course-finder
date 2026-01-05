import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <div className="text-center space-y-6 pt-10">
      <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-full text-xs font-semibold text-slate-300 shadow-xl">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Powered by Gemini 2.5 Flash</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
        <span className="bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Master any skill.
        </span>
        <br />
        <span className="text-emerald-500">For free.</span>
      </h1>
      
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Stop paying for tutorials. We scour the open web to find the best 
        <span className="text-slate-200 font-medium"> documentation, interactive guides, and university archives</span> just for you.
      </p>
    </div>
  );
}
