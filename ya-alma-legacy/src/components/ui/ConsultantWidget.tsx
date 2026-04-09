"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function ConsultantWidget() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [experts, setExperts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/consultants`)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setExperts(data.map(c => ({
            name: language === 'ar' && c.nameAr ? c.nameAr : language === 'zh' && c.nameZh ? c.nameZh : c.name,
            title: language === 'ar' && c.titleAr ? c.titleAr : language === 'zh' && c.titleZh ? c.titleZh : c.title,
            avatar: c.avatar && c.avatar.startsWith('http') ? c.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name || 'C')}&background=0D8ABC&color=fff`,
            wa: c.whatsappNumber || "60143240499"
          })));
        } else {
          // Fallback if DB is empty
          setExperts([
            { name: "Eng. Abdullah Yousef", title: "Academic Consultant", avatar: "https://ui-avatars.com/api/?name=Abdullah+Yousef&background=0D8ABC&color=fff", wa: "60143240499" }
          ]);
        }
      })
      .catch(err => {
        console.error("Failed to fetch consultants", err);
        setExperts([
          { name: "Eng. Abdullah Yousef", title: "Academic Consultant", avatar: "https://ui-avatars.com/api/?name=Abdullah+Yousef&background=0D8ABC&color=fff", wa: "60143240499" }
        ]);
      });
  }, [language]);

  if (experts.length === 0) return null;

  return (
    <div className="consultant-widget fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-end">
      {/* The Popup Panel */}
      <div 
        className={`absolute bottom-full mb-4 left-0 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-bottom-left ${
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#89D83D] p-4 text-white flex justify-between items-center">
          <div>
            <h4 className="font-bold">{t.widget.experts}</h4>
            <span className="text-xs text-white/80 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {t.widget.online}
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors">
             <X size={20} />
          </button>
        </div>
        
        <div className="p-4 flex flex-col gap-4 max-h-[350px] overflow-y-auto">
           {experts.map((exp, idx) => (
             <a
               key={idx}
               href={`https://wa.me/${exp.wa}`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-4 group p-2 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100"
             >
               <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[var(--color-brand-navy)] shrink-0 group-hover:-translate-y-1 transition-transform overflow-hidden relative">
                 <Image src={exp.avatar} alt={exp.name} fill className="object-cover" />
               </div>
               <div className="flex-grow">
                 <h5 className="font-bold text-gray-900 group-hover:text-[var(--color-brand-navy)] transition-colors text-sm">{exp.name}</h5>
                 <span className="text-xs text-gray-500">{exp.title}</span>
               </div>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#89D83D] group-hover:bg-[#89D83D] group-hover:text-white transition-colors">
                 <ExternalLink size={14} />
               </div>
             </a>
           ))}
        </div>
        
        <div className="p-3 bg-gray-50 text-center text-xs text-gray-400 border-t border-gray-100">
           {t.footer.rights}
        </div>
      </div>

      {/* The Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#89D83D] text-white px-3 py-3 sm:px-6 sm:py-4 rounded-full shadow-[0_10px_25px_rgba(137,216,61,0.5)] hover:shadow-[0_15px_30px_rgba(137,216,61,0.7)] transition-all duration-300 flex items-center gap-2 sm:gap-3 border-2 border-white group hover:scale-105"
      >
        <div className="flex -space-x-2 mr-1 rtl:mr-0 rtl:ml-1 hidden sm:flex">
          {experts[0] && <img src={experts[0].avatar} className="w-6 h-6 rounded-full border border-white" alt="Avatar"/>}
          {experts[1] && <img src={experts[1].avatar} className="w-6 h-6 rounded-full border border-white" alt="Avatar"/>}
        </div>
        <MessageCircle size={22} className="group-hover:rotate-12 transition-transform sm:w-6 sm:h-6 sm:hidden" />
        <span className="font-bold text-sm sm:text-base tracking-wide">{t.widget.title}</span>
      </button>
    </div>
  );
}
