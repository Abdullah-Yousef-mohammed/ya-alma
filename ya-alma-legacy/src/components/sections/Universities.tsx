"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin, ArrowLeft, ArrowRight, Building } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

interface University {
  id: number;
  name: string;
  nameAr: string;
  nameZh: string;
  nameMs: string;
  location: string;
  locationAr: string;
  locationZh: string;
  locationMs: string;
  state: string;
  stateMs: string;
  logoUrl: string;
}

export default function Universities() {
  const { t, language, t_dyn } = useLanguage();
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    direction: language === "ar" ? "rtl" : "ltr" 
  });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities`)
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        setUniversities(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching universities:", err);
        setUniversities([]);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section id="universities" className="py-24 bg-white dark:bg-[#0b0f19] relative overflow-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-gold)]/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold w-fit border border-blue-100 mb-6 uppercase tracking-wider">
              <Building size={16} /> Partner Network
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] mb-4 tracking-tight">
              {t.universities.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-gold)] to-yellow-500">{t.universities.title2}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg font-medium">
              {t.universities.desc}
            </p>
          </motion.div>
          {/* We could add custom previous/next carousel buttons here in the future if desired */}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="embla cursor-grab active:cursor-grabbing" ref={emblaRef}
          data-cursor="drag"
        >
          <div className="embla__container gap-6 md:gap-8 pb-10">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_28%]"
              >
                <div className="bg-white dark:bg-[#0b0f19] rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-100 dark:border-gray-800 h-full flex flex-col group transition-all duration-500 hover:-translate-y-2">
                  <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-[1.5rem] flex items-center justify-center mb-6 border border-gray-200 dark:border-gray-700/50 text-3xl font-bold text-gray-300 group-hover:from-blue-50 group-hover:to-transparent group-hover:text-blue-500 transition-all duration-500">
                    {uni.logoUrl || "Logo"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 truncate group-hover:text-[var(--color-brand-navy)] transition-colors" title={t_dyn(uni.name, uni.nameAr)}>{t_dyn(uni.name, uni.nameAr)}</h3>
                  <div className="flex items-center text-sm text-gray-500 font-medium mb-8">
                    <MapPin size={16} className={`${language === "ar" ? "ml-2" : "mr-2"} text-[var(--color-brand-gold)] shrink-0`} />
                    <span className="truncate">{t_dyn(uni.location, uni.locationAr)}</span>
                  </div>
                  <a href={`/universities`} className="mt-auto inline-flex items-center justify-between text-sm font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] transition-colors group/btn">
                    <span className="bg-gray-50 dark:bg-[#11192d] px-4 py-2 rounded-xl group-hover/btn:bg-[var(--color-brand-gold)]/10 transition-colors">
                      {t.universities.btn} 
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-brand-navy)] text-white flex items-center justify-center group-hover/btn:bg-[var(--color-brand-gold)] transition-colors group-hover/btn:rotate-45">
                      {language === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
