const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ya-alma-legacy', 'src', 'components', 'layout', 'Navbar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add state variable
content = content.replace(
  'const [isOpen, setIsOpen] = useState(false);',
  'const [isOpen, setIsOpen] = useState(false);\n  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);'
);

// 2. Replace Quick Actions & Menu Toggle specifically
// Replace the ThemeToggle div
content = content.replace(
  /<div className="hidden lg:block ml-1 rtl:ml-0 rtl:mr-1">[\s\S]*?<ThemeToggle \/>[\s\S]*?<\/div>/,
  `{/* Dark Mode Toggle - Visible on Mobile too */}
            <div className="ml-1 rtl:ml-0 rtl:mr-1 relative z-[60]">
               <ThemeToggle />
            </div>

            {/* Combined Language & Currency Mobile Pill (visible on mobile only) */}
            <button 
              className={\`flex lg:hidden items-center gap-1 px-2 py-1.5 ml-1 rtl:ml-0 rtl:mr-1 rounded-xl transition-all border shadow-sm relative z-[60] \${isScrolled || !hasDarkHero ? "border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-gray-100 backdrop-blur-md" : "border-white/20 bg-white/10 backdrop-blur-md text-white"}\`}
              onClick={() => { setIsMobileSettingsOpen(!isMobileSettingsOpen); setIsOpen(false); }}
            >
              <Globe size={14} />
              <span className="text-[10px] font-bold uppercase">{language}</span>
              <div className={\`w-[1px] h-3 mx-0.5 \${isScrolled || !hasDarkHero ? "bg-gray-300 dark:bg-gray-600" : "bg-white/30"}\`}></div>
              <BadgeDollarSign size={14} />
              <span className="text-[10px] font-bold">{currency}</span>
            </button>`
);

// Replace the Mobile Menu Toggle to also close the settings overlay
content = content.replace(
  /onClick={\(\) => setIsOpen\(!isOpen\)}/g,
  'onClick={() => { setIsOpen(!isOpen); setIsMobileSettingsOpen(false); }}'
);

// 3. Fix the Mobile Menu Overlay contents
// Before: {/* Quick Settings (Lang & Currency) */} ... </div> </div> <ul className="flex flex-col gap-2">
const mobileOverlayRegex = /\{\/\* Quick Settings \(Lang & Currency\) \*\/\}[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<ul className="flex flex-col gap-2">/;

const newMobileMenuTop = `{/* Title for Mobile Menu */}\n          <div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">\n            <h2 className="text-2xl font-black text-gray-900 dark:text-white">{t.nav.exploreCategories || "Menu"}</h2>\n          </div>\n          <ul className="flex flex-col gap-2">`;

content = content.replace(mobileOverlayRegex, newMobileMenuTop);

// 4. Add the new Mobile Settings Overlay completely right before the closing </header>
const mobileSettingsOverlay = `
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
                  className={\`flex items-center gap-3 p-3 rounded-2xl border transition-all \${
                    language === lang.code 
                      ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 text-gray-900 dark:text-white ring-2 ring-[var(--color-brand-gold)]/20" 
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11192d] text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                  }\`}
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
                  className={\`flex items-center justify-between p-3 rounded-2xl border transition-all \${
                    currency === curr.code 
                      ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 text-gray-900 dark:text-white ring-2 ring-[var(--color-brand-gold)]/20" 
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11192d] text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700"
                  }\`}
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
    </header>`;

content = content.replace(/<\/header>/, mobileSettingsOverlay);

// 5. Fix text colors in the Mobile Menu links to ensure Dark Mode compatibility
content = content.replace(/text-gray-600 block/g, 'text-gray-600 dark:text-gray-400 block');
content = content.replace(/text-gray-700 block/g, 'text-gray-700 dark:text-gray-300 block');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Navbar updated successfully!");
