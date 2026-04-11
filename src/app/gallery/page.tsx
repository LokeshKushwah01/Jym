"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { CategoryFilter } from "../../components/ui/category-filter";
import { Lightbox } from "../../components/ui/lightbox";
import { TransformationCard } from "../../components/ui/transformation-card";
import { SectionHeader } from "../../components/ui/section-header";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal, GsapParallax } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { MagnifyingGlass, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { galleryItems, transformations } from "../../lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Transformations", "Equipment", "Classes", "Events", "Gym Tour"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
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
            <Badge variant="accent" className="uppercase tracking-[0.3em] font-bold px-6 py-2">Visual Narrative</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] text-white text-balance max-w-5xl mx-auto uppercase">
               Real People. <span className="text-gradient-gold">Real Results.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto">
              Every photograph is documented evidence of discipline, grit, and the pursuit of human excellence.
            </p>
          </div>
        </section>

        {/* Gallery Filter & Grid */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                      activeCategory === cat ? "bg-accent text-black" : "bg-white/5 text-white/40 hover:bg-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  style={{
                    height: item.height,
                    background: '#1C1C1E',
                    border: '1px solid #2C2C2E',
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    textAlign: 'center'
                  }}
                  className="group"
                >
                  {item.category && (
                    <span style={{ 
                      position: 'absolute', top: 16, left: 16, 
                      fontSize: 10, fontWeight: 700, color: '#D4A853',
                      textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>
                      {item.category}
                    </span>
                  )}
                  <div style={{ 
                    fontFamily: 'Poppins, sans-serif', fontSize: 18, 
                    fontWeight: 700, color: '#D4A853', marginBottom: 8 
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
                    Replace with real photo
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-24 md:py-32 bg-[#0B0B0B] relative overflow-hidden border-t border-white/5">
          <div className="container-custom relative z-10 text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white uppercase max-w-3xl mx-auto leading-tight">
              Ready To Start Your Own <span className="text-gradient-gold">Legacy?</span>
            </h3>
            <p className="text-white/40 font-sans font-medium max-w-lg mx-auto leading-relaxed">
              Your transformation isn&apos;t just a photo, it&apos;s a testament to your willpower. Secure your spot in the Gwalior elite.
            </p>
            <div className="flex justify-center pt-4">
               <Link 
                href="/contact" 
                className="btn-primary inline-flex text-sm px-12 py-5 w-full sm:w-auto items-center justify-center gap-3 transition-transform hover:scale-105"
               >
                 Book Free Trial <ArrowRight size={20} weight="bold" />
               </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
