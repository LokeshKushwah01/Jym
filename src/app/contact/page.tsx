"use client";

import React, { useState } from "react";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { gyms } from "../../lib/data";
import { Envelope, Phone, WhatsappLogo, MapPin, InstagramLogo, ArrowRight, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const gym = gyms[0];

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
            <Badge variant="accent" className="uppercase tracking-[0.3em] font-bold px-6 py-2">Get Started</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white text-balance max-w-5xl mx-auto uppercase">
               Let&apos;s <span className="text-gradient-gold">Talk</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto">
              Ready to take the first step towards elite transformation? Drop us a message or visit one of our facilities.
            </p>
          </div>
        </section>

        {/* Contact Interactivity */}
        <section className="section-padding bg-surface/10 border-t border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left: Contact Form */}
              <GsapReveal animation="fadeLeft">
                <div className="card-glass p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white uppercase">Inquire Now</h2>
                     <p className="text-white/40 text-sm font-sans">Expect a response from our head coach within 2 hours.</p>
                  </div>
                  
                  {!submitted ? (
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-sans ml-1">Full Identity</label>
                        <input type="text" required placeholder="Full Name" className="w-full h-14 bg-black/40 border border-white/5 px-5 text-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans transition-all placeholder:text-white/10" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-sans ml-1">Contact Protocol</label>
                        <input type="tel" required placeholder="+91 XXXXXXXXXX" className="w-full h-14 bg-black/40 border border-white/5 px-5 text-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans transition-all placeholder:text-white/10" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-sans ml-1">Selected Program</label>
                        <select className="w-full h-14 bg-black/40 border border-white/5 px-5 text-white rounded-xl focus:outline-none focus:border-accent text-sm font-sans appearance-none transition-all cursor-pointer">
                          <option className="bg-zinc-900">Elite 90-Day Blueprint</option>
                          <option className="bg-zinc-900">Personal Training</option>
                          <option className="bg-zinc-900">Strength & Conditioning</option>
                          <option className="bg-zinc-900">Weight Transformation</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 font-sans ml-1">Messages / Objectives</label>
                        <textarea rows={4} placeholder="Describe your current fitness state and your 90-day objectives..." className="w-full bg-black/40 border border-white/5 p-5 text-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 text-sm font-sans resize-none transition-all placeholder:text-white/10" />
                      </div>
                      <button type="submit" className="btn-primary w-full py-5 text-sm flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]">
                        Process Inquiry <PaperPlaneTilt size={20} weight="bold" />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-20 space-y-6 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                        <WhatsappLogo size={40} className="text-accent" weight="fill" />
                      </div>
                      <div className="space-y-2">
                         <h3 className="text-2xl font-display font-black text-white uppercase">Identity Verified</h3>
                         <p className="text-white/40 font-sans text-sm max-w-xs mx-auto">Connecting you to our head coach via WhatsApp protocol within 60 minutes.</p>
                      </div>
                    </div>
                  )}
                </div>
              </GsapReveal>

              {/* Right: Contact Details & Visuals */}
              <GsapReveal animation="fadeRight" className="space-y-12">
                <div className="space-y-10">
                  <div className="space-y-2">
                     <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-sans">Contact Details</span>
                     <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white uppercase">Facility Access</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                    {[
                      { icon: MapPin, label: "HQ Address", value: `${gym.address}, ${gym.city}` },
                      { icon: Phone, label: "Voice / Whatsapp", value: gym.phone, href: `https://wa.me/918982280027` },
                      { icon: Envelope, label: "Secure Email", value: gym.email, href: `mailto:${gym.email}` },
                      { icon: InstagramLogo, label: "Visual Identity", value: "@jygymnasium", href: "https://instagram.com" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/40 transition-colors">
                          <item.icon size={24} className="text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 font-sans">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base font-sans text-white/70 hover:text-white transition-colors block">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-base font-sans text-white/70">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simplified Location Map Visual */}
                <div className="rounded-2xl overflow-hidden border border-white/5 h-[350px] relative bg-zinc-900 group">
                   <iframe
                      title="JY Gymnasium Location"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(gym.address + " " + gym.city)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                      allowFullScreen
                      loading="lazy"
                   />
                </div>

                {/* Instant WhatsApp Prompt */}
                <a
                  href="https://wa.me/918982280027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 card-glass border-accent/20 hover:border-accent/50 group transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/10">
                    <WhatsappLogo size={28} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-display font-black text-white uppercase group-hover:text-accent transition-colors">Instant Protocol</p>
                    <p className="text-xs text-white/40 font-sans font-medium uppercase tracking-widest">Connect to a live expert now</p>
                  </div>
                </a>
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
