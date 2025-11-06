import Link from "next/link";
import { Camera } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center space-x-3 group", className)}>
      {/* Camera Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        <Camera className="w-5 h-5" />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
          {siteConfig.name}
        </span>
        <span className="text-xs font-normal text-muted-foreground leading-tight">
          <span>Digital</span>
          <span className="mx-1 text-primary">•</span>
          <span>Creator</span>
        </span>
      </div>
    </Link>
  );
}

