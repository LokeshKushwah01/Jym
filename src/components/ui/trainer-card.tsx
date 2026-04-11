"use client";

import { motion } from "framer-motion";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

interface TrainerCardProps {
  name: string;
  speciality: string;
  experience: string;
  bio: string;
  initials: string;
  instagram?: string;
  whatsapp?: string;
}

export function TrainerCard({ name, speciality, experience, bio, initials, instagram, whatsapp }: TrainerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="card-base p-8 text-center space-y-5"
    >
      {/* Circular Photo Placeholder */}
      <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 mx-auto flex items-center justify-center">
        <span className="text-accent font-display font-extrabold text-xl">{initials}</span>
      </div>

      <div>
        <h3 className="text-lg font-display font-bold tracking-tight text-foreground">{name}</h3>
        <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">{speciality}</p>
      </div>

      <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-bold text-muted border-border">
        {experience}
      </Badge>

      <p className="text-muted text-sm font-sans leading-relaxed">{bio}</p>

      <div className="flex gap-4 justify-center pt-2">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <InstagramLogo size={20} />
          </a>
        )}
        {whatsapp && (
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <WhatsappLogo size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
