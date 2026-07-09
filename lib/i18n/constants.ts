export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

// Fallback used when neither a saved cookie nor Accept-Language points to Korean
export const FALLBACK_LOCALE: Locale = "en";

export const LANGUAGE_COOKIE = "rad_lang";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
