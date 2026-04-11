"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { TrainerCard } from "../../components/ui/trainer-card";
import { CTABanner } from "../../components/ui/cta-banner";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { trainers } from "../../lib/data";

export default function TrainersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 bg-[#0B0B0B] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Our Team</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              Meet Your <span className="text-gradient-gold">Coaches</span>
            </h1>
            <p className="text-muted text-lg font-sans max-w-xl mx-auto">
              Certified, experienced, and obsessed with your progress.
            </p>
          </div>
        </section>

        {/* Trainer Grid */}
        <section className="section-padding bg-surface/30">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".trainer-item" stagger={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainers.map((t) => (
                  <div key={t.id} className="trainer-item">
                    <TrainerCard
                      name={t.name}
                      speciality={t.speciality}
                      experience={`${t.cert} • ${t.years}Y Exp`}
                      bio={`Dedicated ${t.speciality.toLowerCase()} coach helping members push past their limits every day.`}
                      initials={t.name.split(" ").map(n => n[0]).join("")}
                      instagram="https://instagram.com"
                      whatsapp="918982280027"
                    />
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        <CTABanner title="Ready to Train with the Best?" subtitle="Book a free session with any of our coaches." buttonText="Book Free Trial" buttonHref="/contact" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
