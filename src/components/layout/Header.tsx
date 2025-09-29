"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Input from "../core/Input";
import { SearchIcon } from "../icon/search";
import { CartIcon } from "../icon/cart";
import { UserIcon } from "../icon/user";
import MegaMenu from "../core/MegaMenu";
import SimpleMegaMenu from "../core/SimpleMegaMenu";
import CategoryMegaMenu from "./CategoryMegaMenu";
import { useCartContext } from "@/contexts/CartContext";

const navLinks = [
  { href: "/products", label: "Sản phẩm" },
  { href: "/categories", label: "Danh mục" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

type Underline = { left: number; width: number; opacity: number };

const Header: React.FC = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const { totalItems } = useCartContext();
  const [mounted, setMounted] = useState(false);

  const [underline, setUnderline] = useState<Underline>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Cập nhật vị trí underline theo đường dẫn hiện tại
  const updateActiveUnderline = () => {
    const container = navRef.current;
    if (!container) return;

    const anchors = Array.from(
      container.querySelectorAll("a")
    ) as HTMLAnchorElement[];

    const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

    // Tìm anchor phù hợp (ví dụ /products/123 => khớp /products)
    let active = anchors.find((a) => {
      const href = a.getAttribute("href") || "";
      if (!href) return false;
      if (href === "/") return path === "/";
      return (
        path === href || path.startsWith(href + "/") || path.startsWith(href)
      );
    });

    // fallback: exact match
    if (!active) {
      active = anchors.find((a) => a.getAttribute("href") === path);
    }

    if (active) {
      const rect = active.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderline({
        left: rect.left - containerRect.left + container.scrollLeft,
        width: rect.width,
        opacity: 1,
      });
    } else {
      // ẩn underline nếu ko có link active
      setUnderline((p) => ({ ...p, opacity: 0, width: 0 }));
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    updateActiveUnderline();

    // ResizeObserver để bắt khi nav thay đổi kích thước
    const ro = new ResizeObserver(() => {
      updateActiveUnderline();
    });
    if (navRef.current) ro.observe(navRef.current);

    // window resize
    window.addEventListener("resize", updateActiveUnderline);

    // khi font load xong (layout có thể thay đổi)
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(updateActiveUnderline).catch(() => {});
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateActiveUnderline);
    };
    // chỉ phụ thuộc pathname — khi pathname thay đổi ta cập nhật
  }, [pathname]);

  // hover/focus handler: nhận event và đo relative tới navRef
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const container = navRef.current;
    if (!container || !el) return;
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setUnderline({
      left: rect.left - containerRect.left + container.scrollLeft,
      width: rect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    // restore về active
    updateActiveUnderline();
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-[var(--background)]/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="h-full flex items-center gap-4 sm:gap-6 lg:gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary shadow-sm ring-1 ring-primary/20">
                <span className="text-base sm:text-lg font-bold text-primary-foreground">
                  L
                </span>
              </div>
              <span className="text-lg sm:text-xl text-primary-foreground font-bold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text">
                LapTech
              </span>
            </Link>

            {/* Nav */}
            <nav
              ref={navRef}
              className="hidden lg:flex h-full items-center gap-4 xl:gap-5 relative"
              onMouseLeave={handleMouseLeave}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));

                // Special handling for Categories with MegaMenu
                if (link.href === "/categories") {
                  return (
                    <MegaMenu
                      key={link.href}
                      trigger={
                        <Link href={link.href}>
                          <div
                            onMouseEnter={handleMouseEnter}
                            className={`relative px-1 text-sm font-medium transition-colors ${
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {link.label}
                          </div>
                        </Link>
                      }
                      delay={500}
                    >
                      <CategoryMegaMenu />
                    </MegaMenu>
                  );
                }

                return (
                  <Link key={link.href} href={link.href}>
                    <div
                      onMouseEnter={handleMouseEnter}
                      className={`relative px-1 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                );
              })}

              {/* Underline Indicator */}
              <span
                aria-hidden
                className="absolute bottom-0 h-[2px] rounded transition-all duration-300"
                style={{
                  transform: `translateX(${underline.left}px)`,
                  width: underline.width,
                  opacity: underline.opacity,
                  background: "linear-gradient(90deg,#ef4444,#f97316)", // ví dụ gradient
                }}
              />
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Search */}
            <div className="relative flex items-center">
              {/* Search input container */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  showSearch
                    ? "w-64 sm:w-80 lg:w-96 opacity-100 scale-100 ml-2"
                    : "w-0 duration-600 opacity-0 scale-95 ml-0 pointer-events-none"
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
            <Link href="/cart">
              <div className="relative text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <CartIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                {typeof window !== "undefined" && mounted && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </div>
            </Link>

            {/* Theme Toggle - Hidden on small screens */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* User - Hidden on small screens */}
            <div className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">
              <UserIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden text-muted-foreground hover:text-foreground transition-colors">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
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
