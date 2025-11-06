import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return genMetadata({
    title: slug,
    description: `Product: ${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  
  // In real app, fetch product data here
  // const product = await getProduct(slug);
  // if (!product) notFound();

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">{slug}</h1>
      <p className="mt-4 text-muted-foreground">Product details...</p>
    </div>
  );
}


