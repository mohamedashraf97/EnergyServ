"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/site";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by Industry Leaders"
            description="What our partners say about working with Energy Serv on critical projects."
          />
        </FadeIn>

        <FadeIn className="mt-16">
          <div className="relative mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl sm:p-12 lg:p-16">
            <Quote className="absolute left-8 top-8 h-12 w-12 text-accent/20" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-xl leading-relaxed text-charcoal sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-slate/10 pt-6">
                  <cite className="not-italic">
                    <span className="font-display font-bold text-navy">
                      {current.author}
                    </span>
                    <span className="mt-1 block text-sm text-slate">
                      {current.role} · {current.company}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-accent" : "w-2 bg-slate/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/20 text-navy transition-colors hover:border-accent hover:text-accent"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/20 text-navy transition-colors hover:border-accent hover:text-accent"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
