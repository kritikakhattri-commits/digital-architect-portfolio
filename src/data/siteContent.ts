export type LinkItem = {
  label: string;
  href: string;
};

export type CtaItem = LinkItem;

export type MetricItem = {
  value: number;
  suffix: string;
  label: string;
};

export type LeadershipNode = {
  title: string;
  body: string;
  x: number;
  y: number;
};

export type EcosystemNode = {
  key: string;
  label: string;
  angle: number;
  summary: string;
  detail: string;
};

export type ProjectItem = {
  title: string;
  role: string;
  description: string;
  technologyHighlights: string;
  outcome: string;
  imageUrl: string;
};

export type JourneyStage = {
  stage: string;
  period: string;
  role: string;
  org: string;
  description: string;
};

export type FutureLayer = {
  title: string;
  description: string;
};

export type KnowledgeAnswer = {
  keywords: string;
  answer: string;
};

export type SiteContent = {
  header: {
    logoInitials: string;
    name: string;
    links: LinkItem[];
    ctaText: string;
    ctaLink: string;
  };
  hero: {
    eyebrow: string;
    displayName: string;
    headline: string;
    mobileHeadline: string;
    subheadline: string;
    mobileSubheadline: string;
    description: string;
    mobileDescription: string;
    ctas: CtaItem[];
    visualLabel: string;
    visualRange: string;
    visualInitials: string;
    visualBadge: string;
    visualTiles: string[];
    visualStart: string;
    visualEnd: string;
  };
  metrics: MetricItem[];
  leadership: {
    label: string;
    heading: string;
    subheading: string;
    centerName: string;
    centerRole: string;
    nodes: LeadershipNode[];
  };
  ecosystem: {
    label: string;
    heading: string;
    description: string;
    centerName: string;
    centerRole: string;
    centerMetrics: MetricItem[];
    activeLabel: string;
    nodes: EcosystemNode[];
  };
  projects: {
    label: string;
    heading: string;
    subheading: string;
    items: ProjectItem[];
  };
  journey: {
    label: string;
    heading: string;
    subheading: string;
    stages: JourneyStage[];
  };
  futureVision: {
    label: string;
    heading: string;
    subheading: string;
    blueprintLabel: string;
    stackHeading: string;
    visionLabel: string;
    vision2030: string;
    layers: FutureLayer[];
  };
  assistant: {
    title: string;
    subtitle: string;
    buttonText: string;
    placeholder: string;
    suggestedQuestions: string[];
    knowledgeBaseAnswers: KnowledgeAnswer[];
    contactDetails: string;
    fallbackResponse: string;
  };
  contact: {
    heading: string;
    highlightedWord: string;
    description: string;
    email: string;
    website: string;
    linkedIn: string;
    ctaText: string;
  };
  footer: {
    name: string;
    description: string;
    links: LinkItem[];
    copyrightText: string;
  };
};

export const SITE_CONTENT_STORAGE_KEY = "sagar-portfolio-site-content";
export const SITE_CONTENT_EVENT = "site-content-updated";

export const defaultSiteContent: SiteContent = {
  header: {
    logoInitials: "SS",
    name: "Sagar Sharma",
    links: [
      { href: "#ecosystem", label: "Ecosystem" },
      { href: "#vision", label: "Technology" },
      { href: "#systems", label: "Projects" },
      { href: "#journey", label: "Journey" },
      { href: "#contact", label: "Contact" },
    ],
    ctaText: "Get in touch",
    ctaLink: "#contact",
  },
  hero: {
    eyebrow: "SAGAR SHARMA · CHIEF TECHNOLOGY OFFICER",
    displayName: "Sagar\nSharma",
    headline: "Building Future-Ready Technology Systems",
    mobileHeadline: "Building\nFuture-Ready\nTechnology\nSystems",
    subheadline:
      "AI, cloud infrastructure, cybersecurity, and scalable digital architecture for modern enterprises.",
    mobileSubheadline:
      "AI, cloud infrastructure, cybersecurity,\nand scalable digital architecture\nfor modern enterprises.",
    description:
      "Currently serving as CTO at SR18 Group, leading technology strategy across multiple business verticals.",
    mobileDescription:
      "Currently serving as CTO at SR18 Group,\nleading technology strategy across\nmultiple business verticals.",
    ctas: [
      { label: "Explore Profile", href: "#journey" },
      { label: "View Technology Vision", href: "#vision" },
    ],
    visualLabel: "Architecture Map",
    visualRange: "UAE to India",
    visualInitials: "SS",
    visualBadge: "Secure scale",
    visualTiles: ["AI", "Cloud", "Trust"],
    visualStart: "UAE",
    visualEnd: "India",
  },
  metrics: [
    { value: 10, suffix: "+", label: "Years experience" },
    { value: 50, suffix: "+", label: "Enterprise systems delivered" },
    { value: 40, suffix: "%", label: "Operational cost reduction" },
    { value: 5, suffix: "", label: "Business verticals powered" },
    { value: 2, suffix: "", label: "Countries connected" },
  ],
  leadership: {
    label: "Leadership Framework",
    heading: "How I Evaluate Every Technology Decision",
    subheading: "A simple framework that guides every system, platform, and engineering decision.",
    centerName: "Sagar Sharma",
    centerRole: "Chief Technology Officer",
    nodes: [
      {
        title: "Precision",
        body: "Every technology decision should create long-term value rather than short-term complexity. Building scalable systems begins with clarity, discipline, and attention to detail.",
        x: 82,
        y: 78,
      },
      {
        title: "Security",
        body: "Trust is infrastructure. Resilient systems, proactive protection, and strong governance create the foundation for sustainable growth.",
        x: 18,
        y: 78,
      },
      {
        title: "Innovation",
        body: "Technology should evolve alongside business needs. Innovation succeeds when it delivers measurable impact while remaining practical and human-centered.",
        x: 50,
        y: 14,
      },
    ],
  },
  ecosystem: {
    label: "Technology Leadership",
    heading: "The Technology Ecosystem I Lead",
    description:
      "From AI-powered gaming infrastructure to enterprise cloud architecture, I oversee the technology systems, engineering teams, and digital transformation initiatives that power multiple business verticals across the SR18 Group.",
    centerName: "Sagar Sharma",
    centerRole: "Chief Technology Officer",
    activeLabel: "Active Vertical",
    centerMetrics: [
      { value: 10, suffix: "+", label: "Years Experience" },
      { value: 50, suffix: "+", label: "Enterprise Systems Delivered" },
    ],
    nodes: [
      {
        key: "gaming",
        label: "SR18 Gaming",
        angle: -90,
        summary: "AI Platforms • Security Systems",
        detail:
          "Gaming infrastructure, intelligent platform services, player security, and resilient scale.",
      },
      {
        key: "tech",
        label: "SR18 Technologies",
        angle: -18,
        summary: "Cloud Infrastructure • Enterprise Software",
        detail:
          "Cloud-native architecture, internal platforms, enterprise integrations, and automation.",
      },
      {
        key: "realestate",
        label: "SR18 Real Estate",
        angle: 54,
        summary: "Digital Operations • Automation",
        detail:
          "Operational systems, workflow automation, CRM foundations, and digital process control.",
      },
      {
        key: "textile",
        label: "SR18 Textile",
        angle: 126,
        summary: "Supply Chain Systems • Analytics",
        detail:
          "Supply chain visibility, analytics layers, operational data flows, and reporting systems.",
      },
      {
        key: "beverages",
        label: "SR18 Beverages",
        angle: 198,
        summary: "Distribution Technology • Business Intelligence",
        detail:
          "Distribution technology, commercial intelligence, business dashboards, and decision systems.",
      },
    ],
  },
  projects: {
    label: "Systems I've Architected",
    heading: "Flagship Projects",
    subheading: "Systems built across platforms, cloud infrastructure, and automation.",
    items: [
      {
        title: "SR18 Gaming Platform",
        role: "Global play infrastructure",
        description:
          "A flagship gaming platform built for intelligent services, security, and scale.",
        technologyHighlights: "AI engine · Cloud infrastructure · Security layers",
        outcome:
          "A stable, scalable platform built for high-concurrency sessions and global growth.",
        imageUrl: "",
      },
      {
        title: "SR18 Technologies Cloud System",
        role: "Enterprise cloud backbone",
        description: "A multi-layered cloud system for business-critical enterprise platforms.",
        technologyHighlights: "Multi-region cloud · Enterprise integrations · Observability",
        outcome:
          "A multi-layered cloud ecosystem powering business-critical systems across UAE and India.",
        imageUrl: "",
      },
      {
        title: "Enterprise Automation Systems",
        role: "Operational intelligence layer",
        description: "Automation systems for workflows, analytics, and operational visibility.",
        technologyHighlights: "AI workflows · Process automation · Analytics",
        outcome: "Automation and intelligent analytics that reduced operational cost by 40%.",
        imageUrl: "",
      },
    ],
  },
  journey: {
    label: "Career Journey",
    heading: "A Decade of Building, Leading, Shipping.",
    subheading:
      "The progression from writing code to leading technology strategy across industries.",
    stages: [
      {
        stage: "Learning Systems",
        period: "2012 – 2016",
        role: "B.Tech in Computer Science Engineering",
        org: "Delhi Technological University",
        description:
          "Built the technical foundation by learning software engineering, system design, and problem-solving principles.",
      },
      {
        stage: "Building Systems",
        period: "2016 – 2019",
        role: "Senior Software Engineer",
        org: "CodeSphere Technologies",
        description:
          "Designed backend systems, APIs, and high-performance applications used by growing businesses.",
      },
      {
        stage: "Leading Teams",
        period: "2019 – 2023",
        role: "Head of Engineering",
        org: "TechSol India Pvt Ltd",
        description:
          "Managed engineering teams, delivered enterprise products, and drove large-scale cloud and automation initiatives.",
      },
      {
        stage: "Architecting Ecosystems",
        period: "2023 – Present",
        role: "Chief Technology Officer",
        org: "SR18 Group",
        description:
          "Designed technology infrastructure across multiple business verticals including Gaming, Technology, Real Estate, Textile, and Beverages.",
      },
      {
        stage: "Shaping Technology Strategy",
        period: "Today",
        role: "",
        org: "",
        description:
          "Leading long-term technology vision focused on AI, cloud architecture, cybersecurity, automation, and scalable digital ecosystems.",
      },
    ],
  },
  futureVision: {
    label: "Future Vision",
    heading: "Engineering the next generation of intelligent enterprises.",
    subheading: "",
    blueprintLabel: "Blueprint",
    stackHeading: "The Future Enterprise Stack",
    visionLabel: "Vision 2030",
    vision2030:
      "Building intelligent, secure, and borderless technology ecosystems that connect UAE, India, and global markets through AI, automation, cloud infrastructure, cybersecurity, and enterprise innovation.",
    layers: [
      {
        title: "AI Intelligence",
        description:
          "Embedded intelligence across decision-making, customer experiences, analytics, and business operations.",
      },
      {
        title: "Automation Layer",
        description:
          "Workflow systems that reduce manual effort, increase speed, and create measurable operational efficiency.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Scalable, multi-region infrastructure designed for reliability, performance, and enterprise growth.",
      },
      {
        title: "Cybersecurity",
        description:
          "Security-first architecture built around trust, governance, resilience, and proactive protection.",
      },
      {
        title: "Digital Foundations",
        description:
          "The core systems, data flows, APIs, and infrastructure that allow modern enterprises to scale.",
      },
    ],
  },
  assistant: {
    title: "Ask Sagar's Assistant",
    subtitle:
      "Explore Sagar Sharma's experience, technology leadership, projects, and future vision.",
    buttonText: "Ask the CTO",
    placeholder: "Ask about Sagar's profile, work, or vision",
    suggestedQuestions: [
      "Who is Sagar Sharma?",
      "What is his role at SR18?",
      "What systems has he architected?",
      "What is his leadership philosophy?",
      "What are his core technology skills?",
      "What certifications does he hold?",
      "What is his future vision?",
      "How can I contact him?",
    ],
    contactDetails: "Email: sagar.sharma@sr18group.com. Website: www.sr18group.com.",
    fallbackResponse:
      "I can only answer questions related to Sagar Sharma's professional profile, projects, leadership, and contact information.",
    knowledgeBaseAnswers: [
      {
        keywords: "contact,email,reach,website,connect",
        answer:
          "You can contact Sagar Sharma at Email: sagar.sharma@sr18group.com. Website: www.sr18group.com.",
      },
      {
        keywords: "who,profile,bio,about,sagar",
        answer:
          "Sagar Sharma is Chief Technology Officer, SR18 Group, based in Dubai, UAE. He is an experienced technology strategist with 10+ years in software engineering, cloud architecture, cybersecurity, and scalable digital infrastructure.",
      },
      {
        keywords: "sr18,role,cto,current",
        answer:
          "Sagar Sharma serves as Chief Technology Officer at SR18 Group in Dubai, leading technology strategy, AI, cloud infrastructure, cybersecurity, automation, and scalable digital ecosystems.",
      },
      {
        keywords: "system,project,architect,built,platform",
        answer:
          "Sagar has architected the SR18 Gaming Platform, SR18 Technologies Cloud System, and enterprise automation systems spanning AI, cloud infrastructure, security layers, integrations, analytics, and operational intelligence.",
      },
      {
        keywords: "philosophy,leadership,principle,mission",
        answer:
          "Sagar's leadership philosophy is that innovation must be reliable, secure, and human-driven. His mission is to build technology that evolves, adapts, and leads industries into the future.",
      },
      {
        keywords: "future,vision,2030",
        answer:
          "Sagar's future vision is to build intelligent, secure, and borderless technology ecosystems that connect UAE, India, and global markets through AI, automation, cloud infrastructure, cybersecurity, and enterprise innovation.",
      },
    ],
  },
  contact: {
    heading: "Let's build the future together.",
    highlightedWord: "future",
    description:
      "Open to strategic technology conversations, partnerships, and enterprise systems.",
    email: "sagar.sharma@sr18group.com",
    website: "www.sr18group.com",
    linkedIn: "",
    ctaText: "Start a conversation",
  },
  footer: {
    name: "Sagar Sharma — CTO, SR18 Universe",
    description: "Technology executive building future-ready digital ecosystems.",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Projects", href: "#systems" },
      { label: "Vision", href: "#vision" },
    ],
    copyrightText: "Dubai, UAE",
  },
};

export function getStoredSiteContent(): SiteContent {
  if (typeof window === "undefined") {
    return defaultSiteContent;
  }

  const stored = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
  if (!stored) {
    return defaultSiteContent;
  }

  try {
    return { ...defaultSiteContent, ...JSON.parse(stored) };
  } catch {
    return defaultSiteContent;
  }
}

export function saveStoredSiteContent(content: SiteContent) {
  window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new CustomEvent<SiteContent>(SITE_CONTENT_EVENT, { detail: content }));
}

export function resetStoredSiteContent() {
  window.localStorage.removeItem(SITE_CONTENT_STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent<SiteContent>(SITE_CONTENT_EVENT, { detail: defaultSiteContent }),
  );
}
