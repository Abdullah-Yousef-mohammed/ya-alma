"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Plane, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      id: "s1",
      icon: (
        <motion.div 
          variants={{ hover: { y: [0, -4, 0], transition: { repeat: Infinity, duration: 1.5 } } }}
        >
          <GraduationCap size={36} />
        </motion.div>
      ),
      title: t.services.s1_title,
      description: t.services.s1_desc,
      color: "from-blue-600 to-indigo-600",
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/10 hover:border-blue-200 dark:border-gray-800",
      iconShadow: "shadow-blue-500/30",
      link: "/services/university-admission"
    },
    {
      id: "s2",
      icon: (
        <motion.div 
          variants={{ hover: { x: [0, 4, 0], y: [0, -4, 0], transition: { repeat: Infinity, duration: 1 } } }}
        >
          <Plane size={36} />
        </motion.div>
      ),
      title: t.services.s2_title,
      description: t.services.s2_desc,
      color: "from-[var(--color-brand-gold)] to-orange-500",
      bgClass: "bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/10 hover:border-amber-200 dark:border-gray-800",
      iconShadow: "shadow-[var(--color-brand-gold)]/30",
      link: "/services/visa-support"
    },
    {
      id: "s3",
      icon: (
        <motion.div 
          variants={{ hover: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } }}
        >
          <Building2 size={36} />
        </motion.div>
      ),
      title: t.services.s3_title,
      description: t.services.s3_desc,
      color: "from-emerald-500 to-teal-500",
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/10 hover:border-emerald-200 dark:border-gray-800",
      iconShadow: "shadow-emerald-500/30",
      link: "/services/accommodation"
    }
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Depending on language direction, the scroll moves left (negative) or right (positive)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", language === "ar" ? "66%" : "-66%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[300vh] bg-[#f8fafc] dark:bg-[#0b0f19]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-8 absolute top-[10%] left-0 right-0 z-20">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] dark:text-white mb-6 tracking-tight"
            >
              {t.services.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed"
            >
              {t.services.desc}
            </motion.p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-[10vw] pt-32 w-[300vw] lg:w-[200vw]">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover="hover"
              className={`rounded-[2rem] p-8 md:p-10 shadow-lg dark:shadow-blue-900/10 border border-gray-100 dark:border-gray-800 dark:bg-gray-900 relative overflow-hidden ${service.bgClass} flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] group transition-all duration-500`}
            >
              {/* Highlight bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.color} text-white shadow-xl ${service.iconShadow} group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-6 group-hover:text-[var(--color-brand-navy)] transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg font-medium">
                {service.description}
              </p>
              
              <Link href={service.link} className={`inline-flex items-center text-lg font-bold tracking-wide mt-auto text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                {t.services.learn_more} 
                {language === "ar" ? 
                  <ArrowLeft size={24} className="mr-2 group-hover:-translate-x-2 transition-transform text-current" /> :
                  <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform text-current" />
                }
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
