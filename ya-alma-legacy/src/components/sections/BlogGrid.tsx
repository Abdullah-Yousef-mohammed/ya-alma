"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  titleAr: string;
  titleZh: string;
  category: string;
  categoryAr: string;
  categoryZh: string;
  imageUrl: string;
  videoUrl?: string;
  videoUrlAr?: string;
  videoUrlZh?: string;
}

export default function BlogGrid() {
  const { t, language, t_dyn } = useLanguage();
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/blog/published`)
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        if (Array.isArray(data)) {
          // Take only the 3 most recent articles
          setArticles(data.slice(0, 3));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-100 rounded-3xl h-[400px]"></div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
             {t_dyn("No articles available yet.", "لا توجد مقالات حالياً", "暂时没有文章。")}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/blog/${article.id}`} key={article.id} className="group cursor-pointer flex flex-col">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    style={{ backgroundImage: `url('${article.imageUrl}')` }}
                  ></div>
                  <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-[var(--color-brand-gold)] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                    {t_dyn(article.category, article.categoryAr, article.categoryZh)}
                  </div>
                  
                  {/* Vlog Indicator Badge */}
                  {(article.videoUrl || article.videoUrlAr || article.videoUrlZh) && (
                     <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-red-600 text-white px-2 py-1 flex items-center gap-1 rounded-lg text-[10px] font-black uppercase opacity-90 shadow-md">
                        ▶ Vlog
                     </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-navy)] transition-colors line-clamp-2 leading-tight">
                  {t_dyn(article.title, article.titleAr, article.titleZh)}
                </h3>
                <div className="flex items-center text-[var(--color-brand-gold)] font-medium mt-auto">
                  {t.blog.read} 
                  {language === "ar" ? <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
