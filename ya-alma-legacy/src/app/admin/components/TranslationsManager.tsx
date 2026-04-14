"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField, TextAreaField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function TranslationsManager() {
  const [items, setItems] = React.useState<{key: string, en: string, ar: string, zh: string}[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [editing, setEditing] = React.useState<any>(null);

  const fetchItems = () => {
    setLoading(true);
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/translations`)
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  React.useEffect(() => { fetchItems(); }, []);

  const handleSave = () => {
    if (!editing) return;
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/translations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    }).then(() => {
      setEditing(null);
      fetchItems();
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Site Content Translations</h2>
          <p className="text-sm text-gray-500">Edit every character, label, and section on the entire site across all languages.</p>
        </div>
        <button
           onClick={() => { setEditing({ key: "", en: "", ar: "", zh: "" }); }}
           className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm"
        >
          <Plus size={18} /> Add New Key
        </button>
      </div>

      {editing && (
        <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6 sticky top-24 z-10 w-full max-w-4xl mx-auto shadow-2xl ring-4 ring-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Edit Key: {editing.key || "New Key"}</h3>
            <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-600 dark:text-gray-400"><X size={20} /></button>
          </div>
          <div className="grid gap-4 mb-6">
            <FormField label="Translation Key (e.g. nav.home)" value={editing.key} onChange={v => setEditing({...editing, key: v})} />
            <TextAreaField label="English" value={editing.en} onChange={v => setEditing({...editing, en: v})} rows={2} />
            <TextAreaField label="Arabic" value={editing.ar} onChange={v => setEditing({...editing, ar: v})} rows={2} />
            <TextAreaField label="Chinese" value={editing.zh} onChange={v => setEditing({...editing, zh: v})} rows={2} />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition">Save Translation</button>
            <button onClick={() => setEditing(null)} className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        {loading ? <div className="p-12 text-center text-gray-400">Loading...</div> : items.length === 0 ? <div className="p-12 text-center text-gray-400">No translations found. Wait for seeding.</div> : (
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-50 dark:bg-[#11192d] shadow-sm z-0">
                <tr className="border-b border-gray-100 dark:border-gray-800 text-left font-bold text-gray-500 uppercase text-xs">
                  <th className="px-6 py-4 w-48">Key</th>
                  <th className="px-6 py-4">English</th>
                  <th className="px-6 py-4 text-right">Arabic</th>
                  <th className="px-6 py-4">Chinese</th>
                  <th className="px-6 py-4 text-right">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item) => (
                  <tr key={item.key} className="hover:bg-gray-50 dark:bg-[#11192d]/50 transition">
                    <td className="px-6 py-4 font-mono text-xs text-[var(--color-brand-navy)] font-bold">{item.key}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.en}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200 text-right" dir="rtl" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.ar}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.zh}</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setEditing(item)} className="p-2 rounded-lg text-blue-500 hover:bg-blue-50">
                        <Pencil size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TranslationsManager;
