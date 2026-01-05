"use client";

interface SuggestionsProps {
  onSelect: (topic: string) => void;
}

export function Suggestions({ onSelect }: SuggestionsProps) {
  const suggestions = ["React", "Python", "Data Structures", "Docker", "Rust"];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider py-1.5">Trending:</span>
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="bg-slate-900 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 text-xs px-3 py-1.5 rounded-full transition-all"
        >
          {s}
        </button>
      ))}
    </div>
  );
}