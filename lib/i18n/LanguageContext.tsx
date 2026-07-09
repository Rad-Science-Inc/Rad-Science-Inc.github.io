"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LANGUAGE_COOKIE, type Locale } from "./constants";
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
