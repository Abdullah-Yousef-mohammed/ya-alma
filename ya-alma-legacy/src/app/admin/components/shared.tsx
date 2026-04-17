"use client";
import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, ImageIcon, FileText, Languages, Globe } from "lucide-react";
import { API, authFetch } from "../types";

export function FormField({ label, value, onChange, type = "text", className = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  const [uploading, setUploading] = React.useState(false);
  const isTranslationField = label.includes("(EN)") || label.includes("(English)") || label.includes("(ZH)") || label.includes("(Chinese)") || label.includes("(MS)") || label.includes("(Malay)") || className.includes("translation-field");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    try {
      const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) onChange(data.url);
    } catch (err) {
      console.error(err);
      alert("Failed to upload image. Is the backend running?");
    } finally {
      setUploading(false);
    }
  };

  const isImageUrl = label.toLowerCase().includes("image") || label.toLowerCase().includes("logo") || label.toLowerCase().includes("url");

  return (
    <div className={isTranslationField ? "translation-field-container" : ""}>
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</label>
        {isImageUrl && type === "text" && (
          <label className={`text-[10px] px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 transition ${uploading ? "bg-gray-100 dark:bg-gray-800 text-gray-400" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}>
            {uploading ? "Uploading..." : <><ImageIcon size={10} /> Upload File</>}
            <input type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} disabled={uploading} />
          </label>
        )}
      </div>
      <input type={type} value={value || ""} onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200" />
    </div>
  );
}


export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="md:col-span-2 pt-4 pb-1 border-t border-gray-200 dark:border-gray-700 mt-2">
      <span className="text-xs font-black text-[var(--color-brand-navy)] uppercase tracking-widest">{label}</span>
    </div>
  );
}


export function ExtendedFieldsForm({ item, setItem, type = "university" }: { item: any, setItem: any, type?: "university" | "languageCenter" }) {
  const req1Label = type === "languageCenter" ? "General English / Program 1" : "Undergraduate/Bachelor";
  const req2Label = type === "languageCenter" ? "Exam Prep / Program 2" : "Postgraduate/Master";

  return (
    <>
      <SectionDivider label="Scholarships & Aid" />
      <TextAreaField label="Scholarship Desc (EN)" value={item.scholarshipDescEn} onChange={(v: string) => setItem({ ...item, scholarshipDescEn: v })} rows={2} />
      <TextAreaField label="Scholarship Desc (AR)" value={item.scholarshipDescAr} onChange={(v: string) => setItem({ ...item, scholarshipDescAr: v })} rows={2} />
      <TextAreaField label="Scholarship Desc (ZH)" value={item.scholarshipDescZh} onChange={(v: string) => setItem({ ...item, scholarshipDescZh: v })} rows={2} />
      <TextAreaField label="Scholarship Desc (MS)" value={item.scholarshipDescMs} onChange={(v: string) => setItem({ ...item, scholarshipDescMs: v })} rows={2} />
      <FormField label="Max Discount (e.g. 50%)" value={item.scholarshipDiscount} onChange={(v: string) => setItem({ ...item, scholarshipDiscount: v })} />
      <FormField label="Min Criteria (e.g. GPA 3.8)" value={item.scholarshipCriteria} onChange={(v: string) => setItem({ ...item, scholarshipCriteria: v })} />

      <SectionDivider label="Admission Requirements (Separate bullets with | )" />
      <TextAreaField label={`${req1Label} (EN)`} value={item.admissionUndergradEn} onChange={(v: string) => setItem({ ...item, admissionUndergradEn: v })} rows={3} />
      <TextAreaField label={`${req1Label} (AR)`} value={item.admissionUndergradAr} onChange={(v: string) => setItem({ ...item, admissionUndergradAr: v })} rows={3} />
      <TextAreaField label={`${req1Label} (ZH)`} value={item.admissionUndergradZh} onChange={(v: string) => setItem({ ...item, admissionUndergradZh: v })} rows={3} />
      <TextAreaField label={`${req1Label} (MS)`} value={item.admissionUndergradMs} onChange={(v: string) => setItem({ ...item, admissionUndergradMs: v })} rows={3} />
      <TextAreaField label={`${req2Label} (EN)`} value={item.admissionPostgradEn} onChange={(v: string) => setItem({ ...item, admissionPostgradEn: v })} rows={3} />
      <TextAreaField label={`${req2Label} (AR)`} value={item.admissionPostgradAr} onChange={(v: string) => setItem({ ...item, admissionPostgradAr: v })} rows={3} />
      <TextAreaField label={`${req2Label} (ZH)`} value={item.admissionPostgradZh} onChange={(v: string) => setItem({ ...item, admissionPostgradZh: v })} rows={3} />
      <TextAreaField label={`${req2Label} (MS)`} value={item.admissionPostgradMs} onChange={(v: string) => setItem({ ...item, admissionPostgradMs: v })} rows={3} />

      <SectionDivider label="Additional Media" />
      <FormField label="Top Banner Image URL" value={item.bannerUrl} onChange={(v: string) => setItem({ ...item, bannerUrl: v })} />
      <FormField label="Location Map Overlay Image" value={item.locationMapUrl} onChange={(v: string) => setItem({ ...item, locationMapUrl: v })} />
      <FormField label="Gallery Image 4 URL" value={item.galleryUrl4} onChange={(v: string) => setItem({ ...item, galleryUrl4: v })} />
      
      <SectionDivider label="Intakes" />
      <div className="md:col-span-2">
        <FormField label="Intake Months (Comma separated)" value={item.nextIntakeMonths} onChange={(v: string) => setItem({ ...item, nextIntakeMonths: v })} />
      </div>
    </>
  );
}




export function TextAreaField({ label, value, onChange, rows = 3, className = "" }: { label: string; value: string; onChange: (v: string) => void; rows?: number; className?: string }) {
  const isTranslationField = label.includes("(EN)") || label.includes("(English)") || label.includes("(ZH)") || label.includes("(Chinese)") || label.includes("(MS)") || label.includes("(Malay)") || className.includes("translation-field");

  return (
    <div className={`md:col-span-2 ${isTranslationField ? "translation-field-container" : ""}`}>
      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">{label}</label>
      <textarea rows={rows} value={value || ""} onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-gray-200 resize-y" />
    </div>
  );
}


export function CrudTable<T extends { id?: number }>({ 
  title, apiPath, columns, emptyRow, renderForm, customAction, itemsFilter, headerActions
}: {
  title: string;
  apiPath: string;
  columns: { key: string; label: string; render?: (item: T) => React.ReactNode }[];
  emptyRow: T;
  renderForm: (item: T, setItem: (item: T) => void) => React.ReactNode;
  customAction?: (item: T) => React.ReactNode;
  itemsFilter?: (items: T[]) => T[];
  headerActions?: React.ReactNode;
}) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<T | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);

  const handleAITranslate = async () => {
    if (!editing) return;
    setIsTranslating(true);
    try {
      const updates: any = { ...editing };
      
      const translateText = async (text: string, targetLang: string) => {
        const res = await authFetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang })
        });
        const data = await res.json();
        return data.translatedText || text;
      };

      const keysWithAr = Object.keys(updates).filter(k => k.endsWith('Ar'));
      for (const arKey of keysWithAr) {
        const base = arKey.replace(/Ar$/, '');
        const enKey = (base + 'En' in updates) ? base + 'En' : base;
        const zhKey = base + 'Zh';
        const msKey = base + 'Ms';

        const enText = updates[enKey];
        const arText = updates[arKey];

        let sourceText = '';
        if (typeof arText === 'string' && arText.trim() !== '') {
          sourceText = arText;
        } else if (typeof enText === 'string' && enText.trim() !== '') {
          sourceText = enText;
        }

        if (sourceText) {
          if (enKey !== base && typeof updates[enKey] === 'string' && updates[enKey].trim() === '') updates[enKey] = await translateText(sourceText, 'en');
          if (typeof updates[arKey] === 'string' && updates[arKey].trim() === '') updates[arKey] = await translateText(sourceText, 'ar');
          if (zhKey in updates && typeof updates[zhKey] === 'string' && updates[zhKey].trim() === '') updates[zhKey] = await translateText(sourceText, 'zh-CN');
          if (msKey in updates && typeof updates[msKey] === 'string' && updates[msKey].trim() === '') updates[msKey] = await translateText(sourceText, 'ms');
        }
      }
      setEditing(updates);
      alert('Translation Complete! (Click Save to commit)');
    } catch(e) {
      console.error(e);
      alert('Translation failed');
    }
    setIsTranslating(false);
  };

  const fetchItems = () => {
    setLoading(true);
    authFetch(`${API}${apiPath}`)
      .then(async r => {
        if (!r.ok) throw new Error(`API returned ${r.status}`);
        return r.json();
      })
      .then(data => { 
        setItems(Array.isArray(data) ? data : []); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Fetch items error:", err);
        setItems([]);
        setLoading(false);
      });
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = () => {
    if (!editing) return;
    const method = isNew ? "POST" : "PUT";
    const url = isNew ? `${API}${apiPath}` : `${API}${apiPath}/${(editing as any).id}`;
    const payload = { ...editing } as any;
    if (isNew) delete payload.id;
    authFetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      setEditing(null);
      setIsNew(false);
      fetchItems();
    });
  };

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    authFetch(`${API}${apiPath}/${id}`, { method: "DELETE" })
      .then(() => fetchItems());
  };

  const displayedItems = itemsFilter ? itemsFilter(items) : items;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">{title}</h2>
          {headerActions}
        </div>
        <button
          onClick={() => { setEditing({ ...emptyRow }); setIsNew(true); }}
          className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a2542] transition-colors"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/50 backdrop-blur-sm transition-all" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl flex flex-col max-h-[90vh] md:max-h-[85vh] relative overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-5 md:p-6 border-b border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-[#0b0f19]/95 z-20 w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                 {isNew ? "Add New" : "Edit"} {title.replace(/s$/, "")}
                 <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ml-2 hidden sm:inline-block">Arabic Default</span>
              </h3>
              <button onClick={() => { setEditing(null); setIsNew(false); }} className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors">
                <X size={24} />
              </button>
            </div>
            
            {/* Scrollable Form Body */}
            <div className={`flex-1 overflow-y-auto p-5 md:p-6 grid md:grid-cols-2 gap-4 md:gap-6 bg-white dark:bg-[#0b0f19] ${!showTranslations ? '[&_.translation-field-container]:hidden' : ''}`}>
              {renderForm(editing, setEditing)}
            </div>
            
            {/* Footer */}
            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4 md:p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#11192d] z-20 w-full gap-4">
              <div className="flex gap-3 w-full sm:w-auto">
                <button onClick={handleSave} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition shadow-sm">
                  <Save size={16} /> Save
                </button>
                <button onClick={() => { setEditing(null); setIsNew(false); }} className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-sm">
                  Cancel
                </button>
              </div>
              <div className="flex gap-3 flex-wrap justify-end w-full sm:w-auto">
                <button onClick={() => setShowTranslations(!showTranslations)} className="flex-1 sm:flex-none px-4 md:px-5 py-2.5 rounded-xl font-bold text-sm text-[var(--color-brand-navy)] bg-blue-50 border border-blue-100 hover:bg-blue-100 flex items-center justify-center gap-2 transition shadow-sm">
                  <Languages size={16} /> <span className="hidden sm:inline">{showTranslations ? "Hide Translations" : "Show Translations"}</span><span className="sm:hidden">{showTranslations ? "Hide" : "Show"} All</span>
                </button>
                <button onClick={handleAITranslate} disabled={isTranslating} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 md:px-5 py-2.5 rounded-xl font-bold text-sm hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50 shadow-sm">
                  <Globe size={16} /> <span className="hidden sm:inline">{isTranslating ? "Translating..." : "Auto-Translate (AI)"}</span><span className="sm:hidden">AI Auto</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading...</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-gray-400">No items found. Click &quot;Add New&quot; to create one.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#11192d] border-b border-gray-100 dark:border-gray-800">
                  <th className="px-6 py-4 text-left font-bold text-gray-500 text-xs uppercase">ID</th>
                  {columns.map(col => (
                    <th key={col.key} className="px-6 py-4 text-left font-bold text-gray-500 text-xs uppercase">{col.label}</th>
                  ))}
                  <th className="px-6 py-4 text-right font-bold text-gray-500 text-xs uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedItems.map((item: any) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 dark:bg-[#11192d]/50">
                    <td className="px-6 py-4 text-gray-400 font-mono text-xs">{item.id}</td>
                    {columns.map(col => (
                      <td key={col.key} className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium max-w-[200px] truncate">
                        {col.render ? col.render(item) : (item as any)[col.key]}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {customAction && customAction(item)}
                        <button onClick={() => { setEditing({ ...item }); setIsNew(false); }} title="Edit Raw JSON" className="p-2 rounded-lg text-blue-500 hover:bg-blue-50">
                          <Pencil size={16} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 rounded-lg text-red-500 hover:bg-red-50">
                          <Trash2 size={16} />
                        </button>
                      </div>
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

// ─── Helper Components ──────────────────────────────




// ─── Universities Manager ──────────────────────────


// ─── Language Centers Manager ───────────────────────


// ─── Courses Manager ────────────────────────────────


// ─── Language Programs Manager ────────────────────────


// ─── Blog Posts Manager ─────────────────────────────






// ─── Specializations Manager ───────────────────────




// Simple Helper for the Navigation Manager
