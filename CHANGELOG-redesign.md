# Redesign + critique fixes — changelog

## Files changed

### Content
- `src/content/site.ts` — new fields (`tagline`, `availability`, `skillChips`, `highlights`, `heroAnchors`); shorter `introLead`; flipped Tea.xyz bullet order so evaluation work leads; merged yoga line into Education; removed Travel placeholder; added href for Smart Contract Humanizer; clarified OpenBooks blurb; trimmed the If Tomorrow Comes editorial digression; dropped `achievements` (now lives as 3 `highlights` in the hero).

### Components
- `src/components/Section.tsx` — dropped the rounded surface card. Now a top hairline + mono section marker (`01 / Experience` styled as h2). Reads as one document instead of nine stacked cards.
- `src/components/ScrollRail.tsx` — NEW. Sticky right-side section indicator on xl+. IntersectionObserver-driven active state with `aria-current`.
- `src/components/SiteHeader.tsx` — bumped tap target on nav links from `py-1.5` to `py-2 sm:py-1.5` (44px on mobile); separator dot at /55.
- `src/components/SiteHeaderNavNested.tsx` — same tap-target bump; disclosure chevron contrast /45 → /60.
- `src/components/NavIcon.tsx` — base icon contrast /45 → /55 (hover /70 → /85).
- `src/components/CommandMenu.tsx` — header line /55 → /70, kind badge /40 → /75.
- `src/components/WritingFilter.tsx` — added per-tab counts (`All 10`, `AI & safety 6`, …); inactive tab contrast /65 → /70; year column /40 → /60.

### Pages
- `src/app/page.tsx` — full hero rewrite (top meta line · h1 name · tagline with highlighted phrases · short lead · skill chips · 3 highlights · inline jump nav · action row · kbd hint hidden on mobile). Section reorder: 01 Experience, 02 AI & research, 03 Projects, 04 Writing, 05 Residencies, 06 Open source, 07 Skills, 08 Education, 09 Contact. Dropped redundant "Key achievements" sub-list from Education. Wrapped `<main>` in `relative` so ScrollRail can anchor next to it.
- `src/app/life/page.tsx` — header restyled to match (mono uppercase breadcrumb), section pills rebuilt as slash-separated anchor strip, contrast bumped, removed "(add trips and years you care about)".
- `src/app/home/page.tsx` — switched from `useEffect` JS redirect to `<meta http-equiv="refresh">` (hoisted by React 19) + a synchronous inline script fallback + a visible anchor for no-JS clients. No more "Redirecting…" flash.

### CSS
- `src/app/globals.css` — toned film grain (0.22→0.16 light, 0.16→0.12 dark); added `@media (prefers-contrast: more)` to disable grain for high-contrast users; tightened surface-border tokens.

## Results (measured)

- **Page length**:
  - Home desktop: 7,451 → 6,573 px  (−11.8 %)
  - Home mobile:  10,281 → 8,627 px (−16.1 %)
  - Life desktop: 2,119 → 1,973 px  (−6.9 %)
  - Life mobile:  3,219 → 2,969 px  (−7.8 %)
- **Contrast** (WCAG):
  - Every previously-failing rung (`/45`, `/40`) now lives at `/60` or higher (≥ 4.87 : 1 in light mode, AA Normal pass).
  - `/55` is reserved for decorative separators and inactive states (purely visual).
- **Section order**: AI & research now #02 (was #03), so a recruiter scrolling for 10 s sees the AI safety direction before scrolling past Projects.

## Verified

- `tsc --noEmit` — clean
- `npx eslint .` — clean
- `next build` — succeeds, all 8 routes prerender (Home, Home alias, Life, _not-found, icon.svg, robots.txt, sitemap.xml)
- HTML inspection of `out/index.html` and `out/home.html` confirms section ids, highlight phrases, skill chips, meta refresh, and absence of the placeholder + Key Achievements block

## To deploy

Just run `npm run build` locally (Google Fonts will fetch correctly from your machine) and push, or push to Vercel and let the platform build. No other changes required.

## Cleanup

The `.critique-screenshots/` folder in this repo was used to inspect renders during the work. The sandbox could write but couldn't delete from your folder, so please `rm -rf site/.critique-screenshots` when you've taken a look. The `design-critique.md` from earlier is also safe to remove if you don't want to keep it in the repo (a copy lives in the outputs folder).
