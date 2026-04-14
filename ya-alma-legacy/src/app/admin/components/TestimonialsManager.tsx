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

// ─── Testimonials Manager ───────────────────────────
function TestimonialsManager() {
  return (
    <CrudTable<Testimonial>
      title="Student Testimonials"
      apiPath="/testimonials"
      columns={[
        { key: "studentName", label: "Student Name" },
        { key: "universityName", label: "University" },
        { key: "rating", label: "Rating", render: (p) => <span className="text-yellow-500 font-bold">{"★".repeat(p.rating || 5)}</span> },
      ]}
      emptyRow={{ id: 0, studentName: "", studentNameZh: "", studentNameMs: "", universityName: "", universityNameAr: "", universityNameZh: "", universityNameMs: "", reviewText: "", reviewTextAr: "", reviewTextZh: "", reviewTextMs: "", rating: 5 }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Student Summary" />
          <FormField label="Student Name (Latin / EN)" value={item.studentName || ""} onChange={v => setItem({ ...item, studentName: v })} />
          <FormField label="Student Name (Chinese)" value={item.studentNameZh || ""} onChange={v => setItem({ ...item, studentNameZh: v })} />
          <FormField label="Student Name (Malay)" value={item.studentNameMs || ""} onChange={v => setItem({ ...item, studentNameMs: v })} />

          <SectionDivider label="University Attribution" />
          <FormField label="University Name (English)" value={item.universityName || ""} onChange={v => setItem({ ...item, universityName: v })} />
          <FormField label="University Name (Arabic)" value={item.universityNameAr || ""} onChange={v => setItem({ ...item, universityNameAr: v })} />
          <FormField label="University Name (Chinese)" value={item.universityNameZh || ""} onChange={v => setItem({ ...item, universityNameZh: v })} />
          <FormField label="University Name (Malay)" value={item.universityNameMs || ""} onChange={v => setItem({ ...item, universityNameMs: v })} />

          <SectionDivider label="Review Data" />
          <div className="col-span-1 md:col-span-2">
             <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Star Rating (1 to 5)</label>
             <input type="number" min="1" max="5" value={item.rating || 5} onChange={(e) => setItem({...item, rating: parseInt(e.target.value) || 5})} className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--color-brand-navy)] transition-all"/>
          </div>
          <TextAreaField label="Review Text (English)" value={item.reviewText || ""} onChange={v => setItem({ ...item, reviewText: v })} rows={3} />
          <TextAreaField label="Review Text (Arabic)" value={item.reviewTextAr || ""} onChange={v => setItem({ ...item, reviewTextAr: v })} rows={3} />
          <TextAreaField label="Review Text (Chinese)" value={item.reviewTextZh || ""} onChange={v => setItem({ ...item, reviewTextZh: v })} rows={3} />
          <TextAreaField label="Review Text (Malay)" value={item.reviewTextMs || ""} onChange={v => setItem({ ...item, reviewTextMs: v })} rows={3} />
        </>
      )}
    />
  );
}

export default TestimonialsManager;
