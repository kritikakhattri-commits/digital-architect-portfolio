import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Globe,
  Bot,
  Building2,
  Cloud,
  Cpu,
  Database,
  Layers,
  Lightbulb,
  LockKeyhole,
  Network,
  Quote,
  Scale,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { HeroNetwork } from "@/components/site/HeroNetwork";
import { Section } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FloatingAssistant } from "@/components/site/FloatingAssistant";
import { useSiteContent } from "@/hooks/useSiteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const technologyPhilosophy = [
  {
    title: "Systems Before Tools",
    body: "Design systems that remain effective regardless of technology trends.",
    icon: Layers,
  },
  {
    title: "Security By Design",
    body: "Security should be embedded from day one, not added later.",
    icon: ShieldCheck,
  },
  {
    title: "Automation Over Repetition",
    body: "Remove manual effort wherever intelligent automation can improve outcomes.",
    icon: Zap,
  },
  {
    title: "Scalability First",
    body: "Build foundations capable of supporting future growth.",
    icon: Network,
  },
  {
    title: "Data-Driven Decisions",
    body: "Technology decisions should be guided by measurable outcomes.",
    icon: Database,
  },
];

const metricStories = [
  {
    metric: "10+",
    label: "Years Experience",
    body: "Building enterprise software, infrastructure, and technology ecosystems across multiple industries.",
  },
  {
    metric: "50+",
    label: "Enterprise Systems",
    body: "Successfully delivered scalable technology solutions for business-critical operations.",
  },
  {
    metric: "40%",
    label: "Cost Reduction",
    body: "Achieved through workflow automation, process optimization, and cloud efficiencies.",
  },
  {
    metric: "5",
    label: "Business Verticals",
    body: "Unified under one technology strategy and operational framework.",
  },
  {
    metric: "2",
    label: "Countries Connected",
    body: "Driving digital transformation across India and UAE operations.",
  },
];

const leadershipStyle = [
  {
    title: "Vision",
    body: "Define long-term technology direction aligned with business growth.",
    icon: Target,
    image: "/assets/leadership-vision.png",
    imageAlt: "Strategic technology roadmap visual",
  },
  {
    title: "Execution",
    body: "Translate strategy into scalable systems, products, and infrastructure.",
    icon: Cpu,
    image: "/assets/leadership-execution.png",
    imageAlt: "Scalable cloud infrastructure visual",
  },
  {
    title: "Mentorship",
    body: "Build high-performing teams through guidance, ownership, and continuous learning.",
    icon: Users,
    image: "/assets/leadership-mentorship.png",
    imageAlt: "Technology leadership discussion visual",
  },
];

const expertiseDomains = [
  {
    title: "AI & Automation",
    items: ["Artificial Intelligence", "Intelligent Workflows", "Process Automation"],
    icon: Bot,
  },
  {
    title: "Cloud Infrastructure",
    items: ["Multi-Region Architecture", "Cloud Platforms", "Infrastructure Scalability"],
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    items: ["Security Architecture", "Risk Mitigation", "Compliance"],
    icon: LockKeyhole,
  },
  {
    title: "Enterprise Software",
    items: ["ERP Systems", "CRM Platforms", "Business Applications"],
    icon: Building2,
  },
  {
    title: "Digital Transformation",
    items: ["Process Modernization", "Enterprise Integration", "Strategic Technology Adoption"],
    icon: Lightbulb,
  },
];

const technologyChallenges = [
  {
    title: "Scaling High-Concurrency Platforms",
    body: "Built systems capable of supporting large-scale digital operations.",
    icon: Scale,
  },
  {
    title: "Enterprise Cloud Migration",
    body: "Transitioned business-critical infrastructure to scalable cloud environments.",
    icon: Cloud,
  },
  {
    title: "Security Architecture",
    body: "Designed secure and resilient technology ecosystems.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Country Infrastructure",
    body: "Connected operations across regions with reliable infrastructure.",
    icon: Network,
  },
  {
    title: "AI Integration",
    body: "Implemented intelligent automation to improve operational efficiency.",
    icon: Bot,
  },
];

const executiveRecommendations = [
  {
    perspective: "Founder Perspective",
    quote: "Technology leadership that consistently aligns innovation with business goals.",
  },
  {
    perspective: "Operations Perspective",
    quote: "Improved efficiency, visibility, and scalability across multiple divisions.",
  },
  {
    perspective: "Engineering Perspective",
    quote: "A leader who balances strategic thinking with technical excellence.",
  },
];

const thoughtLeadershipArticles = [
  "Why AI Will Transform Enterprise Operations",
  "Building Scalable Systems For Global Markets",
  "Security-First Architecture In Modern Enterprises",
  "Cloud Infrastructure Beyond 2030",
  "Automation As A Competitive Advantage",
  "The Modern CTO Mindset",
];

const ctoFaq = [
  {
    question: "What does a CTO actually do?",
    answer:
      "A CTO defines technology strategy, aligns engineering decisions with business goals, protects technical standards, and ensures platforms can scale securely as the company grows.",
  },
  {
    question: "How do you scale technology teams?",
    answer:
      "Scaling technology teams requires clear ownership, strong engineering standards, practical architecture, consistent delivery rituals, and mentorship that helps people make better decisions independently.",
  },
  {
    question: "AI vs Automation: What is the difference?",
    answer:
      "Automation executes repeatable workflows with speed and consistency, while AI adds prediction, pattern recognition, and adaptive decision support to those workflows.",
  },
  {
    question: "Why is cloud infrastructure important?",
    answer:
      "Cloud infrastructure gives enterprises elastic capacity, regional resilience, faster deployment cycles, and a stronger foundation for data, AI, security, and business continuity.",
  },
  {
    question: "What are the biggest security priorities today?",
    answer:
      "Identity control, secure architecture, data protection, continuous monitoring, incident readiness, and security awareness across engineering and operations are the highest priorities.",
  },
  {
    question: "How should businesses approach digital transformation?",
    answer:
      "Businesses should modernize around measurable outcomes, start with operational bottlenecks, improve data quality, integrate core systems, and adopt technology that compounds long-term value.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ctoFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagar Sharma — CTO, SR18 Universe" },
      {
        name: "description",
        content:
          "Sagar Sharma is a technology executive building future-ready AI, cloud infrastructure, cybersecurity, and scalable digital architecture for modern enterprises.",
      },
      { property: "og:title", content: "Sagar Sharma — CTO, SR18 Universe" },
      {
        property: "og:description",
        content:
          "AI, cloud infrastructure, cybersecurity, and scalable digital architecture for modern enterprises.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const content = useSiteContent();
  const leadershipFramework = content.leadership.nodes;
  const futureEnterpriseStack = content.futureVision.layers;
  const [activeFramework, setActiveFramework] = useState(leadershipFramework[0]?.title ?? "");
  const activePrinciple =
    leadershipFramework.find((principle) => principle.title === activeFramework) ??
    leadershipFramework[0];
  const [activeFutureLayer, setActiveFutureLayer] = useState(futureEnterpriseStack[0]?.title ?? "");
  const selectedFutureLayer =
    futureEnterpriseStack.find((layer) => layer.title === activeFutureLayer) ??
    futureEnterpriseStack[0];

  useEffect(() => {
    if (!leadershipFramework.some((principle) => principle.title === activeFramework)) {
      setActiveFramework(leadershipFramework[0]?.title ?? "");
    }
  }, [activeFramework, leadershipFramework]);

  useEffect(() => {
    if (!futureEnterpriseStack.some((layer) => layer.title === activeFutureLayer)) {
      setActiveFutureLayer(futureEnterpriseStack[0]?.title ?? "");
    }
  }, [activeFutureLayer, futureEnterpriseStack]);

  return (
    <div id="top" className="relative bg-background text-foreground overflow-x-hidden">
      <Nav content={content.header} />

      {/* HERO */}
      <section className="relative pt-28 pb-16 sm:pt-32 md:min-h-screen md:pb-20">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_0%,oklch(0.97_0.003_260/0.72)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-w-0">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex items-start gap-3 text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground sm:mb-8 sm:items-center sm:text-xs sm:tracking-[0.22em]"
            >
              <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.19_250)] shadow-[0_0_0_4px_oklch(0.65_0.19_250/0.18)]" />
              <span className="min-w-0 leading-relaxed">{content.hero.eyebrow}</span>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
              className="mb-5 font-display text-[clamp(2.35rem,13vw,8.8rem)] leading-[0.9] tracking-normal text-foreground sm:mb-6"
            >
              {content.hero.displayName.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: "easeOut" }}
              className="font-display max-w-3xl text-balance text-[clamp(1.45rem,6.8vw,3rem)] font-semibold leading-[1.08] tracking-normal md:text-5xl"
            >
              <span className="block sm:hidden">
                {content.hero.mobileHeadline.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">{content.hero.headline}</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-6 md:text-xl"
            >
              <span className="block sm:hidden">
                {content.hero.mobileSubheadline.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">{content.hero.subheadline}</span>
            </motion.p>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-5 max-w-xl border-l border-border pl-4 text-sm leading-relaxed text-foreground/72 sm:pl-5"
            >
              <span className="block sm:hidden">
                {content.hero.mobileDescription.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden sm:inline">{content.hero.description}</span>
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.52 }}
              className="mt-8 flex w-full max-w-[calc(100vw-2rem)] flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:mt-10"
            >
              {content.hero.ctas.map((cta, index) => (
                <a
                  key={`${cta.href}-${cta.label}`}
                  href={cta.href}
                  className={
                    index === 0
                      ? "group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_oklch(0.18_0.01_260/0.14)] sm:w-auto"
                      : "inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-normal rounded-full border border-border bg-background/80 px-4 py-3 text-center text-xs font-medium leading-tight transition hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_14px_30px_oklch(0.18_0.01_260/0.08)] sm:w-auto sm:px-6 sm:text-sm"
                  }
                >
                  {cta.label}
                  {index === 0 && (
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </a>
              ))}
            </motion.div>
          </div>

          <HeroNetwork content={content.hero} />
        </div>
      </section>

      {/* TECHNOLOGY PHILOSOPHY */}
      <Section
        eyebrow="Technology Philosophy"
        title="Principles Behind Every System I Build"
        intro="Every technology decision should create long-term business value, scalability, security, and operational excellence."
        className="border-t border-border bg-white"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {technologyPhilosophy.map((principle, i) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.62, delay: i * 0.06, ease: "easeOut" }}
                className="group min-h-56 rounded-[8px] border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/28 hover:shadow-[0_22px_60px_oklch(0.18_0.01_260/0.08)]"
              >
                <div className="mb-9 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/14 bg-secondary text-foreground transition duration-300 group-hover:border-foreground/32 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-normal text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* METRICS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-5 md:gap-y-10">
            {content.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl">
                  <Counter to={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-xs leading-snug tracking-wide text-muted-foreground md:text-sm">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEHIND THE NUMBERS */}
      <Section
        eyebrow="Behind The Numbers"
        title="The Impact Behind Every Metric"
        className="border-b border-border bg-white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metricStories.map((story, i) => (
            <motion.article
              key={story.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: i * 0.05, ease: "easeOut" }}
              className="rounded-[8px] border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/24 hover:shadow-[0_18px_48px_oklch(0.18_0.01_260/0.07)]"
            >
              <div className="font-display text-4xl leading-none text-foreground">
                {story.metric}
              </div>
              <h3 className="mt-5 text-base font-semibold leading-tight tracking-normal text-foreground">
                {story.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{story.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP FRAMEWORK */}
      <section className="relative overflow-hidden border-y border-border bg-white py-20 sm:py-24 md:min-h-screen">
        <div className="mx-auto flex max-w-6xl flex-col justify-center px-4 sm:px-6 md:min-h-[calc(100vh-10rem)]">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-5 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.24em]"
            >
              {content.leadership.label}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: 0.08, ease: "easeOut" }}
              className="font-display text-balance text-[clamp(2.35rem,11vw,3.75rem)] font-semibold leading-[1.04] tracking-normal text-foreground md:text-6xl"
            >
              {content.leadership.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {content.leadership.subheading}
            </motion.p>
          </div>

          <div className="mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-[0.64fr_0.36fr] md:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
              className="relative mx-auto hidden aspect-[1.16/1] w-full max-w-3xl md:block"
            >
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <motion.path
                  d="M50 14 L18 78 L82 78 Z"
                  fill="none"
                  stroke="oklch(0.18 0.01 260 / 0.34)"
                  strokeWidth="0.34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-160px" }}
                  transition={{
                    pathLength: { duration: 1.4, ease: "easeInOut" },
                    opacity: { duration: 0.4 },
                  }}
                />
                {leadershipFramework.map((principle) => (
                  <motion.line
                    key={`center-${principle.title}`}
                    x1="50"
                    y1="51"
                    x2={principle.x}
                    y2={principle.y}
                    stroke="oklch(0.18 0.01 260)"
                    strokeWidth={activeFramework === principle.title ? "0.48" : "0.22"}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{
                      pathLength: 1,
                      opacity: activeFramework === principle.title ? 0.72 : 0.2,
                    }}
                    animate={{ opacity: activeFramework === principle.title ? 0.72 : 0.2 }}
                    viewport={{ once: true, margin: "-160px" }}
                    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                  />
                ))}
              </svg>

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 oklch(0.18 0.01 260 / 0.08)",
                    "0 0 0 14px oklch(0.18 0.01 260 / 0)",
                    "0 0 0 0 oklch(0.18 0.01 260 / 0)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  scale: { duration: 0.7, delay: 0.52, ease: "easeOut" },
                  opacity: { duration: 0.7, delay: 0.52 },
                  boxShadow: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute left-1/2 top-[51%] grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-foreground bg-white text-center md:h-36 md:w-36"
              >
                <div>
                  <div className="text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.18em] text-foreground md:text-xs">
                    {content.leadership.centerName}
                  </div>
                  <div className="mx-auto mt-3 h-px w-8 bg-foreground/40" />
                  <div className="mt-3 px-3 text-[0.58rem] uppercase leading-snug tracking-[0.16em] text-muted-foreground md:text-[0.64rem]">
                    {content.leadership.centerRole}
                  </div>
                </div>
              </motion.div>

              {leadershipFramework.map((principle, i) => (
                <motion.button
                  key={principle.title}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.65, delay: 0.62 + i * 0.08, ease: "easeOut" }}
                  onMouseEnter={() => setActiveFramework(principle.title)}
                  onFocus={() => setActiveFramework(principle.title)}
                  onClick={() => setActiveFramework(principle.title)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white px-5 py-3 text-sm font-medium tracking-normal transition duration-300 hover:-translate-y-[calc(50%+2px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 md:px-6 md:py-3.5 md:text-base ${
                    activeFramework === principle.title
                      ? "border-foreground text-foreground shadow-[0_18px_45px_oklch(0.18_0.01_260/0.1)]"
                      : "border-foreground/22 text-foreground/64 hover:border-foreground/70 hover:text-foreground"
                  }`}
                  style={{ left: `${principle.x}%`, top: `${principle.y}%` }}
                >
                  {principle.title}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid gap-3 md:hidden">
              {leadershipFramework.map((principle) => {
                const isActive = activeFramework === principle.title;

                return (
                  <button
                    key={`card-${principle.title}`}
                    type="button"
                    onClick={() => setActiveFramework(principle.title)}
                    onFocus={() => setActiveFramework(principle.title)}
                    className={`min-h-16 rounded-[8px] border p-4 text-left transition ${
                      isActive
                        ? "border-foreground bg-white shadow-[0_14px_34px_oklch(0.18_0.01_260/0.08)]"
                        : "border-border bg-white/72 text-foreground/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-base font-semibold text-foreground">
                        {principle.title}
                      </span>
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                          isActive ? "bg-[oklch(0.65_0.19_250)]" : "bg-foreground/24"
                        }`}
                      />
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        {principle.body}
                      </motion.p>
                    )}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activePrinciple?.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mx-auto hidden max-w-xl text-center md:block md:text-left"
            >
              <div className="mb-5 h-px w-20 bg-foreground/70 max-md:mx-auto" />
              <h3 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-5xl">
                {activePrinciple?.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {activePrinciple?.body}
              </p>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-3 border-t border-border pt-5 text-center text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground md:mt-10">
            {leadershipFramework.map((principle) => (
              <button
                key={`mobile-${principle.title}`}
                type="button"
                onClick={() => setActiveFramework(principle.title)}
                className={`min-h-11 px-2 py-2 transition-colors md:hidden ${
                  activeFramework === principle.title ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {principle.title}
              </button>
            ))}
            {leadershipFramework.slice(0, 3).map((principle) => (
              <span key={`desktop-${principle.title}`} className="hidden md:block">
                {principle.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP STYLE */}
      <Section
        eyebrow="Strategic Leadership"
        title="How I Lead Technology Teams"
        className="overflow-x-hidden border-b border-border bg-white !py-16 sm:!py-24 md:!py-36"
        headerClassName="!mb-10 sm:!mb-12 md:!mb-20"
        titleClassName="!text-[2.15rem] min-[390px]:!text-[2.3rem] min-[430px]:!text-[2.45rem] md:!text-6xl"
      >
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {leadershipStyle.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                className="group rounded-[8px] border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/28 hover:shadow-[0_22px_56px_oklch(0.18_0.01_260/0.08)] sm:p-6 md:min-h-72 md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/14 bg-secondary transition duration-300 group-hover:bg-foreground group-hover:text-background sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  loading="lazy"
                  className="my-6 aspect-[16/10] w-full rounded-[6px] border border-border/80 object-cover shadow-[0_14px_36px_oklch(0.18_0.01_260/0.06)] sm:my-7 md:my-8"
                />
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-normal text-foreground sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-relaxed">
                  {pillar.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ECOSYSTEM */}
      <Section
        id="ecosystem"
        eyebrow={content.ecosystem.label}
        title={content.ecosystem.heading}
        intro={content.ecosystem.description}
      >
        <Ecosystem content={content.ecosystem} />
      </Section>

      {/* TECHNOLOGY STACK & EXPERTISE */}
      <Section
        eyebrow="Core Expertise"
        title="Technology Domains I Specialize In"
        className="border-y border-border bg-white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {expertiseDomains.map((domain, i) => {
            const Icon = domain.icon;

            return (
              <motion.article
                key={domain.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.62, delay: i * 0.05, ease: "easeOut" }}
                className="group rounded-[8px] border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/28 hover:shadow-[0_22px_58px_oklch(0.18_0.01_260/0.08)]"
              >
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/14 bg-secondary transition duration-300 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-normal text-foreground">
                  {domain.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {domain.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* TECHNOLOGY CHALLENGES SOLVED */}
      <Section
        eyebrow="Problem Solving"
        title="Technology Challenges Solved Across Industries"
        className="bg-white"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {technologyChallenges.map((challenge, i) => {
            const Icon = challenge.icon;

            return (
              <motion.article
                key={challenge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: "easeOut" }}
                className="group flex min-h-64 flex-col rounded-[8px] border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/28 hover:shadow-[0_22px_56px_oklch(0.18_0.01_260/0.08)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/14 bg-secondary transition duration-300 group-hover:bg-foreground group-hover:text-background">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="text-lg font-semibold leading-tight tracking-normal text-foreground">
                    {challenge.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {challenge.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* SYSTEMS ARCHITECTED */}
      <section id="systems" className="border-y border-border bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {content.projects.label}
            </div>
            <h2 className="font-display mt-5 text-balance text-[clamp(2.35rem,11vw,3.75rem)] font-semibold leading-[1.04] tracking-normal text-foreground md:mt-6 md:text-6xl">
              {content.projects.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              {content.projects.subheading}
            </p>
          </motion.div>

          <div className="mt-10 border-t border-foreground/18 md:mt-16">
            {content.projects.items.map((system, i) => (
              <motion.article
                key={system.title}
                initial={{ opacity: 0.58, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.44, margin: "-10% 0px -14% 0px" }}
                transition={{ duration: 0.65, delay: i * 0.04, ease: "easeOut" }}
                className="group grid gap-7 border-b border-foreground/14 py-8 transition-opacity duration-500 md:grid-cols-[0.95fr_0.8fr_0.85fr] md:gap-10 md:py-14 lg:grid-cols-[1.08fr_0.86fr_0.92fr] lg:gap-14"
              >
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr] md:block">
                  <div className="text-sm tabular-nums text-muted-foreground">0{i + 1}</div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-normal text-foreground sm:text-3xl md:mt-8 md:text-4xl">
                      {system.title}
                    </h3>
                    <div className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/56">
                      {system.role}
                    </div>
                    {system.imageUrl && (
                      <img
                        src={system.imageUrl}
                        alt=""
                        className="mt-5 aspect-[16/9] w-full rounded-[8px] border border-border object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="text-sm leading-relaxed md:pt-12 md:text-base">
                  <div className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Technology
                  </div>
                  <p className="text-foreground/78">{system.technologyHighlights}</p>
                  {system.description && (
                    <p className="mt-4 text-foreground/62">{system.description}</p>
                  )}
                </div>

                <div className="flex gap-4 text-sm leading-relaxed md:gap-6 md:pt-12 md:text-base">
                  <div>
                    <div className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Outcome
                    </div>
                    <p className="text-foreground/78">{system.outcome}</p>
                  </div>
                  <ArrowUpRight className="mt-8 hidden h-5 w-5 shrink-0 text-foreground/34 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block md:mt-9" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE RECOMMENDATIONS */}
      <Section
        eyebrow="Recommendations"
        title="Trusted By Leaders And Teams"
        className="border-b border-border bg-white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {executiveRecommendations.map((recommendation, i) => (
            <motion.article
              key={recommendation.perspective}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.68, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-[8px] border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-foreground/24 hover:shadow-[0_20px_54px_oklch(0.18_0.01_260/0.08)]"
            >
              <Quote className="h-7 w-7 text-foreground/28" aria-hidden="true" />
              <p className="mt-10 text-xl font-medium leading-snug tracking-normal text-foreground">
                {recommendation.quote}
              </p>
              <div className="mt-8 border-t border-border pt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {recommendation.perspective}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section
        id="journey"
        eyebrow={content.journey.label}
        title={content.journey.heading}
        intro={content.journey.subheading}
        className="border-y border-border bg-white"
      >
        <div className="relative">
          <div className="absolute left-[2.45rem] top-2 bottom-2 hidden w-px overflow-hidden bg-border md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full origin-top bg-foreground/45"
            />
          </div>

          <div className="border-t border-foreground/14">
            {content.journey.stages.map((stage, i) => (
              <motion.article
                key={stage.stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.38, margin: "-8% 0px -12% 0px" }}
                transition={{ duration: 0.72, delay: i * 0.06, ease: "easeOut" }}
                className="grid gap-6 border-b border-foreground/14 py-8 md:grid-cols-[9rem_1fr] md:gap-12 md:py-14 lg:grid-cols-[11rem_1fr]"
              >
                <div className="relative flex items-start gap-5 md:block">
                  <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-foreground/18 bg-white text-sm tabular-nums text-foreground md:h-20 md:w-20 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:mt-7 md:pt-0">
                    Stage {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-16">
                  <div>
                    <h3 className="font-display text-balance text-[clamp(2rem,9vw,3rem)] font-semibold leading-[1.05] tracking-normal text-foreground md:text-5xl">
                      {stage.stage}
                    </h3>
                    <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {stage.period}
                    </div>
                  </div>

                  <div className="max-w-2xl md:pt-2">
                    {stage.role && (
                      <div className="text-lg font-medium leading-snug text-foreground md:text-xl">
                        {stage.role}
                      </div>
                    )}
                    {stage.org && (
                      <div className="mt-2 text-sm text-muted-foreground md:text-base">
                        {stage.org}
                      </div>
                    )}
                    <p className="mt-5 text-base leading-relaxed text-foreground/76 md:mt-6 md:text-lg">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* THOUGHT LEADERSHIP */}
      <Section
        eyebrow="Insights"
        title="Perspectives On The Future Of Technology"
        className="border-b border-border bg-white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thoughtLeadershipArticles.map((article, i) => (
            <motion.article
              key={article}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.64, delay: i * 0.05, ease: "easeOut" }}
              className="group flex min-h-64 flex-col rounded-[8px] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/26 hover:shadow-[0_20px_54px_oklch(0.18_0.01_260/0.08)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Article
                </span>
                <ArrowUpRight className="h-4 w-4 text-foreground/34 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="mt-auto font-display text-3xl font-semibold leading-tight tracking-normal text-foreground">
                {article}
              </h3>
              <div className="mt-6 border-t border-border pt-4 text-xs tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* VISION */}
      <Section
        id="vision"
        eyebrow={content.futureVision.label}
        title={content.futureVision.heading}
        intro={content.futureVision.subheading}
        className="bg-white"
      >
        <div className="grid items-start gap-10 md:gap-14 lg:grid-cols-[0.58fr_0.42fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6 flex items-center justify-between gap-6 border-b border-foreground/14 pb-5 md:mb-8"
            >
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
                  {content.futureVision.blueprintLabel}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-foreground md:text-3xl">
                  {content.futureVision.stackHeading}
                </h3>
              </div>
              <div className="hidden text-right text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
                {String(futureEnterpriseStack.length).padStart(2, "0")} Layers
              </div>
            </motion.div>

            <div className="relative mx-auto max-w-3xl">
              <div className="space-y-2.5 md:space-y-3">
                {futureEnterpriseStack.map((layer, i) => {
                  const isActive = activeFutureLayer === layer.title;
                  const width = 58 + (futureEnterpriseStack.length - i - 1) * 9;

                  return (
                    <motion.button
                      key={layer.title}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{
                        duration: 0.62,
                        delay: (futureEnterpriseStack.length - i - 1) * 0.08,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setActiveFutureLayer(layer.title)}
                      onFocus={() => setActiveFutureLayer(layer.title)}
                      onClick={() => setActiveFutureLayer(layer.title)}
                      className={`relative mx-auto flex min-h-16 w-full items-center justify-between gap-4 border-y px-4 py-4 text-left transition duration-300 max-md:!max-w-full md:px-7 ${
                        isActive
                          ? "border-foreground text-foreground opacity-100"
                          : "border-foreground/16 text-foreground/62 opacity-70 hover:border-foreground/45 hover:text-foreground hover:opacity-100"
                      }`}
                      style={{ maxWidth: `${width}%` }}
                    >
                      <span className="text-xs tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-right text-base font-semibold tracking-normal sm:text-lg md:text-2xl">
                        {layer.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            className="border-t border-foreground/18 pt-7 lg:mt-20"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {content.futureVision.visionLabel}
            </div>
            <p className="mt-5 text-lg font-medium leading-snug text-foreground sm:text-xl md:text-2xl">
              {content.futureVision.vision2030}
            </p>

            <motion.div
              key={selectedFutureLayer?.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-8 border-t border-foreground/14 pt-6 md:mt-10 md:pt-7"
            >
              <div className="text-lg font-semibold tracking-normal text-foreground">
                {selectedFutureLayer?.title}
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {selectedFutureLayer?.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ASK THE CTO KNOWLEDGE HUB */}
      <Section
        eyebrow="Knowledge Hub"
        title="Ask The CTO"
        className="border-t border-border bg-white"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl rounded-[8px] border border-border bg-white px-5 py-2 shadow-[0_18px_50px_oklch(0.18_0.01_260/0.05)] sm:px-7"
        >
          <Accordion type="single" collapsible defaultValue={ctoFaq[0]?.question}>
            {ctoFaq.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border">
                <AccordionTrigger className="min-h-16 py-5 text-left text-base font-semibold leading-snug tracking-normal text-foreground hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-border py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-balance text-[clamp(2.65rem,13vw,4.5rem)] leading-[1.05] md:text-7xl"
          >
            {content.contact.heading.split(content.contact.highlightedWord)[0]}
            <span className="italic text-[oklch(0.45_0.12_250)]">
              {content.contact.highlightedWord}
            </span>
            {content.contact.heading
              .split(content.contact.highlightedWord)
              .slice(1)
              .join(content.contact.highlightedWord)}
          </motion.h2>
          {content.contact.description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.contact.description}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center"
          >
            <a
              href={`mailto:${content.contact.email}`}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 sm:px-6"
            >
              <Mail className="w-4 h-4" />
              {content.contact.email}
            </a>
            <a
              href={`https://${content.contact.website.replace(/^https?:\/\//, "")}`}
              target="_blank"
              rel="noreferrer"
              className="hairline inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium transition hover:bg-muted sm:px-6"
            >
              <Globe className="w-4 h-4" />
              {content.contact.website}
            </a>
            {content.contact.linkedIn && (
              <a
                href={content.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="hairline inline-flex min-h-11 items-center justify-center rounded-full bg-background px-5 py-3 text-sm font-medium transition hover:bg-muted sm:px-6"
              >
                LinkedIn
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-xs text-muted-foreground sm:px-6 md:flex-row md:py-10 md:text-left">
          <div>
            <div className="font-medium text-foreground">{content.footer.name}</div>
            <div className="mt-1">{content.footer.description}</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {content.footer.links.map((link) => (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            © {new Date().getFullYear()} · {content.footer.copyrightText}
          </div>
        </div>
      </footer>

      <FloatingAssistant content={content.assistant} />
    </div>
  );
}
