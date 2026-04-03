"use client";

import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, 
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle
} from "lucide-react";

// ─── Types ──────────────────────────────────────────
interface University { id: number; name: string; nameAr: string; nameZh: string; location: string; locationAr: string; locationZh: string; state: string; logoUrl: string; isPrivate: boolean; freeOfferLetter: boolean; courseCount: number; ranking: string; aboutEn: string; aboutAr: string; aboutZh: string; heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
interface LanguageCenter { id: number; name: string; nameAr: string; nameZh: string; location: string; locationAr: string; locationZh: string; state: string; logoUrl: string; aboutEn: string; aboutAr: string; aboutZh: string; heroImage: string; videoUrl: string; videoUrlAr: string; videoUrlZh: string; galleryUrl1: string; galleryUrl2: string; galleryUrl3: string; galleryUrl4: string; bannerUrl: string; locationMapUrl: string; scholarshipDescEn: string; scholarshipDescAr: string; scholarshipDescZh: string; scholarshipDiscount: string; scholarshipCriteria: string; admissionUndergradEn: string; admissionUndergradAr: string; admissionUndergradZh: string; admissionPostgradEn: string; admissionPostgradAr: string; admissionPostgradZh: string; registrationFeeMyr: number; visaFeeMyr: number; insuranceFeeMyr: number; depositFeeMyr: number; nextIntakeMonths: string; registrationDeadline?: string; }
interface Course { id: number; titleEn: string; titleAr: string; titleZh: string; facultyEn: string; facultyAr: string; facultyZh: string; level: string; levelAr: string; levelZh: string; universityId: number; universityName: string; universityNameAr: string; universityNameZh: string; feeMyr: number; duration: string; durationAr: string; durationZh: string; intakes: string; intakesAr: string; intakesZh: string; }
interface BlogPost { id: number; title: string; titleAr: string; titleZh: string; category: string; categoryAr: string; categoryZh: string; date: string; imageUrl: string; excerpt: string; excerptAr: string; excerptZh: string; contentEn: string; contentAr: string; contentZh: string; published: boolean; }
interface SiteSettings { siteName: string; siteNameAr: string; whatsappNumber: string; email: string; phone: string; address: string; }

const API = "https://ya-alma.onrender.com/api";

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
  { id: "settings", label: "Site Settings", icon: Settings },
  { id: "translations", label: "Translations", icon: Languages },
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
          { activeTab === "settings" && <SiteSettingsManager /> }
          { activeTab === "translations" && <TranslationsManager /> }
          { activeTab === "inquiries" && <InquiriesManager /> }
        </div>
      </main>
    </div>
  );
}

// ─── Dashboard Overview ───────────────────────────
function DashboardOverview() {
  const [stats, setStats] = useState({ universities: 0, languageCenters: 0, courses: 0, blogPosts: 0 });

  useEffect(() => {
    Promise.all([
      fetch(`${API}/universities`).then(r => r.json()).catch(() => []),
      fetch(`${API}/language-centers`).then(r => r.json()).catch(() => []),
      fetch(`${API}/courses`).then(r => r.json()).catch(() => []),
      fetch(`${API}/blog`).then(r => r.json()).catch(() => []),
    ]).then(([unis, lcs, courses, blog]) => {
      setStats({ universities: unis.length, languageCenters: lcs.length, courses: courses.length, blogPosts: blog.length });
    });
  }, []);

  const cards = [
    { label: "Universities", value: stats.universities, icon: Building2, color: "bg-blue-500" },
    { label: "Language Centers", value: stats.languageCenters, icon: Languages, color: "bg-green-500" },
    { label: "Courses / Programs", value: stats.courses, icon: BookOpen, color: "bg-purple-500" },
    { label: "Blog Posts", value: stats.blogPosts, icon: Newspaper, color: "bg-orange-500" },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`${c.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}>
              <c.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{c.label}</p>
              <p className="text-3xl font-black text-gray-900">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome to the Admin Dashboard</h2>
        <p className="text-gray-600 leading-relaxed">
          Manage all content from the sidebar. Universities, language centers, courses, and blog posts are stored in the database.
          Edit any field — including descriptions, gallery images, videos, and fees — directly from the tables.
        </p>
      </div>
    </div>
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

  const fetchItems = () => {
    setLoading(true);
    fetch(`${API}${apiPath}`)
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
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
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4 sticky top-0 bg-white pb-2">
            <h3 className="text-lg font-bold text-gray-900">{isNew ? "Add New" : "Edit"} {title.replace(/s$/, "")}</h3>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {renderForm(editing, setEditing)}
          </div>
          <div className="flex gap-3 sticky bottom-0 bg-white pt-2">
            <button onClick={handleSave} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700">
              <Save size={16} /> Save
            </button>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200">
              Cancel
            </button>
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
function FormField({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  const [uploading, setUploading] = React.useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    try {
      const res = await fetch("https://ya-alma.onrender.com/api/upload", { method: "POST", body: formData });
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
    <div>
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

function TextAreaField({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <div className="md:col-span-2">
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
      <FormField label="Max Discount (e.g. 50%)" value={item.scholarshipDiscount} onChange={(v: string) => setItem({ ...item, scholarshipDiscount: v })} />
      <FormField label="Min Criteria (e.g. GPA 3.8)" value={item.scholarshipCriteria} onChange={(v: string) => setItem({ ...item, scholarshipCriteria: v })} />

      <SectionDivider label="Admission Requirements (Separate bullets with | )" />
      <TextAreaField label="Undergraduate/Bachelor (EN)" value={item.admissionUndergradEn} onChange={(v: string) => setItem({ ...item, admissionUndergradEn: v })} rows={3} />
      <TextAreaField label="Undergraduate/Bachelor (AR)" value={item.admissionUndergradAr} onChange={(v: string) => setItem({ ...item, admissionUndergradAr: v })} rows={3} />
      <TextAreaField label="Undergraduate/Bachelor (ZH)" value={item.admissionUndergradZh} onChange={(v: string) => setItem({ ...item, admissionUndergradZh: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (EN)" value={item.admissionPostgradEn} onChange={(v: string) => setItem({ ...item, admissionPostgradEn: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (AR)" value={item.admissionPostgradAr} onChange={(v: string) => setItem({ ...item, admissionPostgradAr: v })} rows={3} />
      <TextAreaField label="Postgraduate/Master (ZH)" value={item.admissionPostgradZh} onChange={(v: string) => setItem({ ...item, admissionPostgradZh: v })} rows={3} />

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
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", location: "", locationAr: "", locationZh: "", state: "", logoUrl: "", isPrivate: true, freeOfferLetter: false, courseCount: 0, ranking: "", aboutEn: "", aboutAr: "", aboutZh: "", heroImage: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", galleryUrl1: "", galleryUrl2: "", galleryUrl3: "", galleryUrl4: "", bannerUrl: "", locationMapUrl: "", scholarshipDescEn: "", scholarshipDescAr: "", scholarshipDescZh: "", scholarshipDiscount: "", scholarshipCriteria: "", admissionUndergradEn: "", admissionUndergradAr: "", admissionUndergradZh: "", admissionPostgradEn: "", admissionPostgradAr: "", admissionPostgradZh: "", registrationFeeMyr: 0, visaFeeMyr: 0, insuranceFeeMyr: 0, depositFeeMyr: 0, nextIntakeMonths: "", registrationDeadline: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="Location / City (EN)" value={item.location} onChange={v => setItem({ ...item, location: v })} />
          <FormField label="Location / City (AR)" value={item.locationAr} onChange={v => setItem({ ...item, locationAr: v })} />
          <FormField label="Location / City (ZH)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />
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

          <SectionDivider label="Media (Hero, Video, Gallery)" />
          <FormField label="Hero Image URL" value={item.heroImage} onChange={v => setItem({ ...item, heroImage: v })} />
          <FormField label="YouTube Video ID (EN)" value={item.videoUrl} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Video ID (AR)" value={item.videoUrlAr} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Video ID (ZH)" value={item.videoUrlZh} onChange={v => setItem({ ...item, videoUrlZh: v })} />
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
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", location: "", locationAr: "", locationZh: "", state: "", logoUrl: "", aboutEn: "", aboutAr: "", aboutZh: "", heroImage: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", galleryUrl1: "", galleryUrl2: "", galleryUrl3: "", galleryUrl4: "", bannerUrl: "", locationMapUrl: "", scholarshipDescEn: "", scholarshipDescAr: "", scholarshipDescZh: "", scholarshipDiscount: "", scholarshipCriteria: "", admissionUndergradEn: "", admissionUndergradAr: "", admissionUndergradZh: "", admissionPostgradEn: "", admissionPostgradAr: "", admissionPostgradZh: "", registrationFeeMyr: 0, visaFeeMyr: 0, insuranceFeeMyr: 0, depositFeeMyr: 0, nextIntakeMonths: "", registrationDeadline: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="City (English)" value={item.location} onChange={v => setItem({ ...item, location: v })} />
          <FormField label="City (Arabic)" value={item.locationAr} onChange={v => setItem({ ...item, locationAr: v })} />
          <FormField label="City (Chinese)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />
          <FormField label="State" value={item.state} onChange={v => setItem({ ...item, state: v })} />
          <FormField label="Logo Code / URL" value={item.logoUrl} onChange={v => setItem({ ...item, logoUrl: v })} />

          <SectionDivider label="Description (shown on detail page)" />
          <TextAreaField label="About (English)" value={item.aboutEn} onChange={v => setItem({ ...item, aboutEn: v })} rows={4} />
          <TextAreaField label="About (Arabic)" value={item.aboutAr} onChange={v => setItem({ ...item, aboutAr: v })} rows={4} />
          <TextAreaField label="About (Chinese)" value={item.aboutZh} onChange={v => setItem({ ...item, aboutZh: v })} rows={4} />

          <SectionDivider label="Media (Hero, Video, Gallery)" />
          <FormField label="Hero Image URL" value={item.heroImage} onChange={v => setItem({ ...item, heroImage: v })} />
          <FormField label="YouTube Video ID (EN)" value={item.videoUrl} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Video ID (AR)" value={item.videoUrlAr} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Video ID (ZH)" value={item.videoUrlZh} onChange={v => setItem({ ...item, videoUrlZh: v })} />
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
    fetch(`https://ya-alma.onrender.com/api/universities`)
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
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", facultyEn: "", facultyAr: "", facultyZh: "", level: "Bachelor", levelAr: "بكالوريوس", levelZh: "本科", universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "", feeMyr: 0, duration: "3 Years", durationAr: "3 سنوات", durationZh: "3年", intakes: "Jan, May, Sep", intakesAr: "", intakesZh: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />

          <FormField label="Faculty / Category (EN)" value={item.facultyEn} onChange={v => setItem({ ...item, facultyEn: v })} />
          <FormField label="Faculty / Category (AR)" value={item.facultyAr} onChange={v => setItem({ ...item, facultyAr: v })} />
          <FormField label="Faculty / Category (ZH)" value={item.facultyZh} onChange={v => setItem({ ...item, facultyZh: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Degree Level (EN)" value={item.level} onChange={v => setItem({ ...item, level: v })} />
          <FormField label="Degree Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Degree Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />

          <FormField label="Duration (EN)" value={item.duration} onChange={v => setItem({ ...item, duration: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR / Year)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated: Apr,Jul,Oct)" value={item.intakes} onChange={v => setItem({ ...item, intakes: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          
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
                  });
                } else {
                  setItem({ ...item, universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "" });
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
    fetch(`https://ya-alma.onrender.com/api/language-centers`)
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
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", durationEn: "4 Weeks", durationAr: "4 أسابيع", durationZh: "4周", levelEn: "All Levels", levelAr: "جميع المستويات", levelZh: "所有级别", intakesEn: "Every Monday", intakesAr: "كل يوم إثنين", intakesZh: "每周一", feeMyr: 0, languageCenterId: 0 }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Proficiency Level (EN)" value={item.levelEn} onChange={v => setItem({ ...item, levelEn: v })} />
          <FormField label="Proficiency Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Proficiency Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />

          <FormField label="Duration (EN)" value={item.durationEn} onChange={v => setItem({ ...item, durationEn: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated)" value={item.intakesEn} onChange={v => setItem({ ...item, intakesEn: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          
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
      emptyRow={{ id: 0, title: "", titleAr: "", titleZh: "", category: "", categoryAr: "", categoryZh: "", date: new Date().toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" }), imageUrl: "", excerpt: "", excerptAr: "", excerptZh: "", contentEn: "", contentAr: "", contentZh: "", published: false }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Post Metadata" />
          <FormField label="Title (English)" value={item.title} onChange={v => setItem({ ...item, title: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Category (English)" value={item.category} onChange={v => setItem({ ...item, category: v })} />
          <FormField label="Category (Arabic)" value={item.categoryAr} onChange={v => setItem({ ...item, categoryAr: v })} />
          <FormField label="Category (Chinese)" value={item.categoryZh} onChange={v => setItem({ ...item, categoryZh: v })} />
          <FormField label="Date" value={item.date} onChange={v => setItem({ ...item, date: v })} />
          <FormField label="Cover Image URL" value={item.imageUrl} onChange={v => setItem({ ...item, imageUrl: v })} />
          <div className="flex items-center gap-3">
            <input type="checkbox" id="published" checked={item.published || false} onChange={e => setItem({ ...item, published: e.target.checked })} className="w-4 h-4" />
            <label htmlFor="published" className="text-sm font-medium text-gray-700">Published (visible to site visitors)</label>
          </div>

          <SectionDivider label="Excerpt (shown on blog listing)" />
          <TextAreaField label="Excerpt (English)" value={item.excerpt} onChange={v => setItem({ ...item, excerpt: v })} rows={2} />
          <TextAreaField label="Excerpt (Arabic)" value={item.excerptAr} onChange={v => setItem({ ...item, excerptAr: v })} rows={2} />
          <TextAreaField label="Excerpt (Chinese)" value={item.excerptZh} onChange={v => setItem({ ...item, excerptZh: v })} rows={2} />

          <SectionDivider label="Full Article Content" />
          <TextAreaField label="Content (English)" value={item.contentEn} onChange={v => setItem({ ...item, contentEn: v })} rows={8} />
          <TextAreaField label="Content (Arabic)" value={item.contentAr} onChange={v => setItem({ ...item, contentAr: v })} rows={8} />
          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={8} />
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
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", slug: "", contentEn: "", contentAr: "", contentZh: "", published: false }}
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

          <SectionDivider label="Full Page Content (HTML Allowed)" />
          <TextAreaField label="Content (English)" value={item.contentEn} onChange={v => setItem({ ...item, contentEn: v })} rows={12} />
          <TextAreaField label="Content (Arabic)" value={item.contentAr} onChange={v => setItem({ ...item, contentAr: v })} rows={12} />
          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={12} />
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
      emptyRow={{ id: 0, slug: "", titleEn: "", titleAr: "", titleZh: "", heroTaglineEn: "", heroTaglineAr: "", heroTaglineZh: "", introEn: "", introAr: "", introZh: "", searchQuery: "", degreeLevelsJson: "[]", topUniversitiesJson: "[]", budgetUniversitiesJson: "[]", courseYearsJson: "[]", careerJobsEnJson: "[]", careerJobsArJson: "[]", careerJobsZhJson: "[]", seVsCsJson: "{}", countryComparisonsJson: "[]", spotlightUniversitiesJson: "[]" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="URL Slug (e.g. data-analytics)" value={item.slug} onChange={v => setItem({ ...item, slug: v.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} />
          <FormField label="Search Query (e.g. Data)" value={item.searchQuery} onChange={v => setItem({ ...item, searchQuery: v })} />
          <FormField label="Title (English)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Title (Arabic)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          
          <TextAreaField label="Hero Tagline (English)" value={item.heroTaglineEn} onChange={v => setItem({ ...item, heroTaglineEn: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Arabic)" value={item.heroTaglineAr} onChange={v => setItem({ ...item, heroTaglineAr: v })} rows={2} />
          <TextAreaField label="Hero Tagline (Chinese)" value={item.heroTaglineZh} onChange={v => setItem({ ...item, heroTaglineZh: v })} rows={2} />
          <TextAreaField label="Introduction (English)" value={item.introEn} onChange={v => setItem({ ...item, introEn: v })} rows={4} />
          <TextAreaField label="Introduction (Arabic)" value={item.introAr} onChange={v => setItem({ ...item, introAr: v })} rows={4} />
          <TextAreaField label="Introduction (Chinese)" value={item.introZh} onChange={v => setItem({ ...item, introZh: v })} rows={4} />

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
  const [menuData, setMenuData] = useState<string>("[]");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://ya-alma.onrender.com/api/config/mainNavigation`)
      .then(r => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(data => {
        if (data && data.settingValue) setMenuData(data.settingValue);
        setLoading(false);
      })
      .catch(() => {
        // Fallback or error, assume empty or need to inject default
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
    try {
      JSON.parse(menuData); // Validate JSON format
    } catch(e) {
      setMessage("Invalid JSON Format! Please check for missing quotes or commas.");
      setTimeout(() => setMessage(""), 4000);
      return;
    }

    setSaving(true);
    fetch(`https://ya-alma.onrender.com/api/config`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ settingKey: "mainNavigation", settingValue: menuData })
    }).then(() => {
      setSaving(false);
      setMessage("Navigation Menu Saved Successfully!");
      setTimeout(() => setMessage(""), 3000);
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Navbar & Menu Configuration</h2>
          <p className="text-gray-500 text-sm">Update the structure of the Main Navigation Dropdown. You must use valid JSON.</p>
        </div>
        <div className="flex items-center gap-4">
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
      <div className="p-6 bg-gray-50">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading Configuration...</div>
        ) : (
          <textarea 
            className="w-full h-[600px] font-mono text-sm p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            value={menuData}
            onChange={(e) => setMenuData(e.target.value)}
            spellCheck={false}
          />
        )}
      </div>
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
    fetch(`https://ya-alma.onrender.com/api/translations`)
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  React.useEffect(() => { fetchItems(); }, []);

  const handleSave = () => {
    if (!editing) return;
    fetch(`https://ya-alma.onrender.com/api/translations`, {
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
