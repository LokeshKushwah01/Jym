"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
            alt="Elite Gym Interior"
            fill
            priority
            className="object-cover opacity-30 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="hero-content space-y-8">
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[1.15] tracking-tight text-balance">
            Build Your <br />
            <span className="text-accent underline decoration-accent/20 underline-offset-[12px] decoration-4">Legacy</span>
          </h1>

          <p className="max-w-xl mx-auto text-muted text-lg md:text-xl leading-relaxed">
            Gwalior's premier fitness destination. Premium equipment, elite trainers, and a pursuit of excellence that never ends.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8">
            <Button size="lg" variant="accent" className="w-full sm:w-auto font-extrabold uppercase tracking-widest group h-16 px-10 rounded-2xl shadow-xl shadow-accent/20" asChild>
              <Link href="/membership">
                Start Training
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-extrabold uppercase tracking-widest h-16 px-10 rounded-2xl border-white/20 text-foreground hover:bg-accent/10" asChild>
              <Link href="/about">Explore Locations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
