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
      <div className="h-[360px]">
        <BeforeAfterSlider />
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
