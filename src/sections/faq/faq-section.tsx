import { HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section id="faq" className="container py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <HelpCircle className="w-4 h-4" />
          <span>FAQ</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions.
        </p>
      </div>
    </section>
  );
}


