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
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
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
          <div className="container-custom relative z-10 text-center space-y-8">
            <Badge variant="accent" className="uppercase tracking-[0.25em] font-bold px-6 py-2">Elite Legacy</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white text-balance max-w-5xl mx-auto">
              We Didn&apos;t Just Build a Gym.<br />
              <span className="text-gradient-gold">We Built a Sanctuary for Results.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto">
              Founded on the principle that Gwalior deserves world-class fitness standards.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="section-padding bg-surface/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <GsapReveal animation="fadeLeft">
                <div 
                  className="relative rounded-[10px] overflow-hidden border border-[#2C2C2E] bg-[#1C1C1E] flex flex-col items-center justify-center p-12 text-center"
                  style={{ height: '380px' }}
                >
                   <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 22, fontFamily: 'Poppins, sans-serif' }}>
                      [ The Philosophy Asset ]
                   </span>
                   <p className="text-white/20 text-[10px] mt-4 font-bold uppercase tracking-[0.3em]">Elite Standards Visualized</p>
                </div>
              </GsapReveal>
              <GsapReveal animation="fadeRight" className="space-y-8">
                <div className="space-y-4">
                  <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-sans">The Philosophy</span>
                  <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
                    Performance Is Our <br/> Only Metric.
                  </h2>
                </div>
                <div className="space-y-6 text-white/50 text-base md:text-lg font-sans leading-relaxed">
                  <p>
                    Established in 2018, JY Gymnasium was born from a singular gap in the market: the lack of high-performance training environments in Gwalior. We reset the bar by importing world-class equipment and mandating international certifications for every coach.
                  </p>
                  <p>
                    We don&apos;t sell memberships. We sell the path to the strongest version of yourself. From professional athletes to corporate leaders, we provide the tools, the discipline, and the culture required for elite transformation.
                  </p>
                </div>
              </GsapReveal>
            </div>
          </div>
        </section>

        {/* Core Values / Journey */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader 
              tagName="Chronicles" 
              title="The Evolution of Excellence" 
              subtitle="Our journey of building Gwalior's most focused fitness community."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".timeline-card" stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className="timeline-card card-glass p-10 space-y-6 flex flex-col items-start border-white/5 hover:border-accent/10 transition-colors">
                    <span className="text-accent font-display font-black text-4xl leading-none">{item.year}</span>
                    <div className="space-y-3">
                      <h3 className="text-white font-display font-bold text-xl uppercase tracking-tight">{item.title}</h3>
                      <p className="text-white/40 text-sm font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* Mission Quote */}
        <section className="py-24 md:py-32 bg-surface/10 relative overflow-hidden">
          <div className="container-custom relative z-10 text-center">
             <GsapReveal animation="fadeUp">
                <div className="max-w-4xl mx-auto space-y-10">
                  <div className="w-20 h-1 bg-accent mx-auto" />
                  <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight italic text-white/80">
                    &ldquo;Our mission is to provide an uncompromising fitness experience through elite coaching and a culture of relentless improvement.&rdquo;
                  </p>
                  <div className="pt-4">
                    <p className="text-accent text-sm font-bold uppercase tracking-[0.4em] font-sans">— THE FOUNDATION</p>
                  </div>
                </div>
             </GsapReveal>
          </div>
        </section>

        <CTABanner 
          title="Become Part of the Legacy" 
          subtitle="Your transformation story is the next chapter we want to write." 
          buttonText="Start Your Journey" 
          buttonHref="/contact" 
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
