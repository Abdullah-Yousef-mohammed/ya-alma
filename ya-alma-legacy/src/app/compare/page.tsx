"use client";

import React, { useEffect, useState } from "react";
import { useCompare } from "@/lib/CompareContext";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle, ArrowLeft, FileText } from "lucide-react";

export default function ComparePage() {
  const { compareList, removeFromCompare } = useCompare();
  const { language, t_dyn, isRtl } = useLanguage();
  const { formatPrice } = useCurrency();
  
  const [fullData, setFullData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (compareList.length === 0) {
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      setLoading(true);
      try {
        const promises = compareList.map(c => 
          fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities/${c.id}`).then(res => res.json())
        );
        const results = await Promise.all(promises);
        setFullData(results);
      } catch (err) {
        console.error("Error fetching compare data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [compareList]);

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pt-32 pb-20 flex flex-col items-center justify-center text-center" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="bg-white dark:bg-[#0b0f19] p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 max-w-lg mb-8">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-gray-200 mb-4">{t_dyn("Compare Box is Empty", "صندوق المقارنة فارغ", "比较框为空", "Kotak Banding Kosong")}</h2>
          <p className="text-gray-500 mb-8">{t_dyn("Go back to the universities list and select up to 3 universities to compare them side by side.", "عد إلى قائمة الجامعات وحدد حتى 3 جامعات للمقارنة بينها.", "返回大学列表并选择最多3所大学进行并排比较。", "Kembali ke senarai universiti dan pilih sehingga 3 universiti untuk membandingkannya.")}</p>
          <Link href="/universities">
            <Button variant="primary" className="mx-auto flex items-center justify-center gap-2">
              <ArrowLeft size={18} />
              {t_dyn("Browse Universities", "تصفح الجامعات", "浏览大学", "Lihat Universiti")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pt-32 pb-20" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black text-[var(--color-brand-navy)] mb-2">{t_dyn("Compare Universities", "مقارنة الجامعات", "比较大学", "Bandingkan Universiti")}</h1>
            <p className="text-gray-500">{t_dyn("Side by side evaluation of your top choices.", "تقييم شامل للجامعات جنباً إلى جنب لمساعدتك في اتخاذ القرار.", "面对面评估您的最佳选择。", "Penilaian sebelah menyebelah pilihan terbaik anda.")}</p>
          </div>
          <Link href="/universities">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={18} className={isRtl ? "rotate-180" : ""} />
              {t_dyn("Back to List", "العودة للقائمة", "返回列表", "Kembali ke Senarai")}
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="flex gap-4 animate-pulse overflow-hidden">
             <div className="w-64 h-[600px] bg-gray-200 rounded-3xl shrink-0"></div>
             {[1,2,3].map(i => <div key={i} className="flex-1 h-[600px] bg-white dark:bg-[#0b0f19] rounded-3xl border border-gray-100 dark:border-gray-800 min-w-[300px]"></div>)}
          </div>
        ) : (
          <div className="bg-white dark:bg-[#0b0f19] rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-x-auto relative">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-100 dark:border-gray-800">
                  <th className="bg-gray-50 dark:bg-[#11192d] p-6 sticky left-0 z-20 w-64 border-r border-gray-100 dark:border-gray-800">
                     <span className="font-black text-gray-400 uppercase tracking-widest text-xs">{t_dyn("Features", "المميزات", "特征", "Ciri-ciri")}</span>
                  </th>
                  {fullData.map((uni) => (
                    <th key={uni.id} className="p-8 text-center border-r border-gray-100 dark:border-gray-800 last:border-0 relative min-w-[300px]">
                      <button 
                        onClick={() => removeFromCompare(uni.id)}
                        className="absolute right-4 top-4 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <XCircle size={24} />
                      </button>
                      <div className="w-24 h-24 bg-gray-50 dark:bg-[#11192d] rounded-2xl mx-auto mb-6 flex items-center justify-center p-4">
                         <span className="text-3xl font-black text-gray-300 opacity-50">{uni.logoUrl}</span>
                      </div>
                      <h3 className="text-xl font-black text-[var(--color-brand-navy)] mb-2 leading-tight">
                        {t_dyn(uni.name, uni.nameAr, uni.nameZh, uni.nameMs || uni.name)}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">{t_dyn(uni.location, uni.locationAr, uni.locationZh, uni.locationMs || uni.location)}</p>
                      
                      <Link href={`/universities/${uni.id}`}>
                        <Button variant="outline" className="w-full mb-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-[var(--color-brand-navy)] hover:border-[var(--color-brand-navy)]">{t_dyn("View Profile", "عرض الملف", "查看大学", "Lihat Profil")}
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="primary" className="w-full">{t_dyn("Apply Now", "قدم الآن", "现在申请", "Mohon Sekarang")}</Button>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Ranking */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("Global Ranking", "التصنيف العالمي", "全球排名", "Kedudukan Global")}</td>
                  {fullData.map((uni) => (
                    <td key={uni.id} className="p-6 text-center text-gray-600 dark:text-gray-400 border-r border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="inline-flex items-center justify-center font-black bg-yellow-50 text-[var(--color-brand-gold)] px-4 py-2 rounded-full border border-yellow-100">
                         {uni.rankings?.[0] || "-"}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Type */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("University Type", "نوع الجامعة", "大学类型", "Jenis Universiti")}</td>
                  {fullData.map((uni) => (
                    <td key={uni.id} className="p-6 text-center text-gray-600 dark:text-gray-400 border-r border-gray-100 dark:border-gray-800 last:border-0 font-semibold">
                      {uni.isPrivate ? t_dyn('Private', 'خاصة', '私立', 'Swasta') : t_dyn('Public', 'حكومية', '公立', 'Awam')}
                    </td>
                  ))}
                </tr>
                {/* State */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("State", "الولاية", "州属", "Negeri")}</td>
                  {fullData.map((uni) => (
                    <td key={uni.id} className="p-6 text-center text-gray-600 dark:text-gray-400 border-r border-gray-100 dark:border-gray-800 last:border-0">
                      {t_dyn(uni.state, uni.state, uni.state, uni.stateMs || uni.state)}
                    </td>
                  ))}
                </tr>
                {/* Est Fees */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("Est. First Year Fees", "الرسوم التقديرية (السنة الأولى)", "第一年预估学费", "Yuran Anggaran")}</td>
                  {fullData.map((uni) => {
                     const total = (uni.registrationFeeMyr || 0) + (uni.visaFeeMyr || 0) + (uni.depositFeeMyr || 0);
                     return (
                      <td key={uni.id} className="p-6 text-center text-[var(--color-brand-navy)] font-black text-lg border-r border-gray-100 dark:border-gray-800 last:border-0">
                        {total > 0 ? formatPrice(total) : t_dyn("Contact Us", "تواصل معنا", "联系我们", "Hubungi Kami")}
                      </td>
                     );
                  })}
                </tr>
                {/* Courses Count */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("Available Courses", "التخصصات المتاحة", "可选专业数量", "Program Tersedia")}</td>
                  {fullData.map((uni) => (
                    <td key={uni.id} className="p-6 text-center text-gray-600 dark:text-gray-400 border-r border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-lg font-bold">
                        {uni.courseCount} {t_dyn("Programs", "برنامج", "课程", "Program")}
                      </span>
                    </td>
                  ))}
                </tr>
                {/* Free Offer */}
                <tr className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition-colors">
                  <td className="p-6 bg-gray-50 dark:bg-[#11192d] sticky left-0 z-10 border-r border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">{t_dyn("Free Offer Letter", "رسالة قبول مجانية", "免费录取通知书", "Surat Tawaran Percuma")}</td>
                  {fullData.map((uni) => (
                    <td key={uni.id} className="p-6 text-center border-r border-gray-100 dark:border-gray-800 last:border-0">
                      {uni.freeOfferLetter ? (
                        <CheckCircle2 className="text-green-500 mx-auto w-8 h-8"/>
                      ) : (
                        <XCircle className="text-gray-300 mx-auto w-7 h-7"/>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
