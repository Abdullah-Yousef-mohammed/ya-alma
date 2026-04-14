"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField, SectionDivider, CrudTable, TextAreaField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function SpecializationsManager() {
  return (
    <CrudTable<any>
      title="Specializations"
      apiPath="/specializations"
      columns={[
        { key: "slug", label: "Slug" },
        { key: "titleEn", label: "Title (EN)" },
        { key: "titleAr", label: "Title (AR)" },
      ]}
      customAction={(item) => (
        <a href={`/admin/specializations/${item.id}`} className="flex items-center gap-1 p-2 rounded-lg text-purple-600 bg-purple-50 hover:bg-purple-100 font-bold transition">
          <LayoutDashboard size={14} /> Visual Editor
        </a>
      )}
      emptyRow={{ id: 0, slug: "", titleEn: "", titleAr: "", titleZh: "", titleMs: "", heroTaglineEn: "", heroTaglineAr: "", heroTaglineZh: "", heroTaglineMs: "", introEn: "", introAr: "", introZh: "", introMs: "", searchQuery: "", degreeLevelsJson: "[]", topUniversitiesJson: "[]", budgetUniversitiesJson: "[]", courseYearsJson: "[]", careerJobsEnJson: "[]", careerJobsArJson: "[]", careerJobsZhJson: "[]", seVsCsJson: "{}", countryComparisonsJson: "[]", spotlightUniversitiesJson: "[]" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="URL Slug (e.g. data-analytics)" value={item.slug} onChange={v => setItem({ ...item, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} />
          <FormField label="Search Query (e.g. Data)" value={item.searchQuery} onChange={v => setItem({ ...item, searchQuery: v })} />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          
          <TextAreaField label="Hero Tagline (English)" value={item.heroTaglineEn} onChange={v => setItem({ ...item, heroTaglineEn: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Arabic)" value={item.heroTaglineAr} onChange={v => setItem({ ...item, heroTaglineAr: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Chinese)" value={item.heroTaglineZh} onChange={v => setItem({ ...item, heroTaglineZh: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Malay)" value={item.heroTaglineMs} onChange={v => setItem({ ...item, heroTaglineMs: v })} rows={2} />
          <TextAreaField label="Introduction (English)" value={item.introEn} onChange={v => setItem({ ...item, introEn: v })} rows={4} />
          <TextAreaField label="Introduction (Arabic)" value={item.introAr} onChange={v => setItem({ ...item, introAr: v })} rows={4} />
          <TextAreaField label="Introduction (Chinese)" value={item.introZh} onChange={v => setItem({ ...item, introZh: v })} rows={4} />
          <TextAreaField label="Introduction (Malay)" value={item.introMs} onChange={v => setItem({ ...item, introMs: v })} rows={4} />

          <SectionDivider label="Complex Data Editor (Edit as raw JSON List/Object)" />
          <div className="bg-orange-50 md:col-span-2 p-4 rounded-xl border border-orange-200">
            <p className="text-xs text-orange-800 font-bold mb-2 uppercase tracking-wide">Warning: Make sure JSON syntax is perfect!</p>
            <TextAreaField label="Degree Levels (JSON)" value={item.degreeLevelsJson} onChange={v => setItem({ ...item, degreeLevelsJson: v })} rows={4} />
            <div className="mt-4"><TextAreaField label="Top Universities (JSON)" value={item.topUniversitiesJson} onChange={v => setItem({ ...item, topUniversitiesJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Budget Universities (JSON)" value={item.budgetUniversitiesJson} onChange={v => setItem({ ...item, budgetUniversitiesJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Course Syllabus Years (JSON)" value={item.courseYearsJson} onChange={v => setItem({ ...item, courseYearsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (English JSON Array)" value={item.careerJobsEnJson} onChange={v => setItem({ ...item, careerJobsEnJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (Arabic JSON Array)" value={item.careerJobsArJson} onChange={v => setItem({ ...item, careerJobsArJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (Chinese JSON Array)" value={item.careerJobsZhJson} onChange={v => setItem({ ...item, careerJobsZhJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Specialization Comparison (seVsCs JSON)" value={item.seVsCsJson} onChange={v => setItem({ ...item, seVsCsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Country Comparisons (JSON)" value={item.countryComparisonsJson} onChange={v => setItem({ ...item, countryComparisonsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Spotlight Universities (JSON)" value={item.spotlightUniversitiesJson} onChange={v => setItem({ ...item, spotlightUniversitiesJson: v })} rows={4} /></div>
          </div>
        </>
      )}
    />
  );
}

export default SpecializationsManager;
