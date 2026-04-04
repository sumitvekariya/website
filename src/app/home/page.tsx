"use client";

import { useEffect } from "react";

/** Nav says “Home” but the app lives at `/` + `#intro`; `/home` is a common mistaken URL. */
export default function HomeAliasPage() {
  useEffect(() => {
    window.location.replace("/#intro");
  }, []);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-4 text-sm text-foreground/50">
      Redirecting…
    </main>
  );
}
