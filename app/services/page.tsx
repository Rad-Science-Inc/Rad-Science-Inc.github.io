import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { dictionaries, getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  const title = getPageTitle(locale, "/services");
  const description = dictionaries[locale].pageHeaders.services.subtitle;
  return {
    title,
    description,
    alternates: { canonical: "/services" },
    openGraph: { title, description, url: "/services" },
  };
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader page="services" />
      <Services hideHeader />
    </>
  );
}
