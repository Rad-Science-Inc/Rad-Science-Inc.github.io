"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CtaBanner() {
  const { dict } = useLanguage();
  const t = dict.ctaBanner;

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-gray-950 to-violet-950" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1255h-125blue-600 rounded-full blur-[160px] opacity-20 pointer-events-none animate-blob"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 bg-violet-600 rounded-full blur-[140px] opacity-20 pointer-events-none animate-blob"
        style={{ animationDuration: "24s", animationDelay: "-8s" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/15 text-white/80 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
          {t.badge}
        </span>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t.titleLine1}<br />{t.titleLine2}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{t.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 transition-colors duration-200 shadow-lg text-sm"
          >
            {t.ctaPrimary}
          </Link>
          {/* Temporarily disabled along with the portfolio route — uncomment to re-enable */}
          {/* <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/25 hover:border-white/50 text-white font-semibold rounded-full transition-colors duration-200 text-sm backdrop-blur-sm"
          >
            연구 사례 보기
          </Link> */}
        </div>
      </div>
    </section>
  );
}
