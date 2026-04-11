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
import { TestimonialCard } from "../components/ui/testimonial-card";
import { CTABanner } from "../components/ui/cta-banner";
import { WhatsAppButton } from "../components/ui/whatsapp-button";
import { GsapReveal } from "../components/ui/gsap-reveal";
import { testimonials, programs, galleryItems, gyms, transformations } from "../lib/data";
import { Certificate, Clock, Users, TrendUp, MagnifyingGlass, MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* ═══════ HERO ═══════ */}
        <Hero />

        {/* ═══════ OFFER STRIP ═══════ */}
        {/* <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] text-black overflow-hidden">
          <div className="py-3 flex">
            <div className="animate-marquee flex gap-16 whitespace-nowrap text-sm font-bold uppercase tracking-wider">
              {[...Array(4)].map((_, i) => (
                <span key={i}>🔥 Limited Offer: First Month 30% OFF — Walk in today, no commitment needed &nbsp;&nbsp; ✦ &nbsp;&nbsp;</span>
              ))}
            </div>
          </div>
        </div> */}

        {/* ═══════ WHY CHOOSE US ═══════ */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader tagName="Why Us" title="Why Serious Athletes Choose Us" />
            <GsapReveal animation="fadeUp" staggerSelector=".why-card" stagger={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Certificate, title: "Expert Certified Trainers", desc: "Internationally certified coaches obsessed with your progress and results." },
                  { icon: TrendUp, title: "Personalised 90-Day Plans", desc: "Custom blueprints engineered for your exact body, goals, and timeline." },
                  { icon: Clock, title: "24/7 Access + Community", desc: "Train on your schedule. Our main facility never closes — ever." },
                  { icon: Users, title: "Proven Transformations", desc: "500+ members transformed with discipline, data, and expert guidance." },
                ].map((f) => (
                  <motion.div
                    key={f.title}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="why-card card-glass card-gold-border p-7 space-y-4 cursor-pointer"
                  >
                    <f.icon size={36} weight="duotone" className="text-accent" />
                    <h3 className="text-sm font-display font-bold tracking-tight">{f.title}</h3>
                    <p className="text-muted text-sm font-sans leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ═══════ PROGRAMS PREVIEW ═══════ */}
        <section className="section-padding bg-surface/50">
          <div className="container-custom">
            <SectionHeader tagName="Our Programs" title="Programs Built for Your Goal" />
            <GsapReveal animation="fadeUp">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {programs.slice(0, 3).map((p) => (
                  <ProgramCard key={p.id} title={p.title} tagline={p.tagline} image={p.image} href="/programs" />
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ═══════ TRANSFORMATION PREVIEW ═══════ */}
        <section className="section-padding bg-[#0B0B0B] relative overflow-hidden">
          {/* Subtle gold glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <SectionHeader
              tagName="Transformations"
              title="Real People. Real 90-Day Results."
              subtitle="No filters, no editing. Just discipline and the right coaching."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".transform-card" stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {transformations.map((t) => (
                  <div key={t.name} className="transform-card card-glass overflow-hidden group">
                    <div className="h-[280px] relative">
                      <div className="absolute inset-0 flex">
                        {/* Before */}
                        <div className="w-1/2 bg-zinc-800 flex items-center justify-center relative">
                          <div className="text-center z-10">
                            <div className="w-14 h-14 mx-auto rounded-full bg-zinc-700 flex items-center justify-center border border-zinc-600">
                              <span className="text-white/30 text-xl font-bold">{t.name[0]}</span>
                            </div>
                          </div>
                          <span className="label-before">Before</span>
                        </div>
                        {/* After */}
                        <div className="w-1/2 bg-zinc-700 flex items-center justify-center relative">
                          <div className="text-center z-10">
                            <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                              <span className="text-accent text-xl font-bold">{t.name[0]}</span>
                            </div>
                          </div>
                          <span className="label-after">After 90 Days</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-display font-bold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted font-sans">{t.duration}</p>
                      </div>
                      <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {t.program}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-sm">
                View Full Gallery <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ STATS BAR ═══════ */}
        <section className="py-20 bg-surface/30 border-y border-border">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".stat-item" stagger={0.1}>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                {[
                  { value: "500+", label: "Members" },
                  { value: "4.9★", label: "Google Rating" },
                  { value: "8", label: "Years Strong" },
                  { value: "12", label: "Coaches" },
                ].map((s) => (
                  <div key={s.label} className="stat-item text-center">
                    <div className="stat-number text-4xl md:text-5xl">{s.value}</div>
                    <div className="text-muted text-xs uppercase tracking-[0.2em] font-sans font-medium mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ═══════ OUR LOCATIONS ═══════ */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader tagName="Our Locations" title="Choose Your Gym" subtitle="Two premium locations. One elite standard." />
            <GsapReveal animation="fadeUp" staggerSelector=".gym-location-card" stagger={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gyms.map((gym) => (
                  <motion.div
                    key={gym.id}
                    whileHover={{ y: -6 }}
                    className="gym-location-card card-glass overflow-hidden group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-[240px] overflow-hidden">
                      <Image
                        src={gym.id === "alpha" ? "/images/gym_alpha.png" : "/images/gym_beta.png"}
                        alt={gym.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 z-10">
                        <h3 className="text-xl font-display font-extrabold text-white tracking-tight">{gym.name}</h3>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm text-foreground font-sans">{gym.address}</p>
                          <p className="text-xs text-muted font-sans">{gym.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-accent shrink-0" />
                        <p className="text-sm text-foreground font-sans">{gym.hours.weekday}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {gym.features.slice(0, 4).map((f) => (
                          <span key={f} className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary w-full text-center text-xs py-3 mt-4">
                        Visit {gym.name}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ═══════ GALLERY PREVIEW ═══════ */}
        <section className="section-padding bg-surface/30">
          <div className="container-custom">
            <SectionHeader tagName="Inside Our Gym" title="Real Sweat. Real Results." />
            <GsapReveal animation="fadeUp" staggerSelector=".gallery-thumb" stagger={0.08}>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {galleryItems.slice(0, 6).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="gallery-thumb flex-shrink-0 w-[200px] h-[200px] bg-surface rounded-xl border border-border flex items-center justify-center relative group cursor-pointer overflow-hidden"
                  >
                    <span className="text-muted text-xs font-sans">[ {item.label} ]</span>
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <MagnifyingGlass size={24} className="text-accent" weight="bold" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GsapReveal>
            <div className="text-center mt-8">
              <Link href="/gallery" className="text-accent text-sm font-bold font-sans uppercase tracking-wider hover:text-accent/80 transition-colors inline-flex items-center gap-2">
                View Full Gallery <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ TESTIMONIALS ═══════ */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader tagName="Testimonials" title="What Our Members Say" />
            <GsapReveal animation="fadeUp" staggerSelector=".testimonial-item" stagger={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-item">
                    <TestimonialCard quote={t.quote} name={t.name} duration={t.duration} rating={t.rating} />
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* ═══════ FINAL CTA ═══════ */}
        <CTABanner
          title="Start Your Fitness Journey Today"
          subtitle="First day FREE. No commitment. Just walk in."
          buttonText="Get Your Free Trial"
          buttonHref="/contact"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
