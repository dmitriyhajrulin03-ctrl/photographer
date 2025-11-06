"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronDown, Mail, Phone, MessageSquare, Clock, Euro, Drone, Share2, Handshake, CheckCircle2, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqItems = [
  {
    question: "Wie lange dauert die Produktion eines Imagefilms?",
    answer: "Die Produktionszeit variiert je nach Umfang des Projekts. Ein einfacher Imagefilm dauert in der Regel 4-6 Wochen, während komplexere Projekte 8-12 Wochen in Anspruch nehmen können. Wir besprechen die genauen Zeiträume gerne in einem persönlichen Gespräch.",
    icon: Clock,
  },
  {
    question: "Welche Kosten entstehen für eine Video-Produktion?",
    answer: "Die Kosten hängen von verschiedenen Faktoren ab: Länge des Videos, Aufwand der Produktion, Anzahl der Drehtage, Post-Production-Aufwand und zusätzliche Services. Wir erstellen Ihnen gerne ein individuelles Angebot basierend auf Ihren Anforderungen.",
    icon: Euro,
  },
  {
    question: "Bieten Sie auch Drohnenaufnahmen an?",
    answer: "Ja, wir bieten professionelle Drohnenaufnahmen für verschiedene Anlässe an. Unser Team verfügt über die notwendigen Lizenzen und Erfahrung für Luftbildaufnahmen. Ideal für Bauprojekte, Events, Immobilien und Werbefilme.",
    icon: Drone,
  },
  {
    question: "Können Sie auch Social Media Content erstellen?",
    answer: "Absolut! Wir erstellen maßgeschneiderten Content für alle gängigen Social-Media-Plattformen. Von kurzen Clips für Instagram Reels und TikTok bis hin zu längeren Videos für YouTube - wir passen den Content an Ihre Zielgruppe und Plattform an.",
    icon: Share2,
  },
  {
    question: "Wie funktioniert die Zusammenarbeit?",
    answer: "Wir beginnen mit einem kostenlosen Beratungsgespräch, in dem wir Ihre Wünsche und Ziele besprechen. Anschließend erstellen wir ein Konzept, das wir gemeinsam verfeinern. Nach der Freigabe starten wir mit der Produktion und halten Sie während des gesamten Prozesses auf dem Laufenden.",
    icon: Handshake,
  },
  {
    question: "Was ist im Preis enthalten?",
    answer: "Im Preis enthalten sind: Konzeption, Drehplanung, Produktion, Post-Production, Farbkorrektur, Tonbearbeitung und die finale Auslieferung in verschiedenen Formaten. Zusätzliche Services wie Musiklizenzen oder zusätzliche Drehtage werden separat berechnet.",
    icon: CheckCircle2,
  },
];

export function FAQContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
      alert("Vielen Dank! Wir melden uns bald bei Ihnen.");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Häufige Fragen & Kontakt
          </h2>
          <p className="text-lg text-muted-foreground">
            Haben Sie Fragen? Wir beantworten sie gerne oder kontaktieren Sie uns direkt
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* FAQ Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Häufig gestellte Fragen</h3>
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-lg overflow-hidden bg-card"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-4 text-left hover:bg-accent/50 transition-colors gap-4"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground text-sm sm:text-base">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                          openIndex === index && "rotate-180"
                        )}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-4 pb-4 pl-11">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h3>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 p-6 border border-border rounded-lg bg-card"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Ihr Name"
                  {...form.register("name")}
                  className={cn(
                    form.formState.errors.name && "border-destructive"
                  )}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre.email@beispiel.de"
                  {...form.register("email")}
                  className={cn(
                    form.formState.errors.email && "border-destructive"
                  )}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Telefon (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+49 (0) 123 456 789"
                  {...form.register("phone")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Ihre Nachricht..."
                  rows={5}
                  {...form.register("message")}
                  className={cn(
                    form.formState.errors.message && "border-destructive"
                  )}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-3 p-6 border border-border rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">E-Mail</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Telefon</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

