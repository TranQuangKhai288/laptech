"use client";
import React, { useState, useRef, useEffect } from "react";

interface MegaMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  trigger,
  children,
  delay = 500, // Giảm xuống 0.5s
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer h-full flex items-center"
      >
        {trigger}
      </div>

      {/* Backdrop overlay - chỉ che phần dưới header */}
      {isVisible && (
        <div
          className="fixed inset-x-0 z-40 bg-black/10 backdrop-blur-sm"
          style={{
            top: "4rem", // Bắt đầu từ dưới header
            bottom: 0,
          }}
        />
      )}

      {/* Mega Menu Content */}
      <div
        className={`fixed left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-2xl border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-400 ease-out ${className}`}
        style={{
          top: "4rem", // Header height
          height: isVisible ? "40vh" : "0vh",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-10px)",
        }}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <div
            className={`transition-all duration-300 ${
              isVisible
                ? "opacity-100 transform translate-y-0 delay-150"
                : "opacity-0 transform translate-y-2"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
