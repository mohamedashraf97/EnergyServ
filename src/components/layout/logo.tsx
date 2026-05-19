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
          src="/logo-icon.svg"
          alt="Energy Serv"
          width={40}
          height={40}
          className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("group block", className)} aria-label="Energy Serv home">
      <Image
        src={light ? "/logo-light.svg" : "/logo-dark.svg"}
        alt="Energy Serv"
        width={180}
        height={40}
        className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-90"
        priority
      />
    </Link>
  );
}
