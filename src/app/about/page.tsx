import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { values, milestones, leadership } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { DynamicIcon } from "@/components/icons/dynamic-icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Energy Serv — our mission, vision, values, and leadership team serving Saudi Arabia's industrial sector.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering Excellence Since 2012"
        description="A trusted Saudi partner for industrial support, engineering solutions, and megaproject delivery."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                eyebrow="Company Overview"
                title="Powering Saudi Arabia's Industrial Future"
                align="left"
              />
              <p className="mt-6 text-slate leading-relaxed">
                Energy Serv is headquartered in Riyadh and has established itself as a
                premier provider of industrial support services, engineering solutions, and
                technical manpower for the Kingdom&apos;s most ambitious energy and
                infrastructure projects.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                Our multidisciplinary teams bring decades of combined experience across oil
                & gas, power generation, petrochemicals, and heavy industry — delivering
                safety, quality, and measurable results on every engagement.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"
                  alt="Energy Serv operations"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                <Target className="h-10 w-10 text-accent" />
                <h2 className="mt-4 font-display text-2xl font-bold text-white">Our Mission</h2>
                <p className="mt-4 text-metallic leading-relaxed">
                  To deliver world-class industrial solutions and engineering support that
                  empower our clients to achieve operational excellence, safety, and
                  sustainable growth across Saudi Arabia&apos;s megaprojects.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                <Eye className="h-10 w-10 text-accent" />
                <h2 className="mt-4 font-display text-2xl font-bold text-white">Our Vision</h2>
                <p className="mt-4 text-metallic leading-relaxed">
                  To be the most trusted industrial services partner in the GCC — recognized
                  for engineering excellence, innovation, and unwavering commitment to client
                  success in the energy transition era.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Values"
              title="Principles That Guide Every Project"
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl border border-slate/10 bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-accent">
                    <DynamicIcon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Leadership"
              title="Experienced Industry Leaders"
              description="Our executive team brings decades of combined expertise in energy, engineering, and industrial operations."
            />
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {leadership.map((person) => (
              <StaggerItem key={person.name}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-navy">{person.name}</h3>
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <p className="mt-2 text-sm text-slate">{person.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones of Growth"
              light
            />
          </FadeIn>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/30 md:left-1/2" />
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1}>
                <div
                  className={`relative mb-12 flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden w-1/2 md:block" />
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent md:left-1/2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="font-display text-2xl font-bold text-accent">{m.year}</span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{m.title}</h3>
                    <p className="mt-2 text-metallic">{m.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
