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
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { galleryItems, transformations } from "../../lib/data";

const categories = ["All", "Transformations", "Equipment", "Classes", "Events", "Gym Tour"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0B0B0B]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center space-y-6">
            <Badge variant="accent" className="uppercase tracking-[0.2em] font-bold px-5 py-1.5">Gallery</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-balance">
              Real People. <span className="text-gradient-gold">Real Results.</span>
            </h1>
            <p className="text-muted text-lg font-sans max-w-xl mx-auto">
              Every photo here is a story of discipline, sweat, and transformation. Yours could be next.
            </p>
          </div>
        </section>

        {/* Parallax Gallery Strip */}
        <section className="relative h-[400px] overflow-hidden">
          <GsapParallax speed={0.3} className="absolute inset-0">
            <div className="absolute inset-0 flex gap-3">
              {["/images/gym_alpha.png", "/images/hero_bg.png", "/images/gym_beta.png", "/images/trainer_vikram.png"].map((src, i) => (
                <div key={i} className="relative flex-1 min-w-[25%]">
                  <Image src={src} alt={`Gallery parallax ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </GsapParallax>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />
        </section>

        {/* Category Filter + Masonry Grid */}
        <section className="section-padding bg-[#0B0B0B]">
          <div className="container-custom">
            <div className="flex justify-center mb-10">
              <CategoryFilter categories={categories} active={activeCategory} onSelect={setActiveCategory} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <GsapReveal animation="fadeUp" staggerSelector=".gallery-tile" stagger={0.06}>
                  <div className="masonry-grid">
                    {filtered.map((item, i) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.03 }}
                        className={`gallery-tile ${item.height} bg-surface rounded-xl border border-border flex items-center justify-center relative group cursor-pointer overflow-hidden`}
                        onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
                      >
                        <span className="text-muted text-sm font-sans">[ {item.label} ]</span>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <MagnifyingGlass size={28} className="text-accent" weight="bold" />
                        </div>
                        {/* Category Badge */}
                        <span className="absolute bottom-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.category}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </GsapReveal>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryItems.map((item) => ({ label: item.label, category: item.category }))}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={setLightboxIndex}
          />
        )}

        {/* Before/After Transformations */}
        <section className="section-padding bg-surface/30 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <SectionHeader
              tagName="90-Day Transformations"
              title="Real Members. Real Transformations."
              subtitle="No filters, no editing. Just discipline and the right coaching."
            />
            <GsapReveal animation="fadeUp" staggerSelector=".transform-item" stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transformations.map((t) => (
                  <div key={t.name} className="transform-item">
                    <TransformationCard name={t.name} duration={t.duration} program={t.program} />
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
          </div>
          <div className="container-custom relative z-10 text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-balance">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-muted font-sans max-w-lg mx-auto">
              Your before photo starts today. Book a free trial and let us take it from there.
            </p>
            <Link href="/contact" className="btn-primary inline-flex text-sm px-10 py-4">
              Book Free Trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
