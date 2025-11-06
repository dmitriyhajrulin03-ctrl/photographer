"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Nikon",
    lightImage: "https://cdn.simpleicons.org/nikon/000000",
    darkImage: "https://cdn.simpleicons.org/nikon/FFFFFF",
    alt: "Nikon Logo",
  },
  {
    name: "Sony",
    lightImage: "https://cdn.simpleicons.org/sony/000000",
    darkImage: "https://cdn.simpleicons.org/sony/FFFFFF",
    alt: "Sony Logo",
  },
  {
    name: "Apple",
    lightImage: "https://cdn.simpleicons.org/apple/000000",
    darkImage: "https://cdn.simpleicons.org/apple/FFFFFF",
    alt: "Apple Logo",
  },
  {
    name: "Samsung",
    lightImage: "https://cdn.simpleicons.org/samsung/1428A0",
    darkImage: "https://cdn.simpleicons.org/samsung/6BA5F8",
    alt: "Samsung Logo",
  },
];

export function LogosSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");
  
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden relative">
          <div className="flex gap-8 md:gap-12 animate-logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-40 md:h-20 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={isDark ? logo.darkImage : logo.lightImage}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

