"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const words = [
    "STUDY IN MALAYSIA", "•", "TOP UNIVERSITIES", "•", "100% VISA SUCCESS", "•", 
    "PREMIUM CONSULTING", "•", "WORLD CLASS EDUCATION", "•"
  ];

  const marqueeContent = [...words, ...words, ...words]; // Triple it for smooth infinite scroll

  return (
    <div className="relative w-full overflow-hidden bg-[var(--color-brand-navy)] py-6 flex items-center shadow-inner border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-navy)] via-transparent to-[var(--color-brand-navy)] z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30, // Smooth slow scrolling
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeContent.map((word, idx) => (
          <span 
            key={idx} 
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mx-4 ${
              word === "•" 
                ? "text-[var(--color-brand-gold)]" 
                : "text-transparent"
            }`}
            style={word !== "•" ? { WebkitTextStroke: "1px rgba(255,255,255,0.2)" } : {}}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
