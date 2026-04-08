"use client";

import * as React from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-black uppercase tracking-tight text-foreground">{question}</span>
        <CaretDown 
          size={20} 
          weight="bold" 
          className={cn("text-accent transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>
      <div className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
      )}>
        <div className="overflow-hidden">
          <p className="text-muted leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FAQAccordionProps {
  items: { q: string; a: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="max-w-3xl mx-auto divide-y divide-border">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}
