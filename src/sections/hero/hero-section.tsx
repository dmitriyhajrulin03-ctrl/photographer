"use client";

import { HeroTitle, HeroCTA } from "./elements";
import LiquidEther from "@/components/LiquidEther";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Get colors from CSS variables by reading computed style
function getThemeColors(): string[] {
  if (typeof window === 'undefined') {
    return ['#5227FF', '#FF9FFC', '#B19EEF'];
  }
  
  // Create a temporary element to get computed color values
  const tempEl = document.createElement('div');
  tempEl.style.position = 'absolute';
  tempEl.style.visibility = 'hidden';
  tempEl.style.top = '-9999px';
  document.body.appendChild(tempEl);
  
  // Get computed colors
  tempEl.style.color = 'var(--primary)';
  const primaryColor = getComputedStyle(tempEl).color;
  
  tempEl.style.color = 'var(--accent)';
  const accentColor = getComputedStyle(tempEl).color;
  
  tempEl.style.color = 'var(--chart-1)';
  const chart1Color = getComputedStyle(tempEl).color;
  
  document.body.removeChild(tempEl);
  
  // Convert rgb/rgba to hex
  const rgbToHex = (rgb: string): string => {
    // Handle both rgb() and rgba() formats
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);
    if (!match) {
      // Fallback: try to parse as hex if already in hex format
      if (rgb.startsWith('#')) return rgb;
      return '#5227FF';
    }
    const [, r, g, b] = match.map(Number);
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
  };
  
  const colors = [
    primaryColor ? rgbToHex(primaryColor) : '#5227FF',
    accentColor ? rgbToHex(accentColor) : '#FF9FFC',
    chart1Color ? rgbToHex(chart1Color) : '#B19EEF',
  ];
  
  return colors;
}

// Hook for responsive breakpoints
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [colors, setColors] = useState<string[]>(['#5227FF', '#FF9FFC', '#B19EEF']);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  useEffect(() => {
    setMounted(true);
    // Check WebGL support
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    }
    // Initial color setup
    setColors(getThemeColors());
  }, []);
  
  // Update colors when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    // Use requestAnimationFrame to ensure CSS variables are updated after theme change
    const updateColors = () => {
      requestAnimationFrame(() => {
        setColors(getThemeColors());
      });
    };
    
    // Small delay to ensure CSS variables are updated
    const timer = setTimeout(updateColors, 50);
    
    return () => clearTimeout(timer);
  }, [mounted, theme, resolvedTheme]);
  
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 w-full h-full -z-10" style={{ minHeight: '100vh' }}>
        {mounted && webglSupported && (
          <LiquidEther
          colors={colors}
          mouseForce={isMobile ? 15 : 20}
          cursorSize={isMobile ? 80 : 100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={isMobile ? 0.4 : 0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="w-full h-full"
        />
        )}
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60 dark:from-background/80 dark:via-background/60 dark:to-background/80 -z-[5]" />
      
      {/* Content */}
      <div className="w-full relative z-10 flex flex-col items-center justify-center space-y-8 py-20 md:py-32 pointer-events-auto">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-4xl">
            <HeroTitle className="relative z-10 drop-shadow-lg text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold">
              Wir bringen Ihre Marke durch modernen
              <br className="hidden sm:block" />
              <span className="text-primary"> Content Creation ins Rampenlicht</span>
            </HeroTitle>
            <p className="max-w-2xl mx-auto text-center text-base sm:text-lg md:text-xl text-foreground/80 font-normal leading-relaxed drop-shadow-md">
              Moderner Content Creation, der Ihre Marke zum Strahlen bringt und authentisch mit Ihrer Zielgruppe verbindet.
            </p>
          </div>
          <div className="pt-2">
            <HeroCTA
              primary={{ label: "Services entdecken", href: "/services" }}
              secondary={{ label: "Kostenlose Beratung", href: "/kontakt" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

