"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

export function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0",
            active === cat
              ? "bg-accent text-accent-foreground shadow-md"
              : "bg-transparent text-muted border border-border hover:border-accent/40 hover:text-foreground"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
