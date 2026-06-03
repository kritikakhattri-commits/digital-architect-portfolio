import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Globe } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { HeroNetwork } from "@/components/site/HeroNetwork";
import { Section } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FloatingAssistant } from "@/components/site/FloatingAssistant";

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

const metrics = [
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 50, suffix: "+", label: "Enterprise systems delivered" },
  { value: 40, suffix: "%", label: "Operational cost reduction" },
  { value: 5, suffix: "", label: "Business verticals powered" },
  { value: 2, suffix: "", label: "Countries connected" },
];

const architectedSystems = [
  {
    name: "SR18 Gaming Platform",
    scope: "Global play infrastructure",
    architecture: "AI engine · Cloud infrastructure · Security layers",
    outcome: "A stable, scalable platform built for high-concurrency sessions and global growth.",
  },
  {
    name: "SR18 Technologies Cloud System",
    scope: "Enterprise cloud backbone",
    architecture: "Multi-region cloud · Enterprise integrations · Observability",
    outcome:
      "A multi-layered cloud ecosystem powering business-critical systems across UAE and India.",
  },
  {
    name: "Enterprise Automation Systems",
    scope: "Operational intelligence layer",
    architecture: "AI workflows · Process automation · Analytics",
    outcome: "Automation and intelligent analytics that reduced operational cost by 40%.",
  },
];

const responsibilityEvolution = [
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
    description:
      "Leading long-term technology vision focused on AI, cloud architecture, cybersecurity, automation, and scalable digital ecosystems.",
  },
];

const leadershipFramework = [
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
];

const futureEnterpriseStack = [
  {
    layer: "AI Intelligence",
    explanation:
      "Embedded intelligence across decision-making, customer experiences, analytics, and business operations.",
  },
  {
    layer: "Automation Layer",
    explanation:
      "Workflow systems that reduce manual effort, increase speed, and create measurable operational efficiency.",
  },
  {
    layer: "Cloud Infrastructure",
    explanation:
      "Scalable, multi-region infrastructure designed for reliability, performance, and enterprise growth.",
  },
  {
    layer: "Cybersecurity",
    explanation:
      "Security-first architecture built around trust, governance, resilience, and proactive protection.",
  },
  {
    layer: "Digital Foundations",
    explanation:
      "The core systems, data flows, APIs, and infrastructure that allow modern enterprises to scale.",
  },
];

function Home() {
  const [activeFramework, setActiveFramework] = useState(leadershipFramework[0].title);
  const activePrinciple =
    leadershipFramework.find((principle) => principle.title === activeFramework) ??
    leadershipFramework[0];
  const [activeFutureLayer, setActiveFutureLayer] = useState(futureEnterpriseStack[0].layer);
  const selectedFutureLayer =
    futureEnterpriseStack.find((layer) => layer.layer === activeFutureLayer) ??
    futureEnterpriseStack[0];

  return (
    <div id="top" className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_0%,oklch(0.97_0.003_260/0.72)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.19_250)] shadow-[0_0_0_4px_oklch(0.65_0.19_250/0.18)]" />
              SAGAR SHARMA · CHIEF TECHNOLOGY OFFICER
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
              className="mb-6 font-display text-[4.5rem] leading-[0.9] tracking-normal text-foreground sm:text-[6rem] md:text-[7.5rem] lg:text-[8.8rem]"
            >
              Sagar
              <br />
              Sharma
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: "easeOut" }}
              className="font-display max-w-3xl text-balance text-3xl font-semibold leading-[1.08] tracking-normal sm:text-4xl md:text-5xl"
            >
              Building Future-Ready Technology Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              AI, cloud infrastructure, cybersecurity, and scalable digital architecture for modern
              enterprises.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-5 max-w-xl border-l border-border pl-5 text-sm leading-relaxed text-foreground/72"
            >
              Currently serving as CTO at SR18 Group, leading technology strategy across multiple
              business verticals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.52 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_oklch(0.18_0.01_260/0.14)]"
              >
                Explore Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#vision"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-muted hover:shadow-[0_14px_30px_oklch(0.18_0.01_260/0.08)]"
              >
                View Technology Vision
              </a>
            </motion.div>
          </div>

          <HeroNetwork />
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-4xl md:text-5xl">
                  <Counter to={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground tracking-wide">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP FRAMEWORK */}
      <section className="relative overflow-hidden border-y border-border bg-white py-20 md:min-h-screen md:py-24">
        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-5 text-xs uppercase tracking-[0.24em] text-muted-foreground"
            >
              Leadership Framework
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: 0.08, ease: "easeOut" }}
              className="font-display text-balance text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl md:text-6xl"
            >
              How I Evaluate Every Technology Decision
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A simple framework that guides every system, platform, and engineering decision.
            </motion.p>
          </div>

          <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[0.64fr_0.36fr] md:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
              className="relative mx-auto aspect-[1.16/1] w-full max-w-3xl"
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
                    Sagar Sharma
                  </div>
                  <div className="mx-auto mt-3 h-px w-8 bg-foreground/40" />
                  <div className="mt-3 px-3 text-[0.58rem] uppercase leading-snug tracking-[0.16em] text-muted-foreground md:text-[0.64rem]">
                    Chief Technology Officer
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

            <motion.div
              key={activePrinciple.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mx-auto max-w-xl text-center md:text-left"
            >
              <div className="mb-5 h-px w-20 bg-foreground/70 max-md:mx-auto" />
              <h3 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-5xl">
                {activePrinciple.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {activePrinciple.body}
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-3 border-t border-border pt-5 text-center text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground md:mt-10">
            {leadershipFramework.map((principle) => (
              <button
                key={`mobile-${principle.title}`}
                type="button"
                onClick={() => setActiveFramework(principle.title)}
                className={`px-2 py-2 transition-colors md:hidden ${
                  activeFramework === principle.title ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {principle.title}
              </button>
            ))}
            <span className="hidden md:block">Precision</span>
            <span className="hidden md:block">Security</span>
            <span className="hidden md:block">Innovation</span>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <Section
        id="ecosystem"
        eyebrow="Technology Leadership"
        title={<>The Technology Ecosystem I Lead</>}
        intro="From AI-powered gaming infrastructure to enterprise cloud architecture, I oversee the technology systems, engineering teams, and digital transformation initiatives that power multiple business verticals across the SR18 Group."
      >
        <Ecosystem />
      </Section>

      {/* SYSTEMS ARCHITECTED */}
      <section id="systems" className="border-y border-border bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Systems I've Architected
            </div>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-5xl md:text-6xl">
              Flagship Projects
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Systems built across platforms, cloud infrastructure, and automation.
            </p>
          </motion.div>

          <div className="mt-14 border-t border-foreground/18 md:mt-16">
            {architectedSystems.map((system, i) => (
              <motion.article
                key={system.name}
                initial={{ opacity: 0.58, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.44, margin: "-10% 0px -14% 0px" }}
                transition={{ duration: 0.65, delay: i * 0.04, ease: "easeOut" }}
                className="group grid gap-8 border-b border-foreground/14 py-10 transition-opacity duration-500 md:grid-cols-[0.95fr_0.8fr_0.85fr] md:gap-10 md:py-14 lg:grid-cols-[1.08fr_0.86fr_0.92fr] lg:gap-14"
              >
                <div className="grid gap-5 sm:grid-cols-[4rem_1fr] md:block">
                  <div className="text-sm tabular-nums text-muted-foreground">0{i + 1}</div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-normal text-foreground md:mt-8 md:text-4xl">
                      {system.name}
                    </h3>
                    <div className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/56">
                      {system.scope}
                    </div>
                  </div>
                </div>

                <div className="text-sm leading-relaxed md:pt-12 md:text-base">
                  <div className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Architecture
                  </div>
                  <p className="text-foreground/78">{system.architecture}</p>
                </div>

                <div className="flex gap-6 text-sm leading-relaxed md:pt-12 md:text-base">
                  <div>
                    <div className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Outcome
                    </div>
                    <p className="text-foreground/78">{system.outcome}</p>
                  </div>
                  <ArrowUpRight className="mt-8 h-5 w-5 shrink-0 text-foreground/34 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:mt-9" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <Section
        id="journey"
        eyebrow="Career Journey"
        title={<>A Decade of Building, Leading, Shipping.</>}
        intro="The progression from writing code to leading technology strategy across industries."
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
            {responsibilityEvolution.map((stage, i) => (
              <motion.article
                key={stage.stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.38, margin: "-8% 0px -12% 0px" }}
                transition={{ duration: 0.72, delay: i * 0.06, ease: "easeOut" }}
                className="grid gap-8 border-b border-foreground/14 py-10 md:grid-cols-[9rem_1fr] md:gap-12 md:py-14 lg:grid-cols-[11rem_1fr]"
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
                    <h3 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-normal text-foreground md:text-5xl">
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
                    <p className="mt-6 text-base leading-relaxed text-foreground/76 md:text-lg">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* VISION */}
      <Section
        id="vision"
        eyebrow="Future Vision"
        title={<>Engineering the next generation of intelligent enterprises.</>}
        className="bg-white"
      >
        <div className="grid items-start gap-14 lg:grid-cols-[0.58fr_0.42fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8 flex items-center justify-between gap-6 border-b border-foreground/14 pb-5"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Blueprint
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-foreground md:text-3xl">
                  The Future Enterprise Stack
                </h3>
              </div>
              <div className="hidden text-right text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
                05 Layers
              </div>
            </motion.div>

            <div className="relative mx-auto max-w-3xl">
              <div className="space-y-3">
                {futureEnterpriseStack.map((layer, i) => {
                  const isActive = activeFutureLayer === layer.layer;
                  const width = 58 + (futureEnterpriseStack.length - i - 1) * 9;

                  return (
                    <motion.button
                      key={layer.layer}
                      type="button"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{
                        duration: 0.62,
                        delay: (futureEnterpriseStack.length - i - 1) * 0.08,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setActiveFutureLayer(layer.layer)}
                      onFocus={() => setActiveFutureLayer(layer.layer)}
                      onClick={() => setActiveFutureLayer(layer.layer)}
                      className={`relative mx-auto flex min-h-16 w-full items-center justify-between border-y px-5 py-4 text-left transition duration-300 md:px-7 ${
                        isActive
                          ? "border-foreground text-foreground opacity-100"
                          : "border-foreground/16 text-foreground/62 opacity-70 hover:border-foreground/45 hover:text-foreground hover:opacity-100"
                      }`}
                      style={{ maxWidth: `${width}%` }}
                    >
                      <span className="text-xs tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold tracking-normal md:text-2xl">
                        {layer.layer}
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
              Vision 2030
            </div>
            <p className="mt-5 text-xl font-medium leading-snug text-foreground md:text-2xl">
              Building intelligent, secure, and borderless technology ecosystems that connect UAE,
              India, and global markets through AI, automation, cloud infrastructure,
              cybersecurity, and enterprise innovation.
            </p>

            <motion.div
              key={selectedFutureLayer.layer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-10 border-t border-foreground/14 pt-7"
            >
              <div className="text-lg font-semibold tracking-normal text-foreground">
                {selectedFutureLayer.layer}
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {selectedFutureLayer.explanation}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 md:py-44 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl leading-[1.05] text-balance"
          >
            Let's build the <span className="italic text-[oklch(0.45_0.12_250)]">future</span>{" "}
            together.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="mailto:sagar.sharma@sr18group.com"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" />
              sagar.sharma@sr18group.com
            </a>
            <a
              href="https://www.sr18group.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full hairline bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              <Globe className="w-4 h-4" />
              www.sr18group.com
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>Sagar Sharma — CTO, SR18 Universe</div>
          <div>© {new Date().getFullYear()} · Dubai, UAE</div>
        </div>
      </footer>

      <FloatingAssistant />
    </div>
  );
}
