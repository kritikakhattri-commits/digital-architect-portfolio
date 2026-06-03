import { motion } from "framer-motion";
import { Brain, Cloud, ShieldCheck } from "lucide-react";

const nodes = [
  { x: 12, y: 22, r: 2.5 },
  { x: 30, y: 40, r: 3.2 },
  { x: 48, y: 28, r: 2.3 },
  { x: 68, y: 48, r: 3.6 },
  { x: 86, y: 32, r: 2.5 },
  { x: 18, y: 72, r: 2.4 },
  { x: 44, y: 66, r: 3 },
  { x: 78, y: 76, r: 2.8 },
];

export function HeroNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: 0.4 }}
      className="relative h-[430px] sm:h-[520px] overflow-hidden rounded-[8px] border border-border bg-white shadow-[0_32px_80px_oklch(0.18_0.01_260/0.10)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.18_0.01_260/0.055)_1px,transparent_1px),linear-gradient(90deg,oklch(0.18_0.01_260/0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.19_250/0.5)] to-transparent" />

      <div className="absolute left-7 top-7 right-7 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>Architecture Map</span>
        <span>UAE to India</span>
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.19 250)" stopOpacity="0.18" />
            <stop offset="50%" stopColor="oklch(0.65 0.19 250)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.18 0.01 260)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <motion.path
          d="M12 58 C28 26 55 82 88 38"
          fill="none"
          stroke="url(#hero-line)"
          strokeWidth="0.7"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: "easeOut" }}
        />

        {nodes.slice(0, -1).map((node, i) => (
          <motion.line
            key={`${node.x}-${node.y}`}
            x1={node.x}
            y1={node.y}
            x2={nodes[i + 1].x}
            y2={nodes[i + 1].y}
            stroke="oklch(0.18 0.01 260)"
            strokeOpacity={0.22}
            strokeWidth={0.35}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.45 + i * 0.08, ease: "easeOut" }}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 1.8}
              fill="oklch(0.65 0.19 250)"
              opacity="0.08"
              className="pulse-node"
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i === 3 ? "oklch(0.65 0.19 250)" : "oklch(0.18 0.01 260)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: i === 3 ? 0.9 : 0.78 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.07, ease: "easeOut" }}
            />
          </g>
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="absolute left-8 right-8 bottom-8 rounded-[8px] border border-border bg-background/90 p-5 shadow-[0_20px_50px_oklch(0.18_0.01_260/0.08)] backdrop-blur"
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="font-display text-3xl leading-none">SS</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Secure scale
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "AI", icon: Brain },
            { label: "Cloud", icon: Cloud },
            { label: "Trust", icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[8px] border border-border bg-white p-3">
                <Icon className="mb-3 h-4 w-4 text-[oklch(0.45_0.12_250)]" strokeWidth={1.6} />
                <div className="text-xs font-medium">{item.label}</div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-xs font-medium text-foreground">
        UAE
      </div>
      <div className="absolute right-8 top-[38%] text-xs font-medium text-foreground">India</div>
    </motion.div>
  );
}
