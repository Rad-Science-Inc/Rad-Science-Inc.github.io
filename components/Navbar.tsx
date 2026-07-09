"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { playFont } from "@/lib/fonts";
import { getPageTitle } from "@/lib/i18n/dictionaries";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, setLang, dict } = useLanguage();

  const navLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/services", label: dict.nav.services },
    // Temporarily disabled — uncomment to re-enable the portfolio nav link
    // { href: "/portfolio", label: dict.nav.portfolio },
    { href: "/contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.title = getPageTitle(lang, pathname);
  }, [lang, pathname]);

  const navBg =
    isHome && !scrolled
      ? "bg-white/5 backdrop-blur-md border-b border-white/10"
      : "bg-slate-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-950/20";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-blue.png" alt="Rad Science" className="h-7.5 w-auto" />
          <span className={`${playFont.className} text-2xl tracking-tight text-white`}>
            Rad <span className="text-blue-400">Science</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative
                    after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-blue-300 after:transition-all
                    ${isActive
                      ? "text-blue-300 after:w-full"
                      : "text-white/70 hover:text-white after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Language Toggle (desktop) */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-semibold">
          {(["ko", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="relative cursor-pointer px-2.5 py-1 rounded-full"
            >
              {lang === l && (
                <motion.span
                  layoutId="lang-toggle-highlight"
                  className="absolute inset-0 rounded-full bg-blue-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${lang === l ? "text-white" : "text-white/50 hover:text-white"}`}>
                {l.toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={dict.nav.menuLabel}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-slate-900/95 backdrop-blur-xl border-b border-white/10`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  pathname === link.href ? "text-blue-300" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-1 self-start rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-semibold">
            {(["ko", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="relative cursor-pointer px-2.5 py-1 rounded-full"
              >
                {lang === l && (
                  <motion.span
                    layoutId="lang-toggle-highlight-mobile"
                    className="absolute inset-0 rounded-full bg-blue-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${lang === l ? "text-white" : "text-white/50 hover:text-white"}`}>
                  {l.toUpperCase()}
                </span>
              </button>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
