// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: "male" | "female" | "other";
  addresses: Address[];
  preferences: UserPreferences;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface Address {
  id: string;
  userId: string;
  type: "home" | "work" | "other";
  isDefault: boolean;
  recipientName: string;
  recipientPhone: string;
  street: string;
  ward: string;
  district: string;
  city: string;
  postalCode?: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  language: string;
  currency: string;
  theme: "light" | "dark" | "system";
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
}

export interface NotificationPreferences {
  email: {
    orderUpdates: boolean;
    promotions: boolean;
    newsletter: boolean;
    productRecommendations: boolean;
  };
  push: {
    orderUpdates: boolean;
    promotions: boolean;
    priceAlerts: boolean;
  };
  sms: {
    orderUpdates: boolean;
    securityAlerts: boolean;
  };
}

export interface PrivacySettings {
  profileVisibility: "public" | "private";
  showPurchaseHistory: boolean;
  allowDataCollection: boolean;
  allowPersonalization: boolean;
}

export type UserRole = "customer" | "admin" | "moderator" | "staff";
export type UserStatus = "active" | "inactive" | "suspended" | "banned";

// Authentication Types
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone?: string;
  acceptTerms: boolean;
  subscribeNewsletter?: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  isEmailVerified: boolean;
  permissions: string[];
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthResponse {
  user: AuthUser;
  tokens: AuthTokens;
}

// Password Reset Types
export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Profile Update Types
export interface UpdateProfileData {
  name?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: "male" | "female" | "other";
  avatar?: File | string;
}

export interface UpdatePreferencesData {
  language?: string;
  currency?: string;
  theme?: "light" | "dark" | "system";
  notifications?: Partial<NotificationPreferences>;
  privacy?: Partial<PrivacySettings>;
}
