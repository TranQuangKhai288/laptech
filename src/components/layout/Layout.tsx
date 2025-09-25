import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Header />
      <main className="flex-1 container-custom">{children}</main>
      <Footer />
    </div>
  );
};
