"use client";

import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/sections/hero";
import { SectionHeader } from "../components/ui/section-header";
import { GymCard } from "../components/sections/gym-card";
import { TrainerGrid } from "../components/sections/trainer-grid";
import { Button } from "../components/ui/button";
import { gyms, trainers, testimonials } from "../lib/data";
import { Quotes, Star, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Badge } from "../components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollRef} className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* Locations Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader 
              tagName="Our Locations"
              title="Two Locations. One Standard."
              subtitle="Whether you're hitting the iron at Alpha Grounds or finding your flow at Beta Studio, you'll experience the same relentless pursuit of excellence."
              className="reveal"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
              {gyms.map((gym) => (
                <GymCard key={gym.id} gym={gym} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Split Section */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
                       "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
                       "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
                       "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop"
                     ].map((url, i) => (
                       <div key={i} className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-2xl relative overflow-hidden group/img">
                          <Image src={url} alt="Equipment" fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-70" />
                          <div className="absolute inset-0 bg-accent/10 group-hover/img:opacity-0 transition-opacity" />
                       </div>
                     ))}
                  </div>
              </div>
              <div className="reveal space-y-8 order-1 lg:order-2">
                <Badge variant="accent" className="uppercase tracking-[0.25em] font-extrabold px-6 py-2 rounded-full">The Standard</Badge>
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight">
                  Everything you need <br /> to <span className="text-accent border-b-4 border-accent/20 pb-2">Succeed</span>.
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  We don't settle for average. Our gyms are equipped with world-class machinery, specialized zones for Olympic lifting, CrossFit, and Yoga, all backed by international certification standards.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {["24/7 Access*", "Expert Trainers", "Free Parking", "Modern Recovery", "Community Events", "Nutritional Support"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="lg" className="uppercase font-black tracking-widest mt-4" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader 
              tagName="Expert Coaches"
              title="Built by the Best"
              subtitle="Our trainers aren't just staff; they're pioneers in their fields, holding international certifications and years of proven results."
              className="reveal"
            />
            <div className="reveal">
              <TrainerGrid trainers={trainers.filter(t => t.featured)} />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-surface border-y border-border">
          <div className="container-custom">
            <SectionHeader 
              tagName="Testimonials"
              title="Member Stories"
              className="reveal"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-background border border-border p-10 rounded-sm space-y-6 relative group hover:border-accent/40 transition-colors">
                  <Quotes size={48} weight="fill" className="text-accent/10 absolute top-4 right-4" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} weight="fill" className="text-accent" />
                    ))}
                  </div>
                  <p className="text-lg italic font-medium leading-relaxed text-foreground/90">"{t.quote}"</p>
                  <div>
                    <p className="font-extrabold uppercase tracking-[0.2em] text-foreground">{t.name}</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest opacity-80 mt-1">{t.plan} Member • {t.gym === 'alpha' ? 'Alpha Grounds' : t.gym === 'beta' ? 'Beta Studio' : 'Dual Access'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground dark:bg-black" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(184,150,62,0.15),transparent_70%)]" />
          </div>
          <div className="container-custom relative z-10 text-center space-y-12">
            <div className="space-y-6">
                <Badge variant="accent" className="uppercase tracking-[0.3em] font-extrabold px-6 py-2 rounded-full bg-accent text-accent-foreground border-none">Start Your Journey</Badge>
                <h2 className="text-5xl md:text-8xl font-extrabold uppercase text-white tracking-tighter leading-[1.1] text-balance">
                  Ready to claim <br /> your standard?
                </h2>
                <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed pt-4">
                  Join Gwalior's most elite fitness community today. No joining fees, no nonsense. Just results.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-extrabold uppercase tracking-[0.2em] px-12 h-20 text-lg rounded-2xl transition-all" asChild>
                <Link href="/contact">Book Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
