"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Filter } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Languages, BookOpen, GraduationCap, Star } from "lucide-react";

interface LanguageCenter {
  id: number;
  name: string;
  nameAr: string;
  nameMs: string;
  location: string;
  locationAr: string;
  locationZh: string;
  locationMs: string;
  state: string;
  stateMs: string;
  logoUrl: string;
}

export default function LanguageCentersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-xl">Loading...</div>}>
      <LanguageCentersContent />
    </Suspense>
  );
}

function LanguageCentersContent() {
  const { t, language, t_dyn } = useLanguage();
  const searchParams = useSearchParams();
  const [allCenters, setAllCenters] = useState<LanguageCenter[]>([]);
  const [filteredCenters, setFilteredCenters] = useState<LanguageCenter[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters State from URL
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/language-centers`)
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        const validatedData = Array.isArray(data) ? data : [];
        setAllCenters(validatedData);
        setFilteredCenters(validatedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching language centers:", err);
        setAllCenters([]);
        setFilteredCenters([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = allCenters;

    if (searchTerm) {
      result = result.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.nameAr.includes(searchTerm)
      );
    }

    if (filterState !== "all") {
      result = result.filter(c => c.state === filterState);
    }

    setFilteredCenters(result);
  }, [searchTerm, filterState, allCenters]);

  const uniqueStates = Array.from(new Set(allCenters.map(c => c.state).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero Header - Upgraded with rich aesthetics */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 mb-12 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-gold)]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20 shadow-xl">
            <Languages size={32} className="text-[var(--color-brand-gold)]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.nav.languageCenters}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">{t.language_centers.desc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-xl font-bold text-[var(--color-brand-navy)] border-b pb-4">
                <Filter size={20} />
                <span>{t_dyn("Filter Results", "تصفية النتائج", "Tapis Keputusan", "Tapis Keputusan")}</span>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t_dyn("Search Center Name...", "ابحث باسم المعهد...", "Cari Nama Pusat...", "Cari Nama Pusat...")}
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="E.g. ELC, EMS"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* State Location Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.filters.location}</label>
                <select 
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl outline-none"
                >
                  <option value="all">{t.filters.allLocations}</option>
                  {uniqueStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => { setSearchTerm(""); setFilterState("all"); }}
              >
                {t.filters.clear}
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                <span className="text-[var(--color-brand-navy)] font-bold">{filteredCenters.length}</span> {t.filters.results}
              </p>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
                ))}
              </div>
            ) : filteredCenters.length === 0 ? (
              <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-800">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {t_dyn("No Centers Found", "لم يتم العثور على معاهد", "Tiada Pusat Ditemui", "Tiada Pusat Ditemui")}
                </h3>
              </div>
            ) : (
              <div className="space-y-16">
                {uniqueStates.map((stateGroup) => {
                  const groupCenters = filteredCenters.filter(c => c.state === stateGroup);
                  if (groupCenters.length === 0) return null;

                  return (
                    <div key={stateGroup} className="relative">
                      <h2 className="text-3xl font-black text-[var(--color-brand-navy)] mb-8 border-b-2 border-gray-100 dark:border-gray-800 pb-4 inline-block">
                        {t_dyn(`Institutes in ${stateGroup}`, `معاهد في ${stateGroup}`, `Institut di ${stateGroup}`, `Institut di ${stateGroup}`)}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupCenters.map((center) => {
                          const isRealImage = center.logoUrl && center.logoUrl !== "default_logo" && !center.logoUrl.endsWith("null");
                          return (
                          <Link href={`/language-centers/${center.id}`} key={center.id} className="bg-white dark:bg-[#0b0f19] rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-800 p-6 flex flex-col group relative overflow-hidden">
                            {/* Decorative Gradient Top border on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-gold)] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Accent Background Blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:bg-[var(--color-brand-gold)]/10 transition-colors duration-700"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                              <div className="w-28 h-28 bg-white dark:bg-[#11192d] rounded-2xl flex items-center justify-center mb-6 text-xl font-bold text-gray-300 shadow-md group-hover:shadow-xl border-4 border-gray-50 dark:border-gray-800 group-hover:border-[var(--color-brand-gold)] transition-all duration-500 overflow-hidden relative rotate-0 group-hover:rotate-3">
                                {isRealImage ? (
                                  <img src={center.logoUrl.startsWith('http') ? center.logoUrl : `${process.env.NEXT_PUBLIC_API_URL || 'https://yaalmalegacy.com/api'}/..${center.logoUrl}`} alt={center.name} className="w-full h-full object-contain p-2" />
                                ) : (
                                  <Languages size={40} className="text-gray-300 dark:text-gray-600 group-hover:text-[var(--color-brand-gold)] transition-colors opacity-50" />
                                )}
                              </div>
                              
                              <h3 className="text-2xl font-black text-[var(--color-brand-navy)] mb-3 group-hover:text-[var(--color-brand-gold)] transition-colors leading-tight">
                                {t_dyn(center.name, center.nameAr, center.nameMs || center.name, center.nameMs || center.name)}
                              </h3>
                              
                              <div className="flex items-center justify-center text-sm text-gray-500 font-medium bg-gray-50 dark:bg-[#11192d] px-4 py-1.5 rounded-full mb-6 border border-gray-100 dark:border-gray-800">
                                <MapPin size={14} className={`${language === "ar" ? "ml-1.5" : "mr-1.5"} text-[var(--color-brand-gold)]`} />
                                <span>{t_dyn(center.location, center.locationAr, center.locationMs || center.location, center.locationMs || center.location)}, {t_dyn(center.state, center.state, center.stateMs || center.state, center.stateMs || center.state)}</span>
                              </div>

                              <div className="flex gap-2 flex-wrap justify-center mb-8">
                                <span className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1"><BookOpen size={10} /> General English</span>
                                <span className="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1"><Star size={10} /> IELTS Prep</span>
                              </div>

                              <div className="w-full mt-auto">
                                <Button variant="primary" className="w-full group-hover:scale-[1.02] transition-transform shadow-md group-hover:bg-[#1a2542]">{t.nav.apply}</Button>
                              </div>
                            </div>
                          </Link>
                        )})}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
