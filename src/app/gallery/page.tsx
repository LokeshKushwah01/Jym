"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { CategoryFilter } from "../../components/ui/category-filter";
import { SectionHeader } from "../../components/ui/section-header";
import { WhatsAppButton } from "../../components/ui/whatsapp-button";
import { GsapReveal } from "../../components/ui/gsap-reveal";
import { Badge } from "../../components/ui/badge";
import { MagnifyingGlassIcon, XIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { galleryItems, transformations } from "../../lib/data";

const categories = ["All", "Transformations", "Equipment", "Classes", "Events", "Gym Tour"];

const parallaxImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxItems = lightboxIndex !== null ? filtered : [];

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
  };
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
  };

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
        <section className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 flex gap-2">
            {parallaxImages.map((src, idx) => (
              <div key={idx} className="relative flex-1 min-w-[25%]">
                <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
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
                        whileHover={{ scale: 1.02 }}
                        className={`gallery-tile ${item.height} rounded-xl border border-border relative group cursor-pointer overflow-hidden mb-3`}
                        onClick={() => setLightboxIndex(i)}
                      >
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <MagnifyingGlassIcon size={28} className="text-white" weight="bold" />
                        </div>
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

        {/* Inline Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              <button className="absolute top-5 right-5 z-10 text-white/70 hover:text-accent transition-colors p-2" onClick={() => setLightboxIndex(null)}>
                <XIcon size={36} weight="bold" />
              </button>
              <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-accent transition-colors p-2" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
                <CaretLeftIcon size={44} weight="bold" />
              </button>
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative w-[85vw] h-[75vh] rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].label}
                  fill
                  className="object-contain"
                  sizes="85vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-display font-bold text-sm">{filtered[lightboxIndex].label}</p>
                  <span className="bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-1 inline-block">
                    {filtered[lightboxIndex].category}
                  </span>
                </div>
              </motion.div>
              <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-accent transition-colors p-2" onClick={(e) => { e.stopPropagation(); goNext(); }}>
                <CaretRightIcon size={44} weight="bold" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transformations */}
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
                  <div key={t.name} className="transform-item card-glass overflow-hidden group">
                    <div className="h-[280px] relative overflow-hidden">
                      <Image
                        src={t.image}
                        alt={`${t.name} transformation`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="label-after">90 Days</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-base font-display font-bold text-white">{t.name}</p>
                        <span className="bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-2 inline-block">
                          {t.program}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
          </div>
        </section>

        {/* CTA */}
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
