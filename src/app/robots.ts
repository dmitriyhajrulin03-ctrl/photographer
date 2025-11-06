import { MetadataRoute } from "next";
import { generateRobots } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const robotsConfig = generateRobots();

  return {
    rules: robotsConfig.rules,
    sitemap: robotsConfig.sitemap,
  };
}


