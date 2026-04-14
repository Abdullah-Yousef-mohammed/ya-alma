"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, GraduationCap, Filter, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";
import CourseMatchmaker from "@/components/ui/CourseMatchmaker";
import CourseCard from "@/components/ui/CourseCard";

interface Course {
  id: number;
  titleEn: string;
  titleAr: string;
  titleZh: string;
  titleMs: string;
  facultyEn: string;
  facultyAr: string;
  facultyZh: string;
  facultyMs: string;
  level: string;
  levelAr: string;
  levelZh: string;
  levelMs: string;
  universityId: number;
  universityName: string;
  universityNameAr: string;
  universityNameZh: string;
  universityNameMs: string;
  intakes: string;
  intakesAr: string;
  intakesZh: string;
  intakesMs: string;
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/courses`)
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
    <div className="min-h-screen bg-gray-50 dark:bg-[#11192d] pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
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
            <div className="sticky top-24">
              <CourseMatchmaker onMatch={(field, level) => {
                setFilterField(field);
                setFilterLevel(level);
              }} />
              <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-6 text-xl font-bold text-[var(--color-brand-navy)] border-b pb-4">
                <Filter size={20} />
                <span>{t_dyn("Filter Results", "تصفية النتائج", "Tapis Keputusan", "Tapis Keputusan")}</span>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.filters.searchCourse}</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t.filters.searchCourse}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.filters.level}</label>
                <select 
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl outline-none"
                >
                  <option value="all">{t.filters.allLevels}</option>
                  {uniqueLevels.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              {/* Field Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.nav.specializations}</label>
                <select 
                  value={filterField}
                  onChange={(e) => setFilterField(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl outline-none"
                >
                  <option value="all">{t_dyn("All Fields", "الكل", "Semua Bidang", "Semua Bidang")}</option>
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
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
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
              <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-800">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">No Courses Found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
