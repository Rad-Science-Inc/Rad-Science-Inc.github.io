"use client";

import Link from "next/link";
import { Server, Zap, Workflow, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const stepIcons = [Server, Zap, Workflow, Users];

type Step = Dictionary["services"]["items"][number] & { icon: (typeof stepIcons)[number] };

function BentoTile({ step, image }: { step: Step; image: string }) {
  return (
    <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={step.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center">
        <step.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-white font-bold text-lg lg:text-xl mb-1.5 leading-snug">{step.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-3 max-w-md">{step.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {step.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [
  "/images/process/01-software.jpeg",
  "/images/process/02-deep-learning.jpeg",
  "/images/process/03-data-pipeline.jpeg",
  "/images/process/04-collaboration.jpeg",
];

export default function ProcessBento() {
  const { dict } = useLanguage();
  const t = dict.processBento;
  const steps = dict.services.items.map((svc, i) => ({ ...svc, icon: stepIcons[i] }));

  return (
    <section className="bg-white/70 py-24">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-14">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-6">
          {t.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">{t.title}</h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <BentoTile key={step.title} step={step} image={images[i]} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            {t.ctaLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
