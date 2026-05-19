import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ProductsCatalog } from "@/components/products/products-catalog";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Industrial products including safety equipment, tools, electrical and mechanical components for energy and construction projects.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Industrial Equipment & Supplies"
        description="Premium industrial products for safety, reliability, and performance in demanding environments."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Product Catalog"
              description="Browse our range of industrial products. Contact us for specifications and availability — no online purchasing."
            />
          </FadeIn>
          <div className="mt-12">
            <ProductsCatalog />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
