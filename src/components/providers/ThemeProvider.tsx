"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme as antTheme } from "antd";
import type { ThemeConfig } from "antd";

interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    handleChange(); // Set initial value
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  useEffect(() => {
    // Update resolved theme when theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setResolvedTheme(mediaQuery.matches ? "dark" : "light");
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    // Apply theme to document (always have either light or dark for easier styling)
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  const handleSetTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Ant Design theme configuration
  const antdTheme: ThemeConfig = {
    algorithm:
      resolvedTheme === "dark"
        ? antTheme.darkAlgorithm
        : antTheme.defaultAlgorithm,
    token: {
      // Simple hex colors for Ant Design tokens
      colorPrimary: resolvedTheme === "dark" ? "#3b82f6" : "#0ea5e9",
      colorSuccess: "#22c55e",
      colorWarning: "#f59e0b",
      colorError: resolvedTheme === "dark" ? "#dc2626" : "#ef4444",
      colorInfo: resolvedTheme === "dark" ? "#3b82f6" : "#0ea5e9",
      colorBgBase: resolvedTheme === "dark" ? "#0b1120" : "#ffffff",
      colorBgContainer: resolvedTheme === "dark" ? "#132035" : "#ffffff",
      colorTextBase: resolvedTheme === "dark" ? "#f1f5f9" : "#171717",
      colorBorder: resolvedTheme === "dark" ? "#26354d" : "#e2e8f0",
      borderRadius: 8,
      fontFamily: "Inter, system-ui, sans-serif",
    },
    components: {
      Layout: {
        colorBgHeader: resolvedTheme === "dark" ? "#1e293b" : "#ffffff",
        colorBgBody: resolvedTheme === "dark" ? "#0f172a" : "#f8fafc",
      },
      Button: {
        borderRadius: 8,
        controlHeight: 40,
      },
      Card: {
        borderRadius: 12,
      },
      Input: {
        borderRadius: 8,
        controlHeight: 40,
      },
    },
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleSetTheme, resolvedTheme }}
    >
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
