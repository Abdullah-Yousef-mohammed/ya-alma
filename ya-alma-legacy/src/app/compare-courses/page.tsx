"use client";

import React from "react";
import { useCourseCompare } from "@/lib/CourseCompareContext";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, X, Plus, ArrowUpRight } from "lucide-react";

export default function CompareCoursesPage() {
  const { courseCompareList, removeFromCourseCompare, clearCourseCompare } = useCourseCompare();
  const { language, t_dyn } = useLanguage();

  if (courseCompareList.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#11192d] flex flex-col items-center justify-center text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <X size={48} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-black mb-4 text-[var(--color-brand-navy)] dark:text-white">
          {t_dyn("Compare List is Empty", "قائمة المقارنة فارغة", "Compare List Empty", "Senarai Banding Kosong")}
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          {t_dyn("Add courses to your compare list to see them side by side.", "قم بإضافة تخصصات لقائمة المقارنة لرؤيتها وتفضيلاتها.", "Add courses to compare.", "Tambah kursus untuk bandingkan.")}
        </p>
        <Link href="/courses">
          <Button variant="primary" className="px-8">{t_dyn("Browse Courses", "تصفح التخصصات", "Browse Courses", "Semak imbas")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-[#11192d]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 items-start md:items-end mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--color-brand-navy)] dark:text-white tracking-tight mb-4 flex items-center gap-4">
              {t_dyn("Compare Courses", "مقارنة التخصصات", "Compare Courses", "Bandingkan Kursus")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 font-medium max-w-2xl text-lg">
              {t_dyn("Make the right choice by comparing your favorite programs side by side.", "تأكد من اختيارك الدقيق عبر مقارنة برامجك المفضلة.", "Make the right choice by comparing.", "Buat pilihan yang tepat.")}
            </p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" onClick={clearCourseCompare} className="text-gray-600 dark:text-gray-300">
               {t_dyn("Clear List", "مسح القائمة", "Clear List", "Kosongkan")}
             </Button>
             <Link href="/contact">
               <Button variant="primary" className="shadow-lg">{t_dyn("Apply for Selected", "تسجيل التخصص المفضل", "Apply", "Mohon")}</Button>
             </Link>
          </div>
        </div>

        {/* Comparison Table / Grid */}
        <div className="bg-white dark:bg-[#0b0f19] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr>
                  <th className="p-6 min-w-[180px] border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                     <span className="text-xs font-black uppercase text-gray-400 tracking-wider">Features</span>
                  </th>
                  {courseCompareList.map(course => (
                    <th key={course.id} className="p-6 text-center min-w-[250px] w-[33%] align-top border-b border-gray-100 dark:border-gray-800 relative group">
                      <button 
                        onClick={() => removeFromCourseCompare(course.id)}
                        className="absolute right-4 top-4 rtl:right-auto rtl:left-4 p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title={t_dyn("Remove", "حذف", "Remove", "Padam")}
                      >
                        <X size={16} />
                      </button>
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-[10px] font-bold mb-3 mx-auto">
                        {t_dyn(course.level, course.level, course.level, course.level)}
                      </span>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight mb-2 mx-auto">
                        {t_dyn(course.title, course.titleAr, course.titleZh, course.titleMs)}
                      </h3>
                      <p className="text-[var(--color-brand-gold)] font-bold text-sm mb-4 mx-auto">
                        {t_dyn(course.universityName, course.universityName, course.universityName, course.universityName)}
                      </p>
                    </th>
                  ))}
                  {/* Empty Fillers */}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => (
                    <th key={`empty-${i}`} className="p-6 text-center min-w-[250px] w-[33%] border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                      <Link href="/courses" className="block h-full group">
                        <div className="h-full border-2 border-dashed border-gray-200 dark:border-gray-700 group-hover:border-[var(--color-brand-gold)] rounded-2xl flex flex-col items-center justify-center text-center p-8 min-h-[160px] transition-colors">
                          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-[var(--color-brand-gold)]/10 flex items-center justify-center mb-3 mx-auto transition-colors">
                            <Plus size={20} className="text-gray-400 group-hover:text-[var(--color-brand-gold)] transition-colors" />
                          </div>
                          <span className="text-sm font-bold text-gray-400 group-hover:text-[var(--color-brand-navy)] dark:group-hover:text-white transition-colors">
                            {t_dyn("Add Course", "إضافة تخصص", "Add", "Tambah")}
                          </span>
                        </div>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Faculty Row */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-500 bg-gray-50 dark:bg-gray-800/50">
                    {t_dyn("Field of Study", "المجال والتخصص", "Field", "Bidang")}
                  </td>
                  {courseCompareList.map(course => (
                    <td key={course.id} className="p-5 text-center border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-800 dark:text-gray-200">
                      {course.faculty}
                    </td>
                  ))}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i} className="border-b border-gray-100 dark:border-gray-800"></td>)}
                </tr>

                {/* Duration Row */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-500 bg-gray-50 dark:bg-gray-800/50">
                    {t_dyn("Duration", "مدة الدراسة", "Duration", "Tempoh")}
                  </td>
                  {courseCompareList.map(course => (
                    <td key={course.id} className="p-5 text-center border-b border-gray-100 dark:border-gray-800 font-bold text-gray-800 dark:text-gray-200">
                      {course.level === "Foundation" ? t_dyn("1 Year", "سنة واحدة", "1 Year", "1 Tahun") : course.level === "Master" ? t_dyn("1.5 Years", "سنة ونصف", "1.5 Years", "1.5 Tahun") : t_dyn("3-4 Years", "٣-٤ سنوات", "3-4 Years", "3-4 Tahun")}
                    </td>
                  ))}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i} className="border-b border-gray-100 dark:border-gray-800"></td>)}
                </tr>

                {/* Intakes Row */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-500 bg-gray-50 dark:bg-gray-800/50">
                    {t_dyn("Intakes", "تاريخ البدء", "Intakes", "Pengambilan")}
                  </td>
                  {courseCompareList.map(course => {
                    let displayIntakes = course.intakes;
                    if (!displayIntakes || displayIntakes === "Flexible" || displayIntakes.includes("Flexible")) {
                      if (course.universityName.includes("Taylor")) displayIntakes = "Jan, Mar, Aug";
                      else if (course.universityName.includes("APU")) displayIntakes = "Feb, Jun, Sep, Nov";
                      else if (course.universityName.includes("UCSI")) displayIntakes = "Jan, May, Sep";
                      else if (course.universityName.includes("Multimedia") || course.universityName.includes("MMU")) displayIntakes = "Mar, Jul, Oct";
                      else if (course.universityName.includes("Sunway")) displayIntakes = "Jan, Apr, Aug";
                      else displayIntakes = "Feb, Jul, Sep";
                    }
                    return (
                      <td key={course.id} className="p-5 text-center border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-800 dark:text-gray-200">
                        {displayIntakes}
                      </td>
                    );
                  })}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i} className="border-b border-gray-100 dark:border-gray-800"></td>)}
                </tr>

                {/* English Req Row */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-bold text-sm text-gray-500 bg-gray-50 dark:bg-gray-800/50">
                    {t_dyn("English Req.", "شرط الإنجليزية", "English Req", "Syarat BI")}
                  </td>
                  {courseCompareList.map(course => (
                    <td key={course.id} className="p-5 text-center border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        <Check size={16} className="text-green-500" />
                        <span className="font-semibold">IELTS 5.5 - 6.0</span>
                      </div>
                    </td>
                  ))}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i} className="border-b border-gray-100 dark:border-gray-800"></td>)}
                </tr>

                {/* Estimated Cost Row */}
                <tr className="bg-[var(--color-brand-navy)]/5 dark:bg-blue-900/10">
                  <td className="p-5 border-b border-[var(--color-brand-navy)]/10 dark:border-blue-800/30 font-black text-[var(--color-brand-navy)] dark:text-blue-400">
                    {t_dyn("Est. Total Fees", "الرسوم الكلية التقديرية", "Estimated Fees", "Anggaran Yuran")}
                  </td>
                  {courseCompareList.map(course => (
                    <td key={course.id} className="p-5 text-center border-b border-[var(--color-brand-navy)]/10 dark:border-blue-800/30">
                      <div className="text-xl font-black text-gray-900 dark:text-white">$12,000 - $18,000</div>
                      <span className="text-xs text-gray-500 font-medium">Over full duration</span>
                    </td>
                  ))}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i} className="border-b border-[var(--color-brand-navy)]/10 dark:border-blue-800/30"></td>)}
                </tr>

                {/* Action Row */}
                <tr>
                  <td className="p-5 bg-gray-50 dark:bg-gray-800/50"></td>
                  {courseCompareList.map(course => (
                    <td key={course.id} className="p-5">
                      <Link href="/contact">
                        <Button variant="outline" className="w-full flex justify-center items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                          {t_dyn("Apply Now", "سجل الآن", "Apply", "Mohon")}
                          <ArrowUpRight size={16} />
                        </Button>
                      </Link>
                    </td>
                  ))}
                  {[...Array(3 - courseCompareList.length)].map((_, i) => <td key={i}></td>)}
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
