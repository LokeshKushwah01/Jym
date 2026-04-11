"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/sections/hero";
import { SectionHeader } from "../components/ui/section-header";
import { ProgramCard } from "../components/ui/program-card";
import { CTABanner } from "../components/ui/cta-banner";
import { WhatsAppButton } from "../components/ui/whatsapp-button";
import { GsapReveal } from "../components/ui/gsap-reveal";
import { programs, gyms, transformations } from "../lib/data";
import { Certificate, Clock, Users, TrendUp, MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        {/* ── HERO SECTION ── */}
        <Hero />

        {/* ── WHY CHOOSE US SECTION ── */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader 
              tagName="Performance First" 
              title="Why Serious Athletes Choose JY Gymnasium" 
              subtitle="Gwalior's elite fitness community built on performance, discipline, and data-driven results."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".why-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                {[
                  { icon: Certificate, title: "Elite Certified Coaching", desc: "Expert trainers focused on precision, safety, and your specific physiological goals." },
                  { icon: TrendUp, title: "Precision 90-Day Plans", desc: "Custom-built blueprints engineered to transform your body and mindset in 12 weeks." },
                  { icon: Clock, title: "24/7 Premium Access", desc: "Train whenever inspiration strikes. Our main facility provides unrestricted elite access." },
                  { icon: Users, title: "Data-Driven Success", desc: "500+ successful transformations backed by consistent tracking and expert guidance." },
                ].map((f) => (
                  <motion.div
                    key={f.title}
                    whileHover={{ scale: 1.03 }}
                    className="why-card card-glass p-8 space-y-5 cursor-default border-white/5 hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <f.icon size={32} weight="duotone" className="text-accent" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-display font-bold tracking-tight text-white">{f.title}</h3>
                      <p className="text-white/40 text-sm font-sans leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ── PROGRAMS SECTION ── */}
        <section className="section-padding bg-surface/30">
          <div className="container-custom">
            <SectionHeader 
              tagName="Our Programs" 
              title="Built for Your Ambition" 
              subtitle="Whether you're starting from scratch or breaking a plateau, we have the blueprint."
            />
            <GsapReveal animation="fadeUp">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
                {programs.slice(0, 3).map((p) => (
                  <div 
                    key={p.id} 
                    className="group relative overflow-hidden rounded-[10px] bg-[#1C1C1E] border border-[#2C2C2E]"
                    style={{ height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 18, fontFamily: 'Poppins, sans-serif' }}>
                        [ {p.title} ]
                      </span>
                      <p className="text-white/20 text-[10px] mt-2 font-bold uppercase tracking-widest">Action Visual Pending</p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
            <div className="text-center mt-12">
              <Link href="/programs" className="btn-secondary px-10 py-4 text-sm">
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRANSFORMATION SECTION ── */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader
              tagName="Elite Results"
              title="Real People. Real 90-Day Transformations."
              subtitle="Witness the actual physical and performance transformations achieved through consistency and elite coaching."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".transform-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
                {transformations.slice(0, 3).map((t) => (
                  <div key={t.name} className="transform-card card-glass overflow-hidden group border-[#2C2C2E] rounded-[10px]">
                    <div className="h-[360px] relative bg-[#1C1C1E] flex items-center justify-center">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 20, fontFamily: 'Poppins, sans-serif' }}>
                          [ {t.name} ]
                        </span>
                        <p className="text-white/20 text-[10px] mt-2 font-bold uppercase tracking-[0.2em]">B/A Proof Placeholder</p>
                      </div>
                    </div>
                    <div className="p-7 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-display font-bold text-white tracking-tight">{t.name}</p>
                          <p className="text-xs text-white/40 font-sans uppercase tracking-widest">{t.duration}</p>
                        </div>
                        <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md border border-accent/20">
                          {t.program}
                        </span>
                      </div>
                      <p className="text-white/50 text-xs font-sans italic leading-relaxed">
                        &ldquo;Achieved focused hypertrophy and strength gains through strict adherence to the 90-day blueprint.&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
            <div className="text-center mt-12">
              <Link href="/gallery" className="btn-secondary px-10 py-4 text-sm flex items-center justify-center gap-3 max-w-[280px] mx-auto">
                View More Results <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="py-24 bg-surface/20 border-y border-white/5">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".stat-item" stagger={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                {[
                  { value: "500+", label: "Active Members" },
                  { value: "4.9/5", label: "Google Rating" },
                  { value: "24/7", label: "Elite Access" },
                  { value: "90D", label: "Program Path" },
                ].map((s) => (
                  <div key={s.label} className="stat-item text-center space-y-2">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white px-2 leading-none">{s.value}</div>
                    <div className="text-accent text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ── LOCATIONS SECTION ── */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader 
              tagName="Our Network" 
              title="Two Premium Locations. One Elite Standard." 
              subtitle="Access Gwalior's most focused fitness environments. Both gyms follow the same standard of excellence."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".gym-card" stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2 lg:px-8">
                {gyms.map((gym) => (
                  <motion.div
                    key={gym.id}
                    whileHover={{ scale: 1.02 }}
                    className="gym-card group card-glass overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-[280px] overflow-hidden bg-zinc-800">
                      <Image
                        src={gym.id === "alpha" ? "/images/gym_alpha.png" : "/images/gym_beta.png"}
                        alt={gym.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 z-10">
                        <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">{gym.name}</h3>
                        <div className="flex items-center gap-2 text-white/60 text-xs font-sans font-medium mt-1">
                          <MapPin size={16} className="text-accent" />
                          {gym.address}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {gym.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-sans font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary w-full text-center text-xs py-4">
                        Visit Facility
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        <CTABanner 
          title="Start Your 90-Day Transformation Path" 
          subtitle="Your journey starts with a simple step. Join the Gwalior elite fitness community today." 
          buttonText="Secure Your Spot" 
          buttonHref="/contact" 
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
