# Personal site — marketing context

Use with the **copywriting** skill when editing `src/content/site.ts` or on-page strings.

## Page purpose

- **Type:** Personal homepage (portfolio + about + contact) plus a **`/life`** page (books & travel).
- **Primary actions:** Email or social reach-out, download PDF resume, read writing.
- **Nav:** `site.nav` uses root-relative home anchors (`/#intro`, `/#writing`, …) and `/life` so the sticky header and ⌘K menu work from both `/` and `/life`.

## Audience

- Hiring managers and founders hiring protocol / full-stack blockchain engineers.
- **AI safety / ML evaluation / research engineering** readers (probabilistic ML, benchmark reliability, technical safety)—the site’s **AI & research** section and **Writing** (tag-filtered essays) speak to them directly.
- Developer peers evaluating OSS or collaboration.
- Researchers or readers following technical writing (Medium / Substack).

## Direction bridge (AI / safety)

- **One-liner (hero):** `introDirection` in `site.ts` — verifiable systems and adversarial systems thinking → probabilistic ML, technical AI safety, **evaluation reliability**. Keep wording aligned with `Sumit_Vekariya_ProbAI_CV.md` when that CV is the outbound document.
- **Depth:** Do not paste long private study notes on the homepage; use **Writing**, **Skills**, and **AI-adjacent projects** as proof.

## Offer (what this site “sells”)

- **Time and judgment** on blockchain infrastructure: **strongest on Ethereum / EVM**, with **Solana and other chains** when the product needs them (e.g. OpenBooks on Solana). Plus ZK-adjacent identity and production full-stack delivery.
- **Direction:** Credible path into **probabilistic ML and technical AI safety** via **evaluation design**, attestations, and verifiable pipelines—without contradicting on-chain depth.
- **Proof:** Named projects, PR links, hackathon results, 45+ merged OSS PRs (verifiable via GitHub); essays on AI/safety/evaluation where listed.

## Outbound resumes (PDF variants)

- **`Research/Sumit_Vekariya_Principia_Resume_v4.pdf` (or export from Principia source):** Use for **identity, privacy, verifiable systems, and crypto-heavy research** roles. Leads with decentralized identity, publications, residencies.
- **`Sumit_Vekariya_ProbAI_CV.md` / a ProbAI-style PDF export:** Use for **AI safety, ML evaluation, probabilistic ML, and research-adjacent product** roles. Spell out ML/safety skills, evaluation framing, and transition narrative explicitly.
- **`public/Sumit_Vekariya_Resume.pdf` on the site:** Should match whichever variant you treat as **canonical for general outbound**; when you switch emphasis, regenerate the PDF and replace the file so **claims stay identical** across the downloaded resume and `site.ts` (no stronger claims on the site than on the PDF you ship).

## Voice

- **Professional, direct, technical** — clear over clever; no hype adjectives.
- **Honest proof only** — stats and claims must match `Sumit_Vekariya_Resume.pdf` and repos.

## Primary CTA copy patterns

- Resume: “Download resume (PDF)”
- Contact: email + profile links (specific destinations, not “Learn more”).

## Residencies

- Listed in `site.residencies`; keep aligned with **Principia** / extended CV (invited programs, IERR listing).
- IERR paper link matches the URI embedded in `Research/Sumit_Vekariya_Principia_Resume_v4.pdf`.
