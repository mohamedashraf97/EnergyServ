import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
};

export function PageHero({ title, description, eyebrow, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy pt-28">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      )}
      {!image && <div className="grid-pattern absolute inset-0 opacity-50" />}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          {eyebrow && (
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-metallic">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
