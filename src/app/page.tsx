import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { CommandMenu } from "@/components/CommandMenu";
import { WritingFilter } from "@/components/WritingFilter";
import { ScrollRail } from "@/components/ScrollRail";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: getSiteUrl() },
};

const railItems = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "ai-research", label: "AI & research" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "residencies", label: "Residencies" },
  { id: "open-source", label: "Open source" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Highlight({
  tone,
  children,
}: {
  tone: "a" | "b";
  children: React.ReactNode;
}) {
  return (
    <span
      className={`rounded-[3px] px-1 box-decoration-clone ${
        tone === "a" ? "bg-(--color-highlight-a)" : "bg-(--color-highlight-b)"
      }`}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CommandMenu />
      <main
        id="main"
        className="relative mx-auto max-w-3xl px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(6rem,env(safe-area-inset-bottom))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-10 sm:pt-12"
      >
        <ScrollRail items={railItems} />

        <header id="intro" className="scroll-mt-28">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/60">
            {site.location}
            <span className="mx-2 text-foreground/30">·</span>
            <span className="text-foreground/70">{site.availability}</span>
          </p>

          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.028em] text-pretty sm:text-[3.5rem]">
            {site.name}
          </h1>

          <p className="mt-3 max-w-prose text-pretty text-[1.05rem] leading-snug text-foreground/85 sm:text-[1.15rem]">
            {site.tagline.lead}{" "}
            <Highlight tone="a">{site.tagline.highlightA}</Highlight>
            <span className="mx-2 text-foreground/45">·</span>
            <span className="text-foreground/75">{site.tagline.bridge}</span>{" "}
            <Highlight tone="b">{site.tagline.highlightB}</Highlight>
          </p>

          <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-foreground/80">
            {site.introLead}
          </p>

          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="At-a-glance skills">
            {site.skillChips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-foreground/20 bg-foreground/[0.02] px-2.5 py-0.5 font-mono text-[0.7rem] text-foreground/75"
              >
                {c}
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-2 text-[0.875rem] leading-relaxed text-foreground/75" aria-label="Highlights">
            {site.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden className="mt-1.5 inline-block h-px w-4 shrink-0 bg-foreground/45" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <nav
            aria-label="Jump to section"
            className="mt-7 -mx-1 flex flex-wrap items-center gap-x-1 gap-y-1 text-[0.8125rem]"
          >
            {site.heroAnchors.map((a, i) => (
              <span key={a.href} className="inline-flex items-center">
                {i > 0 ? (
                  <span aria-hidden className="text-foreground/30">
                    /
                  </span>
                ) : null}
                <a
                  href={a.href}
                  className="rounded-sm px-1.5 py-0.5 text-foreground/70 underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {a.label}
                </a>
              </span>
            ))}
          </nav>

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.875rem]">
            <a
              href={site.resumePdfPath}
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Download CV
            </a>
            <span aria-hidden className="text-foreground/30">
              ·
            </span>
            <a
              href={`mailto:${site.email}`}
              className="text-foreground/80 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Email
            </a>
            <span aria-hidden className="text-foreground/30">
              ·
            </span>
            <a
              href={site.handleHref}
              rel="me noopener noreferrer"
              target="_blank"
              className="font-mono text-[0.8125rem] text-foreground/65 underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              @{site.handle}
            </a>
          </div>

          <p className="mt-7 hidden font-mono text-[0.7rem] text-foreground/60 sm:block">
            <kbd className="rounded border border-foreground/25 px-1 py-px">
              ⌘ K
            </kbd>{" "}
            /{" "}
            <kbd className="rounded border border-foreground/25 px-1 py-px">
              Ctrl K
            </kbd>
            <span className="ml-1.5">— all sections</span>
          </p>
        </header>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          <Section id="experience" title="Experience">
            <ul className="space-y-10">
              {site.experience.map((job) => (
                <li key={job.company + job.range}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      {"href" in job && job.href ? (
                        <a
                          href={job.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-medium">{job.company}</span>
                      )}
                      <span className="text-foreground/55"> — </span>
                      <span className="text-[0.9rem] text-foreground/75">
                        {job.title}
                      </span>
                    </div>
                    <time className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/60">
                      {job.range}
                    </time>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/80">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="ai-research" title="AI & research">
            <p className="max-w-prose text-[0.9375rem] leading-relaxed text-foreground/80">
              {site.aiResearch.lead}
            </p>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/85">
              Research themes
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/80">
              {site.aiResearch.themes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/85">
              What I&rsquo;m doing now
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/80">
              {site.aiResearch.efforts.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/85">
              AI-adjacent projects
            </p>
            <ul className="mt-3 space-y-6">
              {site.aiResearch.adjacentProjects.map((p) => {
                const href =
                  "href" in p && typeof p.href === "string" ? p.href : undefined;
                return (
                  <li key={p.name}>
                    <div className="flex flex-col gap-1">
                      {href !== undefined ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {p.name}
                        </a>
                      ) : (
                        <span className="font-medium">{p.name}</span>
                      )}
                      <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/80">
                        {p.note}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section id="projects" title="Projects">
            <ul className="space-y-8">
              {site.projects.map((p) => (
                <li key={p.name}>
                  <div className="flex flex-col gap-1">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    >
                      {p.name}
                    </a>
                    <p className="font-mono text-[0.75rem] text-foreground/60">
                      {p.tag}
                    </p>
                    <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/80">
                      {p.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="writing" title="Writing">
            <p className="mb-1 max-w-prose text-[0.8125rem] leading-relaxed text-foreground/65">
              Filter by topic — each piece can appear under more than one tag.
            </p>
            <WritingFilter items={site.writing} tagDefs={site.writingTagDefs} />
          </Section>

          <Section id="residencies" title="Residencies">
            <ul className="space-y-8">
              {site.residencies.map((r) => (
                <li key={r.name}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    >
                      {r.name}
                    </a>
                    <span className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/60">
                      {r.placeTime}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.8125rem] text-foreground/65">{r.context}</p>
                  <p className="mt-2 max-w-prose text-[0.9rem] leading-relaxed text-foreground/80">
                    {r.blurb}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="open-source" title="Open source">
            <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/80">
              {site.oss.intro}
            </p>
            <ul className="space-y-3 pt-2">
              {site.oss.items.map((o) => (
                <li key={o.org}>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.9rem] text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    <span className="font-medium">{o.org}</span>
                    <span className="text-foreground/55"> — </span>
                    <span className="text-foreground/75">{o.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="pt-4 text-[0.875rem] leading-relaxed text-foreground/70">
              {site.hackathons}
            </p>
          </Section>

          <Section id="skills" title="Technical skills">
            <ul className="list-none space-y-2.5 text-[0.9rem] leading-relaxed text-foreground/80">
              {site.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="Education & certifications">
            <ul className="list-disc space-y-2 pl-5 text-[0.9rem] text-foreground/80">
              {site.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <p className="text-[0.9rem] text-foreground/80">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {site.email}
              </a>
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-4 text-[0.9rem]">
              {site.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="pt-6">
              <a
                href={site.resumePdfPath}
                className="text-[0.9rem] font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Download CV (PDF)
              </a>
            </p>
          </Section>
        </div>

        <footer className="mt-20 border-t border-foreground/15 pt-8 font-mono text-[0.75rem] text-foreground/60">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </main>
    </>
  );
}
