import Link from "next/link";
import { NavIcon } from "@/components/NavIcon";
import { site } from "@/content/site";
import { SiteHeaderNavNested } from "@/components/SiteHeaderNavNested";
import { ThemeToggle } from "@/components/ThemeToggle";
import { focusRing } from "@/lib/focus";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-[max(1.25rem,env(safe-area-inset-left))] py-3 pr-[max(1.25rem,env(safe-area-inset-right))]">
        <Link
          href="/#intro"
          className={`shrink-0 font-mono text-[0.8125rem] font-medium tracking-tight text-foreground/70 transition-colors hover:text-accent ${focusRing}`}
        >
          {site.name}
        </Link>
        <nav
          className="min-w-0 flex-1 text-[0.8125rem] text-foreground/55"
          aria-label="Site"
        >
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-0.5 gap-y-1 pl-2">
            {site.nav.map((item) =>
              "children" in item && item.children.length > 0 ? (
                <SiteHeaderNavNested
                  key={item.href}
                  item={item}
                  navFocus={focusRing}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-1.5 transition-colors hover:text-foreground ${focusRing}`}
                >
                  <NavIcon href={item.href} />
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
