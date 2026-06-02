import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const qa: Record<string, string> = {
  "What is your technology philosophy?":
    "Innovation must be reliable, secure, and human-driven. Every system we ship is engineered to evolve with the business and protect the trust of the people who depend on it.",
  "How does AI power SR18?":
    "AI runs across the SR18 stack — from the gaming engine and fraud detection to supply chain forecasting, CRM intelligence, and distribution analytics. It is a connective layer, not a feature.",
  "How do you approach cybersecurity?":
    "Defense in depth. Zero trust at the perimeter, identity-aware access, encrypted data flows, continuous monitoring, and a culture of secure engineering from the first commit.",
  "How do you scale engineering teams?":
    "Small autonomous pods, clear architectural seams, strong documentation, and ruthless prioritization. We optimize for compounding leverage, not headcount.",
  "What is your future technology vision?":
    "Intelligent, secure, and scalable ecosystems that connect UAE, India, and global markets — built on cloud-native foundations, AI, and disciplined product architecture.",
};

const questions = Object.keys(qa);

export function AskCTO() {
  const [active, setActive] = useState<string>(questions[0]);

  return (
    <div className="hairline rounded-3xl bg-card p-6 md:p-10">
      <div className="flex flex-wrap gap-2 mb-8">
        {questions.map((q) => (
          <button
            key={q}
            onClick={() => setActive(q)}
            className={`text-xs md:text-sm rounded-full px-4 py-2 transition-all border ${
              active === q
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      <div className="space-y-4 min-h-[160px]">
        <div className="flex gap-3 justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-muted px-4 py-2.5 text-sm max-w-md">
            {active}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 shrink-0 rounded-full bg-foreground text-background grid place-items-center text-[10px] font-medium tracking-wider">
              SS
            </div>
            <div className="rounded-2xl rounded-tl-sm hairline bg-background px-4 py-3 text-sm text-foreground/90 max-w-2xl leading-relaxed">
              {qa[active]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
