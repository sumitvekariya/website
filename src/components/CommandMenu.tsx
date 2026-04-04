"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { site } from "@/content/site";

const paletteItems = [
  ...site.nav.map((item) => ({ label: item.label, href: item.href, kind: "section" as const })),
  ...site.links.map((l) => ({ label: l.label, href: l.href, kind: "link" as const })),
  {
    label: "Email",
    href: `mailto:${site.email}`,
    kind: "link" as const,
  },
  {
    label: "Download resume (PDF)",
    href: site.resumePdfPath,
    kind: "link" as const,
  },
];

const linkFocusClass =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" data-command-menu-open>
      <button
        type="button"
        className="absolute inset-0 h-full w-full border-0 bg-black/40 backdrop-blur-[2px] motion-reduce:backdrop-blur-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/40"
        aria-label="Close menu"
        onClick={close}
      />
      <div
        className="pointer-events-none absolute inset-0 flex justify-center overflow-y-auto overscroll-y-contain p-[max(1rem,env(safe-area-inset-top))] pt-[min(12vh,8rem)] pb-[max(1rem,env(safe-area-inset-bottom))]"
        role="presentation"
      >
        <div
          className="pointer-events-auto flex max-h-[min(60vh,28rem)] w-full max-w-md flex-col overflow-hidden rounded-lg border border-foreground/15 bg-background shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            id={titleId}
            className="border-b border-foreground/10 px-3 py-2.5 text-[0.75rem] leading-snug text-foreground/55"
          >
            Jump to —{" "}
            <kbd className="rounded border border-foreground/20 px-1 font-mono text-[0.7rem]">
              ⌘&nbsp;K
            </kbd>{" "}
            /{" "}
            <kbd className="rounded border border-foreground/20 px-1 font-mono text-[0.7rem]">
              Ctrl&nbsp;K
            </kbd>{" "}
            to toggle · Esc to close
          </div>
          <ul className="max-h-[min(52vh,24rem)] overflow-y-auto overscroll-y-contain py-1">
            {paletteItems.map((item) => (
              <li key={`${item.kind}-${item.href}-${item.label}`}>
                <a
                  href={item.href}
                  className={`flex min-h-11 items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-foreground/5 ${linkFocusClass}`}
                  onClick={close}
                >
                  <span>{item.label}</span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-foreground/40">
                    {item.kind}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
