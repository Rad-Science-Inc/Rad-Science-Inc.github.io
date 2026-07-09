import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  return {
    title: getPageTitle(locale, "/about"),
    description: "Rad Science의 비전, 가치, 그리고 성장 이야기를 소개합니다.",
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
