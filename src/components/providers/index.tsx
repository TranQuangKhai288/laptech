"use client";

import React from "react";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
