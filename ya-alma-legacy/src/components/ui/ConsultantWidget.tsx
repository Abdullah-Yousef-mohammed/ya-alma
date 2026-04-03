"use client";

import React, { useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

const experts = [
  { name: "A. Abdullah Belfaqih", title: "Academic Consultant", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop", wa: "60143240499" },
  { name: "A. Saeed Al-Johi", title: "Academic Consultant", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", wa: "60143240499" },
  { name: "Eng. Mohammed Taha", title: "Academic Consultant", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", wa: "60143240499" },
];

export default function ConsultantWidget() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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
                 <span className="text-xs text-gray-500">{t.consultants.role}</span>
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
          <img src={experts[0].avatar} className="w-6 h-6 rounded-full border border-white" alt="Avatar"/>
          <img src={experts[1].avatar} className="w-6 h-6 rounded-full border border-white" alt="Avatar"/>
        </div>
        <MessageCircle size={22} className="group-hover:rotate-12 transition-transform sm:w-6 sm:h-6 sm:hidden" />
        <span className="font-bold text-sm sm:text-base tracking-wide">{t.widget.title}</span>
      </button>
    </div>
  );
}
