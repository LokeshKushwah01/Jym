import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full glass border-b border-border/40 transition-all duration-300">
      <nav className="container-custom flex h-20 items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-black tracking-tighter text-accent uppercase transition-transform group-hover:scale-105">
              JY GYM
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden gap-3 items-center">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <List size={28} weight="bold" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.15em] transition-all hover:text-accent relative py-2",
                pathname === item.href 
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full" 
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          <ThemeToggle />
          <Button variant="accent" size="sm" className="font-bold uppercase tracking-widest px-6" asChild>
            <Link href="/membership">Join Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-500",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 backdrop-blur-xl px-6 py-6 transition-transform duration-500 ease-out sm:max-w-sm sm:ring-1 sm:ring-border",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
               <span className="text-2xl font-display font-black tracking-tighter text-accent uppercase">
                JY GYM
              </span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-foreground hover:bg-surface transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={28} weight="bold" />
            </button>
          </div>
          <div className="mt-12 flow-root">
            <div className="space-y-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-4 py-4 text-3xl font-display font-bold uppercase tracking-tight text-foreground transition-all active:scale-95",
                    pathname === item.href ? "text-accent bg-accent/5" : "hover:bg-surface"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 py-6">
              <Button variant="accent" className="w-full text-lg uppercase tracking-widest font-extrabold py-8 rounded-2xl" asChild>
                <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
