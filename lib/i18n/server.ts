import { FALLBACK_LOCALE, type Locale } from "./constants";

// Static export (GitHub Pages) has no per-request server, so cookies()/headers()
// aren't available — every page is rendered once at build time. The real locale
// is picked up client-side by LanguageProvider right after hydration instead.
export async function resolveInitialLocale(): Promise<Locale> {
  return FALLBACK_LOCALE;
}
