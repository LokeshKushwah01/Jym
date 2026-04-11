"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tagName?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  tagName,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-3 mb-12 md:mb-20 px-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {tagName && (
        <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] font-sans">
          {tagName}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-balance text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="max-w-2xl text-white/50 text-base md:text-lg leading-relaxed mt-2 text-balance font-sans font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
