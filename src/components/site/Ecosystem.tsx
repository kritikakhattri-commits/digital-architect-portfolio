import { motion } from "framer-motion";
import { useState } from "react";

const verticals = [
  { key: "gaming", label: "SR18 Gaming", angle: -90, impact: "AI gaming engine, security layers, scalable platform." },
  { key: "tech", label: "SR18 Technologies", angle: -30, impact: "Cloud infrastructure, automation, enterprise systems." },
  { key: "realestate", label: "SR18 Real Estate", angle: 30, impact: "Digital operations and CRM systems." },
  { key: "textile", label: "SR18 Textile", angle: 90, impact: "Supply chain and operations technology." },
  { key: "beverages", label: "SR18 Beverages", angle: 150, impact: "Distribution analytics and digital systems." },
  { key: "rnd", label: "R&D / AI Labs", angle: 210, impact: "Cross-vertical AI research and prototype engineering." },
];

const R = 38; // radius %

export function Ecosystem() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative aspect-square max-w-[640px] mx-auto">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {verticals.map((v) => {
          const rad = (v.angle * Math.PI) / 180;
          const x = 50 + R * Math.cos(rad);
          const y = 50 + R * Math.sin(rad);
          const isActive = active === v.key;
          return (
            <motion.line
              key={v.key}
              x1="50" y1="50" x2={x} y2={y}
              stroke={isActive ? "oklch(0.65 0.19 250)" : "oklch(0.25 0.01 260)"}
              strokeOpacity={isActive ? 0.8 : 0.2}
              strokeWidth={isActive ? 0.25 : 0.15}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* center */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="glass rounded-full px-6 py-5 text-center shadow-[0_8px_40px_-12px_oklch(0.65_0.19_250/0.2)]">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Center</div>
          <div className="font-display text-xl mt-1">Sagar Sharma</div>
          <div className="text-xs text-muted-foreground">CTO — SR18 Universe</div>
        </div>
      </motion.div>

      {/* nodes */}
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
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setActive(v.key)}
            onMouseLeave={() => setActive(null)}
          >
            <button className="group relative">
              <div className={`w-3 h-3 rounded-full transition-all ${isActive ? "bg-[oklch(0.65_0.19_250)] scale-150 shadow-[0_0_0_6px_oklch(0.65_0.19_250/0.15)]" : "bg-foreground"}`} />
              <div className={`absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {v.label}
              </div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-10 w-56 glass rounded-2xl p-3 text-xs text-muted-foreground text-center z-20"
                >
                  {v.impact}
                </motion.div>
              )}
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
