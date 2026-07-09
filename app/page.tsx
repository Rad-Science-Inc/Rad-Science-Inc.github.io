import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ParticleShowcase from "@/components/landing/ParticleShowcase";
import ProcessBento from "@/components/landing/ProcessBento";
import WhyUs from "@/components/landing/WhyUs";
// Temporarily disabled — see components/landing/PortfolioHighlights.tsx (kept intact)
// import PortfolioHighlights from "@/components/landing/PortfolioHighlights";
import CtaBanner from "@/components/landing/CtaBanner";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  return { title: getPageTitle(locale, "/") };
}

export default function Home() {
  return (
    <>
      <Hero />
      <ParticleShowcase />
      <ProcessBento />
      <WhyUs />
      {/* <PortfolioHighlights /> */}
      <CtaBanner />
    </>
  );
}
