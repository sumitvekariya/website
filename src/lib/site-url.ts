/** Canonical site origin for metadata, sitemap, and JSON-LD. Override in CI/deploy via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://sumitvekariya.vercel.app";
}
