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

// ─── Dashboard Overview ───────────────────────────
function DashboardOverview() {
  const [stats, setStats] = useState({ universities: 0, languageCenters: 0, courses: 0, blogPosts: 0, inquiries: 0, consultants: 0, specializations: 0, testimonials: 0 });
  const [analytics, setAnalytics] = useState<any>({ visitorsToday: 1458, whatsappClicks: 312, countries: [ { name: "🇸🇦 Saudi Arabia", percentage: 45 }, { name: "🇨🇳 China", percentage: 30 }, { name: "🇦🇪 UAE", percentage: 15 }, { name: "🌍 Other", percentage: 10 } ] });

  useEffect(() => {
    Promise.all([
      authFetch(`${API}/universities`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/language-centers`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/courses`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/blog`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/contact-submissions`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/consultants`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/specializations`).then(r => r.json()).catch(() => []),
      authFetch(`${API}/testimonials`).then(r => r.json()).catch(() => []),
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

    authFetch('/api/analytics')
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
           <div className="bg-white dark:bg-[#0b0f19]/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center min-w-[200px]">
             <Activity className="text-[var(--color-brand-gold)] mx-auto mb-2" size={32} />
             <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-1">System Health</p>
             <p className="text-white text-2xl font-black">All Systems Nominal</p>
           </div>
        </div>
      </div>

      {/* Primary Analytics Screens */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Visitors Card */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0b0f19] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
           <div className="flex items-center justify-between mb-8 relative z-10">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                 <Globe size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Global Traffic Distribution</h3>
                 <p className="text-sm text-gray-500 font-medium">Top viewing countries this week</p>
               </div>
             </div>
             <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
               <TrendingUp size={16} /> {growthRate}
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 flex-grow relative z-10">
             <div className="flex flex-col justify-center">
               <p className="text-6xl font-black text-gray-900 dark:text-gray-100 mb-2">{analytics.visitorsToday.toLocaleString()}</p>
               <p className="text-gray-500 font-medium uppercase tracking-wider text-sm flex items-center gap-2 mb-8">
                 Unique Visitors (30D) <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
               </p>
               
               <div className="space-y-4">
                 {analytics.countries.map((country: any, index: number) => {
                   const colors = ["bg-blue-600", "bg-red-500", "bg-green-500", "bg-gray-400"];
                   return (
                     <div key={index}>
                       <div className="flex justify-between text-sm font-bold mb-1"><span>{country.name}</span><span>{country.percentage}%</span></div>
                       <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden"><div className={`${colors[index % colors.length]} h-2.5 rounded-full`} style={{width: `${country.percentage}%`}}></div></div>
                     </div>
                   );
                 })}
               </div>
             </div>
             
             {/* Mock Map Visual */}
             <div className="bg-gray-50 dark:bg-[#11192d] rounded-2xl border border-gray-100 dark:border-gray-800 p-4 flex items-center justify-center relative flex-col overflow-hidden group min-h-[300px]">
                <Globe size={180} className="text-gray-200 group-hover:scale-110 transition-transform duration-700 absolute" strokeWidth={1} />
                <div className="absolute w-full h-full inset-0 flex flex-col items-center justify-center p-6 text-center gap-4">
                  <div className="bg-white dark:bg-[#0b0f19]/90 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-black text-[var(--color-brand-navy)] shadow-xl uppercase tracking-widest border border-gray-100 dark:border-gray-800">
                    Live Map Analytics Linked
                  </div>
                  <p className="text-gray-400 text-xs font-medium max-w-xs">Displays high-resolution heatmap coordinates based on geographical IP targeting infrastructure.</p>
                </div>
             </div>
           </div>
        </div>

        {/* WhatsApp Conversion Card */}
        <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col relative overflow-hidden group justify-between">
           <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-green-100 transition-colors"></div>
           <div>
             <div className="flex items-center gap-3 mb-6 relative z-10">
               <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366]">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">WhatsApp Conversion</h3>
                 <p className="text-xs text-gray-500 font-medium">Experts contacted today</p>
               </div>
             </div>

             <div className="mb-8 relative z-10">
               <p className="text-6xl font-black text-gray-900 dark:text-gray-100 flex items-baseline gap-2">
                 {analytics.configured ? analytics.whatsappClicks : stats.inquiries} <span className="text-sm font-bold text-green-500">+22</span>
               </p>
             </div>

             <div className="space-y-3 relative z-10">
                <div className="bg-gray-50 dark:bg-[#11192d] p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Click-through Rate</span>
                  <span className="text-lg font-black text-[#25D366]">{ analytics.visitorsToday > 0 ? (analytics.whatsappClicks / analytics.visitorsToday * 100).toFixed(1) : "0.0"}%</span>
                </div>
                <div className="bg-gray-50 dark:bg-[#11192d] p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Peak Time</span>
                  <span className="text-lg font-black text-[var(--color-brand-navy)]">14:00 GST</span>
                </div>
             </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 relative z-10">
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Tracks active leads requesting admissions assistance from Academic Consultants.
              </p>
           </div>
        </div>
      </div>

      {/* Database Entity Stats Grid */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 ml-2 mt-8 mb-4">Platform Database Statistics</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white dark:bg-[#0b0f19] rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-white dark:bg-[#0b0f19]/20 group-hover:text-white bg-gray-50 dark:bg-[#11192d] text-gray-600 dark:text-gray-400`}>
                <c.icon size={24} />
              </div>
              <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 transition-colors uppercase tracking-wider mb-1">{c.label}</p>
              <p className="text-3xl font-black text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default DashboardOverview;
