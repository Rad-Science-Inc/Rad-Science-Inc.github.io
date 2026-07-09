export default function SiteBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Uniform light tint so every translucent section reads the same, regardless of scroll position */}
      <div className="absolute inset-0 bg-[#f6f9ff]" />

      {/* A couple of fixed, anchored glow accents for depth — not repeated, so they don't create scroll-position banding */}
      <div className="absolute left-[10%] top-[5%] w-150 h-150 rounded-full bg-blue-200/30 blur-[120px]" />
      <div className="absolute right-[5%] top-[45%] w-125 h-125 rounded-full bg-cyan-200/25 blur-[120px]" />
      <div className="absolute left-[15%] top-[85%] w-137.5 h-137.5 rounded-full bg-violet-200/20 blur-[120px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,102,204,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
