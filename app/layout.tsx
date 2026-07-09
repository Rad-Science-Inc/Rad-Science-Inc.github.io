import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { resolveInitialLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "래드사이언스 | 의료 연구 소프트웨어 & 딥러닝 데이터 분석",
  description: "Rad Science는 의료 연구 소프트웨어 공급 및 딥러닝 기반 데이터 분석 서비스를 제공하는 전문 기업입니다.",
  keywords: "의료 소프트웨어, 딥러닝, 데이터 분석, 의료 AI, Rad Science",
  openGraph: {
    title: "Rad Science",
    description: "의료 연구 소프트웨어 & 딥러닝 데이터 분석 전문 기업",
    url: "https://radscience.kr",
    siteName: "Rad Science",
    locale: "ko_KR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveInitialLocale();

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen relative">
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
