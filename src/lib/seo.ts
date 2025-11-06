// Unified SEO module (metadata, structured data, sitemap, robots)

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type GenerateMetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
  nofollow?: boolean;
};

/**
 * Generate metadata for pages
 */
export function generateMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.seo.defaultDescription,
    keywords = siteConfig.seo.keywords,
    image = `${siteConfig.url}/og-image.jpg`,
    type = "website",
    publishedTime,
    modifiedTime,
    authors = [siteConfig.author],
    noindex = false,
    nofollow = false,
  } = options;

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.seo.defaultTitle;

  return {
    title: {
      default: siteConfig.seo.defaultTitle,
      template: siteConfig.seo.titleTemplate,
    },
    description,
    keywords: keywords ? [...keywords] : undefined,
    authors: authors.map((author) => ({ name: author })),
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.seo.openGraph.locale,
      url: siteConfig.url,
      siteName: siteConfig.seo.openGraph.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: siteConfig.seo.twitter.card,
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.seo.twitter.creator,
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

/**
 * Generate JSON-LD structured data
 */
export function generateStructuredData(
  type: "WebSite" | "Article" | "Organization",
  data: Record<string, unknown> = {}
) {
  const base = {
    "@context": "https://schema.org",
    "@type": type,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return {
    ...base,
    ...data,
  };
}

/**
 * Generate sitemap entries
 */
export type SitemapEntry = {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function generateSitemapEntries(): SitemapEntry[] {
  return [
    {
      url: `${siteConfig.url}${siteConfig.routes.home}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.about}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.portfolio}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.contact}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.blog}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

/**
 * Generate robots.txt content
 */
export function generateRobots() {
  const isProduction = process.env.NODE_ENV === "production";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: isProduction ? ["/api/", "/admin/"] : "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}


