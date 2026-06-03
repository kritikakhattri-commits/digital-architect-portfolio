import { motion } from "framer-motion";
import { useState } from "react";

const verticals = [
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
];

const R = 38;

export function Ecosystem() {
  const [active, setActive] = useState<string | null>(verticals[0].key);
  const activeVertical = verticals.find((vertical) => vertical.key === active) ?? verticals[0];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-3 md:hidden">
        {verticals.map((vertical) => {
          const isActive = active === vertical.key;

          return (
            <button
              key={vertical.key}
              type="button"
              onClick={() => setActive(vertical.key)}
              className={`min-h-20 rounded-[8px] border p-4 text-left transition ${
                isActive
                  ? "border-foreground bg-white shadow-[0_16px_40px_oklch(0.18_0.01_260/0.08)]"
                  : "border-border bg-white/72 text-foreground/74"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                    isActive ? "bg-[oklch(0.65_0.19_250)]" : "bg-foreground/40"
                  }`}
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {vertical.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {vertical.summary}
                  </span>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="mt-3 block border-t border-border pt-3 text-sm leading-relaxed text-foreground/76"
                    >
                      {vertical.detail}
                    </motion.span>
                  )}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-[8px] border border-border bg-white p-4 md:hidden">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Active Vertical
        </div>
        <div className="mt-2 text-lg font-semibold tracking-normal text-foreground">
          {activeVertical.label}
        </div>
      </div>

      <div className="relative mx-auto hidden aspect-square max-w-[720px] md:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {verticals.map((v) => {
            const rad = (v.angle * Math.PI) / 180;
            const x = 50 + R * Math.cos(rad);
            const y = 50 + R * Math.sin(rad);
            const isActive = active === v.key;
            return (
              <motion.line
                key={v.key}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={isActive ? "oklch(0.65 0.19 250)" : "oklch(0.25 0.01 260)"}
                strokeOpacity={isActive ? 0.7 : 0.18}
                strokeWidth={isActive ? 0.32 : 0.16}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.15, delay: 0.15, ease: "easeOut" }}
              />
            );
          })}
        </svg>

        <motion.div
          initial={{ scale: 0.86, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 rounded-full bg-[oklch(0.65_0.19_250/0.08)] blur-xl pulse-node" />
          <div className="relative min-h-48 w-48 rounded-full border border-border bg-white px-7 py-8 text-center shadow-[0_24px_70px_oklch(0.18_0.01_260/0.10)] sm:min-h-56 sm:w-56">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
              Sagar Sharma
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Chief Technology Officer</div>
            <div className="mx-auto my-5 h-px w-14 bg-border" />
            <div className="space-y-3 text-xs text-foreground/80">
              <div>
                <div className="font-display text-2xl leading-none">10+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-display text-2xl leading-none">50+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Enterprise Systems Delivered
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {verticals.map((v, i) => {
          const rad = (v.angle * Math.PI) / 180;
          const x = 50 + R * Math.cos(rad);
          const y = 50 + R * Math.sin(rad);
          const isActive = active === v.key;
          return (
            <motion.div
              key={v.key}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setActive(v.key)}
            >
              <button
                type="button"
                onClick={() => setActive(v.key)}
                className="group relative block min-h-11 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <div
                  className={`mx-auto h-4 w-4 rounded-full border border-background transition-all ${
                    isActive
                      ? "scale-125 bg-[oklch(0.65_0.19_250)] shadow-[0_0_0_7px_oklch(0.65_0.19_250/0.13)]"
                      : "bg-foreground shadow-[0_0_0_5px_oklch(0.18_0.01_260/0.04)]"
                  }`}
                />
                <div
                  className={`mt-4 w-44 text-xs font-medium leading-tight transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <div>{v.label}</div>
                  <div className="mt-1 text-[10px] font-normal leading-snug text-muted-foreground">
                    {v.summary}
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 top-20 z-20 w-60 -translate-x-1/2 rounded-[8px] border border-border bg-white p-4 text-center text-xs leading-relaxed text-muted-foreground shadow-[0_20px_50px_oklch(0.18_0.01_260/0.10)]"
                  >
                    {v.detail}
                  </motion.div>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
