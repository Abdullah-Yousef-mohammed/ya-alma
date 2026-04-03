"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { Sparkles, ArrowRight, ShieldCheck, GraduationCap, MapPin } from "lucide-react";

export default function Hero() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[var(--color-brand-navy)] text-white">
      {/* Decorative Elite Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Dynamic Animated Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gradient-to-bl from-[var(--color-brand-navy-light)] to-blue-800/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-tr from-[var(--color-brand-gold)] to-amber-600/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"
      ></motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-brand-gold)]/20 to-transparent text-[var(--color-brand-gold-light)] text-xs md:text-sm font-bold w-fit border border-[var(--color-brand-gold)]/40 shadow-[0_0_15px_rgba(255,215,0,0.15)] backdrop-blur-md uppercase tracking-wider"
            >
              <Sparkles size={14} className="animate-pulse" />
              {t.hero.badge}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              <span className="text-white drop-shadow-sm">{t.hero.title1}</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd966] via-[var(--color-brand-gold)] to-[#ffb74d] drop-shadow-lg">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed font-medium max-w-[90%]">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
              <a href="/universities" className="group">
                <Button size="lg" variant="secondary" className="w-full text-base py-6 shadow-xl group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all">
                  {t.hero.btn1}
                  <ArrowRight size={18} className={`${isAr ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                </Button>
              </a>
              <a href="https://wa.me/60143240499" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="whatsapp" className="w-full text-base py-6 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)]">
                  {t.hero.btn2}
                </Button>
              </a>
            </div>
            
            {/* Elegant Premium Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-10 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">500+</span>
                <span className="text-xs md:text-sm text-gray-400 font-medium mt-1">{t.hero.stats.s1}</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
                <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ffd966] to-[var(--color-brand-gold)]">50+</span>
                <span className="text-xs md:text-sm text-gray-400 font-medium mt-1">{t.hero.stats.s2}</span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-8">
                <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">100%</span>
                <span className="text-xs md:text-sm text-gray-400 font-medium mt-1">{t.hero.stats.s3}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Premium Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
             <div className="w-full aspect-[4/5] bg-gradient-to-b from-white/10 to-transparent rounded-[3rem] p-4 relative z-10 backdrop-blur-sm border border-white/10 shadow-2xl group">
               <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
               </div>
               
               {/* 3D Glass Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -left-12 top-40 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
               >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shadow-inner">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="text-white font-bold text-sm tracking-wide">Visa Approved</span>
                    <span className="text-green-300 text-xs font-medium">100% Success</span>
                  </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -right-8 bottom-32 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4"
               >
                  <div className="flex flex-col items-end pl-2">
                    <span className="text-white font-bold text-sm tracking-wide">Top University</span>
                    <span className="text-[var(--color-brand-gold)] text-xs font-bold mt-1 uppercase tracking-wider">Offer Letter</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-brand-gold)] to-yellow-600 rounded-xl flex items-center justify-center text-white shadow-inner shadow-yellow-200/50">
                    <GraduationCap size={24} />
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                 className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white p-3 pr-6 rounded-full shadow-2xl flex items-center gap-3 border border-gray-100"
               >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <MapPin size={16} />
                  </div>
                  <span className="text-gray-900 font-extrabold text-sm tracking-tight">Kuala Lumpur, MY</span>
               </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
