"use client";

import Link from "next/link";
import { Phone, Lightbulb, Camera, Image, CheckCircle, ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflowNodes = [
  {
    id: "trigger",
    number: 1,
    icon: Phone,
    label: "Kontaktaufnahme",
    description: "Erstes Gespräch zur Bedürfnisanalyse und Zieldefinition",
  },
  {
    id: "consultation",
    number: 2,
    icon: Lightbulb,
    label: "Beratung & Konzept",
    description: "Gemeinsame Entwicklung einer kreativen Strategie",
  },
  {
    id: "shooting",
    number: 3,
    icon: Camera,
    label: "Professionelle Aufnahme",
    description: "Hochwertige Produktion mit modernster Technik",
  },
  {
    id: "editing",
    number: 4,
    icon: Image,
    label: "Bildbearbeitung",
    description: "Professionelle Post-Production und Retusche",
  },
  {
    id: "delivery",
    number: 5,
    icon: CheckCircle,
    label: "Lieferung & Support",
    description: "Schnelle Lieferung und kontinuierliche Betreuung",
  },
];

export function ProcessSection() {
  return (
    <section className="container py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text & CTA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <Workflow className="w-4 h-4" />
              <span>Arbeitsprozess</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professioneller Workflow
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Von der ersten Kontaktaufnahme bis zur finalen Lieferung – unser strukturierter Prozess garantiert qualitativ hochwertige Ergebnisse und reibungslose Zusammenarbeit.
            </p>
            
            <div className="pt-4">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Workflow Diagram */}
          <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Background Numbers - positioned behind cards */}
              <div className="absolute inset-0 flex flex-col justify-between h-full min-h-[500px] lg:min-h-[600px] py-8 gap-8 pointer-events-none z-0">
                {workflowNodes.map((node) => (
                  <div
                    key={`bg-${node.id}`}
                    className="relative flex items-center"
                  >
                    <div className="absolute -left-4 lg:-left-8 xl:-left-12 text-[80px] sm:text-[100px] lg:text-[140px] xl:text-[160px] font-bold text-primary/5 dark:text-primary/10 leading-none select-none">
                      {node.number}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 z-[1]">
                <div className="absolute inset-0 border-l-2 border-dashed border-primary/30" />
              </div>

              {/* Nodes */}
              <div className="relative flex flex-col justify-between h-full min-h-[500px] lg:min-h-[600px] py-8 gap-8 z-10">
                {workflowNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="relative group"
                    >
                      {/* White Card Background */}
                      <div className="bg-white dark:bg-card border border-border rounded-xl shadow-md p-4 lg:p-6 flex items-start gap-4 lg:gap-6 group-hover:shadow-lg transition-all duration-300">
                        {/* Icon Container */}
                        <div className="relative flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 border-2 border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        
                        {/* Content - Right side */}
                        <div className="flex-1 pt-1">
                          <p className="text-base font-semibold text-foreground mb-2">
                            {node.label}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {node.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


