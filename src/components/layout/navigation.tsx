"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: siteConfig.routes.home, label: "Home" },
  { href: siteConfig.routes.about, label: "Über uns" },
  { href: siteConfig.routes.services, label: "Services", hasDropdown: true },
  { href: siteConfig.routes.contact, label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="container">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive(item.href) && "text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={cn("h-3 w-3 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md border bg-popover p-1 shadow-md z-50">
                      {siteConfig.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-3 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) && "text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:flex">
              <Link href={siteConfig.routes.contact} className="flex items-center gap-2">
                <span>Angebot einholen</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container">
            <div className="mx-auto max-w-7xl py-4 space-y-4">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="space-y-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "flex items-center gap-3 w-full text-sm font-medium transition-colors hover:text-primary",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 ml-auto transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-8 space-y-2">
                        {siteConfig.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => {
                              setServicesOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href) && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="w-full mt-4">
              <Link href={siteConfig.routes.contact} className="flex items-center justify-center gap-2">
                <span>Angebot einholen</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

