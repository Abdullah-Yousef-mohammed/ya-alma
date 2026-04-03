"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Plane, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: <GraduationCap size={32} />,
      title: t.services.s1_title,
      description: t.services.s1_desc,
      color: "from-blue-600 to-indigo-600",
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-50/50 hover:border-blue-200",
      iconShadow: "shadow-blue-500/30",
      link: "/services/university-admission"
    },
    {
      icon: <Plane size={32} />,
      title: t.services.s2_title,
      description: t.services.s2_desc,
      color: "from-[var(--color-brand-gold)] to-orange-500",
      bgClass: "bg-gradient-to-br from-amber-50 to-orange-50/50 hover:border-amber-200",
      iconShadow: "shadow-[var(--color-brand-gold)]/30",
      link: "/services/visa-support"
    },
    {
      icon: <Building2 size={32} />,
      title: t.services.s3_title,
      description: t.services.s3_desc,
      color: "from-emerald-500 to-teal-500",
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-50/50 hover:border-emerald-200",
      iconShadow: "shadow-emerald-500/30",
      link: "/services/accommodation"
    }
  ];

  return (
    <section id="services" className="py-28 bg-[#f8fafc] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] mb-6 tracking-tight"
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
          >
            {t.services.desc}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 relative overflow-hidden ${service.bgClass}`}
            >
              {/* Highlight bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.color} text-white shadow-lg ${service.iconShadow} group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[var(--color-brand-navy)] transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                {service.description}
              </p>
              
              <Link href={service.link} className={`inline-flex items-center font-bold tracking-wide mt-auto text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                {t.services.learn_more} 
                {language === "ar" ? 
                  <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-2 transition-transform text-current" /> :
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform text-current" />
                }
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
