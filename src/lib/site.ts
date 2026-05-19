import { images } from "./images";

export const siteConfig = {
  name: "Energy Serv",
  tagline: "Powering Industrial Excellence Across Saudi Arabia",
  description:
    "Energy Serv delivers reliable industrial solutions, engineering support, manpower services, and project excellence for modern megaprojects across Saudi Arabia.",
  url: "https://energyserv.com",
  location: "Riyadh, Kingdom of Saudi Arabia",
  phone: "00966502574196",
  phoneDisplay: "+966 50 257 4196",
  cr: "7054254151",
  contactText:
    "Based in Riyadh, we are ready to support your next megaproject. For inquiries, partnerships, or project consultations, please reach out.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Skilled Professionals" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
] as const;

export const services = [
  {
    id: "industrial-support",
    title: "Industrial Support Services",
    description:
      "Comprehensive on-site support for industrial operations, ensuring continuity, safety, and operational efficiency across complex facilities.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    icon: "Factory",
  },
  {
    id: "engineering",
    title: "Engineering Solutions",
    description:
      "Expert engineering design, analysis, and technical consultancy aligned with international standards for energy and industrial projects.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    icon: "DraftingCompass",
  },
  {
    id: "manpower",
    title: "Technical Manpower Supply",
    description:
      "Skilled technicians, engineers, and specialists deployed rapidly to support megaprojects with proven industry expertise.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    icon: "Users",
  },
  {
    id: "project-management",
    title: "Project Management Support",
    description:
      "End-to-end project coordination, scheduling, and quality assurance for large-scale industrial and energy developments.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    icon: "ClipboardList",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Support",
    description:
      "Specialized services for upstream and downstream operations including pipeline support, process services, and facility maintenance.",
    image:
      images.oilGas,
    icon: "Fuel",
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    description:
      "Preventive and corrective maintenance programs designed to maximize asset uptime and extend equipment lifecycle.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    icon: "Wrench",
  },
  {
    id: "equipment",
    title: "Equipment Support",
    description:
      "Supply, calibration, and technical support for industrial equipment and specialized tools for field operations.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    icon: "Cog",
  },
  {
    id: "procurement",
    title: "Procurement & Logistics",
    description:
      "Strategic sourcing, supply chain management, and logistics coordination for critical project materials and equipment.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    icon: "Truck",
  },
] as const;

export const productCategories = [
  "All",
  "Safety Equipment",
  "Industrial Tools",
  "Electrical",
  "Mechanical",
  "Energy Solutions",
  "Construction",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products = [
  {
    id: "safety-helmets",
    name: "Industrial Safety Helmets",
    category: "Safety Equipment" as const,
    description: "ANSI-rated head protection for harsh industrial environments.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
  {
    id: "ppe-kit",
    name: "Complete PPE Kits",
    category: "Safety Equipment" as const,
    description: "Comprehensive personal protective equipment packages for field teams.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3780?w=600&q=80",
  },
  {
    id: "power-tools",
    name: "Heavy-Duty Power Tools",
    category: "Industrial Tools" as const,
    description: "Professional-grade tools for construction and maintenance operations.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
  },
  {
    id: "hand-tools",
    name: "Precision Hand Tool Sets",
    category: "Industrial Tools" as const,
    description: "Engineered tool sets for mechanical assembly and field repairs.",
    image:
      "https://images.unsplash.com/photo-1581147033419-2f6e05c1b8ea?w=600&q=80",
  },
  {
    id: "switchgear",
    name: "Industrial Switchgear",
    category: "Electrical" as const,
    description: "Reliable electrical distribution components for industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
  },
  {
    id: "cables",
    name: "High-Voltage Cabling",
    category: "Electrical" as const,
    description: "Premium cabling solutions for energy infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "valves",
    name: "Industrial Valves",
    category: "Mechanical" as const,
    description: "Precision valves for process control in oil, gas, and petrochemical plants.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621ddbb9?w=600&q=80",
  },
  {
    id: "pumps",
    name: "Process Pumps",
    category: "Mechanical" as const,
    description: "High-performance pumps for fluid transfer and process applications.",
    image:
      "https://images.unsplash.com/photo-1581092918457-222f9cc3d1c0?w=600&q=80",
  },
  {
    id: "solar",
    name: "Solar Energy Systems",
    category: "Energy Solutions" as const,
    description: "Scalable solar solutions for remote industrial sites and facilities.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: "generators",
    name: "Industrial Generators",
    category: "Energy Solutions" as const,
    description: "Backup and primary power generation for critical operations.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    id: "steel",
    name: "Structural Steel Supplies",
    category: "Construction" as const,
    description: "Certified structural materials for industrial construction projects.",
    image:
      "https://images.unsplash.com/photo-1541976590-713941109a0a?w=600&q=80",
  },
  {
    id: "scaffolding",
    name: "Scaffolding Systems",
    category: "Construction" as const,
    description: "Modular scaffolding solutions for safe access at height.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
] as const;

export const projectCategories = [
  "All",
  "Industrial Facilities",
  "Energy Infrastructure",
  "Oil & Gas",
  "Construction",
  "Engineering Support",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects = [
  {
    id: "refinery-expansion",
    title: "Eastern Province Refinery Expansion",
    category: "Oil & Gas" as const,
    location: "Saudi Arabia",
    year: "2024",
    description:
      "Comprehensive engineering support and manpower deployment for a major refinery capacity expansion project.",
    image:
      images.oilGasLarge,
    stats: { duration: "18 months", team: "120+", scope: "Full EPC Support" },
  },
  {
    id: "power-plant",
    title: "Combined Cycle Power Plant",
    category: "Energy Infrastructure" as const,
    location: "Riyadh Region",
    year: "2023",
    description:
      "Technical manpower and maintenance services for a 1,200 MW combined cycle power generation facility.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    stats: { duration: "24 months", team: "85+", scope: "O&M Support" },
  },
  {
    id: "manufacturing",
    title: "Industrial Manufacturing Complex",
    category: "Industrial Facilities" as const,
    location: "Jubail Industrial City",
    year: "2023",
    description:
      "End-to-end industrial support including equipment supply, installation supervision, and commissioning assistance.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    stats: { duration: "14 months", team: "200+", scope: "Turnkey Support" },
  },
  {
    id: "pipeline",
    title: "Cross-Country Pipeline Network",
    category: "Oil & Gas" as const,
    location: "Central Region",
    year: "2022",
    description:
      "Pipeline integrity services, equipment supply, and specialized technical teams for a 400km transmission network.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    stats: { duration: "30 months", team: "150+", scope: "Pipeline Services" },
  },
  {
    id: "infrastructure",
    title: "Energy Infrastructure Hub",
    category: "Energy Infrastructure" as const,
    location: "Western Province",
    year: "2024",
    description:
      "Multi-disciplinary engineering support for an integrated energy distribution and storage hub.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    stats: { duration: "20 months", team: "95+", scope: "Engineering" },
  },
  {
    id: "construction",
    title: "Mega Industrial Construction",
    category: "Construction" as const,
    location: "NEOM Region",
    year: "2024",
    description:
      "Manpower supply, procurement logistics, and project management for a next-generation industrial zone.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    stats: { duration: "36 months", team: "300+", scope: "PMC & Manpower" },
  },
] as const;

export const industries = [
  {
    title: "Oil & Gas",
    description: "Upstream, midstream, and downstream operations support.",
    icon: "Fuel",
  },
  {
    title: "Power & Energy",
    description: "Generation, transmission, and renewable energy projects.",
    icon: "Zap",
  },
  {
    title: "Petrochemicals",
    description: "Process plants, refineries, and chemical processing facilities.",
    icon: "FlaskConical",
  },
  {
    title: "Construction",
    description: "Mega infrastructure and industrial construction projects.",
    icon: "Building2",
  },
  {
    title: "Manufacturing",
    description: "Heavy industry and production facility operations.",
    icon: "Factory",
  },
  {
    title: "Utilities",
    description: "Water, power, and essential services infrastructure.",
    icon: "Droplets",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "Over a decade of delivering excellence on Saudi Arabia's most demanding industrial projects.",
    icon: "Award",
  },
  {
    title: "Expert Workforce",
    description:
      "Highly skilled engineers and technicians with deep sector-specific knowledge and certifications.",
    icon: "GraduationCap",
  },
  {
    title: "Safety First",
    description:
      "Rigorous HSE standards and zero-compromise safety culture across every engagement.",
    icon: "ShieldCheck",
  },
  {
    title: "Rapid Deployment",
    description:
      "Agile mobilization of teams and resources to meet critical project timelines.",
    icon: "Rocket",
  },
  {
    title: "Quality Assurance",
    description:
      "ISO-aligned processes ensuring consistent delivery and measurable outcomes.",
    icon: "BadgeCheck",
  },
  {
    title: "Local Expertise",
    description:
      "Deep understanding of Saudi regulations, standards, and megaproject requirements.",
    icon: "MapPin",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Energy Serv consistently exceeded our expectations on a complex refinery turnaround. Their technical teams were professional, safety-focused, and highly capable.",
    author: "Ahmed Al-Rashid",
    role: "Project Director",
    company: "Major Energy Operator",
  },
  {
    quote:
      "The quality of engineering support and manpower provided was exceptional. They integrated seamlessly with our project team and delivered on schedule.",
    author: "Sarah Mitchell",
    role: "Engineering Manager",
    company: "International EPC Contractor",
  },
  {
    quote:
      "A trusted partner for our industrial expansion. Energy Serv's procurement and logistics capabilities significantly streamlined our supply chain.",
    author: "Khalid Al-Otaibi",
    role: "Operations Lead",
    company: "Industrial Conglomerate",
  },
] as const;

export const values = [
  {
    title: "Integrity",
    description: "Transparent, ethical partnerships built on trust and accountability.",
    icon: "Scale",
  },
  {
    title: "Excellence",
    description: "Uncompromising quality in every deliverable and engagement.",
    icon: "Star",
  },
  {
    title: "Innovation",
    description: "Continuous improvement through technology and best practices.",
    icon: "Lightbulb",
  },
  {
    title: "Safety",
    description: "Protecting people, assets, and the environment above all else.",
    icon: "Shield",
  },
] as const;

export const milestones = [
  { year: "2012", title: "Company Founded", description: "Established in Riyadh to serve Saudi industrial sector." },
  { year: "2015", title: "Oil & Gas Expansion", description: "Expanded services into upstream and downstream operations." },
  { year: "2018", title: "500+ Professionals", description: "Reached milestone of 500 skilled technical personnel." },
  { year: "2021", title: "Megaproject Portfolio", description: "Secured contracts on Vision 2030 flagship projects." },
  { year: "2024", title: "Regional Leader", description: "Recognized as a premier industrial services partner in KSA." },
] as const;

export const leadership = [
  {
    name: "Eng. Abdullah Al-Mutairi",
    role: "Chief Executive Officer",
    bio: "25+ years in oil & gas and industrial project management across the GCC.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Eng. Fatima Al-Harbi",
    role: "Chief Operations Officer",
    bio: "Expert in operational excellence and large-scale manpower deployment.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Eng. Omar Al-Qahtani",
    role: "Technical Director",
    bio: "Leading engineering solutions with international standards expertise.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
] as const;
