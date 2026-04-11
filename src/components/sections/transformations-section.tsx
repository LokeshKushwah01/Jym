"use client";

export function TransformationsSection() {
  const transformations = [
    { name: "Rahul S.", duration: "90 Days", program: "Weight Loss" },
    { name: "Priya M.", duration: "90 Days", program: "Muscle Gain" },
    { name: "Amit G.", duration: "90 Days", program: "General Fitness" },
    { name: "Neha K.", duration: "90 Days", program: "Weight Loss" },
  ];

  const stats = [
    { value: "500+", label: "Members" },
    { value: "4.9★", label: "Rating" },
    { value: "8", label: "Years" },
    { value: "12", label: "Expert Trainers" },
  ];

  return (
    <section id="transformations" className="section-padding bg-surface fade-in-section">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Transformations</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tighter leading-[1.1] text-balance">
            Real Results. Real People.
          </h2>
          <p className="text-muted text-lg mt-4 font-medium">90 days. No excuses.</p>
        </div>

        {/* Before / After Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {transformations.map((t, i) => (
            <div key={i} className="relative rounded-lg overflow-hidden group">
              <div className="flex h-[300px]">
                {/* Before */}
                <div className="relative w-1/2 bg-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-zinc-700 flex items-center justify-center mb-2">
                      <span className="text-white/30 text-2xl font-bold">{t.name[0]}</span>
                    </div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Before</span>
                  </div>
                  <span className="label-overlay label-before">Before</span>
                </div>
                {/* After */}
                <div className="relative w-1/2 bg-zinc-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-2">
                      <span className="text-accent text-2xl font-bold">{t.name[0]}</span>
                    </div>
                    <span className="text-accent text-[10px] font-bold uppercase tracking-wider">After</span>
                  </div>
                  <span className="label-overlay label-after">After 90 Days</span>
                </div>
              </div>
              {/* Name Strip */}
              <div className="bg-background/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-wider">{t.program}</p>
                </div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider">{t.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="stats-bar py-8 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item px-6">
              <div className="stat-value font-display">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
