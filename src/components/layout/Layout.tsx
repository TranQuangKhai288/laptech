import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuickAddNotification from "../cart/QuickAddNotification";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full items-center justify-center py-4 sm:py-0">
        {children}
      </main>
      <Footer />
      <QuickAddNotification />
    </div>
  );
};
