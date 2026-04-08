"use client";

import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { SectionHeader } from "../../components/ui/section-header";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { gyms } from "../../lib/data";
import { Envelope, Phone, WhatsappLogo, MapPin, ArrowRight } from "@phosphor-icons/react/dist/ssr";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const [selectedGym, setSelectedGym] = React.useState<'alpha' | 'beta'>('alpha');
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
      
      <main className="flex-1 pt-32">
        <section className="pb-24 md:pb-32">
          <div className="container-custom">
            <SectionHeader 
              tagName="Get in Touch"
              title="Speak with Our Experts"
              subtitle="Have questions about our plans, equipment, or personal training? Drop us a message or visit us at one of our locations."
              className="reveal"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
              {/* Contact Form */}
              <div className="reveal space-y-8 bg-surface border border-border p-8 md:p-12 rounded-3xl shadow-xl shadow-foreground/5 transition-all hover:shadow-2xl hover:shadow-accent/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Full Name</label>
                       <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe"
                        className="w-full h-14 bg-background border border-border px-5 text-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all rounded-2xl placeholder:text-muted/30" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Email Address</label>
                       <input 
                        type="email" 
                        id="email" 
                        placeholder="john@example.com"
                        className="w-full h-14 bg-background border border-border px-5 text-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all rounded-2xl placeholder:text-muted/30" 
                       />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Inquiry Type</label>
                     <select className="w-full h-14 bg-background border border-border px-5 text-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all rounded-2xl appearance-none">
                        <option>General Inquiry</option>
                        <option>Membership Plans</option>
                        <option>Personal Training</option>
                        <option>Corporate Tie-ups</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Message</label>
                     <textarea 
                        id="message" 
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full bg-background border border-border p-5 text-foreground focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all rounded-2xl placeholder:text-muted/30 resize-none" 
                     ></textarea>
                  </div>

                  <Button variant="accent" size="lg" className="w-full uppercase font-extrabold tracking-widest h-16 group rounded-2xl">
                    Send Message
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Location Data */}
              <div className="reveal space-y-12">
                {gyms.map((gym) => (
                  <div key={gym.id} className="space-y-8 p-1">
                    <div className="flex items-center gap-4">
                        <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-4 py-1 rounded-full text-[10px]">{gym.id === 'alpha' ? 'Main Branch' : 'Morar Branch'}</Badge>
                        <h3 className="text-3xl font-extrabold uppercase tracking-tighter">{gym.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-accent" />
                                </div>
                                <div className="text-muted leading-relaxed">
                                    <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-sm">{gym.address}</p>
                                    <p className="text-sm">{gym.city}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <Phone size={20} className="text-accent" />
                                </div>
                                <div className="text-muted leading-relaxed">
                                    <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Call Us</p>
                                    <p className="text-sm">{gym.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <Envelope size={20} className="text-accent" />
                                </div>
                                <div className="text-muted leading-relaxed">
                                    <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-sm">{gym.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <WhatsappLogo size={20} className="text-accent" />
                                </div>
                                <div className="text-muted leading-relaxed">
                                    <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">WhatsApp</p>
                                    <a href={`https://wa.me/${gym.whatsapp}`} target="_blank" className="text-accent hover:text-accent/80 transition-colors font-extrabold flex items-center gap-1">
                                        Chat Now <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}

                <div className="pt-10 border-t border-border/60">
                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-6">Operating Hours</h4>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Weekdays</p>
                            <p className="text-2xl font-extrabold text-foreground uppercase tracking-tighter">5:00 AM - 10:00 PM</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Weekends</p>
                            <p className="text-2xl font-extrabold text-foreground uppercase tracking-tighter">7:00 AM - 6:00 PM*</p>
                        </div>
                    </div>
                    <p className="text-[9px] text-muted uppercase font-medium tracking-wide mt-6 italic opacity-80">*Times may vary between Alpha and Beta locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Integration */}
        <section className="mt-20 reveal bg-surface border-y border-border overflow-hidden ring-1 ring-border relative">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 w-full px-4">
                <div className="flex bg-background/80 backdrop-blur-md border border-border p-1.5 rounded-2xl shadow-2xl">
                    {gyms.map((gym) => (
                        <button
                            key={gym.id}
                            onClick={() => setSelectedGym(gym.id as 'alpha' | 'beta')}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                selectedGym === gym.id 
                                ? 'bg-accent text-accent-foreground shadow-lg' 
                                : 'text-muted hover:text-foreground hover:bg-white/5'
                            }`}
                        >
                            {gym.name}
                        </button>
                    ))}
                </div>
                <div className="bg-background/90 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-xl flex items-center gap-3 reveal">
                    <MapPin size={18} weight="fill" className="text-accent" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                        {gyms.find(g => g.id === selectedGym)?.address}, {gyms.find(g => g.id === selectedGym)?.city}
                    </p>
                </div>
            </div>

            <div className="w-full h-[600px] relative grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                    key={selectedGym}
                    title="JY Gymnasium Locations"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(gyms.find(g => g.id === selectedGym)?.address + ' ' + (gyms.find(g => g.id === selectedGym)?.city || ''))}&t=&z=16&ie=UTF8&iwloc=&output=embed`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
