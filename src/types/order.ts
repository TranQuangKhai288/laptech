import { Product } from "./product";
import { User, Address } from "./user";

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  product: Pick<
    Product,
    | "id"
    | "name"
    | "slug"
    | "price"
    | "originalPrice"
    | "images"
    | "inStock"
    | "stockQuantity"
  >;
  quantity: number;
  price: number; // Price at the time of adding to cart
  originalPrice?: number;
  discount?: number;
  addedAt: string;
  updatedAt: string;
}

export interface Cart {
  id: string;
  userId?: string; // undefined for guest cart
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string; // For guest carts
}

export interface AddToCartData {
  productId: string;
  quantity: number;
}

export interface UpdateCartItemData {
  itemId: string;
  quantity: number;
}

// Order Types
export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  user: Pick<User, "id" | "name" | "email" | "phone">;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingStatus: ShippingStatus;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  payment: PaymentInfo;
  shipping: ShippingInfo;
  pricing: OrderPricing;
  timeline: OrderTimeline[];
  notes?: string;
  cancellationReason?: string;
  refundInfo?: RefundInfo;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Pick<Product, "id" | "name" | "slug" | "images" | "specifications">;
  quantity: number;
  price: number;
  originalPrice: number;
  discount: number;
  total: number;
}

export interface OrderPricing {
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
}

export interface PaymentInfo {
  method: PaymentMethod;
  provider: string;
  transactionId?: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  paidAt?: string;
  refundedAt?: string;
  refundAmount?: number;
}

export interface ShippingInfo {
  method: ShippingMethod;
  provider: string;
  trackingNumber?: string;
  cost: number;
  estimatedDays: number;
  estimatedDelivery: string;
  actualDelivery?: string;
}

export interface OrderTimeline {
  id: string;
  status: OrderStatus | PaymentStatus | ShippingStatus;
  message: string;
  timestamp: string;
  actor?: string; // User ID or system
}

export interface RefundInfo {
  id: string;
  amount: number;
  reason: string;
  status: RefundStatus;
  requestedAt: string;
  processedAt?: string;
  completedAt?: string;
}

// Enums
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned"
  | "refunded";

export type PaymentStatus =
  | "pending"
  | "processing"
  | "paid"
  | "failed"
  | "cancelled"
  | "refunded"
  | "partially_refunded";

export type ShippingStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "failed"
  | "returned";

export type PaymentMethod =
  | "credit_card"
  | "debit_card"
  | "bank_transfer"
  | "e_wallet"
  | "cash_on_delivery"
  | "installment";

export type ShippingMethod = "standard" | "express" | "overnight" | "pickup";

export type RefundStatus =
  | "requested"
  | "processing"
  | "approved"
  | "rejected"
  | "completed";

// Checkout Types
export interface CheckoutData {
  items: CartItem[];
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  shippingMethod: ShippingMethod;
  couponCode?: string;
  notes?: string;
}

export interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  estimatedDelivery: string;
}

// Coupon Types
export interface Coupon {
  id: string;
  code: string;
  type: "percentage" | "fixed" | "free_shipping";
  value: number;
  minimumAmount?: number;
  maximumDiscount?: number;
  description: string;
  validFrom: string;
  validUntil: string;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
  applicableProducts?: string[];
  applicableCategories?: string[];
}

export interface ApplyCouponData {
  code: string;
  cartTotal: number;
}
