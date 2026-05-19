import {
  Award,
  BadgeCheck,
  Building2,
  ClipboardList,
  Cog,
  DraftingCompass,
  Droplets,
  Factory,
  FlaskConical,
  Fuel,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Scale,
  Shield,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Factory,
  DraftingCompass,
  Users,
  ClipboardList,
  Fuel,
  Wrench,
  Cog,
  Truck,
  Zap,
  FlaskConical,
  Building2,
  Droplets,
  Award,
  GraduationCap,
  ShieldCheck,
  Rocket,
  BadgeCheck,
  MapPin,
  Scale,
  Star,
  Lightbulb,
  Shield,
};

type DynamicIconProps = {
  name: string;
  className?: string;
};

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Factory;
  return <Icon className={className} aria-hidden />;
}
