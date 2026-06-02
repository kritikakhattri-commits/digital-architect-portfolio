import { motion } from "framer-motion";

// Abstract minimal network: nodes around a center, animated draw lines
const nodes = [
  { x: 50, y: 50, r: 5, label: "Core" },
  { x: 18, y: 22, r: 3 },
  { x: 82, y: 26, r: 3 },
  { x: 14, y: 70, r: 3 },
  { x: 86, y: 74, r: 3 },
  { x: 50, y: 12, r: 2.5 },
  { x: 50, y: 88, r: 2.5 },
  { x: 30, y: 45, r: 2 },
  { x: 70, y: 55, r: 2 },
  { x: 28, y: 82, r: 2 },
  { x: 72, y: 18, r: 2 },
];

export function HeroNetwork() {
  return (
    <div className="absolute inset-0 grid-fade pointer-events-none">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.65 0.19 250)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.65 0.19 250)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* connecting lines from center */}
        {nodes.slice(1).map((n, i) => (
          <motion.line
            key={`l-${i}`}
            x1={50}
            y1={50}
            x2={n.x}
            y2={n.y}
            stroke="oklch(0.25 0.01 260)"
            strokeOpacity={0.18}
            strokeWidth={0.15}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.4 + i * 0.08, ease: "easeOut" }}
          />
        ))}

        {/* secondary connections */}
        <motion.line x1="18" y1="22" x2="50" y2="12" stroke="oklch(0.65 0.19 250)" strokeOpacity={0.25} strokeWidth={0.12}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.4 }} />
        <motion.line x1="82" y1="26" x2="86" y2="74" stroke="oklch(0.65 0.19 250)" strokeOpacity={0.25} strokeWidth={0.12}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.6 }} />
        <motion.line x1="14" y1="70" x2="28" y2="82" stroke="oklch(0.65 0.19 250)" strokeOpacity={0.25} strokeWidth={0.12}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.8 }} />

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 2}
              fill="url(#node-grad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.06 }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.35}
              fill="oklch(0.2 0.015 260)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
              className="pulse-node"
            />
          </g>
        ))}
      </svg>

      {/* soft floating shapes */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-[oklch(0.65_0.19_250/0.06)] blur-3xl float-slow" />
      <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[oklch(0.78_0.01_260/0.25)] blur-3xl float-slow" style={{ animationDelay: "-4s" }} />
    </div>
  );
}
