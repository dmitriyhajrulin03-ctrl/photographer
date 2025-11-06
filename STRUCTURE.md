# Структура проекта (Ultra Modern, Clean, Best Practice)

Этот документ описывает оптимизированную структуру проекта без дублей и избыточности.

## 📁 Финальная структура

```
src/
├── app/                          # Next.js App Router (RSC-first)
│   ├── (app)/                    # Route Group: Auth pages
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── (marketing)/              # Route Group: Marketing pages
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage (metadata inline)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── products/
│   │       ├── [slug]/
│   │       │   └── page.tsx
│   │       └── page.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── analytics/
│   │   │   └── route.ts
│   │   ├── newsletter/
│   │   │   └── route.ts
│   │   └── health/
│   │       └── route.ts
│   │
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── manifest.ts               # PWA manifest
│   ├── middleware.ts             # ⚠️ i18n, security, redirects
│   ├── layout.tsx                # Root layout с providers
│   ├── error.tsx                 # Error boundary
│   ├── not-found.tsx             # 404 page
│   ├── global-error.tsx          # Global error boundary
│   ├── loading.tsx               # Loading UI
│   ├── template.tsx              # Template для transitions
│   ├── opengraph-image.tsx       # OG image generator
│   ├── twitter-image.tsx         # Twitter card generator
│   ├── icon.tsx                  # Favicon generator
│   ├── apple-icon.tsx            # Apple touch icon
│   └── globals.css               # Global styles
│
├── components/                   # React Components
│   ├── ui/                       # shadcn/ui components (colocated)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── index.ts              # Barrel export
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navigation.tsx
│   │   └── index.ts              # Barrel export
│   │
│   ├── providers/                # Context providers
│   │   ├── analytics-provider.tsx
│   │   ├── theme-provider.tsx (в providers.tsx)
│   │   ├── query-provider.tsx
│   │   ├── providers.tsx         # Все провайдеры вместе
│   │   └── index.ts              # Barrel export
│   │
│   ├── shared/                   # Общие компоненты
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── theme-toggle.tsx
│   │   └── index.ts              # Barrel export
│   │
│   ├── forms/                    # Form компоненты
│   │   ├── form-field.tsx
│   │   ├── form-input.tsx
│   │   ├── form-textarea.tsx
│   │   ├── form-select.tsx
│   │   ├── form-checkbox.tsx
│   │   └── index.ts              # Barrel export
│   │
│   └── features/                 # Feature компоненты
│       ├── image-gallery/
│       ├── contact-form/
│       └── index.ts              # Barrel export
│
├── sections/                     # Page sections (colocated by feature)
│   ├── hero/
│   │   ├── elements/
│   │   │   ├── hero-title.tsx
│   │   │   ├── hero-cta.tsx
│   │   │   └── index.ts
│   │   └── hero-section.tsx
│   ├── features/
│   │   └── features-section.tsx
│   ├── testimonials/
│   │   └── testimonials-section.tsx
│   ├── pricing/
│   │   └── pricing-section.tsx
│   ├── newsletter/
│   │   └── newsletter-section.tsx
│   ├── faq/
│   │   └── faq-section.tsx
│   └── index.ts                  # Barrel export
│
├── lib/                          # Utilities & helpers
│   ├── utils.ts                  # cn() и общие утилиты
│   │
│   ├── seo.ts                    # ⚠️ Объединенный SEO модуль
│   │   ├── generateMetadata()
│   │   ├── generateStructuredData()
│   │   ├── generateSitemapEntries()
│   │   └── generateRobots()
│   │
│   ├── analytics.ts              # ⚠️ Объединенный Analytics модуль
│   │   ├── trackEvent()
│   │   ├── trackConversion()
│   │   ├── parseUtm()
│   │   └── abTest()
│   │
│   ├── api/                      # API client
│   │   ├── client.ts             # Base fetch wrapper
│   │   ├── endpoints.ts          # API endpoints
│   │   ├── portfolio.ts         # Portfolio API methods
│   │   └── index.ts              # Barrel export
│   │
│   ├── auth/                     # Auth utilities
│   │   └── config.ts             # NextAuth config (placeholder)
│   │
│   └── i18n/                     # i18n utilities
│       └── config.ts             # next-intl config (placeholder)
│
├── hooks/                        # Custom React hooks (client-only)
│   ├── use-analytics.ts
│   ├── use-media-query.ts
│   ├── use-scroll.ts
│   ├── use-debounce.ts
│   └── index.ts                  # Barrel export
│
├── store/                        # Zustand stores (client-only)
│   ├── slices/
│   │   ├── ui-store.ts           # UI state
│   │   ├── portfolio-store.ts
│   │   └── index.ts
│   ├── hooks.ts
│   └── index.ts                  # Barrel export
│
├── types/                        # TypeScript types
│   ├── index.ts                  # Общие типы
│   ├── seo.ts                    # SEO типы (встроены в seo.ts)
│   ├── api.ts                    # API типы
│   ├── store.ts                  # Store типы
│   └── env.d.ts                  # ⚠️ Environment types
│
├── config/                       # Configuration (single source of truth)
│   ├── site.ts                   # ⚠️ Объединенная конфигурация
│   │   ├── site metadata
│   │   ├── SEO defaults
│   │   ├── Analytics IDs
│   │   └── Routes
│   ├── env.ts                    # Environment validation
│   └── index.ts                  # Barrel export
│
└── messages/                     # i18n messages (next-intl)
    ├── en.json
    └── ru.json
```

## 🎯 Ключевые оптимизации (без дублей)

### 1. Объединенный SEO модуль (`lib/seo.ts`)

Вместо отдельных файлов — один модуль:
- `generateMetadata()` — генерация метаданных
- `generateStructuredData()` — JSON-LD
- `generateSitemapEntries()` — sitemap
- `generateRobots()` — robots.txt

### 2. Объединенный Analytics модуль (`lib/analytics.ts`)

Вместо разделения — один модуль:
- `trackEvent()` — отслеживание событий
- `trackConversion()` — конверсии
- `parseUtm()` — парсинг UTM
- `abTest()` — A/B тестирование

### 3. Единая конфигурация (`config/site.ts`)

Вместо нескольких файлов — один источник правды:
- Site metadata
- SEO defaults
- Analytics IDs
- Routes
- Social links

### 4. Metadata inline (colocation)

Вместо отдельных `metadata.ts` — экспорт metadata из `page.tsx`:

```typescript
// app/(marketing)/page.tsx
export const metadata: Metadata = genMetadata({
  title: "Home",
  description: "Professional photography portfolio",
});
```

### 5. Упрощенная структура компонентов

- `components/ui/` — только shadcn компоненты
- `components/layout/` — layout компоненты (Header, Footer, Navigation)
- `components/providers/` — провайдеры
- `components/shared/` — общие компоненты
- `components/forms/` — form компоненты
- `components/features/` — feature компоненты
- `sections/` — секции страниц (отдельно от components)

### 6. Colocation секций

Секции в `sections/` рядом с использованием, без избыточной вложенности.

## 📝 Best Practices

### Импорты (с barrel exports)

```typescript
// 1. Внешние библиотеки
import { useState } from "react";
import Link from "next/link";

// 2. Внутренние компоненты (с алиасами и barrel exports)
import { Header, Footer } from "@/components/layout";
import { HeroSection } from "@/sections";
import { Button, Card } from "@/components/ui";
import { FormInput } from "@/components/forms";

// 3. Store
import { useUIStore } from "@/store";

// 4. Утилиты и типы
import { cn } from "@/lib/utils";
import { generateMetadata } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { PortfolioItem } from "@/types";

// 5. Конфигурация
import { siteConfig } from "@/config";

// 6. Провайдеры
import { Providers } from "@/components/providers";

// 7. API
import { portfolioApi } from "@/lib/api";

// 8. Хуки
import { useMediaQuery, useDebounce } from "@/hooks";
```

### Использование SEO

```typescript
// app/(marketing)/page.tsx
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description: "Professional photography portfolio",
});
```

### Использование Analytics

```typescript
"use client";

import { trackEvent, parseUtm } from "@/lib/analytics";
import { useSearchParams } from "next/navigation";

export function Component() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const utm = parseUtm(new URLSearchParams(searchParams.toString()));
    if (utm) {
      trackEvent("page_view", utm);
    }
  }, [searchParams]);
}
```

## 🚀 Современные практики

### 1. React Server Components First
- Все компоненты по умолчанию Server Components
- `'use client'` только когда нужно

### 2. Metadata API
- Использование Next.js Metadata API
- Динамические метаданные через `generateMetadata()`

### 3. Route Groups
- `(auth)/` — для страниц авторизации
- `(marketing)/` — для маркетинговых страниц
- Без влияния на URL

### 4. Streaming SSR
- `loading.tsx` для каждого route
- `template.tsx` для transitions

### 5. TypeScript Strict
- Строгая типизация
- `env.d.ts` для env переменных

### 6. Performance
- Dynamic imports для секций
- Image optimization
- Font optimization

## 📚 Дополнительные ресурсы

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
