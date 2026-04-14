"use client";

import React from 'react';
import { useCompare } from '@/lib/CompareContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/Button';
import { X, Scale } from 'lucide-react';
import Link from 'next/link';

export default function CompareTray() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { language, t_dyn } = useLanguage();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0b0f19]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 translate-y-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto">
          {compareList.map((uni) => (
            <div key={uni.id} className="relative flex items-center bg-gray-50 dark:bg-[#11192d] rounded-xl p-2 pr-8 border border-gray-200 dark:border-gray-700 shrink-0">
              <div className="w-10 h-10 bg-white dark:bg-[#0b0f19] rounded-lg flex items-center justify-center text-xs font-bold mr-3 shadow-sm overflow-hidden shrink-0">
                {uni.logoUrl && !uni.logoUrl.startsWith('<') ? (
                  <img src={uni.logoUrl} alt={uni.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[var(--color-brand-navy)] truncate">{uni.logoUrl || "Uni"}</span>
                )}
              </div>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate max-w-[120px]">
                {t_dyn(uni.name, uni.nameAr, uni.nameZh, uni.name)}
              </p>
              <button 
                onClick={() => removeFromCompare(uni.id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-white dark:bg-[#0b0f19] rounded-full shadow-sm p-0.5"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          
          {compareList.length < 3 && (
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-2 w-48 shrink-0 bg-gray-50 dark:bg-[#11192d]/50">
              <p className="text-sm text-gray-400 font-semibold">{t_dyn('Add up to 3', 'أضف حتى 3 جامعات', '最多可添加3个', 'Add up to 3')}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" onClick={clearCompare} className="text-gray-500 hover:text-red-600 border-gray-200 dark:border-gray-700">
            {t_dyn('Clear All', 'مسح الكل', '清除全部', 'Bersihkan Semua')}
          </Button>
          <Link href="/compare">
            <Button variant="primary" className="flex items-center gap-2 px-6">
              <Scale size={18} />
              {t_dyn('Compare Now', 'قارن الآن', '现在比较', 'Bandingkan Sekarang')}
              <span className="bg-white dark:bg-[#0b0f19]/20 px-2 py-0.5 rounded-md text-sm">{compareList.length}</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
