import { motion } from "framer-motion";

const links = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#pillars", label: "Technology" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div className="glass rounded-full flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-foreground text-background grid place-items-center text-[11px] font-medium tracking-wider">SS</div>
            <span className="text-sm font-medium tracking-tight">Sagar Sharma</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-xs md:text-sm font-medium rounded-full bg-foreground text-background px-4 py-2 hover:bg-charcoal transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.header>
  );
}
