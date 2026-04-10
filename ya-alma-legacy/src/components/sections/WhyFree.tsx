"use client";

import React from "react";
import { CheckCircle2, Award, Zap, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function WhyFree() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-brand-gold)]/5 rounded-l-[100px] blur-3xl -z-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 rounded-r-[100px] blur-3xl -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative aspect-square md:aspect-video lg:aspect-square bg-gray-50 rounded-[3rem] border border-gray-100 shadow-2xl flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-[2s]"></div>
            
            {/* Elegant overlay card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] max-w-[80%] text-center border border-white"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-brand-navy)] to-blue-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-inner rotate-3">
                <HeartHandshake size={40} />
              </div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-navy)] to-blue-600 mb-3 tracking-tight">{t.why_free.free_offer}</h3>
              <p className="text-gray-600 font-medium">{t.why_free.official_rep}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold w-fit border border-blue-100 mb-6 uppercase tracking-wider backdrop-blur-sm">
              <Zap size={16} className="text-blue-500" />
              {t.why_free.transparent}
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] mb-6 leading-tight tracking-tight">
              {t.why_free.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {t.why_free.desc}
            </p>
            
            <ul className="space-y-6">
              {[
                { text: t.why_free.f1, icon: CheckCircle2 },
                { text: t.why_free.f2, icon: CheckCircle2 },
                { text: t.why_free.f3, icon: CheckCircle2 }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-4 text-xl text-gray-800 font-semibold group"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/10 flex items-center justify-center group-hover:bg-[var(--color-brand-gold)]/20 transition-colors shrink-0">
                    <item.icon className="text-[var(--color-brand-gold)]" size={20} />
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Award className="text-[var(--color-brand-gold)] w-12 h-12 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[var(--color-brand-navy)]">{t.why_free.certified}</p>
                <p className="text-xs text-gray-500 mt-1"></p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
