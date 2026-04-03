"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AccommodationPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Building2 size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[var(--color-brand-navy)] mb-6 leading-tight">
              {t.services.s3_title}
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
              {t.services.s3_desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800">{t.service_pages.s3_b1}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800">{t.service_pages.s3_b2}</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800">{t.service_pages.s3_b3}</p>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100">
              <a href="https://wa.me/60143240499" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                {t.service_pages.s3_btn}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
