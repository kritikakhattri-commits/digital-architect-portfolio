import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  ShieldCheck,
  Network,
  Layers,
  Users,
  ArrowUpRight,
  Mail,
  Globe,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { HeroNetwork } from "@/components/site/HeroNetwork";
import { Section } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { Ecosystem } from "@/components/site/Ecosystem";
import { AskCTO } from "@/components/site/AskCTO";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagar Sharma — CTO, SR18 Universe" },
      {
        name: "description",
        content:
          "Sagar Sharma is the CTO of SR18 Universe — architecting AI, cloud, cybersecurity, and scalable systems across Gaming, Technologies, Real Estate, Textile, and Beverages.",
      },
      { property: "og:title", content: "Sagar Sharma — CTO, SR18 Universe" },
      {
        property: "og:description",
        content:
          "Architecting the digital backbone of the SR18 Universe. AI, cloud, cybersecurity, and scalable systems for the next generation of intelligent enterprises.",
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

const pillars = [
  { icon: Brain, title: "AI & Automation", body: "Production-grade AI woven into business operations — forecasting, intelligence, and autonomous workflows." },
  { icon: Cloud, title: "Cloud Infrastructure", body: "Multi-region, cloud-native platforms engineered for resilience, observability, and elastic scale." },
  { icon: ShieldCheck, title: "Cybersecurity", body: "Zero-trust architectures, identity-aware access, and continuous security across the SR18 stack." },
  { icon: Network, title: "Scalable Systems Design", body: "Distributed systems engineered for compounding throughput, low latency, and graceful failure." },
  { icon: Layers, title: "Product Architecture", body: "Clear seams between domains so teams ship independently without breaking the whole." },
  { icon: Users, title: "Engineering Leadership", body: "Small autonomous pods, strong principles, and a culture of secure, thoughtful engineering." },
];

const projects = [
  {
    name: "SR18 Gaming Platform",
    role: "Chief Architect",
    tech: "AI engine · Cloud infrastructure · Security layers",
    result: "A stable, scalable platform built for global play and millions of concurrent sessions.",
  },
  {
    name: "SR18 Technologies Cloud System",
    role: "Lead Architect",
    tech: "Multi-region cloud · Enterprise integrations",
    result: "Multi-layered cloud ecosystem powering enterprise clients across UAE and India.",
  },
  {
    name: "Enterprise Automation Systems",
    role: "Engineering Lead",
    tech: "AI · Workflow automation · Analytics",
    result: "Reduced operational costs by 40% through automation and intelligent analytics.",
  },
];

const journey = [
  { period: "2012 — 2016", title: "B.Tech, Computer Science Engineering", org: "Delhi Technological University" },
  { period: "2016 — 2019", title: "Senior Software Engineer", org: "CodeSphere Technologies" },
  { period: "2019 — 2023", title: "Head of Engineering", org: "TechSol India Pvt Ltd" },
  { period: "2023 — Present", title: "Chief Technology Officer", org: "SR18 Group, Dubai UAE" },
];

const certs = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Architect",
  "Certified Ethical Hacker",
  "Machine Learning — Stanford Online",
];

function Home() {
  return (
    <div id="top" className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20">
        <HeroNetwork />
        <div className="relative mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.19_250)] shadow-[0_0_0_4px_oklch(0.65_0.19_250/0.18)]" />
            CTO · SR18 Universe · Dubai, UAE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance max-w-5xl"
          >
            Architecting the digital backbone of the{" "}
            <span className="italic text-[oklch(0.4_0.08_250)]">SR18 Universe</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
          >
            Technology leader building AI, cloud infrastructure, cybersecurity, and scalable
            systems across SR18 Gaming, Technologies, Real Estate, Textile, and Beverages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Explore Ecosystem
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full hairline bg-background/60 px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              View Technology Vision
            </a>
          </motion.div>
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

      {/* ECOSYSTEM */}
      <Section
        id="ecosystem"
        eyebrow="The Universe"
        title={<>One ecosystem. <span className="italic text-muted-foreground">Five verticals.</span> Engineered in concert.</>}
        intro="A connected technology fabric across the SR18 Group. Hover any node to see the technology impact."
      >
        <Ecosystem />
      </Section>

      {/* PILLARS */}
      <Section
        id="pillars"
        eyebrow="Technology Pillars"
        title={<>The disciplines behind every system we ship.</>}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden hairline">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative bg-card p-8 md:p-10 hover:bg-secondary/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl hairline grid place-items-center mb-6 text-foreground/80 group-hover:text-[oklch(0.5_0.16_250)] group-hover:border-[oklch(0.65_0.19_250/0.4)] transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                <ArrowUpRight className="absolute top-8 right-8 w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="Flagship Work"
        title={<>Selected systems, shipped at scale.</>}
      >
        <div className="space-y-px hairline rounded-3xl overflow-hidden bg-border">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-card p-8 md:p-12 hover:bg-secondary/50 transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-xs text-muted-foreground tabular-nums pt-2">
                  0{i + 1}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.name}</h3>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[oklch(0.5_0.16_250)]">
                    {p.role}
                  </div>
                </div>
                <div className="md:col-span-6 space-y-3 text-sm md:text-base">
                  <p className="text-muted-foreground">{p.tech}</p>
                  <p className="text-foreground/90 leading-relaxed">{p.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <section className="relative py-32 md:py-44 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Leadership Philosophy
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.1] text-balance"
          >
            “Innovation must be{" "}
            <span className="italic text-[oklch(0.45_0.12_250)]">reliable</span>,{" "}
            <span className="italic text-[oklch(0.45_0.12_250)]">secure</span>, and{" "}
            <span className="italic text-[oklch(0.45_0.12_250)]">human-driven</span>.”
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 max-w-2xl mx-auto text-muted-foreground text-balance"
          >
            Sagar believes technology should not only work today, but evolve with business needs,
            protect trust, and create long-term operational value.
          </motion.p>
        </div>
      </section>

      {/* JOURNEY */}
      <Section
        id="journey"
        eyebrow="Career Journey"
        title={<>A decade of building, leading, shipping.</>}
      >
        <div className="relative max-w-3xl">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          <ul className="space-y-12">
            {journey.map((j, i) => (
              <motion.li
                key={j.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background hairline grid place-items-center">
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.19_250)]" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {j.period}
                </div>
                <div className="mt-2 font-display text-2xl">{j.title}</div>
                <div className="text-muted-foreground text-sm mt-1">{j.org}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground mr-2">Certifications</span>
            {certs.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-full hairline bg-background px-4 py-2 text-xs md:text-sm text-foreground/80"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <Section
        id="vision"
        eyebrow="Future Vision"
        title={<>Engineering the next generation of intelligent enterprises.</>}
        intro="Sagar's vision is to build intelligent, secure, and scalable technology ecosystems that connect UAE, India, and global markets through AI, automation, cloud systems, and enterprise innovation."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { k: "AI everywhere", v: "Embedded intelligence across every operational layer." },
            { k: "Secure by default", v: "Zero-trust foundations from infrastructure to interface." },
            { k: "Borderless scale", v: "Systems engineered for UAE, India, and global markets." },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="hairline rounded-2xl p-6 bg-card"
            >
              <div className="text-sm font-medium">{c.k}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.v}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ASK THE CTO */}
      <Section
        id="ask"
        eyebrow="Ask the CTO"
        title={<>Conversations with the technology desk.</>}
        intro="A short Q&A on philosophy, AI, security, scale, and what comes next."
      >
        <AskCTO />
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
            Let's build the <span className="italic text-[oklch(0.45_0.12_250)]">future</span> together.
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
    </div>
  );
}
