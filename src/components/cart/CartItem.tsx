"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/core/Button";
import { CartItem as CartItemType } from "@/types/cart";
import { useCartContext } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartContext();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;

    setIsUpdating(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate API call
    updateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const mainImage =
    item.product.images.find((img) => img.isMain) || item.product.images[0];
  const itemTotal =
    (item.product.originalPrice || item.product.price) * item.quantity;

  return (
    <div className="flex items-center gap-4 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Link href={`/products/${item.product.id}`}>
          <div className="relative w-26 h-26 rounded-lg overflow-hidden bg-white border border-gray-200">
            {mainImage ? (
              <Image
                src={mainImage.url}
                alt={mainImage.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link href={`/products/${item.product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
            {item.product.name}
          </h3>
        </Link>

        {/* Variant Info */}
        {item.selectedVariant && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {item.selectedVariant.color && (
              <span className="mr-3">Màu: {item.selectedVariant.color}</span>
            )}
            {item.selectedVariant.size && (
              <span className="mr-3">Size: {item.selectedVariant.size}</span>
            )}
            {item.selectedVariant.storage && (
              <span>Bộ nhớ: {item.selectedVariant.storage}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex flex-wrap items-end gap-2 ">
          <span className="text-base font-bold text-red-600">
            {formatPrice(item.product.originalPrice || item.product.price)}
          </span>
          {item.product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(item.product.price)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="">
          {item.product.inStock ? (
            <span className="text-sm text-green-600 dark:text-green-400">
              Còn hàng ({item.product.stockQuantity} sản phẩm)
            </span>
          ) : (
            <span className="text-sm text-red-600 dark:text-red-400">
              Hết hàng
            </span>
          )}
        </div>
      </div>

      {/* Quantity Controls */}

      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1 || isUpdating}
          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          −
        </button>
        <div className="px-4 py-2 bg-white dark:bg-gray-800 min-w-[60px] text-center font-medium">
          {isUpdating ? "..." : item.quantity}
        </div>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={isUpdating || item.quantity >= item.product.stockQuantity}
          className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          +
        </button>
      </div>

      {/* Remove Button */}

      {/* Item Total */}
      <div className="text-right flex-shrink-0">
        <div className="text-base font-bold text-gray-900 dark:text-white">
          {formatPrice(itemTotal)}
        </div>
      </div>
      <Button
        variant="ghost"
        onClick={handleRemove}
        className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CartItem;
