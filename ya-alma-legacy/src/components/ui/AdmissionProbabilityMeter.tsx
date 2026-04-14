"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Calculator } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

export default function AdmissionProbabilityMeter({ minPercentage = 60 }: { minPercentage?: number }) {
  const { t_dyn, language } = useLanguage();
  const [grade, setGrade] = useState<string>("");
  const [probability, setProbability] = useState<"low" | "medium" | "high" | "error" | null>(null);

  const safeMinPercentage = Number(minPercentage) || 60;

  const handleCalculate = () => {
    if (!grade) return;
    
    // Convert Arabic numerals to English numerals, and Arabic comma to period
    let englishGrade = grade
      .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
      .replace(/[٫,]/g, '.');
      
    // Strip % signs if user inputs them
    englishGrade = englishGrade.replace(/%/g, '');
    
    let val = parseFloat(englishGrade);
    
    if (isNaN(val) || val < 0) {
      setProbability("error");
      return;
    }
    
    // Auto-convert GPA (assumed out of 4.0 or 5.0) to percentage
    if (val > 0 && val <= 5.0) {
      // Assuming a 4.0 max for common Arabian GPA scales
      val = (Math.min(val, 4.0) / 4.0) * 100;
    }

    if (val > 100) {
      setProbability("error");
      return;
    }

    if (val >= safeMinPercentage + 15) {
      setProbability("high");
    } else if (val >= safeMinPercentage) {
      setProbability("medium");
    } else {
      setProbability("low");
    }
  };

  const getRotation = () => {
    if (!probability || probability === "error") return "-translate-x-1/2 rotate-[-90deg]";
    if (probability === "low") return "-translate-x-1/2 rotate-[-45deg]";
    if (probability === "medium") return "-translate-x-1/2 rotate-[0deg]";
    if (probability === "high") return "-translate-x-1/2 rotate-[45deg]";
  };

  return (
    <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 w-full relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
         <Calculator size={120} />
      </div>

      <h3 className="text-xl font-black text-[var(--color-brand-navy)] mb-6 flex items-center gap-2 relative z-10">
        <Calculator size={20} className="text-[var(--color-brand-gold)]" />
        {t_dyn("Admission Probability", "حاسبة احتمالية القبول", "录取概率计算器", "Kalkulator Kebarangkalian")}
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Speedometer Gauge */}
        <div className="relative w-48 h-24 overflow-hidden shrink-0">
           {/* Semi-circle track */}
           <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-l-red-400 border-t-yellow-400 border-r-green-400 border-b-transparent rotate-45 opacity-20"></div>
           <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-l-red-500 border-t-yellow-500 border-r-green-500 border-b-transparent rotate-45" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}></div>
           
           {/* Needle */}
           <div className={`absolute bottom-0 left-1/2 w-2 h-20 bg-[var(--color-brand-navy)] rounded-full origin-bottom transition-transform duration-1000 ease-in-out ${getRotation()}`}>
              {/* Needle pivot */}
              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-sm"></div>
           </div>
        </div>

        {/* Input & Output */}
        <div className="flex-1 w-full space-y-4 relative z-10">
          <div>
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
              {t_dyn("Enter your High School/Bachelor %", "أدخل معدلك التراكمي (%)", "输入您的成绩百分比", "Masukkan peratusan gred anda")}
            </label>
            <div className="relative w-full shadow-inner rounded-xl overflow-hidden bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-[var(--color-brand-gold)] transition-all">
              <input 
                id="gpa-grade-input-fixed"
                type="text" 
                placeholder="e.g. 85 or 3.5"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full bg-transparent px-4 py-3 text-lg font-bold text-gray-800 dark:text-gray-200 outline-none ltr:pr-28 rtl:pl-28"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              />
              <Button 
                variant="primary" 
                onClick={handleCalculate} 
                className="absolute rtl:left-1.5 ltr:right-1.5 top-1.5 bottom-1.5 px-6 whitespace-nowrap shadow-sm text-sm"
              >
                {t_dyn("Check", "تحقق", "检查", "Semak")}
              </Button>
            </div>
          </div>

          {probability && (
            <div className={`p-4 rounded-xl border ${
              probability === "error" ? "bg-red-50 border-red-200 text-red-800" :
              probability === "high" ? "bg-green-50 border-green-200 text-green-800" :
              probability === "medium" ? "bg-yellow-50 border-yellow-200 text-yellow-800" :
              "bg-orange-50 border-orange-200 text-orange-800"
            } animate-in fade-in slide-in-from-bottom-2`}>
              <h4 className="font-black text-lg">
                {probability === "error" ? t_dyn("Invalid Input", "مدخل غير صحيح", "无效输入", "Input Tidak Sah") :
                 probability === "high" ? t_dyn("Excellent Chances! 🎉", "فرصتك ممتازة! 🎉", "机会极佳！", "Peluang Cemerlang!") :
                 probability === "medium" ? t_dyn("Good Chances", "فرصتك جيدة", "有机会", "Peluang Baik") :
                 t_dyn("Low Probability", "احتمالية ضعيفة", "概率较低", "Kebarangkalian Rendah")}
              </h4>
              <p className="text-sm mt-1 opacity-90">
                {probability === "error" ? t_dyn("Please enter a valid percentage between 0 and 100, or a GPA like 3.5", "الرجاء إدخال نسبة مئوية صحيحة حتى 100، أو معدل تراكمي صحيح.", "请输入有效百分比", "Sila masukkan peratusan sah") :
                 probability === "high" ? t_dyn("Your grades strongly align with this university's requirements.", "معدلك يتوافق بقوة وبشكل مباشر مع شروط هذه الجامعة.", "您的成绩非常符合该大学的要求。", "Gred anda sangat menepati syarat.") :
                 probability === "medium" ? t_dyn("You meet the base criteria, but some faculties might require higher.", "أنت تلبي الشروط الأساسية، لكن بعض التخصصات الطبية والهندسية قد تتطلب أكثر.", "您达到基本要求。", "Anda memenuhi kriteria asas.") :
                 t_dyn("Consider a Foundation program first or exploring other universities.", "قد تحتاج لدراسة سنة تحضيرية أولاً، أو استكشاف جامعات أخرى بشروط أسهل.", "考虑先读预科。", "Pertimbangkan program Asasi dahulu.")}
              </p>
              {probability === "high" && (
                <Link href="/contact" className="inline-block mt-3 bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm hover:bg-green-700">
                  {t_dyn("Apply for Admission Now", "قدم طلبك للجامعة فوراً", "立即申请", "Mohon Sekarang")}
                </Link>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
