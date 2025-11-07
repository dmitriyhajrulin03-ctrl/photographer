// Types for API responses and requests

export type ApiResponse<T> = {
  data: T;
  message?: string;
  error?: string;
};

export type ApiError = {
  message: string;
  code?: string;
  status?: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};





