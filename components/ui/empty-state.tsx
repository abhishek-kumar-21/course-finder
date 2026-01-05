import { Search } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
      <div className="bg-slate-800/50 p-4 rounded-full mb-4">
        <Search className="w-8 h-8 text-slate-500" />
      </div>
      <h3 className="text-xl font-bold text-white">No results found</h3>
      <p className="text-slate-500 mt-2 max-w-md">
        We couldn't find any free website-based resources for that. Try a broader topic like "Web Development" or "Calculus".
      </p>
    </div>
  );
}