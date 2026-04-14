"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function LanguageCenters() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-[#0b0f19] border-b border-gray-100 dark:border-gray-800 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-gray-50 dark:bg-[#11192d] rounded-[40px] p-8 md:p-16 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
          
          <div className="space-y-6 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-brand-navy)] to-blue-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl">
              <BookOpen size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-brand-navy)] leading-tight tracking-tight">
              {t.language_centers.title}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {t.language_centers.desc}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 pb-4">
              <Link href="/language-centers?search=Bright" className="px-5 py-2.5 bg-white dark:bg-[#0b0f19] rounded-xl shadow-md hover:shadow-lg font-bold text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 hover:border-blue-200 hover:-translate-y-1 transition-all cursor-pointer">Bright Language Center</Link>
              <Link href="/language-centers?search=ELS" className="px-5 py-2.5 bg-white dark:bg-[#0b0f19] rounded-xl shadow-md hover:shadow-lg font-bold text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 hover:border-blue-200 hover:-translate-y-1 transition-all cursor-pointer">ELS</Link>
              <Link href="/language-centers?search=Sheffield" className="px-5 py-2.5 bg-white dark:bg-[#0b0f19] rounded-xl shadow-md hover:shadow-lg font-bold text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 hover:border-blue-200 hover:-translate-y-1 transition-all cursor-pointer">Sheffield</Link>
            </div>

            <Link href="/language-centers" className="inline-block mt-4">
              <Button size="lg" variant="primary" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg font-bold px-10 py-6">
                {t.language_centers.btn}
              </Button>
            </Link>
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
