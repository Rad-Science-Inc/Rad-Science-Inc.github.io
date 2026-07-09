"use client";

import { Building2, FileText, BrainCircuit, Star, Microscope, Link2, Rocket } from "lucide-react";
import IconBadge from "../IconBadge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const strengthIcons = [Building2, FileText, BrainCircuit, Star];
const differentiatorIcons = [Microscope, Link2, Rocket];

export default function WhyUs() {
  const { dict } = useLanguage();
  const t = dict.whyUs;
  const strengths = t.strengths.map((s, i) => ({ ...s, icon: strengthIcons[i] }));
  const differentiators = t.differentiators.map((d, i) => ({ ...d, icon: differentiatorIcons[i] }));

  return (
    <section className="py-24 bg-linear-to-b from-slate-900 to-blue-950 text-white overflow-hidden relative">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute right-0 top-0 w-125 h-125 bg-blue-500 rounded-full blur-[140px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {strengths.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200">
              <IconBadge icon={s.icon} variant="dark" className="mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.num}</p>
              <p className="text-blue-300 font-semibold text-sm mb-1">{s.label}</p>
              <p className="text-blue-200/60 text-xs">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Why section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300">
              <IconBadge icon={d.icon} size="lg" variant="dark" className="mb-5" />
              <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
              <p className="text-blue-200/80 leading-relaxed text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
