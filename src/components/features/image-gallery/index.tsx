import { PortfolioItem } from "@/types/portfolio";
import { ImageCard } from "./image-card";

type ImageGalleryProps = {
  items: PortfolioItem[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
}

