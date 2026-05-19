import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Delivering Excellence at Scale"
            description="A showcase of megaprojects where Energy Serv has made a measurable impact."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <Link
                href="/projects"
                className={`group relative block overflow-hidden rounded-2xl ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    i === 0 ? "aspect-[16/9] lg:aspect-[2/1]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1 text-sm text-metallic">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover"
          >
            View Full Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
