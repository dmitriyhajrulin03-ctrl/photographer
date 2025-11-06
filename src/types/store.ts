// Types for Zustand store

export type UIState = {
  isMobileMenuOpen: boolean;
  isModalOpen: boolean;
  modalContent: React.ReactNode | null;
};

export type UIActions = {
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

export type UIStore = UIState & UIActions;

export type PortfolioState = {
  selectedCategory: string | null;
  selectedItem: string | null;
  filters: Record<string, boolean>;
};

export type PortfolioActions = {
  setSelectedCategory: (category: string | null) => void;
  setSelectedItem: (item: string | null) => void;
  setFilter: (key: string, value: boolean) => void;
  resetFilters: () => void;
};

export type PortfolioStore = PortfolioState & PortfolioActions;



