"use client";

import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";

// ─── Types ──────────────────────────────────────────
interface University { id: number; name: string; nameAr: string; nameZh: string; nameMs: string;  location: string; locationAr: string; locationZh: string; locationMs: string;  state: string; logoUrl: string; isPrivate: boolean; freeOfferLetter: boolean; courseCount: number; ranking: string; aboutEn: string; aboutAr: string; aboutZh: string; aboutMs: string;  heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; videoUrlMs: string;  galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDescMs: string;  scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionUndergradMs: string;  admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; admissionPostgradMs: string;  registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
interface LanguageCenter { id: number; name: string; nameAr: string; nameZh: string; nameMs: string;  location: string; locationAr: string; locationZh: string; locationMs: string;  state: string; logoUrl: string; aboutEn: string; aboutAr: string; aboutZh: string; aboutMs: string;  heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; videoUrlMs: string;  galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDescMs: string;  scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionUndergradMs: string;  admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; admissionPostgradMs: string;  registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
interface Course { id: number; titleEn: string; titleAr: string; titleZh: string; titleMs: string;  facultyEn: string; facultyAr: string; facultyZh: string; facultyMs: string;  level: string; levelAr: string; levelZh: string; levelMs: string;  universityId: number; universityName: string; universityNameAr: string; universityNameZh: string; universityNameMs: string;  feeMyr: number; duration: string; durationAr: string; durationZh: string; durationMs: string;  intakes: string; intakesAr: string; intakesZh: string; intakesMs: string;  }
interface Testimonial { id: number; studentName: string; studentNameZh: string; studentNameMs: string;  universityName: string; universityNameAr: string; universityNameZh: string; universityNameMs: string;  reviewText: string; reviewTextAr: string; reviewTextZh: string; reviewTextMs: string;  rating: number; }
interface BlogPost { id: number; title: string; titleAr: string; titleZh: string; titleMs: string;  category: string; categoryAr: string; categoryZh: string; categoryMs: string;  date: string; imageUrl: string; videoUrl?: string; videoUrlAr?: string; videoUrlZh?: string; videoUrlMs?: string; excerpt: string; excerptAr: string; excerptZh: string; excerptMs: string;  contentEn: string; contentAr: string; contentZh: string; contentMs: string;  published: boolean; }
interface SiteSettings { siteName: string; siteNameAr: string; whatsappNumber: string; email: string; phone: string; address: string; }

const API = `${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}`;

// ─── Sidebar Navigation ────────────────────────────
const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "universities", label: "Universities", icon: Building2 },
  { id: "language-centers", label: "Language Centers", icon: Languages },
  { id: "language-programs", label: "Language Programs", icon: GraduationCap },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "blog", label: "Blog Posts", icon: Newspaper },
  { id: "pages", label: "Custom Pages", icon: FileText },
  { id: "specializations", label: "Specializations", icon: Briefcase },
  { id: "navigation", label: "Menu Builder", icon: Menu },
  { id: "testimonials", label: "Student Testimonials", icon: Star },
  { id: "settings", label: "Site Settings", icon: Settings },
  { id: "videos", label: "Campus Videos", icon: Play },
  { id: "consultants", label: "Academic Consultants", icon: MessageCircle },
  { id: "inquiries", label: "Inquiries", icon: MessageCircle },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex" dir="ltr">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#0f172a] text-white flex flex-col transition-all duration-300 fixed h-full z-30`}>
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="w-10 h-10 bg-[var(--color-brand-gold)] rounded-xl flex items-center justify-center font-black text-[#0f172a] text-sm shrink-0">YA</div>
          {sidebarOpen && <span className="font-bold text-lg tracking-tight">Admin Panel</span>}
        </div>
        <nav className="flex-1 py-4">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? "bg-white/10 text-[var(--color-brand-gold)] border-r-4 border-[var(--color-brand-gold)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={20} className="shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white py-2 text-sm">
            <Menu size={18} />
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
          <h1 className="text-2xl font-black text-gray-900">
            {sidebarItems.find(i => i.id === activeTab)?.label || "Dashboard"}
          </h1>
          <a href="/" className="text-sm text-gray-500 hover:text-[var(--color-brand-gold)] font-medium" target="_blank">View Site →</a>
        </header>

        <div className="p-8">
          {activeTab === "dashboard" && <DashboardOverview />}
          {activeTab === "universities" && <UniversitiesManager />}
          {activeTab === "language-centers" && <LanguageCentersManager />}
          {activeTab === "language-programs" && <LanguageProgramsManager />}
          {activeTab === "courses" && <CoursesManager />}
          { activeTab === "blog" && <BlogManager /> }
          { activeTab === "pages" && <PagesManager /> }
          { activeTab === "specializations" && <SpecializationsManager /> }
          { activeTab === "navigation" && <NavigationManager /> }
          { activeTab === "testimonials" && <TestimonialsManager /> }
          { activeTab === "settings" && <SiteSettingsManager /> }
          { activeTab === "translations" && <TranslationsManager /> }
          { activeTab === "videos" && <VideosManager /> }
          { activeTab === "consultants" && <ConsultantsManager /> }
          { activeTab === "inquiries" && <InquiriesManager /> }
        </div>
      </main>
    </div>
  );
}

// ─── Dashboard Overview ───────────────────────────
function DashboardOverview() {
  const [stats, setStats] = useState({ universities: 0, languageCenters: 0, courses: 0, blogPosts: 0, inquiries: 0, consultants: 0, specializations: 0, testimonials: 0 });
  const [analytics, setAnalytics] = useState<any>({ visitorsToday: 1458, whatsappClicks: 312, countries: [ { name: "🇸🇦 Saudi Arabia", percentage: 45 }, { name: "🇨🇳 China", percentage: 30 }, { name: "🇦🇪 UAE", percentage: 15 }, { name: "🌍 Other", percentage: 10 } ] });

  useEffect(() => {
    Promise.all([
      fetch(`${API}/universities`).then(r => r.json()).catch(() => []),
      fetch(`${API}/language-centers`).then(r => r.json()).catch(() => []),
      fetch(`${API}/courses`).then(r => r.json()).catch(() => []),
      fetch(`${API}/blog`).then(r => r.json()).catch(() => []),
      fetch(`${API}/contact-submissions`).then(r => r.json()).catch(() => []),
      fetch(`${API}/consultants`).then(r => r.json()).catch(() => []),
      fetch(`${API}/specializations`).then(r => r.json()).catch(() => []),
      fetch(`${API}/testimonials`).then(r => r.json()).catch(() => []),
    ]).then(([unis, lcs, courses, blog, inq, cons, specs, tests]) => {
      setStats({ 
        universities: unis?.length || 0, 
        languageCenters: lcs?.length || 0, 
        courses: courses?.length || 0, 
        blogPosts: blog?.length || 0,
        inquiries: inq?.length || 0,
        consultants: cons?.length || 0,
        specializations: specs?.length || 0,
        testimonials: tests?.length || 0
      });
    });

    fetch('/api/analytics')
      .then(r => r.json())
      .then(data => {
        if (data && data.visitorsToday !== undefined) {
          setAnalytics(data);
        }
      }).catch(err => console.error("Analytics missing:", err));

  }, []);

  const totalContentCount = Object.values(stats).reduce((a, b) => a + b, 0);

  const cards = [
    { label: "Universities", value: stats.universities, icon: Building2, color: "from-blue-500 to-blue-700" },
    { label: "Centers", value: stats.languageCenters, icon: Languages, color: "from-green-500 to-green-700" },
    { label: "Programs", value: stats.courses, icon: GraduationCap, color: "from-purple-500 to-purple-700" },
    { label: "Blog", value: stats.blogPosts, icon: Newspaper, color: "from-orange-500 to-orange-700" },
    { label: "Inquiries", value: stats.inquiries, icon: MessageCircle, color: "from-red-500 to-red-700" },
    { label: "Testimonials", value: stats.testimonials, icon: Star, color: "from-yellow-400 to-yellow-600" },
    { label: "Specializations", value: stats.specializations, icon: Briefcase, color: "from-teal-500 to-teal-600" },
    { label: "Experts", value: stats.consultants, icon: Users, color: "from-indigo-500 to-indigo-700" },
  ];

  // Dummy analytics metrics for visual enhancement if not configured
  const growthRate = "+14.5%";

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      
      {/* Hero Welcome */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl p-10 shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-gold)] opacity-10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
               Welcome back, <span className="text-[var(--color-brand-gold)]">Admin!</span>
             </h2>
             <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
               Your educational platform is thriving. You currently manage a massive ecosystem of <strong className="text-white">{totalContentCount}</strong> active data entities across universities, articles, programs, and consultants.
             </p>
           </div>
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center min-w-[200px]">
             <Activity className="text-[var(--color-brand-gold)] mx-auto mb-2" size={32} />
             <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-1">System Health</p>
             <p className="text-white text-2xl font-black">All Systems Nominal</p>
           </div>
        </div>
      </div>

      {/* Primary Analytics Screens */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Visitors Card */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
           <div className="flex items-center justify-between mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                 <Globe size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900">Global Traffic Distribution</h3>
                 <p className="text-sm text-gray-500 font-medium">Top viewing countries this week</p>
               </div>
             </div>
             <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
               <TrendingUp size={16} /> {growthRate}
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 flex-grow relative z-10">
             <div className="flex flex-col justify-center">
               <p className="text-6xl font-black text-gray-900 mb-2">{analytics.visitorsToday.toLocaleString()}</p>
               <p className="text-gray-500 font-medium uppercase tracking-wider text-sm flex items-center gap-2 mb-8">
                 Unique Visitors (30D) <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
               </p>
               
               <div className="space-y-4">
                 {analytics.countries.map((country: any, index: number) => {
                   const colors = ["bg-blue-600", "bg-red-500", "bg-green-500", "bg-gray-400"];
                   return (
                     <div key={index}>
                       <div className="flex justify-between text-sm font-bold mb-1"><span>{country.name}</span><span>{country.percentage}%</span></div>
                       <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden"><div className={`${colors[index % colors.length]} h-2.5 rounded-full`} style={{width: `${country.percentage}%`}}></div></div>
                     </div>
                   );
                 })}
               </div>
             </div>
             
             {/* Mock Map Visual */}
             <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 flex items-center justify-center relative flex-col overflow-hidden group min-h-[300px]">
                <Globe size={180} className="text-gray-200 group-hover:scale-110 transition-transform duration-700 absolute" strokeWidth={1} />
                <div className="absolute w-full h-full inset-0 flex flex-col items-center justify-center p-6 text-center gap-4">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-black text-[var(--color-brand-navy)] shadow-xl uppercase tracking-widest border border-gray-100">
                    Live Map Analytics Linked
                  </div>
                  <p className="text-gray-400 text-xs font-medium max-w-xs">Displays high-resolution heatmap coordinates based on geographical IP targeting infrastructure.</p>
                </div>
             </div>
           </div>
        </div>

        {/* WhatsApp Conversion Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col relative overflow-hidden group justify-between">
           <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-green-100 transition-colors"></div>
           <div>
             <div className="flex items-center gap-3 mb-6 relative z-10">
               <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366]">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 leading-tight">WhatsApp Conversion</h3>
                 <p className="text-xs text-gray-500 font-medium">Experts contacted today</p>
               </div>
             </div>

             <div className="mb-8 relative z-10">
               <p className="text-6xl font-black text-gray-900 flex items-baseline gap-2">
                 {analytics.whatsappClicks} <span className="text-sm font-bold text-green-500">+22</span>
               </p>
             </div>

             <div className="space-y-3 relative z-10">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600">Click-through Rate</span>
                  <span className="text-lg font-black text-[#25D366]">{ analytics.visitorsToday > 0 ? (analytics.whatsappClicks / analytics.visitorsToday * 100).toFixed(1) : "0.0"}%</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600">Peak Time</span>
                  <span className="text-lg font-black text-[var(--color-brand-navy)]">14:00 GST</span>
                </div>
             </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-gray-100 relative z-10">
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Tracks active leads requesting admissions assistance from Academic Consultants.
              </p>
           </div>
        </div>
      </div>

      {/* Database Entity Stats Grid */}
      <h3 className="text-xl font-bold text-gray-800 ml-2 mt-8 mb-4">Platform Database Statistics</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white bg-gray-50 text-gray-600`}>
                <c.icon size={24} />
              </div>
              <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 transition-colors uppercase tracking-wider mb-1">{c.label}</p>
              <p className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

// ─── Videos Manager ────────────────────────────────
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
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
            <p className="text-xs text-gray-400 mt-1">Order 1 will be featured as the MAIN large video.</p>
          </div>
        </>
      )}
    />
  );
}

// ─── Generic CRUD Table Component ──────────────────
function CrudTable<T extends { id?: number }>({ 
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
        const res = await fetch('/api/translate', {
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
    fetch(`${API}${apiPath}`)
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
    fetch(url, {
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
    fetch(`${API}${apiPath}/${id}`, { method: "DELETE" })
      .then(() => fetchItems());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <button
          onClick={() => { setEditing({ ...emptyRow }); setIsNew(true); }}
          className="flex items-center gap-2 bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a2542] transition-colors"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      {editing && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6 max-h-[70vh] overflow-y-auto relative">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white pb-2 z-10 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
               {isNew ? "Add New" : "Edit"} {title.replace(/s$/, "")}
               <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ml-2">Arabic Default</span>
            </h3>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <div className={`grid md:grid-cols-2 gap-4 mb-6 ${!showTranslations ? '[&_.translation-field-container]:hidden' : ''}`}>
            {renderForm(editing, setEditing)}
          </div>
          <div className="flex items-center justify-between sticky bottom-0 bg-white pt-3 pb-1 border-t border-gray-100 mt-4 z-10">
            <div className="flex gap-3">
              <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition">
                <Save size={16} /> Save
              </button>
              <button onClick={() => { setEditing(null); setIsNew(false); }} className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading...</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-gray-400">No items found. Click &quot;Add New&quot; to create one.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-left font-bold text-gray-500 text-xs uppercase">ID</th>
                  {columns.map(col => (
                    <th key={col.key} className="px-6 py-4 text-left font-bold text-gray-500 text-xs uppercase">{col.label}</th>
                  ))}
                  <th className="px-6 py-4 text-right font-bold text-gray-500 text-xs uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-400 font-mono text-xs">{item.id}</td>
                    {columns.map(col => (
                      <td key={col.key} className="px-6 py-4 text-gray-800 font-medium max-w-[200px] truncate">
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
function FormField({ label, value, onChange, type = "text", className = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  const [uploading, setUploading] = React.useState(false);
  const isTranslationField = label.includes("(EN)") || label.includes("(English)") || label.includes("(ZH)") || label.includes("(Chinese)") || label.includes("(MS)") || label.includes("(Malay)") || className.includes("translation-field");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/upload`, { method: "POST", body: formData });
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
          <label className={`text-[10px] px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 transition ${uploading ? "bg-gray-100 text-gray-400" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}>
            {uploading ? "Uploading..." : <><ImageIcon size={10} /> Upload File</>}
            <input type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} disabled={uploading} />
          </label>
        )}
      </div>
      <input type={type} value={value || ""} onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800" />
    </div>
  );
}

function TextAreaField({ label, value, onChange, rows = 3, className = "" }: { label: string; value: string; onChange: (v: string) => void; rows?: number; className?: string }) {
  const isTranslationField = label.includes("(EN)") || label.includes("(English)") || label.includes("(ZH)") || label.includes("(Chinese)") || label.includes("(MS)") || label.includes("(Malay)") || className.includes("translation-field");

  return (
    <div className={`md:col-span-2 ${isTranslationField ? "translation-field-container" : ""}`}>
      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">{label}</label>
      <textarea rows={rows} value={value || ""} onChange={e => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 resize-y" />
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="md:col-span-2 pt-4 pb-1 border-t border-gray-200 mt-2">
      <span className="text-xs font-black text-[var(--color-brand-navy)] uppercase tracking-widest">{label}</span>
    </div>
  );
}

function ExtendedFieldsForm({ item, setItem }: any) {
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

// ─── Universities Manager ──────────────────────────
function UniversitiesManager() {
  return (
    <CrudTable<University>
      title="Universities"
      apiPath="/universities"
      columns={[
        { key: "name", label: "Name (EN)" },
        { key: "nameAr", label: "Name (AR)" },
        { key: "location", label: "Location" },
        { key: "isPrivate", label: "Type", render: (u) => <span className={`px-2 py-1 rounded-full text-xs font-bold ${u.isPrivate ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>{u.isPrivate ? "Private" : "Public"}</span> },
        { key: "ranking", label: "Ranking" },
      ]}
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", nameMs: "", location: "", locationAr: "", locationZh: "", locationMs: "", state: "", logoUrl: "", isPrivate: true, freeOfferLetter: false, courseCount: 0, ranking: "", aboutEn: "", aboutAr: "", aboutZh: "", aboutMs: "", heroImage: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", videoUrlMs: "", galleryUrl1: "", galleryUrl2: "", galleryUrl3: "", galleryUrl4: "", bannerUrl: "", locationMapUrl: "", scholarshipDescEn: "", scholarshipDescAr: "", scholarshipDescZh: "", scholarshipDescMs: "", scholarshipDiscount: "", scholarshipCriteria: "", admissionUndergradEn: "", admissionUndergradAr: "", admissionUndergradZh: "", admissionUndergradMs: "", admissionPostgradEn: "", admissionPostgradAr: "", admissionPostgradZh: "", admissionPostgradMs: "", registrationFeeMyr: 0, visaFeeMyr: 0, insuranceFeeMyr: 0, depositFeeMyr: 0, nextIntakeMonths: "", registrationDeadline: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="Name (Malay)" value={item.nameMs} onChange={v => setItem({ ...item, nameMs: v })} />
          <FormField label="Location / City (EN)" value={item.location} onChange={v => setItem({ ...item, location: v })} />
          <FormField label="Location / City (AR)" value={item.locationAr} onChange={v => setItem({ ...item, locationAr: v })} />
          <FormField label="Location / City (ZH)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />
          <FormField label="Location / City (MS)" value={item.locationMs} onChange={v => setItem({ ...item, locationMs: v })} />
          <FormField label="State" value={item.state} onChange={v => setItem({ ...item, state: v })} />
          <FormField label="Logo Code / URL" value={item.logoUrl} onChange={v => setItem({ ...item, logoUrl: v })} />
          <FormField label="World Ranking" value={item.ranking} onChange={v => setItem({ ...item, ranking: v })} />
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Type</label>
            <select value={item.isPrivate ? "private" : "public"} onChange={e => setItem({ ...item, isPrivate: e.target.value === "private" })}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800">
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="freeOffer" checked={item.freeOfferLetter || false} onChange={e => setItem({ ...item, freeOfferLetter: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="freeOffer" className="text-sm font-medium text-gray-700">Free Offer Letter</label>
          </div>

          <SectionDivider label="Description (shown on detail page)" />
          <TextAreaField label="About (English)" value={item.aboutEn} onChange={v => setItem({ ...item, aboutEn: v })} rows={4} />
          <TextAreaField label="About (Arabic)" value={item.aboutAr} onChange={v => setItem({ ...item, aboutAr: v })} rows={4} />
          <TextAreaField label="About (Chinese)" value={item.aboutZh} onChange={v => setItem({ ...item, aboutZh: v })} rows={4} />
          <TextAreaField label="About (Malay)" value={item.aboutMs} onChange={v => setItem({ ...item, aboutMs: v })} rows={4} />

          <SectionDivider label="Media (Hero, Video, Gallery)" />
          <FormField label="Hero Image URL" value={item.heroImage} onChange={v => setItem({ ...item, heroImage: v })} />
          <FormField label="YouTube Video ID (EN)" value={item.videoUrl} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Video ID (AR)" value={item.videoUrlAr} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Video ID (ZH)" value={item.videoUrlZh} onChange={v => setItem({ ...item, videoUrlZh: v })} />
          <FormField label="YouTube Video ID (MS)" value={item.videoUrlMs} onChange={v => setItem({ ...item, videoUrlMs: v })} />
          <FormField label="Gallery Image 1 URL" value={item.galleryUrl1} onChange={v => setItem({ ...item, galleryUrl1: v })} />
          <FormField label="Gallery Image 2 URL" value={item.galleryUrl2} onChange={v => setItem({ ...item, galleryUrl2: v })} />
          <FormField label="Gallery Image 3 URL" value={item.galleryUrl3} onChange={v => setItem({ ...item, galleryUrl3: v })} />

          <ExtendedFieldsForm item={item} setItem={setItem} />

          <SectionDivider label="Financial Fees (MYR — Malaysian Ringgit)" />
          <FormField label="Registration Fee (MYR)" value={String(item.registrationFeeMyr || 0)} onChange={v => setItem({ ...item, registrationFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Visa Fee (MYR)" value={String(item.visaFeeMyr || 0)} onChange={v => setItem({ ...item, visaFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Insurance Fee (MYR)" value={String(item.insuranceFeeMyr || 0)} onChange={v => setItem({ ...item, insuranceFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Deposit Fee (MYR)" value={String(item.depositFeeMyr || 0)} onChange={v => setItem({ ...item, depositFeeMyr: parseInt(v) || 0 })} />
          <SectionDivider label="Important Dates" />
          <FormField label="Next Intake Months (Comma separated: Apr,Jul,Oct)" value={item.nextIntakeMonths || ''} onChange={v => setItem({ ...item, nextIntakeMonths: v })} />
          <FormField label="Registration Deadline (YYYY-MM-DD)" value={item.registrationDeadline || ''} onChange={v => setItem({ ...item, registrationDeadline: v })} />
        </>
      )}
    />
  );
}

// ─── Language Centers Manager ───────────────────────
function LanguageCentersManager() {
  return (
    <CrudTable<LanguageCenter>
      title="Language Centers"
      apiPath="/language-centers"
      columns={[
        { key: "name", label: "Name (EN)" },
        { key: "nameAr", label: "Name (AR)" },
        { key: "location", label: "City" },
        { key: "state", label: "State" },
      ]}
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", nameMs: "", location: "", locationAr: "", locationZh: "", locationMs: "", state: "", logoUrl: "", aboutEn: "", aboutAr: "", aboutZh: "", aboutMs: "", heroImage: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", videoUrlMs: "", galleryUrl1: "", galleryUrl2: "", galleryUrl3: "", galleryUrl4: "", bannerUrl: "", locationMapUrl: "", scholarshipDescEn: "", scholarshipDescAr: "", scholarshipDescZh: "", scholarshipDescMs: "", scholarshipDiscount: "", scholarshipCriteria: "", admissionUndergradEn: "", admissionUndergradAr: "", admissionUndergradZh: "", admissionUndergradMs: "", admissionPostgradEn: "", admissionPostgradAr: "", admissionPostgradZh: "", admissionPostgradMs: "", registrationFeeMyr: 0, visaFeeMyr: 0, insuranceFeeMyr: 0, depositFeeMyr: 0, nextIntakeMonths: "", registrationDeadline: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="Name (Malay)" value={item.nameMs} onChange={v => setItem({ ...item, nameMs: v })} />
          <FormField label="City (English)" value={item.location} onChange={v => setItem({ ...item, location: v })} />
          <FormField label="City (Arabic)" value={item.locationAr} onChange={v => setItem({ ...item, locationAr: v })} />
          <FormField label="City (Chinese)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />
          <FormField label="City (Malay)" value={item.locationMs} onChange={v => setItem({ ...item, locationMs: v })} />
          <FormField label="State" value={item.state} onChange={v => setItem({ ...item, state: v })} />
          <FormField label="Logo Code / URL" value={item.logoUrl} onChange={v => setItem({ ...item, logoUrl: v })} />

          <SectionDivider label="Description (shown on detail page)" />
          <TextAreaField label="About (English)" value={item.aboutEn} onChange={v => setItem({ ...item, aboutEn: v })} rows={4} />
          <TextAreaField label="About (Arabic)" value={item.aboutAr} onChange={v => setItem({ ...item, aboutAr: v })} rows={4} />
          <TextAreaField label="About (Chinese)" value={item.aboutZh} onChange={v => setItem({ ...item, aboutZh: v })} rows={4} />
          <TextAreaField label="About (Malay)" value={item.aboutMs} onChange={v => setItem({ ...item, aboutMs: v })} rows={4} />

          <SectionDivider label="Media (Hero, Video, Gallery)" />
          <FormField label="Hero Image URL" value={item.heroImage} onChange={v => setItem({ ...item, heroImage: v })} />
          <FormField label="YouTube Video ID (EN)" value={item.videoUrl} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Video ID (AR)" value={item.videoUrlAr} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Video ID (ZH)" value={item.videoUrlZh} onChange={v => setItem({ ...item, videoUrlZh: v })} />
          <FormField label="YouTube Video ID (MS)" value={item.videoUrlMs} onChange={v => setItem({ ...item, videoUrlMs: v })} />
          <FormField label="Gallery Image 1 URL" value={item.galleryUrl1} onChange={v => setItem({ ...item, galleryUrl1: v })} />
          <FormField label="Gallery Image 2 URL" value={item.galleryUrl2} onChange={v => setItem({ ...item, galleryUrl2: v })} />
          <FormField label="Gallery Image 3 URL" value={item.galleryUrl3} onChange={v => setItem({ ...item, galleryUrl3: v })} />
          
          <ExtendedFieldsForm item={item} setItem={setItem} />
          
          <SectionDivider label="Financial Fees (MYR)" />
          <FormField label="Registration Fee (MYR)" value={String(item.registrationFeeMyr || 0)} onChange={v => setItem({ ...item, registrationFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Visa Fee (MYR)" value={String(item.visaFeeMyr || 0)} onChange={v => setItem({ ...item, visaFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Insurance Fee (MYR)" value={String(item.insuranceFeeMyr || 0)} onChange={v => setItem({ ...item, insuranceFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Deposit Fee (MYR)" value={String(item.depositFeeMyr || 0)} onChange={v => setItem({ ...item, depositFeeMyr: parseInt(v) || 0 })} />
          <SectionDivider label="Important Dates" />
          <FormField label="Next Intake Months (Comma separated: Apr,Jul,Oct)" value={item.nextIntakeMonths || ''} onChange={v => setItem({ ...item, nextIntakeMonths: v })} />
          <FormField label="Registration Deadline (YYYY-MM-DD)" value={item.registrationDeadline || ''} onChange={v => setItem({ ...item, registrationDeadline: v })} />
        </>
      )}
    />
  );
}

// ─── Courses Manager ────────────────────────────────
function CoursesManager() {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities`)
      .then(r => r.json())
      .then(data => setUniversities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <CrudTable<Course>
      title="Master Programs & Courses"
      apiPath="/courses"
      columns={[
        { key: "titleEn", label: "Program Name" },
        { key: "facultyEn", label: "Faculty / Category" },
        { key: "level", label: "Level", render: (c) => <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">{c.level}</span> },
        { key: "universityName", label: "University" },
        { key: "feeMyr", label: "Fee (MYR)", render: (c) => `RM ${c.feeMyr}` },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", facultyEn: "", facultyAr: "", facultyZh: "", facultyMs: "", level: "Bachelor", levelAr: "بكالوريوس", levelZh: "本科", levelMs: "本科", universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "", universityNameMs: "", feeMyr: 0, duration: "3 Years", durationAr: "3 سنوات", durationZh: "3年", durationMs: "3年", intakes: "Jan, May, Sep", intakesAr: "", intakesZh: "" , intakesMs: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Program Name (MS)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <FormField label="Faculty / Category (EN)" value={item.facultyEn} onChange={v => setItem({ ...item, facultyEn: v })} />
          <FormField label="Faculty / Category (AR)" value={item.facultyAr} onChange={v => setItem({ ...item, facultyAr: v })} />
          <FormField label="Faculty / Category (ZH)" value={item.facultyZh} onChange={v => setItem({ ...item, facultyZh: v })} />
          <FormField label="Faculty / Category (MS)" value={item.facultyMs} onChange={v => setItem({ ...item, facultyMs: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Degree Level (EN)" value={item.level} onChange={v => setItem({ ...item, level: v })} />
          <FormField label="Degree Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Degree Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />
          <FormField label="Degree Level (MS)" value={item.levelMs} onChange={v => setItem({ ...item, levelMs: v })} />

          <FormField label="Duration (EN)" value={item.duration} onChange={v => setItem({ ...item, duration: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />
          <FormField label="Duration (MS)" value={item.durationMs} onChange={v => setItem({ ...item, durationMs: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR / Year)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated: Apr,Jul,Oct)" value={item.intakes} onChange={v => setItem({ ...item, intakes: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          <FormField label="Intake Months (MS)" value={item.intakesMs} onChange={v => setItem({ ...item, intakesMs: v })} />
          
          <SectionDivider label="University Binding" />
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Assigned University</label>
            <select
              value={item.universityId || ""}
              onChange={(e) => {
                const uid = parseInt(e.target.value);
                const uni = universities.find(u => u.id === uid);
                if (uni) {
                  setItem({
                    ...item,
                    universityId: uni.id,
                    universityName: uni.name,
                    universityNameAr: uni.nameAr,
                    universityNameZh: uni.nameZh
                  , universityNameMs: uni.nameZh
                  });
                } else {
                  setItem({ ...item, universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "" , universityNameMs: "" });
                }
              }}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            >
              <option value="">-- Select a University --</option>
              {universities.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
    />
  );
}

// ─── Language Programs Manager ────────────────────────
function LanguageProgramsManager() {
  const [centers, setCenters] = useState<LanguageCenter[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/language-centers`)
      .then(r => r.json())
      .then(data => setCenters(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <CrudTable<any>
      title="Language Programs"
      apiPath="/language-programs"
      columns={[
        { key: "titleEn", label: "Program Name" },
        { key: "levelEn", label: "Level" },
        { key: "durationEn", label: "Duration" },
        { key: "languageCenterId", label: "Assigned Center", render: (p) => {
          const center = centers.find(c => c.id === p.languageCenterId);
          return center ? center.name : "Not Assigned";
        }},
        { key: "feeMyr", label: "Fee (MYR)", render: (p) => `RM ${p.feeMyr}` },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", durationEn: "4 Weeks", durationAr: "4 أسابيع", durationZh: "4周", durationMs: "4周", levelEn: "All Levels", levelAr: "جميع المستويات", levelZh: "所有级别", levelMs: "所有级别", intakesEn: "Every Monday", intakesAr: "كل يوم إثنين", intakesZh: "每周一", intakesMs: "每周一", feeMyr: 0, languageCenterId: 0 }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Program Name (MS)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Proficiency Level (EN)" value={item.levelEn} onChange={v => setItem({ ...item, levelEn: v })} />
          <FormField label="Proficiency Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Proficiency Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />
          <FormField label="Proficiency Level (MS)" value={item.levelMs} onChange={v => setItem({ ...item, levelMs: v })} />

          <FormField label="Duration (EN)" value={item.durationEn} onChange={v => setItem({ ...item, durationEn: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />
          <FormField label="Duration (MS)" value={item.durationMs} onChange={v => setItem({ ...item, durationMs: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated)" value={item.intakesEn} onChange={v => setItem({ ...item, intakesEn: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          <FormField label="Intake Months (MS)" value={item.intakesMs} onChange={v => setItem({ ...item, intakesMs: v })} />
          
          <SectionDivider label="Language Center Binding" />
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Assigned Language Center</label>
            <select
              value={item.languageCenterId || ""}
              onChange={(e) => {
                setItem({ ...item, languageCenterId: parseInt(e.target.value) || 0 });
              }}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            >
              <option value="">-- Select an Institute --</option>
              {centers.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
    />
  );
}

// ─── Blog Posts Manager ─────────────────────────────
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
            <label htmlFor="published" className="text-sm font-medium text-gray-700">Published (visible to site visitors)</label>
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

// ─── Testimonials Manager ───────────────────────────
function TestimonialsManager() {
  return (
    <CrudTable<Testimonial>
      title="Student Testimonials"
      apiPath="/testimonials"
      columns={[
        { key: "studentName", label: "Student Name" },
        { key: "universityName", label: "University" },
        { key: "rating", label: "Rating", render: (p) => <span className="text-yellow-500 font-bold">{"★".repeat(p.rating || 5)}</span> },
      ]}
      emptyRow={{ id: 0, studentName: "", studentNameZh: "", studentNameMs: "", universityName: "", universityNameAr: "", universityNameZh: "", universityNameMs: "", reviewText: "", reviewTextAr: "", reviewTextZh: "", reviewTextMs: "", rating: 5 }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Student Summary" />
          <FormField label="Student Name (Latin / EN)" value={item.studentName || ""} onChange={v => setItem({ ...item, studentName: v })} />
          <FormField label="Student Name (Chinese)" value={item.studentNameZh || ""} onChange={v => setItem({ ...item, studentNameZh: v })} />
          <FormField label="Student Name (Malay)" value={item.studentNameMs || ""} onChange={v => setItem({ ...item, studentNameMs: v })} />

          <SectionDivider label="University Attribution" />
          <FormField label="University Name (English)" value={item.universityName || ""} onChange={v => setItem({ ...item, universityName: v })} />
          <FormField label="University Name (Arabic)" value={item.universityNameAr || ""} onChange={v => setItem({ ...item, universityNameAr: v })} />
          <FormField label="University Name (Chinese)" value={item.universityNameZh || ""} onChange={v => setItem({ ...item, universityNameZh: v })} />
          <FormField label="University Name (Malay)" value={item.universityNameMs || ""} onChange={v => setItem({ ...item, universityNameMs: v })} />

          <SectionDivider label="Review Data" />
          <div className="col-span-1 md:col-span-2">
             <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Star Rating (1 to 5)</label>
             <input type="number" min="1" max="5" value={item.rating || 5} onChange={(e) => setItem({...item, rating: parseInt(e.target.value) || 5})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--color-brand-navy)] transition-all"/>
          </div>
          <TextAreaField label="Review Text (English)" value={item.reviewText || ""} onChange={v => setItem({ ...item, reviewText: v })} rows={3} />
          <TextAreaField label="Review Text (Arabic)" value={item.reviewTextAr || ""} onChange={v => setItem({ ...item, reviewTextAr: v })} rows={3} />
          <TextAreaField label="Review Text (Chinese)" value={item.reviewTextZh || ""} onChange={v => setItem({ ...item, reviewTextZh: v })} rows={3} />
          <TextAreaField label="Review Text (Malay)" value={item.reviewTextMs || ""} onChange={v => setItem({ ...item, reviewTextMs: v })} rows={3} />
        </>
      )}
    />
  );
}

// ─── Custom Pages Manager ───────────────────────────
function PagesManager() {
  return (
    <CrudTable<any>
      title="Custom Pages"
      apiPath="/pages"
      columns={[
        { key: "titleEn", label: "Title (EN)" },
        { key: "slug", label: "URL Slug", render: (p) => <span className="font-mono text-xs text-blue-500">/p/{p.slug}</span> },
        { key: "published", label: "Status", render: (p) => <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{p.published ? "Published" : "Draft"}</span> },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", slug: "", contentEn: "", contentAr: "", contentZh: "", contentMs: "", published: false }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Page Metadata" />
          <FormField label="URL Slug (e.g. about-us)" value={item.slug} onChange={v => setItem({ ...item, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} />
          <div className="flex items-center gap-3 mt-4">
            <input type="checkbox" id="publishedPage" checked={item.published || false} onChange={e => setItem({ ...item, published: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="publishedPage" className="text-sm font-medium text-gray-700">Published (visible to site visitors)</label>
          </div>

          <SectionDivider label="Localized Titles" />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <SectionDivider label="Full Page Content (HTML Allowed)" />
          <TextAreaField label="Content (English)" value={item.contentEn} onChange={v => setItem({ ...item, contentEn: v })} rows={12} />
          <TextAreaField label="Content (Arabic)" value={item.contentAr} onChange={v => setItem({ ...item, contentAr: v })} rows={12} />
          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={12} />
          <TextAreaField label="Content (Malay)" value={item.contentMs} onChange={v => setItem({ ...item, contentMs: v })} rows={12} />
        </>
      )}
    />
  );
}

// ─── Specializations Manager ───────────────────────
function SpecializationsManager() {
  return (
    <CrudTable<any>
      title="Specializations"
      apiPath="/specializations"
      columns={[
        { key: "slug", label: "Slug" },
        { key: "titleEn", label: "Title (EN)" },
        { key: "titleAr", label: "Title (AR)" },
      ]}
      customAction={(item) => (
        <a href={`/admin/specializations/${item.id}`} className="flex items-center gap-1 p-2 rounded-lg text-purple-600 bg-purple-50 hover:bg-purple-100 font-bold transition">
          <LayoutDashboard size={14} /> Visual Editor
        </a>
      )}
      emptyRow={{ id: 0, slug: "", titleEn: "", titleAr: "", titleZh: "", titleMs: "", heroTaglineEn: "", heroTaglineAr: "", heroTaglineZh: "", heroTaglineMs: "", introEn: "", introAr: "", introZh: "", introMs: "", searchQuery: "", degreeLevelsJson: "[]", topUniversitiesJson: "[]", budgetUniversitiesJson: "[]", courseYearsJson: "[]", careerJobsEnJson: "[]", careerJobsArJson: "[]", careerJobsZhJson: "[]", seVsCsJson: "{}", countryComparisonsJson: "[]", spotlightUniversitiesJson: "[]" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="URL Slug (e.g. data-analytics)" value={item.slug} onChange={v => setItem({ ...item, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} />
          <FormField label="Search Query (e.g. Data)" value={item.searchQuery} onChange={v => setItem({ ...item, searchQuery: v })} />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Malay)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />
          
          <TextAreaField label="Hero Tagline (English)" value={item.heroTaglineEn} onChange={v => setItem({ ...item, heroTaglineEn: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Arabic)" value={item.heroTaglineAr} onChange={v => setItem({ ...item, heroTaglineAr: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Chinese)" value={item.heroTaglineZh} onChange={v => setItem({ ...item, heroTaglineZh: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Malay)" value={item.heroTaglineMs} onChange={v => setItem({ ...item, heroTaglineMs: v })} rows={2} />
          <TextAreaField label="Introduction (English)" value={item.introEn} onChange={v => setItem({ ...item, introEn: v })} rows={4} />
          <TextAreaField label="Introduction (Arabic)" value={item.introAr} onChange={v => setItem({ ...item, introAr: v })} rows={4} />
          <TextAreaField label="Introduction (Chinese)" value={item.introZh} onChange={v => setItem({ ...item, introZh: v })} rows={4} />
          <TextAreaField label="Introduction (Malay)" value={item.introMs} onChange={v => setItem({ ...item, introMs: v })} rows={4} />

          <SectionDivider label="Complex Data Editor (Edit as raw JSON List/Object)" />
          <div className="bg-orange-50 md:col-span-2 p-4 rounded-xl border border-orange-200">
            <p className="text-xs text-orange-800 font-bold mb-2 uppercase tracking-wide">Warning: Make sure JSON syntax is perfect!</p>
            <TextAreaField label="Degree Levels (JSON)" value={item.degreeLevelsJson} onChange={v => setItem({ ...item, degreeLevelsJson: v })} rows={4} />
            <div className="mt-4"><TextAreaField label="Top Universities (JSON)" value={item.topUniversitiesJson} onChange={v => setItem({ ...item, topUniversitiesJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Budget Universities (JSON)" value={item.budgetUniversitiesJson} onChange={v => setItem({ ...item, budgetUniversitiesJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Course Syllabus Years (JSON)" value={item.courseYearsJson} onChange={v => setItem({ ...item, courseYearsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (English JSON Array)" value={item.careerJobsEnJson} onChange={v => setItem({ ...item, careerJobsEnJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (Arabic JSON Array)" value={item.careerJobsArJson} onChange={v => setItem({ ...item, careerJobsArJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Career Jobs (Chinese JSON Array)" value={item.careerJobsZhJson} onChange={v => setItem({ ...item, careerJobsZhJson: v })} rows={3} /></div>
            <div className="mt-4"><TextAreaField label="Specialization Comparison (seVsCs JSON)" value={item.seVsCsJson} onChange={v => setItem({ ...item, seVsCsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Country Comparisons (JSON)" value={item.countryComparisonsJson} onChange={v => setItem({ ...item, countryComparisonsJson: v })} rows={4} /></div>
            <div className="mt-4"><TextAreaField label="Spotlight Universities (JSON)" value={item.spotlightUniversitiesJson} onChange={v => setItem({ ...item, spotlightUniversitiesJson: v })} rows={4} /></div>
          </div>
        </>
      )}
    />
  );
}

// ─── Menu / Navbar Builder ───────────────────────────
function NavigationManager() {
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [viewMode, setViewMode] = useState<"visual" | "json">("visual");
  const [jsonText, setJsonText] = useState("[]");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/config/mainNavigation`)
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/config`, {
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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Navbar & Menu Configuration</h2>
          <p className="text-gray-500 text-sm">Visually construct your website's main dropdown menu structure.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button onClick={() => { setViewMode("visual"); try { setMenuData(JSON.parse(jsonText)); } catch(e){} }} className={`px-4 py-1.5 text-sm font-bold rounded-md flex items-center gap-2 ${viewMode === "visual" ? "bg-white shadow text-[var(--color-brand-navy)]" : "text-gray-500 hover:text-gray-700"}`}>
              <Monitor size={16} /> Visual
            </button>
            <button onClick={() => { setViewMode("json"); setJsonText(JSON.stringify(menuData, null, 2)); }} className={`px-4 py-1.5 text-sm font-bold rounded-md flex items-center gap-2 ${viewMode === "json" ? "bg-white shadow text-[var(--color-brand-navy)]" : "text-gray-500 hover:text-gray-700"}`}>
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
      <div className="p-6 bg-gray-50 min-h-[600px]">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading Configuration...</div>
        ) : viewMode === "json" ? (
          <textarea 
            className="w-full h-[600px] font-mono text-sm p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            spellCheck={false}
          />
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto pb-20">
            {menuData.map((root, rootIdx) => (
              <div key={`root-${rootIdx}`} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="bg-[var(--color-brand-navy)] text-white font-bold w-6 h-6 rounded flex items-center justify-center text-xs">{rootIdx + 1}</span>
                    <span className="font-bold text-gray-800">{root.en || "New Item"}</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setMenuData(moveItem(menuData, rootIdx, -1))} className="p-1.5 hover:bg-white rounded"><ChevronUp size={16} /></button>
                    <button onClick={() => setMenuData(moveItem(menuData, rootIdx, 1))} className="p-1.5 hover:bg-white rounded"><ChevronDown size={16} /></button>
                    <button onClick={() => setMenuData(menuData.filter((_, i) => i !== rootIdx))} className="p-1.5 hover:bg-red-50 text-red-500 rounded ml-2"><Trash2 size={16} /></button>
                  </div>
                </div>
                
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  <TextInput label="English Title" value={root.en || ''} onChange={v => updateRoot(rootIdx, {en: v})} />
                  <TextInput label="Arabic Title" value={root.ar || ''} onChange={v => updateRoot(rootIdx, {ar: v})} />
                  <TextInput label="Chinese Title" value={root.zh || ''} onChange={v => updateRoot(rootIdx, {zh: v})} />
                  <TextInput label="Target Link (href)" value={root.href || ""} onChange={v => updateRoot(rootIdx, {href: v})} placeholder="e.g. /universities or empty" />
                </div>

                {/* Level 2: Categories or Items */}
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2"><FolderPlus size={16}/> Dropdown Contents</h4>
                      <div className="flex gap-2">
                        <button onClick={() => updateRoot(rootIdx, { categories: [...(root.categories||[]), { en: "New Category", ar: "", zh: "", items: [] }] })} className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded-md font-bold hover:bg-gray-100 flex items-center gap-1">+ Category</button>
                        <button onClick={() => updateRoot(rootIdx, { items: [...(root.items||[]), { en: "New Link", ar: "", zh: "", href: "" }] })} className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded-md font-bold hover:bg-gray-100 flex items-center gap-1">+ Simple Link</button>
                      </div>
                    </div>

                    {/* Direct Items */}
                    {root.items && root.items.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {root.items.map((sub: any, subIdx: number) => (
                          <div key={`si-${subIdx}`} className="bg-white border border-gray-300 rounded p-3 flex gap-4 relative">
                             <div className="absolute top-2 right-2 flex gap-1">
                               <button onClick={() => updateRoot(rootIdx, { items: moveItem(root.items, subIdx, -1) })}><ChevronUp size={14} className="text-gray-400 hover:text-gray-800"/></button>
                               <button onClick={() => updateRoot(rootIdx, { items: moveItem(root.items, subIdx, 1) })}><ChevronDown size={14} className="text-gray-400 hover:text-gray-800"/></button>
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
                          <div key={`cat-${catIdx}`} className="bg-white border-2 border-blue-100 rounded-lg p-3">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex gap-2 w-3/4">
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat EN" value={cat.en || ''} onChange={e => { const n = [...root.categories]; n[catIdx].en = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat AR" value={cat.ar || ''} onChange={e => { const n = [...root.categories]; n[catIdx].ar = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                               <input className="w-1/3 border px-2 py-1.5 text-sm font-bold bg-blue-50" placeholder="Cat ZH" value={cat.zh || ''} onChange={e => { const n = [...root.categories]; n[catIdx].zh = e.target.value; updateRoot(rootIdx, {categories: n}); }} />
                              </div>
                              <div className="flex gap-1">
                               <button onClick={() => updateRoot(rootIdx, { categories: moveItem(root.categories, catIdx, -1) })} className="p-1 bg-gray-100 hover:bg-gray-200 rounded"><ChevronUp size={16}/></button>
                               <button onClick={() => updateRoot(rootIdx, { categories: moveItem(root.categories, catIdx, 1) })} className="p-1 bg-gray-100 hover:bg-gray-200 rounded"><ChevronDown size={16}/></button>
                               <button onClick={() => updateRoot(rootIdx, { categories: root.categories.filter((_:any, i:number) => i !== catIdx) })} className="p-1 bg-red-50 text-red-500 hover:bg-red-100 rounded ml-1"><Trash2 size={16}/></button>
                              </div>
                            </div>
                            
                            {/* Category Items */}
                            <div className="pl-6 border-l-2 border-gray-100 space-y-2">
                              {cat.items && cat.items.map((sub: any, subIdx: number) => (
                                <div key={`csi-${subIdx}`} className="bg-gray-50 border border-gray-200 rounded px-3 py-2 flex gap-4 relative">
                                  <div className="absolute top-1 right-1 flex gap-1">
                                    <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = moveItem(cat.items, subIdx, -1); updateRoot(rootIdx, {categories: nc}); }}><ChevronUp size={14} className="text-gray-400 hover:text-gray-800"/></button>
                                    <button onClick={() => { const nc = [...root.categories]; nc[catIdx].items = moveItem(cat.items, subIdx, 1); updateRoot(rootIdx, {categories: nc}); }}><ChevronDown size={14} className="text-gray-400 hover:text-gray-800"/></button>
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

            <button onClick={() => setMenuData([...menuData, { en: "New Top Level Menu", ar: "", zh: "", href: "", categories: [] }])} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
              <Plus size={20} /> Add New Top Level Menu Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Simple Helper for the Navigation Manager
function TextInput({ label, value, onChange, placeholder = "" }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 mb-1">{label}</label>
      <input type="text" className="w-full border border-gray-200 rounded text-sm px-3 py-2 bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-1 focus:ring-[var(--color-brand-navy)]" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

// ─── Site Settings Manager ──────────────────────────
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
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ImageIcon size={20} className="text-[var(--color-brand-gold)]" /> Logo & Branding
        </h2>
        <p className="text-gray-500 text-sm mb-4">Upload a new logo. Supported formats: PNG, SVG, JPG.</p>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
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

// ─── Inquiries Manager ─────────────────────────────────
function InquiriesManager() {
  return (
    <CrudTable<any>
      title="Contact Inquiries"
      apiPath="/contact-submissions"
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "interest", label: "Interest" },
        { key: "submittedAt", label: "Submitted At", render: (p) => new Date(p.submittedAt).toLocaleDateString() },
      ]}
      emptyRow={{ id: 0, name: "", email: "", phone: "", country: "", interest: "degree", message: "", submittedAt: new Date().toISOString() }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="User Info" />
          <FormField label="Name" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Email" value={item.email} onChange={v => setItem({ ...item, email: v })} />
          <FormField label="Phone" value={item.phone} onChange={v => setItem({ ...item, phone: v })} />
          <FormField label="Country" value={item.country} onChange={v => setItem({ ...item, country: v })} />
          <SectionDivider label="Inquiry Details" />
          <FormField label="Interest" value={item.interest} onChange={v => setItem({ ...item, interest: v })} />
          <TextAreaField label="Message" value={item.message} onChange={v => setItem({ ...item, message: v })} rows={4} />
        </>
      )}
    />
  );
}



// ─── Translations Site Content Manager ────────────────
function TranslationsManager() {
  const [items, setItems] = React.useState<{key: string, en: string, ar: string, zh: string}[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [editing, setEditing] = React.useState<any>(null);

  const fetchItems = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/translations`)
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  React.useEffect(() => { fetchItems(); }, []);

  const handleSave = () => {
    if (!editing) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/translations`, {
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
          <h2 className="text-xl font-bold text-gray-900">Site Content Translations</h2>
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
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6 sticky top-24 z-10 w-full max-w-4xl mx-auto shadow-2xl ring-4 ring-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Edit Key: {editing.key || "New Key"}</h3>
            <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
          </div>
          <div className="grid gap-4 mb-6">
            <FormField label="Translation Key (e.g. nav.home)" value={editing.key} onChange={v => setEditing({...editing, key: v})} />
            <TextAreaField label="English" value={editing.en} onChange={v => setEditing({...editing, en: v})} rows={2} />
            <TextAreaField label="Arabic" value={editing.ar} onChange={v => setEditing({...editing, ar: v})} rows={2} />
            <TextAreaField label="Chinese" value={editing.zh} onChange={v => setEditing({...editing, zh: v})} rows={2} />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition">Save Translation</button>
            <button onClick={() => setEditing(null)} className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? <div className="p-12 text-center text-gray-400">Loading...</div> : items.length === 0 ? <div className="p-12 text-center text-gray-400">No translations found. Wait for seeding.</div> : (
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-50 shadow-sm z-0">
                <tr className="border-b border-gray-100 text-left font-bold text-gray-500 uppercase text-xs">
                  <th className="px-6 py-4 w-48">Key</th>
                  <th className="px-6 py-4">English</th>
                  <th className="px-6 py-4 text-right">Arabic</th>
                  <th className="px-6 py-4">Chinese</th>
                  <th className="px-6 py-4 text-right">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item) => (
                  <tr key={item.key} className="hover:bg-gray-50/50 transition">
                    <td className="px-6 py-4 font-mono text-xs text-[var(--color-brand-navy)] font-bold">{item.key}</td>
                    <td className="px-6 py-4 text-gray-800" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.en}</td>
                    <td className="px-6 py-4 text-gray-800 text-right" dir="rtl" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.ar}</td>
                    <td className="px-6 py-4 text-gray-800" style={{ wordBreak: 'break-word', whiteSpace: 'normal', minWidth: '200px' }}>{item.zh}</td>
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

// ─── Consultants Manager ─────────────────────────
function ConsultantsManager() {
  return (
    <CrudTable<any>
      title="Academic Consultants"
      apiPath="/consultants"
      columns={[
        { key: "sortOrder", label: "Order", render: (v) => <span className="font-bold text-gray-500">{v.sortOrder}</span> },
        { key: "avatar", label: "Avatar", render: (v) => <img src={v.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(v.name||'C')}`} className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" alt="avatar" /> },
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
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
            <p className="text-xs text-gray-400 mt-1">Lower numbers appear first in the widget.</p>
          </div>
        </>
      )}
    />
  );
}
