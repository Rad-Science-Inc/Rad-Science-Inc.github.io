import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { dictionaries, getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  const title = getPageTitle(locale, "/about");
  const description = dictionaries[locale].pageHeaders.about.subtitle;
  return {
    title,
    description,
    alternates: { canonical: "/about" },
    openGraph: { title, description, url: "/about" },
  };
}

export default function AboutPage() {
  return (
    <>
      <PageHeader page="about" />
      <About hideHeader />
    </>
  );
}
