export type PortfolioCategory = "wedding" | "portrait" | "nature" | "event" | "all";

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  category: PortfolioCategory;
  description?: string;
  date?: string;
  location?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

