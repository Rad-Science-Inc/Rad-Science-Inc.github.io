import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  return {
    title: getPageTitle(locale, "/portfolio"),
    description: "국내 주요 의료기관과 함께 쌓아온 Rad Science의 연구 성과와 납품 실적입니다.",
  };
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader page="portfolio" />
      <Portfolio hideHeader />
    </>
  );
}
