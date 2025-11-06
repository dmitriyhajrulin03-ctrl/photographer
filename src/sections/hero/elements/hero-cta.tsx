import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroCTAProps = {
  primary?: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
  className?: string;
};

export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  if (!primary && !secondary) return null;

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:justify-center", className)}>
      {primary && (
        <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
          <Link href={primary.href}>
            {primary.label}
          </Link>
        </Button>
      )}
      {secondary && (
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className="text-base px-8 py-6 border-2 hover:bg-accent/50 transition-all"
        >
          <Link href={secondary.href}>
            {secondary.label}
          </Link>
        </Button>
      )}
    </div>
  );
}

