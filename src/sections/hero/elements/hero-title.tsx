import { cn } from "@/lib/utils";

type HeroTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroTitle({ children, className }: HeroTitleProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}




