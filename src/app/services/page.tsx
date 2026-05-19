import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Industrial support, engineering solutions, manpower supply, oil & gas support, and project management services in Saudi Arabia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-End Industrial Solutions"
        description="Comprehensive services designed to optimize operations and ensure project success across the Kingdom."
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="What We Deliver"
              description="From technical manpower to full project management support — Energy Serv is your integrated industrial partner."
            />
          </FadeIn>
          <div className="mt-16">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
