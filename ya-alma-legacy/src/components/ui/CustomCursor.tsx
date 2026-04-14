"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"none" | "hover" | "drag">("none");
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorDotX = useMotionValue(-100);
  const cursorDotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const dotSpringConfig = { damping: 30, stiffness: 400 };
  const cursorDotXSpring = useSpring(cursorDotX, dotSpringConfig);
  const cursorDotYSpring = useSpring(cursorDotY, dotSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (hoverState === "drag" ? 32 : 16));
      cursorY.set(e.clientY - (hoverState === "drag" ? 32 : 16));
      cursorDotX.set(e.clientX - 4);
      cursorDotY.set(e.clientY - 4);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="drag"]')) {
         setHoverState("drag");
      } else if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('cursor-pointer')) {
        setHoverState("hover");
      } else {
        setHoverState("none");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, cursorDotX, cursorDotY, hidden, hoverState]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-[var(--color-brand-gold)] pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center font-bold text-xs"
        style={{
          width: hoverState === "drag" ? 64 : 32,
          height: hoverState === "drag" ? 64 : 32,
          x: cursorXSpring,
          y: cursorYSpring,
          scale: hoverState === "hover" ? 2.5 : 1,
          opacity: hidden ? 0 : 1,
          backgroundColor: hoverState === "hover" ? "rgba(198,163,69, 1)" : (hoverState === "drag" ? "white" : "transparent"),
          color: hoverState === "drag" ? "black" : "transparent"
        }}
      >
        {hoverState === "drag" && "DRAG"}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-brand-gold)] rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          x: cursorDotXSpring,
          y: cursorDotYSpring,
          opacity: hoverState === "none" && !hidden ? 1 : 0,
        }}
      />
    </>
  );
}
