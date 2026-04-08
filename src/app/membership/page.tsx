"use client";

import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { SectionHeader } from "../../components/ui/section-header";
import { PricingSection } from "../../components/sections/pricing-section";
import { ScheduleGrid } from "../../components/sections/schedule-grid";
import { FAQAccordion } from "../../components/ui/faq-accordion";
import { gyms, schedule, faqs } from "../../lib/data";
import { Badge } from "../../components/ui/badge";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PricingWrapper() {
  const searchParams = useSearchParams();
  const gymId = searchParams.get("gym") || undefined;
  return <PricingSection gyms={gyms} initialGymId={gymId} />;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MembershipPage() {
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
      
      <main className="flex-1 pt-24 md:pt-32">
        {/* Pricing Selection */}
        <section className="pt-16 pb-24 md:pb-32">
          <div className="container-custom">
            <SectionHeader 
              tagName="Join the Elite"
              title="Membership Plans"
              subtitle="Choose the plan that fits your ambition. No joining fees, flexible cancellation, and dual-gym access options available."
              className="reveal"
            />
            <div className="reveal">
              <Suspense fallback={<div className="h-96 w-full bg-surface animate-pulse rounded-2xl" />}>
                <PricingWrapper />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="section-padding bg-surface border-y border-border">
          <div className="container-custom">
            <SectionHeader 
              tagName="Weekly Classes"
              title="The Training Schedule"
              subtitle="From sunrise yoga to late-night lifting, find the class that fits your routine. All classes are led by certified elite trainers."
              className="reveal"
            />
            <div className="reveal">
              <ScheduleGrid slots={schedule} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeader 
              tagName="Everything You Need to Know"
              title="Frequently Asked Questions"
              className="reveal"
            />
            <div className="reveal mt-12 bg-surface border border-border rounded-sm p-4 md:p-12">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Premium Guest Pass CTA */}
        <section className="py-24 bg-background overflow-hidden">
           <div className="container-custom">
                <div className="relative group p-1.5 bg-gradient-to-r from-accent/20 via-border to-accent/20 rounded-3xl reveal">
                    <div className="bg-surface p-12 md:p-20 text-center space-y-8 rounded-[1.4rem]">
                        <Badge variant="outline" className="uppercase tracking-[0.25em] font-extrabold text-accent border-accent/40 px-6 py-2 rounded-full">Experience it First</Badge>
                        <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[1.15] text-balance">Free One-Day <br /> Trial Class</h2>
                        <p className="text-muted text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed opacity-80">Still undecided? Book a free trial class at either location and experience the JY Gymnasium standard for yourself.</p>
                        <div className="pt-6">
                            <button className="h-20 px-14 bg-accent text-accent-foreground font-extrabold uppercase tracking-[0.2em] rounded-2xl hover:translate-y-[-4px] transition-all hover:shadow-2xl hover:shadow-accent/30 active:translate-y-[0px]">
                                Book Your Session
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
