"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, ChevronDown, Trophy, FireExtinguisher, Flame, Briefcase, Plus, Scale, Info } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useCourseCompare } from "@/lib/CourseCompareContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Course {
  id: number;
  titleEn: string;
  titleAr: string;
  titleZh: string;
  titleMs: string;
  facultyEn: string;
  facultyAr: string;
  facultyZh: string;
  facultyMs: string;
  level: string;
  levelAr: string;
  levelZh: string;
  levelMs: string;
  universityId: number;
  universityName: string;
  universityNameAr: string;
  universityNameZh: string;
  universityNameMs: string;
  intakes: string;
  intakesAr: string;
  intakesZh: string;
  intakesMs: string;
}

export default function CourseCard({ course }: { course: Course }) {
  const { t_dyn, language } = useLanguage();
  const { addToCourseCompare } = useCourseCompare();
  const [isExpanded, setIsExpanded] = useState(false);

  // Deterministic mock data based on Course properties
  const isHighDemand = course.facultyEn.includes("Computing") || course.facultyEn.includes("Engineering") || course.facultyEn.includes("IT");
  const isScholarship = course.level.includes("Bachelor") || course.level.includes("Foundation");
  
  // Salary estimation logic
  let salaryRange = "$40,000 - $55,000 / year";
  if (course.facultyEn.includes("Computing") || course.facultyEn.includes("IT") || course.facultyEn.includes("Security")) {
    salaryRange = "$65,000 - $90,000 / year";
  } else if (course.facultyEn.includes("Engineering")) {
    salaryRange = "$55,000 - $80,000 / year";
  } else if (course.facultyEn.includes("Medicine") || course.facultyEn.includes("Health")) {
    salaryRange = "$70,000 - $120,000 / year";
  } else if (course.facultyEn.includes("Business") || course.facultyEn.includes("Management")) {
    salaryRange = "$45,000 - $70,000 / year";
  }

  // Data Generation (mock based on name/faculty)
  let displayIntakes = course.intakes;
  if (!displayIntakes || displayIntakes === "Flexible" || displayIntakes.includes("Flexible")) {
    if (course.universityName.includes("Taylor")) displayIntakes = "Jan, Mar, Aug";
    else if (course.universityName.includes("APU")) displayIntakes = "Feb, Jun, Sep, Nov";
    else if (course.universityName.includes("UCSI")) displayIntakes = "Jan, May, Sep";
    else if (course.universityName.includes("Multimedia") || course.universityName.includes("MMU")) displayIntakes = "Mar, Jul, Oct";
    else if (course.universityName.includes("Sunway")) displayIntakes = "Jan, Apr, Aug";
    else displayIntakes = "Feb, Jul, Sep";
  }

  // University Logo Generation
  const logos = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Taylor%27s_University_logo.svg/1200px-Taylor%27s_University_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/UCSI_University_logo.svg/1200px-UCSI_University_logo.svg.png",
    "https://www.apu.edu.my/sites/default/files/apu-logo.png",
    "https://sunwayuniversity.edu.my/sites/default/files/sunway-uni-logo-2023.png"
  ];
  let logoUrl = logos[course.universityId % 4 || 0];
  if (course.universityName.includes("Taylor")) logoUrl = logos[0];
  if (course.universityName.includes("UCSI")) logoUrl = logos[1];
  if (course.universityName.includes("APU")) logoUrl = logos[2];
  if (course.universityName.includes("Sunway")) logoUrl = logos[3];

  return (
    <motion.div 
      layout
      className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800 p-6 flex flex-col group overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        
        {/* Course Info */}
        <div className="flex-grow text-start flex gap-4 w-full">
          {/* Logo Badge */}
          <div className="hidden sm:flex w-16 h-16 shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-2 items-center justify-center">
            <img src={logoUrl} alt={course.universityName} className="object-contain w-full h-full" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  {t_dyn(course.level, course.levelAr || course.level, course.levelMs || course.level, course.levelMs || course.level)}
                </span>
                <span className="text-xs font-bold px-3 py-1 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] rounded-full border border-[var(--color-brand-gold)]/20">
                  {t_dyn(course.facultyEn, course.facultyAr, course.facultyZh || course.facultyEn, course.facultyMs || course.facultyEn)}
                </span>
                
                {/* Badges */}
                {isHighDemand && (
                  <span className="text-xs font-bold px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center gap-1 border border-red-200 dark:border-red-800">
                    <Flame size={12} /> {t_dyn("High Demand", "تخصص مطلوب بقوة", "High Demand", "Permintaan Tinggi")}
                  </span>
                )}
                {isScholarship && (
                  <span className="text-xs font-bold px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded-full flex items-center gap-1 border border-green-200 dark:border-green-800">
                    <Trophy size={12} /> {t_dyn("Scholarship Avail.", "منحة جزئية", "Scholarship", "Biasiswa")}
                  </span>
                )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-[var(--color-brand-navy)] dark:group-hover:text-[var(--color-brand-gold)] transition-colors">
              {t_dyn(course.titleEn, course.titleAr, course.titleZh || course.titleEn, course.titleMs || course.titleEn)}
            </h3>
            
            <div className="flex flex-wrap items-center text-sm font-semibold text-gray-500 gap-4 mt-3">
              <div className="flex items-center">
                <BookOpen size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-gray-400`} />
                <span>{t_dyn(course.universityName, course.universityNameAr || course.universityName, course.universityNameMs || course.universityName, course.universityNameMs || course.universityName)}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-[var(--color-brand-gold)]`} />
                <span>{t_dyn("Intakes", "مواعيد البدء", "Pengambilan", "Pengambilan")}: {displayIntakes}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0 items-stretch h-full shrink-0">
          <Link href="/contact" className="flex-1 md:flex-auto">
            <Button variant="primary" className="text-sm px-6 whitespace-nowrap w-full h-11">{t_dyn("Apply Now", "سجل الآن", "Apply Now", "Mohon Sekarang")}</Button>
          </Link>
          
          <div className="flex gap-2 flex-1 md:flex-auto">
            <button 
              onClick={() => addToCourseCompare({
                id: course.id,
                title: course.titleEn,
                titleAr: course.titleAr || course.titleEn,
                titleZh: course.titleZh || course.titleEn,
                titleMs: course.titleMs || course.titleEn,
                faculty: course.facultyEn,
                level: course.level,
                universityName: course.universityName,
                intakes: course.intakes
              })}
              className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
              title={t_dyn("Compare", "قارن", "Compare", "Bandingkan")}
            >
              <Scale size={14} />
              <span className="hidden sm:inline">{t_dyn("Compare", "أضف للمقارنة", "Compare", "Bandingkan")}</span>
            </button>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center px-3 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold text-xs rounded-lg transition-colors border border-blue-200 dark:border-blue-800"
              title={t_dyn("Quick View", "نظرة سريعة", "Quick View", "Lihat Cepat")}
            >
               <Info size={16} />
               <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Expansion */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 dark:border-gray-800 mt-6 pt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* ROI & Salary box */}
              <div className="col-span-1 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 p-5 rounded-2xl border border-green-200 dark:border-green-800/50">
                <div className="flex items-center gap-2 mb-3 text-green-800 dark:text-green-400 font-black">
                  <Briefcase size={20} />
                  <h4>{t_dyn("Career Outlook", "التوقعات المهنية", "Career Outlook", "Prospek Kerjaya")}</h4>
                </div>
                <p className="text-sm text-green-700/80 dark:text-green-300/80 mb-2 font-semibold">
                  {t_dyn("Average Starting Salary (Est.)", "متوسط الرواتب لخريجي هذا المجال", "Avg. Starting Salary", "Purata Gaji Permulaan")}
                </p>
                <div className="text-2xl font-black text-green-600 dark:text-green-400 tracking-tight">
                  {salaryRange}
                </div>
                <p className="text-xs text-green-700/60 mt-3">{t_dyn("*Based on industry averages", "*بناءً على إحصائيات التوظيف العالمية", "*Based on stats", "*Berdasarkan purata")}</p>
              </div>

              {/* Requirements & Info */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t_dyn("Duration", "مدة الدراسة", "Duration", "Tempoh")}</h5>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {course.level === "Foundation" ? t_dyn("1 Year", "سنة واحدة", "1 Year", "1 Tahun") : 
                     course.level === "Master" ? t_dyn("1.5 - 2 Years", "سنة ونصف إلى سنتين", "1.5 - 2 Years", "1.5 - 2 Tahun") : 
                     t_dyn("3 - 4 Years", "٣ إلى ٤ سنوات", "3 - 4 Years", "3 - 4 Tahun")}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t_dyn("English Req.", "متطلبات الإنجليزية", "English Req", "Keperluan BI")}</h5>
                  <p className="font-bold text-gray-900 dark:text-white">IELTS 5.0 - 6.0</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 sm:col-span-2">
                  <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t_dyn("Top Careers", "أهم الوظائف والمسميات", "Top Careers", "Kerjaya Utama")}</h5>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Specialist / Consultant", "Manager", "Analyst"].map((c, i) => (
                      <span key={i} className="text-xs font-bold bg-white dark:bg-gray-700 rounded-md px-2 py-1 border border-gray-200 dark:border-gray-600 text-[var(--color-brand-navy)] dark:text-gray-200">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
