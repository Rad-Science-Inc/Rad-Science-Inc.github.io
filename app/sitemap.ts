import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://radscience.ai.kr";
const ROUTES = ["", "/about", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
