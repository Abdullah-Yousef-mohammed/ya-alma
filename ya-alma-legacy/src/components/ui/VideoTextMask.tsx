"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoTextMask() {
  return (
    <div className="relative w-full h-[30vh] overflow-hidden flex items-center justify-center my-6">
      {/* Video Background behind the mask */}
      <div className="absolute inset-0 w-full h-[150%] -top-[25%] pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover filter brightness-150 contrast-125 saturate-150"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-skyscrapers-at-night-34065-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* The Text Mask */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full text-center"
      >
        <h1 
          className="font-black text-[12vw] sm:text-[14vw] leading-none tracking-tighter text-transparent bg-clip-text"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundAttachment: "fixed"
          }}
        >
          MALAYSIA
        </h1>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)] via-transparent to-[var(--color-brand-navy)] opacity-30 pointer-events-none mix-blend-multiply"></div>
      </motion.div>
    </div>
  );
}
