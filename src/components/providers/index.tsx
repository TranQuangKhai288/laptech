"use client";

import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { CartProvider } from "@/contexts/CartContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
};
