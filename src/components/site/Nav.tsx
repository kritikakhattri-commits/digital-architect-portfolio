import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/data/siteContent";

export function Nav({ content }: { content: SiteContent["header"] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6 sm:pt-4">
        <div className="glass rounded-full flex min-h-16 items-center justify-between gap-3 px-4 py-2 sm:px-5 sm:py-3">
          <a href="#top" onClick={closeMenu} className="flex min-h-11 min-w-0 items-center gap-2">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-[11px] font-medium tracking-wider text-background">
              {content.logoInitials}
            </div>
            <span className="truncate text-sm font-medium tracking-tight">{content.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {content.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={content.ctaLink}
            onClick={closeMenu}
            className="hidden min-h-11 items-center rounded-full bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-charcoal sm:inline-flex md:text-sm"
          >
            {content.ctaText}
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-foreground/12 bg-white/70 text-foreground transition hover:border-foreground/28 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass mt-3 overflow-hidden rounded-[8px] p-2 md:hidden"
            >
              <nav className="grid gap-1 text-sm">
                {content.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center rounded-[8px] px-4 font-medium text-foreground/76 transition hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={content.ctaLink}
                  onClick={closeMenu}
                  className="mt-1 flex min-h-11 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background"
                >
                  {content.ctaText}
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
