import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, n, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-foreground/10 pt-14 first:border-t-0 first:pt-0"
    >
      <div className="flex gap-6">
        <span
          className="select-none font-mono text-[0.8125rem] tabular-nums text-foreground/40 shrink-0"
          aria-hidden
        >
          {n}
        </span>
        <div className="min-w-0 flex-1 space-y-6">
          <h2 className="text-[1.05rem] font-medium tracking-tight text-pretty">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
