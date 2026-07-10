"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGE_COOKIE, isLocale, type Locale } from "./constants";
import { dictionaries } from "./dictionaries";

type LanguageContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  dict: (typeof dictionaries)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Locale;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Locale>(initialLang);

  // The static build always renders with FALLBACK_LOCALE (no server per-request
  // cookie reading under GitHub Pages), so correct it client-side right after
  // hydration from the saved cookie or the browser's language.
  useEffect(() => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${LANGUAGE_COOKIE}=([^;]+)`));
    const saved = match?.[1];
    if (isLocale(saved)) {
      setLangState(saved);
    } else {
      setLangState(navigator.language.toLowerCase().includes("ko") ? "ko" : "en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  const value = useMemo(() => ({ lang, setLang, dict: dictionaries[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
