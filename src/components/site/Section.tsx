import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headerClassName = "",
  titleClassName = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || intro) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`mb-12 max-w-3xl md:mb-20 ${headerClassName}`}
          >
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
                <span className="h-px w-7 shrink-0 bg-foreground/40 sm:w-8" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2
                className={`font-display text-balance text-[clamp(2.35rem,11vw,3.75rem)] leading-[1.04] md:text-6xl ${titleClassName}`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
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
