"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { PricingCard } from "../../components/ui/pricing-card";
import { SectionHeader } from "../../components/ui/section-header";
import { FAQAccordion } from "../../components/ui/faq-accordion";
import { BMICalculator } from "../../components/ui/bmi-calculator";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { faqs, gyms } from "../../lib/data";
import { cn } from "../../lib/utils";
import Link from "next/link";

const plansByGym: Record<string, { name: string; price: string; period: string; features: string[]; popular?: boolean }[]> = {
  alpha: [
    { name: "Basic", price: "₹1,499", period: "month", features: ["Gym access 6am–10pm", "Group classes (3/week)", "Locker room access", "Fitness assessment", "App tracking"] },
    { name: "Standard", price: "₹3,999", period: "3 months", popular: true, features: ["Everything in Basic", "1 PT session/week", "Custom diet plan", "Progress tracking dashboard", "Priority class booking", "Body composition tracking"] },
    { name: "Premium", price: "₹9,999", period: "year", features: ["Everything in Standard", "Unlimited personal training", "Priority booking (all classes)", "Supplement guidance", "2 guest passes/month", "Steam & sauna access", "Quarterly body assessment"] },
  ],
  beta: [
    { name: "Starter", price: "₹1,199", period: "month", features: ["Gym access 5am–11pm", "Group classes (2/week)", "Locker room access", "Fitness assessment"] },
    { name: "Growth", price: "₹3,499", period: "3 months", popular: true, features: ["Everything in Starter", "1 PT session/week", "Custom diet plan", "Rooftop track access", "CrossFit arena", "Steam room"] },
    { name: "Elite", price: "₹8,999", period: "year", features: ["Everything in Growth", "Unlimited PT", "5 AM early access", "Priority booking", "2 guest passes/month", "Monthly assessment", "Premium locker"] },
  ],
};

export default function PricingPage() {
  const [selectedGym, setSelectedGym] = useState("alpha");
  const plans = plansByGym[selectedGym];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 bg-[#0B0B0B] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              Invest in <span className="text-gradient-gold">Yourself</span>
            </h1>
          </div>
        </section>

        {/* Offer Strip */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8] py-4 text-center">
          <p className="text-black text-sm font-bold font-sans uppercase tracking-wider">
            🔥 First Day FREE — No card required. Just walk in.
          </p>
        </div>

        {/* Gym Selector */}
        <section className="py-10 bg-[#0B0B0B]">
          <div className="container-custom">
            <div className="flex justify-center gap-4">
              {gyms.map((gym) => (
                <button
                  key={gym.id}
                  onClick={() => setSelectedGym(gym.id)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                    selectedGym === gym.id
                      ? "btn-primary"
                      : "card-glass text-muted hover:text-foreground hover:border-accent/30"
                  )}
                >
                  {gym.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <GsapReveal animation="fadeUp" staggerSelector=".price-card" stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan) => (
                  <div key={plan.name} className="price-card">
                    <PricingCard
                      name={plan.name}
                      price={plan.price}
                      period={plan.period}
                      features={plan.features}
                      popular={plan.popular}
                      ctaHref="/contact"
                    />
                  </div>
                ))}
              </div>
            </GsapReveal>
            <div className="flex flex-col items-center gap-4 text-center mt-12">
              <p className="text-muted text-sm font-sans">
                Not sure?{" "}
                <a href="https://wa.me/918982280027?text=Hi%2C+I'd+like+to+know+more+about+pricing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">
                  WhatsApp us →
                </a>
              </p>
              <p className="text-muted/50 text-xs font-sans">7-day satisfaction guarantee. Cancel anytime on monthly plans.</p>
            </div>
          </div>
        </section>

        {/* BMI Calculator */}
        <section className="section-padding bg-surface/30">
          <div className="container-custom">
            <SectionHeader tagName="Health Check" title="Know Your BMI" subtitle="Get a quick assessment and personalized program recommendation." />
            <BMICalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <SectionHeader tagName="FAQ" title="Frequently Asked Questions" />
            <div className="card-glass p-4 md:p-10 max-w-3xl mx-auto">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
