"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Star, Quote, Users } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Müller",
    role: "Geschäftsführerin, TechStart GmbH",
    content: "Die Zusammenarbeit mit JOHANNPICTURES war außergewöhnlich. Unser Imagefilm hat unsere Marke perfekt repräsentiert und uns geholfen, neue Kunden zu gewinnen. Professionell, kreativ und termingerecht!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(82, 39, 255, 0.2)",
  },
  {
    name: "Michael Schneider",
    role: "Event Manager, EventPro",
    content: "Die Eventfilm-Produktion für unser Festival war einfach fantastisch. Das Team hat jeden Moment eingefangen und ein Aftermovie erstellt, das unsere Zuschauer begeistert hat. Absolut empfehlenswert!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(255, 159, 252, 0.2)",
  },
  {
    name: "Lisa Weber",
    role: "Marketing Director, BrandVision",
    content: "Die Werbe-Content-Produktion hat unsere Social-Media-Kampagne auf ein neues Level gebracht. Die Videos haben eine enorme Reichweite erzielt und unseren ROI deutlich gesteigert. Top Qualität!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(177, 158, 239, 0.2)",
  },
  {
    name: "Thomas Fischer",
    role: "Bauunternehmer, Fischer Bau",
    content: "Die Drohnenaufnahmen für unser Bauprojekt waren beeindruckend. Professionelle Luftbildaufnahmen, die unseren Fortschritt perfekt dokumentiert haben. Sehr zufrieden mit dem Ergebnis!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(82, 39, 255, 0.2)",
  },
  {
    name: "Anna Klein",
    role: "CEO, Digital Solutions",
    content: "Die Digitalisierung unserer Prozesse war ein voller Erfolg. Von der Anfrage bis zur Rechnung - alles läuft jetzt reibungslos. Das Team hat uns perfekt durch die Transformation begleitet.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(255, 159, 252, 0.2)",
  },
  {
    name: "David Hoffmann",
    role: "E-Commerce Manager, ShopMax",
    content: "Die Google und Meta Ads Kampagnen haben unsere Conversion-Rate um 40% gesteigert. Datenbasierte Strategien, kreative Umsetzung und messbare Ergebnisse. Genau das, was wir brauchten!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    spotlightColor: "rgba(177, 158, 239, 0.2)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <Users className="w-4 h-4" />
            <span>Referenzen</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen Sie auf die Erfahrung unserer zufriedenen Kunden
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SpotlightCard
              key={index}
              className="h-full flex flex-col"
              spotlightColor={testimonial.spotlightColor}
            >
              <div className="flex flex-col h-full space-y-4">
                {/* Quote Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
