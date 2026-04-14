"use client";

import { useCallback, useEffect, useRef } from "react";

export function useUISounds() {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only initialize sounds on the client
    if (typeof window !== "undefined") {
      hoverAudioRef.current = new Audio("https://cdn.freesound.org/previews/256/256113_3263906-lq.mp3"); // Soft tick/hover
      clickAudioRef.current = new Audio("https://cdn.freesound.org/previews/415/415764_6080351-lq.mp3"); // Soft modern click
      
      if (hoverAudioRef.current) hoverAudioRef.current.volume = 0.05;
      if (clickAudioRef.current) clickAudioRef.current.volume = 0.1;
    }
  }, []);

  const playHover = useCallback(() => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(() => {});
    }
  }, []);

  const playClick = useCallback(() => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(() => {});
    }
  }, []);

  // Globally attach to anchors and buttons
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        playHover();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        playClick();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", handleClick);
    };
  }, [playHover, playClick]);

  return { playHover, playClick };
}
