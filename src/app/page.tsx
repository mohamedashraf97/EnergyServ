import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { IntroSection } from "@/components/home/intro-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ProductsPreview } from "@/components/home/products-preview";
import { IndustriesSection } from "@/components/home/industries-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <IntroSection />
      <ServicesPreview />
      <ProductsPreview />
      <IndustriesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
