"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-12 text-center"
      >
        <CheckCircle className="h-16 w-16 text-accent" />
        <h3 className="mt-4 font-display text-2xl font-bold text-navy">
          Thank You
        </h3>
        <p className="mt-2 max-w-sm text-slate">
          Your message has been received. Our team will contact you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-navy">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Your organization"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-navy">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-slate/20 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option>Project Consultation</option>
          <option>Partnership Inquiry</option>
          <option>Services Request</option>
          <option>Products Inquiry</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-slate/20 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Send Message
        <Send className="h-4 w-4" />
      </Button>
      <p className="text-xs text-slate">
        This form is for demonstration only. No data is sent to a server.
      </p>
    </form>
  );
}
