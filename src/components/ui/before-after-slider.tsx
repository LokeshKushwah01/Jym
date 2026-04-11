"use client";

import React, { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({ beforeLabel = "BEFORE", afterLabel = "AFTER 90 DAYS" }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(() => { isDragging.current = true; }, []);
  const handleMouseUp = useCallback(() => { isDragging.current = false; }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden rounded-xl cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before side */}
      <div className="absolute inset-0 bg-zinc-700 flex items-center justify-center">
        <span className="text-white/20 font-display font-bold text-4xl uppercase tracking-wider">Before</span>
        <span className="label-before">{beforeLabel}</span>
      </div>

      {/* After side (clipped) */}
      <div
        className="absolute inset-0 bg-zinc-600 flex items-center justify-center"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <span className="text-accent/30 font-display font-bold text-4xl uppercase tracking-wider">After</span>
        <span className="label-after">{afterLabel}</span>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-accent border-4 border-white shadow-lg cursor-ew-resize flex items-center justify-center"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4 2L1 7L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 2L13 7L10 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
