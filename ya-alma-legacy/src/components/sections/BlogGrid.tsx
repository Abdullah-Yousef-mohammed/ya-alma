"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

const articles = [
  { img: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2000", title: "Cost of Living in Kuala Lumpur for Students", tag: "Guide" },
  { img: "https://images.unsplash.com/photo-1519452285149-bc1ee9047b19?q=80&w=2000", title: "How to Open a Bank Account in Malaysia", tag: "Finance" },
  { img: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=2000", title: "Top 10 Food Spots Near APU University", tag: "Lifestyle" },
];

export default function BlogGrid() {
  const { t, language, t_dyn } = useLanguage();

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-4">
              {t.blog.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {t.blog.desc}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link href="/blog" key={idx} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  style={{ backgroundImage: `url('${article.img}')` }}
                ></div>
                <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-[var(--color-brand-gold)] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  {t_dyn(article.tag, article.tag)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-navy)] transition-colors line-clamp-2 leading-tight">
                {t_dyn(article.title, article.title)}
              </h3>
              <div className="flex items-center text-[var(--color-brand-gold)] font-medium mt-auto">
                {t.blog.read} 
                {language === "ar" ? <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
