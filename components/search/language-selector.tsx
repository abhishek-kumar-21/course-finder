"use client";

import { useState } from "react";
import { Check, Plus, X } from "lucide-react";

const commonLanguages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Arabic",
  "Russian",
  "Portuguese",
  "Japanese",
];

interface LanguageSelectorProps {
  selectedLanguages: string[];
  setSelectedLanguages: (languages: string[]) => void;
}

export function LanguageSelector({
  selectedLanguages,
  setSelectedLanguages,
}: LanguageSelectorProps) {
  const [customLang, setCustomLang] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Toggle selection for predefined languages
  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      // Prevent removing the last language if it's the only one (optional safety)
      // But typically we allow deselection as long as one is eventually selected before search
      setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  // Add a custom language typed by the user
  const addCustomLanguage = (e?: React.FormEvent) => {
    e?.preventDefault();
    const formattedLang = customLang.trim();

    if (!formattedLang) return;

    // Capitalize first letter for consistency
    const displayLang = formattedLang.charAt(0).toUpperCase() + formattedLang.slice(1);

    // Prevent duplicates
    if (!selectedLanguages.includes(displayLang)) {
      setSelectedLanguages([...selectedLanguages, displayLang]);
    }

    setCustomLang("");
    setIsAdding(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
          Step 1: Select Preferred Language(s)
        </p>
        <span className="text-[10px] text-slate-600">
          {selectedLanguages.length} selected
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* 1. Common Languages Loop */}
        {commonLanguages.map((lang) => {
          const isSelected = selectedLanguages.includes(lang);
          return (
            <button
              key={lang}
              type="button"
              onClick={() => toggleLanguage(lang)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                isSelected
                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
                  : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300"
              }`}
            >
              {isSelected && <Check className="w-3 h-3" />}
              {lang}
            </button>
          );
        })}

        {/* 2. Display Custom Added Languages (that are NOT in the common list) */}
        {selectedLanguages
          .filter((lang) => !commonLanguages.includes(lang))
          .map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => toggleLanguage(lang)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
            >
              <Check className="w-3 h-3" />
              {lang}
              <span className="ml-1 opacity-50 hover:opacity-100 text-[10px]">✕</span>
            </button>
          ))}

        {/* 3. Add Other Language Input */}
        {isAdding ? (
          <form onSubmit={addCustomLanguage} className="flex items-center">
            <input
              autoFocus
              type="text"
              value={customLang}
              onChange={(e) => setCustomLang(e.target.value)}
              placeholder="Type language..."
              className="bg-slate-900 border border-emerald-500/50 text-white text-xs px-3 py-1.5 rounded-l-full outline-none w-32 placeholder-slate-600"
              onBlur={() => {
                if (!customLang) setIsAdding(false);
              }}
            />
            <button
              type="submit"
              className="bg-emerald-500/20 border-y border-r border-emerald-500/50 text-emerald-400 px-2 py-1.5 rounded-r-full hover:bg-emerald-500/30 transition-colors"
            >
              <Check className="w-3 h-3" />
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-dashed border-slate-700 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
          >
            <Plus className="w-3 h-3" />
            Other
          </button>
        )}
      </div>
    </div>
  );
}
