/**
 * Curated site copy aligned with Sumit_Vekariya_Resume.pdf (canonical).
 * Writing URLs extend the PDF with specific Medium/Substack pieces.
 */

export const site = {
  name: "Sumit Vekariya",
  role: "Blockchain & full stack developer",
  location: "Vadodara, India",
  email: "sarkazein7@gmail.com",
  summary:
    "With 8+ years in software engineering and 5+ years in blockchain, I focus on Ethereum clients, account abstraction (EIP-4337, EIP-6900), and agent identity (EIP-8004). I build production-grade smart contract infrastructure for DeFi, ZK systems, and decentralized identity. Open-source contributor with 45+ merged PRs across Ethereum.org, Protocol Labs, Nethermind, and OpenZeppelin.",
  focusAreas:
    "Solidity · TypeScript · ZK (Noir, Circom) · modular accounts · agent identity · verifiable systems",
  personalNote:
    "Certified yoga instructor. Technical mentor at EthIndia, EthSingapore (2023–2025).",
  nav: [
    { href: "#intro", label: "Intro" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Writing" },
    { href: "#open-source", label: "Open source" },
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
    "Extended EIP-8004 to support DIDs for autonomous agents; deployed multi-chain.",
    "ERC-6900 GPG validation module (forked as gpg-modular-account) — PR #334.",
    "Protocol Labs Lotus: DealIDs in StateSectorCmd with backward compatibility — PR #13140.",
    "ETHGlobal New Delhi 2024: Zkred Agent ID — Hedera AI (2nd), Polygon Agentic Payments (4th).",
    "45+ merged PRs across Ethereum.org, Semaphore, Nethermind, OpenZeppelin — docs, security, DX.",
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
        "BounTEA: GitHub App for issue → on-chain bounties; escrow contracts and GPG verification.",
        "ERC-6900 GPG validation module; TEA token allowance helpers. Off-chain bounty storage and payout to GPG-controlled wallets; dashboard with GitHub auth.",
        "Research: Impact evaluators retreat (Protocol Labs); work on standardizing impact evaluation in open source.",
      ],
    },
    {
      company: "Sacred Protocol",
      href: "https://app.sacredprotocol.com/",
      title: "Blockchain developer & relations",
      range: "Jan 2021 — Jan 2025",
      bullets: [
        "Sacred Logos: Social-Fi for DAOs — token gating, chat, notifications (Ceramic, Farcaster, Web3Auth, Supabase); ZK voting.",
        "Sacred Finance: privacy-preserving DeFi with ZK, mixers, privacy scoring; custom relayer infrastructure.",
        "DevRel at Ethereum events; IPFS, Orbis, decentralized identity integrations.",
      ],
    },
    {
      company: "Codemarket",
      title: "Founding full stack developer",
      range: "Apr 2019 — Aug 2020",
      bullets: [
        "Co-founded skill-showcasing platform with real-time A/V mentoring; scalable full-stack product.",
        "Led hiring and meetups; remote-first agile practices.",
      ],
    },
    {
      company: "Zettabyte",
      href: "https://zettabyte.sg",
      title: "Founding team lead & senior developer",
      range: "Oct 2017 — Feb 2019",
      bullets: [
        "ADMTC educational platform — scaled to 150+ institutions and 5k+ students; grew team 1→5.",
        "CI/CD, automated testing, architecture and scalability.",
      ],
    },
  ],
  projects: [
    {
      name: "Zkred Agent ID",
      href: "https://www.npmjs.com/package/@zkred/agent-id",
      tag: "EIP-8004 · DIDs · TS SDK · x402 · 2025",
      blurb:
        "Extended EIP-8004 for DIDs; TS SDK for registration without Solidity; x402 payment server (USDC / EIP-712).",
    },
    {
      name: "Zkred — Proof of Humanity",
      href: "https://github.com/Zkred/zkred-poh-privado-verifier",
      tag: "ZK · PrivadoID · SSI · 2024 — present",
      blurb:
        "Decentralized identity verification with ZK; short-lived (15-day) credentials and automated issuance.",
    },
    {
      name: "ZKAccess",
      href: "https://devfolio.co/projects/zkaaccess-5f9c",
      tag: "Next.js · account aggregator · ZK · 2024",
      blurb: "DPDP-aligned identity verification; shortlisted Sahamati Hackathon.",
    },
    {
      name: "TruLens",
      href: "https://github.com/sumitvekariya/trulens",
      tag: "Noir · Starknet · IPFS · 2024",
      blurb: "ZK camera app for verifiable media provenance; shortlisted Noirhack 2025.",
    },
    {
      name: "Sol2Seq",
      href: "https://github.com/sumitvekariya/sol2seq",
      tag: "Rust · Solidity · CLI · 2024",
      blurb: "CLI that generates sequence diagrams from Solidity contracts.",
    },
    {
      name: "Smart Contract Humanizer",
      tag: "Solidity · NLP · 2023",
      blurb: "Interact via ABI parsing; NLP explanations for non-Web3 users.",
    },
    {
      name: "De Keeper",
      href: "https://github.com/sumitvekariya/decentralised-password-manager",
      tag: "IPFS · Chrome extension · 2022",
      blurb: "Self-sovereign password manager on IPFS; IPFS/Filecoin hackathon bounty.",
    },
    {
      name: "OpenBooks",
      href: "https://github.com/sumitvekariya/OpenBooks",
      tag: "Dart · on-chain library",
      blurb: "Peer-to-peer library of books on chain.",
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
      "45+ merged PRs improving documentation, security, and developer experience across major Ethereum ecosystems.",
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
