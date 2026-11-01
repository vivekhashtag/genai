import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://genai-by-vivek.vercel.app");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/labs",
    ...Array.from({ length: 9 }, (_, i) => `/module${i}`),
    ...Array.from({ length: 8 }, (_, i) => `/labs/lab${i}`),
  ];
  return paths.map((p) => ({ url: `${base}${p}` }));
}
