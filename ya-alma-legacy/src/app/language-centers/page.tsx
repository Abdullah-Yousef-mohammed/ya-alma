"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Filter } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface LanguageCenter {
  id: number;
  name: string;
  nameAr: string;
  location: string;
  locationAr: string;
  state: string;
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
    fetch("http://localhost:8080/api/language-centers")
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
    <div className="min-h-screen bg-gray-50 pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header Banner */}
      <div className="bg-[var(--color-brand-navy)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.languageCenters}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.language_centers.desc}</p>
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t_dyn("Search Center Name...", "ابحث باسم المعهد...")}
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="E.g. ELC, EMS"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
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
                onClick={() => { setSearchTerm(""); setFilterState("all"); }}
              >
                {t.filters.clear}
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
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
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t_dyn("No Centers Found", "لم يتم العثور على معاهد")}
                </h3>
              </div>
            ) : (
              <div className="space-y-16">
                {uniqueStates.map((stateGroup) => {
                  const groupCenters = filteredCenters.filter(c => c.state === stateGroup);
                  if (groupCenters.length === 0) return null;

                  return (
                    <div key={stateGroup} className="relative">
                      <h2 className="text-3xl font-black text-[var(--color-brand-navy)] mb-8 border-b-2 border-gray-100 pb-4 inline-block">
                        {t_dyn(`Institutes in ${stateGroup}`, `معاهد في ${stateGroup}`)}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupCenters.map((center) => (
                          <Link href={`/language-centers/${center.id}`} key={center.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 p-6 flex flex-col group text-center items-center">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-gray-300 border-4 border-gray-50 group-hover:border-[var(--color-brand-gold)] transition-colors">
                              {center.logoUrl}
                            </div>
                            
                            <h3 className="text-xl font-bold text-[var(--color-brand-navy)] mb-2 group-hover:text-[var(--color-brand-gold)] transition-colors">
                              {t_dyn(center.name, center.nameAr)}
                            </h3>
                            
                            <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
                              <MapPin size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-[var(--color-brand-gold)]`} />
                              <span>{t_dyn(center.location, center.locationAr)}, {t_dyn(center.state, center.state)}</span>
                            </div>

                            <Button variant="primary" className="w-full mt-auto">{t.nav.apply}</Button>
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
