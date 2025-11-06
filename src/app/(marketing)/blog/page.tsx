import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Blog",
  description: "Read our latest articles and insights",
});

export default function BlogPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-muted-foreground">
        Read our latest articles and insights.
      </p>
    </div>
  );
}


