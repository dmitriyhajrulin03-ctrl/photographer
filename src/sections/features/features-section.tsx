import { Sparkles } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="container py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <Sparkles className="w-4 h-4" />
          <span>Features</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Features
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover our amazing features and capabilities.
        </p>
      </div>
    </section>
  );
}


