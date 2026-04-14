"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Globe, ChevronDown, Menu, X, Check, BadgeDollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency, Currency } from "@/lib/CurrencyContext";
import { mainNavigation as fallbackNavigation, MegaMenu } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency, liveRates, ratesLoading } = useCurrency();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [navData, setNavData] = useState<MegaMenu[]>(fallbackNavigation);

  // Determine if the current page has a dark hero header at the top
  const hasDarkHero = pathname === "/" || pathname?.startsWith("/universities/") || pathname?.startsWith("/language-centers/") || pathname?.startsWith("/specializations/");

  useEffect(() => {
    // TEMPORARILY DISABLED: Forcing the app to use the new luxurious local navigation.ts 
    // instead of the outdated database version.
    /*
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/config/mainNavigation`)
      .then(res => res.json())
      .then(data => {
        if (data && data.settingValue) {
          try {
            const parsed = JSON.parse(data.settingValue);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setNavData(parsed);
            }
          } catch(e) {}
        }
      })
      .catch(() => console.log("Using local navigation fallback"));
    */
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menus are open to prevent UI tearing/freezing
  useEffect(() => {
    if (isOpen || isMobileSettingsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobileSettingsOpen]);

  return (
    <header
      className={`site-navbar fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled || !hasDarkHero ? "bg-white dark:bg-[#0b0f19]/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-4 md:py-6"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <Image 
              src="/LOGO_transparent.png" 
              alt="Y.A ALMA LEGACY Logo" 
              width={160} 
              height={80} 
              className={`object-contain h-14 w-auto md:h-16 transition-all duration-300 ${!isScrolled && hasDarkHero ? "brightness-0 invert drop-shadow-md" : "mix-blend-multiply"}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center relative z-50">
            <ul className="flex items-center gap-1 xl:gap-3">
              {navData.map((item, idx) => (
                <li key={idx} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-bold text-[14px] xl:text-[15px] px-3 py-4 transition-colors hover:text-[var(--color-brand-gold)] ${
                      isScrolled || !hasDarkHero ? "text-[#11192d] dark:text-gray-100" : "text-[#11192d] dark:text-gray-100 md:text-white"
                    }`}
                  >
                    {language === "ar" ? item.ar : language === "zh" ? item.zh : language === "ms" ? (item.ms || item.en) : item.en}
                    {(item.categories || item.items) && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Tier 2: Mega Menu Dropdown */}
                  {(item.categories || item.items) && (
                    <div className={`absolute top-full pt-6 hidden group-hover:block ${language === "ar" ? "right-[-100px]" : "left-[-100px]"} w-max max-w-[900px] z-[90]`}>
                      <div className="bg-white dark:bg-[#0b0f19]/80 backdrop-blur-2xl shadow-[0_40px_100px_-10px_rgba(0,0,0,0.2)] rounded-3xl border border-white/60 p-8 flex gap-8">
                        
                        {/* Decorative Premium Mega Menu Pane */}
                        <div className="hidden md:flex flex-col justify-between w-[240px] bg-gradient-to-br from-[var(--color-brand-navy)] to-blue-900 rounded-2xl p-6 text-white overflow-hidden relative shadow-inner">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)]/20 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none"></div>
                           <h4 className="text-xl font-black mb-2 relative z-10">{language === "ar" ? item.ar : language === "zh" ? item.zh : language === "ms" ? (item.ms || item.en) : item.en}</h4>
                           <p className="text-sm text-blue-200/80 font-medium leading-relaxed relative z-10">{t.hero?.desc?.substring(0, 70) || "Explore premium educational options curated for you."}...</p>
                           <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600" alt="Menu Decoration" width={200} height={150} className="rounded-xl mt-6 object-cover h-32 opacity-80 mix-blend-screen grayscale contrast-150 relative z-10" unoptimized />
                        </div>

                        {/* Mega Menu Links Grid */}
                        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                          {item.categories && item.categories.map((category, cIdx) => (
                            <div key={`cat-${cIdx}`} className="flex flex-col relative group/sub">
                              <div className="text-[14px] font-black justify-between text-[var(--color-brand-navy)] mb-4 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                                <span className="tracking-tight">{language === "ar" ? category.ar : language === "zh" ? category.zh : language === "ms" ? (category.ms || category.en) : category.en}</span>
                              </div>

                              <ul className="flex flex-col gap-3">
                                {category.items.map((subItem, sIdx) => (
                                  <li key={`fly-${sIdx}`}>
                                    <Link 
                                      href={subItem.href} 
                                      className="text-[13px] font-bold text-gray-500 hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2 group/link"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/link:bg-[var(--color-brand-gold)] transition-all group-hover/link:scale-150 flex-shrink-0"></span>
                                      <span className="truncate">{language === "ar" ? subItem.ar : language === "zh" ? subItem.zh : language === "ms" ? (subItem.ms || subItem.en) : subItem.en}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Direct Items Without Category (Simple Column) */}
                          {item.items && item.items.length > 0 && !item.categories && (
                            <div className="flex flex-col">
                              <ul className="flex flex-col gap-3">
                                {item.items.map((subItem, sIdx) => (
                                  <li key={`si-${sIdx}`}>
                                    <Link 
                                      href={subItem.href} 
                                      className="text-[14px] font-bold text-gray-600 dark:text-gray-400 hover:text-[var(--color-brand-gold)] bg-gray-50 dark:bg-[#11192d] hover:bg-gray-100 dark:bg-gray-800/80 px-4 py-2.5 rounded-xl transition-colors block"
                                    >
                                      {language === "ar" ? subItem.ar : language === "zh" ? subItem.zh : language === "ms" ? (subItem.ms || subItem.en) : subItem.en}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions & Menu Toggle */}
          <div className="flex items-center gap-1 md:gap-4 relative z-50">
            {/* Dark Mode Toggle */}
            {/* Dark Mode Toggle - Visible on Mobile too */}
            <div className="ml-1 rtl:ml-0 rtl:mr-1 relative z-[60]">
               <ThemeToggle />
            </div>

            {/* Combined Language & Currency Mobile Pill (visible on mobile only) */}
            <button 
              className={`flex lg:hidden items-center gap-1 px-2 py-1.5 ml-1 rtl:ml-0 rtl:mr-1 rounded-xl transition-all border shadow-sm relative z-[60] ${isScrolled || !hasDarkHero ? "border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-gray-100 backdrop-blur-md" : "border-white/20 bg-white/10 backdrop-blur-md text-white"}`}
              onClick={() => { setIsMobileSettingsOpen(!isMobileSettingsOpen); setIsOpen(false); }}
            >
              <Globe size={14} />
              <span className="text-[10px] font-bold uppercase">{language}</span>
              <div className={`w-[1px] h-3 mx-0.5 ${isScrolled || !hasDarkHero ? "bg-gray-300 dark:bg-gray-600" : "bg-white/30"}`}></div>
              <BadgeDollarSign size={14} />
              <span className="text-[10px] font-bold">{currency}</span>
            </button>

            {/* Search - Desktop Only */}
            <button className={`hidden lg:block hover:text-[var(--color-brand-gold)] transition-colors p-2 ${isScrolled || !hasDarkHero ? "text-gray-700 dark:text-gray-300" : "text-gray-700 dark:text-gray-300 md:text-white"}`}>
              <Search size={20} />
            </button>
            
            {/* Currency Combobox */}
            <div className="relative group hidden lg:block">
              <button 
                className={`flex items-center gap-1 text-sm font-bold hover:text-[var(--color-brand-gold)] transition-colors p-1.5 md:p-2 ${language === "ar" ? "ml-1" : "mr-1"} ${isScrolled || !hasDarkHero ? "text-[#11192d] dark:text-gray-100" : "text-gray-900 dark:text-gray-100 md:text-white"}`}
              >
                <BadgeDollarSign size={16} className="hidden sm:block" />
                <span>{currency}</span>
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform hidden sm:block" />
              </button>

              <div className={`absolute top-full pt-2 hidden group-hover:block ${language === "ar" ? "left-0" : "right-0"}`}>
                <div className="bg-white dark:bg-[#0b0f19] shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden py-2 min-w-[180px] z-50 relative">
                  {/* Live rate header */}
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ratesLoading ? "bg-yellow-400 animate-pulse" : liveRates?.fetchedAt ? "bg-green-400" : "bg-gray-300"}`}></span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      {ratesLoading ? "Fetching live rates..." : "Live Rates (MYR base)"}
                    </span>
                  </div>
                  <ul className="py-1">
                    {([
                      { code: "MYR", label: "MYR", symbol: "RM" },
                      { code: "USD", label: "USD", symbol: "$"  },
                      { code: "SAR", label: "SAR", symbol: "﷼" },
                      { code: "CNY", label: "CNY", symbol: "¥"  },
                    ] as { code: Currency; label: string; symbol: string }[]).map((curr) => {
                      const rate = liveRates?.rates[curr.code as Currency];
                      const rateStr = rate != null && curr.code !== "MYR"
                        ? `1 MYR = ${rate.toFixed(4)} ${curr.code}`
                        : curr.code === "MYR" ? "Base currency" : "—";
                      return (
                        <li key={curr.code}>
                          <button
                            onClick={() => setCurrency(curr.code as any)}
                            className={`w-full text-left px-4 py-2.5 text-[13px] font-bold flex items-center justify-between gap-3 transition-colors ${
                              currency === curr.code
                                ? "text-[var(--color-brand-gold)] bg-amber-50"
                                : "text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50 dark:bg-[#11192d]"
                            }`}
                          >
                            <div className="flex flex-col items-start">
                              <span>{curr.symbol} {curr.label}</span>
                              <span className="text-[10px] font-normal text-gray-400">{rateStr}</span>
                            </div>
                            {currency === curr.code && <Check size={14} className="flex-shrink-0" />}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Language Combobox */}
            <div className="relative group hidden lg:block">
              <button 
                className={`flex items-center gap-1 text-sm font-bold hover:text-[var(--color-brand-gold)] transition-colors p-1.5 md:p-2 ${language === "ar" ? "ml-1" : "mr-1"} ${isScrolled || !hasDarkHero ? "text-[#11192d] dark:text-gray-100" : "text-gray-900 dark:text-gray-100 md:text-white"}`}
              >
                <Globe size={16} className="hidden sm:block" />
                <span className="uppercase">{language}</span>
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform hidden sm:block" />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full pt-2 hidden group-hover:block ${language === "ar" ? "left-0" : "right-0"}`}>
                <ul className="bg-white dark:bg-[#0b0f19] shadow-xl rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden py-2 min-w-[140px] flex flex-col z-50 relative">
                  {[
                    { code: "en", label: "English" },
                    { code: "ar", label: "العربية" },
                    { code: "zh", label: "中文" },
                    { code: "ms", label: "Bahasa Melayu" }
                  ].map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => setLanguage(lang.code as any)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-bold flex items-center justify-between transition-colors ${
                          language === lang.code 
                            ? "text-[var(--color-brand-gold)] bg-gray-50 dark:bg-[#11192d]/50" 
                            : "text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50 dark:bg-[#11192d]"
                        }`}
                      >
                        {lang.label}
                        {language === lang.code && <Check size={16} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Apply Button - Desktop Only */}
            <Link href="/contact" className="hidden lg:block">
              <Button size="sm" variant={isScrolled ? "primary" : "secondary"} className="shadow-md relative overflow-hidden group">
                <span className="relative z-10">{t.nav.apply}</span>
                <div className="absolute inset-0 bg-white dark:bg-[#0b0f19]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 ml-1 rounded-lg relative z-50 ${isOpen ? "text-[var(--color-brand-gold)]" : (isScrolled || !hasDarkHero ? "text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100 md:text-white")}`}
              onClick={() => { setIsOpen(!isOpen); setIsMobileSettingsOpen(false); }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-[#0b0f19] shadow-xl overflow-y-auto overflow-x-hidden px-4 pt-24 pb-12 z-40" style={{ height: '100dvh' }} dir={language === "ar" ? "rtl" : "ltr"}>
          
          {/* Title for Mobile Menu */}
          <div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">{(t.nav as any).exploreCategories || "Menu"}</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {navData.map((item, idx) => (
              <li key={`mob-${idx}`} className="border-b border-gray-100 dark:border-gray-800 pb-2">
                <div className="flex justify-between items-center py-2">
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-bold text-gray-900 dark:text-gray-100 flex-1"
                    onClick={() => {
                      if (!(item.categories || item.items)) setIsOpen(false);
                    }}
                  >
                    {language === "ar" ? item.ar : language === "zh" ? item.zh : language === "ms" ? (item.ms || item.en) : item.en}
                  </Link>
                  {(item.categories || item.items) && (
                    <button 
                       className="p-2.5 bg-gray-50 dark:bg-[#11192d]/80 rounded-xl hover:bg-gray-100 dark:bg-gray-800 text-[var(--color-brand-gold)]"
                       onClick={() => setExpandedItem(expandedItem === idx ? null : idx)}
                    >
                      <ChevronDown size={20} className={`transition-transform duration-300 ${expandedItem === idx ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                
                {expandedItem === idx && (item.categories || item.items) && (
                  <div className="pl-4 pr-4 border-l-2 border-[var(--color-brand-gold)]/30 mt-1 space-y-4 pb-4 animate-in slide-in-from-top-2">
                    {item.categories && item.categories.map((category, cIdx) => (
                      <div key={`mcat-${cIdx}`}>
                        <h5 className="font-bold text-sm text-[var(--color-brand-gold)] mb-2">{language === "ar" ? category.ar : language === "zh" ? category.zh : language === "ms" ? (category.ms || category.en) : category.en}</h5>
                        <ul className="space-y-2">
                          {category.items.map((sub, sIdx) => (
                            <li key={`msi-${sIdx}`}>
                              <Link href={sub.href} className="text-gray-600 dark:text-gray-400 block py-1.5 text-sm font-medium hover:text-[var(--color-brand-gold)]" onClick={() => setIsOpen(false)}>
                                {language === "ar" ? sub.ar : language === "zh" ? sub.zh : language === "ms" ? (sub.ms || sub.en) : sub.en}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.items && (
                      <ul className="space-y-2 pb-1">
                        {item.items.map((sub, sIdx) => (
                          <li key={`mrsi-${sIdx}`}>
                            <Link href={sub.href} className="text-gray-700 dark:text-gray-300 block py-2 text-[15px] font-bold hover:text-[var(--color-brand-gold)]" onClick={() => setIsOpen(false)}>
                              {language === "ar" ? sub.ar : language === "zh" ? sub.zh : language === "ms" ? (sub.ms || sub.en) : sub.en}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
            <Link href="/contact" className="w-full">
              <Button className="w-full h-14 text-lg shadow-lg relative overflow-hidden group" onClick={() => setIsOpen(false)}>
                <span className="relative z-10">{t.nav.apply}</span>
                <div className="absolute inset-0 bg-white dark:bg-[#0b0f19]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Button>
            </Link>
          </div>
        </div>
      )}
    
      {/* Mobile Settings Overlay (Language & Currency) */}
      {isMobileSettingsOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-gray-50 dark:bg-[#0b0f19] shadow-2xl px-4 pt-24 pb-8 z-40 border-b border-gray-200 dark:border-gray-800" animate-in slide-in-from-top-10 dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="mb-6">
            <h3 className="text-[11px] uppercase tracking-widest font-black text-gray-400 mb-3 flex items-center gap-2">
              <Globe size={14} /> Select Language
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { code: "en", label: "English", flag: "🇺🇸" },
                { code: "ar", label: "العربية", flag: "🇸🇦" },
                { code: "zh", label: "中文", flag: "🇨🇳" },
                { code: "ms", label: "Melayu", flag: "🇲🇾" }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code as any); setIsMobileSettingsOpen(false); }}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                    language === lang.code 
                      ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 text-gray-900 dark:text-white ring-2 ring-[var(--color-brand-gold)]/20" 
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11192d] text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-bold text-sm">{lang.label}</span>
                  {language === lang.code && <Check size={16} className="ml-auto text-[var(--color-brand-gold)]" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-black text-gray-400 mb-3 flex items-center gap-2">
              <BadgeDollarSign size={14} /> Select Currency
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { code: "MYR", label: "MYR", sym: "RM" },
                { code: "USD", label: "USD", sym: "$" },
                { code: "SAR", label: "SAR", sym: "﷼" },
                { code: "CNY", label: "CNY", sym: "¥" }
              ].map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => { setCurrency(curr.code as any); setIsMobileSettingsOpen(false); }}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                    currency === curr.code 
                      ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 text-gray-900 dark:text-white ring-2 ring-[var(--color-brand-gold)]/20" 
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11192d] text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                     <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-xs text-gray-500 dark:text-gray-400">{curr.sym}</span>
                     <span className="font-bold text-sm">{curr.code}</span>
                  </div>
                  {currency === curr.code && <Check size={16} className="text-[var(--color-brand-gold)]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
