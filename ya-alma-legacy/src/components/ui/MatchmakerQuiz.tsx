"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/lib/LanguageContext";
import { Sparkles, ArrowRight, ArrowLeft, GraduationCap, MapPin, Globe, CheckCircle2, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

export default function MatchmakerQuiz() {
  const { t_dyn, language, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = start, 1..3 = questions, 4 = calculating, 5 = results
  const [answers, setAnswers] = useState<any>({ budget: "", field: "", type: "" });
  const [results, setResults] = useState<any[]>([]);
  const [loadingMsg, setLoadingMsg] = useState("");

  const steps = [
    {
      id: "type",
      title: t_dyn("What kind of campus do you prefer?", "ما هو نوع الحرم الجامعي الذي تفضله؟", "您喜欢哪种类型的校园？", "Apakah jenis kampus yang anda suka?"),
      options: [
        { val: "city", label: t_dyn("City Center (Modern & Busy)", "في قلب المدينة (صاخب وحديث)", "市中心", "Pusat Bandar"), icon: "🏙️" },
        { val: "nature", label: t_dyn("Nature & Huge Campus", "طبيعة وحرم جامعي ضخم", "大自然与大校园", "Alam & Kampus Besar"), icon: "🌳" },
      ]
    },
    {
      id: "budget",
      title: t_dyn("What is your estimated annual budget?", "ما هي ميزانيتك السنوية التقريبية؟", "您的预估年度预算是多少？", "Apakah anggaran belanjawan tahunan anda?"),
      options: [
        { val: "high", label: t_dyn("Above 30,000 MYR (Premium)", "أكثر من 30,000 رنجت", "超过 30,000 MYR", "Lebih 30,000 MYR"), icon: "💎" },
        { val: "med", label: t_dyn("15,000 - 30,000 MYR", "بين 15,000 و 30,000 رنجت", "15,000 - 30,000 MYR", "15,000 - 30,000 MYR"), icon: "💰" },
        { val: "low", label: t_dyn("Under 15,000 MYR (Economy)", "أقل من 15,000 رنجت", "低于 15,000 MYR", "Bawah 15,000 MYR"), icon: "📉" },
      ]
    },
    {
      id: "field",
      title: t_dyn("What field are you pursuing?", "ما هو التخصص الذي تحلم به؟", "您追求的领域是什么？", "Apakah bidang yang anda minati?"),
      options: [
        { val: "eng", label: t_dyn("Engineering & Tech", "هندسة وتقنية", "工程与科技", "Kejuruteraan & Teknologi"), icon: "💻" },
        { val: "med", label: t_dyn("Medical & Health", "طب وصحة", "医疗与健康", "Perubatan & Kesihatan"), icon: "⚕️" },
        { val: "biz", label: t_dyn("Business & Arts", "أعمال وفنون", "商业与艺术", "Perniagaan & Seni"), icon: "📊" },
      ]
    }
  ];

  const triggerSearch = async () => {
    setStep(4);
    const msgs = [
      t_dyn("Scanning 150+ Universities...", "جاري البحث في أكثر من 150 جامعة...", "正在扫描...", "Sedang mengimbas..."),
      t_dyn("Matching your budget...", "جاري مطابقة ميزانيتك...", "匹配预算...", "Memadankan belanjawan..."),
      t_dyn("Finding the perfect fit...", "جاري استخراج الخيار المثالي...", "寻找完美搭配...", "Mencari yang sempurna..."),
    ];

    for (let i = 0; i < msgs.length; i++) {
      setLoadingMsg(msgs[i]);
      await new Promise(r => setTimeout(r, 800));
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities`);
      let all = await res.json();
      
      // Pseudo AI Match Engine Logic
      // Since our DB doesn't have deep taxonomy yet, we simulate smart sorting based on price & random weights.
      all = all.map((u:any) => {
        let score = 50;
        const fees = u.registrationFeeMyr + u.visaFeeMyr;
        if (answers.budget === "low" && fees < 2000) score += 30;
        if (answers.budget === "high" && fees > 3000) score += 30;
        if (answers.type === "city" && u.location.toLowerCase().includes("kuala lumpur")) score += 20;
        if (answers.type === "nature" && !u.location.toLowerCase().includes("lumpur")) score += 20;

        score += Math.floor(Math.random() * 20); // Spice it up
        return { ...u, matchScore: Math.min(score, 99) }; // Max 99% match
      });

      const best = all.sort((a:any, b:any) => b.matchScore - a.matchScore).slice(0, 3);
      setResults(best);
      setStep(5);

      // Celebrate
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C89B3C', '#1A2846', '#ffffff']
      });

    } catch (err) {
      setStep(0);
      setIsOpen(false);
    }
  };

  const handleSelect = (val: string) => {
    const s = steps[step - 1];
    setAnswers({ ...answers, [s.id]: val });
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      triggerSearch();
    }
  };

  if (!isOpen) {
    return (
      <div className="flex justify-center w-full my-12" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="relative group cursor-pointer" onClick={() => { setIsOpen(true); setStep(1); }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-brand-gold)] via-yellow-400 to-[var(--color-brand-gold)] rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative flex items-center gap-4 bg-[var(--color-brand-navy)] text-white px-8 md:px-12 py-5 md:py-6 rounded-[2rem] leading-none">
            <span className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#0b0f19]/10 rounded-full">
              <Sparkles className="text-[var(--color-brand-gold)] animate-pulse" size={24} />
            </span>
            <div className="text-start">
              <span className="block text-[#C89B3C] font-black tracking-widest text-xs uppercase mb-1">{t_dyn("New AI Feature", "ميزة الذكاء الاصطناعي الجديدة", "新人工智能功能", "Ciri AI Baru")}</span>
              <span className="block font-black text-xl md:text-2xl">{t_dyn("Find My Perfect University", "اكتشف جامعتك المثالية", "找到我完美的大学", "Cari Universiti Sempurna Anda")}</span>
            </div>
            <ArrowRight className={`w-6 h-6 ml-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all ${isRtl ? "rotate-180 ml-0 mr-4 group-hover:-translate-x-2" : ""}`} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bg-white dark:bg-[#0b0f19] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 flex">
           <div className="h-full bg-[var(--color-brand-gold)] transition-all duration-500 ease-out" style={{ width: `${(step / (steps.length+1)) * 100}%` }}></div>
        </div>
        
        {step > 0 && step < 4 && (
          <button className="absolute top-6 left-6 text-gray-400 hover:text-gray-800 dark:text-gray-200" onClick={() => step === 1 ? setIsOpen(false) : setStep(step - 1)}>
            <ArrowLeft className={isRtl ? 'rotate-180' : ''} />
          </button>
        )}
        <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500" onClick={() => setIsOpen(false)}>
          <RotateCcw size={20} />
        </button>

        <div className="p-8 md:p-12 text-center min-h-[400px] flex flex-col justify-center">
          
          {/* Question Steps */}
          {step > 0 && step < 4 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">
              <h2 className="text-3xl font-black text-[var(--color-brand-navy)] leading-tight max-w-sm mx-auto">
                {steps[step - 1].title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps[step - 1].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSelect(opt.val)}
                    className="p-6 border-2 border-gray-100 dark:border-gray-800 rounded-2xl hover:border-[var(--color-brand-gold)] hover:bg-yellow-50/50 transition-all active:scale-95 group text-left flex items-center gap-4"
                  >
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{opt.icon}</span>
                    <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-[var(--color-brand-navy)]">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading Engine Step */}
          {step === 4 && (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-gray-100 dark:border-gray-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[var(--color-brand-gold)] rounded-full border-t-transparent animate-spin"></div>
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-brand-navy)]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 animate-pulse">{loadingMsg}</h3>
            </div>
          )}

          {/* Results Step */}
          {step === 5 && (
            <div className="text-left w-full h-full pb-6" dir={isRtl ? 'rtl' : 'ltr'}>
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                  {t_dyn("Analysis Complete", "اكتمل التحليل", "分析完成", "Analisis Selesai")}
                </span>
                <h2 className="text-3xl font-black text-[var(--color-brand-navy)]">
                  {t_dyn("Your Perfect Matches 🎉", "أفضل الخيارات لك 🎉", "您的完美搭配 🎉", "Padanan Sempurna Anda 🎉")}
                </h2>
              </div>

              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {results.map((uni, idx) => (
                  <Link href={`/universities/${uni.id}`} key={idx} onClick={() => setIsOpen(false)} className="block focus:outline-none">
                    <div className="relative bg-white dark:bg-[#0b0f19] border border-gray-200 dark:border-gray-700 hover:border-[var(--color-brand-gold)] p-5 rounded-2xl flex items-center gap-5 hover:shadow-xl transition-all group">
                      <div className="w-16 h-16 bg-gray-50 dark:bg-[#11192d] flex items-center justify-center rounded-xl p-2 shrink-0 border border-gray-100 dark:border-gray-800 group-hover:border-[var(--color-brand-gold)]/30">
                        <span className="text-2xl font-bold text-gray-300 opacity-50 block">{uni.logoUrl || "U"}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-black text-lg text-gray-900 dark:text-gray-100 group-hover:text-[var(--color-brand-navy)] line-clamp-1">
                            {t_dyn(uni.name, uni.nameAr, uni.nameZh, uni.nameMs || uni.name)}
                          </h3>
                          <span className="text-[var(--color-brand-gold)] font-black text-lg">{uni.matchScore}%</span>
                        </div>
                        <p className="text-gray-500 text-sm flex items-center gap-1.5">
                           <MapPin size={12}/> {t_dyn(uni.location, uni.locationAr, uni.locationZh, uni.locationMs || uni.location)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
