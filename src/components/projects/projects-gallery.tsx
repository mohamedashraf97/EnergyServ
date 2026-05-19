"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              active === cat
                ? "gradient-accent text-white shadow-lg shadow-accent/25"
                : "border border-white/20 text-metallic hover:border-accent hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-metallic">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-metallic">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-accent" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-accent" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-accent" />
                    {project.stats.team}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs uppercase tracking-wider text-metallic">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="mt-1 font-display font-bold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
