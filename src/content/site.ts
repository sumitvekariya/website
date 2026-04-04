/**
 * Curated site copy aligned with Sumit_Vekariya_Resume.pdf (canonical).
 * Writing URLs extend the PDF with specific Medium/Substack pieces.
 * Voice: clear, specific, active; see .agents/product-marketing-context.md (copywriting skill).
 */

export const site = {
  name: "Sumit Vekariya",
  /** Short line under name in the hero; stacks and chains live in Skills / projects. */
  role: "Engineer, verifiable systems & evaluation",
  location: "Vadodara, India",
  email: "sarkazein7@gmail.com",
  /** Public pseudo / handle (online identity; X, writing, etc.). */
  handle: "sarkazein",
  handleHref: "https://x.com/sarkazein7",
  /** Hero: one tight paragraph; details below in sections. */
  introLead:
    "Eight years shipping software, five in blockchain. I build production smart contracts and full-stack products, with a focus on account abstraction, verifiable identity, and zero-knowledge patterns. I’ve merged 45+ PRs into public docs, client codebases, and security libraries across the ecosystem.",
  /** Bridge to AI/ML direction (ProbAI-aligned); one sentence. */
  introDirection:
    "I’m deepening work in probabilistic ML and technical AI safety, especially reliable evaluation, building on the same instincts I use for auditability and adversarial thinking in open networks.",
  /** Single muted line under the lead. */
  introAside:
    "Certified yoga instructor · Mentor at EthIndia & EthSingapore (2023–2025).",
  /** ≤ ~160 chars for meta / sharing; not shown on the page. */
  metaDescription:
    "Verifiable systems & on-chain identity (EVM/Solana, ZK). Toward ML & AI safety and evaluation reliability. 8+ yrs software, 5+ on-chain, 45+ OSS PRs. India.",
  /** Root-relative paths so the same nav works from `/` and `/life`. Top-level: Home, Work (nested), Life (nested). */
  nav: [
    { href: "/#intro", label: "Home" },
    {
      href: "/#experience",
      label: "Work",
      children: [
        { href: "/#experience", label: "Experience" },
        { href: "/#projects", label: "Projects" },
        { href: "/#ai-research", label: "AI & research" },
        { href: "/#writing", label: "Writing" },
        { href: "/#residencies", label: "Residencies" },
        { href: "/#open-source", label: "OSS" },
        { href: "/#skills", label: "Skills" },
        { href: "/#education", label: "Education" },
        { href: "/#contact", label: "Contact" },
      ],
    },
    {
      href: "/life",
      label: "Life",
      children: [
        { href: "/life#books", label: "Books" },
        { href: "/life#travel", label: "Travel" },
      ],
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/sumitvekariya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sumitvekariya/" },
    { label: "X", href: "https://x.com/sarkazein7" },
    { label: "Medium", href: "https://sumitvekariya7.medium.com/" },
    { label: "Substack", href: "https://sarkazein.substack.com/" },
  ],
  achievements: [
    "Shipped EIP-8004 extensions for DIDs so autonomous agents can register on-chain, live on multiple chains.",
    "Built the ERC-6900 GPG validation module (fork: gpg-modular-account), PR #334.",
    "Contributed Lotus StateSectorCmd so DealIDs surface with backward compatibility, PR #13140.",
    "ETHGlobal New Delhi 2024: Zkred Agent ID placed 2nd (Hedera AI) and 4th (Polygon Agentic Payments).",
    "45+ merged PRs to Ethereum.org, Semaphore, Nethermind, OpenZeppelin: docs, security, and developer experience.",
    "Essays on evaluation quality, AI safety concepts, and trustworthy infrastructure (Medium / Substack).",
  ],
  skills: [
    "Languages: Solidity (5y), TypeScript (8y), JavaScript (8y), Rust (2y), Python",
    "ML & AI safety focus: evaluation design, benchmark interpretation, reliability framing, interpretability concepts, threat modeling",
    "Math (applied): probability, statistics, linear algebra",
    "Coursework (B.Tech): Artificial Intelligence, numerical & statistical methods, data mining, algorithms, theory of computation",
    "Blockchain: Ethereum & EVM (primary), Solana, Web3.js, Ethers.js, Hardhat, Foundry, OpenZeppelin, Wagmi, Viem",
    "ZK & privacy: Noir, Circom, PrivadoID, Semaphore, zk-SNARKs",
    "Protocols: ERC-20/721/1155, EIP-8004, EIP-6900, EIP-4337, IPFS",
    "Full stack: React, Next.js, Node.js, NestJS, Postgres, MongoDB, Docker, AWS, CI/CD",
  ],
  experience: [
    {
      company: "Tea.xyz (PKGX Inc.)",
      href: "https://tea.xyz",
      title: "Blockchain consultant (protocol & infrastructure)",
      range: "Aug 2025 to Present",
      bullets: [
        "BounTEA: turn GitHub issues into funded on-chain bounties (escrow, lifecycle contracts, and GPG-backed verification).",
        "Shipped ERC-6900 GPG validation, TEA token allowance helpers, off-chain bounty storage, payouts to GPG-linked wallets, and a GitHub-authenticated dashboard.",
        "Evaluation research: impact-evaluation design for open-source work (audit-friendly metrics and provenance, fed BounTEA / IERR); presented at Protocol Labs’ Impact Evaluators retreat.",
      ],
    },
    {
      company: "Sacred Protocol",
      href: "https://app.sacredprotocol.com/",
      title: "Blockchain developer & relations",
      range: "Jan 2021 to Jan 2025",
      bullets: [
        "Sacred Logos: DAO social layer (token gating, chat, notifications via Ceramic, Farcaster, Web3Auth, Supabase), plus ZK voting so holders can signal without doxxing wallets.",
        "Sacred Finance: privacy-preserving DeFi (ZK proofs, mixers, privacy scoring, and a custom relayer stack).",
        "Developer relations at Ethereum events; shipped integrations with IPFS, Orbis, and decentralized identity.",
      ],
    },
    {
      company: "Codemarket",
      title: "Founding full stack developer",
      range: "Apr 2019 to Aug 2020",
      bullets: [
        "Co-founded a live skill marketplace with real-time audio/video mentoring; owned the full stack from MVP to scale.",
        "Ran hiring and community meetups; established remote-first agile practices for delivery.",
      ],
    },
    {
      company: "Zettabyte",
      href: "https://zettabyte.sg",
      title: "Founding team lead & senior developer",
      range: "Oct 2017 to Feb 2019",
      bullets: [
        "Led ADMTC, an education platform that reached 150+ institutions and 5,000+ students; grew engineering from 1 to 5.",
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
        "Lets integrators register agents with DIDs on EIP-8004 using a TypeScript SDK (no Solidity required for the happy path), plus an x402 payment server (USDC / EIP-712).",
    },
    {
      name: "Zkred: Proof of Humanity",
      href: "https://github.com/Zkred/zkred-poh-privado-verifier",
      tag: "ZK · PrivadoID · SSI · 2024 to present",
      blurb:
        "Proves personhood with ZK and short-lived (15-day) credentials so you verify once and retain less raw PII.",
    },
    {
      name: "ZKAccess",
      href: "https://devfolio.co/projects/zkaaccess-5f9c",
      tag: "Next.js · account aggregator · ZK · 2024",
      blurb:
        "Selective-disclosure identity checks aligned with India’s DPDP Act; shortlisted at the Sahamati Hackathon.",
    },
    {
      name: "TruLens",
      href: "https://github.com/sumitvekariya/trulens",
      tag: "Noir · Starknet · IPFS · 2024",
      blurb:
        "Camera pipeline that anchors media provenance with ZK; shortlisted at Noirhack 2025.",
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
        "Password vault you control, stored on IPFS; won an IPFS/Filecoin bounty track at a hackathon.",
    },
    {
      name: "OpenBooks",
      href: "https://github.com/sumitvekariya/OpenBooks",
      tag: "Dart · Solana · on-chain library",
      blurb:
        "Peer-to-peer library of books on Solana: catalog and flows in Dart, on-chain where it matters.",
    },
  ],
  /** Tab labels for the Writing section (each piece lists matching `id`s in `tags`). */
  writingTagDefs: [
    { id: "ai-safety", label: "AI & safety" },
    { id: "evaluation", label: "Evaluation" },
    { id: "identity", label: "Identity & agents" },
    { id: "ml-systems", label: "ML & systems" },
    { id: "infrastructure", label: "Infrastructure" },
  ],
  /** Essays; `tags` drive the on-page filter tabs. */
  writing: [
    {
      title:
        "The friction deficit: how AI discovery tools are engineering consensus into the scientific method",
      href: "https://sumitvekariya7.medium.com/reclaiming-epistemic-friction-engineering-cognitive-security-into-scientific-discovery-a30ee83eca1c",
      year: "2026",
      tags: ["ai-safety", "ml-systems"],
    },
    {
      title: "AI safety glossary: 35 terms I had to learn the hard way",
      href: "https://sumitvekariya7.medium.com/ai-safety-glossary-35-terms-i-had-to-learn-the-hard-way-ea7c63ef9771",
      year: "2026",
      tags: ["ai-safety"],
    },
    {
      title:
        "What Chapter 1 of Harvard's ML Systems Textbook Taught Me About AI And Why I Was Wrong",
      href: "https://sumitvekariya7.medium.com/what-chapter-1-of-harvards-ml-systems-textbook-taught-me-about-ai-and-why-i-was-wrong-fdb0f8d9e0b6",
      year: "2026",
      tags: ["ml-systems", "ai-safety"],
    },
    {
      title:
        "The abandoned identity bug: why AI-driven science cannot scale without zero-knowledge agent attestation",
      href: "https://sarkazein.substack.com/p/zombie-ai-agents-the-identity-crisis",
      year: "2026",
      tags: ["identity", "ai-safety"],
    },
    {
      title: "Cognitive security for captive minds",
      href: "https://sarkazein.substack.com/p/cognitive-security-for-captive-minds",
      year: "2026",
      tags: ["ai-safety"],
    },
    {
      title: "Standardizing impact evaluation in open source: the BounTEA approach",
      href: "https://sumitvekariya7.medium.com/standardizing-impact-evaluation-in-open-source-the-bountea-approach-a92295cfda59",
      year: "2025",
      tags: ["evaluation"],
    },
    {
      title: "Why you don't see CAPTCHAs on your iPhone anymore",
      href: "https://medium.com/@sumitvekariya7/why-you-dont-see-captchas-on-your-iphone-anymore-34ea1890b7f6",
      year: "2024",
      tags: ["infrastructure", "identity", "ai-safety"],
    },
    {
      title: "Mind: An endlessly running infinite loop",
      href: "https://medium.com/be-mindful/mind-is-an-endlessly-running-infinite-loop-36deba6440ec",
      year: "2024",
      tags: ["ai-safety", "ml-systems"],
    },
    {
      title: "Too much to process: the modern epidemic of information overload",
      href: "https://medium.com/be-mindful/too-much-to-process-the-modern-epidemic-of-information-overload-b1574ab7e882",
      year: "2024",
      tags: ["ai-safety", "ml-systems"],
    },
    {
      title: "The Finternet explained: a new frontier for interconnected financial systems",
      href: "https://sumitvekariya7.medium.com/the-finternet-explained-a-new-frontier-for-interconnected-financial-systems-95e653fa6985",
      year: "2024",
      tags: ["infrastructure"],
    },
  ],
  /**
   * AI & research direction: Principia-style themes + ProbAI transition + concrete hooks.
   */
  aiResearch: {
    lead:
      "Research interests sit at identity, privacy-preserving coordination, and how we evaluate contributions in open ecosystems: the same problems that show up when we ask whether AI systems are measured honestly and held accountable.",
    themes: [
      "Identity and accountability for autonomous and human actors in open networks.",
      "Privacy-preserving coordination (ZK, verifiable computation) as a template for trustworthy pipelines.",
      "Impact evaluation and attestations in open source, with a cryptographic framing toward evaluation reliability.",
    ],
    efforts: [
      "Self-directed study toward probabilistic ML and technical AI safety (evaluation, calibration, robustness).",
      "Ongoing technical writing on safety vocabulary, discovery tooling, and cognitive security (see Writing below).",
      "Day-job thread: audit-friendly metrics and provenance for open-source contributions (Tea.xyz / BounTEA).",
    ],
    adjacentProjects: [
      {
        name: "Zkred Agent ID",
        href: "https://www.npmjs.com/package/@zkred/agent-id",
        note: "Verifiable on-chain identity for agents: accountability primitives relevant to AI agent deployments.",
      },
      {
        name: "TruLens",
        href: "https://github.com/sumitvekariya/trulens",
        note: "Media provenance with ZK—authenticity and tamper-evidence adjacent to generative-media questions.",
      },
    ],
  },
  /**
   * Research residencies / invited programs. Grounded in Principia CV + EF resume;
   * IERR listing URL matches the link embedded in Research/Sumit_Vekariya_Principia_Resume_v4.pdf.
   */
  residencies: [
    {
      name: "Impact Evaluators Research Retreat",
      context: "IERR · invited participant",
      placeTime: "Iceland · 2025",
      blurb:
        "In-residence work on verifiable impact evaluation for open source—direction that fed the BounTEA paper (listed at IERR 2025).",
      href: "https://www.researchretreat.org/papers/paper/?venue=ierr25&id=12",
    },
    {
      name: "Cypherpunk Camp",
      context: "Invited participant",
      placeTime: "Berlin",
      blurb:
        "Privacy- and cryptography-focused builders’ program—secure comms, decentralized identity, and verifiable systems.",
      href: "https://cypherpunk.camp/",
    },
  ],
  oss: {
    intro:
      "I treat upstream work as part of the job: 45+ merged PRs that tightened docs, security, and day-to-day developer experience—mostly across Ethereum ecosystems (Ethereum.org, clients, security libraries). Product work spans EVM and beyond (e.g. Solana).",
    /** Single flagship PR → direct /pull/N link; multiple PRs → GitHub pulls tab or search ?q=is:pr author:sumitvekariya */
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
        href: "https://github.com/ethereum/ethereum-org-website/pulls?q=is%3Apr+author%3Asumitvekariya",
      },
      {
        org: "Semaphore",
        detail: "Privacy and documentation",
        href: "https://github.com/search?q=is%3Apr+author%3Asumitvekariya+org%3Asemaphore-protocol&type=pullrequests",
      },
      {
        org: "Nethermind",
        detail: "Client tooling and templates",
        href: "https://github.com/search?q=is%3Apr+author%3Asumitvekariya+org%3ANethermindEth&type=pullrequests",
      },
      {
        org: "OpenZeppelin",
        detail: "Security libraries, Stylus contracts, test helpers",
        href: "https://github.com/search?q=is%3Apr+author%3Asumitvekariya+org%3AOpenZeppelin&type=pullrequests",
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
  /**
   * `/life` page: books & travel (replace placeholders with your own).
   */
  life: {
    title: "Life",
    intro:
      "Outside of protocol work: what I’m reading and where I’ve been.",
    sectionNav: [
      { href: "#books", label: "Books" },
      { href: "#travel", label: "Travel" },
    ],
    books: {
      intro: "A short shelf of what stuck with me.",
      items: [
        {
          title: "Unio Mystica",
          author: "Osho",
          note: "Talks weaving Zen, Hassidism, Tantra, and Gurdjieff — a sharp lens on mystic union across traditions.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780880509985-L.jpg",
          href: "https://openlibrary.org/isbn/9780880509985",
        },
        {
          title: "Stolen Focus",
          author: "Johann Hari",
          note: "On the attention economy and why deep thought keeps slipping away — and what it takes to get it back.",
          coverSrc:
            "https://m.media-amazon.com/images/I/712SQSzvDhL._UF1000,1000_QL80_.jpg",
          href: "https://openlibrary.org/isbn/9781526620172",
        },
        {
          title: "The Brothers Karamazov",
          author: "Fyodor Dostoevsky",
          note: "Faith, doubt, and moral gravity in one family — the novel I keep returning to for how it frames responsibility and belief.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg",
          href: "https://openlibrary.org/isbn/9780374528379",
        },
        {
          title: "Gautama Buddha: The Life and Teachings of the Awakened One",
          author: "Vishvapani Blomfield",
          note: "Biography that braids early sources with modern scholarship — a clear picture of the historical teacher and why his view of mind and ethics still lands.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780857388308-L.jpg",
          href: "https://openlibrary.org/isbn/9780857388308",
        },
        {
          title: "Master of the Game",
          author: "Sidney Sheldon",
          note: "Generations of the Blackwell family, ambition, and control — pulp pace with a ruthless eye for what people will trade for power.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780446355452-L.jpg",
          href: "https://openlibrary.org/isbn/9780446355452",
        },
        {
          title: "If Tomorrow Comes",
          author: "Sidney Sheldon",
          note: "Tracy Whitney: betrayal, prison, then revenge as a globe-trotting con artist. The same novel is also sold as If Tomorrow Never Comes in some editions — one story, two titles.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780446357425-L.jpg",
          href: "https://openlibrary.org/isbn/9780446357425",
        },
        {
          title: "The Other Side of Me",
          author: "Sidney Sheldon",
          note: "His memoir — Depression-era childhood, Hollywood and TV, then the pivot to novels. Less thriller, more origin story.",
          coverSrc:
            "https://covers.openlibrary.org/b/isbn/9780007165179-L.jpg",
          href: "https://www.amazon.in/Other-Side-Me-Sidney-Sheldon/dp/0446617504",
        },
      ],
    },
    travel: {
      intro: "Places worth remembering (add trips and years you care about).",
      items: [
        {
          place: "Iceland",
          year: "2025",
          note: "Impact Evaluators Research Retreat — verifiable evaluation for open source.",
        },
        {
          place: "Berlin",
          note: "Cypherpunk Camp — privacy, identity, and verifiable systems.",
        },
      ],
    },
  },
} as const;

export type SiteData = typeof site;
