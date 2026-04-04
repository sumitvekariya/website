import Link from "next/link";
import { site } from "@/content/site";

const navFocus =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-2xl flex-col gap-2 px-[max(1.25rem,env(safe-area-inset-left))] py-3 pr-[max(1.25rem,env(safe-area-inset-right))] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link
          href="#intro"
          className={`shrink-0 text-sm font-medium tracking-tight text-foreground hover:opacity-80 ${navFocus}`}
        >
          {site.name.split(" ")[0]}
          <span className="text-foreground/50">.</span>
        </Link>
        <nav
          className="-mx-1 flex gap-x-1 gap-y-1 overflow-x-auto pb-0.5 text-[0.8125rem] text-foreground/70 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0"
          aria-label="On this page"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-sm px-2 py-1.5 hover:text-foreground sm:min-h-0 sm:py-0.5 ${navFocus}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
