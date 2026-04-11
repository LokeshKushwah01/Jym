"use client";

import React from "react";
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
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section 
          style={{
            minHeight: '55vh',
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
            <Badge variant="accent" className="uppercase tracking-[0.3em] font-bold px-6 py-2">The Vanguard</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white text-balance max-w-5xl mx-auto uppercase">
               Meet Your <span className="text-gradient-gold">Coaches</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto">
              Certified, experienced, and obsessed with your progress. Our team represents the pinnacle of fitness coaching in Gwalior.
            </p>
          </div>
        </section>

        {/* Trainer Grid */}
        <section className="section-padding bg-surface/10 border-t border-white/5">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".trainer-card-item" stagger={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 px-2">
                {trainers.map((t) => (
                  <div key={t.id} className="trainer-card-item">
                    <TrainerCard
                      name={t.name}
                      speciality={t.speciality}
                      experience={`${t.cert} • ${t.years}Y Exp`}
                      bio={`Dedicated ${t.speciality.toLowerCase()} specialist focused on mechanical tension and metabolic conditioning.`}
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

        {/* Coaching Philosophy */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                   <div className="space-y-4">
                      <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-sans">The Standard</span>
                      <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
                        We Don&apos;t Rent Trainers. We Build Leaders.
                      </h2>
                   </div>
                   <div className="space-y-6 text-white/50 text-base md:text-lg font-sans leading-relaxed">
                      <p>
                        Every coach at JY Gymnasium undergoes a rigorous selection process. We only hire individuals who possess both international certifications and a proven track record of client transformations.
                      </p>
                      <p>
                        Our coaches are not just there to count reps. They are there to analyze your form, optimize your nutrition, and program your recovery to ensure every second you spend in the gym leads to progress.
                      </p>
                   </div>
                </div>
                <div className="card-glass p-8 md:p-12 space-y-8">
                   {[
                      { label: "Scientific Approach", desc: "Programming based on physiological data, not guesswork." },
                      { label: "Elite Certifications", desc: "Every coach is internationally certified and verified." },
                      { label: "Personalized Focus", desc: "1-on-1 attention to ensure perfect form and safety." },
                   ].map((item) => (
                      <div key={item.label} className="space-y-2">
                         <h4 className="text-white font-display font-bold uppercase tracking-tight">{item.label}</h4>
                         <p className="text-white/40 text-sm font-sans">{item.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        <CTABanner 
          title="Ready to Train With The Best?" 
          subtitle="Book a complimentary consultation with any of our elite coaches today." 
          buttonText="Schedule consultation" 
          buttonHref="/contact" 
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
