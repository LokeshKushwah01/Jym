import { Trainer } from "@/types/trainer";
import { Badge } from "@/components/ui/badge";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface TrainerGridProps {
  trainers: Trainer[];
}

export function TrainerGrid({ trainers }: TrainerGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainers.map((trainer) => (
        <div key={trainer.id} className="group bg-surface border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
          <div className="aspect-[3/4] bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
            {trainer.image ? (
                <Image 
                    src={trainer.image} 
                    alt={trainer.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted font-display font-black text-6xl opacity-10 uppercase tracking-tighter">
                    {trainer.name.split(" ")[0]}
                </div>
            )}
            
            {/* Social Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <a href="#" className="p-4 bg-white text-accent rounded-full hover:scale-110 transition-all shadow-xl">
                <InstagramLogo size={24} weight="bold" />
              </a>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-white">Follow Coach</p>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-black uppercase tracking-tight mb-1">{trainer.name}</h3>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{trainer.speciality}</p>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-bold text-muted border-border">
                {trainer.cert} • {trainer.years}Y Exp
              </Badge>
              <span className="text-[10px] uppercase font-black text-muted/60">
                At {trainer.gym === "alpha" ? "Alpha Grounds" : "Beta Studio"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
