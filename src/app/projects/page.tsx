import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Energy Serv's portfolio of industrial, energy, oil & gas, and construction megaprojects across Saudi Arabia.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects That Define Excellence"
        description="A showcase of megaprojects where our teams have delivered measurable impact across the Kingdom."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Our Project Portfolio"
              description="Filter by category to explore our work across industrial facilities, energy infrastructure, and more."
              light
            />
          </FadeIn>
          <div className="mt-12">
            <ProjectsGallery />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
