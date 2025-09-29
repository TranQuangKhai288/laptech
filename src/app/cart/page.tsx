"use client";
import React from "react";
import { MainLayout } from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Button from "@/components/core/Button";
import Link from "next/link";
import { useCartContext } from "@/contexts/CartContext";

const CartPage: React.FC = () => {
  const {
    items,
    totalItems,
    clearCart,
    selectedItems,
    selectedTotalPrice,
    selectItem,
    selectAllItems,
  } = useCartContext();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>

          {/* Empty Cart State */}
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-400">
              Giỏ hàng trống
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-8">
              Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá và thêm
              những sản phẩm yêu thích!
            </p>
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto w-full px-4 py-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Giỏ hàng ({totalItems} sản phẩm)
          </h1>
          <Button
            variant="ghost"
            onClick={clearCart}
            className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            Xóa tất cả
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Sản phẩm trong giỏ</h2>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === items.length}
                      ref={(input) => {
                        if (input) {
                          input.indeterminate =
                            selectedItems.length > 0 &&
                            selectedItems.length < items.length;
                        }
                      }}
                      onChange={selectAllItems}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium">
                      Chọn tất cả ({selectedItems.length}/{items.length})
                    </span>
                  </label>
                </div>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4  items-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => selectItem(item.id)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <CartItem item={item} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full lg:w-auto cursor-pointer"
                >
                  ← Tiếp tục mua sắm
                </Button>
              </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
