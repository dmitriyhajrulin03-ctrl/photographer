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
    description: `Article: ${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // In real app, fetch post data here
  // const post = await getPost(slug);
  // if (!post) notFound();

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">{slug}</h1>
      <p className="mt-4 text-muted-foreground">Blog post content...</p>
    </div>
  );
}




