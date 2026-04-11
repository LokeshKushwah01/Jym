"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Badge } from "../../components/ui/badge";
import { CTABanner } from "../../components/ui/cta-banner";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { programs } from "../../lib/data";

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 bg-[#0B0B0B] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              Find Your <span className="text-gradient-gold">Program</span>
            </h1>
            <p className="text-muted text-lg font-sans max-w-xl mx-auto">
              Blueprints engineered for your exact goal. Every program is backed by science and guided by certified coaches.
            </p>
          </div>
        </section>

        {/* Alternating Program Sections */}
        {programs.map((program, i) => (
          <section key={program.id} className={`section-padding ${i % 2 === 0 ? "bg-surface/30" : "bg-[#0B0B0B]"}`}>
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}
                <GsapReveal animation={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-border group">
                    <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </GsapReveal>

                {/* Content */}
                <GsapReveal animation={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
                  <div className="space-y-6">
                    <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-4 py-1 text-xs">{program.title}</Badge>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight leading-tight">
                      {program.tagline}
                    </h2>
                    <p className="text-muted text-base font-sans leading-relaxed">{program.description}</p>
                    <ul className="space-y-3">
                      {program.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm font-sans">
                          <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                            <Check size={12} weight="bold" className="text-accent" />
                          </div>
                          <span className="text-foreground/70 font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary inline-flex text-sm mt-2">
                      {program.cta}
                    </Link>
                  </div>
                </GsapReveal>
              </div>
            </div>
          </section>
        ))}

        <CTABanner title="Not Sure Which Program Is Right?" subtitle="Chat with our coaches — they'll build a plan around you." buttonText="Talk to a Coach" buttonHref="/contact" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
