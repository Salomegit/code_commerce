import axios from "axios";
import { Category, PaginatedResponse, Product, ProductListItem } from "./productType"
import { env } from "@/utils/env";

const BASE_URL = `${env.API_BASE_URL}${env.API_VERSION}`;

export const PRODUCT_URLS = {
  LIST: `${BASE_URL}/products/`,
  DETAIL: (id: string) => `${BASE_URL}/products/${id}/`,
  FEATURED: `${BASE_URL}/products/featured/`,
  UPDATE_STOCK: (id: string) => `${BASE_URL}/products/${id}/update_stock/`,
};

export const CATEGORY_URLS = {
  LIST: `${BASE_URL}/categories/`,
  DETAIL: (slug: string) => `${BASE_URL}/categories/${slug}/`,
};


export const fetchProducts = async (filters?: {
  category?: string;
  min_price?: number;
  max_price?: number;
  in_stock?: boolean;
  search?: string;
  ordering?: string;
}): Promise<PaginatedResponse<ProductListItem>> => {
  try {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, String(value));
        }
      });
    }

    const response = await axios.get<PaginatedResponse<ProductListItem>>(
      `${PRODUCT_URLS.LIST}?${params.toString()}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch products error:", error);
    throw error;
  }
};

export const fetchProductDetail = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get<Product>(
      PRODUCT_URLS.DETAIL(productId),
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch product detail error:", error);
    throw error;
  }
};


export const fetchFeaturedProducts = async (): Promise<ProductListItem[]> => {
  try {
    const response = await axios.get<ProductListItem[]>(
      PRODUCT_URLS.FEATURED,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch featured products error:", error);
    throw error;
  }
};


// Category API calls
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<PaginatedResponse<Category>>(
      CATEGORY_URLS.LIST,
      { withCredentials: true }
    );
    return response.data.results;
  } catch (error) {
    console.error("Fetch categories error:", error);
    throw error;
  }
};

export const fetchCategoryDetail = async (slug: string): Promise<Category> => {
  try {
    const response = await axios.get<Category>(
      CATEGORY_URLS.DETAIL(slug),
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch category detail error:", error);
    throw error;
  }
};
