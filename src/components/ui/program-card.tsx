"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  tagline: string;
  image: string;
  href: string;
}

export function ProgramCard({ title, tagline, image, href }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative min-w-[300px] h-[380px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
    >
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-surface bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-7">
        <h3 className="text-xl font-display font-extrabold text-white tracking-tight mb-1">{title}</h3>
        <p className="text-white/60 text-sm font-sans mb-4">{tagline}</p>
        <Link
          href={href}
          className="text-accent text-sm font-bold font-sans uppercase tracking-wider hover:text-accent/80 transition-colors inline-flex items-center gap-1"
        >
          Explore →
        </Link>
      </div>
    </motion.div>
  );
}
