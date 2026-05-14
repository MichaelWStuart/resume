export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  tagline: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  summary: string[];
  experience: ExperienceEntry[];
}

export const resumeData: ResumeData = {
  name: "Michael Stuart",
  email: "michael159265@gmail.com",
  summary: [
    `Full-stack engineer with a career arc from UI specialization → full product ownership → agentic AI-driven delivery. Shipped real products in both pre-AI and post-AI eras. For nearly a year I've been perfecting my own agentic engineering process through hundreds of iterations, now delivering enterprise-scale work at a pace conventional teams can't match.`,
    `What's next sits one level up. The shipping is substrate; the agentic system that operates on it is what I want to own. And within that system, the theory itself, what agentic engineering is as a discipline, is what I'm most interested in.`,
  ],
  experience: [
    {
      title: "Staff Software Engineer",
      company: "G2I",
      dateRange: "Feb 2026 – Present",
      location: "Remote",
      tagline: "Cloning popular enterprise apps in weeks, small team, self-engineered agentic workflows.",
      bullets: [
        "Building large-scale clones of popular enterprise apps for reinforcement learning at a frontier AI lab",
        "Self-authored agentic methodology extending from individual practice into a team operating model",
        "Library of purpose-tuned systems, one per class of work, no one-size-fits-all",
        "Automated QA testing, ticket updates, and the development workflow end-to-end",
        "Team go-to for agentic development, patterns, tooling, and methodology",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "3rd Ear",
      dateRange: "Aug 2025 – Dec 2025",
      location: "Remote",
      tagline: "Shipped a production AI platform end-to-end with agentic workflows.",
      bullets: [
        "Took the MVP from prototype to production within weeks",
        "Pioneered agentic workflows enabling AI to generate scaffolds, code patterns, and module integrations",
        "Established a milestone-based delivery cadence with a weekly shipping rhythm",
        "Partnered with the research team to translate concepts into shipping features",
        "Designed ingestion + semantic search pipelines to extract structured insights from interview transcripts",
        "Implemented continuous delivery and rapid-feedback loops to maintain momentum",
        "Owned UX, architecture, infrastructure, and product decisions across the stack",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Georgetown University MDI",
      dateRange: "Feb 2025 – Jul 2025",
      location: "Remote",
      tagline: "From academic prototype to fundable legal intelligence product.",
      bullets: [
        "Architected a legal intelligence system over the entire U.S. Code, enabling statutory understanding at scale",
        "Designed schema-agnostic ingestion converting hierarchical law into normalized, queryable structures",
        "Implemented hybrid semantic + keyword retrieval optimized for LLM reasoning and grounding",
        "Drove transition from research exploration → a focused roadmap toward production deployment",
        "Owned end-to-end delivery: UI, backend, vector search, CI/CD, and deployments",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Aleq",
      dateRange: "Aug 2023 – Sep 2024",
      location: "Remote",
      tagline: "Ownership across the stack, building the product while the roadmap took shape.",
      bullets: [
        "Transformed a static financial dashboard into an AI-assisted analysis platform with richer insights",
        "Assumed backend and DevOps leadership after senior departure, kept the product stable and shipping",
        "Designed and implemented new data models and API layers to support rapid iteration",
        "Worked directly with the founder to turn evolving product ideas into scoped and shipped features",
        "Accelerated velocity through autonomous delivery, identifying problems and shipping solutions without prompts",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company: "8Flow",
      dateRange: "Nov 2022 – Aug 2023",
      location: "Los Angeles",
      tagline: "Automation-first engineering that improved operations efficiency for support teams.",
      bullets: [
        "Engineered a Chrome extension that automated complex workflows across multiple browser contexts",
        "Leveraged advanced browser APIs + cross-context state sharing to eliminate repetitive manual tasks",
        "Led major React + TypeScript initiatives tightly integrated with Firebase-based services",
        "Acted as de-facto technical lead, mentoring teammates and ensuring architecture decisions aligned with scale",
        "Translated ambiguous founder intent into shippable user experiences that improved support team productivity",
      ],
    },
    {
      title: "Front End Software Engineer",
      company: "Compass",
      dateRange: "Oct 2020 – Sep 2022",
      location: "Remote",
      tagline: "Enterprise-level polish, startup-level urgency.",
      bullets: [
        "Shipped mission-critical UI improvements in a 1,000+ engineer org",
        "Enhanced accessibility, resiliency, and design consistency",
        "Collaborated deeply with product, design, and infrastructure teams",
        "Balanced enterprise-quality rigor with rapid delivery expectations",
      ],
    },
    {
      title: "Front End Software Engineer",
      company: "Modus",
      dateRange: "Jun 2019 – Oct 2020",
      location: "Seattle",
      tagline: "Owned front-end architecture during the company’s growth and acquisition journey.",
      bullets: [
        "Led modernization of the React + TypeScript codebase and guided pattern adoption for five engineers",
        "Maintained consistent delivery through the pandemic, stabilizing execution when it mattered most",
        "Mentored junior engineers and established scalable front-end standards",
        "Contributed to product maturity that helped enable acquisition by Compass",
      ],
    },
    {
      title: "Front End Software Engineer",
      company: "ShareGrid",
      dateRange: "May 2018 – Jun 2019",
      location: "Seattle",
      tagline: "Discovered true startup velocity, ship fast, learn fast.",
      bullets: [
        "Built features in a large-scale SSR React marketplace",
        "Ramped quickly in a complex codebase and delivered consistently",
        "Developed a passion for fast iteration and customer-first development",
      ],
    },
    {
      title: "Lead TA",
      company: "Code Fellows",
      dateRange: "Sep 2017 – May 2018",
      location: "Seattle",
      tagline: "Helped others level up before doing it in production.",
      bullets: [
        "Mentored 6 cohorts through advanced JavaScript and React",
        "Primary resource for debugging, architectural thinking, and confidence-building",
      ],
    },
  ],
};
