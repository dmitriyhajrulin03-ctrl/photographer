// Portfolio API

import { apiClient } from "./client";
import type { PortfolioItem } from "@/types/portfolio";
import type { ApiResponse } from "@/types/api";

const portfolioEndpoints = {
  list: "/portfolio",
  detail: (id: string) => `/portfolio/${id}`,
  categories: "/portfolio/categories",
} as const;

export const portfolioApi = {
  getList: async (): Promise<ApiResponse<PortfolioItem[]>> => {
    return apiClient.get<PortfolioItem[]>(portfolioEndpoints.list);
  },

  getDetail: async (id: string): Promise<ApiResponse<PortfolioItem>> => {
    return apiClient.get<PortfolioItem>(portfolioEndpoints.detail(id));
  },

  getCategories: async (): Promise<ApiResponse<string[]>> => {
    return apiClient.get<string[]>(portfolioEndpoints.categories);
  },
};


