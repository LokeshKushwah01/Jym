"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power4.out",
        delay: 0.4,
      });

      // Badge float in
      gsap.from(".hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: "back.out(1.7)",
      });

      // Parallax zoom on scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video / Image Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="absolute inset-0 scale-100 will-change-transform">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/hero_bg.png"
          >
            {/* Replace src with your gym video file */}
            <source src="" type="video/mp4" />
          </video>
          {/* Fallback to local real image */}
          <Image
            src="/images/hero_bg.png"
            alt="JY Gymnasium"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Cinematic Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,11,11,0.65), rgba(11,11,11,0.9))" }} />
      </div>

      {/* Floating Badge
      <div className="hero-badge absolute top-28 right-6 md:top-28 md:right-12 z-20">
        <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full">
          🔥 First Day FREE
        </div>
      </div> */}

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="hero-content space-y-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight text-white">
            Transform Your Body.
            <br />
            <span className="text-gradient-gold">Transform Your Life.</span>
          </h1>
          <p className="max-w-lg mx-auto text-white/50 text-lg md:text-xl leading-relaxed font-sans font-medium">
            Achieve real results in 90 days with expert coaching, world-class equipment, and a community that pushes you forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
            <Link href="/pricing" className="btn-primary px-12 py-5 text-sm">
              Join Now
            </Link>
            <Link href="/contact" className="btn-secondary px-12 py-5 text-sm text-white border-white/20 hover:bg-white/5">
              Book Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
