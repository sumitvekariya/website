"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NavIcon } from "@/components/NavIcon";

type NavNestedItem = {
  readonly href: string;
  readonly label: string;
  readonly children: readonly { readonly href: string; readonly label: string }[];
};

export function SiteHeaderNavNested({
  item,
  navFocus,
}: {
  item: NavNestedItem;
  navFocus: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-flex items-stretch">
      <Link
        href={item.href}
        className={`group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-1.5 py-1.5 hover:text-foreground sm:px-2 ${navFocus}`}
      >
        <NavIcon href={item.href} />
        {item.label}
      </Link>
      <button
        type="button"
        id={`${menuId}-trigger`}
        className={`inline-flex items-center rounded-sm px-0.5 py-1.5 text-foreground/45 hover:text-foreground sm:px-1 ${navFocus}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-label={`${item.label} sections`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          className={`h-3 w-3 shrink-0 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3 4.5 6 7.5 9 4.5" />
        </svg>
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="absolute right-0 top-[calc(100%+0.125rem)] z-50 max-h-[min(70vh,22rem)] min-w-38 overflow-y-auto overscroll-y-contain rounded-md border border-foreground/15 bg-background py-1 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
        >
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              role="menuitem"
              className={`group flex items-center gap-2.5 px-3 py-2 text-[0.8125rem] text-foreground/80 hover:bg-foreground/5 hover:text-foreground ${navFocus}`}
              onClick={() => setOpen(false)}
            >
              <NavIcon href={c.href} />
              {c.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
