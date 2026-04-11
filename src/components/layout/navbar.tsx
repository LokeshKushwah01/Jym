"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b",
        scrolled
          ? "glass border-border/50 shadow-2xl shadow-black/30"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container-custom flex h-20 items-center justify-between" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-extrabold tracking-tighter text-gradient-gold transition-transform group-hover:scale-105">
              JY GYM
            </span>
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="flex lg:hidden gap-3 items-center">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <List size={28} weight="bold" />
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.12em] transition-all hover:text-accent relative py-2",
                pathname === item.href
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full"
                  : "text-white/50 hover:text-white/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
          <ThemeToggle />
          <Link href="/pricing" className="btn-primary">
            Join Now
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-[#0B0B0B] px-6 py-6 lg:hidden border-l border-border"
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-display font-extrabold tracking-tighter text-gradient-gold">JY GYM</span>
                </Link>
                <button className="rounded-full p-2 text-foreground hover:bg-surface transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  <X size={28} weight="bold" />
                </button>
              </div>
              <div className="mt-10 space-y-2">
                {navigation.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-4 text-2xl font-display font-bold uppercase tracking-tight transition-all active:scale-95",
                        pathname === item.href ? "text-accent bg-accent/5" : "text-foreground hover:bg-surface"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link href="/pricing" className="btn-primary w-full text-center text-base py-5" onClick={() => setMobileMenuOpen(false)}>
                  Join Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
