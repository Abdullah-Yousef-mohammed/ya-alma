"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { Briefcase, ArrowLeft, CheckCircle, Globe, Star, MessageCircle, Save, Plus, Trash2 } from "lucide-react";

export default function EditSpecializationVisual() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  
  // We use English as default admin language for editing layout so it doesn't flip LTR/RTL crazily,
  // but we edit BOTH languages simultaneously.
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [universities, setUniversities] = useState<any[]>([]);

  // Fetch Specialization and Global Universities for dropdowns
  useEffect(() => {
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/specializations/${id}`).then(r => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/universities`).then(r => r.json()),
    ])
    .then(([spData, unis]) => {
      // Parse JSON
      const parsedData = {
        ...spData,
        degreeLevels: JSON.parse(spData.degreeLevelsJson || "[]"),
        topUniversities: JSON.parse(spData.topUniversitiesJson || "[]"),
        budgetUniversities: JSON.parse(spData.budgetUniversitiesJson || "[]"),
        courseYears: JSON.parse(spData.courseYearsJson || "[]"),
        careerJobsEn: JSON.parse(spData.careerJobsEnJson || "[]"),
        careerJobsAr: JSON.parse(spData.careerJobsArJson || "[]"),
        careerJobsZh: JSON.parse(spData.careerJobsZhJson || "[]"),
        seVsCs: spData.seVsCsJson ? JSON.parse(spData.seVsCsJson) : { questionEn: "", questionAr: "", sePointsEn: [], sePointsAr: [], otherTitleEn: "", otherTitleAr: "", otherPointsEn: [], otherPointsAr: [] },
        countryComparisons: JSON.parse(spData.countryComparisonsJson || "[]"),
        spotlightUniversities: JSON.parse(spData.spotlightUniversitiesJson || "[]")
      };
      // Ensure seVsCs points are arrays
      if(!parsedData.seVsCs.sePointsEn) parsedData.seVsCs.sePointsEn = [];
      if(!parsedData.seVsCs.sePointsAr) parsedData.seVsCs.sePointsAr = [];
      if(!parsedData.seVsCs.otherPointsEn) parsedData.seVsCs.otherPointsEn = [];
      if(!parsedData.seVsCs.otherPointsAr) parsedData.seVsCs.otherPointsAr = [];

      setData(parsedData);
      setUniversities(unis);
      setLoading(false);
    });
  }, [id]);

  const handleSave = () => {
    setSaving(true);
    // Package back to JSON strings
    const payload = {
      ...data,
      degreeLevelsJson: JSON.stringify(data.degreeLevels),
      topUniversitiesJson: JSON.stringify(data.topUniversities),
      budgetUniversitiesJson: JSON.stringify(data.budgetUniversities),
      courseYearsJson: JSON.stringify(data.courseYears),
      careerJobsEnJson: JSON.stringify(data.careerJobsEn),
      careerJobsArJson: JSON.stringify(data.careerJobsAr),
      careerJobsZhJson: JSON.stringify(data.careerJobsZh),
      seVsCsJson: JSON.stringify(data.seVsCs),
      countryComparisonsJson: JSON.stringify(data.countryComparisons),
      spotlightUniversitiesJson: JSON.stringify(data.spotlightUniversities)
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/specializations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(() => {
      setSaving(false);
      alert("Changes saved successfully!");
    });
  };

  const handleUniSelect = (uniId: string, arrayName: 'topUniversities' | 'budgetUniversities' | 'spotlightUniversities', index: number) => {
    const uni = universities.find(u => u.id.toString() === uniId);
    if (!uni) return;
    
    const newArray = [...data[arrayName]];
    newArray[index] = {
      ...newArray[index],
      nameEn: uni.name,
      nameAr: uni.nameAr,
      nameZh: uni.nameZh,
      href: `/universities/${uni.id}`,
      // Fill defaults if available
      worldRanking: arrayName === 'topUniversities' ? (uni.ranking || "-") : undefined,
      annualFeesUSD: (uni.registrationFeeMyr ? `RM ${uni.registrationFeeMyr * 10}` : "RM 0"), // Rough fallback
    };
    setData({ ...data, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName: string, defaultObj: any) => {
    setData({ ...data, [arrayName]: [...data[arrayName], defaultObj] });
  };
  const removeArrayItem = (arrayName: string, index: number) => {
    const arr = [...data[arrayName]];
    arr.splice(index, 1);
    setData({ ...data, [arrayName]: arr });
  };

  if (loading || !data) return <div className="p-20 text-center font-bold">Loading Visual Editor...</div>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-40 font-sans text-gray-800">
      {/* ── Sticky Save Header ── */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 p-4 shadow-sm z-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin')} className="p-2 hover:bg-gray-100 rounded-full text-[var(--color-brand-navy)] transition-colors"><ArrowLeft size={20} /></button>
          <div>
            <h1 className="text-xl font-black text-[var(--color-brand-navy)]">Visual Editor: <span className="text-[var(--color-brand-gold)]">{data.titleEn}</span></h1>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Click on any text box below to edit live.</p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-[var(--color-brand-navy)] hover:bg-[#131d36] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all">
          <Save size={18} /> {saving ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      {/* ── Visual Editor Body ── */}
      <div className="container mx-auto px-4 py-8 pointer-events-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="bg-white p-8 rounded-3xl mb-8 border-t-[6px] border-[var(--color-brand-gold)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--color-brand-gold)]/10 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="bg-[var(--color-brand-navy)]/10 p-2 rounded-lg">
              <Globe className="text-[var(--color-brand-navy)]" size={24} />
            </div>
            <h2 className="text-2xl font-black text-[var(--color-brand-navy)] tracking-tight">Hero Section</h2>
            <span className="text-[10px] font-bold bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] px-3 py-1 rounded-full uppercase tracking-widest ml-auto border border-[var(--color-brand-gold)]/30">EN / AR / ZH</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* English */}
            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2 block">Title (English)</label>
              <input value={data.titleEn} onChange={e=>setData({...data, titleEn: e.target.value})} className="w-full bg-white text-[var(--color-brand-navy)] border border-gray-200 rounded-xl px-4 py-3 text-xl font-black outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm" />
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mt-5 mb-2 block">Tagline (English)</label>
              <textarea value={data.heroTaglineEn} onChange={e=>setData({...data, heroTaglineEn: e.target.value})} className="w-full bg-white text-gray-700 border border-gray-200 rounded-xl px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm resize-none" rows={4}></textarea>
            </div>
            {/* Arabic */}
            <div dir="rtl" className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2 block">Title (Arabic)</label>
              <input value={data.titleAr} onChange={e=>setData({...data, titleAr: e.target.value})} className="w-full bg-white text-[var(--color-brand-navy)] border border-gray-200 rounded-xl px-4 py-3 text-xl font-black outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm" />
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mt-5 mb-2 block">Tagline (Arabic)</label>
              <textarea value={data.heroTaglineAr} onChange={e=>setData({...data, heroTaglineAr: e.target.value})} className="w-full bg-white text-gray-700 border border-gray-200 rounded-xl px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm resize-none" rows={4}></textarea>
            </div>
            {/* Chinese */}
            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2 block">Title (Chinese)</label>
              <input value={data.titleZh || ""} onChange={e=>setData({...data, titleZh: e.target.value})} className="w-full bg-white text-[var(--color-brand-navy)] border border-gray-200 rounded-xl px-4 py-3 text-xl font-black outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm" />
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider mt-5 mb-2 block">Tagline (Chinese)</label>
              <textarea value={data.heroTaglineZh || ""} onChange={e=>setData({...data, heroTaglineZh: e.target.value})} className="w-full bg-white text-gray-700 border border-gray-200 rounded-xl px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] transition-all shadow-sm resize-none" rows={4}></textarea>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4 relative z-10">
            <div className="bg-[var(--color-brand-navy)]/10 p-2 rounded-lg">
              <MessageCircle className="text-[var(--color-brand-navy)]" size={24} />
            </div>
            <h2 className="text-2xl font-black text-[var(--color-brand-navy)] tracking-tight">Introduction Content</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div>
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">English Intro</label>
              <textarea value={data.introEn} onChange={e=>setData({...data, introEn: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 min-h-[160px] outline-none focus:ring-2 focus:ring-[var(--color-brand-navy)]/10 focus:border-[var(--color-brand-navy)] transition-all shadow-inner resize-none" />
            </div>
            <div dir="rtl">
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">Arabic Intro</label>
              <textarea value={data.introAr} onChange={e=>setData({...data, introAr: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 min-h-[160px] outline-none focus:ring-2 focus:ring-[var(--color-brand-navy)]/10 focus:border-[var(--color-brand-navy)] transition-all shadow-inner resize-none" />
            </div>
            <div>
              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">Chinese Intro</label>
              <textarea value={data.introZh || ""} onChange={e=>setData({...data, introZh: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 min-h-[160px] outline-none focus:ring-2 focus:ring-[var(--color-brand-navy)]/10 focus:border-[var(--color-brand-navy)] transition-all shadow-inner resize-none" />
            </div>
          </div>
        </div>

        {/* DEGREE LEVELS */}
        <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-[var(--color-brand-navy)]/10 p-2 rounded-lg">
                <CheckCircle className="text-[var(--color-brand-navy)]" size={24} />
              </div>
              <h2 className="text-2xl font-black text-[var(--color-brand-navy)] tracking-tight">Degree Levels & Fees</h2>
            </div>
            <button onClick={() => addArrayItem("degreeLevels", { titleEn: "", titleAr: "", titleZh: "", feesRangeEn: "RM 0 - RM 0", feesRangeAr: "RM 0 - RM 0", feesRangeZh: "RM 0 - RM 0", durationEn: "3 Years", durationAr: "3 سنوات", durationZh: "3年" })} className="flex items-center gap-2 bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] px-4 py-2 rounded-xl text-sm font-bold border border-[var(--color-brand-navy)]/10 hover:bg-[var(--color-brand-navy)]/10 hover:-translate-y-0.5 transition-all"><Plus size={16}/> Add Level</button>
          </div>
          
          <div className="space-y-4 relative z-10">
            {data.degreeLevels.map((lvl: any, i: number) => (
              <div key={i} className="flex gap-4 items-center bg-gray-50/70 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors shadow-sm relative group overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--color-brand-gold)]"></div>
                
                <div className="flex-1 grid grid-cols-3 gap-6 ml-2">
                  <div className="space-y-3">
                    <input placeholder="Level UI (EN) e.g. Bachelor" value={lvl.titleEn} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleEn=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Fees (EN) e.g. RM 15,000" value={lvl.feesRangeEn} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeEn=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl text-green-700 focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Duration (EN) e.g. 3 Years" value={lvl.durationEn} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationEn=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-3 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                  </div>
                  <div dir="rtl" className="space-y-3">
                    <input placeholder="Level (AR)" value={lvl.titleAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Fees (AR)" value={lvl.feesRangeAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl text-green-700 focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Duration (AR)" value={lvl.durationAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-3 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                  </div>
                  <div className="space-y-3">
                    <input placeholder="Level (ZH)" value={lvl.titleZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Fees (ZH)" value={lvl.feesRangeZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-3 border border-gray-200 rounded-xl text-green-700 focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                    <input placeholder="Duration (ZH)" value={lvl.durationZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-3 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none transition-all shadow-inner" />
                  </div>
                </div>
                
                <button onClick={() => removeArrayItem("degreeLevels", i)} className="p-3 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-xl transition-colors ml-4"><Trash2 size={24}/></button>
              </div>
            ))}
          </div>
        </div>

        {/* TOP UNIVERSITIES */}
        <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-[var(--color-brand-navy)]/10 p-2 rounded-lg">
                <Star className="text-[var(--color-brand-navy)]" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[var(--color-brand-navy)] tracking-tight">Top Universities List</h2>
                <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wider">Link a university from the database, then override specifics.</p>
              </div>
            </div>
            <button onClick={() => addArrayItem("topUniversities", { nameEn: "New", nameAr: "New", nameZh: "New", href: "#", worldRanking: "-", fieldRanking: "-", annualFeesUSD: "RM 0", discountEn: "-", discountAr: "-" })} className="flex items-center gap-2 bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] px-4 py-2 rounded-xl text-sm font-bold border border-[var(--color-brand-navy)]/10 hover:bg-[var(--color-brand-navy)]/10 hover:-translate-y-0.5 transition-all"><Plus size={16}/> Add University Row</button>
          </div>
          
          <div className="space-y-6 relative z-10">
            {data.topUniversities.map((uni: any, i: number) => (
              <div key={i} className="bg-gray-50/50 p-6 rounded-3xl border border-gray-200 shadow-sm relative group">
                <button onClick={() => removeArrayItem("topUniversities", i)} className="absolute top-6 right-6 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"><Trash2 size={20}/></button>
                
                <div className="mb-5 pr-14">
                  <label className="text-xs font-bold text-[var(--color-brand-gold)] uppercase tracking-wider block mb-2 flex items-center gap-1.5"><Star size={14} className="fill-current text-[var(--color-brand-gold)]" /> Easy Link (Overrides Name & URL)</label>
                  <select 
                    className="w-full md:w-1/2 p-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[var(--color-brand-navy)] focus:ring-2 focus:ring-[var(--color-brand-gold)]/50 focus:border-[var(--color-brand-gold)] outline-none shadow-sm transition-all"
                    onChange={(e) => handleUniSelect(e.target.value, 'topUniversities', i)}
                    value={universities.find(u => `/universities/${u.id}` === uni.href)?.id || ""}
                  >
                    <option value="">-- Select DB University to Link --</option>
                    {universities.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </select>
                </div>
                
                {/* Editable Fields */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name EN</label><input value={uni.nameEn} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameEn=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl font-bold text-[var(--color-brand-navy)] focus:ring-[var(--color-brand-gold)]" /></div>
                  <div dir="rtl"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name AR</label><input value={uni.nameAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl font-bold text-[var(--color-brand-navy)] focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name ZH</label><input value={uni.nameZh || ""} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameZh=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl font-bold text-[var(--color-brand-navy)] focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">URL Link</label><input value={uni.href} onChange={e=>{const arr=[...data.topUniversities]; arr[i].href=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl text-blue-600 font-mono focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Annual Fee (RM)</label><input value={uni.annualFeesUSD} onChange={e=>{const arr=[...data.topUniversities]; arr[i].annualFeesUSD=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl font-black text-green-700 focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">World Rank</label><input value={uni.worldRanking} onChange={e=>{const arr=[...data.topUniversities]; arr[i].worldRanking=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Field Rank</label><input value={uni.fieldRanking} onChange={e=>{const arr=[...data.topUniversities]; arr[i].fieldRanking=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-white border border-gray-200 rounded-xl focus:ring-[var(--color-brand-gold)]" /></div>
                  <div><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount EN</label><input value={uni.discountEn} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountEn=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-orange-50 border border-orange-200 rounded-xl text-orange-700 font-bold focus:ring-orange-400" /></div>
                  <div dir="rtl"><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount AR</label><input value={uni.discountAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-orange-50 border border-orange-200 rounded-xl text-orange-700 font-bold focus:ring-orange-400" /></div>
                  <div><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount ZH</label><input value={uni.discountZh || ""} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountZh=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-3 bg-orange-50 border border-orange-200 rounded-xl text-orange-700 font-bold focus:ring-orange-400" /></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
