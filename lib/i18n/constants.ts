export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

// Fallback used for the static build (no per-request server) and until the
// client-side check in LanguageProvider corrects it. Korean since that's the
// primary market — search engine crawlers index whatever this resolves to.
export const FALLBACK_LOCALE: Locale = "ko";

export const LANGUAGE_COOKIE = "rad_lang";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
