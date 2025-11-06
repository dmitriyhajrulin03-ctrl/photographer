"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { Camera, Sparkles, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: Camera,
    title: "Professionelle Qualität",
    description: "Hochwertige Ausrüstung und jahrelange Erfahrung garantieren erstklassige Ergebnisse für jeden Anlass.",
  },
  {
    icon: Sparkles,
    title: "Kreative Vision",
    description: "Einzigartige Perspektiven und innovative Bildkompositionen, die Ihre Geschichte authentisch erzählen.",
  },
  {
    icon: Users,
    title: "Individuelle Betreuung",
    description: "Persönlicher Service und maßgeschneiderte Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.",
  },
];

export function BenefitsSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <Star className="w-4 h-4" />
            <span>Vorteile</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unsere Vorteile
          </h2>
          <p className="text-lg text-muted-foreground">
            Warum Sie uns als Ihren Partner für Content Creation wählen sollten
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const spotlightColors = [
              "rgba(82, 39, 255, 0.2)",   // primary color
              "rgba(255, 159, 252, 0.2)", // accent color
              "rgba(177, 158, 239, 0.2)", // chart color
            ];

            return (
              <SpotlightCard
                key={index}
                className="h-full"
                spotlightColor={spotlightColors[index]}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}

