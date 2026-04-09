"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Filter, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface University {
  id: number;
  name: string;
  nameAr: string;
  location: string;
  locationAr: string;
  state: string;
  logoUrl: string;
  isPrivate: boolean;
  freeOfferLetter: boolean;
  courseCount: number;
}

export default function UniversitiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-xl">Loading...</div>}>
      <UniversitiesContent />
    </Suspense>
  );
}

function UniversitiesContent() {
  const { t, language, t_dyn } = useLanguage();
  const searchParams = useSearchParams();
  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [filteredUnis, setFilteredUnis] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters State initialized from URL
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [filterType, setFilterType] = useState(searchParams.get("type") || "all");
  const [filterState, setFilterState] = useState("all");

  // Keep state synced if URL changes via Next.js routing
  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
    setFilterType(searchParams.get("type") || "all");
  }, [searchParams]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/universities`)
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        const validatedData = Array.isArray(data) ? data : [];
        setAllUniversities(validatedData);
        setFilteredUnis(validatedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching universities:", err);
        setAllUniversities([]);
        setFilteredUnis([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = allUniversities;

    if (searchTerm) {
      result = result.filter(u => 
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        u.nameAr.includes(searchTerm)
      );
    }

    if (filterType !== "all") {
      const isPrivateCheck = filterType === "private";
      result = result.filter(u => u.isPrivate === isPrivateCheck);
    }

    if (filterState !== "all") {
      result = result.filter(u => u.state === filterState);
    }

    setFilteredUnis(result);
  }, [searchTerm, filterType, filterState, allUniversities]);

  const uniqueStates = Array.from(new Set(allUniversities.map(u => u.state).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header Banner */}
      <div className="bg-[var(--color-brand-navy)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.universities}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.universities.desc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-xl font-bold text-[var(--color-brand-navy)] border-b pb-4">
                <Filter size={20} />
                <span>{t_dyn("Filter Results", "تصفية النتائج")}</span>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.filters.searchUni}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t.filters.searchUni}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t_dyn("University Type", "نوع الجامعة")}</label>
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                >
                  <option value="all">{t_dyn("All Types", "جميع الأنواع")}</option>
                  <option value="private">{t.nav.privateUni}</option>
                  <option value="public">{t.nav.publicUni}</option>
                </select>
              </div>

              {/* State Location Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.filters.location}</label>
                <select 
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
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
                onClick={() => { setSearchTerm(""); setFilterType("all"); setFilterState("all"); }}
              >
                {t.filters.clear}
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                <span className="text-[var(--color-brand-navy)] font-bold">{filteredUnis.length}</span> {t.filters.results}
              </p>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-80 bg-gray-200 rounded-2xl"></div>
                ))}
              </div>
            ) : filteredUnis.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t_dyn("No Universities Found", "لا توجد جامعات")}
                </h3>
                <p className="text-gray-500">
                  {t_dyn("Try adjusting your filters to find what you're looking for.", "حاول تغيير الفلاتر للبحث مرة أخرى")}
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {[
                  { id: "private", title: "Private Universities", titleAr: "جامعات خاصة", isPrivate: true },
                  { id: "public", title: "Public Universities", titleAr: "جامعات حكومية", isPrivate: false }
                ].map((group) => {
                  const groupUnis = filteredUnis.filter(u => u.isPrivate === group.isPrivate);
                  if (groupUnis.length === 0) return null;

                  return (
                    <div key={group.id} className="relative">
                      <h2 className="text-3xl font-black text-[var(--color-brand-navy)] mb-8 border-b-2 border-gray-100 pb-4 inline-block">
                        {t_dyn(group.title, group.titleAr)}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupUnis.map((uni) => (
                          <Link href={`/universities/${uni.id}`} key={uni.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col group relative block">
                            {uni.freeOfferLetter && (
                              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                {t.filters.freeOffer}
                              </div>
                            )}
                            
                            <div className="h-32 bg-gray-50 relative flex items-center justify-center p-6 border-b border-gray-50">
                              <div className="text-3xl font-bold bg-gradient-to-br from-[var(--color-brand-navy)] to-gray-600 bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity">
                                {uni.logoUrl}
                              </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                                {t_dyn(uni.name, uni.nameAr)}
                              </h3>
                              
                              <div className="flex items-center text-sm text-gray-500 mb-4 mt-2">
                                <MapPin size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-[var(--color-brand-gold)]`} />
                                <span>{t_dyn(uni.location, uni.locationAr)}, {t_dyn(uni.state, uni.state)}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-6 pt-4 border-t border-gray-100">
                                 <BookOpen size={16} className="text-[var(--color-brand-navy)]" />
                                 <span className="text-sm font-semibold text-gray-600">{uni.courseCount} Courses</span>
                              </div>

                              <div className="mt-auto flex gap-2 w-full">
                                <Button variant="primary" className="flex-1 text-sm">{t.nav.apply}</Button>
                                <a href="https://wa.me/60143240499" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <Button variant="whatsapp" className="px-4">💬</Button>
                                </a>
                              </div>
                            </div>
                          </Link>
                        ))}
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
