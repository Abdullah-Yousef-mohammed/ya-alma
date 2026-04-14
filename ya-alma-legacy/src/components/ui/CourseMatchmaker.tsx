"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ChevronRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";

interface MatchmakerProps {
  onMatch: (field: string, level: string) => void;
}

export default function CourseMatchmaker({ onMatch }: MatchmakerProps) {
  const { t_dyn, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ field: "", level: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const questions = [
    {
      title: t_dyn("What are you most passionate about?", "ما هو أكثر مجال يحظى بشغفك؟", "What are you most passionate about?", "Apa yang paling anda minati?"),
      key: "field",
      options: [
        { label: t_dyn("Technology & Computing", "التقنية والحوسبة", "Tech", "Tech"), value: "Computing & IT" },
        { label: t_dyn("Business & Finance", "إدارة الأعمال والمالية", "Business", "Perniagaan"), value: "Business & Management" },
        { label: t_dyn("Engineering", "الهندسة", "Engineering", "Kejuruteraan"), value: "Engineering" },
        { label: t_dyn("Medicine & Health", "الطب والصحة", "Medical", "Perubatan"), value: "Medicine" },
      ]
    },
    {
      title: t_dyn("What level of study are you seeking?", "ما هي المرحلة الدراسية التي تبحث عنها؟", "What level?", "Peringkat apa?"),
      key: "level",
      options: [
        { label: t_dyn("Foundation", "تأسيسي (Foundation)", "Foundation", "Asasi"), value: "Foundation" },
        { label: t_dyn("Bachelor", "بكالوريوس", "Bachelor", "Sarjana Muda"), value: "Bachelor" },
        { label: t_dyn("Master/PhD", "دراسات عليا (ماجستير/دبلوم)", "Postgrad", "Pascasiswazah"), value: "Master" },
      ]
    }
  ];

  const handleSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < questions.length - 1) {
      setStep(s => s + 1);
    } else {
      // Analyze and complete
      const finalAnswers = { ...answers, [key]: value };
      setIsOpen(false);
      onMatch(finalAnswers.field, finalAnswers.level);
      // reset
      setTimeout(() => { setStep(0); setAnswers({ field: "", level: "" }); }, 500);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-[var(--color-brand-navy)] to-blue-800 text-white rounded-2xl shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all group overflow-hidden relative mb-8 border border-blue-700/50"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Sparkles size={24} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
        <span className="font-bold text-lg">{t_dyn("AI Matchmaker", "المستشار الذكي (طابقني)", "AI Matchmaker", "Pencocok AI")}</span>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 px-4 sm:px-0">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-800 overflow-hidden"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-brand-navy)] dark:text-white">
                    {questions[step].title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    {t_dyn("Step", "الخطوة", "Step", "Langkah")} {step + 1} {t_dyn("of", "من", "of", "daripada")} {questions.length}
                  </p>
                </div>

                <div className="space-y-3">
                  {questions[step].options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(questions[step].key, opt.value)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 rounded-xl transition-colors text-right rtl:text-right ltr:text-left group"
                    >
                      <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-400">{opt.label}</span>
                      <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-500 rtl:rotate-180" />
                    </motion.button>
                  ))}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
