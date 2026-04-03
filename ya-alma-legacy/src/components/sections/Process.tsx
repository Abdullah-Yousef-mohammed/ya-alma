"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t.process.p1_title, desc: t.process.p1_desc },
    { num: "02", title: t.process.p2_title, desc: t.process.p2_desc },
    { num: "03", title: t.process.p3_title, desc: t.process.p3_desc },
    { num: "04", title: t.process.p4_title, desc: t.process.p4_desc },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
             <span className="text-[var(--color-brand-gold)] font-bold tracking-wider uppercase text-sm mb-4 block">{t.process.sub}</span>
             <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-8 leading-tight">
               {t.process.title1} <br/>
               {t.process.title2}
             </h2>
             <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
               {t.process.desc}
             </p>

             <div className="space-y-8 relative">
               {/* Connecting vertical line */}
               <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>
               
               {steps.map((step, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.15 }}
                   className="flex gap-6"
                 >
                   <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] font-bold rounded-full flex items-center justify-center relative shadow-sm">
                     {step.num}
                   </div>
                   <div className="pt-2">
                     <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                     <p className="text-gray-600">{step.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

          <div className="order-first lg:order-last">
             <div className="aspect-square bg-gray-50 rounded-full sm:w-[500px] mx-auto relative border-4 border-[var(--color-brand-gold)]/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.05)] p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
                {/* Floating graphic */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 rtl:-right-10 ltr:-left-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] rounded-xl flex items-center justify-center text-3xl">✈️</div>
                  <div>
                    <div className="text-gray-900 font-bold">{t.process.float1}</div>
                    <div className="text-gray-500 text-sm">{t.process.float2}</div>
                  </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
