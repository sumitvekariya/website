import { existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { CommandMenu } from "@/components/CommandMenu";
import { WritingFilter } from "@/components/WritingFilter";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: getSiteUrl() },
};

const resumeOnDisk = existsSync(
  join(process.cwd(), "public", "Sumit_Vekariya_Resume.pdf"),
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CommandMenu />
      <main id="main" className="mx-auto max-w-2xl px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(6rem,env(safe-area-inset-bottom))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-10">
        <section id="intro" className="scroll-mt-28 space-y-4">
          <p className="font-mono text-[0.8125rem] tabular-nums text-foreground/45">
            {site.location}
          </p>
          <h1 className="space-y-1.5 text-pretty">
            <span className="block text-[1.65rem] font-medium leading-tight tracking-tight sm:text-[1.75rem]">
              {site.name}
            </span>
            <span className="block text-[1rem] font-normal leading-snug text-foreground/65 sm:text-[1.05rem]">
              {site.role}
            </span>
            <a
              href={site.handleHref}
              className="mt-1 inline-block font-mono text-[0.8125rem] tracking-tight text-foreground/45 underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground/70 hover:decoration-foreground/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              rel="me noreferrer"
              target="_blank"
            >
              @{site.handle}
            </a>
          </h1>
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-foreground/80">
            {site.introLead}
          </p>
          <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/65">
            {site.introDirection}
          </p>
          <p className="max-w-prose text-[0.8125rem] leading-relaxed text-foreground/50">
            {site.introAside}
          </p>
          <p className="pt-1 font-mono text-[0.7rem] text-foreground/40">
            <kbd className="rounded border border-foreground/20 px-1 py-px">⌘ K</kbd> /{" "}
            <kbd className="rounded border border-foreground/20 px-1 py-px">Ctrl K</kbd>
            <span className="ml-1.5">— all sections</span>
          </p>
        </section>

        <div className="mt-16 space-y-16">
          <Section id="experience" n="01" title="Experience">
            <ul className="space-y-10">
              {site.experience.map((job) => (
                <li key={job.company + job.range}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      {"href" in job && job.href ? (
                        <a
                          href={job.href}
                          className="font-medium text-foreground underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground/55 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-medium">{job.company}</span>
                      )}
                      <span className="text-foreground/50"> — </span>
                      <span className="text-[0.9rem] text-foreground/70">
                        {job.title}
                      </span>
                    </div>
                    <time className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/45">
                      {job.range}
                    </time>
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/75">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" n="02" title="Projects">
            <ul className="space-y-8">
              {site.projects.map((p) => (
                <li key={p.name}>
                  <div className="flex flex-col gap-1">
                    {"href" in p && typeof p.href === "string" ? (
                      <a
                        href={p.href}
                        className="w-fit font-medium text-foreground underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground/55 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      >
                        {p.name}
                      </a>
                    ) : (
                      <span className="font-medium">{p.name}</span>
                    )}
                    <p className="font-mono text-[0.75rem] text-foreground/45">
                      {p.tag}
                    </p>
                    <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
                      {p.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="ai-research" n="03" title="AI & research">
            <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
              {site.aiResearch.lead}
            </p>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/80">
              Research themes
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/75">
              {site.aiResearch.themes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/80">
              What I’m doing now
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-foreground/75">
              {site.aiResearch.efforts.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] font-medium text-foreground/80">
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
                          className="w-fit font-medium text-foreground underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground/55 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                        >
                          {p.name}
                        </a>
                      ) : (
                        <span className="font-medium">{p.name}</span>
                      )}
                      <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
                        {p.note}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section id="writing" n="04" title="Writing">
            <p className="mb-1 max-w-prose text-[0.8125rem] leading-relaxed text-foreground/55">
              Filter by topic — each piece can appear under more than one tag.
            </p>
            <WritingFilter items={site.writing} tagDefs={site.writingTagDefs} />
          </Section>

          <Section id="residencies" n="05" title="Residencies">
            <ul className="space-y-8">
              {site.residencies.map((r) => (
                <li key={r.name}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <a
                      href={r.href}
                      className="font-medium text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    >
                      {r.name}
                    </a>
                    <span className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/45">
                      {r.placeTime}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.8125rem] text-foreground/50">{r.context}</p>
                  <p className="mt-2 max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
                    {r.blurb}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="open-source" n="06" title="Open source">
            <p className="max-w-prose text-[0.9rem] leading-relaxed text-foreground/75">
              {site.oss.intro}
            </p>
            <ul className="space-y-3 pt-2">
              {site.oss.items.map((o) => (
                <li key={o.org}>
                  <a
                    href={o.href}
                    className="text-[0.9rem] text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    <span className="font-medium">{o.org}</span>
                    <span className="text-foreground/50"> — </span>
                    <span className="text-foreground/70">{o.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="pt-4 text-[0.875rem] leading-relaxed text-foreground/60">
              {site.hackathons}
            </p>
          </Section>

          <Section id="skills" n="07" title="Technical skills">
            <ul className="list-none space-y-2.5 text-[0.9rem] leading-relaxed text-foreground/75">
              {site.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section id="education" n="08" title="Education & certifications">
            <ul className="list-disc space-y-2 pl-5 text-[0.9rem] text-foreground/75">
              {site.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <div className="pt-6">
              <p className="text-[0.8125rem] font-medium text-foreground/80">
                Key achievements
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.875rem] leading-relaxed text-foreground/65">
                {site.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="contact" n="09" title="Contact">
            <p className="text-[0.9rem] text-foreground/75">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground/55 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {site.email}
              </a>
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-4 text-[0.9rem]">
              {site.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {resumeOnDisk ? (
              <p className="pt-6">
                <a
                  href={site.resumePdfPath}
                  className="text-[0.9rem] font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/55 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Download resume (PDF)
                </a>
              </p>
            ) : null}
          </Section>
        </div>

        <footer className="mt-20 border-t border-foreground/10 pt-8 font-mono text-[0.75rem] text-foreground/40">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </main>
    </>
  );
}
