"use client";

import { create } from "zustand";
import type { UIStore } from "@/types/store";

export const useUIStore = create<UIStore>((set) => ({
  // State
  isMobileMenuOpen: false,
  isModalOpen: false,
  modalContent: null,

  // Actions
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: null }),
}));





