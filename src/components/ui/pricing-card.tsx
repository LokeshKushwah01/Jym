"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function PricingCard({ name, price, period, features, popular, ctaText = "Get Started", ctaHref = "/contact" }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative flex flex-col p-8 rounded-xl transition-all",
        popular
          ? "border-2 border-accent card-glass shadow-xl scale-[1.03] z-10"
          : "card-glass"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-muted mb-3">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-extrabold tracking-tighter text-gradient-gold">{price}</span>
          <span className="text-muted text-sm font-sans">/{period}</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm font-sans">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Check size={12} weight="bold" className="text-accent" />
            </div>
            <span className="text-foreground/65">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "w-full text-center py-4 rounded-md text-sm font-bold uppercase tracking-widest transition-all",
          popular ? "btn-primary" : "btn-secondary"
        )}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
}
