"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import { AnalyticsProvider } from "./analytics-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}

