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

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { currency, setCurrency, liveRates, ratesLoading } = useCurrency();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [navData, setNavData] = useState<MegaMenu[]>(fallbackNavigation);

  // Determine if the current page has a dark hero header at the top
  const hasDarkHero = pathname === "/" || pathname?.startsWith("/universities/") || pathname?.startsWith("/language-centers/") || pathname?.startsWith("/specializations/");

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-navbar fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled || !hasDarkHero ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-4 md:py-6"
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
                      isScrolled || !hasDarkHero ? "text-[#11192d]" : "text-[#11192d] md:text-white"
                    }`}
                  >
                    {language === "ar" ? item.ar : language === "zh" ? item.zh : item.en}
                    {(item.categories || item.items) && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Tier 2: Category Dropdown */}
                  {(item.categories || item.items) && (
                    <div className={`absolute top-full pt-4 hidden group-hover:block ${language === "ar" ? "right-0" : "left-0"}`}>
                      <ul className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-visible py-2 min-w-[240px] flex flex-col z-50 relative">
                        {item.categories && item.categories.map((category, cIdx) => (
                          <li key={`cat-${cIdx}`} className="relative group/sub">
                            <div className="px-5 py-3 text-[14px] font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors">
                              <span>{language === "ar" ? category.ar : language === "zh" ? category.zh : category.en}</span>
                              <ChevronDown size={14} className={`opacity-50 transition-transform ${language === "ar" ? "rotate-90 group-hover/sub:translate-x-1" : "-rotate-90 group-hover/sub:-translate-x-1"}`} />
                            </div>

                            {/* Tier 3: Items Flyout */}
                            <div className={`absolute top-0 hidden group-hover/sub:block ${language === "ar" ? "right-full pr-1" : "left-full pl-1"} h-auto min-h-full`}>
                              <ul className="bg-white shadow-2xl rounded-xl border border-gray-100 pt-3 pb-3 min-w-[280px] max-h-[70vh] overflow-y-auto flex flex-col z-50">
                                {category.items.map((subItem, sIdx) => (
                                  <li key={`fly-${sIdx}`}>
                                    <Link 
                                      href={subItem.href} 
                                      className="px-5 py-2.5 text-[13px] font-medium text-gray-600 hover:text-[var(--color-brand-gold)] hover:bg-gray-50 transition-colors flex items-center gap-2 group/link"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/link:bg-[var(--color-brand-gold)] transition-colors flex-shrink-0"></span>
                                      <span className="truncate">{language === "ar" ? subItem.ar : language === "zh" ? subItem.zh : subItem.en}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}

                        {/* Direct Items Without Category (Simple Dropdown) */}
                        {item.items && item.items.map((subItem, sIdx) => (
                          <li key={`si-${sIdx}`}>
                            <Link 
                              href={subItem.href} 
                              className="px-5 py-3 text-[14px] font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50 flex items-center gap-2 transition-colors"
                            >
                              <span className="truncate">{language === "ar" ? subItem.ar : language === "zh" ? subItem.zh : subItem.en}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions & Menu Toggle */}
          <div className="flex items-center gap-1 md:gap-4 relative z-50">
            {/* Search - Desktop Only */}
            <button className={`hidden lg:block hover:text-[var(--color-brand-gold)] transition-colors p-2 ${isScrolled || !hasDarkHero ? "text-gray-700" : "text-gray-700 md:text-white"}`}>
              <Search size={20} />
            </button>
            
            {/* Currency Combobox */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-sm font-bold hover:text-[var(--color-brand-gold)] transition-colors p-1.5 md:p-2 ${language === "ar" ? "ml-1" : "mr-1"} ${isScrolled || !hasDarkHero ? "text-[#11192d]" : "text-gray-900 md:text-white"}`}
              >
                <BadgeDollarSign size={16} className="hidden sm:block" />
                <span>{currency}</span>
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform hidden sm:block" />
              </button>

              <div className={`absolute top-full pt-2 hidden group-hover:block ${language === "ar" ? "left-0" : "right-0"}`}>
                <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden py-2 min-w-[180px] z-50 relative">
                  {/* Live rate header */}
                  <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-2">
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
                                : "text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50"
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
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-sm font-bold hover:text-[var(--color-brand-gold)] transition-colors p-1.5 md:p-2 ${language === "ar" ? "ml-1" : "mr-1"} ${isScrolled || !hasDarkHero ? "text-[#11192d]" : "text-gray-900 md:text-white"}`}
              >
                <Globe size={16} className="hidden sm:block" />
                <span className="uppercase">{language}</span>
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform hidden sm:block" />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full pt-2 hidden group-hover:block ${language === "ar" ? "left-0" : "right-0"}`}>
                <ul className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden py-2 min-w-[140px] flex flex-col z-50 relative">
                  {[
                    { code: "en", label: "English" },
                    { code: "ar", label: "العربية" },
                    { code: "zh", label: "中文" }
                  ].map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => setLanguage(lang.code as any)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-bold flex items-center justify-between transition-colors ${
                          language === lang.code 
                            ? "text-[var(--color-brand-gold)] bg-gray-50/50" 
                            : "text-[var(--color-brand-navy)] hover:text-[var(--color-brand-gold)] hover:bg-gray-50"
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
            </div>
            
            {/* Apply Button - Desktop Only */}
            <Link href="/contact" className="hidden lg:block">
              <Button size="sm" variant={isScrolled ? "primary" : "secondary"} className="shadow-md relative overflow-hidden group">
                <span className="relative z-10">{t.nav.apply}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 ml-1 rounded-lg relative z-50 ${isOpen ? "text-[var(--color-brand-gold)]" : (isScrolled || !hasDarkHero ? "text-gray-900" : "text-gray-900 md:text-white")}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-white shadow-xl overflow-y-auto px-4 pt-20 pb-12 z-40" style={{ minHeight: '100dvh' }} dir={language === "ar" ? "rtl" : "ltr"}>
          
          {/* Quick Settings (Lang & Currency) shifted to TOP */}
          <ul className="flex flex-col gap-2 mt-4">
            {navData.map((item, idx) => (
              <li key={`mob-${idx}`} className="border-b border-gray-100 pb-2">
                <div className="flex justify-between items-center py-2">
                  <Link
                    href={item.href}
                    className="block py-2 text-lg font-bold text-gray-900 flex-1"
                    onClick={() => {
                      if (!(item.categories || item.items)) setIsOpen(false);
                    }}
                  >
                    {language === "ar" ? item.ar : language === "zh" ? item.zh : item.en}
                  </Link>
                  {(item.categories || item.items) && (
                    <button 
                       className="p-2.5 bg-gray-50/80 rounded-xl hover:bg-gray-100 text-[var(--color-brand-gold)]"
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
                        <h5 className="font-bold text-sm text-[var(--color-brand-gold)] mb-2">{language === "ar" ? category.ar : language === "zh" ? category.zh : category.en}</h5>
                        <ul className="space-y-2">
                          {category.items.map((sub, sIdx) => (
                            <li key={`msi-${sIdx}`}>
                              <Link href={sub.href} className="text-gray-600 block py-1.5 text-sm font-medium hover:text-[var(--color-brand-gold)]" onClick={() => setIsOpen(false)}>
                                {language === "ar" ? sub.ar : language === "zh" ? sub.zh : sub.en}
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
                            <Link href={sub.href} className="text-gray-700 block py-2 text-[15px] font-bold hover:text-[var(--color-brand-gold)]" onClick={() => setIsOpen(false)}>
                              {language === "ar" ? sub.ar : language === "zh" ? sub.zh : sub.en}
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
          
          <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6">
            <Link href="/contact" className="w-full">
              <Button className="w-full h-14 text-lg shadow-lg relative overflow-hidden group" onClick={() => setIsOpen(false)}>
                <span className="relative z-10">{t.nav.apply}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
