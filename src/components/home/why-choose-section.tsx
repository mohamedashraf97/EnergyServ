import Image from "next/image";
import { whyChooseUs } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { DynamicIcon } from "@/components/icons/dynamic-icon";

export function WhyChooseSection() {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <SectionHeading
              eyebrow="Why Energy Serv"
              title="Built for Megaproject Excellence"
              description="We combine scale, expertise, and unwavering commitment to deliver outcomes that define industry leadership."
              align="left"
              light
            />
            <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <DynamicIcon name={item.icon} className="h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-metallic">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
                alt="Engineering team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
