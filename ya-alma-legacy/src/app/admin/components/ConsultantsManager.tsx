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

function ConsultantsManager() {
  return (
    <CrudTable<any>
      title="Academic Consultants"
      apiPath="/consultants"
      columns={[
        { key: "sortOrder", label: "Order", render: (v) => <span className="font-bold text-gray-500">{v.sortOrder}</span> },
        { key: "avatar", label: "Avatar", render: (v) => <img src={v.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(v.name||'C')}`} className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100 dark:bg-gray-800" alt="avatar" /> },
        { key: "name", label: "Name (EN)", render: (v) => <span className="font-bold">{v.name}</span> },
        { key: "title", label: "Title / Role", render: (v) => <span className="text-gray-500 text-sm">{v.title}</span> },
        { key: "whatsappNumber", label: "WhatsApp", render: (v) => <span className="text-sm font-mono">+{(v.whatsappNumber||"").replace(/\D/g, '')}</span> },
      ]}
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", nameMs: "", title: "", titleAr: "", titleZh: "", titleMs: "", avatar: "", whatsappNumber: "", sortOrder: 1, active: true }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Consultant Identity" />
          <FormField label="Full Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Full Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Full Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="Full Name (Malay)" value={item.nameMs} onChange={v => setItem({ ...item, nameMs: v })} />
          
          <SectionDivider label="Role & Contact" />
          <FormField label="Title / Role (EN) e.g. Academic Consultant" value={item.title} onChange={v => setItem({ ...item, title: v })} />
          <FormField label="Title / Role (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title / Role (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title / Role (MS)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          <FormField label="WhatsApp Number (with country code, no + or spaces) e.g. 60143240499" value={item.whatsappNumber} onChange={v => setItem({ ...item, whatsappNumber: v })} />
          <FormField label="Profile Image / Avatar URL" value={item.avatar} onChange={v => setItem({ ...item, avatar: v })} />
          
          <SectionDivider label="Visibility" />
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Sort Order</label>
            <input type="number" value={item.sortOrder || 1} onChange={e => setItem({ ...item, sortOrder: parseInt(e.target.value) || 1 })}
              className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200" />
            <p className="text-xs text-gray-400 mt-1">Lower numbers appear first in the widget.</p>
          </div>
        </>
      )}
    />
  );
}

export default ConsultantsManager;
