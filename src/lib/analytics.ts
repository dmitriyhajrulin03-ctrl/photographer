// Unified Analytics module (tracking, conversions, UTM parsing, A/B testing)

import { siteConfig } from "@/config/site";

type EventName = string;
type EventProperties = Record<string, unknown>;

/**
 * Track custom event
 */
export function trackEvent(eventName: EventName, properties?: EventProperties) {
  if (!siteConfig.analytics.enabled) return;

  // Google Analytics 4
  if (siteConfig.analytics.googleAnalyticsId && typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, properties);
    }
  }

  // Plausible
  if (siteConfig.analytics.plausibleDomain && typeof window !== "undefined") {
    if (window.plausible) {
      window.plausible(eventName, { props: properties });
    }
  }

  // Console in development
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Analytics Event:", eventName, properties);
  }
}

/**
 * Track conversion
 */
export function trackConversion(
  conversionId: string,
  value?: number,
  currency: string = "USD"
) {
  trackEvent("conversion", {
    conversion_id: conversionId,
    value,
    currency,
  });
}

/**
 * Track page view
 */
export function trackPageView(path: string, title?: string) {
  trackEvent("page_view", {
    path,
    title: title || document.title,
  });
}

/**
 * Parse UTM parameters from URL
 */
export function parseUtm(searchParams: URLSearchParams) {
  const utm: Record<string, string> = {};

  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmParams.forEach((param) => {
    const value = searchParams.get(param);
    if (value) {
      utm[param] = value;
    }
  });

  return Object.keys(utm).length > 0 ? utm : null;
}

/**
 * A/B test variant selection
 */
export function abTest(testName: string, variants: string[]): string {
  if (typeof window === "undefined") return variants[0];

  const storageKey = `ab_test_${testName}`;
  const stored = localStorage.getItem(storageKey);

  if (stored && variants.includes(stored)) {
    return stored;
  }

  const variant = variants[Math.floor(Math.random() * variants.length)];
  localStorage.setItem(storageKey, variant);

  trackEvent("ab_test_assigned", {
    test_name: testName,
    variant,
  });

  return variant;
}

/**
 * Initialize analytics
 */
export function initAnalytics() {
  if (typeof window === "undefined" || !siteConfig.analytics.enabled) return;

  // Google Analytics
  if (siteConfig.analytics.googleAnalyticsId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args);
      }
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", siteConfig.analytics.googleAnalyticsId);
  }

  // Plausible
  if (siteConfig.analytics.plausibleDomain) {
    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-domain", siteConfig.analytics.plausibleDomain);
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }
}

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (eventName: string, options?: { props?: EventProperties }) => void;
  }
}


