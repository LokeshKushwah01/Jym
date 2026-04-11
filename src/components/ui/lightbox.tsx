"use client";

import React, { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface LightboxProps {
  images: { label: string; category: string }[];
  currentIndex: number;
  onClose: () => void;
  onNav: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNav }: LightboxProps) {
  const current = images[currentIndex];

  const goPrev = useCallback(() => {
    onNav(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  }, [currentIndex, images.length, onNav]);

  const goNext = useCallback(() => {
    onNav(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images.length, onNav]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  // Touch swipe
  const touchStartX = React.useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goPrev() : goNext();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-black/92 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button className="absolute top-6 right-6 z-10 text-white hover:text-accent transition-colors" onClick={onClose}>
          <X size={40} weight="bold" />
        </button>

        {/* Left Arrow */}
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-accent hover:text-white transition-colors p-2"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
        >
          <CaretLeft size={48} weight="bold" />
        </button>

        {/* Image Area */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image Placeholder */}
          <div className="w-[80vw] h-[60vh] md:w-[70vw] md:h-[70vh] bg-surface rounded-lg flex items-center justify-center">
            <span className="text-muted font-sans text-sm">[ {current.label} ]</span>
          </div>

          {/* Caption */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-white/50 text-sm font-sans">{current.label}</span>
            <span className="bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {current.category}
            </span>
          </div>
        </motion.div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-accent hover:text-white transition-colors p-2"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
        >
          <CaretRight size={48} weight="bold" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
