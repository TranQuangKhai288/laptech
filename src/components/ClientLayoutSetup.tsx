"use client";
import { useEffect } from "react";

export default function ClientLayoutSetup() {
  useEffect(() => {
    // Thêm class mdl-js sau khi component đã mount
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("mdl-js");
    }

    // Cleanup khi component unmount
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("mdl-js");
      }
    };
  }, []);

  return null; // Component này không render gì cả
}
