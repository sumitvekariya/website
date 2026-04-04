import { existsSync } from "fs";
import { join } from "path";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { CommandMenu } from "@/components/CommandMenu";
import { site } from "@/content/site";

const resumeOnDisk = existsSync(
  join(process.cwd(), "public", "Sumit_Vekariya_Resume.pdf"),
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CommandMenu />
      <main id="main" className="mx-auto max-w-2xl px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(6rem,env(safe-area-inset-bottom))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-10">
        <section id="intro" className="scroll-mt-28 space-y-5">
          <p className="font-mono text-[0.8125rem] tabular-nums text-foreground/45">
            {site.location}
          </p>
          <h1 className="text-[1.65rem] font-medium leading-snug tracking-tight text-pretty sm:text-[1.85rem]">
            {site.name}
            <span className="text-foreground/50"> — </span>
            <span className="text-foreground/85">{site.role}</span>
          </h1>
          <p className="max-w-prose text-[0.95rem] leading-relaxed text-foreground/80">
            {site.summary}
          </p>
          <p className="max-w-prose text-[0.875rem] leading-relaxed text-foreground/55">
            {site.focusAreas}
          </p>
          <p className="max-w-prose text-[0.875rem] leading-relaxed text-foreground/55">
            {site.personalNote}
          </p>
          <p className="pt-2 font-mono text-[0.75rem] text-foreground/40">
            {site.keyboardHint}{" "}
            <kbd className="rounded border border-foreground/20 px-1">⌘ K</kbd> /{" "}
            <kbd className="rounded border border-foreground/20 px-1">Ctrl K</kbd>
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

          <Section id="writing" n="03" title="Writing">
            <ul className="space-y-4">
              {site.writing.map((w) => (
                <li key={w.title}>
                  <a
                    href={w.href}
                    className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-[0.9rem] font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors group-hover:decoration-foreground/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
                      {w.title}
                    </span>
                    <span className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/40">
                      {w.year}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="open-source" n="04" title="Open source">
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

          <Section id="skills" n="05" title="Technical skills">
            <ul className="list-none space-y-2.5 text-[0.9rem] leading-relaxed text-foreground/75">
              {site.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section id="education" n="06" title="Education & certifications">
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

          <Section id="contact" n="07" title="Contact">
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
