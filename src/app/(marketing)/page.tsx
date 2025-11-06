import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/sections/hero/hero-section";
import { LogosSection } from "@/sections/logos/logos-section";
import { BenefitsSection } from "@/sections/benefits/benefits-section";
import { ServicesSection } from "@/sections/services/services-section";
import { ProcessSection } from "@/sections/process/process-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { FAQContactSection } from "@/sections/faq-contact/faq-contact-section";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Home",
  description: "Professional photography portfolio",
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQContactSection />
      </main>
      <Footer />
    </>
  );
}
