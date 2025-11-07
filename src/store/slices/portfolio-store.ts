"use client";

import { create } from "zustand";
import type { PortfolioStore } from "@/types/store";

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  // State
  selectedCategory: null,
  selectedItem: null,
  filters: {},

  // Actions
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedItem: (item) => set({ selectedItem: item }),
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  resetFilters: () => set({ filters: {}, selectedCategory: null }),
}));





