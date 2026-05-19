import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Industrial operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl glass-card p-4">
                <p className="text-2xl font-display font-bold text-white">12+</p>
                <p className="text-sm text-metallic">Years of Industrial Excellence</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <SectionHeading
              eyebrow="About Energy Serv"
              title="Your Trusted Partner for Megaprojects"
              align="left"
            />
            <p className="mt-6 text-slate leading-relaxed">
              Based in Riyadh, Energy Serv is a premier provider of industrial support,
              engineering solutions, and technical manpower for Saudi Arabia&apos;s most
              ambitious energy and infrastructure projects. We combine deep local expertise
              with international standards to deliver results that matter.
            </p>
            <p className="mt-4 text-slate leading-relaxed">
              From oil & gas operations to renewable energy infrastructure, our dedicated
              teams ensure safety, quality, and on-time delivery across every engagement.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
