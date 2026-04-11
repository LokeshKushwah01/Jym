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
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { programs } from "../../lib/data";

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section 
          style={{
            minHeight: '50vh',
            paddingTop: '100px',
            paddingBottom: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0B0B0B',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="container-custom relative z-10 space-y-8 px-6">
            <Badge variant="accent" className="uppercase tracking-[0.3em] font-bold px-6 py-2">Elite Curriculums</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white text-balance max-w-5xl mx-auto uppercase">
               Find Your <span className="text-gradient-gold">Blueprint</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto">
              Engineered for performance. Every program is a structured path to a specific neurological and physiological outcome.
            </p>
          </div>
        </section>

        {/* Detailed Program Sections */}
        {programs.map((program, i) => (
          <section key={program.id} className={`section-padding scroll-mt-20 ${i % 2 === 0 ? "bg-surface/10" : "bg-[#0B0B0B]"}`}>
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Visual Block */}
                <GsapReveal animation={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
                  <div 
                    className="relative rounded-[10px] overflow-hidden border border-[#2C2C2E] bg-[#1C1C1E] flex flex-col items-center justify-center p-8 text-center"
                    style={{ height: '240px' }}
                  >
                    <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 18, fontFamily: 'Poppins, sans-serif' }}>
                      [ {program.title} ]
                    </span>
                    <p className="text-white/20 text-[10px] mt-2 font-bold uppercase tracking-widest">Blueprint Visual Pending</p>
                  </div>
                </GsapReveal>

                {/* Content Block */}
                <GsapReveal animation={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="h-px w-12 bg-accent" />
                         <span className="text-accent text-sm font-bold uppercase tracking-[0.25em] font-sans">{program.title}</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-[1.1] text-white">
                        {program.tagline}
                      </h2>
                    </div>
                    
                    <p className="text-white/50 text-base md:text-lg font-sans leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {program.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} weight="bold" className="text-accent" />
                          </div>
                          <span className="text-white/70 text-sm font-sans font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <Link 
                        href="/contact" 
                        className="btn-primary inline-flex text-sm px-10 py-5 w-full sm:w-auto items-center justify-center gap-2 group"
                      >
                        {program.cta}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </GsapReveal>
              </div>
            </div>
          </section>
        ))}

        <CTABanner 
          title="Not Sure Which Path To Take?" 
          subtitle="Sit down with our head coaches for a consultation. We'll map out the exact path for your physiology." 
          buttonText="Talk To A Coach" 
          buttonHref="/contact" 
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
