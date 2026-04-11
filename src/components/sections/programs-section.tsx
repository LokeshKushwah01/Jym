"use client";

import { Barbell, HeartHalf, PersonSimpleRun } from "@phosphor-icons/react/dist/ssr";

const programs = [
  {
    title: "Weight Loss",
    tagline: "Burn fat, not muscle",
    description: "Our science-backed fat loss protocols combine HIIT cardio, resistance training, and personalized nutrition plans to shred body fat while preserving lean muscle mass.",
    icon: HeartHalf,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Muscle Gain",
    tagline: "Build size and strength",
    description: "Progressive overload training with expert spotting, customized meal plans, and supplement guidance to pack on quality muscle and hit your strength PRs.",
    icon: Barbell,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "General Fitness",
    tagline: "Move better, feel stronger",
    description: "A balanced approach to health covering mobility, functional strength, cardio conditioning, and flexibility — perfect for those starting their fitness journey.",
    icon: PersonSimpleRun,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-background fade-in-section">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Programs</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tighter leading-[1.1] text-balance">
            Programs Built for Your Goal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative h-[420px] rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${program.image}')` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <program.icon size={40} weight="duotone" className="text-accent mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white mb-1">
                  {program.title}
                </h3>
                <p className="text-accent text-sm font-bold tracking-wider mb-3">{program.tagline}</p>

                {/* Hover Reveal */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-out">
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{program.description}</p>
                  <a href="#pricing" className="btn-gradient text-white text-xs px-6 py-2.5 tracking-widest inline-block">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
