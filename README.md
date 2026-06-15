# Personal site (Next.js)

Minimal single-page site. Content lives in `src/content/site.ts` and should stay aligned with `Sumit_Vekariya_Resume.pdf` in `public/`.

## Copy & voice

- Source of truth for on-page text: `src/content/site.ts` (keep aligned with `public/Sumit_Vekariya_Resume.pdf`).
- Context for editors/agents: `.agents/product-marketing-context.md`.
- For rewrites, use the **copywriting** skill from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (installed under the parent `Resume/.agents/skills/` when you run `npx skills add coreyhaines31/marketingskills` from the Resume folder).

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

**Which PDF for which role:** Use a **Principia-style** PDF for identity / verifiable-systems / crypto-research roles; use a **ProbAI-style** export (from `Sumit_Vekariya_ProbAI_CV.md` or equivalent) for AI safety / ML evaluation roles. Keep wording aligned with `src/content/site.ts` so the site and the file you attach never disagree. Details: `.agents/product-marketing-context.md`.

## Deploy

This app uses **`output: "export"`** (`next.config.ts`). Vercel runs `next build` and serves the generated **`out/`** static output—no extra config required beyond `vercel.json` (framework + install/build commands).

### Vercel (GitHub — recommended)

1. Put the **`site/`** folder in a Git repo and push to GitHub (this folder can be the repo root, or use **Root Directory = `site`** if the repo is the parent `Resume` folder).
2. In [Vercel](https://vercel.com/new): **Add New… → Project** → import that repository.
3. **Framework Preset**: Next.js (auto-detected). **Node.js**: 20.x (matches `.nvmrc`).
4. **Environment variables**: none required for the default build.
5. Deploy. Production URL will look like `https://<project>.vercel.app`; add a custom domain under **Project → Settings → Domains** if you like.

### Vercel (CLI, no Git)

From this directory:

```bash
npm ci
npx vercel login
npx vercel        # preview
npx vercel --prod # production
```

Follow the prompts to link or create a project.

### Other static hosts

`npm run build` then upload the **`out/`** directory to any static host (Cloudflare Pages, Netlify, S3, etc.).
