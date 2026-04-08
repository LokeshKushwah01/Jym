import Link from "next/link";
import { InstagramLogo, FacebookLogo, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { gyms } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
               <span className="text-3xl font-display font-black tracking-tighter text-accent uppercase">
                JY GYM
              </span>
            </Link>
            <p className="max-w-xs text-muted leading-relaxed">
              Two locations. One standard. Experience the pinnacle of fitness in Gwalior with premium equipment and elite coaching.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <InstagramLogo size={24} weight="bold" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <FacebookLogo size={24} weight="bold" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <WhatsappLogo size={24} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {gyms.map((gym) => (
              <div key={gym.id} className="flex flex-col gap-4">
                <h4 className="text-accent font-display text-lg tracking-widest uppercase">{gym.name}</h4>
                <div className="text-muted text-sm space-y-1">
                  <p>{gym.address}</p>
                  <p>{gym.city}</p>
                  <p className="pt-2">Phone: {gym.phone}</p>
                  <p>Email: {gym.email}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-foreground font-display text-lg tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted hover:text-accent transition-colors">Membership Plans</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-muted hover:text-accent transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} JY GYMNASIUM. All rights reserved.</p>
          <p>Designed for excellence in Gwalior.</p>
        </div>
      </div>
    </footer>
  );
}
