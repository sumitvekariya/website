import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * `/home` only exists to redirect mistaken URLs to `/#intro`. We use:
 *   1. A `<meta http-equiv="refresh">` (React 19 hoists it into <head>) — works
 *      before paint and with JS disabled.
 *   2. A tiny inline script as a faster client redirect.
 *   3. A visible link for non-JS clients that ignore the meta refresh.
 */
export const metadata: Metadata = {
  title: "Home",
  description: `Redirect to the home profile for ${site.name}.`,
  robots: { index: false, follow: true },
};

export default function HomeAliasPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/#intro" />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(typeof window!=='undefined'){window.location.replace('/#intro')}}catch(e){}",
        }}
      />
      <main className="flex min-h-[50vh] items-center justify-center px-4 text-sm text-foreground/70">
        <p>
          Redirecting to{" "}
          <Link
            href="/#intro"
            className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60"
          >
            home
          </Link>
          …
        </p>
      </main>
    </>
  );
}
