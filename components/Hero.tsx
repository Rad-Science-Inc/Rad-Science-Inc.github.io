"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  const t = dict.hero;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="relative h-screen min-h-160 w-full overflow-hidden bg-gray-950 flex flex-col">
      {/* Static backdrop, fixed to exactly cover the video area */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, #1e3a8a 0%, transparent 55%), radial-gradient(circle at 80% 75%, #0e7490 0%, transparent 50%), radial-gradient(circle at 55% 45%, #4c1d95 0%, transparent 45%), linear-gradient(180deg, #020617 0%, #0f172a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* DNA helix background video, self-hosted at public/videos/hero-bg.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/50 to-gray-950/10" />
      <div className="absolute inset-0 bg-linear-to-r from-gray-950/70 via-transparent to-transparent" />

      {/* Content */}
      <div
        ref={ref}
        className="section-reveal relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 bg-white/10 border border-white/15 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">{t.badge}</span>
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white max-w-4xl mb-6">
          {t.titleLine1}<br />{t.titleLine2}
        </h1>

        <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 transition-colors duration-200 text-sm"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors duration-200 text-sm backdrop-blur-sm"
          >
            {t.ctaSecondary}
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-white/40 mt-16">
          <span className="text-[10px] tracking-widest">{t.scrollLabel}</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" strokeWidth={1.5} />
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-white/3 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-white">{s.num}</p>
              <p className="text-xs md:text-sm text-white/50 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
