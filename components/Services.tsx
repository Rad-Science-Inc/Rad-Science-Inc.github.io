"use client";

import { useEffect, useRef } from "react";
import { Server, Zap, Workflow, Users, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons = [Server, Zap, Workflow, Users];

const images = [
  "/images/process/01-software.jpeg",
  "/images/process/02-deep-learning.jpeg",
  "/images/process/03-data-pipeline.jpeg",
  "/images/process/04-collaboration.jpeg",
];

const colorMap: Record<string, { icon: string; tag: string; check: string }> = {
  blue: { icon: "bg-blue-600", tag: "bg-blue-100 text-blue-700", check: "text-blue-600" },
  indigo: { icon: "bg-indigo-600", tag: "bg-indigo-100 text-indigo-700", check: "text-indigo-600" },
  cyan: { icon: "bg-cyan-600", tag: "bg-cyan-100 text-cyan-700", check: "text-cyan-600" },
  violet: { icon: "bg-violet-600", tag: "bg-violet-100 text-violet-700", check: "text-violet-600" },
};

export default function Services({ hideHeader }: { hideHeader?: boolean }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  const t = dict.services;
  const services = t.items.map((svc, i) => ({ ...svc, icon: serviceIcons[i], image: images[i] }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );
    [headerRef, listRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div ref={headerRef} className="section-reveal text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-4">
              {t.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        )}

        <div ref={listRef} className="section-reveal flex flex-col gap-16 lg:gap-24">
          {services.map((svc, i) => {
            const c = colorMap[svc.color];
            const reversed = i % 2 === 1;
            return (
              <div key={svc.title} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <svc.icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>

                  <ul className="flex flex-col gap-3 mb-6">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${c.check}`} strokeWidth={2.25} />
                        <span className="text-gray-700 leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 text-xs font-semibold rounded-full ${c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
