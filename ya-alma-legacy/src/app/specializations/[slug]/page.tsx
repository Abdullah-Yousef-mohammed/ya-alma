"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { specializationsData, SpecializationData } from "@/data/specializations";
import { Award, Briefcase, DollarSign, BookOpen, GraduationCap, ArrowRight, ArrowLeft, CheckCircle, Globe, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SpecializationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, t } = useLanguage();
  const isRtl = language === "ar";
  
  const [data, setData] = useState<SpecializationData | null>(null);
  const [loading, setLoading] = useState(true);
  const { currency, formatPrice } = useCurrency();

  useEffect(() => {
    const fetchSp = async () => {
      try {
        const res = await fetch(`https://ya-alma.onrender.com/api/specializations/slug/${slug}`);
        if (res.ok) {
           const raw = await res.json();
           setData({
              ...raw,
              degreeLevels: JSON.parse(raw.degreeLevelsJson || "[]"),
              topUniversities: JSON.parse(raw.topUniversitiesJson || "[]"),
              budgetUniversities: JSON.parse(raw.budgetUniversitiesJson || "[]"),
              courseYears: JSON.parse(raw.courseYearsJson || "[]"),
              careerJobsEn: JSON.parse(raw.careerJobsEnJson || "[]"),
              careerJobsAr: JSON.parse(raw.careerJobsArJson || "[]"),
              seVsCs: raw.seVsCsJson ? JSON.parse(raw.seVsCsJson) : undefined,
              countryComparisons: JSON.parse(raw.countryComparisonsJson || "[]"),
              spotlightUniversities: JSON.parse(raw.spotlightUniversitiesJson || "[]")
           });
        } else {
           console.error("Not found in API");
        }
      } catch(e) { console.error(e); }
      setLoading(false);
    };
    
    if (slug) {
      fetchSp();
    }
  }, [slug]);

  // Helper to intercept USD or RM strings embedded in text, using RM as the base currency
  // and output dynamically using CurrencyContext formatPrice.
  const formatRange = (rangeText: string) => {
    if (!rangeText) return "";
    
    // First, handle legacy USD strings (convert USD -> RM base -> formatted)
    let updatedText = rangeText.replace(/\$\d{1,3}(,\d{3})*/g, (match) => {
      const usdValue = parseInt(match.replace(/[$,]/g, ""));
      const approxMyrBase = usdValue * 4.5;
      return formatPrice(approxMyrBase);
    });

    // Second, handle MYR/RM strings that the admin inputs (e.g. "RM 18,000")
    updatedText = updatedText.replace(/RM\s*\d{1,3}(,\d{3})*|\d{1,3}(,\d{3})*\s*RM/gi, (match) => {
      const myrValue = parseInt(match.replace(/[^\d]/g, ""));
      return formatPrice(myrValue);
    });

    return updatedText.replace(/دولار/g, ""); // Clean up any lingering Arabic 'dollars' text
  };

  if (loading || !slug) return <div className="min-h-screen pt-32 text-center text-xl">Loading...</div>;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-500">Specialization Not Found</p>
          <Link href="/courses" className="mt-6 inline-block text-[var(--color-brand-gold)] font-bold hover:underline">Browse All Programs →</Link>
        </div>
      </div>
    );
  }

  const isZh = language === "zh";
  return <SpecializationContent data={data} language={language} isRtl={isRtl} isZh={isZh} t={t} formatRange={formatRange} />;
}

function SpecializationContent({ data, language, isRtl, isZh, t, formatRange }: { data: SpecializationData; language: string; isRtl: boolean; t: any; formatRange: (text: string) => string }) {

  const str = (en: any, ar: any, zh?: any) => {
    if (isZh && zh) return zh;
    if (isRtl && ar) return ar;
    return en;
  };

  return (
    <div className="min-h-screen bg-white pb-20" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* ── Hero Banner ── */}
      <div className="bg-[var(--color-brand-gold)] pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {str(data.titleEn, data.titleAr, data.titleZh)}
          </h1>
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            {str(data.heroTaglineEn, data.heroTaglineAr, data.heroTaglineZh)}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">

        {/* ── Introduction Text ── */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-10 border border-gray-100">
          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-line font-medium">
            {str(data.introEn, data.introAr, data.introZh)}
          </div>
          <a href="#whatsapp" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <MessageCircle size={20} />
            {isRtl ? "تحدث مع مستشار تعليمي" : "Chat with an Academic Consultant"}
          </a>
        </div>

        {/* ── Degree Levels & Fees Table ── */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-6">
            {isRtl ? `الدرجات العلمية في ${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")}` : `Degree Levels in ${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")}`}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-[var(--color-brand-gold)] text-white">
                  <th className="px-6 py-4 font-bold text-base">{str("Degree", "الدرجة العلمية", "学位")}</th>
                  <th className="px-6 py-4 font-bold text-base">{str("Annual Tuition Fees", "الرسوم الدراسية السنوية", "年度学费")}</th>
                  <th className="px-6 py-4 font-bold text-base">{str("Duration", "المدة الدراسية", "学制")}</th>
                </tr>
              </thead>
              <tbody>
                {data.degreeLevels.map((deg, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-bold text-gray-900">{str(deg.titleEn, deg.titleAr, deg.titleZh)}</td>
                    <td className="px-6 py-4 font-semibold text-green-700">{str(formatRange(deg.feesRangeEn), formatRange(deg.feesRangeAr), formatRange(deg.feesRangeZh))}</td>
                    <td className="px-6 py-4 text-gray-600">{str(deg.durationEn, deg.durationAr, deg.durationZh)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            {isRtl ? "* تم احتساب الرسوم الدراسية بالدولار الأمريكي وقد تتغير حسب سعر الصرف." : "* Fees are calculated in USD and may vary based on exchange rates."}
          </p>
        </section>

        {/* ── Top Universities Table ── */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-4">
            {isRtl ? `أفضل الجامعات لدراسة ${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")} في ماليزيا` : `Best Universities for ${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")} in Malaysia`}
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            {isRtl ? "توجد في ماليزيا الكثير من الجامعات التي تقدم برامج استثنائية. فيما يلي جدول يضم أفضل الجامعات التي تقدم درجات علمية في هذا التخصص في ماليزيا :" : "Malaysia has many universities that offer exceptional programs. The following table lists the best universities offering degrees in this specialization in Malaysia:"}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-[var(--color-brand-gold)] text-white">
                  <th className="px-4 py-4 font-bold text-base">{str("University", "الجامعة", "大学")}</th>
                  <th className="px-4 py-4 font-bold text-base">{str("World Ranking", "التصنيف العالمي", "世界排名")}</th>
                  <th className="px-4 py-4 font-bold text-base">{str("Field Ranking", "التصنيف في التخصص", "专业排名")}</th>
                  <th className="px-4 py-4 font-bold text-base">{str("Annual Fees", "الرسوم الدراسية السنوية", "年度学费")}</th>
                  <th className="px-4 py-4 font-bold text-base">{str("Discount", "الخصم المتوفر", "可用折扣")}</th>
                </tr>
              </thead>
              <tbody>
                {data.topUniversities.map((uni, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-4">
                      <Link href={uni.href} className="font-bold text-blue-600 hover:text-[var(--color-brand-gold)] transition-colors">
                        {str(uni.nameEn, uni.nameAr, uni.nameZh)}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-gray-700 font-semibold">{uni.worldRanking}</td>
                    <td className="px-4 py-4 text-gray-700">{uni.fieldRanking}</td>
                    <td className="px-4 py-4 font-semibold text-green-700">{formatRange(uni.annualFeesUSD)}</td>
                    <td className="px-4 py-4">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                        {str(formatRange(uni.discountEn), formatRange(uni.discountAr), formatRange(uni.discountZh))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Budget Universities ── */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-4">
            {isRtl ? `جامعات خاصة رخيصة لدراسة ${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")}` : `Budget-Friendly Universities`}
          </h2>
          <p className="text-gray-600 mb-6">
            {isRtl ? "إذا أردت دراسة هذا التخصص في ماليزيا ومن دون أن تثقلك الرسوم الدراسية، فهذه خيارات من الجامعات الماليزية الخاصة ذات الرسوم الرخيصة والمنخفضة." : "If you want to study this major in Malaysia without high tuition fees, these are your most affordable private university options:"}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-[var(--color-brand-navy)] text-white">
                  <th className="px-6 py-4 font-bold text-base">{str("University", "الجامعة", "大学")}</th>
                  <th className="px-6 py-4 font-bold text-base">{isRtl ? "الرسوم الدراسية السنوية (بالدولار الأمريكي)" : "Annual Fees (USD)"}</th>
                </tr>
              </thead>
              <tbody>
                {data.budgetUniversities.map((uni, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4">
                      <Link href={uni.href} className="font-bold text-blue-600 hover:text-[var(--color-brand-gold)] transition-colors">
                        {str(uni.nameEn, uni.nameAr, uni.nameZh)}
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-bold text-green-700">{formatRange(uni.annualFeesUSD)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── YourUni CTA Banner ── */}
        <div className="bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-grow">
            <h3 className="text-2xl font-black text-[var(--color-brand-navy)] mb-2">
              {isRtl ? `مهتم بدراسة ${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")} في ماليزيا؟` : `Interested in Studying ${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")} in Malaysia?`}
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                isRtl ? "استشارة لاختيار الجامعة الأنسب للتخصص" : "Guidance to choose the right university",
                isRtl ? "استخراج القبول ودعم الطلب" : "Admission & application support",
                isRtl ? "المساعدة في توفير السكن من الجامعة" : "University accommodation assistance",
                isRtl ? "الاستقبال والمساعدة عند الوصول" : "Airport reception & arrival support"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <a href="https://wa.me/60143240499" className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-black rounded-2xl shadow-lg hover:bg-green-600 transition-colors text-lg w-full justify-center">
              <MessageCircle size={22} />
              {isRtl ? "سجل عبر يوريوني الوكيل الرسمي للجامعات الماليزية" : "Register via YourUni — Official Agent"}
            </a>
          </div>
        </div>

        {/* ── Course Syllabus by Year ── */}
        {data.courseYears.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-4">
              {isRtl ? `المواد الدراسية في تخصص ${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")}` : `Course Syllabus`}
            </h2>
            <p className="text-gray-600 mb-6">
              {isRtl ? "تمتد الدراسة لمدة 3 سنوات. وقد تختلف المواد المشتركة والتي يتم تدريسها في معظم الجامعات الماليزية هي :" : "The study program spans 3 years. The common subjects taught in most Malaysian universities are:"}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-brand-gold)] text-white">
                    <th className="px-6 py-4 font-bold text-base text-center">{isRtl ? "السنة" : "Year"}</th>
                    <th className="px-6 py-4 font-bold text-base">{isRtl ? "المواد الدراسية" : "Subjects"}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.courseYears.map((yr, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-black text-[var(--color-brand-navy)] text-center whitespace-nowrap">{str(yr.yearEn, yr.yearAr, yr.yearZh)}</td>
                      <td className="px-6 py-4">
                        <ul className="space-y-1">
                          {(str(yr.subjectsEn, yr.subjectsAr, yr.subjectsZh)).map((s, j) => (
                            <li key={j} className="text-gray-700 font-medium">{s}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── Career Prospects ── */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-4">
            {isRtl ? "الآفاق الوظيفية لخريجي هذا التخصص" : "Career Opportunities for Graduates"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isRtl ? "بحصولك على شهادة في هذا التخصص، ستتاح لك الفرصة للعمل في الأدوار التالية:" : "With a degree in this field, you can pursue the following career roles:"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(str(data.careerJobsEn, data.careerJobsAr, data.careerJobsZh)).map((job, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/5 transition-colors">
                <Briefcase size={18} className="text-[var(--color-brand-gold)] shrink-0" />
                <span className="font-semibold text-gray-800 text-sm">{job}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SE vs CS comparison (conditional) ── */}
        {data.seVsCs && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-6">
              {str(data.seVsCs.questionEn, data.seVsCs.questionAr, data.seVsCs.questionZh)}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-black text-[var(--color-brand-navy)] mb-4">
                  {isRtl ? data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "") : data.titleEn.replace("Study ", "").replace(" in Malaysia", "")}
                </h3>
                <ul className="space-y-3">
                  {(str(data.seVsCs.sePointsEn, data.seVsCs.sePointsAr, data.seVsCs.sePointsZh)).map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-black text-[var(--color-brand-navy)] mb-4">
                  {str(data.seVsCs.otherTitleEn, data.seVsCs.otherTitleAr, data.seVsCs.otherTitleZh)}
                </h3>
                <ul className="space-y-3">
                  {(str(data.seVsCs.otherPointsEn, data.seVsCs.otherPointsAr, data.seVsCs.otherPointsZh)).map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ── Country Comparison Table ── */}
        {data.countryComparisons.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-4">
              {isRtl ? "أفضل الوجهات لدراسة هذا التخصص" : "Best Countries to Study This Major"}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-center">
                <thead>
                  <tr className="bg-[var(--color-brand-navy)] text-white">
                    <th className="px-4 py-4 font-bold">{isRtl ? "الوجهة" : "Destination"}</th>
                    <th className="px-4 py-4 font-bold">{str("Duration", "المدة الدراسية", "学制")}</th>
                    <th className="px-4 py-4 font-bold">{isRtl ? "أعلى تصنيف عالمي" : "World Ranking"}</th>
                    <th className="px-4 py-4 font-bold">{isRtl ? "الرسوم الدراسية في السنة" : "Annual Fees"}</th>
                    <th className="px-4 py-4 font-bold">{isRtl ? "متوسط تكلفة المعيشة في السنة" : "Living Cost/Year"}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.countryComparisons.map((country, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${i === 0 ? "font-bold text-[var(--color-brand-navy)]" : ""}`}>
                      <td className="px-4 py-4 font-bold flex items-center justify-center gap-2">
                        <Globe size={16} className="text-[var(--color-brand-gold)]" />
                        {str(country.countryEn, country.countryAr, country.countryZh)}
                      </td>
                      <td className="px-4 py-4">{str(country.durationEn, country.durationAr, country.durationZh)}</td>
                      <td className="px-4 py-4">{country.worldRanking}</td>
                      <td className="px-4 py-4 text-green-700">{str(formatRange(country.feesRangeEn), formatRange(country.feesRangeAr), formatRange(country.feesRangeZh))}</td>
                      <td className="px-4 py-4 text-gray-600">{str(formatRange(country.livingCostEn), formatRange(country.livingCostAr), formatRange(country.livingCostZh))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── University Spotlights ── */}
        {data.spotlightUniversities.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)] mb-6">
              {isRtl ? "اختيار مستشاري يوريوني" : "YourUni Consultants' Top Picks"}
            </h2>
            <div className="space-y-6">
              {data.spotlightUniversities.map((uni, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-black text-[var(--color-brand-navy)] mb-3 flex items-center gap-2">
                    <Star size={20} className="text-[var(--color-brand-gold)]" />
                    <Link href={uni.href} className="hover:text-[var(--color-brand-gold)] transition-colors">
                      {str(uni.nameEn, uni.nameAr, uni.nameZh)}
                    </Link>
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {str(uni.descEn, uni.descAr, uni.descZh)}
                  </p>
                  <Link href={uni.href} className="mt-4 inline-flex items-center gap-1 text-[var(--color-brand-gold)] font-bold text-sm hover:underline">
                    {isRtl ? "عرض الجامعة" : "View University"}
                    {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Final CTA ── */}
        <div id="whatsapp" className="bg-[var(--color-brand-navy)] rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-black mb-4">
            {isRtl ? "هل تحتاج لمساعدة في التسجيل؟" : "Need Help with Registration?"}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            {isRtl ? "مستشارونا الأكاديميون يضمنون قبولك مجاناً وبدون أي رسوم خفية في أفضل الجامعات الماليزية." : "Our academic consultants will guarantee your admission for FREE with absolutely no hidden fees at the best Malaysian universities."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/60143240499" className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-black rounded-2xl shadow-lg hover:bg-green-600 transition-colors text-lg">
              <MessageCircle size={22} />
              {isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>
            <Link href="/universities" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-colors text-lg">
              <BookOpen size={22} />
              {isRtl ? "تصفح الجامعات" : "Browse Universities"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
