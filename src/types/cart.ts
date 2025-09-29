import { Product } from "./product";

// Cart Item Type
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedVariant?: {
    color?: string;
    size?: string;
    storage?: string;
  };
  addedAt: string;
}

// Cart State Type
export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  selectedItems: string[];
  selectedTotalPrice: number;
}

// Cart Actions Type
export interface CartActions {
  addItem: (
    product: Product,
    quantity?: number,
    variant?: CartItem["selectedVariant"]
  ) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  selectItem: (itemId: string) => void;
  selectAllItems: () => void;
  getSelectedTotalPrice: () => number;
}

// Cart Context Type
export interface CartContextType extends CartState, CartActions {}

// Cart Summary Types
export interface CartSummaryData {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}

// Shipping Option Type
export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

// Coupon Type
export interface Coupon {
  id: string;
  code: string;
  discount: number;
  discountType: "percentage" | "fixed";
  minOrderAmount?: number;
  maxDiscountAmount?: number;
  expiresAt: string;
}
