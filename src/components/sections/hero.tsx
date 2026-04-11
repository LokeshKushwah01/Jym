"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Headline — split into two lines, staggered reveal
      gsap.from(".hero-line-1", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".hero-line-2", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.55,
      });

      // 2. Subtext — fade in after heading
      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.85,
      });

      // 3. Social proof — fade in
      gsap.from(".hero-proof", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.1,
      });

      // 4. Buttons — scale-in pop entrance
      gsap.from(".hero-cta > *", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.4)",
        delay: 1.3,
      });

      // 5. Scroll indicator — late entrance
      gsap.from(".hero-scroll", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 2,
        ease: "power2.out",
      });

      // 6. Background parallax zoom on scroll
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="absolute inset-0 scale-100 will-change-transform">
          <Image
            src="/images/hero_bg.png"
            alt="JY Gymnasium — Premium Fitness Center"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Dark cinematic overlay with vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(11,11,11,0.6) 0%, rgba(11,11,11,0.75) 50%, rgba(11,11,11,0.92) 100%),
              radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.5) 100%)
            `,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-7">
          {/* Headline — 2-line structure */}
          <h1 className="font-display font-extrabold tracking-tight leading-[1.08]">
            <span className="hero-line-1 block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Body.
            </span>
            <span className="hero-line-2 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
              <span className="text-gradient-gold">Transform Your Life.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub max-w-md mx-auto text-white/45 text-base md:text-lg leading-relaxed font-sans font-medium">
            Achieve real results in 90 days with expert coaching and world-class equipment.
          </p>

          {/* Social Proof */}
          <div className="hero-proof flex items-center justify-center gap-3">
            {/* <div className="flex -space-x-2">
              {["R", "P", "A"].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-surface border-2 border-[#0B0B0B] flex items-center justify-center"
                >
                  <span className="text-accent text-[10px] font-bold">{initial}</span>
                </div>
              ))}
            </div> */}
            <span className="text-white/40 text-xs sm:text-sm font-sans font-medium">
              Trusted by <span className="text-accent font-bold">500+</span> members in Gwalior
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/pricing"
                className="btn-primary px-10 py-4 text-sm inline-flex"
              >
                Join Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="btn-secondary px-10 py-4 text-sm text-white border-white/15 hover:bg-white/5 inline-flex"
              >
                Book Free Trial
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-white/25 text-[10px] font-sans uppercase tracking-[0.2em]">
          Scroll to Explore
        </span>
        <div className="w-5 h-9 border-[1.5px] border-white/15 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-1 bg-accent rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
