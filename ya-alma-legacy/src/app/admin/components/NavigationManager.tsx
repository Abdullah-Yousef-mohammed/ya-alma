"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";
import { FormField } from "./shared";

// ─── Menu / Navbar Builder ───────────────────────────
function NavigationManager() {
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [viewMode, setViewMode] = useState<"visual" | "json">("visual");
  const [jsonText, setJsonText] = useState("[]");

  useEffect(() => {
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/config/mainNavigation`)
      .then(r => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(data => {
        if (data && data.settingValue) {
          try {
            const parsed = JSON.parse(data.settingValue);
            setMenuData(parsed);
            setJsonText(data.settingValue);
          } catch(e) {}
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
    const dataToSave = viewMode === "visual" ? JSON.stringify(menuData) : jsonText;
    
    if (viewMode === "json") {
      try {
        const p = JSON.parse(jsonText);
        setMenuData(p);
      } catch(e) {
        setMessage("Invalid JSON Format!");
        setTimeout(() => setMessage(""), 4000);
        return;
      }
    }

    setSaving(true);
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/config`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ settingKey: "mainNavigation", settingValue: dataToSave })
    }).then(() => {
      setSaving(false);
      setMessage("Navigation Menu Saved Successfully!");
      if (viewMode === "visual") setJsonText(JSON.stringify(menuData, null, 2));
      setTimeout(() => setMessage(""), 3000);
    });
  };

  const moveItem = (list: any[], index: number, direction: number) => {
    if (index + direction < 0 || index + direction >= list.length) return list;
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[index + direction];
    newList[index + direction] = temp;
    return newList;
  };

  const updateRoot = (index: number, updates: any) => {
    const newData = [...menuData];
    newData[index] = { ...newData[index], ...updates };
    setMenuData(newData);
  };

  return (
    <div className="bg-white dark:bg-[#0b0f19] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Navbar & Menu Configuration</h2>
          <p className="text-gray-500 text-sm">Visually construct your website's main dropdown menu structure.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button onClick={() => { setViewMode("visual"); try { setMenuData(JSON.parse(jsonText)); } catch(e){} }} className={`px-4 py-1.5 text-sm font-bold rounded-md flex items-center gap-2 ${viewMode === "visual" ? "bg-white dark:bg-[#0b0f19] shadow text-[var(--color-brand-navy)]" : "text-gray-500 hover:text-gray-700 dark:text-gray-300"}`}>
              <Monitor size={16} /> Visual
            </button>
            <button onClick={() => { setViewMode("json"); setJsonText(JSON.stringify(menuData, null, 2)); }} className={`px-4 py-1.5 text-sm font-bold rounded-md flex items-center gap-2 ${viewMode === "json" ? "bg-white dark:bg-[#0b0f19] shadow text-[var(--color-brand-navy)]" : "text-gray-500 hover:text-gray-700 dark:text-gray-300"}`}>
              <Code size={16} /> JSON
            </button>
          </div>
          {message && <span className={`text-sm font-bold ${message.includes("Invalid") ? "text-red-500" : "text-green-600"}`}>{message}</span>}
          <button 
            onClick={handleSave} 
            disabled={saving || loading}
            className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a2542] transition-colors"
          >
            <Save size={18} /> {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-[#11192d] min-h-[600px]">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading Configuration...</div>
        ) : viewMode === "json" ? (
          <textarea 
            className="w-full h-[600px] font-mono text-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            spellCheck={false}
          />
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto pb-20">
            {menuData.map((root, rootIdx) => (
              <div key={`root-${rootIdx}`} className="bg-white dark:bg-[#0b0f19] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="bg-[var(--color-brand-navy)] text-white font-bold w-6 h-6 rounded flex items-center justify-center text-xs">{rootIdx + 1}</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">{root.en || "New Item"}</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setMenuData(moveItem(menuData, rootIdx, -1))} className="p-1.5 hover:bg-white dark:bg-[#0b0f19] rounded"><ChevronUp size={16} /></button>
                    <button onClick={() => setMenuData(moveItem(menuData, rootIdx, 1))} className="p-1.5 hover:bg-white dark:bg-[#0b0f19] rounded"><ChevronDown size={16} /></button>
                    <button onClick={() => setMenuData(menuData.filter((_, i) => i !== rootIdx))} className="p-1.5 hover:bg-red-50 text-red-500 rounded ml-2"><Trash2 size={16} /></button>
                  </div>
                </div>
                
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <FormField label="English Title" value={root.en || ''} onChange={v => updateRoot(rootIdx, {en: v})} />
                  <FormField label="Arabic Title" value={root.ar || ''} onChange={v => updateRoot(rootIdx, {ar: v})} />
                  <FormField label="Chinese Title" value={root.zh || ''} onChange={v => updateRoot(rootIdx, {zh: v})} />
                  <FormField label="Target Link (href)" value={root.href || ""} onChange={v => updateRoot(rootIdx, {href: v})} />
                </div>

                {/* Level 2: Categories or Items */}
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"><FolderPlus size={16}/> Dropdown Contents</h4>
                      <div className="flex gap-2">
                        <button onClick={() => updateRoot(rootIdx, { categories: [...(root.categories||[]), { en: "New Category", ar: "", zh: "", items: [] }] })} className="text-xs bg-white dark:bg-[#0b0f19] border border-gray-300 px-3 py-1.5 rounded-md font-bold hover:bg-gray-100 dark:bg-gray-800 flex items-center gap-1">+ Category</button>
                        <button onClick={() => updateRoot(rootIdx, { items: [...(root.items||[]), { en: "New Link", ar: "", zh: "", href: "" }] })} className="text-xs bg-white dark:bg-[#0b0f19] border border-gray-300 px-3 py-1.5 rounded-md font-bold hover:bg-gray-100 dark:bg-gray-800 flex items-center gap-1">+ Simple Link</button>
                      </div>
                    </div>

                    {/* Direct Items */}
                    {root.items && root.items.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {root.items.map((sub: any, subIdx: number) => (
                          <div key={`si-${subIdx}`} className="bg-white dark:bg-[#0b0f19] border border-gray-300 rounded p-3 flex gap-4 relative">
                             <div className="absolute top-2 right-2 flex gap-1">
                               <button onClick={() => updateRoot(rootIdx, { items: moveItem(root.items, subIdx, -1) })}><ChevronUp size={14} className="text-gray-400 hover:text-gray-800 dark:text-gray-200"/></button>
                               <button onClick={() => updateRoot(rootIdx, { items: moveItem(root.items, subIdx, 1) })}><ChevronDown size={14} className="text-gray-400 hover:text-gray-800 dark:text-gray-200"/></button>
                               <button onClick={() => updateRoot(rootIdx, { items: root.items.filter((_:any, i:number) => i !== subIdx) })}><X size={14} className="text-red-400 hover:text-red-600"/></button>
                             </div>
                             <div className="flex-1 space-y-2">
                               <div className="flex gap-2">
                                 <input className="w-1/3 border px-2 py-1 text-xs" placeholder="EN Name" value={sub.en || ''} onChange={e => { const n = [...root.items]; n[subIdx].en = e.target.value; updateRoot(rootIdx, {items: n}); }} />
                                 <input className="w-1/3 border px-2 py-1 text-xs" placeholder="AR Name" value={sub.ar || ''} onChange={e => { const n = [...root.items]; n[subIdx].ar = e.target.value; updateRoot(rootIdx, {items: n}); }} />
                                 <input className="w-1/3 border px-2 py-1 text-xs" placeholder="ZH Name" value={sub.zh || ''} onChange={e => { const n = [...root.items]; n[subIdx].zh = e.target.value; updateRoot(rootIdx, {items: n}); }} />
                               </div>
                               <input className="w-full border px-2 py-1 text-xs font-mono" placeholder="/link" value={sub.href || ''} onChange={e => { const n = [...root.items]; n[subIdx].href = e.target.value; updateRoot(rootIdx, {items: n}); }} />
                             </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Categories */}
                    {root.categories && root.categories.length > 0 && (
                      <div className="space-y-4">
                        {root.categories.map((cat: any, catIdx: number) => (
                          <div key={`cat-${catIdx}`} className="bg-white dark:bg-[#0b0f19] border-2 border-blue-100 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex gap-2 w-3/4">
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat EN" value={cat.en || ''} onChange={e => { const n = [...root.categories]; n[catIdx].en = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat AR" value={cat.ar || ''} onChange={e => { const n = [...root.categories]; n[catIdx].ar = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat ZH" value={cat.zh || ''} onChange={e => { const n = [...root.categories]; n[catIdx].zh = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                              </div>
                              <div className="flex gap-1">
                               <button onClick={() => updateRoot(rootIdx, { categories: moveItem(root.categories, catIdx, -1) })} className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded"><ChevronUp size={16}/></button>
                               <button onClick={() => updateRoot(rootIdx, { categories: moveItem(root.categories, catIdx, 1) })} className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 rounded"><ChevronDown size={16}/></button>
                               <button onClick={() => updateRoot(rootIdx, { categories: root.categories.filter((_:any, i:number) => i !== catIdx) })} className="p-1 bg-red-50 text-red-500 hover:bg-red-100 rounded ml-1"><Trash2 size={16}/></button>
                              </div>
                            </div>
                            
                            {/* Category Items */}
                            <div className="pl-6 border-l-2 border-gray-100 dark:border-gray-800 space-y-2">
                              {cat.items && cat.items.map((sub: any, subIdx: number) => (
                                <div key={`csi-${subIdx}`} className="bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded px-3 py-2 flex gap-4 relative">
                                  <div className="absolute top-1 right-1 flex gap-1">
                                    <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = moveItem(cat.items, subIdx, -1); updateRoot(rootIdx, {categories: nc}); }}><ChevronUp size={14} className="text-gray-400 hover:text-gray-800 dark:text-gray-200"/></button>
                                    <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = moveItem(cat.items, subIdx, 1); updateRoot(rootIdx, {categories: nc}); }}><ChevronDown size={14} className="text-gray-400 hover:text-gray-800 dark:text-gray-200"/></button>
                                    <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = cat.items.filter((_:any, i:number) => i !== subIdx); updateRoot(rootIdx, {categories: nc}); }}><X size={14} className="text-red-400 hover:text-red-600"/></button>
                                  </div>
                                  <div className="flex-1 space-y-1.5 pr-8">
                                   <div className="flex gap-2">
                                     <input className="w-1/3 border px-2 py-1 text-xs" placeholder="EN Name" value={sub.en || ''} onChange={e => { const nc = [...root.categories]; nc[catIdx].items[subIdx].en = e.target.value; updateRoot(rootIdx, {categories: nc}); }} />
                                     <input className="w-1/3 border px-2 py-1 text-xs" placeholder="AR Name" value={sub.ar || ''} onChange={e => { const nc = [...root.categories]; nc[catIdx].items[subIdx].ar = e.target.value; updateRoot(rootIdx, {categories: nc}); }} />
                                     <input className="w-1/3 border px-2 py-1 text-xs" placeholder="ZH Name" value={sub.zh || ''} onChange={e => { const nc = [...root.categories]; nc[catIdx].items[subIdx].zh = e.target.value; updateRoot(rootIdx, {categories: nc}); }} />
                                   </div>
                                   <input className="w-full border px-2 py-1 text-xs font-mono" placeholder="/link" value={sub.href || ''} onChange={e => { const nc = [...root.categories]; nc[catIdx].items[subIdx].href = e.target.value; updateRoot(rootIdx, {categories: nc}); }} />
                                 </div>
                                </div>
                              ))}
                              <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = [...(cat.items||[]), {en: "Link", ar: "", zh: "", href: ""}]; updateRoot(rootIdx, {categories: nc}); }} className="text-xs font-bold text-[var(--color-brand-gold)] bg-amber-50 hover:bg-amber-100 flex items-center justify-center w-full py-1.5 rounded border border-amber-200 border-dashed">+ Add Link to Category</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button onClick={() => setMenuData([...menuData, { en: "New Top Level Menu", ar: "", zh: "", href: "", categories: [] }])} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:bg-gray-50 dark:bg-[#11192d] flex items-center justify-center gap-2 transition-colors">
              <Plus size={20} /> Add New Top Level Menu Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationManager;
