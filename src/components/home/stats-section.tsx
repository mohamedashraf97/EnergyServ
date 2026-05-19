import { stats } from "@/lib/site";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <StaggerContainer className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="glass-card rounded-2xl bg-navy/90 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-metallic">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
