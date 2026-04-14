"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function SiteSettingsManager() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "Y.A ALMA LEGACY", siteNameAr: "Y.A ALMA LEGACY",
    whatsappNumber: "60143240499", email: "admissions@yaalmalegacy.com",
    phone: "+60 14-324 0499", address: "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
  });
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <div className="max-w-3xl">
      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <Settings size={20} className="text-[var(--color-brand-gold)]" /> General Settings
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FormField label="Site Name (English)" value={settings.siteName} onChange={v => setSettings({ ...settings, siteName: v })} />
          <FormField label="Site Name (Arabic)" value={settings.siteNameAr} onChange={v => setSettings({ ...settings, siteNameAr: v })} />
          <FormField label="WhatsApp Number" value={settings.whatsappNumber} onChange={v => setSettings({ ...settings, whatsappNumber: v })} />
          <FormField label="Phone Number" value={settings.phone} onChange={v => setSettings({ ...settings, phone: v })} />
          <FormField label="Email Address" value={settings.email} onChange={v => setSettings({ ...settings, email: v })} type="email" />
          <div className="md:col-span-2">
            <FormField label="Office Address" value={settings.address} onChange={v => setSettings({ ...settings, address: v })} />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors">
            <Save size={18} /> Save Settings
          </button>
          {saved && <span className="text-green-600 font-bold text-sm animate-pulse">✓ Settings Saved Successfully!</span>}
        </div>
      </div>

      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <ImageIcon size={20} className="text-[var(--color-brand-gold)]" /> Logo & Branding
        </h2>
        <p className="text-gray-500 text-sm mb-4">Upload a new logo. Supported formats: PNG, SVG, JPG.</p>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-[var(--color-brand-navy)] rounded-xl flex items-center justify-center">
              <span className="text-[var(--color-brand-gold)] font-black text-lg">YA</span>
            </div>
          </div>
          <div>
            <label className="cursor-pointer bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a2542] transition-colors inline-block">
              Upload New Logo
              <input type="file" accept="image/*" className="hidden" />
            </label>
            <p className="text-xs text-gray-400 mt-2">Max size: 2MB. Recommended: 200x200px.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteSettingsManager;
