"use client";

import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Badge } from "@/components/ui/badge";

interface TransformationCardProps {
  name: string;
  duration: string;
  program: string;
}

export function TransformationCard({ name, duration, program }: TransformationCardProps) {
  return (
    <div className="card-base overflow-hidden">
      <div className="h-[360px] relative bg-[#1C1C1E] border-b border-[#2C2C2E] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative border-r border-[#2C2C2E] flex items-center justify-center">
             <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 13, fontFamily: 'Poppins, sans-serif' }}>[ BEFORE ]</span>
             <span className="absolute top-4 left-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">Day 1</span>
          </div>
          <div className="w-1/2 relative flex items-center justify-center">
             <span style={{ color: '#D4A853', fontWeight: 800, fontSize: 13, fontFamily: 'Poppins, sans-serif' }}>[ AFTER ]</span>
             <span className="absolute top-4 left-4 text-[10px] font-bold text-accent uppercase tracking-widest">Day 90</span>
          </div>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-display font-bold text-foreground">{name}</p>
          <p className="text-xs text-muted font-sans">{duration}</p>
        </div>
        <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
          {program}
        </Badge>
      </div>
    </div>
  );
}
