"use client";

import WovenCanvas from "../WovenCanvas";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const RING_SIZE = 84; // % of container — ring diameter
const RING_RADIUS = RING_SIZE / 2;

// 8 keywords arranged octagonally (45° apart, starting at top), centered
// exactly on the ring's circumference.
const ANGLES = [-90, -45, 0, 45, 90, 135, 180, 225];
const NODES = ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return { left: 50 + RING_RADIUS * Math.cos(rad), top: 50 + RING_RADIUS * Math.sin(rad) };
});

export default function ParticleShowcase() {
  const { dict } = useLanguage();
  const keywords = dict.about.keywordCloud;

  return (
    <section className="relative py-24 lg:py-32 bg-linear-to-b from-[#070b18] via-[#0b1230] to-[#070b18] overflow-hidden">
      {/* ambient glow blobs for a dark spotlight backdrop */}
      <div className="absolute -z-0 left-[10%] top-[10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -z-0 right-[8%] bottom-[10%] w-96 h-96 rounded-full bg-violet-600/15 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative mx-auto w-full max-w-4xl aspect-square">
          {/* glowing halo behind the particle sphere */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-3xl"
            style={{ width: `${RING_SIZE}%`, height: `${RING_SIZE}%` }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40"
            style={{ width: `${RING_SIZE}%`, height: `${RING_SIZE}%` }}
          />

          {/* particle visualization, centered — the additive glow renders visually larger than its
              geometric footprint, so the box is sized well under the ring, especially on mobile */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[48%] sm:w-[60%] lg:w-[80%]">
              <WovenCanvas />
            </div>
          </div>

          {/* keyword circles, centered on the ring's circumference */}
          {keywords.map((label, i) => {
            const node = NODES[i];
            if (!node) return null;
            return (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ left: `${node.left}%`, top: `${node.top}%`, animationDelay: `${i * 0.5}s` }}
              >
                <div className="flex items-center justify-center text-center break-keep rounded-full border border-white/15 bg-white/10 backdrop-blur-md shadow-lg shadow-blue-950/40 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 p-2.5 sm:p-3 text-[11px] sm:text-sm lg:text-base font-semibold text-white leading-tight">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
