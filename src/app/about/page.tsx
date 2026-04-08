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

      <main className="flex-1 pt-32">
        {/* About Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-6 reveal text-center">
                <Badge variant="accent" className="uppercase tracking-[0.3em] font-black px-6 py-2">Our Legacy</Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1]">
                  Beyond Fitness. <br />
                  <span className="text-accent underline decoration-4 underline-offset-8">This is the standard.</span>
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

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="bg-foreground text-background p-12 md:p-20 rounded-3xl flex flex-col lg:flex-row gap-16 items-center reveal overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -mr-32 -mt-32" />
              
              <div className="space-y-8 max-w-2xl relative z-10 text-center lg:text-left">
                <Badge variant="accent" className="bg-accent text-accent-foreground border-none px-4 py-1">Partnerships</Badge>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] text-balance">
                    Global Standards, <br /> 
                    <span className="text-accent/80">Local Community.</span>
                </h2>
                <p className="text-background/60 text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                    We maintain strict international certification standards, housing world-class equipment from the industry's most trusted manufacturers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full relative z-10">
                {[
                  { name: "HAMMER STRENGTH®", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" },
                  { name: "LIFEFITNESS®", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop" },
                  { name: "ROGUE®", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop" },
                  { name: "ELEIKO®", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" }
                ].map((brand) => (
                  <div key={brand.name} className="group/brand relative bg-surface border border-background/10 rounded-2xl flex items-center justify-center text-center transition-all hover:bg-accent/10 hover:border-accent/30 min-h-[140px] overflow-hidden">
                    <Image 
                      src={brand.img}
                      alt={brand.name}
                      fill
                      className="object-cover opacity-20 grayscale transition-all group-hover/brand:opacity-40 group-hover/brand:grayscale-0 group-hover/brand:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80" />
                    <span className="relative z-10 text-xs sm:text-sm md:text-base font-display font-black tracking-tighter text-white group-hover/brand:text-accent transition-colors leading-tight text-balance px-4">
                        {brand.name}
                    </span>
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
