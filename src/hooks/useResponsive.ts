import { useState, useEffect } from "react";

// Breakpoint values matching Tailwind config
const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isAbove = (breakpoint: Breakpoint): boolean => {
    return windowSize.width >= breakpoints[breakpoint];
  };

  const isBelow = (breakpoint: Breakpoint): boolean => {
    return windowSize.width < breakpoints[breakpoint];
  };

  const isBetween = (min: Breakpoint, max: Breakpoint): boolean => {
    return (
      windowSize.width >= breakpoints[min] &&
      windowSize.width < breakpoints[max]
    );
  };

  const getCurrentBreakpoint = (): Breakpoint => {
    const width = windowSize.width;

    if (width >= breakpoints["3xl"]) return "3xl";
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    if (width >= breakpoints.xs) return "xs";
    return "xs";
  };

  const isMobile = windowSize.width < breakpoints.md;
  const isTablet =
    windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;

  return {
    windowSize,
    isAbove,
    isBelow,
    isBetween,
    getCurrentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    // Direct breakpoint checks for convenience
    isXs: windowSize.width < breakpoints.sm,
    isSm: isBetween("sm", "md"),
    isMd: isBetween("md", "lg"),
    isLg: isBetween("lg", "xl"),
    isXl: isBetween("xl", "2xl"),
    is2xl: isBetween("2xl", "3xl"),
    is3xl: windowSize.width >= breakpoints["3xl"],
  };
};
