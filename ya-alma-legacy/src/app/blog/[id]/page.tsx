"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface BlogPost {
  id: number;
  title: string;
  titleAr: string;
  titleZh: string;
  titleMs: string;
  category: string;
  categoryAr: string;
  categoryZh: string;
  categoryMs: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  excerptAr: string;
  excerptZh: string;
  excerptMs: string;
  contentEn: string;
  contentAr: string;
  contentZh: string;
  contentMs: string;
  videoUrl?: string;
  videoUrlAr?: string;
  videoUrlZh?: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const { language, t, t_dyn } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params?.id;
    if (!id) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/blog/${id}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => { 
        if (data) {
          setPost(data);
        }
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, [params?.id]);

  if (loading) return <div className="min-h-screen pt-32 text-center text-xl text-gray-400">Loading...</div>;
  if (!post) return <div className="min-h-screen pt-32 text-center text-xl text-gray-400">Article not found</div>;

  const activeVideoUrl = language === 'ar' ? (post.videoUrlAr || post.videoUrl) : language === 'zh' ? (post.videoUrlZh || post.videoUrl) : post.videoUrl;
  const embedUrl = activeVideoUrl && activeVideoUrl.includes('watch?v=') ? activeVideoUrl.replace('watch?v=', 'embed/') : activeVideoUrl;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.9)), url(${post.imageUrl})` }}>
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors mb-6">
            <ChevronLeft size={20} className={`mr-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            {t.nav.blog}
          </Link>
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <Tag size={14} className="text-[var(--color-brand-gold)]" /> 
              {t_dyn(post.category, post.categoryAr, post.categoryMs || post.category, post.categoryMs || post.category)}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[var(--color-brand-gold)]" /> 
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            {t_dyn(post.title, post.titleAr, post.titleMs || post.title, post.titleMs || post.title)}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl -mt-8 relative z-20">
        <article className="bg-white dark:bg-[#0b0f19] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          
          {embedUrl && (
            <div className="mb-10 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-black flex items-center justify-center">
               <iframe 
                 src={embedUrl}
                 title="Vlog"
                 className="w-full h-full border-0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
            </div>
          )}

          <p className="text-lg text-[var(--color-brand-navy)] font-semibold mb-8 leading-relaxed border-l-4 border-[var(--color-brand-gold)] pl-6">
            {t_dyn(post.excerpt, post.excerptAr || post.excerpt, post.excerptMs || post.excerpt, post.excerptMs || post.excerpt)}
          </p>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-loose whitespace-pre-line">
            {language === 'ar' ? post.contentAr : (language === 'zh' ? post.contentZh : post.contentEn)}
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <p className="text-gray-500 mb-4">
              {language === 'ar' ? "هل تريد معرفة المزيد؟ تحدث مع مستشار تعليمي الآن" : 
               (language === 'zh' ? "想了解更多？立即与学术顾问聊天" : "Want to learn more? Chat with an academic advisor now")}
            </p>
            <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg active:scale-[0.98] flex items-center gap-2">
              💬 {language === 'ar' ? "تواصل عبر واتساب" : (language === 'zh' ? "在 WhatsApp 上聊天" : "Chat on WhatsApp")}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
