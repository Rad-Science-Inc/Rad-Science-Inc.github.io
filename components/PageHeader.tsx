"use client";

import ParticlesBackground from "./ParticlesBackground";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PageHeaderProps {
  page: "about" | "services" | "contact" | "portfolio";
}

export default function PageHeader({ page }: PageHeaderProps) {
  const { dict } = useLanguage();
  const { badge, title, subtitle, breadcrumb } = dict.pageHeaders[page];

  return (
    <div className="relative pt-16 overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <ParticlesBackground />
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {breadcrumb && (
          <p className="text-blue-400 text-sm mb-3 font-medium">
            {dict.pageHeaders.home} &nbsp;/&nbsp; <span className="text-blue-300">{breadcrumb}</span>
          </p>
        )}
        <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
        <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      </div>

      {/* Bottom wave */}
      <div className="relative h-12">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 48L1440 48L1440 0C1440 0 1080 48 720 48C360 48 0 0 0 0L0 48Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
