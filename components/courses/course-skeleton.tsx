export function CourseSkeleton() {
  return (
    <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="flex justify-between items-start mb-6">
        <div className="h-6 w-24 bg-slate-800 rounded-full animate-pulse"></div>
        <div className="h-6 w-20 bg-slate-800 rounded-full animate-pulse"></div>
      </div>
      <div className="h-8 w-3/4 bg-slate-800 rounded-lg mb-4 animate-pulse"></div>
      <div className="space-y-2 mb-8">
        <div className="h-4 w-full bg-slate-800/60 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-slate-800/60 rounded animate-pulse"></div>
        <div className="h-4 w-2/3 bg-slate-800/60 rounded animate-pulse"></div>
      </div>
      <div className="mt-auto pt-4 border-t border-slate-800/50 flex justify-between items-center">
        <div className="h-4 w-32 bg-slate-800 rounded animate-pulse"></div>
        <div className="h-8 w-28 bg-slate-800 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}