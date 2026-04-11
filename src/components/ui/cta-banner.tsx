"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ title, subtitle, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Premium dark aesthetic — no glow */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      
      <div className="container-custom relative z-10 text-center space-y-8 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05] text-balance max-w-4xl mx-auto"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-white/40 text-base md:text-lg max-w-2xl mx-auto font-sans font-medium"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex justify-center pt-4"
        >
          <Link 
            href={buttonHref} 
            className="btn-primary text-base px-12 py-5 w-full sm:w-auto flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            {buttonText}
            <ArrowRight size={20} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
