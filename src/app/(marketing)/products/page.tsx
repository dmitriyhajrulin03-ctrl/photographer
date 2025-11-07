import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";

export const metadata: Metadata = genMetadata({
  title: "Products",
  description: "Browse our products and services",
});

export default function ProductsPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Products</h1>
      <p className="mt-4 text-muted-foreground">
        Browse our products and services.
      </p>
    </div>
  );
}




