"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoTours() {
  const { t } = useLanguage();
  const vt: any = t.video_tours;

  return (
    <section className="py-24 bg-[var(--color-brand-navy)] text-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {vt.title}
          </h2>
          <p className="text-gray-300 text-lg">
            {vt.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Video Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8"
          >
            <a href={vt?.v1_url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank" rel="noopener noreferrer" className="block relative rounded-[32px] overflow-hidden bg-black aspect-video border-4 border-white/10 shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${vt?.v1_img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={36} className="fill-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-[var(--color-brand-navy)] px-3 py-1 rounded-lg text-sm font-bold mb-3 inline-block">Campus Tour</span>
                <h3 className="text-2xl font-bold line-clamp-1">{vt?.v1_title || "APU University Campus Tour 2026"}</h3>
              </div>
            </a>
          </motion.div>

          {/* Side Video Features */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <a href={vt?.v2_url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank" rel="noopener noreferrer" className="block relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${vt?.v2_img || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={20} className="fill-white pl-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                 <h4 className="font-bold text-sm drop-shadow-md">{vt?.v2_title || "Taylor's University Tour"}</h4>
              </div>
            </a>
            
            <a href={vt?.v3_url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank" rel="noopener noreferrer" className="block relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${vt?.v3_img || "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={20} className="fill-white pl-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                 <h4 className="font-bold text-sm drop-shadow-md">{vt?.v3_title || "Student Life in Kuala Lumpur"}</h4>
              </div>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
