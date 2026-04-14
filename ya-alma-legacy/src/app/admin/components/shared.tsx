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


export function ExtendedFieldsForm({ item, setItem }: any) {
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
      <TextAreaField label="Undergraduate/Bachelor (EN)" value={item.admissionUndergradEn} onChange={(v: string) => setItem({ ...item, admissionUndergradEn: v })} rows={3} />
      <TextAreaField label="Undergraduate/Bachelor (AR)" value={item.admissionUndergradAr} onChange={(v: string) => setItem({ ...item, admissionUndergradAr: v })} rows={3} />
      <TextAreaField label="Undergraduate/Bachelor (ZH)" value={item.admissionUndergradZh} onChange={(v: string) => setItem({ ...item, admissionUndergradZh: v })} rows={3} />
      <TextAreaField label="Undergraduate/Bachelor (MS)" value={item.admissionUndergradMs} onChange={(v: string) => setItem({ ...item, admissionUndergradMs: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (EN)" value={item.admissionPostgradEn} onChange={(v: string) => setItem({ ...item, admissionPostgradEn: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (AR)" value={item.admissionPostgradAr} onChange={(v: string) => setItem({ ...item, admissionPostgradAr: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (ZH)" value={item.admissionPostgradZh} onChange={(v: string) => setItem({ ...item, admissionPostgradZh: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (MS)" value={item.admissionPostgradMs} onChange={(v: string) => setItem({ ...item, admissionPostgradMs: v })} rows={3} />

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
  title, apiPath, columns, emptyRow, renderForm, customAction 
}: {
  title: string;
  apiPath: string;
  columns: { key: string; label: string; render?: (item: T) => React.ReactNode }[];
  emptyRow: T;
  renderForm: (item: T, setItem: (item: T) => void) => React.ReactNode;
  customAction?: (item: T) => React.ReactNode;
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
      const keys = Object.keys(editing).filter(k => k.endsWith('Ar') && typeof (editing as any)[k] === 'string' && (editing as any)[k].trim() !== '');
      
      const translateText = async (text: string, targetLang: string) => {
        const res = await authFetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang })
        });
        const data = await res.json();
        return data.translatedText || text;
      };

      for (const k of keys) {
        const arText = (editing as any)[k];
        const base = k.replace(/Ar$/, '');
        
        const enKey = (base + 'En' in editing) ? base + 'En' : base;
        const zhKey = base + 'Zh';
        const msKey = base + 'Ms';

        updates[enKey] = await translateText(arText, 'en');
        if (zhKey in editing) updates[zhKey] = await translateText(arText, 'zh-CN');
        if (msKey in editing) updates[msKey] = await translateText(arText, 'ms');
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
    authFetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
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

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        <button
          onClick={() => { setEditing({ ...emptyRow }); setIsNew(true); }}
          className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a2542] transition-colors"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      {editing && (
        <div className="bg-white dark:bg-[#0b0f19] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6 max-h-[70vh] overflow-y-auto relative">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white dark:bg-[#0b0f19] pb-2 z-10 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
               {isNew ? "Add New" : "Edit"} {title.replace(/s$/, "")}
               <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ml-2">Arabic Default</span>
            </h3>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-gray-400 hover:text-gray-600 dark:text-gray-400">
              <X size={20} />
            </button>
          </div>
          <div className={`grid md:grid-cols-2 gap-4 mb-6 ${!showTranslations ? '[&_.translation-field-container]:hidden' : ''}`}>
            {renderForm(editing, setEditing)}
          </div>
          <div className="flex items-center justify-between sticky bottom-0 bg-white dark:bg-[#0b0f19] pt-3 pb-1 border-t border-gray-100 dark:border-gray-800 mt-4 z-10">
            <div className="flex gap-3">
              <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition">
                <Save size={16} /> Save
              </button>
              <button onClick={() => { setEditing(null); setIsNew(false); }} className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition">
                Cancel
              </button>
            </div>
            <div className="flex gap-3 flex-wrap justify-end">
              <button onClick={() => setShowTranslations(!showTranslations)} className="px-5 py-2.5 rounded-xl font-bold text-sm text-[var(--color-brand-navy)] bg-blue-50 hover:bg-blue-100 flex items-center gap-2 transition">
                <Languages size={16} /> {showTranslations ? "Hide Translations" : "Show Translations"}
              </button>
              <button onClick={handleAITranslate} disabled={isTranslating} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50">
                <Globe size={16} /> {isTranslating ? "Translating..." : "Auto-Translate (AI)"}
              </button>
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
                {items.map((item: any) => (
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
