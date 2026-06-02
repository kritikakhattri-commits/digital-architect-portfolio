import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-28 md:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || intro) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mb-16 md:mb-20"
          >
            {eyebrow && (
              <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="w-8 h-px bg-foreground/40" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-6xl text-balance leading-[1.05]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-balance">
                {intro}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
