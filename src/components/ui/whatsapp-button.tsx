"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918982280027?text=Hi%2C+I'd+like+to+know+more"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-pulse-ring hover:scale-110 transition-transform group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" className="text-white" />
      <span className="absolute -top-10 right-0 bg-surface text-foreground text-xs font-sans font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
