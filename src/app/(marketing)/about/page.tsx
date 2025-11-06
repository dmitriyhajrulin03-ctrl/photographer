import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "About",
  description: "Learn more about us",
});

export default function AboutPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-muted-foreground">
        Learn more about our story and mission.
      </p>
    </div>
  );
}


