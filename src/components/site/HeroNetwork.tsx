import { motion } from "framer-motion";
import type { SiteContent } from "@/data/siteContent";

const profileImage = "/assets/sagar-sharma.png";

export function HeroNetwork({ content: _content }: { content: SiteContent["hero"] }) {
  return (
    <motion.figure
      initial={false}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: 0.2 }}
      className="relative mx-auto h-[380px] w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_34px_90px_rgba(15,23,42,0.16)] sm:h-[480px] sm:max-w-full lg:h-[620px]"
    >
      <img
        src={profileImage}
        alt="Sagar Sharma, Chief Technology Officer"
        className="h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_48%,rgba(15,23,42,0.38)_100%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/35" />

      <figcaption className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-[22px] border border-white/45 bg-white/82 px-4 py-3 shadow-[0_18px_44px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px] sm:px-5 sm:py-4">
        <div className="text-base font-semibold leading-tight text-[#0F172A] sm:text-lg">
          Sagar Sharma
        </div>
        <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          Chief Technology Officer
        </div>
      </figcaption>
    </motion.figure>
  );
}
