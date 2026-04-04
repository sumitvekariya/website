"use client";

import { useMemo, useState } from "react";

export type WritingItem = {
  title: string;
  href: string;
  year: string;
  tags: readonly string[];
};

export type WritingTagDef = {
  id: string;
  label: string;
};

const ALL_ID = "all";

type WritingFilterProps = {
  items: readonly WritingItem[];
  tagDefs: readonly WritingTagDef[];
};

export function WritingFilter({ items, tagDefs }: WritingFilterProps) {
  const [active, setActive] = useState<string>(ALL_ID);

  const filtered = useMemo(() => {
    if (active === ALL_ID) return items;
    return items.filter((w) => w.tags.includes(active));
  }, [items, active]);

  const tabIds = useMemo(
    () => [ALL_ID, ...tagDefs.map((t) => t.id)],
    [tagDefs],
  );

  const labelFor = (id: string) =>
    id === ALL_ID ? "All" : tagDefs.find((t) => t.id === id)?.label ?? id;

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Filter writing by topic"
        className="flex flex-wrap gap-2"
      >
        {tabIds.map((id) => {
          const selected = active === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`writing-tab-${id}`}
              aria-selected={selected}
              aria-controls="writing-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(id)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const i = tabIds.indexOf(id);
                const next =
                  e.key === "ArrowRight"
                    ? tabIds[(i + 1) % tabIds.length]
                    : tabIds[(i - 1 + tabIds.length) % tabIds.length];
                setActive(next);
                document.getElementById(`writing-tab-${next}`)?.focus();
              }}
              className={`rounded-full border px-3 py-1.5 text-[0.8125rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                selected
                  ? "border-foreground/35 bg-foreground/8 text-foreground"
                  : "border-foreground/15 text-foreground/65 hover:border-foreground/25 hover:text-foreground/85"
              }`}
            >
              {labelFor(id)}
            </button>
          );
        })}
      </div>

      <div
        id="writing-panel"
        role="tabpanel"
        aria-labelledby={`writing-tab-${active}`}
      >
        {filtered.length === 0 ? (
          <p className="text-[0.875rem] text-foreground/55">
            No pieces in this category yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {filtered.map((w) => (
              <li key={w.title}>
                <a
                  href={w.href}
                  className="group flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-[0.9rem] font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors group-hover:decoration-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
                    {w.title}
                  </span>
                  <span className="shrink-0 font-mono text-[0.8125rem] tabular-nums text-foreground/40">
                    {w.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
