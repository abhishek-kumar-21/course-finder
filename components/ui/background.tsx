export function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[20%] w-125 h-125 bg-emerald-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-125 h-125 bg-indigo-500/5 rounded-full blur-[120px]"></div>
    </div>
  );
}