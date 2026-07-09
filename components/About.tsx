"use client";

import { useEffect, useRef } from "react";
import { BrainCircuit, Dna, Globe2, TrendingUp, GraduationCap } from "lucide-react";
import IconBadge from "./IconBadge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { playFont } from "@/lib/fonts";

const businessAreaIcons = [BrainCircuit, Dna, Globe2, TrendingUp, GraduationCap];

const CEO_PHOTO = "/images/about/jin_cho.jpeg";
// Ordered to match dict.about.orgChart.members: 조성호, 김성중, 염기진
const teamPhotos = ["/images/about/seongho_cho.jpeg", "/images/about/jay_kim.jpeg", "/images/about/kijin_yeom.jpeg"];

function OrgCard({ name, role, bio, photo }: { name: string; role: string; bio: string; photo: string }) {
  return (
    <div className="w-full max-w-56 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-white shadow-md mb-3"
      />
      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-xs text-blue-600 mt-0.5 mb-3">{role}</p>
      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs text-gray-400 leading-relaxed italic">{bio}</p>
      </div>
    </div>
  );
}

export default function About({ hideHeader }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();
  const t = dict.about;
  const businessAreas = t.businessAreas.items.map((a, i) => ({ ...a, icon: businessAreaIcons[i] }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-linear-to-b from-gray-50/80 to-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Overview */}
        <div ref={ref} className="section-reveal grid lg:grid-cols-[3fr_auto_4fr] items-center gap-10 lg:gap-14">
          <div className="flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-blue.png" alt="Rad Science" className="h-36 w-auto" />
            <span className={`${playFont.className} text-3xl text-gray-900 whitespace-nowrap`}>
              Rad <span className="text-blue-600">Science</span>
            </span>
          </div>

          <div className="hidden lg:block w-px self-stretch bg-linear-to-b from-transparent via-gray-200 to-transparent" />

          <div>
            {!hideHeader && (
              <>
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-6">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.titleLine1}
                  <br />
                  <span className="gradient-text">{t.titleLine2Gradient}</span>
                </h2>
              </>
            )}
            <p className="text-gray-500 leading-relaxed mb-6 text-lg">{t.paragraph1}</p>
            <p className="text-gray-500 leading-relaxed">{t.paragraph2}</p>
          </div>
        </div>

        {/* Leadership & Organization */}
        <div className="mt-20 lg:mt-28">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-12">
            {t.leadership.sectionLabel}
          </p>

          {/* Org chart */}
          <div className="flex flex-col items-center mb-20">
            <div className="flex flex-col items-center text-center mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CEO_PHOTO}
                alt={t.leadership.ceoName}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg mb-4"
              />
              <p className="text-xl font-bold text-gray-900">{t.leadership.ceoName}</p>
              <p className="text-sm text-blue-600">{t.leadership.ceoRole}</p>
            </div>

            {/* Desktop/tablet — branched connector. The connector row and the card row share the
                same grid-cols-3 track definition, so each line lands exactly on its card's center
                regardless of card width. */}
            <div className="hidden sm:block w-full">
              <div className="w-px h-8 bg-blue-200 mx-auto" />
              <div className="grid grid-cols-3">
                {t.orgChart.members.map((_, i) => (
                  <div key={i} className="relative h-8">
                    {i > 0 && <div className="absolute top-0 left-0 w-1/2 h-px bg-blue-200" />}
                    {i < t.orgChart.members.length - 1 && (
                      <div className="absolute top-0 right-0 w-1/2 h-px bg-blue-200" />
                    )}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-blue-200" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {t.orgChart.members.map((m, i) => (
                  <OrgCard key={m.name} name={m.name} role={m.role} bio={m.bio} photo={teamPhotos[i]} />
                ))}
              </div>
            </div>

            {/* Mobile — simple stacked flow with a single connecting line */}
            <div className="flex flex-col items-center w-full sm:hidden">
              <div className="w-px h-6 bg-blue-200" />
              {t.orgChart.members.map((m, i) => (
                <div key={m.name} className="flex flex-col items-center w-full">
                  <OrgCard name={m.name} role={m.role} bio={m.bio} photo={teamPhotos[i]} />
                  {i < t.orgChart.members.length - 1 && <div className="w-px h-6 bg-blue-200 my-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* CEO track record */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-bold text-gray-900">{t.leadership.ceoName}</span>
              <span className="text-xs text-blue-600">{t.leadership.ceoRole}</span>
            </div>

            {t.leadership.timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-[3.5rem_1.5rem_1fr] sm:grid-cols-[5rem_1.5rem_1fr] gap-x-2">
                <div className="text-right pt-4">
                  <span className={`text-xs sm:text-sm font-bold ${item.highlight ? "text-blue-600" : "text-gray-400"}`}>
                    {item.year}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-5 w-3 h-3 rounded-full shrink-0 ${
                      item.highlight ? "bg-blue-600 ring-4 ring-blue-100" : "bg-white border-2 border-blue-300"
                    }`}
                  />
                  {i < t.leadership.timeline.length - 1 && (
                    <span className="w-px flex-1 bg-linear-to-b from-blue-200 to-blue-100/40 my-1" />
                  )}
                </div>
                <div className="pb-6">
                  <div
                    className={`rounded-2xl p-5 transition-all duration-300 ${
                      item.highlight
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "bg-white border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50"
                    }`}
                  >
                    <p className={`font-bold mb-1.5 leading-snug ${item.highlight ? "text-white" : "text-gray-900"}`}>
                      {item.title}
                    </p>
                    <p className={`text-sm leading-relaxed ${item.highlight ? "text-blue-100" : "text-gray-500"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Areas */}
        <div className="mt-20 lg:mt-28">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
              {t.businessAreas.sectionLabel}
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              {t.businessAreas.title}
            </h3>
            <p className="text-gray-500 max-w-2xl">{t.businessAreas.desc}</p>
          </div>
          <div className="border-t border-gray-100">
            {businessAreas.map((area, i) => (
              <div
                key={area.title}
                className="group grid md:grid-cols-[64px_1fr_2fr] items-center gap-3 md:gap-8 py-8 border-b border-gray-100 transition-colors duration-300 hover:bg-blue-50/30 px-2 md:px-3 -mx-2 md:-mx-3 rounded-lg"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-blue-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <IconBadge icon={area.icon} size="md" variant="solid" />
                  <p className="font-bold text-gray-900 text-lg">{area.title}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20 lg:mt-28">
          <p className="text-center text-xl lg:text-2xl font-bold text-gray-900 mb-12">{t.partners.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {t.partners.items.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <div className="h-16 w-full flex items-center justify-center">
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-[140px] object-contain" />
                  ) : (
                    <div className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 text-xs font-bold">
                      {p.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 text-center leading-snug">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
