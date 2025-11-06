import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Navigation() {
  return (
    <nav className="container flex h-14 items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold text-lg">Photographer</span>
      </Link>
      <div className="flex flex-1 items-center justify-end space-x-6">
        {Object.entries(siteConfig.routes).map(([key, href]) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

