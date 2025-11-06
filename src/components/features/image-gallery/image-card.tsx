import Image from "next/image";
import { PortfolioItem } from "@/types/portfolio";

type ImageCardProps = {
  item: PortfolioItem;
};

export function ImageCard({ item }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card">
      <div className="aspect-square relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
        <h3 className="font-semibold text-white">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-white/80">{item.description}</p>
        )}
      </div>
    </div>
  );
}

