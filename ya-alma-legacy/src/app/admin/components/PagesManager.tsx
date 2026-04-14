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

// ─── Custom Pages Manager ───────────────────────────
function PagesManager() {
  return (
    <CrudTable<any>
      title="Custom Pages"
      apiPath="/pages"
      columns={[
        { key: "titleEn", label: "Title (EN)" },
        { key: "slug", label: "URL Slug", render: (p) => <span className="font-mono text-xs text-blue-500">/p/{p.slug}</span> },
        { key: "published", label: "Status", render: (p) => <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{p.published ? "Published" : "Draft"}</span> },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", slug: "", contentEn: "", contentAr: "", contentZh: "", contentMs: "", published: false }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Page Metadata" />
          <FormField label="URL Slug (e.g. about-us)" value={item.slug} onChange={v => setItem({ ...item, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} />
          <div className="flex items-center gap-3 mt-4">
            <input type="checkbox" id="publishedPage" checked={item.published || false} onChange={e => setItem({ ...item, published: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="publishedPage" className="text-sm font-medium text-gray-700 dark:text-gray-300">Published (visible to site visitors)</label>
          </div>

          <SectionDivider label="Localized Titles" />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <SectionDivider label="Full Page Content (HTML Allowed)" />
          <TextAreaField label="Content (English)" value={item.contentEn} onChange={v => setItem({ ...item, contentEn: v })} rows={12} />
          <TextAreaField label="Content (Arabic)" value={item.contentAr} onChange={v => setItem({ ...item, contentAr: v })} rows={12} />
          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={12} />
          <TextAreaField label="Content (Malay)" value={item.contentMs} onChange={v => setItem({ ...item, contentMs: v })} rows={12} />
        </>
      )}
    />
  );
}

export default PagesManager;
