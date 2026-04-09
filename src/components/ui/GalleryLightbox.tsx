"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types/gallery";
import { X, ArrowLeft, ArrowRight, MapPin, Tag } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/badge";

export interface GalleryLightboxProps {
  image: GalleryImage | null;
  images: GalleryImage[];
  onClose: () => void;
  onNav: (id: string) => void;
}

export default function GalleryLightbox({ image, images, onClose, onNav }: GalleryLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const currentIndex = images.findIndex((img) => img.id === image?.id);

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(panelRef.current, { scale: 0.9, opacity: 0, duration: 0.25, ease: "power2.in" })
      .to(backdropRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  }, [onClose]);

  const handleNav = useCallback((direction: "prev" | "next") => {
    let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;

    const nextImg = images[nextIndex];
    
    gsap.fromTo(".lightbox-item",
      { x: direction === "next" ? 40 : -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    onNav(nextImg.id);
  }, [currentIndex, images, onNav]);

  useGSAP(() => {
    if (image) {
      const tl = gsap.timeline();
      tl.from(backdropRef.current, { opacity: 0, duration: 0.25 })
        .from(panelRef.current, { scale: 0.9, opacity: 0, duration: 0.35, ease: "back.out(1.4)" }, "-=0.1");
    }
  }, { scope: containerRef });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handleNav("prev");
      if (e.key === "ArrowRight") handleNav("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, handleNav]);

  // Swipe support
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => (touchStart.current = e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(deltaX) > 50) handleNav(deltaX > 0 ? "prev" : "next");
  };

  if (!image) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-black/95 backdrop-blur-md" 
        onClick={handleClose}
      />

      {/* Panel */}
      <div 
        ref={panelRef}
        className="relative w-full max-w-7xl h-[auto] md:h-[85vh] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10"
          aria-label="Close image viewer"
        >
          <X size={20} weight="bold" />
        </button>

        {/* Image Side */}
        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-0">
          <div className="lightbox-item w-full h-full p-6 md:p-12 relative">
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Nav Controls */}
          <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-6">
            <button 
              onClick={() => handleNav("prev")}
              className="bg-white/5 hover:bg-white/10 text-white p-5 rounded-full backdrop-blur-md transition-all border border-white/10 group focus:ring-2 focus:ring-accent outline-none"
              aria-label="Previous image"
            >
              <ArrowLeft size={24} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-6">
            <button 
              onClick={() => handleNav("next")}
              className="bg-white/5 hover:bg-white/10 text-white p-5 rounded-full backdrop-blur-md transition-all border border-white/10 group focus:ring-2 focus:ring-accent outline-none"
              aria-label="Next image"
            >
              <ArrowRight size={24} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Info Side */}
        <div className="w-full md:w-96 bg-zinc-900 p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5">
          <div className="space-y-10">
            <div className="space-y-6">
               <div className="flex flex-wrap gap-2">
                  <Badge variant="accent" className="uppercase tracking-widest font-black py-1 px-4 text-[10px]">
                    {image.gym === "both" ? "Alpha + Beta" : image.gym}
                  </Badge>
                 <Badge variant="muted" className="uppercase tracking-widest font-black py-1 px-4 text-[10px]">
                   {image.category}
                 </Badge>
               </div>
               <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter leading-tight pt-2">
                 {image.alt}
               </h3>
            </div>

            <div className="space-y-6 pt-4">
                <div className="flex items-start gap-5">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex-shrink-0">
                        <MapPin size={22} className="text-accent" weight="bold" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Elite Location</p>
                        <p className="text-white/80 font-bold text-sm tracking-wide mt-1">
                            {image.gym === "JY Gymnasium" ? "JY Gym Alpha Grounds" : image.gym === "JY Gymnasium 2.0" ? "JY Gym Beta Studio" : "Elite Dual Access Grounds"}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10 flex-shrink-0">
                        <Tag size={22} className="text-accent" weight="bold" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Class Category</p>
                        <p className="text-white/80 font-bold text-sm tracking-wide mt-1 capitalize">{image.category}</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-12 pt-10 flex items-center justify-between border-t border-white/5">
             <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-1">Navigation</span>
                <span className="text-white/40 font-bold text-xs">
                  {currentIndex + 1} <span className="opacity-30">/</span> {images.length}
                </span>
             </div>
             <div className="flex gap-4">
                 <button 
                  onClick={() => handleNav("prev")} 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/5 hover:border-accent/40 hover:text-accent text-white/40 transition-all"
                  aria-label="Previous"
                >
                  <ArrowLeft size={20} weight="bold" />
                </button>
                 <button 
                  onClick={() => handleNav("next")} 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/5 hover:border-accent/40 hover:text-accent text-white/40 transition-all"
                  aria-label="Next"
                >
                  <ArrowRight size={20} weight="bold" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
