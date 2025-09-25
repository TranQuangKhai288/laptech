// Common API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ApiError[];
  meta?: ResponseMeta;
}

export interface ApiError {
  field?: string;
  code: string;
  message: string;
}

export interface ResponseMeta {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  timestamp: string;
  version: string;
}

// Pagination Types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form Types
export interface FormState<T> {
  values: T;
  errors: Record<keyof T, string>;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface SelectOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
  icon?: string;
}

// UI Component Types
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Theme Types
export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    sans: string[];
    serif: string[];
    mono: string[];
    display: string[];
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type WithId<T> = T & { id: string };
export type WithTimestamps<T> = T & { createdAt: string; updatedAt: string };
export type WithoutId<T> = Omit<T, "id">;
export type WithoutTimestamps<T> = Omit<T, "createdAt" | "updatedAt">;

// Event Types
export interface AppEvent<T = any> {
  type: string;
  payload: T;
  timestamp: string;
  source: string;
}

// File Upload Types
export interface FileUpload {
  file: File;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
  error?: string;
  url?: string;
}

export interface ImageUpload extends FileUpload {
  preview: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

// Search and Filter Types
export interface SearchConfig {
  placeholder: string;
  minLength: number;
  debounceMs: number;
  showSuggestions: boolean;
  maxSuggestions: number;
}

export interface FilterOption {
  key: string;
  label: string;
  type: "text" | "number" | "select" | "multiselect" | "range" | "boolean";
  options?: SelectOption[];
  min?: number;
  max?: number;
  step?: number;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
}

export interface PageView {
  path: string;
  title?: string;
  referrer?: string;
  timestamp: string;
  userId?: string;
  sessionId: string;
}

// Error Types
export interface AppError extends Error {
  code: string;
  statusCode?: number;
  context?: Record<string, any>;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Loading States
export type LoadingState = "idle" | "loading" | "success" | "error";

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetch: string | null;
}

// Device and Browser Types
export interface DeviceInfo {
  type: "mobile" | "tablet" | "desktop";
  os: string;
  browser: string;
  screenSize: {
    width: number;
    height: number;
  };
  isTouchDevice: boolean;
}

// Geolocation Types
export interface GeolocationPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: string;
}

export interface LocationInfo {
  position: GeolocationPosition;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
}
