"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { SectionHeader } from "../../components/ui/section-header";
import { CTABanner } from "../../components/ui/cta-banner";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { timeline } from "../../lib/data";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/gym_alpha.png" alt="About" fill className="object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]" />
          </div>
          <div className="container-custom relative z-10 text-center space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              We Didn&apos;t Build a Gym.<br />
              <span className="text-gradient-gold">We Built a Movement.</span>
            </h1>
          </div>
        </section>

        {/* Two-col Story */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <GsapReveal animation="fadeLeft">
                <div className="aspect-video relative rounded-xl overflow-hidden border border-border">
                  <Image src="/images/gym_alpha.png" alt="Our gym" fill className="object-cover" />
                </div>
              </GsapReveal>
              <GsapReveal animation="fadeRight">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
                    Born from a Simple Belief
                  </h2>
                  <p className="text-muted text-lg font-sans leading-relaxed">
                    Founded in 2018, JY Gymnasium was born from a simple observation: Gwalior deserved a fitness standard that rivaled any global city. We didn&apos;t just want to build a gym — we wanted to build a sanctuary for transformation.
                  </p>
                  <p className="text-muted font-sans leading-relaxed">
                    A place where the equipment is never an excuse, the community is always a catalyst, and every member is treated like a champion in the making.
                  </p>
                </div>
              </GsapReveal>
            </div>
          </div>
        </section>

        {/* Mission Quote */}
        <section className="py-24 bg-surface/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <GsapReveal animation="fadeUp">
              <div className="max-w-3xl mx-auto border-l-4 border-accent pl-8 py-4">
                <p className="text-2xl md:text-3xl font-display font-bold leading-relaxed italic text-foreground/80">
                  &ldquo;To provide an uncompromising fitness experience through world-class equipment, internationally certified coaching, and a culture of relentless improvement.&rdquo;
                </p>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mt-6 font-sans">— Our Mission</p>
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".about-stat" stagger={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "500+", label: "Active Members" },
                  { value: "8", label: "Years Strong" },
                  { value: "12", label: "Expert Coaches" },
                ].map((s) => (
                  <div key={s.label} className="about-stat card-glass p-10 text-center">
                    <div className="stat-number text-5xl mb-2">{s.value}</div>
                    <div className="text-muted text-sm uppercase tracking-widest font-sans font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-surface/30 border-y border-border">
          <div className="container-custom">
            <SectionHeader tagName="Our Journey" title="The Story So Far" />
            <GsapReveal animation="fadeUp" staggerSelector=".timeline-item" stagger={0.15}>
              <div className="relative space-y-16 max-w-3xl mx-auto">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
                {timeline.map((item, i) => (
                  <div key={item.year} className="timeline-item relative flex items-start gap-8">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm shrink-0 shadow-md">
                      {i + 1}
                    </div>
                    <div className="card-glass p-6 flex-1">
                      <span className="text-accent font-display font-extrabold text-xl">{item.year}</span>
                      <h3 className="text-sm font-display font-bold mt-1">{item.title}</h3>
                      <p className="text-muted text-sm font-sans mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* Environment Gallery */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader tagName="Our Space" title="Built for Performance" />
            <GsapReveal animation="fadeUp" staggerSelector=".env-photo" stagger={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Training Floor", img: "/images/gym_alpha.png" },
                  { label: "Recovery Zone", img: "/images/hero_bg.png" },
                  { label: "CrossFit Arena", img: "/images/gym_beta.png" },
                ].map((p) => (
                  <div key={p.label} className="env-photo aspect-video relative rounded-xl overflow-hidden group border border-border">
                    <Image src={p.img} alt={p.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-display font-bold text-sm uppercase tracking-wider">{p.label}</span>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        <CTABanner title="Ready to Join the Movement?" buttonText="Get Your Free Trial" buttonHref="/contact" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
