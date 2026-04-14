"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField, SectionDivider, CrudTable } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function CoursesManager() {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities`)
      .then(r => r.json())
      .then(data => setUniversities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <CrudTable<Course>
      title="Master Programs & Courses"
      apiPath="/courses"
      columns={[
        { key: "titleEn", label: "Program Name" },
        { key: "facultyEn", label: "Faculty / Category" },
        { key: "level", label: "Level", render: (c) => <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">{c.level}</span> },
        { key: "universityName", label: "University" },
        { key: "feeMyr", label: "Fee (MYR)", render: (c) => `RM ${c.feeMyr}` },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", facultyEn: "", facultyAr: "", facultyZh: "", facultyMs: "", level: "Bachelor", levelAr: "بكالوريوس", levelZh: "本科", levelMs: "本科", universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "", universityNameMs: "", feeMyr: 0, duration: "3 Years", durationAr: "3 سنوات", durationZh: "3年", durationMs: "3年", intakes: "Jan, May, Sep", intakesAr: "", intakesZh: "" , intakesMs: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Program Name (MS)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <FormField label="Faculty / Category (EN)" value={item.facultyEn} onChange={v => setItem({ ...item, facultyEn: v })} />
          <FormField label="Faculty / Category (AR)" value={item.facultyAr} onChange={v => setItem({ ...item, facultyAr: v })} />
          <FormField label="Faculty / Category (ZH)" value={item.facultyZh} onChange={v => setItem({ ...item, facultyZh: v })} />
          <FormField label="Faculty / Category (MS)" value={item.facultyMs} onChange={v => setItem({ ...item, facultyMs: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Degree Level (EN)" value={item.level} onChange={v => setItem({ ...item, level: v })} />
          <FormField label="Degree Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Degree Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />
          <FormField label="Degree Level (MS)" value={item.levelMs} onChange={v => setItem({ ...item, levelMs: v })} />

          <FormField label="Duration (EN)" value={item.duration} onChange={v => setItem({ ...item, duration: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />
          <FormField label="Duration (MS)" value={item.durationMs} onChange={v => setItem({ ...item, durationMs: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR / Year)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated: Apr,Jul,Oct)" value={item.intakes} onChange={v => setItem({ ...item, intakes: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          <FormField label="Intake Months (MS)" value={item.intakesMs} onChange={v => setItem({ ...item, intakesMs: v })} />
          
          <SectionDivider label="University Binding" />
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Assigned University</label>
            <select
              value={item.universityId || ""}
              onChange={(e) => {
                const uid = parseInt(e.target.value);
                const uni = universities.find(u => u.id === uid);
                if (uni) {
                  setItem({
                    ...item,
                    universityId: uni.id,
                    universityName: uni.name,
                    universityNameAr: uni.nameAr,
                    universityNameZh: uni.nameZh
                  , universityNameMs: uni.nameZh
                  });
                } else {
                  setItem({ ...item, universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "" , universityNameMs: "" });
                }
              }}
              className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
            >
              <option value="">-- Select a University --</option>
              {universities.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
    />
  );
}

export default CoursesManager;
