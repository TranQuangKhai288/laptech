"use client";
import React, { useState } from "react";

interface SimpleMegaMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const SimpleMegaMenu: React.FC<SimpleMegaMenuProps> = ({
  trigger,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => {
          console.log("Mouse enter trigger");
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          console.log("Mouse leave trigger");
          setTimeout(() => setIsVisible(false), 200);
        }}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {/* Debug: Always show menu for testing */}
      {isVisible && (
        <div className="fixed inset-x-0 top-16 z-50 h-64 bg-red-500 text-white p-4">
          <p>DEBUG: Menu is visible!</p>
          {children}
        </div>
      )}
    </div>
  );
};

export default SimpleMegaMenu;
