import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {Object.entries(siteConfig.social).map(([key, url]) => (
              <Link
                key={key}
                href={url}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

