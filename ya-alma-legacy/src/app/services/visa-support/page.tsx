"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Plane, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function VisaSupportPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#11192d]">
      <Navbar />
      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white dark:bg-[#0b0f19] rounded-[3rem] p-10 md:p-16 shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="w-20 h-20 bg-amber-100 text-[var(--color-brand-gold)] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Plane size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] mb-6 leading-tight">
              {t.services.s2_title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-medium leading-relaxed">
              {t.services.s2_desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800 dark:text-gray-200">{t.service_pages.s2_b1}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800 dark:text-gray-200">{t.service_pages.s2_b2}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800 dark:text-gray-200">{t.service_pages.s2_b3}</p>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
              <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                {t.service_pages.s2_btn}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
