import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-foreground/10 pt-14 first:border-t-0 first:pt-0${className ? ` ${className}` : ""}`}
    >
      <header className="mb-8">
        <h2 className="font-display text-[1.2rem] font-semibold tracking-tight text-foreground pb-4 border-b border-foreground/10">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
