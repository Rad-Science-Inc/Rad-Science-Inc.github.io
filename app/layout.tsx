import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { resolveInitialLocale } from "@/lib/i18n/server";
import { pretendard } from "@/lib/fonts";

const SITE_URL = "https://radscience.ai.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "래드사이언스 | 의료 연구 소프트웨어 & 딥러닝 데이터 분석",
    template: "%s | 래드사이언스",
  },
  description: "Rad Science는 의료 연구 소프트웨어 공급 및 딥러닝 기반 데이터 분석 서비스를 제공하는 전문 기업입니다.",
  keywords: "의료 소프트웨어, 딥러닝, 데이터 분석, 의료 AI, Rad Science, 래드사이언스",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rad Science",
    description: "의료 연구 소프트웨어 & 딥러닝 데이터 분석 전문 기업",
    url: SITE_URL,
    siteName: "Rad Science",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rad Science",
    description: "의료 연구 소프트웨어 & 딥러닝 데이터 분석 전문 기업",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rad Science",
  alternateName: "래드사이언스",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-blue.png`,
  description: "방사선 의학(Radiology)과 데이터 과학(Data Science)의 결합에서 출발한 의료 AI 전문 기업",
  email: "contact@radscience.ai.kr",
  telephone: "+82-70-7954-4150",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressLocality: "서울특별시 양천구",
    streetAddress: "중앙로32길 55 306호 2A",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveInitialLocale();

  return (
    <html lang={lang} className={`scroll-smooth ${pretendard.variable}`}>
      <body className="antialiased flex flex-col min-h-screen relative">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteBackground />
        <LanguageProvider initialLang={lang}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
