// Unified site configuration (single source of truth)

export const siteConfig = {
  // Site metadata
  name: "JOHANNPICTURES",
  tagline: "Digital Creator",
  description: "Professional photography and digital creation",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://johannpictures.com",
  author: "JOHANNPICTURES",
  locale: "de_DE",

  // SEO defaults
  seo: {
    defaultTitle: "JOHANNPICTURES Digital Creator",
    titleTemplate: "%s | JOHANNPICTURES",
    defaultDescription: "Professional photography and digital creation",
    keywords: ["photography", "digital creator", "johannpictures", "fotografie"],
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "JOHANNPICTURES",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@johannpictures",
    },
  },

  // Analytics IDs
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
    enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  },

  // Routes
  routes: {
    home: "/",
    about: "/ueber-uns",
    services: "/services",
    contact: "/kontakt",
    portfolio: "/portfolio",
    blog: "/blog",
    login: "/login",
    register: "/register",
  },

  // Social links
  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },

  // Contact
  contact: {
    email: "info@johannpictures.com",
    phone: "+49 (0) 123 456 789",
  },
  
  // Services
  services: [
    { name: "Fotografie", href: "/services/fotografie" },
    { name: "Videografie", href: "/services/videografie" },
    { name: "Branding", href: "/services/branding" },
    { name: "Web Design", href: "/services/web-design" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

