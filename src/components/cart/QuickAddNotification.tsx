"use client";
import React, { useState, useEffect, useRef } from "react";
import { useCartContext } from "@/contexts/CartContext";

interface QuickAddNotificationProps {
  className?: string;
}

const QuickAddNotification: React.FC<QuickAddNotificationProps> = ({
  className = "",
}) => {
  const { items } = useCartContext();
  const [lastAddedItem, setLastAddedItem] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const prevItemCountRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialLoadRef = useRef(true);

  useEffect(() => {
    const currentItemCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Skip the first render to avoid showing notification on page load
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      prevItemCountRef.current = currentItemCount;
      return;
    }

    // Only show notification if item count increased
    if (currentItemCount > prevItemCountRef.current) {
      // Find the most recently added item
      const newItem = items[items.length - 1];
      setLastAddedItem(newItem?.product.name || "Sản phẩm");
      setShowNotification(true);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Hide notification after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setShowNotification(false);
        setLastAddedItem(null);
      }, 3000);
    }

    // Update the ref with current count
    prevItemCountRef.current = currentItemCount;
  }, [items]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!showNotification || !lastAddedItem) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
        showNotification
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        <svg
          className="w-5 h-5"
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
        <div>
          <p className="font-medium text-sm">Đã thêm vào giỏ hàng!</p>
          <p className="text-xs opacity-90 line-clamp-1">{lastAddedItem}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickAddNotification;
