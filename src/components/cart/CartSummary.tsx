"use client";
import React, { useState } from "react";
import Button from "@/components/core/Button";
import Input from "@/components/core/Input";
import { useCartContext } from "@/contexts/CartContext";
import { CartSummaryData, ShippingOption, Coupon } from "@/types/cart";

const CartSummary: React.FC = () => {
  const { items, totalPrice, selectedItems, selectedTotalPrice } =
    useCartContext();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [selectedShipping, setSelectedShipping] =
    useState<ShippingOption | null>(null);
  const [isCouponLoading, setIsCouponLoading] = useState(false);

  // Mock shipping options
  const shippingOptions: ShippingOption[] = [
    {
      id: "standard",
      name: "Giao hàng tiêu chuẩn",
      description: "Giao trong 3-5 ngày làm việc",
      price: 30000,
      estimatedDays: "3-5 ngày",
    },
    {
      id: "express",
      name: "Giao hàng nhanh",
      description: "Giao trong 1-2 ngày làm việc",
      price: 50000,
      estimatedDays: "1-2 ngày",
    },
    {
      id: "same-day",
      name: "Giao hàng trong ngày",
      description: "Giao trong ngày (Chỉ HCM & HN)",
      price: 100000,
      estimatedDays: "Trong ngày",
    },
  ];

  // Mock apply coupon
  const applyCoupon = async () => {
    if (!couponCode.trim()) return;

    setIsCouponLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock coupon validation
    const mockCoupons: Record<string, Coupon> = {
      SAVE10: {
        id: "1",
        code: "SAVE10",
        discount: 10,
        discountType: "percentage",
        minOrderAmount: 500000,
        expiresAt: "2025-12-31",
      },
      FREESHIP: {
        id: "2",
        code: "FREESHIP",
        discount: 50000,
        discountType: "fixed",
        minOrderAmount: 300000,
        expiresAt: "2025-12-31",
      },
    };

    const coupon = mockCoupons[couponCode.toUpperCase()];
    if (coupon && totalPrice >= (coupon.minOrderAmount || 0)) {
      setAppliedCoupon(coupon);
    } else {
      alert("Mã giảm giá không hợp lệ hoặc không đủ điều kiện");
    }

    setIsCouponLoading(false);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
  };

  // Calculate summary
  const calculateSummary = (): CartSummaryData => {
    const subtotal = selectedTotalPrice; // Use selected items total instead of all items
    const shipping = selectedShipping?.price || 0;

    let discount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.discountType === "percentage") {
        discount = (subtotal * appliedCoupon.discount) / 100;
        if (appliedCoupon.maxDiscountAmount) {
          discount = Math.min(discount, appliedCoupon.maxDiscountAmount);
        }
      } else {
        discount = appliedCoupon.discount;
      }
    }

    // const tax = Math.round((subtotal - discount) * 0.1); // 10% VAT
    const total = subtotal + shipping - discount;

    return {
      subtotal,
      shipping,
      tax: 0, // tax,
      discount,
      total: Math.max(0, total),
    };
  };

  const summary = calculateSummary();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold mb-6">Tổng kết đơn hàng</h2>

      {/* Shipping Options */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Phương thức giao hàng</h3>
        <div className="space-y-2">
          {shippingOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={selectedShipping?.id === option.id}
                onChange={() => setSelectedShipping(option)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{option.name}</span>
                  <span className="text-sm font-medium text-blue-600">
                    {formatPrice(option.price)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Coupon Code */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Mã giảm giá</h3>
        {appliedCoupon ? (
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div>
              <span className="text-sm font-medium text-green-800 dark:text-green-400">
                {appliedCoupon.code}
              </span>
              <p className="text-xs text-green-600 dark:text-green-500">
                Giảm{" "}
                {appliedCoupon.discountType === "percentage"
                  ? `${appliedCoupon.discount}%`
                  : formatPrice(appliedCoupon.discount)}
              </p>
            </div>
            <button
              onClick={removeCoupon}
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Input
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Nhập mã giảm giá"
              className="flex-1"
            />
            <Button
              onClick={applyCoupon}
              disabled={!couponCode.trim() || isCouponLoading}
              className="px-4"
            >
              {isCouponLoading ? "..." : "Áp dụng"}
            </Button>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span>Tạm tính ({selectedItems.length} sản phẩm)</span>
          <span>{formatPrice(summary.subtotal)}</span>
        </div>

        {summary.shipping > 0 && (
          <div className="flex justify-between text-sm">
            <span>Phí vận chuyển</span>
            <span>{formatPrice(summary.shipping)}</span>
          </div>
        )}

        {summary.discount > 0 && (
          <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
            <span>Giảm giá</span>
            <span>-{formatPrice(summary.discount)}</span>
          </div>
        )}

        {/* <div className="flex justify-between text-sm">
          <span>Thuế VAT (10%)</span>
          <span>{formatPrice(summary.tax)}</span>
        </div> */}

        <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span>Tổng cộng</span>
            <span className="text-red-600">{formatPrice(summary.total)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold disabled:bg-gray-300 disabled:text-gray-500"
        disabled={!selectedShipping || selectedItems.length === 0}
      >
        {selectedItems.length === 0
          ? "Chọn sản phẩm để thanh toán"
          : !selectedShipping
          ? "Chọn phương thức giao hàng"
          : `Thanh toán (${selectedItems.length} sản phẩm)`}
      </Button>

      {/* Payment Methods Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 mb-2">Chúng tôi chấp nhận</p>
        <div className="flex justify-center gap-2">
          <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Visa
          </div>
          <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Mastercard
          </div>
          <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Momo
          </div>
          <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            COD
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
