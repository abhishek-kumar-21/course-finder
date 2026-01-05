"use client";

import { Search, ArrowRight, Loader2 } from "lucide-react";

interface SearchBarProps {
  topic: string;
  setTopic: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
  loading: boolean;
}

export function SearchBar({ topic, setTopic, onSearch, loading }: SearchBarProps) {
  return (
    <form onSubmit={onSearch} className="relative group z-20">
      <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 via-teal-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
      
      <div className="relative flex items-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-800 rounded-xl p-2 shadow-2xl focus-within:border-emerald-500/50 transition-colors">
        <Search className="ml-4 text-slate-500 w-5 h-5" />
        <input
          type="text"
          placeholder="What do you want to learn today?"
          className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 py-4 text-lg outline-none"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading || !topic}
          className="bg-white text-black hover:bg-emerald-400 hover:text-black px-6 py-3 rounded-lg font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Find"} 
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </form>
  );
}
