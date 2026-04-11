"use client";

import React, { useState } from "react";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { gyms } from "../../lib/data";
import { Envelope, Phone, WhatsappLogo, MapPin, InstagramLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const gym = gyms[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 md:py-32 bg-[#0B0B0B] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Contact</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              Let&apos;s <span className="text-gradient-gold">Talk</span>
            </h1>
            <p className="text-muted text-lg font-sans max-w-xl mx-auto">
              Have questions about our plans, equipment, or personal training? Drop us a message or visit us.
            </p>
          </div>
        </section>

        {/* Two-Column Contact */}
        <section className="section-padding bg-surface/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Contact Form */}
              <GsapReveal animation="fadeLeft">
                <div className="card-glass p-8 md:p-10">
                  {!submitted ? (
                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted font-sans">Full Name</label>
                        <input type="text" required placeholder="Your name" className="w-full h-12 bg-[#0B0B0B] border border-border px-4 text-foreground rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted font-sans">Phone Number</label>
                        <input type="tel" required placeholder="+91 XXXXXXXXXX" className="w-full h-12 bg-[#0B0B0B] border border-border px-4 text-foreground rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted font-sans">Your Goal</label>
                        <select className="w-full h-12 bg-[#0B0B0B] border border-border px-4 text-foreground rounded-md focus:outline-none focus:border-accent text-sm font-sans appearance-none transition-all">
                          <option>Weight Loss</option>
                          <option>Muscle Gain</option>
                          <option>Strength Training</option>
                          <option>Cardio Fitness</option>
                          <option>General Fitness</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted font-sans">Message</label>
                        <textarea rows={4} placeholder="How can we help you?" className="w-full bg-[#0B0B0B] border border-border p-4 text-foreground rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans resize-none transition-all" />
                      </div>
                      <button type="submit" className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2">
                        Send Message <ArrowRight size={16} weight="bold" />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-16 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-accent/15 mx-auto flex items-center justify-center">
                        <WhatsappLogo size={32} className="text-accent" />
                      </div>
                      <h3 className="text-xl font-display font-bold">Message Received!</h3>
                      <p className="text-muted font-sans text-sm">We&apos;ll WhatsApp you within 1 hour!</p>
                    </div>
                  )}
                </div>
              </GsapReveal>

              {/* Right: Contact Info + Map */}
              <GsapReveal animation="fadeRight">
                <div className="space-y-8">
                  <div className="space-y-6">
                    {[
                      { icon: MapPin, label: "Address", value: `${gym.address}, ${gym.city}` },
                      { icon: Phone, label: "Phone", value: gym.phone, href: `tel:+91${gym.whatsapp}` },
                      { icon: Envelope, label: "Email", value: gym.email, href: `mailto:${gym.email}` },
                      { icon: InstagramLogo, label: "Instagram", value: "@jygymnasium", href: "https://instagram.com" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <item.icon size={20} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted font-sans mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-sans text-foreground hover:text-accent transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-sans text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Google Maps */}
                  <div className="rounded-xl overflow-hidden border border-border h-[320px]">
                    {/* Replace src with your Google Maps embed URL */}
                    <iframe
                      title="JY Gymnasium Location"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(gym.address + " " + gym.city)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* In-flow WhatsApp CTA */}
                  <a
                    href="https://wa.me/918982280027?text=Hi%2C+I'd+like+to+know+more"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 card-glass group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                      <WhatsappLogo size={24} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-display font-bold group-hover:text-accent transition-colors">Chat with us on WhatsApp</p>
                      <p className="text-xs text-muted font-sans">We typically respond within 30 minutes</p>
                    </div>
                  </a>
                </div>
              </GsapReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
