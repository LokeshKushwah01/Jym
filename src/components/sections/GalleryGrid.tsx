"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types/gallery";
import { Badge } from "@/components/ui/badge";
import { MagnifyingGlass } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import type { GalleryLightboxProps } from "@/components/ui/GalleryLightbox";

const GalleryLightbox = dynamic<GalleryLightboxProps>(() => import("@/components/ui/GalleryLightbox"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const categories = ["all", "facilities", "equipment", "classes", "transformations", "events"];
const gyms = ["all", "JY Gymnasium", "JY Gymnasium 2.0"];

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGym, setActiveGym] = useState("all");
  const [visibleImages, setVisibleImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial filter sync
  useEffect(() => {
    setVisibleImages(images);
  }, [images]);

  // Handle filter change with GSAP
  const handleFilter = (type: "category" | "gym", value: string) => {
    // If clicking same filter, do nothing
    if (type === "category" && activeCategory === value) return;
    if (type === "gym" && activeGym === value) return;

    const items = gsap.utils.toArray(".gallery-item");
    
    gsap.to(items, {
      opacity: 0,
      scale: 0.92,
      duration: 0.2,
      stagger: 0.01,
      ease: "power2.inOut",
      onComplete: () => {
        let nextCat = activeCategory;
        let nextGym = activeGym;
        
        if (type === "category") {
            nextCat = value;
            setActiveCategory(value);
        } else {
            nextGym = value;
            setActiveGym(value);
        }
        
        const newFiltered = images.filter(img => {
            const catMatch = nextCat === "all" || img.category === nextCat;
            const gymMatch = nextGym === "all" || img.gym === nextGym || img.gym === "both";
            return catMatch && gymMatch;
        });
        
        setVisibleImages(newFiltered);

        // Wait for state to apply
        setTimeout(() => {
            gsap.fromTo(".gallery-item", 
              { opacity: 0, scale: 0.92, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 0.35, stagger: 0.03, ease: "power2.out", clearProps: "all" }
            );
        }, 10);
      }
    });
  };

  useGSAP(() => {
    gsap.from(".gallery-item", {
      scrollTrigger: {
        trigger: ".gallery-wrap",
        start: "top 85%",
        once: true,
      },
      y: 40,
      opacity: 0,
      stagger: 0.06,
      duration: 0.55,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const handleHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
    const card = e.currentTarget;
    const img = card.querySelector("img");
    const overlay = card.querySelector(".overlay");
    
    if (enter) {
      gsap.to(img, { scale: 1.05, duration: 0.35, ease: "power2.out" });
      gsap.to(overlay, { opacity: 1, duration: 0.25 });
    } else {
      gsap.to(img, { scale: 1, duration: 0.35, ease: "power2.out" });
      gsap.to(overlay, { opacity: 0, duration: 0.2 });
    }
  };

  const navigateLightbox = (id: string) => {
      const idx = visibleImages.findIndex(img => img.id === id);
      if (idx !== -1) setSelectedImage(visibleImages[idx]);
  };

  return (
    <div ref={containerRef} className="container-custom pb-24 gallery-wrap">
      {/* Filters */}
      <div className="flex flex-col gap-8 mb-16">
        <div className="flex flex-wrap gap-3 items-center" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter("category", cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                activeCategory === cat 
                  ? "bg-accent text-zinc-900 shadow-xl shadow-accent/20" 
                  : "border border-zinc-200 dark:border-zinc-800 text-foreground/40 hover:border-accent/40 hover:text-foreground bg-surface/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
             <span className="w-8 h-px bg-accent/20" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Elite Locations</span>
          </div>
          <div className="flex gap-6">
            {gyms.map((gym) => (
              <button
                key={gym}
                onClick={() => handleFilter("gym", gym)}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] transition-all relative py-1",
                  activeGym === gym 
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full" 
                    : "text-foreground/40 hover:text-foreground"
                )}
              >
                {gym === "all" ? "All Gyms" : gym}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-3 space-y-3">
        {visibleImages.map((img) => (
          <div
            key={img.id}
            className="gallery-item break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative group bg-surface border border-border/40"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={() => setSelectedImage(img)}
          >
            <div className="relative overflow-hidden">
               <Image 
                src={img.src} 
                alt={img.alt} 
                width={img.width} 
                height={img.height}
                className="w-full h-auto object-cover transition-transform duration-500"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Overlay */}
            <div className="overlay absolute inset-0 bg-zinc-900/60 opacity-0 flex flex-col justify-end p-6 transition-all pointer-events-none">
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2.5 rounded-full text-white border border-white/20">
                    <MagnifyingGlass size={20} weight="bold" />
                </div>
                
                <div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex gap-2">
                        <Badge variant="accent" className="text-[9px] uppercase tracking-wider font-black py-0.5 px-3">
                            {img.gym === "both" ? "Alpha + Beta" : img.gym}
                        </Badge>
                        <Badge variant="muted" className="text-[9px] uppercase tracking-wider font-black py-0.5 px-3">
                            {img.category}
                        </Badge>
                    </div>
                    <p className="text-white font-bold text-sm leading-snug text-balance md:text-base">{img.alt}</p>
                </div>
            </div>
          </div>
        ))}
      </div>

      {visibleImages.length === 0 && (
        <div className="py-32 text-center border border-dashed border-border/60 rounded-3xl bg-surface/30">
          <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">No entries found for this selection.</p>
        </div>
      )}

      {selectedImage && (
        <GalleryLightbox 
          image={selectedImage}
          images={visibleImages}
          onClose={() => setSelectedImage(null)}
          onNav={navigateLightbox}
        />
      )}
    </div>
  );
}
