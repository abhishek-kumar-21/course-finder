export function CourseSkeleton() {
  return (
    <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col">
      {/* Shimmer Animation */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent z-10"></div>
      
      {/* Thumbnail Skeleton */}
      <div className="h-48 w-full bg-slate-800/50 animate-pulse"></div>

      <div className="p-6 flex flex-col grow space-y-4">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-slate-800/50 rounded animate-pulse"></div>
          <div className="h-5 w-24 bg-slate-800/50 rounded-full animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="h-7 w-3/4 bg-slate-800/50 rounded animate-pulse"></div>
        
        {/* Skills/Description Skeleton */}
        <div className="space-y-2 grow">
          <div className="h-4 w-1/3 bg-slate-800/50 rounded animate-pulse mb-3"></div>
          <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-slate-800/50 rounded animate-pulse"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="pt-4 border-t border-slate-800/50 flex justify-between items-end">
          <div className="space-y-1.5">
            <div className="h-3 w-16 bg-slate-800/50 rounded animate-pulse"></div>
            <div className="h-3 w-16 bg-slate-800/50 rounded animate-pulse"></div>
            <div className="h-3 w-24 bg-slate-800/50 rounded animate-pulse mt-2"></div>
          </div>
          <div className="h-5 w-24 bg-slate-800/50 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}