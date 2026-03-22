// API Response Types
export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number | null;
  children: Category[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  image_url: string;
  is_active: boolean;
  category: number;
  category_name: string;
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductListItem {
  id: number;
  name: string;
  price: number;
  stock_quantity: number;
  image_url: string;
  is_active: boolean;
  category_name: string;
}

// API Response wrapper types
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}