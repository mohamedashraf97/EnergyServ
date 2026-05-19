import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden section-dark py-24">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="animate-shimmer absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Ready to Partner
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Power Your Next Megaproject
          </h2>
          <p className="mt-6 text-lg text-metallic">{siteConfig.contactText}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="secondary"
              size="lg"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
