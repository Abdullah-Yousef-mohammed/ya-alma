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

function VideosManager() {
  return (
    <CrudTable<any>
      title="Campus Videos (Video Tours)"
      apiPath="/videos"
      columns={[
        { key: "sortOrder", label: "Order", render: (v) => <span className="font-bold text-gray-500">{v.sortOrder}</span> },
        { key: "titleEn", label: "Title (EN)" },
        { key: "youtubeUrl", label: "YouTube Link", render: (v) => <a href={v.youtubeUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">{v.youtubeUrl}</a> },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", youtubeUrl: "", youtubeUrlAr: "", youtubeUrlZh: "", youtubeUrlMs: "", thumbnailUrl: "", thumbnailUrlAr: "", thumbnailUrlZh: "", thumbnailUrlMs: "", sortOrder: 1, isPublic: true }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Titles" />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          
          <SectionDivider label="Media (English / Default)" />
          <FormField label="YouTube URL (EN)" value={item.youtubeUrl} onChange={v => setItem({ ...item, youtubeUrl: v })} />
          <FormField label="Cover Thumbnail URL (EN)" value={item.thumbnailUrl} onChange={v => setItem({ ...item, thumbnailUrl: v })} />

          <SectionDivider label="Media (Arabic - optional)" />
          <FormField label="YouTube URL (AR)" value={item.youtubeUrlAr} onChange={v => setItem({ ...item, youtubeUrlAr: v })} />
          <FormField label="Cover Thumbnail URL (AR)" value={item.thumbnailUrlAr} onChange={v => setItem({ ...item, thumbnailUrlAr: v })} />

          <SectionDivider label="Media (Chinese - optional)" />
          <FormField label="YouTube URL (ZH)" value={item.youtubeUrlZh} onChange={v => setItem({ ...item, youtubeUrlZh: v })} />
          <FormField label="YouTube URL (MS)" value={item.youtubeUrlMs} onChange={v => setItem({ ...item, youtubeUrlMs: v })} />
          <FormField label="Cover Thumbnail URL (ZH)" value={item.thumbnailUrlZh} onChange={v => setItem({ ...item, thumbnailUrlZh: v })} />
          <FormField label="Cover Thumbnail URL (MS)" value={item.thumbnailUrlMs} onChange={v => setItem({ ...item, thumbnailUrlMs: v })} />
          
          <SectionDivider label="Layout" />
          
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Sort Order</label>
            <input type="number" value={item.sortOrder || 1} onChange={e => setItem({ ...item, sortOrder: parseInt(e.target.value) || 1 })}
              className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200" />
            <p className="text-xs text-gray-400 mt-1">Order 1 will be featured as the MAIN large video.</p>
          </div>
        </>
      )}
    />
  );
}

export default VideosManager;
