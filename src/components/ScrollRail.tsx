"use client";

import { useEffect, useState } from "react";

type RailItem = { id: string; label: string };

/**
 * Sticky right-side section indicator. Visible only on wide viewports (xl+).
 * Positioned absolutely relative to a `relative` ancestor so it never overlaps
 * the centered main column.
 */
export function ScrollRail({ items }: { items: readonly RailItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <aside
      aria-label="Section navigation"
      className="pointer-events-none absolute left-full top-0 hidden h-full pl-10 xl:block"
    >
      <ul className="pointer-events-auto sticky top-32 w-36 space-y-1.5 font-mono text-[0.7rem]">
        {items.map((it) => {
          const on = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={on ? "true" : undefined}
                className={`group flex items-center gap-2.5 py-0.5 transition-colors ${
                  on
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden
                  className={`inline-block h-px transition-[width,background-color] duration-150 ease-out ${
                    on ? "w-6 bg-foreground" : "w-3 bg-foreground/35 group-hover:bg-foreground/65"
                  }`}
                />
                <span className="truncate">{it.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
