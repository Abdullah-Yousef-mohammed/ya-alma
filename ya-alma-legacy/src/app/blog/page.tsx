"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";

interface BlogPost {
  id: number;
  title: string;
  titleAr: string;
  titleZh: string;
  category: string;
  categoryAr: string;
  categoryZh: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  excerptAr: string;
  excerptZh: string;
}

export default function BlogPage() {
  const { t, language, t_dyn } = useLanguage();
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/blog/published`)
      .then(res => res.ok ? res.json() : [])
      .then(data => { 
        setArticles(Array.isArray(data) ? data : []); 
        setLoading(false); 
      })
      .catch(() => {
        setArticles([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-[var(--color-brand-navy)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.blog}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.blog.desc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {loading ? (
          <div className="text-center py-20 text-gray-400 text-lg">Loading articles...</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">
            {t_dyn("No articles available yet.", "لا توجد مقالات حالياً")}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/blog/${article.id}`} key={article.id}>
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={article.imageUrl} 
                      alt={t_dyn(article.title, article.titleAr)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand-navy)] text-xs font-bold px-3 py-1 rounded-full">
                      {t_dyn(article.category, article.categoryAr)}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-sm text-gray-400 mb-3">{article.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[var(--color-brand-navy)] transition-colors">
                      {t_dyn(article.title, article.titleAr)}
                    </h3>
                    <p className="text-gray-600 mb-8 flex-grow">
                      {t_dyn(article.excerpt, article.excerptAr)}
                    </p>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full flex justify-center items-center gap-2 group-hover:bg-[var(--color-brand-navy)] group-hover:text-white transition-colors">
                        <span>{t.blog.read}</span>
                        {language === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
