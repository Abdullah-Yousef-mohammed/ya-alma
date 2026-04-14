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

function BlogManager() {
  return (
    <CrudTable<BlogPost>
      title="Blog Posts"
      apiPath="/blog"
      columns={[
        { key: "title", label: "Title (EN)" },
        { key: "category", label: "Category" },
        { key: "date", label: "Date" },
        { key: "published", label: "Status", render: (p) => <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{p.published ? "Published" : "Draft"}</span> },
      ]}
      emptyRow={{ id: 0, title: "", titleAr: "", titleZh: "", titleMs: "", category: "", categoryAr: "", categoryZh: "", categoryMs: "", date: new Date().toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" }), imageUrl: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", videoUrlMs: "", excerpt: "", excerptAr: "", excerptZh: "", excerptMs: "", contentEn: "", contentAr: "", contentZh: "", contentMs: "", published: false }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Post Metadata" />
          <FormField label="Title (English)" value={item.title} onChange={v => setItem({ ...item, title: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          <FormField label="Category (English)" value={item.category} onChange={v => setItem({ ...item, category: v })} />
          <FormField label="Category (Arabic)" value={item.categoryAr} onChange={v => setItem({ ...item, categoryAr: v })} />
          <FormField label="Category (Chinese)" value={item.categoryZh} onChange={v => setItem({ ...item, categoryZh: v })} />
          <FormField label="Category (Malay)" value={item.categoryMs} onChange={v => setItem({ ...item, categoryMs: v })} />
          <FormField label="Date" value={item.date} onChange={v => setItem({ ...item, date: v })} />
          <FormField label="Cover Image URL" value={item.imageUrl} onChange={v => setItem({ ...item, imageUrl: v })} />
          
          <SectionDivider label="Vlog / Embedded Videos" />
          <FormField label="YouTube Embed Code or URL (English)" value={item.videoUrl || ''} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Embed Code or URL (Arabic)" value={item.videoUrlAr || ''} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Embed Code or URL (Chinese)" value={item.videoUrlZh || ''} onChange={v => setItem({ ...item, videoUrlZh: v })} />
          <FormField label="YouTube Embed Code or URL (Malay)" value={item.videoUrlMs || ''} onChange={v => setItem({ ...item, videoUrlMs: v })} />
          
          <div className="flex items-center gap-3 mt-4">
            <input type="checkbox" id="published" checked={item.published || false} onChange={e => setItem({ ...item, published: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="published" className="text-sm font-medium text-gray-700 dark:text-gray-300">Published (visible to site visitors)</label>
          </div>

          <SectionDivider label="Excerpt (shown on blog listing)" />
          <TextAreaField label="Excerpt (English)" value={item.excerpt} onChange={v => setItem({ ...item, excerpt: v })} rows={2} />
          <TextAreaField label="Excerpt (Arabic)" value={item.excerptAr} onChange={v => setItem({ ...item, excerptAr: v })} rows={2} />
          <TextAreaField label="Excerpt (Chinese)" value={item.excerptZh} onChange={v => setItem({ ...item, excerptZh: v })} rows={2} />
          <TextAreaField label="Excerpt (Malay)" value={item.excerptMs} onChange={v => setItem({ ...item, excerptMs: v })} rows={2} />

          <SectionDivider label="Full Article Content" />
          <TextAreaField label="Content (English)" value={item.contentEn} onChange={v => setItem({ ...item, contentEn: v })} rows={8} />
          <TextAreaField label="Content (Arabic)" value={item.contentAr} onChange={v => setItem({ ...item, contentAr: v })} rows={8} />
          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={8} />
          <TextAreaField label="Content (Malay)" value={item.contentMs} onChange={v => setItem({ ...item, contentMs: v })} rows={8} />
        </>
      )}
    />
  );
}

export default BlogManager;
