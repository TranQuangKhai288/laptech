"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Input from "../core/Input";
import { SearchIcon } from "../core/icon/search";
import { CartIcon } from "../core/icon/cart";
import { UserIcon } from "../core/icon/user";

const navLinks = [
  { href: "/products", label: "Sản phẩm" },
  { href: "/categories", label: "Danh mục" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    // tìm element active
    const activeLink = document.querySelector<HTMLAnchorElement>(
      `nav a[href^="${pathname}"]`
    );
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--background)]/70 shadow-md backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-sm ring-1 ring-primary/20">
                <span className="text-lg font-bold text-primary-foreground">
                  L
                </span>
              </div>
              <span className="text-xl text-primary-foreground font-bold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text">
                LapTech
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8 relative">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-1 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Underline Indicator */}
              <span
                className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative flex items-center">
              {/* Search input container */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  showSearch
                    ? "w-96 opacity-100 scale-100 ml-2"
                    : "w-0 opacity-0 scale-95 ml-0 pointer-events-none"
                }`}
              >
                <Input
                  leftIcon={<SearchIcon className="h-6 w-6" />}
                  placeholder="Tìm kiếm..."
                  autoFocus={showSearch}
                  rightIcon={
                    <div
                      onClick={() => setShowSearch(false)}
                      className="hover:text-foreground"
                    >
                      ✕
                    </div>
                  }
                />
              </div>

              {/* Search icon div */}
              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`ml-2 text-muted-foreground hover:text-foreground transition-colors ${
                  showSearch ? "hidden" : "inline-flex"
                }`}
              >
                <SearchIcon className="h-6 w-6" />
              </div>
            </div>

            {/* Cart */}
            <div className="relative text-muted-foreground hover:text-foreground transition-colors">
              <CartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-xs font-medium text-primary-foreground flex items-center justify-center shadow ring-1 ring-primary/20">
                2
              </span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User */}
            <div className="text-muted-foreground hover:text-foreground transition-colors">
              <UserIcon className="h-6 w-6" />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* ... các icon khác giữ nguyên */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
