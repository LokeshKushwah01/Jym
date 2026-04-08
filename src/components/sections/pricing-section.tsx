"use client";

import React, { useState } from "react";
import { Gym, Plan } from "@/types/gym";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { cn, formatCurrency } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

interface PricingCardProps {
  plan: Plan;
  billingCycle: BillingCycle;
}

function PricingCard({ plan, billingCycle }: PricingCardProps) {
  const isYearly = billingCycle === "yearly";
  const displayPrice = isYearly ? plan.yearly : plan.monthly;
  const savings = (plan.monthly * 12) - plan.yearly;

  return (
    <div className={cn(
      "relative flex flex-col p-8 bg-surface border rounded-[2.5rem] transition-all duration-700",
      plan.popular 
        ? "border-accent/50 shadow-2xl shadow-accent/10 scale-105 z-10" 
        : "border-border hover:border-accent/20 hover:shadow-lg hover:shadow-foreground/5"
    )}>
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <Badge variant="accent" className="uppercase tracking-[0.25em] px-6 py-2 text-[10px] font-bold rounded-full shadow-xl shadow-accent/30 border-none">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-extrabold uppercase tracking-widest mb-4 opacity-80">{plan.name}</h3>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tracking-tighter transition-all duration-500">
              {formatCurrency(displayPrice)}
            </span>
            <span className="text-muted text-xs uppercase tracking-widest font-bold opacity-60">
              /{isYearly ? "Year" : "Month"}
            </span>
          </div>
          {isYearly && (
            <div className="flex items-center gap-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-500">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Best Value
                </p>
                <div className="h-4 w-px bg-accent/20" />
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    Save {formatCurrency(savings)}
                </p>
            </div>
          )}
        </div>
      </div>

      <ul className="flex-1 space-y-5 mb-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3.5 text-sm">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                <Check size={12} weight="bold" className="text-accent" />
            </div>
            <span className="text-foreground/70 leading-relaxed font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={plan.popular ? "accent" : "outline"} 
        size="lg"
        className={cn(
            "w-full uppercase font-extrabold tracking-[0.25em] h-16 rounded-2xl transition-all",
            plan.popular ? "shadow-lg shadow-accent/20" : "hover:bg-accent/5 hover:border-accent/40"
        )}
      >
        Choose {plan.name}
      </Button>
    </div>
  );
}

interface PricingSectionProps {
  gyms: Gym[];
  initialGymId?: string;
}

export function PricingSection({ gyms, initialGymId }: PricingSectionProps) {
  const [activeGymId, setActiveGymId] = useState<string>(
    initialGymId && gyms.find(g => g.id === initialGymId) ? initialGymId : gyms[0].id
  );
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const activeGym = gyms.find((g) => g.id === activeGymId) || gyms[0];

  return (
    <div className="flex flex-col items-center gap-20 w-full max-w-7xl mx-auto px-4">
      {/* Premium Selectors Container */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full justify-center">
        
        {/* Modern Gym Selector with Sliding Background */}
        <div className="relative flex p-1 bg-surface border border-border/40 rounded-2xl shadow-xl shadow-foreground/5 max-w-lg w-full sm:w-auto glass transition-all hover:border-border/60">
          {/* Sliding Background - Matches Button Aesthetic */}
          <div 
            className="absolute top-1 bottom-1 left-1 bg-accent rounded-xl transition-all duration-500 ease-out shadow-lg shadow-accent/25"
            style={{ 
              width: `calc(${100 / gyms.length}% - 2px)`,
              transform: `translateX(${gyms.findIndex(g => g.id === activeGymId) * 100}%)`,
              zIndex: 0
            }}
          />
          {gyms.map((gym) => (
            <button
              key={gym.id}
              onClick={() => setActiveGymId(gym.id)}
              className={cn(
                "relative z-10 flex-1 px-8 py-3.5 rounded-xl text-[10px] font-extrabold uppercase tracking-[0.25em] transition-all duration-500 whitespace-nowrap",
                activeGymId === gym.id ? "text-accent-foreground" : "text-muted hover:text-foreground/80"
              )}
            >
              {gym.name}
            </button>
          ))}
        </div>

        {/* Integrated Billing Selector - Matches Button Aesthetic with Color Feedback */}
        <div className="group relative flex items-center gap-6 bg-surface px-8 py-3.5 rounded-2xl border border-border/40 shadow-xl shadow-foreground/5 glass transition-all hover:border-border/60">
          <button 
            onClick={() => setBillingCycle("monthly")}
            className={cn(
                "text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300",
                billingCycle === "monthly" ? "text-accent" : "text-muted hover:text-foreground/40"
            )}
          >
            Monthly
          </button>
          
          <button 
            onClick={() => setBillingCycle(prev => prev === "monthly" ? "yearly" : "monthly")}
            className={cn(
                "w-14 h-7 rounded-full relative transition-all focus:outline-none p-1 border border-border/40",
                billingCycle === "yearly" ? "bg-accent/10 border-accent/20" : "bg-background"
            )}
            aria-label="Toggle billing cycle"
          >
            <div className={cn(
              "w-5 h-5 bg-accent rounded-full transition-all duration-500 ease-out shadow-lg shadow-accent/20",
              billingCycle === "monthly" ? "ml-0" : "ml-7"
            )} />
          </button>

          <div className="flex items-center gap-3">
            <button 
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                    "text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300",
                    billingCycle === "yearly" ? "text-accent" : "text-muted hover:text-foreground/40"
                )}
            >
                Yearly
            </button>
            <Badge 
                variant="accent" 
                className={cn(
                    "text-[8px] px-2 py-0.5 border-none font-black transition-all duration-300",
                    billingCycle === "yearly" ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" : "bg-accent/10 text-accent opacity-60"
                )}
            >
                -17% OFF
            </Badge>
          </div>
        </div>
      </div>

      {/* Grid Display with Transitions */}
      <div 
        key={activeGymId} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out"
      >
        {activeGym.plans.map((plan) => (
          <PricingCard 
            key={`${activeGymId}-${plan.id}`} 
            plan={plan} 
            billingCycle={billingCycle} 
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 text-center pb-10">
         <p className="text-[10px] text-muted uppercase font-bold tracking-[0.25em] max-w-md opacity-50 px-6">
            Prices inclusive of GST. Cancel anytime for monthly plans. Annual plans offer fixed rate protection and 
            priority slot booking in all JY locations.
         </p>
         <div className="h-8 w-px bg-gradient-to-b from-accent/20 to-transparent" />
      </div>
    </div>
  );
}
