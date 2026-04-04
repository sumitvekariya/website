import type { ReactNode, SVGProps } from "react";

type IconSize = "sm" | "md";

const sizeClass: Record<IconSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
};

function Glyph({
  children,
  size,
  className,
}: SVGProps<SVGSVGElement> & {
  children: ReactNode;
  size: IconSize;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-foreground/45 transition-colors group-hover:text-foreground/70 ${sizeClass[size]} ${className ?? ""}`}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function iconForHref(href: string, size: IconSize): ReactNode {
  switch (href) {
    case "/#intro":
      return (
        <Glyph size={size}>
          <path d="M3 10.5 12 4l9 6.5" />
          <path d="M5 10v10h5v-6h4v6h5V10" />
        </Glyph>
      );
    case "/#experience":
      return (
        <Glyph size={size}>
          <rect x="3" y="7" width="18" height="13" rx="1.5" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
        </Glyph>
      );
    case "/#projects":
      return (
        <Glyph size={size}>
          <path d="M3 7.5 12 3l9 4.5" />
          <path d="M3 7.5V18a1.5 1.5 0 0 0 1.5 1.5H9" />
          <path d="M21 7.5V18a1.5 1.5 0 0 1-1.5 1.5H15" />
          <path d="M9 12h6M9 16h6" />
        </Glyph>
      );
    case "/#ai-research":
      return (
        <Glyph size={size}>
          <path d="M12 3a6 6 0 0 1 6 6v1a3 3 0 0 1-6 0V9a6 6 0 0 0-6 6" />
          <path d="M12 11v6M9 14h6" />
        </Glyph>
      );
    case "/#writing":
      return (
        <Glyph size={size}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </Glyph>
      );
    case "/#residencies":
      return (
        <Glyph size={size}>
          <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
        </Glyph>
      );
    case "/#open-source":
      return (
        <Glyph size={size}>
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6 2 12l6 6" />
        </Glyph>
      );
    case "/#skills":
      return (
        <Glyph size={size}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </Glyph>
      );
    case "/#education":
      return (
        <Glyph size={size}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3.5 4 6 4s6-2 6-4v-5" />
        </Glyph>
      );
    case "/#contact":
      return (
        <Glyph size={size}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </Glyph>
      );
    case "/life":
      return (
        <Glyph size={size}>
          <path d="M19 14c1.5-1 2.5-2.5 2.5-4A4.5 4.5 0 0 0 17 5.5c-1.5 0-3 .5-4 1.5-.5.5-1 1-1.5 1.5-.5-.5-1-1-1.5-1.5A5.5 5.5 0 0 0 2 9.5c0 2 1 3.5 2.5 4.5l7.5 5.5 7.5-5.5z" />
        </Glyph>
      );
    case "/life#books":
      return (
        <Glyph size={size}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </Glyph>
      );
    case "/life#travel":
      return (
        <Glyph size={size}>
          <path d="M17.8 19.2 16 11l5.5-3.5a1 1 0 0 0 0-1.7L15.5 2.3a1 1 0 0 0-1.4 0L10.5 5.5" />
          <path d="m2 2 7 7" />
          <path d="M3.3 12.3 12 21l4.5-4.5" />
        </Glyph>
      );
    default:
      return null;
  }
}

export function NavIcon({
  href,
  size = "sm",
}: {
  href: string;
  size?: IconSize;
}) {
  return iconForHref(href, size);
}

/** Icons for command palette non-section links (mailto, PDF, social). */
export function PaletteLinkIcon({
  href,
  size = "md",
}: {
  href: string;
  size?: IconSize;
}) {
  if (href.startsWith("mailto:")) {
    return iconForHref("/#contact", size);
  }
  if (href.endsWith(".pdf")) {
    return (
      <Glyph size={size}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6M9 11h6M9 19h6" />
      </Glyph>
    );
  }
  if (href.includes("github.com")) {
    return (
      <Glyph size={size}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </Glyph>
    );
  }
  if (href.includes("linkedin.com")) {
    return (
      <Glyph size={size}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5" />
        <path d="M12 11a2 2 0 0 1 4 0v5" />
      </Glyph>
    );
  }
  if (href.includes("x.com") || href.includes("twitter.com")) {
    return (
      <Glyph size={size}>
        <path d="M4 4l16 16M20 4 4 20" />
      </Glyph>
    );
  }
  if (href.includes("medium.com")) {
    return (
      <Glyph size={size}>
        <ellipse cx="12" cy="12" rx="10" ry="10" />
        <path d="M8 10v4M12 8v8M16 6v12" />
      </Glyph>
    );
  }
  if (href.includes("substack.com")) {
    return (
      <Glyph size={size}>
        <path d="M4 19V5M4 9h16M4 13h12" />
      </Glyph>
    );
  }
  return (
    <Glyph size={size}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </Glyph>
  );
}
