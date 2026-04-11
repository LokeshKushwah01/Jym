import Link from "next/link";
import { InstagramLogo, FacebookLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: InstagramLogo, href: "https://instagram.com", label: "Instagram" },
  { icon: FacebookLogo, href: "https://facebook.com", label: "Facebook" },
  { icon: YoutubeLogo, href: "https://youtube.com", label: "YouTube" },
  { icon: WhatsappLogo, href: "https://wa.me/918982280027", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-accent/20 text-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 select-none pointer-events-none opacity-[0.015] font-display font-black text-[20rem] leading-none text-white z-0">
        JY
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-display font-extrabold tracking-tighter text-gradient-gold">
                JY GYM
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-sans">
              Push your limits and become the strongest version of yourself. Gwalior&apos;s most elite fitness community since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xs font-display font-bold uppercase tracking-[0.3em] text-white/20">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-colors text-sm font-sans font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="space-y-5">
            <h4 className="text-xs font-display font-bold uppercase tracking-[0.3em] text-white/20">Connect</h4>
            <div className="space-y-3 text-sm text-white/50 font-sans">
              <p>Sagartal Rd, Bahodapur, Gwalior</p>
              <p><a href="tel:+918982280027" className="hover:text-accent transition-colors">089822 80027</a></p>
              <p><a href="mailto:alpha@jygym.com" className="hover:text-accent transition-colors">alpha@jygym.com</a></p>
            </div>
            <div className="flex gap-4 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-all hover:-translate-y-0.5" aria-label={s.label}>
                  <s.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/25 uppercase tracking-[0.2em] font-sans font-medium">
          <p>© 2026 JY Gymnasium. All rights reserved.</p>
          <p>Built for results. Designed for you.</p>
        </div>
      </div>
    </footer>
  );
}
