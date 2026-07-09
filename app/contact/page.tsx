import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  return {
    title: getPageTitle(locale, "/contact"),
    description: "Rad Science에 연구 협력 및 서비스 도입 문의를 남겨주세요.",
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
