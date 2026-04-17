"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { specializationsData, SpecializationData } from "@/data/specializations";
import { specI18n } from "@/data/specializations-i18n";
import { Award, Briefcase, DollarSign, BookOpen, GraduationCap, ArrowRight, ArrowLeft, CheckCircle, Globe, Star, MessageCircle, ChevronDown, Rocket, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function SpecializationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, t_dyn } = useLanguage();
  const isRtl = language === "ar";
  
  const [data, setData] = useState<SpecializationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const { formatPrice } = useCurrency();

  useEffect(() => {
    // FORCE BYPASS DB FOR LUXURIOUS LOCAL DATA + merge i18n translations
    const fallbackSp = specializationsData.find(s => s.slug === slug);
    if (fallbackSp) {
      const i18n = specI18n[slug];
      if (i18n) {
        // Enrich with Chinese & Malay translations from the overlay
        const enriched: SpecializationData = {
          ...fallbackSp,
          titleZh: i18n.titleZh,
          titleMs: i18n.titleMs,
          heroTaglineZh: i18n.heroTaglineZh,
          heroTaglineMs: i18n.heroTaglineMs,
          introZh: i18n.introZh,
          introMs: i18n.introMs,
          careerJobsZh: i18n.careerJobsZh,
          careerJobsMs: i18n.careerJobsMs,
          courseYears: fallbackSp.courseYears.map((cy, idx) => ({
            ...cy,
            yearZh: i18n.courseYears[idx]?.yearZh || cy.yearEn,
            yearMs: i18n.courseYears[idx]?.yearMs || cy.yearEn,
            subjectsZh: i18n.courseYears[idx]?.subjectsZh || cy.subjectsEn,
            subjectsMs: i18n.courseYears[idx]?.subjectsMs || cy.subjectsEn,
          })),
          degreeLevels: fallbackSp.degreeLevels.map((dl, idx) => ({
            ...dl,
            titleZh: i18n.degreeLevels[idx]?.titleZh || dl.titleEn,
            titleMs: i18n.degreeLevels[idx]?.titleMs || dl.titleEn,
            feesRangeZh: i18n.degreeLevels[idx]?.feesZh || dl.feesRangeEn,
            feesRangeMs: i18n.degreeLevels[idx]?.feesMs || dl.feesRangeEn,
            durationZh: i18n.degreeLevels[idx]?.durationZh || dl.durationEn,
            durationMs: i18n.degreeLevels[idx]?.durationMs || dl.durationEn,
          })),
        };
        setData(enriched);
      } else {
        setData(fallbackSp);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [slug]);

  const formatRange = (rangeText?: string) => {
    if (!rangeText) return "";
    let updatedText = rangeText.replace(/\$\d{1,3}(,\d{3})*/g, (match) => {
      const usdValue = parseInt(match.replace(/[$,]/g, ""));
      const approxMyrBase = usdValue * 4.5;
      return formatPrice(approxMyrBase);
    });
    updatedText = updatedText.replace(/RM\s*\d{1,3}(,\d{3})*|\d{1,3}(,\d{3})*\s*RM/gi, (match) => {
      const myrValue = parseInt(match.replace(/[^\d]/g, ""));
      return formatPrice(myrValue);
    });
    return updatedText.replace(/دولار/g, ""); 
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-brand-navy)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-brand-gold)]"></div>
      </div>
    );
  }

  if (!data) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-black mb-4">404</h1>
      <p>Specialization not found.</p>
    </div>
  );

  const getStr = <T,>(en: T, ar: T, zh?: T, ms?: T): T => {
    if (language === 'zh' && zh !== undefined) return zh;
    if (language === 'ms' && ms !== undefined) return ms;
    if (language === 'ar' && ar !== undefined) return ar;
    return en;
  };

  const tabs = [
    { id: "overview", label: getStr("Overview", "نظرة عامة", "总览", "Gambaran Keseluruhan"), icon: BookOpen },
    { id: "universities", label: getStr("Universities", "أفضل الجامعات", "顶尖大学", "Universiti Terbaik"), icon: Award },
    { id: "curriculum", label: getStr("Curriculum", "الخطة الدراسية", "课程大纲", "Kurikulum"), icon: GraduationCap },
    { id: "career", label: getStr("Career", "المستقبل المهني", "职业前景", "Kerjaya"), icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pb-32" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* ── Luxurious Hero Banner ── */}
      <div className="relative bg-gradient-to-br from-[#0d1b3e] to-[#1a2f5e] pt-32 pb-24 overflow-hidden border-b-8 border-[var(--color-brand-gold)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-white dark:bg-[#0b0f19]/10 backdrop-blur-md rounded-full text-[var(--color-brand-gold)] text-sm font-bold mb-6 border border-white/10 tracking-widest uppercase">
              {getStr("Premium Program Focus", "برنامج النخبة المعتمد", "高级专业聚焦", "Fokus Program Premium")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
              {getStr(data.titleEn, data.titleAr, data.titleZh, data.titleMs)}
            </h1>
            <p className="text-blue-100 text-lg md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto opacity-90 drop-shadow-lg">
              {getStr(data.heroTaglineEn, data.heroTaglineAr, data.heroTaglineZh, data.heroTaglineMs)}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Floating Sticky Tab Navigation ── */}
      <div className="sticky top-[80px] z-40 bg-white dark:bg-[#0b0f19]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 py-4 justify-start lg:justify-center items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id 
                  ? "bg-[var(--color-brand-navy)] text-white shadow-lg scale-105" 
                  : "bg-white dark:bg-[#0b0f19] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:bg-gray-800 hover:scale-100"
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? "text-[var(--color-brand-gold)]" : "text-gray-400"} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* TAB: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-12">
                <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full pointer-events-none"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-6 flex items-center gap-3">
                    <Rocket className="text-[var(--color-brand-gold)]" />
                    {getStr("Introduction", "لماذا هذا التخصص؟", "简介", "Pengenalan")}
                  </h2>
                  <div className="prose max-w-none text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                    {getStr(data.introEn, data.introAr, data.introZh, data.introMs)?.split("\n").map((para: string, idx: number) => (
                      <p key={idx} className="mb-4">{para}</p>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--color-brand-navy)] rounded-3xl p-8 md:p-12 shadow-xl border border-blue-900/50">
                   <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                    {getStr("Degrees & Duration", "الدرجات العلمية والمدة", "学位及学制", "Ijazah & Tempoh")}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {data.degreeLevels.map((deg: any, i: number) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1 group">
                        <GraduationCap className="mx-auto text-[var(--color-brand-gold)] mb-4 h-12 w-12 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2">{getStr(deg.titleEn, deg.titleAr, deg.titleZh, deg.titleMs)}</h3>
                        <p className="text-blue-100 font-medium bg-black/20 rounded-xl py-2 mb-2">⏱ {getStr(deg.durationEn, deg.durationAr, deg.durationZh, deg.durationMs)}</p>
                        <p className="text-green-300 font-black text-lg">{formatRange(getStr(deg.feesRangeEn, deg.feesRangeAr, deg.feesRangeZh, deg.feesRangeMs))}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: UNIVERSITIES */}
            {activeTab === "universities" && (
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-[var(--color-brand-navy)] mb-8 flex items-center gap-3">
                    <Star className="text-[var(--color-brand-gold)] fill-[var(--color-brand-gold)]" size={32} />
                    {getStr("Top Elite Universities", "نخبة الجامعات المعتمدة عالمياً", "顶尖一流大学", "Universiti Elit Teratas")}
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {data.topUniversities.map((uni: any, i: number) => (
                      <div key={i} className="bg-white dark:bg-[#0b0f19] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
                        <div className="p-6 md:p-8 flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {getStr(uni.nameEn, uni.nameAr, uni.nameZh, uni.nameMs)}
                            </h3>
                            <span className="shrink-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-sm ml-4 border border-white">
                              {getStr(uni.discountEn, uni.discountAr, uni.discountZh, uni.discountMs)}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-gray-50 dark:bg-[#11192d] rounded-2xl p-4 border border-gray-100 dark:border-gray-800">
                              <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">{getStr("World Rank", "عالمياً", "世界排名", "Kedudukan Dunia")}</p>
                              <p className="text-xl font-black text-[var(--color-brand-navy)]">#{uni.worldRanking}</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                              <p className="text-xs text-green-600 font-bold mb-1 uppercase tracking-wider">{getStr("Annual Fees", "الرسوم السنوية", "年均学费", "Yuran Tahunan")}</p>
                              <p className="text-xl font-black text-green-700">{formatRange(uni.annualFeesUSD)}</p>
                            </div>
                          </div>
                        </div>
                        <Link href={uni.href} className="bg-gray-50 dark:bg-[#11192d] border-t border-gray-100 dark:border-gray-800 p-4 font-bold text-center text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-gold)] hover:text-white transition-colors flex items-center justify-center gap-2">
                          {getStr("View Full Profile", "عرض ملف الجامعة", "查看完整的简介", "Lihat Profil Penuh")}
                          <ArrowLeft size={18} className="rtl:inline-block ltr:hidden" />
                          <ArrowRight size={18} className="ltr:inline-block rtl:hidden" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {data.budgetUniversities.length > 0 && (
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-gray-200 mb-8 flex items-center gap-3">
                      <DollarSign className="text-green-500" size={32} />
                      {getStr("Value & Affordability", "جامعات اقتصادية قوية", "高性价比大学", "Universiti Berpatutan")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.budgetUniversities.map((uni: any, i: number) => (
                        <div key={i} className="bg-white dark:bg-[#0b0f19] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-green-400 hover:shadow-lg transition-all group">
                          <h3 className="text-lg font-black text-gray-800 dark:text-gray-200 mb-4 group-hover:text-green-600 transition-colors line-clamp-2 min-h-[56px]">{getStr(uni.nameEn, uni.nameAr, uni.nameZh, uni.nameMs)}</h3>
                          <div className="flex justify-between items-center bg-gray-50 dark:bg-[#11192d] p-3 rounded-xl">
                            <span className="text-sm font-bold text-gray-500">{getStr("Tuition / Year", "الرسوم سنوياً", "每年学费", "Yuran / Tahun")}</span>
                            <span className="font-black text-green-600">{formatRange(uni.annualFeesUSD)}</span>
                          </div>
                          <Link href={uni.href} className="mt-4 block w-full text-center py-2 bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                            {getStr("View", "استعراض", "查看", "Lihat")}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: CURRICULUM TIMELINE */}
            {activeTab === "curriculum" && (
              <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 md:p-14 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl md:text-4xl font-black text-[var(--color-brand-navy)] mb-10 text-center">
                  {getStr("Interactive Syllabus", "الخريطة الذهنية للمنهج", "互动式教学大纲", "Silibus Interaktif")}
                </h2>
                
                <div className="relative border-s-4 border-gray-200 dark:border-gray-700 dark:border-gray-700 ltr:ml-6 rtl:mr-6">
                  {data.courseYears.map((yr: any, i: number) => (
                    <div key={i} className="mb-12 ltr:ml-8 rtl:mr-8 relative group">
                      <div className="absolute w-8 h-8 rounded-full bg-[var(--color-brand-gold)] text-white font-black text-sm flex items-center justify-center -start-[1.65rem] border-4 border-white shadow-md group-hover:scale-125 transition-transform z-10">{i+1}</div>
                      <div className="bg-gray-50 dark:bg-[#11192d] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4">{getStr(yr.yearEn, yr.yearAr, yr.yearZh, yr.yearMs)}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          {getStr(yr.subjectsEn, yr.subjectsAr, yr.subjectsZh, yr.subjectsMs).map((sub: string, j: number) => (
                            <span key={j} className="bg-white dark:bg-[#0b0f19] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-sm hover:bg-[var(--color-brand-navy)] hover:text-white transition-colors cursor-default">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: CAREER */}
            {activeTab === "career" && (
              <div className="space-y-12">
                <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 md:p-14 shadow-sm border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5"></div>
                  <h2 className="text-3xl md:text-4xl font-black text-[var(--color-brand-navy)] mb-10 relative z-10">
                    {getStr("Future Career Paths", "أين ستعمل بعد التخرج؟", "未来职业道路", "Laluan Kerjaya Masa Depan")}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
                    {getStr(data.careerJobsEn, data.careerJobsAr, data.careerJobsZh, data.careerJobsMs).map((job: string, i: number) => (
                      <span key={i} className="px-6 py-3 bg-gradient-to-r from-[var(--color-brand-navy)] to-blue-800 text-white font-bold rounded-full text-sm md:text-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform border border-blue-700">
                        ✨ {job}
                      </span>
                    ))}
                  </div>
                </div>

                {data.seVsCs && (
                  <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-brand-navy)] to-transparent pointer-events-none"></div>
                    <h3 className="text-2xl md:text-3xl font-black mb-10 text-center text-[var(--color-brand-gold)] relative z-10">
                      {getStr(data.seVsCs.questionEn, data.seVsCs.questionAr, data.seVsCs.questionZh, data.seVsCs.questionMs)}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/30 transition-colors">
                        <h4 className="text-xl font-black text-blue-300 mb-6 pb-4 border-b border-white/10">
                          {getStr(data.titleEn, data.titleAr, data.titleZh, data.titleMs)}
                        </h4>
                        <ul className="space-y-4">
                          {getStr(data.seVsCs.sePointsEn, data.seVsCs.sePointsAr, data.seVsCs.sePointsZh, data.seVsCs.sePointsMs).map((p: string, i: number) => (
                            <li key={i} className="flex gap-3 text-gray-200">
                              <CheckCircle size={20} className="text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                              <span className="font-medium leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5">
                        <h4 className="text-xl font-black text-gray-400 mb-6 pb-4 border-b border-white/5">
                          {getStr(data.seVsCs.otherTitleEn, data.seVsCs.otherTitleAr, data.seVsCs.otherTitleZh, data.seVsCs.otherTitleMs)}
                        </h4>
                        <ul className="space-y-4 opacity-70">
                          {getStr(data.seVsCs.otherPointsEn, data.seVsCs.otherPointsAr, data.seVsCs.otherPointsZh, data.seVsCs.otherPointsMs).map((p: string, i: number) => (
                            <li key={i} className="flex gap-3">
                              <ArrowRight size={20} className="text-white shrink-0 mt-0.5 rtl:hidden" />
                              <ArrowLeft size={20} className="text-white shrink-0 mt-0.5 ltr:hidden" />
                              <span className="font-medium leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Fixed Floating WhatsApp CTA (Desktop Bottom Right / Mobile Bottom) ── */}
      <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-50 flex flex-col items-end`}>
        <a href="https://wa.me/601158722903" className="group relative flex items-center gap-3 bg-green-500 text-white font-black px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all hover:scale-105 active:scale-95">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          <MessageCircle size={28} className="animate-pulse" />
          <span className="hidden md:block">{getStr("Secure Your Admission Free", "تأمين قبولك المجاني الآن", "立即免费锁定入学名额", "Lindungi Kemasukan Percuma Anda")}</span>
        </a>
      </div>

    </div>
  );
}
