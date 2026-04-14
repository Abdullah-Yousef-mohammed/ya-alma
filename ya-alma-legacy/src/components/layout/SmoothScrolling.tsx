"use client";

import React, { useState, useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(true); // Default true to avoid flash on desktop

  useEffect(() => {
    // Disable smooth scrolling on mobile to prevent freezing and scroll loops
    const checkViewport = () => setIsDesktop(window.innerWidth > 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (!isDesktop) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true, syncTouch: false }}>
      {/* @ts-expect-error Lenis older types mismatch with React 19 bigint nodes */}
      {children}
    </ReactLenis>
  );
}
