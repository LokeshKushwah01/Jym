import { ClassSlot } from "@/types/schedule";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "@phosphor-icons/react/dist/ssr";
import { trainers } from "@/lib/data";

interface ScheduleGridProps {
  slots: ClassSlot[];
}

export function ScheduleGrid({ slots }: ScheduleGridProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-16">
      {days.map((day) => {
        const daySlots = slots.filter((s) => s.day === day);
        if (daySlots.length === 0) return null;

        return (
          <div key={day} className="space-y-6">
            <h3 className="text-2xl font-extrabold uppercase tracking-[0.2em] border-l-4 border-accent pl-5">
              {day}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {daySlots.map((slot, index) => {
                const trainer = trainers.find((t) => t.id === slot.trainer);
                return (
                  <div key={index} className="bg-surface border border-border p-6 rounded-2xl flex flex-col gap-5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all group">
                    <div className="flex justify-between items-start">
                      <Badge variant="accent" className="text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full">
                        {slot.type}
                      </Badge>
                      <span className="text-[10px] font-bold text-muted uppercase tracking-[0.15em]">
                        {slot.gym === "alpha" ? "Alpha" : "Beta"}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-extrabold uppercase tracking-tight group-hover:text-accent transition-colors">{slot.name}</h4>
                      <div className="flex items-center gap-2 text-muted text-xs mt-1.5 font-medium">
                        <Clock size={16} weight="bold" className="text-accent/60" />
                        <span>{slot.time} • {slot.duration}m</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-5 border-t border-border/60 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10">
                        <User size={18} weight="bold" className="text-accent/60" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground leading-none mb-1">{trainer?.name}</span>
                        <span className="text-[10px] text-muted uppercase font-bold tracking-widest opacity-70">{trainer?.speciality}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
