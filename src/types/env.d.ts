// Environment variables types

declare namespace NodeJS {
  interface ProcessEnv {
    // App
    readonly NEXT_PUBLIC_APP_URL: string;
    readonly NODE_ENV: "development" | "production" | "test";

    // API
    readonly NEXT_PUBLIC_API_URL?: string;
    readonly NEXT_PUBLIC_API_KEY?: string;

    // Analytics
    readonly NEXT_PUBLIC_GA_ID?: string;
    readonly NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string;
    readonly NEXT_PUBLIC_ENABLE_ANALYTICS?: string;

    // Sentry
    readonly NEXT_PUBLIC_SENTRY_DSN?: string;
  }
}




