import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { dictionaries, getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  const title = getPageTitle(locale, "/contact");
  const description = dictionaries[locale].pageHeaders.contact.subtitle;
  return {
    title,
    description,
    alternates: { canonical: "/contact" },
    openGraph: { title, description, url: "/contact" },
  };
}

export default function ContactPage() {
  return (
    <>
      <PageHeader page="contact" />
      <Contact hideHeader />
    </>
  );
}
