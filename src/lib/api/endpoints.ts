// API endpoints configuration

export const apiEndpoints = {
  portfolio: {
    list: "/portfolio",
    detail: (id: string) => `/portfolio/${id}`,
    categories: "/portfolio/categories",
  },
  contact: {
    submit: "/contact",
  },
  newsletter: {
    subscribe: "/newsletter",
  },
} as const;


