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
      {/* Circular Photo Placeholder (FIX 5) */}
      <div style={{
        width: 80, height: 80, borderRadius: '50%', background: '#1C1C1E',
        border: '2px solid #D4A853', display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto', color: '#D4A853', fontSize: 24, fontWeight: 700, fontFamily: 'Poppins, sans-serif'
      }}>
        {initials}
      </div>

      <div>
        <h3 className="text-xl font-display font-bold tracking-tight text-white">{name}</h3>
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mt-2">{speciality}</p>
      </div>

      <div className="flex justify-center">
        <Badge variant="outline" className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 border-white/10 px-3 py-1">
          {experience}
        </Badge>
      </div>

      <p className="text-white/40 text-[13px] font-sans leading-relaxed px-2">{bio}</p>

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
