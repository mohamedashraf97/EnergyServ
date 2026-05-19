"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { DynamicIcon } from "@/components/icons/dynamic-icon";

export function ServicesGrid() {
  return (
    <StaggerContainer className="grid gap-8 md:grid-cols-2">
      {services.map((service) => (
        <StaggerItem key={service.id}>
          <motion.article
            whileHover={{ y: -4 }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent/10 md:flex-row"
          >
            <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-auto md:w-2/5">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent md:bg-gradient-to-t" />
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-accent">
                <DynamicIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h2 className="font-display text-xl font-bold text-navy lg:text-2xl">
                {service.title}
              </h2>
              <p className="mt-3 flex-1 text-slate leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
