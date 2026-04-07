import type { Metadata } from "next";
import Link from "next/link";
import { CommandMenu } from "@/components/CommandMenu";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

const navFocus =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const lifeDescription = site.life.intro.slice(0, 155);

export const metadata: Metadata = {
  title: "Life",
  description: lifeDescription,
  alternates: { canonical: "/life" },
  openGraph: {
    title: `Life — ${site.name}`,
    description: lifeDescription,
    url: `${getSiteUrl()}/life`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Life — ${site.name}`,
    description: lifeDescription,
  },
};

export default function LifePage() {
  const { life } = site;

  return (
    <>
      <SiteHeader />
      <CommandMenu />
      <main
        id="main"
        className="mx-auto max-w-3xl px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(6rem,env(safe-area-inset-bottom))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-10 sm:pt-12"
      >
        <header className="space-y-3">
          <p className="font-mono text-[0.8125rem] tabular-nums text-foreground/45">
            <Link
              href="/"
              className={`text-foreground/55 underline decoration-foreground/20 underline-offset-4 hover:decoration-foreground/45 ${navFocus}`}
            >
              Home
            </Link>
            <span className="text-foreground/35"> · </span>
            {life.title}
          </p>
          <h1 className="font-display text-[1.7rem] font-medium leading-[1.15] tracking-[-0.02em] text-pretty sm:text-[2rem]">
            {life.title}
          </h1>
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-foreground/75">
            {life.intro}
          </p>
        </header>

        <nav
          className="mt-8 flex flex-wrap gap-2 border-b border-foreground/10 pb-4"
          aria-label="Life sections"
        >
          {life.sectionNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full border border-foreground/15 px-3 py-1.5 text-[0.8125rem] font-medium text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground ${navFocus}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-16">
          <Section id="books" n="01" title="Books">
            <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
              {life.books.intro}
            </p>
            <ul className="space-y-10">
              {life.books.items.map((b) => (
                <li key={b.title}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <div className="relative h-[5.76rem] w-[3.84rem] shrink-0 overflow-hidden rounded-sm border border-foreground/10 bg-foreground/5 shadow-sm sm:h-[6.48rem] sm:w-[4.32rem]">
                      {/* eslint-disable-next-line @next/next/no-img-element -- remote Open Library covers; static export */}
                      <img
                        src={b.coverSrc}
                        alt={`Cover: ${b.title}`}
                        width={69}
                        height={104}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        sizes="(min-width: 640px) 4.32rem, 3.84rem"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col gap-1">
                      <a
                        href={b.href}
                        className={`w-fit text-[0.9rem] font-medium text-foreground underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground/55 ${navFocus}`}
                      >
                        {b.title}
                      </a>
                      <p className="font-mono text-[0.75rem] text-foreground/45">
                        {b.author}
                      </p>
                      <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
                        {b.note}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="travel" n="02" title="Travel">
            <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
              {life.travel.intro}
            </p>
            <ul className="space-y-8">
              {life.travel.items.map((t, i) => (
                <li key={`${t.place}-${i}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-[0.9rem] font-medium text-foreground">
                      {t.place}
                    </span>
                    {"year" in t && t.year ? (
                      <span className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/45">
                        {t.year}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
                    {t.note}
                  </p>
                  {"href" in t && typeof t.href === "string" ? (
                    <a
                      href={t.href}
                      className={`mt-2 inline-block text-[0.875rem] text-foreground underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground/55 ${navFocus}`}
                    >
                      Link
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="mt-20 border-t border-foreground/10 pt-8 font-mono text-[0.75rem] text-foreground/40">
          <Link
            href="/#intro"
            className={`underline decoration-foreground/20 underline-offset-4 hover:decoration-foreground/45 ${navFocus}`}
          >
            ← Back to home
          </Link>
        </footer>
      </main>
    </>
  );
}
