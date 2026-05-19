import { industries } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { DynamicIcon } from "@/components/icons/dynamic-icon";

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Industries Served"
            title="Sector Expertise Across the Kingdom"
            description="Deep domain knowledge across Saudi Arabia's key industrial and energy sectors."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className="group flex gap-5 rounded-2xl border border-slate/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <DynamicIcon name={industry.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{industry.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
