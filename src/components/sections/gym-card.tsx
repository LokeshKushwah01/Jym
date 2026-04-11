import { Gym } from "@/types/gym";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface GymCardProps {
  gym: Gym;
}

export function GymCard({ gym }: GymCardProps) {
  return (
    <div className="group bg-surface border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
      <div className="aspect-[16/10] relative overflow-hidden bg-[#1C1C1E] border-b border-[#2C2C2E]">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-balance">
            <div style={{ color: '#D4A853', fontWeight: 800, fontSize: 24, fontFamily: 'Poppins, sans-serif' }}>
              [ {gym.name} Facility ]
            </div>
            <p className="text-white/20 text-[10px] mt-2 font-bold uppercase tracking-widest">Brand Photography Pending</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 left-4">
          <Badge variant="accent" className="uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {gym.id === "alpha" ? "Flagship" : "Premium Studio"}
          </Badge>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1 gap-6">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
            {gym.name}
          </h3>
          <div className="flex items-start gap-2 text-muted text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>{gym.address}, {gym.city}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <Clock size={18} className="text-accent" />
            <span>{gym.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <Phone size={18} className="text-accent" />
            <span>{gym.phone}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {gym.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-[10px] uppercase font-bold text-muted">
              {feature}
            </Badge>
          ))}
          {gym.features.length > 3 && (
            <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted">
              +{gym.features.length - 3} More
            </Badge>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full uppercase font-bold tracking-widest group/btn" asChild>
            <Link href={`/membership?gym=${gym.id}`}>
              View Plans
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
