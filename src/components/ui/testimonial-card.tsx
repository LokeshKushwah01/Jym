"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react/dist/ssr";

interface TestimonialCardProps {
  quote: string;
  name: string;
  duration: string;
  rating?: number;
}

export function TestimonialCard({ quote, name, duration, rating = 5 }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="card-glass p-8 space-y-5 cursor-pointer"
    >
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-accent" />
        ))}
      </div>
      <p className="text-foreground/80 italic text-sm leading-relaxed font-sans">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
          <span className="text-accent font-bold text-xs">{name[0]}</span>
        </div>
        <div>
          <p className="text-sm font-display font-bold text-foreground">{name}</p>
          <p className="text-[10px] text-muted font-sans uppercase tracking-wider">{duration}</p>
        </div>
      </div>
    </motion.div>
  );
}
