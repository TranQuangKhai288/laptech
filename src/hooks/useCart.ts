"use client";
import { useState, useEffect, useCallback } from "react";
import {
  CartItem,
  CartState,
  CartActions,
  CartContextType,
} from "@/types/cart";
import { Product } from "@/types/product";
import { useLocalStorage } from "./useLocalStorage";

const CART_STORAGE_KEY = "laptech-cart";

export const useCart = (): CartContextType => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    CART_STORAGE_KEY,
    {
      defaultValue: [],
    }
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Auto-select all items when cart items change
  useEffect(() => {
    if (cartItems.length > 0) {
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  }, [cartItems.length]);

  // Calculate totals
  const getTotalItems = useCallback((): number => {
    return cartItems.length; // Count unique items only
  }, [cartItems]);

  const getTotalPrice = useCallback((): number => {
    return cartItems.reduce((total, item) => {
      const price = item.product.originalPrice || item.product.price;
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  // Calculate selected items total price
  const getSelectedTotalPrice = useCallback((): number => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => {
        const price = item.product.originalPrice || item.product.price;
        return total + price * item.quantity;
      }, 0);
  }, [cartItems, selectedItems]);

  // Add item to cart
  const addItem = useCallback(
    (
      product: Product,
      quantity: number = 1,
      variant?: CartItem["selectedVariant"]
    ) => {
      setCartItems((prevItems) => {
        // Check if item with same product and variant already exists
        const existingItemIndex = prevItems.findIndex(
          (item) =>
            item.product.id === product.id &&
            JSON.stringify(item.selectedVariant) === JSON.stringify(variant)
        );

        if (existingItemIndex > -1) {
          // Update quantity of existing item
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity,
          };
          return updatedItems;
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `${product.id}-${
              typeof window !== "undefined" ? Date.now() : "server"
            }`,
            product,
            quantity,
            selectedVariant: variant,
            addedAt: new Date().toISOString(),
          };
          return [...prevItems, newItem];
        }
      });
    },
    [setCartItems]
  );

  // Remove item from cart
  const removeItem = useCallback(
    (itemId: string) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    },
    [setCartItems]
  );

  // Update item quantity
  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(itemId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    },
    [setCartItems, removeItem]
  );

  // Clear all items from cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  // Toggle cart drawer
  const toggleCart = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Select/deselect item
  const selectItem = useCallback((itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  // Select all items
  const selectAllItems = useCallback(() => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  }, [selectedItems.length, cartItems]);

  return {
    items: cartItems,
    totalItems: getTotalItems(),
    totalPrice: getTotalPrice(),
    isOpen,
    selectedItems,
    selectedTotalPrice: getSelectedTotalPrice(),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    getTotalItems,
    getTotalPrice,
    selectItem,
    selectAllItems,
    getSelectedTotalPrice,
  };
};
