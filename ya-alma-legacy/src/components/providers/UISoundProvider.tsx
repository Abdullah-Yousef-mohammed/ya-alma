"use client";

import { useUISounds } from "@/hooks/useUISounds";

export default function UISoundProvider({ children }: { children: React.ReactNode }) {
  useUISounds(); // Initializes the global sound event listeners
  return <>{children}</>;
}
