import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/products/product-grid";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductsPreview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Products"
            title="Industrial Equipment & Supplies"
            description="Browse our catalog of industrial tools, safety equipment, instrumentation, and specialized oil & gas products."
          />
        </FadeIn>

        <div className="mt-16">
          <ProductGrid limit={8} showFilters={false} />
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
