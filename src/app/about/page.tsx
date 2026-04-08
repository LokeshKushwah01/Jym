"use client";

import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { SectionHeader } from "../../components/ui/section-header";
import { timeline } from "../../lib/data";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
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

      <main className="flex-1 pt-32 pb-20">
        {/* About Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-6 reveal text-center">
                <Badge variant="accent" className="uppercase tracking-[0.3em] font-black px-6 py-2">Our Legacy</Badge>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                  Two locations. <br />
                  <span className="text-accent underline decoration-4 underline-offset-8">One standard.</span>
                </h1>
                <p className="text-muted text-xl md:text-2xl leading-relaxed font-medium pt-8">
                  Founded in 2018, JY Gymnasium was born from a simple observation: Gwalior deserved a fitness standard that rivaled any global city.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 reveal">
                <div className="space-y-6">
                   <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-border/40 group">
                      <Image 
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                        alt="The Vision" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-3xl font-black uppercase tracking-tight">The Vision</h3>
                      </div>
                   </div>
                  <p className="text-muted leading-relaxed font-medium">
                    We didn't just want to build a gym; we wanted to build a sanctuary for those who take their health seriously. A place where the equipment is never an excuse, and the community is always a catalyst.
                  </p>
                </div>
                <div className="space-y-6">
                   <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-border/40 group">
                      <Image 
                        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                        alt="The Mission" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-3xl font-black uppercase tracking-tight">The Mission</h3>
                      </div>
                   </div>
                  <p className="text-muted leading-relaxed font-medium">
                    To provide an uncompromising fitness experience through world-class equipment, internationally certified coaching, and a culture of relentless improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-surface border-y border-border">
          <div className="container-custom">
            <SectionHeader
              tagName="How We Grew"
              title="The Journey So Far"
              className="reveal"
            />

            <div className="relative space-y-24 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/40 before:to-transparent">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent bg-background text-accent shadow translate-x-px md:translate-x-0 shrink-0 md:order-1 font-black text-sm relative z-10 transition-transform group-hover:scale-125">
                    {index + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background border border-border p-8 rounded-sm shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent font-black text-2xl tracking-tighter">{item.year}</span>
                      <Badge variant="outline" className="uppercase font-bold tracking-widest text-[10px]">{item.title}</Badge>
                    </div>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Standards */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="bg-foreground text-background p-12 md:p-24 rounded-sm flex flex-col md:flex-row gap-12 items-center justify-between reveal">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Global Standards, Local Community.</h2>
                <p className="text-background/70 text-lg uppercase font-bold tracking-widest pt-4">We are certified by global fitness bodies and maintain equipment from international brands like Hammer Strength and Lifefitness.</p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                {["HAMMER STRENGTH®", "LIFEFITNESS®", "ROGUE®", "ELEIKO®"].map((brand) => (
                  <div key={brand} className="text-2xl font-display font-black tracking-tighter text-background/20 hover:text-accent transition-colors cursor-default select-none border-b border-background/10 py-2">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
