import type { Metadata } from "next";
import { Phone, MapPin, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Energy Serv in Riyadh — phone, commercial registration, and location.",
};

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    content: siteConfig.location,
  },
  {
    icon: Phone,
    title: "Phone",
    content: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: FileText,
    title: "Commercial Registration",
    content: siteConfig.cr,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description={siteConfig.contactText}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              {siteConfig.contactText}
            </p>
          </FadeIn>

          <StaggerContainer className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
            {contactItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-slate/10 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-accent">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-3 font-display text-lg font-semibold text-navy transition-colors hover:text-accent"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-3 font-display text-lg font-semibold text-navy">
                      {item.title === "Commercial Registration"
                        ? `CR: ${item.content}`
                        : item.content}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
