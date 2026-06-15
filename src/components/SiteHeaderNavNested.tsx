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
    const onDoc = (e: Event) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-flex items-stretch">
      <Link
        href={item.href}
        className={`group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-1.5 transition-colors hover:text-foreground ${navFocus}`}
      >
        <NavIcon href={item.href} />
        {item.label}
      </Link>
      <button
        type="button"
        id={`${menuId}-trigger`}
        className={`inline-flex items-center rounded-sm px-1 py-1.5 text-foreground/40 transition-colors hover:text-foreground ${navFocus}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-label={`${item.label} sections`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          className={`h-3 w-3 shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
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
          className="absolute right-0 top-[calc(100%+0.25rem)] z-50 max-h-[min(70vh,22rem)] min-w-44 overflow-y-auto overscroll-y-contain rounded-lg border border-foreground/10 bg-background py-1 shadow-lg"
        >
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              role="menuitem"
              className={`group flex items-center gap-2.5 px-3 py-2 text-[0.8125rem] text-foreground/65 transition-colors hover:bg-foreground/4 hover:text-foreground ${navFocus}`}
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
