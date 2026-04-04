import Link from "next/link";
import { NavIcon } from "@/components/NavIcon";
import { site } from "@/content/site";
import { SiteHeaderNavNested } from "@/components/SiteHeaderNavNested";
import { ThemeToggle } from "@/components/ThemeToggle";

const navFocus =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-[max(1.25rem,env(safe-area-inset-left))] py-2.5 pr-[max(1.25rem,env(safe-area-inset-right))]">
        <Link
          href="/#intro"
          className={`shrink-0 text-sm font-medium tracking-tight text-foreground hover:opacity-80 ${navFocus}`}
        >
          {site.name.split(" ")[0]}
          <span className="text-foreground/50">.</span>
        </Link>
        <nav
          className="min-w-0 flex-1 text-[0.8125rem] text-foreground/70"
          aria-label="Site"
        >
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-1 gap-y-1.5 pl-2 sm:gap-x-2">
            {site.nav.map((item) =>
              "children" in item && item.children.length > 0 ? (
                <SiteHeaderNavNested
                  key={item.href}
                  item={item}
                  navFocus={navFocus}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-1.5 py-1.5 hover:text-foreground sm:px-2 ${navFocus}`}
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
