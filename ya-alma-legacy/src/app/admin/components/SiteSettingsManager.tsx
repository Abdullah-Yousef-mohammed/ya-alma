"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users, Hash, Camera, PlaySquare, Link2
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

const SOCIAL_KEY = "ya_alma_social_links";

export function getSocialLinks() {
  if (typeof window === "undefined") return defaultSocial;
  try {
    const stored = localStorage.getItem(SOCIAL_KEY);
    return stored ? JSON.parse(stored) : defaultSocial;
  } catch { return defaultSocial; }
}

const defaultSocial = {
  tiktok:    "https://www.tiktok.com/@yaalmalegacy",
  instagram: "https://www.instagram.com/yaalmalegacy",
  website:   "https://yaalmalegacy.com",
  youtube:   "https://www.youtube.com/@yaalmalegacy",
};

function SiteSettingsManager() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "Y.A ALMA LEGACY", siteNameAr: "Y.A ALMA LEGACY",
    whatsappNumber: "601158722903", email: "info@yaalmalegacy.com",
    phone: "+601158722903", address: "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
  });
  const [social, setSocial] = useState(defaultSocial);
  const [saved, setSaved] = useState(false);
  const [socialSaved, setSocialSaved] = useState(false);

  useEffect(() => {
    setSocial(getSocialLinks());
  }, []);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const handleSaveSocial = () => {
    localStorage.setItem(SOCIAL_KEY, JSON.stringify(social));
    setSocialSaved(true);
    setTimeout(() => setSocialSaved(false), 3000);
  };

  const socialFields = [
    { key: "tiktok",    label: "TikTok",    icon: <Hash size={18} />,       placeholder: "https://www.tiktok.com/@yourpage",      color: "text-gray-800 dark:text-white" },
    { key: "instagram", label: "Instagram", icon: <Camera size={18} />,     placeholder: "https://www.instagram.com/yourpage",    color: "text-pink-500" },
    { key: "website",   label: "Website",   icon: <Globe size={18} />,      placeholder: "https://yaalmalegacy.com",              color: "text-blue-500" },
    { key: "youtube",   label: "YouTube",   icon: <PlaySquare size={18} />, placeholder: "https://www.youtube.com/@yourpage",     color: "text-red-500" },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      {/* ── General Settings ── */}
      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
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

      {/* ── Social Media Links ── */}
      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
          <Link2 size={20} className="text-[var(--color-brand-gold)]" /> Social Media Links
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          روابط حسابات التواصل الاجتماعي — تظهر في الفوتر وأماكن أخرى في الموقع. احفظ بعد أي تعديل.
        </p>

        <div className="space-y-4">
          {socialFields.map(field => (
            <div key={field.key} className="flex items-center gap-4 group">
              {/* Icon badge */}
              <div className={`w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 ${field.color}`}>
                {field.icon}
              </div>
              {/* Label + Input */}
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {field.label}
                </label>
                <input
                  type="url"
                  value={social[field.key as keyof typeof social]}
                  onChange={e => setSocial({ ...social, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-100 text-sm focus:ring-2 focus:ring-[var(--color-brand-gold)] focus:border-transparent outline-none transition-all"
                  dir="ltr"
                />
              </div>
              {/* Preview link */}
              {social[field.key as keyof typeof social] && (
                <a
                  href={social[field.key as keyof typeof social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors flex-shrink-0"
                  title="Preview link"
                >
                  <Globe size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleSaveSocial}
            className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1a2f6b] transition-colors"
          >
            <Save size={18} /> حفظ روابط السوشيال ميديا
          </button>
          {socialSaved && (
            <span className="text-green-600 dark:text-green-400 font-bold text-sm animate-pulse flex items-center gap-1">
              ✓ تم الحفظ! سيتم تطبيق التغييرات فور تحديث الصفحة
            </span>
          )}
        </div>
      </div>

      {/* ── Logo & Branding ── */}
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


function SiteSettingsManager() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "Y.A ALMA LEGACY", siteNameAr: "Y.A ALMA LEGACY",
    whatsappNumber: "601158722903", email: "info@yaalmalegacy.com",
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
