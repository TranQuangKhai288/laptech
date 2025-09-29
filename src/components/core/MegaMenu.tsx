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

  const handleOverlayClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Ngăn scroll body khi menu mở
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  return (
    <div className="relative h-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer h-full flex items-center"
      >
        {trigger}
      </div>

      {/* Backdrop overlay - che toàn bộ màn hình, làm mờ và có thể click để đóng */}
      {isVisible && (
        <div
          className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOverlayClick}
          style={{
            top: "4rem", // Bắt đầu từ dưới header
          }}
        />
      )}

      {/* Mega Menu Content */}
      <div
        className={`fixed left-0 right-0 z-50 border-t bg-[var(--background)]/70 backdrop-blur-md border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-400 ease-out ${className}`}
        style={{
          top: "4rem", // Header height
          height: isVisible ? "100vh" : "0vh",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: isVisible ? "all" : "none",
        }}
      >
        <div
          className="container flex min-w-screen shadow-2xl bg-white dark:bg-gray-800 mx-auto items-center justify-center"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div className="px-4 py-8  h-[60%] w-[80%] max-w-[100rem] bg-white dark:bg-gray-800 overflow-y-auto">
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
    </div>
  );
};

export default MegaMenu;
