import { cookies, headers } from "next/headers";
import { FALLBACK_LOCALE, LANGUAGE_COOKIE, isLocale, type Locale } from "./constants";

export async function resolveInitialLocale(): Promise<Locale> {
  const savedLang = (await cookies()).get(LANGUAGE_COOKIE)?.value;
  if (isLocale(savedLang)) return savedLang;

  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  return acceptLanguage.toLowerCase().includes("ko") ? "ko" : FALLBACK_LOCALE;
}
