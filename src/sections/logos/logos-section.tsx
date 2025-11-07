"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Blue Water Film Festival",
    lightImage: "/logos/7015873-blue-water-film-festival-2-283x283-1-e1737627258759.png",
    darkImage: "/logos/7015873-blue-water-film-festival-2-283x283-1-e1737627258759.png",
    alt: "Blue Water Film Festival Logo",
  },
  {
    name: "Best Western",
    lightImage: "/logos/best-western-3.svg",
    darkImage: "/logos/best-western-3.svg",
    alt: "Best Western Logo",
  },
  {
    name: "BG QG",
    lightImage: "/logos/bg_qg_de_logo_04-300x169.png",
    darkImage: "/logos/bg_qg_de_logo_04-300x169.png",
    alt: "BG QG Logo",
  },
  {
    name: "CCCCCCCC",
    lightImage: "/logos/cccccccc.png",
    darkImage: "/logos/cccccccc.png",
    alt: "CCCCCCCC Logo",
  },
  {
    name: "Cent",
    lightImage: "/logos/cent-logo2020-hintergrund-transp-300x101.png",
    darkImage: "/logos/cent-logo2020-hintergrund-transp-300x101.png",
    alt: "Cent Logo",
  },
  {
    name: "FFFFFFFFFFFF",
    lightImage: "/logos/ffffffffffff.png",
    darkImage: "/logos/ffffffffffff.png",
    alt: "FFFFFFFFFFFF Logo",
  },
  {
    name: "Geberit",
    lightImage: "/logos/geberit-logo-trafiko-300x115.gif",
    darkImage: "/logos/geberit-logo-trafiko-300x115.gif",
    alt: "Geberit Logo",
  },
  {
    name: "Generic",
    lightImage: "/logos/images.png",
    darkImage: "/logos/images.png",
    alt: "Logo",
  },
  {
    name: "NNNNNNNNNN",
    lightImage: "/logos/nnnnnnnnnn-removebg-preview.png",
    darkImage: "/logos/nnnnnnnnnn-removebg-preview.png",
    alt: "NNNNNNNNNN Logo",
  },
  {
    name: "ProSiebenSat.1",
    lightImage: "/logos/prosiebensat.1-tv-deutschland-logo.svg",
    darkImage: "/logos/prosiebensat.1-tv-deutschland-logo.svg",
    alt: "ProSiebenSat.1 Logo",
  },
  {
    name: "SWR",
    lightImage: "/logos/swr_dachmarke_sw_logo.svg-300x92.png",
    darkImage: "/logos/swr_dachmarke_sw_logo.svg-300x92.png",
    alt: "SWR Logo",
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
    <section className="w-full bg-white dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="overflow-hidden relative w-full" style={{ minHeight: '80px' }}>
          <div className="flex gap-8 md:gap-12 animate-logo-scroll will-change-transform">
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

