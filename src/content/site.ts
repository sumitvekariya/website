/**
 * Curated site copy aligned with Sumit_Vekariya_Resume.pdf (canonical).
 * Writing URLs extend the PDF with specific Medium/Substack pieces.
 * Voice: clear, specific, active; see .agents/product-marketing-context.md (copywriting skill).
 */

export const site = {
  name: "Sumit Vekariya",
  role: "Blockchain engineer — Ethereum, ZK, and on-chain identity",
  location: "Vadodara, India",
  email: "sarkazein7@gmail.com",
  /** Hero body: who you help / what you ship; keep facts aligned with the PDF. */
  summary:
    "Eight years shipping software, five of them in blockchain. I build on Ethereum: account abstraction (EIP-4337, EIP-6900), agent identity (EIP-8004), and the clients and contracts teams run in production. That means DeFi, ZK, and decentralized identity systems you can reason about and audit. I’ve also merged 45+ PRs across Ethereum.org, Protocol Labs (Lotus), Nethermind, and OpenZeppelin.",
  focusAreas:
    "Most-used stack: Solidity, TypeScript, Noir, Circom. Recurring themes: modular smart accounts, verifiable agents, and end-to-end systems—not slide decks.",
  personalNote:
    "Certified yoga instructor. I mentor builders at EthIndia and EthSingapore (2023–2025).",
  /** ≤ ~160 chars for meta / sharing; not shown on the page. */
  metaDescription:
    "Blockchain engineer: Ethereum, account abstraction, agent identity, ZK. 8+ years software, 5+ on-chain. 45+ OSS PRs. Vadodara, India — open to the right roles and collaborations.",
  /** Shown under the intro; keyboard shortcut help. */
  keyboardHint:
    "Jump to any section or link: ⌘K on Mac, Ctrl+K on Windows/Linux.",
  nav: [
    { href: "#intro", label: "Intro" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Writing" },
    { href: "#open-source", label: "Open source" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/sumitvekariya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sumitvekariya/" },
    { label: "X", href: "https://x.com/sarkazein7" },
    { label: "Medium", href: "https://medium.com/@sumitvekariya7" },
    { label: "Substack", href: "https://sarkazein.substack.com/" },
  ],
  achievements: [
    "Shipped EIP-8004 extensions for DIDs so autonomous agents can register on-chain—live on multiple chains.",
    "Built the ERC-6900 GPG validation module (fork: gpg-modular-account) — PR #334.",
    "Contributed Lotus StateSectorCmd so DealIDs surface with backward compatibility — PR #13140.",
    "ETHGlobal New Delhi 2024: Zkred Agent ID placed 2nd (Hedera AI) and 4th (Polygon Agentic Payments).",
    "45+ merged PRs to Ethereum.org, Semaphore, Nethermind, OpenZeppelin—docs, security, and developer experience.",
  ],
  skills: [
    "Languages: Solidity (5y), TypeScript (8y), JavaScript (8y), Rust (2y)",
    "Blockchain: Ethereum, Web3.js, Ethers.js, Hardhat, Foundry, OpenZeppelin, Wagmi, Viem",
    "ZK & privacy: Noir, Circom, PrivadoID, Semaphore, zk-SNARKs",
    "Protocols: ERC-20/721/1155, EIP-8004, EIP-6900, EIP-4337, IPFS",
    "Full stack: React, Next.js, Node.js, NestJS, Postgres, MongoDB, Docker, AWS, CI/CD",
  ],
  experience: [
    {
      company: "Tea.xyz (PKGX Inc.)",
      href: "https://tea.xyz",
      title: "Blockchain consultant (protocol & infrastructure)",
      range: "Aug 2025 — Present",
      bullets: [
        "BounTEA: turn GitHub issues into funded on-chain bounties—escrow, lifecycle contracts, and GPG-backed verification.",
        "Shipped ERC-6900 GPG validation, TEA token allowance helpers, off-chain bounty storage, payouts to GPG-linked wallets, and a GitHub-authenticated dashboard.",
        "Research: presented impact-evaluation direction at Protocol Labs’ Impact Evaluators retreat; writing on standardizing impact evaluation in open source.",
      ],
    },
    {
      company: "Sacred Protocol",
      href: "https://app.sacredprotocol.com/",
      title: "Blockchain developer & relations",
      range: "Jan 2021 — Jan 2025",
      bullets: [
        "Sacred Logos: DAO social layer—token gating, chat, notifications (Ceramic, Farcaster, Web3Auth, Supabase), plus ZK voting so holders can signal without doxxing wallets.",
        "Sacred Finance: privacy-preserving DeFi—ZK proofs, mixers, privacy scoring, and a custom relayer stack.",
        "Developer relations at Ethereum events; shipped integrations with IPFS, Orbis, and decentralized identity.",
      ],
    },
    {
      company: "Codemarket",
      title: "Founding full stack developer",
      range: "Apr 2019 — Aug 2020",
      bullets: [
        "Co-founded a live skill marketplace with real-time audio/video mentoring—owned the full stack from MVP to scale.",
        "Ran hiring and community meetups; established remote-first agile practices for delivery.",
      ],
    },
    {
      company: "Zettabyte",
      href: "https://zettabyte.sg",
      title: "Founding team lead & senior developer",
      range: "Oct 2017 — Feb 2019",
      bullets: [
        "Led ADMTC, an education platform that reached 150+ institutions and 5,000+ students—grew engineering from 1 to 5.",
        "Introduced CI/CD, automated tests, and architecture reviews so releases stayed safe as load grew.",
      ],
    },
  ],
  projects: [
    {
      name: "Zkred Agent ID",
      href: "https://www.npmjs.com/package/@zkred/agent-id",
      tag: "EIP-8004 · DIDs · TS SDK · x402 · 2025",
      blurb:
        "Lets integrators register agents with DIDs on EIP-8004 using a TypeScript SDK—no Solidity required for the happy path—plus an x402 payment server (USDC / EIP-712).",
    },
    {
      name: "Zkred — Proof of Humanity",
      href: "https://github.com/Zkred/zkred-poh-privado-verifier",
      tag: "ZK · PrivadoID · SSI · 2024 — present",
      blurb:
        "Proves personhood with ZK and short-lived (15-day) credentials so you verify once and retain less raw PII.",
    },
    {
      name: "ZKAccess",
      href: "https://devfolio.co/projects/zkaaccess-5f9c",
      tag: "Next.js · account aggregator · ZK · 2024",
      blurb:
        "Selective-disclosure identity checks aligned with India’s DPDP Act—shortlisted at the Sahamati Hackathon.",
    },
    {
      name: "TruLens",
      href: "https://github.com/sumitvekariya/trulens",
      tag: "Noir · Starknet · IPFS · 2024",
      blurb:
        "Camera pipeline that anchors media provenance with ZK—shortlisted at Noirhack 2025.",
    },
    {
      name: "Sol2Seq",
      href: "https://github.com/sumitvekariya/sol2seq",
      tag: "Rust · Solidity · CLI · 2024",
      blurb:
        "Rust CLI: point it at Solidity contracts, get sequence diagrams your team can paste into docs or reviews.",
    },
    {
      name: "Smart Contract Humanizer",
      tag: "Solidity · NLP · 2023",
      blurb:
        "Reads an ABI, lets you call contracts from plain language, and returns explanations non-Web3 teammates can follow.",
    },
    {
      name: "De Keeper",
      href: "https://github.com/sumitvekariya/decentralised-password-manager",
      tag: "IPFS · Chrome extension · 2022",
      blurb:
        "Password vault you control, stored on IPFS—won an IPFS/Filecoin bounty track at a hackathon.",
    },
    {
      name: "OpenBooks",
      href: "https://github.com/sumitvekariya/OpenBooks",
      tag: "Dart · on-chain library",
      blurb:
        "On-chain catalog for sharing books peer to peer—built in Dart.",
    },
  ],
  writing: [
    {
      title:
        "The friction deficit: how AI discovery tools are engineering consensus into the scientific method",
      href: "https://medium.com/@sumitvekariya7",
      year: "2026",
    },
    {
      title: "AI safety glossary: 35 terms I had to learn the hard way",
      href: "https://medium.com/@sumitvekariya7/ai-safety-glossary-35-terms-i-had-to-learn-the-hard-way-ea7c63ef9771",
      year: "2026",
    },
    {
      title:
        "What Chapter 1 of Harvard's ML Systems Textbook Taught Me About AI And Why I Was Wrong",
      href: "https://medium.com/@sumitvekariya7",
      year: "2026",
    },
    {
      title:
        "The abandoned identity bug: why AI-driven science cannot scale without zero-knowledge agent attestation",
      href: "https://sarkazein.substack.com/",
      year: "2026",
    },
    {
      title: "Cognitive security for captive minds",
      href: "https://sarkazein.substack.com/",
      year: "2026",
    },
    {
      title: "Standardizing impact evaluation in open source: the BounTEA approach",
      href: "https://medium.com/@sumitvekariya7",
      year: "2025",
    },
    {
      title: "The Finternet explained: a new frontier for interconnected financial systems",
      href: "https://medium.com/@sumitvekariya7",
      year: "2024",
    },
  ],
  oss: {
    intro:
      "I treat upstream work as part of the job: 45+ merged PRs that tightened docs, security, and day-to-day developer experience across major Ethereum codebases.",
    items: [
      {
        org: "Alchemy (ERC-6900)",
        detail: "GPG validation; factory / verifier libs",
        href: "https://github.com/alchemyplatform/modular-account/pull/334",
      },
      {
        org: "Protocol Labs (Lotus)",
        detail: "StateSectorCmd DealIDs",
        href: "https://github.com/filecoin-project/lotus/pull/13140",
      },
      {
        org: "Ethereum.org",
        detail: "Docs and developer guides",
        href: "https://github.com/ethereum/ethereum-org-website",
      },
      {
        org: "Semaphore",
        detail: "Privacy and documentation",
        href: "https://github.com/semaphore-protocol",
      },
      {
        org: "Nethermind / OpenZeppelin",
        detail: "Client stability, tooling, security libraries",
        href: "https://github.com/NethermindEth/nethermind",
      },
    ],
  },
  education: [
    "B.Tech computer science — Marwadi Education Foundation (2013–2017)",
    "Protocol Labs Dev Guild (2025)",
    "Encode Club Solidity Bootcamp (2024)",
    "Certified yoga instructor",
  ],
  hackathons:
    "ETHGlobal New Delhi 2024 (multiple wins), IPFS/Filecoin bounty 2022; shortlists: Noirhack 2025, Sahamati.",
  resumePdfPath: "/Sumit_Vekariya_Resume.pdf",
} as const;

export type SiteData = typeof site;
