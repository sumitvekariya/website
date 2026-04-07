import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

/** Inter for long-form body (Refined-style pairing); Geist for display / UI density. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  /**
   * Browsers often request /favicon.ico by convention; keep public/favicon.ico in sync (npm run favicon).
   * SVG uses paths only — literal text in favicons is unreliable in Chromium.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: site.name,
    description: site.metaDescription,
    type: "website",
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    images: [{ url: "/apple-touch-icon.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.metaDescription,
    images: ["/apple-touch-icon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: siteUrl,
      description: site.metaDescription,
    },
    {
      "@type": "Person",
      name: site.name,
      url: siteUrl,
      jobTitle: site.role,
      sameAs: site.links.map((l) => l.href),
    },
  ],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-transparent text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
