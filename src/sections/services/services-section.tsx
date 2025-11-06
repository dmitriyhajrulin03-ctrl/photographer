"use client";

import { MagicBentoServices } from "@/components/MagicBentoServices";
import { siteConfig } from "@/config/site";
import { Video, Calendar, Megaphone, Drone, Zap, TrendingUp, Briefcase } from "lucide-react";

const services = [
  {
    title: "Imagefilm Produktion",
    description: "Ein Imagefilm repräsentiert Ihr Unternehmen genau so, wie Sie es sich wünschen: Es zeigt Ihr Unternehmen authentisch und überzeugend. Wir setzen Sie ins Rampenlicht damit Sie Sichtbar werden.",
    label: "Video",
    icon: Video,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/imagefilm",
  },
  {
    title: "Eventfilm Produktion",
    description: "Eventfilm Produktion aus Freiburg. Wir begleiten Ihr Event filmisch wie auch fotografisch. Ob Festival, Kongress oder Jahresfeier. Dein Aftermovie. Eventfilem aus Freiburg.",
    label: "Event",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/eventfilm",
  },
  {
    title: "Werbe Content Produktion",
    description: "Ein Werbefilm oder auch Werbespot, wirbt für Produkte, eine Marke oder eine Dienstleistung. Video Marketing Trends, dazu gehören auch Social Media Kampagnen. Mit einer Sozial Media Kampagne sichert diese den höchsten ROI.",
    label: "Marketing",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/werbe-content",
  },
  {
    title: "Luft- Drohnen Aufnahme",
    description: "Mit einer Luftbildaufnahme fliegen Sie mit uns in schwindelerregende Höhen. Ihre Zuschauer werden exzellente Luftbildaufnahme lieben. Ihr Drohnen Pilot aus Freiburg für Bauunternehmen und Handwerker",
    label: "Aerial",
    icon: Drone,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/drohnen",
  },
  {
    title: "Die Digitalisierung",
    description: "Digitale Prozesse sparen Zeit, reduzieren Kosten und schaffen Struktur. Automatisierung macht Ihr Unternehmen effizienter - von Anfrage bis Rechnung. Mehr Überblick, weniger Aufwand, höherer Umsatz.",
    label: "Digital",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/digitalisierung",
  },
  {
    title: "Kampagnen & ADS",
    description: "Meta und Google Ads sind genau das Richtige für dich, wenn du neue Kunden gewinnen oder dein Business skalieren willst. Wir entwickeln datenbasierte Kampagnen, die performen - klar, kreativ und mit Fokus auf messbare Ergebnisse.",
    label: "Ads",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#060010",
    href: siteConfig.routes.services + "/kampagnen",
  },
];

export function ServicesSection() {
  return (
    <section className="container py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <Briefcase className="w-4 h-4" />
            <span>Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unsere Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Professionelle Content Creation für Ihr Unternehmen
          </p>
        </div>

        <MagicBentoServices
          cards={services}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="82, 39, 255"
        />
      </div>
    </section>
  );
}

