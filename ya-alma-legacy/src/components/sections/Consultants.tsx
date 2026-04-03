"use client";

import React from "react";
import { MessageSquareText, ShieldCheck, Clock, Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function Consultants() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[var(--color-brand-navy)] text-white relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay scale-105"></div>
      
      {/* Dynamic Gradients */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[var(--color-brand-gold)] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto backdrop-blur-xl bg-[#0a162d]/60 border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent opacity-50"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-8 relative border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)] rotate-3 hover:rotate-0 transition-transform"
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-2xl animate-ping opacity-60"></div>
            <MessageSquareText size={36} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight mx-auto max-w-3xl"
          >
            {t.consultants.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] to-amber-200">{t.consultants.title2}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
          >
            {t.consultants.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <a href="https://wa.me/60143240499" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto group">
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold py-4 px-12 rounded-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_35px_-5px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3 transform group-hover:-translate-y-1">
                <MessageSquareText size={24} />
                {t.consultants.btn} Now
              </button>
            </a>
          </motion.div>

          {/* Value props under button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-3 text-center text-gray-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                <Clock className="text-[var(--color-brand-gold)]" size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide">24/7 Fast Response</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center text-gray-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                <Globe2 className="text-[var(--color-brand-gold)]" size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide">Multilingual Support</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center text-gray-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors">
                <ShieldCheck className="text-[var(--color-brand-gold)]" size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide">Official Representatives</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
