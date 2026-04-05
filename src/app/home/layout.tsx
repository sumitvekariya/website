import type { Metadata } from "next";
import { site } from "@/content/site";

/** `/home` only exists to redirect mistaken URLs; keep it out of the index. */
export const metadata: Metadata = {
  title: "Home",
  description: `Redirect to the home profile for ${site.name}.`,
  robots: { index: false, follow: true },
};

export default function HomeAliasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
