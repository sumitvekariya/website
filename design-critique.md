# Design critique — sarkazein.org personal site

**Method:** rendered the static `out/` build locally and screenshotted both pages at desktop 1280×900 and mobile 390×844, light + dark. Cross-checked against source in `src/app/*`, `src/components/*`, `src/content/site.ts`, and `globals.css`. Contrast values are computed against the actual `foreground`/`background` tokens (`#0a0a0a` on `#ffffff` light; `#f2f2f0` on `#0a0a0a` / `#141414` dark) at the exact Tailwind opacity each element uses.

**Audience assumed:** recruiters and hiring managers, with a secondary mode of research-leaning readers (per `AGENTS.md` note that the same site fronts both the Principia and ProbAI-style CVs).

---

## Overall impression

This is a confident, restrained editorial layout that already does the hard things right: serif/mono pairing reads as a writer's site rather than a template, the numbered card sections create a strong scannable rhythm, dark mode is treated as a real surface (not just an inverted light theme), and the command menu plus skip-link plus keyboard tabs in Writing show real craft. The biggest opportunity isn't visual — it's **information architecture for a 5–10-second recruiter scan**. The home page is roughly 8 desktop screens and 12 mobile screens long, the AI/safety direction (which the `introDirection` sentence flags as the active pivot) lives below five other sections, and the muted-text palette quietly slips below WCAG AA in light mode for several "first scan" elements.

---

## Usability

| Finding | Severity | Recommendation |
|---|---|---|
| Home page is 7,451 px tall on desktop, 10,281 px tall on mobile (≈8 / ≈12 screens). A recruiter scrolling for 10 s sees Experience and maybe the first project. AI & research is section #03, below the fold by a large margin. | 🔴 Critical | Either (a) re-order so "AI & research" sits at #02 (above Projects) for the role you most want to be read for, or (b) add a one-line skim strip directly under the intro: `Experience · Projects · AI · Writing · Residencies · OSS · Skills · Education · Contact` as inline anchor links. The ⌘K hint is great but it's a power-user affordance — most recruiters won't use it. |
| The location pill ("Vadodara, India") in mono /45 is the first text line in the document order, above the name. For a recruiter on a job board with location filters, putting location at the absolute top is unusual and visually heavy for the contrast it carries (3.19:1 in light mode — see Accessibility). | 🟡 Moderate | Either move it below the role line as a quieter metadata cluster (e.g. on the same line as @handle), or keep position but raise opacity to /55 and tighten the type. |
| `/home` is a client-side redirect (`useEffect` → `window.location.replace`) that briefly flashes "Redirecting…". Static export means there's no server redirect available. | 🟡 Moderate | Use a `<meta http-equiv="refresh" content="0; url=/#intro">` in the page head instead (or render both meta + JS). It runs before paint, no flash, works without JS. |
| The Writing tabs (`All`, `AI & safety`, `Evaluation`, `Identity & agents`, `ML & systems`, `Infrastructure`) are tabs but the relationship between tag count and the tab label is invisible — you don't know "this tab has 5, that one has 1" until you click. | 🟢 Minor | Append the count to each tab label: `AI & safety (5)`. Tells the visitor which lens is worth their time. |
| `Section` numbers `01`–`09` are visually prominent in the left gutter but never linked or referenced — they read as design ornament. | 🟢 Minor | Keep as-is, or wrap each in `<a href="#experience">01</a>` so the number itself is the anchor handle. |
| The "Travel" section ships with the literal placeholder copy `"Places worth remembering (add trips and years you care about)."` in production. | 🔴 Critical | A recruiter will spot this. Either remove the parenthetical or replace with a real intro sentence. |
| `Smart Contract Humanizer` is the only project in the list without an `href`, so it renders as plain text while every other project name is a link. That makes it look unfinished. | 🟢 Minor | Add an `href` (repo or write-up) or hide the entry. |

---

## Visual hierarchy

**What draws the eye first (desktop, 1280×900):** the name "Sumit Vekariya" at ~32 px, then the role line "Engineer, verifiable systems & evaluation" at ~17 px directly below. That's the right priority. The location pill above the name is in mono /45 which is so light it reads as an aside — but it occupies the top-of-document slot, which costs a little.

**Reading flow:** location → name → role → @handle → intro lead (the bold body paragraph) → direction sentence (the AI/safety pivot) → aside (yoga + mentoring) → ⌘K hint → first numbered section. The lead paragraph is the right size relative to the name (good 2× ratio), and the direction sentence is at the same size but at /65 opacity, which de-emphasises the very thing the rest of the site is supposed to be building toward.

**Emphasis (correct things highlighted?):**

- **Working well:** the numbered cards (`01 Experience`, `02 Projects`, …) inside `bg-surface` rounded panels with a subtle shadow give a clear "chapter" rhythm and make scrolling feel paginated rather than endless.
- **Not working:** the role line "Engineer, verifiable systems & evaluation" is a comma-glued noun phrase — fine, but it doesn't telegraph the AI safety direction. A recruiter scanning for "AI safety / ML evaluation" roles (per the README's note about a ProbAI-style PDF) won't see those words until they read the second body paragraph. Two suggestions:
  - Make the role line two layered tags: `Engineer · verifiable systems` on one line, `Toward ML evaluation & AI safety` on the next, slightly muted but at /70+ (≥7:1 contrast). The "Toward" framing matches what you wrote in `introDirection`.
  - Or, promote `introDirection` to the same size as `introLead` (both at 15 px /80) — right now `introDirection` drops to 14.4 px /65 which signals "secondary", but for the audience you most want this site to land with, the direction *is* primary.
- **Hero handle link:** `@sarkazein` is an underlined link at /45 directly under the role — visually it competes with the role line because the underline is more graphically active than the role text itself. Consider moving it to the contact cluster at the bottom.

---

## Consistency

| Element | Issue | Recommendation |
|---|---|---|
| Section numbering | Home uses `01`–`09` numbered cards in a wide gutter. Life uses the same Section component but also has a separate pill sub-nav (Books / Travel) above the first section. The two patterns work but Home doesn't have an equivalent "jump nav". | Either give Home a small pill sub-nav after the intro (mirrors Life and exposes the 9 sections without forcing a ⌘K shortcut), or drop the pill nav from Life since it duplicates the section numbers. Pick one. |
| Mono type | `font-mono` is used for: location, dates, project tags, the `01`–`09` gutter, the `kbd` chip, the year column in Writing, the footer copyright, and the author line in Books. That's a lot of duty for one face. | Keep mono for *time and code* (dates, kbd, tags with code-like content). Move the location and author lines to the body sans at the same size and slightly higher opacity. The page will feel less "datasheet-y". |
| Hover states | Most links underline-darken on hover (`decoration-foreground/25 → /55`). The Experience job titles and Project names do the same. But the OSS list items hover to /50, the Writing essay titles hover to /50 (group hover), and the Contact email hovers to /55. Small inconsistency. | Standardize on one ramp — `decoration-foreground/20` idle → `/50` hover everywhere, or `/25 → /55`. Pick one pair. |
| Link styling | Project names, residency names, experience companies and Writing titles all use `font-medium` + underline. The OSS list also has bold-then-em-dash-then-detail pattern that's heavier than the others — the whole line is the link, but the visual weight is doubled. | Keep the OSS list link wrapping the whole row, but drop `font-medium` on the detail half, or split `org` and `detail` so only `org` looks like a link. |
| Card chrome | The Section component's rounded `bg-surface` card has a soft 1 px shadow + border in light, and a 1 px inset highlight in dark. Both look good. But the writing tabs *outside* the cards sit on the page background, which creates a small "is this part of the card?" ambiguity. | Pull the tabs *inside* the Writing card (the cleanest fix), or align their left edge with the section number gutter so they read as a header above the card. |
| Tag pills | The Writing topic tabs are `rounded-full border px-3 py-1.5`. The Life section nav uses an identical pill spec. The "Filter by topic" caption uses 13 px /55 but the Life intro caption uses 14 px /75. | Pick one micro-caption recipe and reuse it. |

---

## Mobile experience

Captured at 390×844 (iPhone 13/15 base width).

- **Header.** The brand `Sumit.`, the nav (`Home · Work ▾ · Life ▾`), and the theme toggle all sit on one row. With `flex-wrap` and `gap-x-1 sm:gap-x-2`, this fits at 390 but is tight — items can wrap on slightly narrower viewports (iPhone SE = 320 css px). At 320 it will absolutely wrap. Test on 320; if it wraps, decide whether you want it to (acceptable) or collapse to a hamburger that opens the ⌘K palette (more elegant given the palette already exists).
- **Section gutter.** The `01`-style numbers sit in a ~1.5 rem gutter on the left of every card, with `gap-6` between gutter and card. On 390 px wide minus 1.25 rem of safe-area padding, the card itself is ≈300 css px wide before its internal `px-5` padding (≈260 px of content). Long lines like project tags ("EIP-8004 · DIDs · TS SDK · x402 · 2025") wrap mid-tag. Acceptable but cramped. Consider hiding the section number on `<sm` (already `select-none aria-hidden`, so semantically free to drop) and reclaiming the gutter.
- **Book covers.** Cover thumbnails are `w-[3.84rem]` (61 px) on mobile. Layout works. One cover URL (`m.media-amazon.com/.../712SQSzvDhL._UF1000,1000_QL80_.jpg`) is fragile — Amazon image URLs rotate. There's no `onError` fallback; if the URL 404s, you ship an empty grey box.
- **Total mobile scroll.** 10,281 css px on the home page — the single biggest mobile usability issue. See the page-length finding above.
- **Tap targets.** The nav links use `px-1.5 py-1.5` (12 × 12 px hit area on the text + ≈14 px height). That's under the 44 × 44 px Apple guidance and 48 × 48 px Material guidance. Writing tabs and Life nav pills are larger (`px-3 py-1.5`). Bump nav items on mobile: `py-2.5 sm:py-1.5`.
- **Hero kbd hint.** `⌘ K / Ctrl K` is shown on mobile too. On touch devices it's meaningless. Hide it on `<sm` (`hidden sm:block`), or replace with a tappable "Jump to section" pill that opens the palette.

---

## Light/dark parity

Dark mode is the better of the two for muted text. Below is the actual contrast each muted opacity step produces against its real background:

| Opacity | Used for | Light contrast | Dark contrast | WCAG |
|---|---|---|---|---|
| `text-foreground/80` | intro lead, h2 lead-ins | 11.37 | 11.22 | AA Normal ✅ |
| `text-foreground/75` | most body inside cards | 9.29 | 9.96 | AA Normal ✅ |
| `text-foreground/70` | project blurbs, time on item rows | 7.69 | 8.71 | AA Normal ✅ |
| `text-foreground/65` | role line, achievements | 6.39 | 7.56 | AA Normal ✅ |
| `text-foreground/55` | small captions ("Filter by topic") | 4.42 | 5.65 | Light borderline; dark passes |
| `text-foreground/50` | intro aside, context lines | **3.74** | 4.87 | **Light fails AA Normal** (AA Large only); dark passes |
| `text-foreground/45` | location, @handle, dates, mono tags | **3.19** | 4.11 | **Light fails AA Normal**; dark is AA Large only |
| `text-foreground/40` | ⌘K hint, copyright | **2.71** | 3.45 | **Light fails everything**; dark is AA Large only |

Two concrete problems:

1. **The /45 rung does a lot of work** — it carries location, the @handle link, every job date range, every project tag line, and every residency place/time. In light mode all of these sit at 3.19:1 which fails WCAG AA for normal text. None of them are decorative — dates and tags are the metadata a recruiter scans for. Bump `/45` to `/55` (4.42:1 light, still understated). The visual difference is small; the readability gain on bright screens and direct sunlight is large.
2. **The /40 rung carries the ⌘K hint and the copyright** at 2.71:1 in light mode — fails even AA Large. The copyright is fine to leave (decorative), but the ⌘K hint is a functional instruction. Move it up to /55 or wrap it in a slightly darker outlined chip the way `kbd` already styles its keys.

Other parity notes:

- The `html::before` film-grain layer at `opacity: 0.22` (light) / `0.16` (dark) is tasteful and doesn't break the text I sampled. Consider gating it behind `@media (prefers-contrast: no-preference)` for users with high-contrast preferences.
- The radial top-glow (`background-glow`) gives the page a soft "lit" feel in both modes — works.
- Surface card border: light uses `color-mix(in srgb, var(--foreground) 7%, transparent)`, dark uses 10% plus an inset hairline highlight. Symmetric handling — good.

---

## Typography & reading flow

- Pairing: **Inter** for body, **Geist** for display, **Geist Mono** for meta. Current, well-trodden combo that says "writer who likes typography" without trying too hard. Keep it.
- Hero name at `font-display` 27 → 32 px (sm) with `tracking-[-0.02em]` and `leading-[1.15]` is the right balance — confident but not shouty.
- Body sits at **15 px (0.9375rem)** for the intro lead and **14.4 px (0.9rem)** for everything inside section cards. On a 1280 px desktop this reads slightly dense — recruiters tend to lean back from the screen. Either keep as-is or push the inner body to `0.9375rem` to match the lead — the page will feel about 6% taller, which on the home page is a real cost given length.
- **Measure (line length).** Content column is `max-w-3xl` = 768 px, each Section card has `sm:px-7` = 28 px padding, and on desktop the gutter takes another ~24 px. Effective measure ≈ 700 px which at 14.4 px body works out to ~80–95 characters per line. That's at the upper end of recommended (45–75 is the typography rule of thumb). On long bullet lists this is fine; on multi-sentence project blurbs it's the high end of comfortable. Consider `max-w-prose` on the prose paragraphs inside the cards.
- **Mono usage.** Section number gutter and project tags share the same `font-mono` 12 px /45. They are doing very different jobs (one is a structural label, the other is content metadata) and shouldn't look identical.
- **Em-dashes vs. en-dashes.** The experience entries use `" — "` between company and title via a span; the OSS list does the same; the Life sub-line uses `" · "`. Both are valid; the dot is more compact. Consider standardising on `·` for inline pairings and reserving `—` for sentence-level parentheticals only.

---

## Content / copy (recruiter pass)

Voice across `site.ts` is strong — specific verbs, real numbers ("45+ merged PRs", "150+ institutions", "5,000+ students"), no buzzwords. Calling out tightenings only:

- **Role line.** `"Engineer, verifiable systems & evaluation"` — the noun-phrase comma reads as a placeholder. Either commit to a sentence-shaped tagline (`"Engineering verifiable systems · moving toward AI evaluation"`) or two stacked tags (see Visual hierarchy). The current form leaves a recruiter unsure what the dominant frame is.
- **Intro lead.** "Eight years shipping software, five in blockchain" lands well; "I've merged 45+ PRs into public docs, client codebases, and security libraries across the ecosystem" is concrete. Fine.
- **Intro direction.** "I'm deepening work in probabilistic ML and technical AI safety, especially reliable evaluation, building on the same instincts I use for auditability and adversarial thinking in open networks." — good, specific, links the past to the pivot. Worth promoting in visual weight.
- **Intro aside.** "Certified yoga instructor · Mentor at EthIndia & EthSingapore (2023–2025)." Reading "Certified yoga instructor" right after "AI safety / verifiable systems" is a non-sequitur for a recruiter scanning the hero. Move the yoga line into Education (you already list it there) and leave the mentor line in the aside.
- **Tea.xyz role.** "BounTEA: turn GitHub issues into funded on-chain bounties" — good. The next bullet says you also did **evaluation research** at Tea — that's the phrase a ProbAI/safety reader would latch onto, but it's the third bullet. Reorder: lead with the evaluation work, then BounTEA. Same role, better signalling.
- **Travel placeholder.** The "(add trips and years you care about)" string ships in production copy. See Usability.
- **OpenBooks blurb.** "Peer-to-peer library of books on Solana: catalog and flows in Dart, on-chain where it matters." Reads ambiguously — is the catalog on-chain, the lending, the metadata? One concrete sentence would help.
- **"If Tomorrow Comes" note** ends with an editorial digression ("The same novel is also sold as If Tomorrow Never Comes in some editions — one story, two titles."). Charming, but it sits in the middle of a short, selective shelf. Either land it more cleanly or trim.
- **Achievements vs. Experience overlap.** The "Key achievements" list under Education repeats material already covered in Experience and OSS (ETHGlobal wins, EIP-8004 work, 45+ PRs). For a recruiter this triples the redundancy. Drop the Achievements list, or convert it into a tight 3-bullet "Highlights" near the top of the hero (replacing the aside) so the recruiter sees concrete wins immediately.

---

## Navigation & information architecture

Three top-level items: **Home**, **Work** (dropdown of 9), **Life** (dropdown of 2). The dropdown chevron after a top-level link that *also* links to the same anchor is unusual — clicking "Work" goes to `#experience`, but clicking the chevron opens a list whose first item is also `#experience`. Minor redundancy.

- **Aria.** `SiteHeaderNavNested` correctly exposes the disclosure with `aria-haspopup`, `aria-expanded`, and `aria-controls`. The trigger button has `aria-label="${item.label} sections"`. Good.
- **Active state.** No `aria-current` and no visual "current section" indicator. For a single-page site with a sticky nav, a scroll-spy-driven highlight on the current section name would help readers orient inside a 7,000 px page. Not strictly necessary, but high ROI given the length.
- **`/home` alias.** Smart instinct, but the JS-redirect flash is avoidable (see Usability).
- **Sitemap.** Sitemap and robots both look correct; `/home` is `robots: { index: false, follow: true }`.

---

## Accessibility (focused passes)

- **Skip link** present and styled to appear on focus-visible. ✅
- **Keyboard nav on Writing tabs** uses arrow-key cycling with `tabIndex` swapping. Correct tab pattern. ✅
- **Focus rings** consistent: 2 px ring at `foreground/35` with 2 px offset on the background. Visible against both surfaces. ✅
- **Theme toggle** has correct `aria-label` swap and avoids flashing wrong-icon during hydration. ✅
- **Images.** Book covers have `alt="Cover: ${title}"`. ✅ (Decorative-ish since the title is repeated next to the cover; `alt=""` would also be defensible.)
- **Color contrast.** See the parity table — three rungs of the muted palette fail in light mode. Highest-priority fix.
- **`aria-current`** missing on nav links — see IA note.
- **Reduced motion.** The modal `backdrop-blur-[2px] motion-reduce:backdrop-blur-none` shows you're thinking about this; consider extending `motion-reduce` to the page wash / film grain too.

---

## What works well

- Numbered card rhythm (`01 Experience`, …) makes a long page feel paginated. Single biggest reason it remains pleasant to read despite the length.
- The `font-display / font-sans / font-mono` system is consistent, restrained, and works in both modes.
- The film-grain background is a genuine craft signal — makes the page feel like a print object, not a CV template.
- Command menu is a real keyboard surface, not chrome. The kbd hint in the hero is a delight even if recruiters won't use it.
- Tag-driven Writing filter is a much better UX than a flat list and pays back the AI-safety pivot story.
- Dark mode is treated as a first-class surface (different border opacity, different shadow recipe, different grain blend). Unusual and good.
- The `/life` page is a thoughtful counter-weight — recruiters who care about "is this a person, not a CV" will notice. Also the page where the design feels most resolved.
- Metadata (`metaDescription`, OG image, schema.org `Person` / `WebSite`) is properly wired.

---

## Priority recommendations

1. **Move "AI & research" above "Projects" in the section order, or add a 1-line jump-strip under the intro.** The pivot you're foregrounding in `introDirection` and in the README is the same one buried six screens down on mobile. Highest leverage for a recruiter audience.
2. **Fix the muted-text contrast in light mode.** Bump every `text-foreground/45` → `/55` and `text-foreground/40` → `/55` (or `/60`). Single search-and-replace puts dates, location, mono tags, and the ⌘K hint above WCAG AA. Visual feel barely changes.
3. **Remove the placeholder copy.** The string `"(add trips and years you care about)"` is the only thing on this site that reads as unfinished.
4. **Rewrite or restructure the role line.** `"Engineer, verifiable systems & evaluation"` doesn't telegraph the AI safety direction the rest of the site is built around. Either commit to one frame (`"Engineering verifiable systems · moving toward AI evaluation"`) or stack two tags. This is the third line a recruiter reads.
5. **Cut the redundant "Key achievements" block under Education**, or promote 2–3 of those bullets into a "Highlights" pill row near the hero (replacing the yoga-instructor aside). One or the other — currently the same wins appear three times.
6. **Replace the `/home` client-side redirect with `<meta http-equiv="refresh">`** to kill the "Redirecting…" flash.
