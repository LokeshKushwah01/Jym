import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tagName?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  tagName,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-12 md:mb-16",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className
    )}>
      {tagName && (
        <span className="text-accent text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] mb-1">
          {tagName}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter leading-[1.1] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-muted text-base md:text-lg leading-relaxed mt-2 text-balance font-medium opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
