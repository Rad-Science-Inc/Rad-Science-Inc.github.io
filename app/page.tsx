import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ParticleShowcase from "@/components/landing/ParticleShowcase";
import ProcessBento from "@/components/landing/ProcessBento";
import WhyUs from "@/components/landing/WhyUs";
// Temporarily disabled — see components/landing/PortfolioHighlights.tsx (kept intact)
// import PortfolioHighlights from "@/components/landing/PortfolioHighlights";
import CtaBanner from "@/components/landing/CtaBanner";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { dictionaries, getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  const title = getPageTitle(locale, "/");
  const description = dictionaries[locale].hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, url: "/" },
  };
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
