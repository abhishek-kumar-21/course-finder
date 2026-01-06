"use client";

export function AiAnalysisLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-100 relative">
      
      {/* --- The Scanner UI --- */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        {/* Outer Ring Animations */}
        <div className="absolute w-full h-full rounded-full border border-indigo-500/20 animate-ping-slow"></div>
        <div className="absolute w-56 h-56 rounded-full border border-indigo-500/30 animate-ping-slower"></div>
        <div className="absolute w-48 h-48 rounded-full border border-indigo-500/40"></div>
        
        {/* Inner Core & Icon */}
        <div className="relative z-10 w-24 h-24 bg-[#0a0a0a] rounded-full border-2 border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
           <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center animate-pulse">
             {/* Search/Scan Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-400">
               <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
               <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.25 0 4.125 4.125 0 00-2.25 0z" clipRule="evenodd" />
               <path d="M9.375 17.25a.375.375 0 00.375.375h4.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-4.5a.375.375 0 00-.375.375v1.5z" />
             </svg>
           </div>
        </div>

        {/* Rotating Radar Beam */}
        <div className="absolute w-full h-full rounded-full animate-spin-slow overflow-hidden">
           <div className="h-1/2 w-full bg-linear-to-t from-indigo-500/20 to-transparent origin-bottom transform rotate-45"></div>
        </div>

        {/* Top Label */}
        <div className="absolute -top-8 text-[10px] font-bold text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full tracking-widest bg-[#0a0a0a]">
          SCAN_V.2.0
        </div>
      </div>

      {/* --- Text Content --- */}
      <div className="text-center space-y-3 z-10">
        <h3 className="text-xl font-bold text-white tracking-tight">
          AI Analysis Engine
        </h3>
        <p className="text-slate-400 text-sm max-w-xs animate-pulse leading-relaxed">
          Initiating global scan for the best video courses in your preferred language(s)...
        </p>
      </div>
      
      {/* Top Left System Indicator */}
      <div className="absolute top-0 left-0 flex items-center gap-2 bg-[#0a0a0a]/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-bold text-emerald-400 tracking-widest">SYSTEM READY</span>
      </div>
    </div>
  );
}