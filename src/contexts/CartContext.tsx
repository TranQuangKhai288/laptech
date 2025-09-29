"use client";
import React, { createContext, useContext } from "react";
import { CartContextType } from "@/types/cart";
import { useCart as useCartHook } from "@/hooks/useCart";

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cartData = useCartHook();

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
