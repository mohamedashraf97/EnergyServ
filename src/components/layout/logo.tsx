import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  variant?: "full" | "icon";
};

export function Logo({ className, light = false, variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={cn("group block", className)} aria-label="Energy Serv home">
        <Image
          src="/energy-serv-logo-transparent.png"
          alt="Energy Serv"
          width={40}
          height={40}
          className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "group block rounded-lg bg-white px-3 py-1.5",
        className
      )}
      aria-label="Energy Serv home"
    >
      <Image
        src="/energy-serv-logo-transparent.png"
        alt="Energy Serv"
        width={220}
        height={56}
        className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
        priority
      />
    </Link>
  );
}
