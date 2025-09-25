// Base API URL - should be moved to environment variables
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  REFRESH_TOKEN: "/auth/refresh",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  VERIFY_EMAIL: "/auth/verify-email",

  // User
  USER_PROFILE: "/user/profile",
  UPDATE_PROFILE: "/user/profile",
  CHANGE_PASSWORD: "/user/change-password",
  USER_ADDRESSES: "/user/addresses",
  USER_ORDERS: "/user/orders",
  USER_REVIEWS: "/user/reviews",

  // Products
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id: string) => `/products/${id}`,
  PRODUCT_BY_SLUG: (slug: string) => `/products/slug/${slug}`,
  PRODUCT_REVIEWS: (id: string) => `/products/${id}/reviews`,
  PRODUCT_SEARCH: "/products/search",
  FEATURED_PRODUCTS: "/products/featured",
  RELATED_PRODUCTS: (id: string) => `/products/${id}/related`,

  // Categories
  CATEGORIES: "/categories",
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
  CATEGORY_BY_SLUG: (slug: string) => `/categories/slug/${slug}`,
  CATEGORY_PRODUCTS: (id: string) => `/categories/${id}/products`,

  // Brands
  BRANDS: "/brands",
  BRAND_BY_ID: (id: string) => `/brands/${id}`,
  BRAND_BY_SLUG: (slug: string) => `/brands/slug/${slug}`,
  BRAND_PRODUCTS: (id: string) => `/brands/${id}/products`,

  // Cart
  CART: "/cart",
  ADD_TO_CART: "/cart/add",
  UPDATE_CART_ITEM: "/cart/update",
  REMOVE_FROM_CART: "/cart/remove",
  CLEAR_CART: "/cart/clear",

  // Orders
  ORDERS: "/orders",
  ORDER_BY_ID: (id: string) => `/orders/${id}`,
  CREATE_ORDER: "/orders",
  CANCEL_ORDER: (id: string) => `/orders/${id}/cancel`,
  ORDER_TRACKING: (id: string) => `/orders/${id}/tracking`,

  // Reviews
  REVIEWS: "/reviews",
  CREATE_REVIEW: "/reviews",
  UPDATE_REVIEW: (id: string) => `/reviews/${id}`,
  DELETE_REVIEW: (id: string) => `/reviews/${id}`,

  // Coupons
  VALIDATE_COUPON: "/coupons/validate",
  APPLY_COUPON: "/coupons/apply",

  // Search
  SEARCH_SUGGESTIONS: "/search/suggestions",
  SEARCH_FILTERS: "/search/filters",

  // File uploads
  UPLOAD_IMAGE: "/upload/image",
  UPLOAD_IMAGES: "/upload/images",
} as const;

// HTTP client class
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Get auth token from localStorage
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `HTTP error! status: ${response.status}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      }

      return response.text() as T;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Network error occurred");
    }
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseURL}${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return this.request<T>(url.pathname + url.search);
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
    });
  }

  // Upload file with progress
  async uploadFile<T>(
    endpoint: string,
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append("file", file);

      // Get auth token
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (token) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }

      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable && onProgress) {
          const progress = (event.loaded / event.total) * 100;
          onProgress(progress);
        }
      });

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch {
            resolve(xhr.responseText as T);
          }
        } else {
          reject(new Error(`Upload failed with status: ${xhr.status}`));
        }
      });

      xhr.addEventListener("error", () => {
        reject(new Error("Upload failed"));
      });

      xhr.open("POST", `${this.baseURL}${endpoint}`);
      xhr.send(formData);
    });
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Convenience methods for common API calls
export const api = {
  // Auth
  login: (credentials: { email: string; password: string }) =>
    apiClient.post(API_ENDPOINTS.LOGIN, credentials),

  register: (userData: { email: string; password: string; name: string }) =>
    apiClient.post(API_ENDPOINTS.REGISTER, userData),

  refreshToken: (refreshToken: string) =>
    apiClient.post(API_ENDPOINTS.REFRESH_TOKEN, { refreshToken }),

  // Products
  getProducts: (params?: Record<string, any>) =>
    apiClient.get(API_ENDPOINTS.PRODUCTS, params),

  getProduct: (id: string) => apiClient.get(API_ENDPOINTS.PRODUCT_BY_ID(id)),

  getProductBySlug: (slug: string) =>
    apiClient.get(API_ENDPOINTS.PRODUCT_BY_SLUG(slug)),

  searchProducts: (query: string, filters?: Record<string, any>) =>
    apiClient.get(API_ENDPOINTS.PRODUCT_SEARCH, { query, ...filters }),

  // Cart
  getCart: () => apiClient.get(API_ENDPOINTS.CART),

  addToCart: (productId: string, quantity: number) =>
    apiClient.post(API_ENDPOINTS.ADD_TO_CART, { productId, quantity }),

  updateCartItem: (itemId: string, quantity: number) =>
    apiClient.patch(API_ENDPOINTS.UPDATE_CART_ITEM, { itemId, quantity }),

  removeFromCart: (itemId: string) =>
    apiClient.delete(`${API_ENDPOINTS.REMOVE_FROM_CART}/${itemId}`),

  // Orders
  getOrders: (params?: Record<string, any>) =>
    apiClient.get(API_ENDPOINTS.ORDERS, params),

  getOrder: (id: string) => apiClient.get(API_ENDPOINTS.ORDER_BY_ID(id)),

  createOrder: (orderData: any) =>
    apiClient.post(API_ENDPOINTS.CREATE_ORDER, orderData),

  // User
  getProfile: () => apiClient.get(API_ENDPOINTS.USER_PROFILE),

  updateProfile: (profileData: any) =>
    apiClient.put(API_ENDPOINTS.UPDATE_PROFILE, profileData),

  // File uploads
  uploadImage: (file: File, onProgress?: (progress: number) => void) =>
    apiClient.uploadFile(API_ENDPOINTS.UPLOAD_IMAGE, file, onProgress),
};
