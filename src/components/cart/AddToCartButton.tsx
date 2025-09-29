"use client";
import React, { useState } from "react";
import Button from "@/components/core/Button";
import { useCartContext } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  variant?: CartItem["selectedVariant"];
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
  text?: string;
  onSuccess?: () => void;
  disabled?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  quantity = 1,
  variant,
  size = "md",
  className = "",
  showIcon = true,
  text = "Thêm vào giỏ",
  onSuccess,
  disabled = false,
}) => {
  const { addItem, items } = useCartContext();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Check if this exact product+variant combo is already in cart
  const existingItem = items.find(
    (item) =>
      item.product.id === product.id &&
      JSON.stringify(item.selectedVariant) === JSON.stringify(variant)
  );

  const handleAddToCart = async () => {
    if (!product.inStock || disabled) return;

    setIsAdding(true);

    try {
      // Simulate a small delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      addItem(product, quantity, variant);

      // Show success state
      setJustAdded(true);
      onSuccess?.();

      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  // Different states
  if (!product.inStock) {
    return (
      <Button
        size={size}
        disabled
        className={`bg-gray-300 text-gray-500 cursor-not-allowed ${className}`}
      >
        {showIcon && (
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        Hết hàng
      </Button>
    );
  }

  if (justAdded) {
    return (
      <Button
        size={size}
        className={`bg-green-600 hover:bg-green-700 text-white ${className}`}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        Đã thêm!
      </Button>
    );
  }

  return (
    <Button
      size={size}
      onClick={handleAddToCart}
      disabled={isAdding || disabled}
      className={`bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 ${className}`}
    >
      {isAdding ? (
        <>
          <svg
            className="animate-spin w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Đang thêm...
        </>
      ) : (
        <>
          {showIcon && (
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6 0L18 18H6"
              />
            </svg>
          )}
          {existingItem ? `${text} (${existingItem.quantity})` : text}
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
