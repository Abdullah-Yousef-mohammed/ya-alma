"use client";

import React from 'react';
import { useCourseCompare } from '@/lib/CourseCompareContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/Button';
import { X, Scale, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CourseCompareTray() {
  const { courseCompareList, removeFromCourseCompare, clearCourseCompare } = useCourseCompare();
  const { language, t_dyn } = useLanguage();
  const pathname = usePathname();

  if (courseCompareList.length === 0 || pathname === '/compare-courses' || pathname === '/ar/compare-courses') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0b0f19]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 translate-y-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto">
          {courseCompareList.map((course) => (
            <div key={course.id} className="relative flex items-center bg-gray-50 dark:bg-[#11192d] rounded-xl p-3 pr-8 rtl:pr-3 rtl:pl-8 border border-gray-200 dark:border-gray-700 shrink-0 min-w-[200px]">
              <div className="w-10 h-10 bg-[var(--color-brand-navy)] rounded-lg flex items-center justify-center text-[var(--color-brand-gold)] shrink-0 ltr:mr-3 rtl:ml-3">
                <BookOpen size={20} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                  {t_dyn(course.title, course.titleAr, course.titleZh, course.titleMs)}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {course.universityName}
                </p>
              </div>
              <button 
                onClick={() => removeFromCourseCompare(course.id)}
                className="absolute ltr:right-2 rtl:left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-white dark:bg-[#0b0f19] rounded-full shadow-sm p-0.5"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          
          {courseCompareList.length < 3 && (
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-2 w-48 shrink-0 bg-gray-50 dark:bg-[#11192d]/50 h-[66px]">
              <p className="text-sm text-gray-400 font-semibold">{t_dyn('Add up to 3 courses', 'أضف حتى 3 تخصصات', '最多可添加3个', 'Add up to 3')}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" onClick={clearCourseCompare} className="text-gray-500 hover:text-red-600 border-gray-200 dark:border-gray-700">
            {t_dyn('Clear All', 'مسح الكل', '清除全部', 'Bersihkan Semua')}
          </Button>
          <Link href="/compare-courses">
            <Button variant="primary" className="flex items-center gap-2 px-6">
              <Scale size={18} />
              {t_dyn('Compare Now', 'قارن التخصصات', '现在比较', 'Bandingkan Sekarang')}
              <span className="bg-white dark:bg-[#0b0f19]/20 px-2 py-0.5 rounded-md text-sm">{courseCompareList.length}</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
