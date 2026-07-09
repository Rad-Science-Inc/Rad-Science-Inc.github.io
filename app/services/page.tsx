import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveInitialLocale();
  return {
    title: getPageTitle(locale, "/services"),
    description: "의료 연구 소프트웨어 공급 및 딥러닝 데이터 분석 서비스를 소개합니다.",
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
