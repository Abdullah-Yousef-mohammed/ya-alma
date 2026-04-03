"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, GraduationCap, Filter, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";

interface Course {
  id: number;
  titleEn: string;
  titleAr: string;
  titleZh: string;
  facultyEn: string;
  facultyAr: string;
  facultyZh: string;
  level: string;
  levelAr: string;
  levelZh: string;
  universityId: number;
  universityName: string;
  universityNameAr: string;
  universityNameZh: string;
  intakes: string;
  intakesAr: string;
  intakesZh: string;
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-xl">Loading...</div>}>
      <CoursesContent />
    </Suspense>
  );
}

function CoursesContent() {
  const { t, language, t_dyn } = useLanguage();
  const searchParams = useSearchParams();
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters State from URL
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterField, setFilterField] = useState(searchParams.get("field") || "all");

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
    setFilterField(searchParams.get("field") || "all");
  }, [searchParams]);

  useEffect(() => {
    fetch("https://ya-alma.onrender.com/api/courses")
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        const validatedData = Array.isArray(data) ? data : [];
        setAllCourses(validatedData);
        setFilteredCourses(validatedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching courses:", err);
        setAllCourses([]);
        setFilteredCourses([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = allCourses;

    if (searchTerm) {
      result = result.filter(c => 
        c.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.titleAr.includes(searchTerm) ||
        (c.titleZh && c.titleZh.includes(searchTerm)) ||
        c.universityName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterLevel !== "all") {
      result = result.filter(c => c.level === filterLevel);
    }

    if (filterField !== "all") {
      result = result.filter(c => c.facultyEn === filterField);
    }

    setFilteredCourses(result);
  }, [searchTerm, filterLevel, filterField, allCourses]);

  const uniqueLevels = Array.from(new Set(allCourses.map(c => c.level).filter(Boolean)));
  const uniqueFields = Array.from(new Set(allCourses.map(c => c.facultyEn).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header Banner */}
      <div className="bg-[var(--color-brand-navy)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.nav.courses}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Explore hundreds of programs across Malaysia's top institutions.</p>
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.filters.searchCourse}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t.filters.searchCourse}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.filters.level}</label>
                <select 
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                >
                  <option value="all">{t.filters.allLevels}</option>
                  {uniqueLevels.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              {/* Field Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t.nav.specializations}</label>
                <select 
                  value={filterField}
                  onChange={(e) => setFilterField(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                >
                  <option value="all">{t_dyn("All Fields", "الكل")}</option>
                  {uniqueFields.map(field => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>

              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => { setSearchTerm(""); setFilterLevel("all"); setFilterField("all"); }}
              >
                {t.filters.clear}
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                <span className="text-[var(--color-brand-navy)] font-bold">{filteredCourses.length}</span> {t.filters.results}
              </p>
            </div>

            {loading ? (
              <div className="flex flex-col gap-4 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-2xl w-full"></div>
                ))}
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Courses Found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                    <div className="flex-grow text-start">
                      <div className="flex items-center gap-2 mb-2">
                         <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                           {t_dyn(course.level, course.levelAr || course.level)}
                         </span>
                         <span className="text-xs font-bold px-3 py-1 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] rounded-full">
                           {t_dyn(course.facultyEn, course.facultyAr, course.facultyZh || course.facultyEn)}
                         </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[var(--color-brand-navy)] transition-colors">
                        {t_dyn(course.titleEn, course.titleAr, course.titleZh || course.titleEn)}
                      </h3>
                      
                      <div className="flex items-center text-sm font-semibold text-gray-500 gap-4 mt-3">
                        <div className="flex items-center">
                          <BookOpen size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-gray-400`} />
                          <span>{t_dyn(course.universityName, course.universityNameAr || course.universityName)}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap size={16} className={`${language === "ar" ? "ml-1" : "mr-1"} text-[var(--color-brand-gold)]`} />
                          <span>{t_dyn("Intakes", "تاريخ البدء")}: {t_dyn(course.intakes, course.intakesAr || course.intakes)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
                      <Button variant="primary" className="text-sm px-8 whitespace-nowrap">{t.nav.apply}</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
