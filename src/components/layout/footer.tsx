import Link from "next/link";
import { InstagramLogo, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden px-4 md:px-0">
      {/* Signature Watermark */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-sans font-black text-[25rem] leading-none text-foreground z-0 drop-shadow-2xl">
        JY
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        {/* Elite CTA Bar */}
        <div className="mb-16 border border-accent/20 rounded-full px-8 py-4 backdrop-blur-sm reveal bg-white/[0.01]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/60">The Elite Standard of Gwalior Since 2018</p>
                <Link href="/membership" className="group flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white hover:text-accent transition-colors">
                    Join the Legacy <span className="w-12 h-[1px] bg-accent/60 group-hover:w-16 transition-all" />
                </Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center reveal-stagger">
          {/* Brand Identity */}
          <div className="flex flex-col gap-6 reveal">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
               <span className="text-3xl font-sans font-black tracking-tighter text-white uppercase">
                JY GYM
              </span>
            </Link>
            <p className="max-w-xs text-secondary text-sm font-medium leading-relaxed opacity-40">
              Forging the future of fitness. One member at a time. Experience unparalleled performance.
            </p>
            <div className="flex gap-6 pt-2">
              {[
                { icon: InstagramLogo, href: "#" },
                { icon: FacebookLogo, href: "#" },
                { icon: WhatsappLogo, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="text-white/40 hover:text-accent transition-all hover:-translate-y-1">
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Optimized Heritage Text */}
          <div className="flex flex-col items-center justify-center text-center reveal">
            <div className="space-y-4 py-4">
                <div className="w-10 h-px bg-accent/20 mx-auto" />
                <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/50 leading-[2] max-w-[200px]">
                    Forging Elite Legacies. <br /> 
                    The Standard of Gwalior.
                </p>
                <div className="w-10 h-px bg-accent/20 mx-auto" />
            </div>
          </div>

          {/* Curated Navigation */}
          <div className="flex flex-col gap-6 md:items-end reveal">
            <h4 className="text-white/20 font-sans text-[10px] tracking-[0.4em] font-black uppercase">Navigation</h4>
            <ul className="space-y-4 md:text-right">
              {[
                { name: "Our Story", href: "/about" },
                { name: "Gym Gallery", href: "/gallery" },
                { name: "Membership Plans", href: "/membership" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name} className="flex items-center gap-3 md:justify-end group">
                  <span className="w-1.5 h-1.5 bg-white/10 group-hover:bg-accent group-hover:scale-150 rounded-full transition-all" />
                  <Link href={link.href} className="text-white/60 group-hover:text-accent transition-all text-[11px] font-bold uppercase tracking-[0.2em]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Signature Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold reveal">
          <div className="flex items-center gap-4">
             <div className="flex gap-2">
                 <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                 <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
             </div>
             <p>© 2026 JY GYMNASIUM. GLOBAL ELITE STANDARDS.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-black">
            <div className="flex items-center gap-4">
                <p>ESTABLISHED IN GWALIOR</p>
                <span className="hidden md:block h-3 w-px bg-white/10" />
                <p>ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex gap-2">
                 <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                 <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
