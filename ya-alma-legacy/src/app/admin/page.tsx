"use client";
import { API, authFetch } from "./types";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import React, { useState, useEffect } from "react";

import DashboardOverview from "./components/DashboardOverview";
import UniversitiesManager from "./components/UniversitiesManager";
import LanguageCentersManager from "./components/LanguageCentersManager";
import LanguageProgramsManager from "./components/LanguageProgramsManager";
import CoursesManager from "./components/CoursesManager";
import BlogManager from "./components/BlogManager";
import PagesManager from "./components/PagesManager";
import SpecializationsManager from "./components/SpecializationsManager";
import NavigationManager from "./components/NavigationManager";
import TestimonialsManager from "./components/TestimonialsManager";
import SiteSettingsManager from "./components/SiteSettingsManager";
import TranslationsManager from "./components/TranslationsManager";
import VideosManager from "./components/VideosManager";
import ConsultantsManager from "./components/ConsultantsManager";
import InquiriesManager from "./components/InquiriesManager";
import UsersManager from "./components/UsersManager";


import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";

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
  { id: "users", label: "Users & Accounts", icon: Users },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const { data: session, status } = useSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    // Call next-auth credentials provider
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setLoginError("Invalid credentials or server connection failed.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  const handleLogout = () => {
    signOut();
  };

  if (status === "loading") {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 text-xl font-bold dark:bg-[#0b0f19] dark:text-gray-100">Loading Secure Panel...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-[#0b0f19] p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
           <div className="relative z-10">
             <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-[var(--color-brand-gold)] font-black text-2xl">YA</span>
                </div>
             </div>
             <h1 className="text-2xl font-black text-center mb-2 text-gray-900 dark:text-gray-100">Admin Portal</h1>
             <p className="text-gray-500 text-center text-sm mb-8">Sign in to manage YA Alma Legacy ecosystem</p>
             
             {loginError && <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold text-center mb-6">{loginError}</div>}
             
             <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Enter admin username" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors" placeholder="Enter password" />
                </div>
                <button type="submit" className="w-full bg-[var(--color-brand-gold)] text-[#0f172a] font-bold py-3.5 rounded-xl hover:bg-yellow-500 transition-colors mt-2 shadow-lg shadow-yellow-500/20">
                  Sign in with Credentials
                </button>
             </form>

             <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-[#0b0f19] text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white font-bold py-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                  </button>
                  {errorParam === 'pending_approval' && (
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl text-sm font-semibold text-center">
                      Your Google account is pending Admin approval. Please contact the administrator.
                    </div>
                  )}
                </div>
             </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex" dir="ltr">
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
                  ? "bg-white dark:bg-[#0b0f19]/10 text-[var(--color-brand-gold)] border-r-4 border-[var(--color-brand-gold)]" 
                  : "text-gray-400 hover:text-white hover:bg-white dark:bg-[#0b0f19]/5"
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
        <header className="bg-white dark:bg-[#0b0f19] border-b border-gray-200 dark:border-gray-700 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
          <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
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
          { activeTab === "users" && <UsersManager /> }
        </div>
      </main>
    </div>
  );
}



// ─── Videos Manager ────────────────────────────────


// ─── Generic CRUD Table Component ──────────────────
function TextInput({ label, value, onChange, placeholder = "" }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 mb-1">{label}</label>
      <input type="text" className="w-full border border-gray-200 dark:border-gray-700 rounded text-sm px-3 py-2 bg-gray-50 dark:bg-[#11192d] focus:bg-white dark:bg-[#0b0f19] transition-colors outline-none focus:ring-1 focus:ring-[var(--color-brand-navy)]" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

// ─── Site Settings Manager ──────────────────────────


// ─── Inquiries Manager ─────────────────────────────────




// ─── Translations Site Content Manager ────────────────


// ─── Consultants Manager ─────────────────────────

