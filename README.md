# Personal site (Next.js)

Minimal single-page site. Content lives in `src/content/site.ts` and should stay aligned with `Sumit_Vekariya_Resume.pdf` in `public/`.

## Requirements

- **Node.js** 20.9+ (see `.nvmrc`; use `nvm use` if you use nvm)

## Repository

```bash
git clone <repo-url>
cd site
npm ci
npm run dev
```

CI runs `npm run lint` and `npm run build` on pushes and pull requests to `main` / `master`.

## Scripts

```bash
npm run dev      # local dev
npm run build    # static export to `out/`
npm run start    # not used with static export; use `npx serve out` or deploy `out/` / Vercel
```

## Resume PDF

Replace `public/Sumit_Vekariya_Resume.pdf` whenever you update your canonical resume (same file you send to employers).

## Deploy

- **Vercel**: import repo; Next.js preset works with or without `output: "export"`.
- **Static hosting**: `npm run build` then upload the `out/` directory (configured in `next.config.ts`).
