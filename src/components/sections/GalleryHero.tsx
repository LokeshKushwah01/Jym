import { galleryImages } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function GalleryHero() {
  const totalImages = galleryImages.length;
  const totalGyms = 2; // Alpha and Beta

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <Badge variant="accent" className="uppercase tracking-[0.25em] font-extrabold px-6 py-2 rounded-full mb-6">
            Visual Legacy
          </Badge>
          <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6 leading-tight">
            Our facilities <span className="text-accent">&</span> community
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl font-medium leading-relaxed">
            A look inside both IronEdge locations. From world-class equipment to our vibrant class community and life-changing member transformations.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="bg-surface border border-border/50 px-8 py-5 rounded-2xl backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-1">
              <span className="block text-3xl md:text-4xl font-display font-black text-accent">{totalImages}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-foreground/40 mt-1 block">Total Captures</span>
            </div>
            <div className="bg-surface border border-border/50 px-8 py-5 rounded-2xl backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-1">
              <span className="block text-3xl md:text-4xl font-display font-black text-accent">{totalGyms}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-foreground/40 mt-1 block">Elite Arenas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
