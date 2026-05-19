import Link from "next/link";
import { Phone, MapPin, FileText, Share2, Globe, MessageCircle } from "lucide-react";
import { siteConfig, services } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-metallic">
              {siteConfig.description.slice(0, 120)}...
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Share2, label: "LinkedIn" },
                { icon: Globe, label: "Website" },
                { icon: MessageCircle, label: "Contact" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-metallic transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-metallic transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-metallic transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-metallic">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex gap-3 text-sm text-metallic transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-metallic">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                CR: {siteConfig.cr}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-metallic">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-metallic/70">
            Kingdom of Saudi Arabia · Industrial Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
