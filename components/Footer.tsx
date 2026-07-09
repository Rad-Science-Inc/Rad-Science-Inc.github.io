"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { playFont } from "@/lib/fonts";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const t = dict.footer;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-blue.png" alt="Rad Science" className="h-7.5 w-auto" />
              <span className={`${playFont.className} text-white text-2xl`}>
                Rad <span className="text-blue-400">Science</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              {t.taglineLine1}<br />{t.taglineLine2}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t.quickLinksTitle}</p>
            <ul className="flex flex-col gap-2">
              {[
                [t.links.services, "/services"],
                [t.links.about, "/about"],
                // Temporarily disabled — uncomment to re-enable the portfolio footer link
                // [t.links.portfolio, "/portfolio"],
                [t.links.contact, "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-blue-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t.contactTitle}</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                contact@radscience.ai.kr
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                010-5968-1673
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                {t.addressValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>{t.copyright}</p>
          <p>{t.bizReg}</p>
        </div>
      </div>
    </footer>
  );
}
