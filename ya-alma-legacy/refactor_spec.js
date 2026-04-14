const fs = require('fs');

let c = fs.readFileSync('src/app/admin/specializations/[id]/page.tsx', 'utf8');

// 1. Add states and handleAITranslate function
if (!c.includes('handleAITranslate')) {
  const insertIndex = c.indexOf('// Fetch Specialization');
  
  const aiTranslateBlock = `
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);

  const translateText = async (text: string, targetLang: string) => {
    if (!text || text.trim() === "") return text;
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang })
      });
      const resData = await res.json();
      return resData.translatedText || text;
    } catch(e) {
      console.error(e);
      return text;
    }
  };

  const handleAITranslate = async () => {
    setIsTranslating(true);
    setShowTranslations(true); // Open columns to watch the magic unfold
    
    try {
      const payload = { ...data };
      
      // Top Level Fields
      if (payload.titleAr) {
        payload.titleEn = await translateText(payload.titleAr, 'en');
        payload.titleZh = await translateText(payload.titleAr, 'zh-CN');
        payload.titleMs = await translateText(payload.titleAr, 'ms');
      }
      if (payload.heroTaglineAr) {
        payload.heroTaglineEn = await translateText(payload.heroTaglineAr, 'en');
        payload.heroTaglineZh = await translateText(payload.heroTaglineAr, 'zh-CN');
        payload.heroTaglineMs = await translateText(payload.heroTaglineAr, 'ms');
      }
      if (payload.introAr) {
        payload.introEn = await translateText(payload.introAr, 'en');
        payload.introZh = await translateText(payload.introAr, 'zh-CN');
        payload.introMs = await translateText(payload.introAr, 'ms');
      }

      // Arrays (Degree Levels)
      if (payload.degreeLevels && payload.degreeLevels.length > 0) {
        for (let i=0; i<payload.degreeLevels.length; i++) {
          let lvl = payload.degreeLevels[i];
          if (lvl.titleAr) {
            lvl.titleEn = await translateText(lvl.titleAr, 'en');
            lvl.titleZh = await translateText(lvl.titleAr, 'zh-CN');
            lvl.titleMs = await translateText(lvl.titleAr, 'ms');
          }
          if (lvl.durationAr) {
            lvl.durationEn = await translateText(lvl.durationAr, 'en');
            lvl.durationZh = await translateText(lvl.durationAr, 'zh-CN');
            lvl.durationMs = await translateText(lvl.durationAr, 'ms');
          }
        }
      }

      // Arrays (Top Universities)
      if (payload.topUniversities && payload.topUniversities.length > 0) {
        for (let i=0; i<payload.topUniversities.length; i++) {
          let uni = payload.topUniversities[i];
          if (uni.nameAr) {
            uni.nameEn = await translateText(uni.nameAr, 'en');
            uni.nameZh = await translateText(uni.nameAr, 'zh-CN');
            uni.nameMs = await translateText(uni.nameAr, 'ms');
          }
          if (uni.discountAr) {
            uni.discountEn = await translateText(uni.discountAr, 'en');
            uni.discountZh = await translateText(uni.discountAr, 'zh-CN');
          }
        }
      }
      
      setData(payload);
    } catch(err) {
      console.error(err);
      alert("Translation encountered an error.");
    }
    
    setIsTranslating(false);
  };
  
`;
  c = c.slice(0, insertIndex) + aiTranslateBlock + c.slice(insertIndex);
}

// 2. Add Toggle and AI Translate UI Buttons
if (!c.includes('onClick={handleAITranslate}')) {
  const saveBtnRegex = /<button onClick=\{handleSave\}[\s\S]*?<\/button>/;
  const newHeaderBtns = `
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowTranslations(!showTranslations)} 
            className="flex items-center gap-2 bg-gray-100/50 hover:bg-gray-200 text-[var(--color-brand-navy)] px-4 py-3 rounded-xl font-bold transition-all border border-gray-200"
          >
            {showTranslations ? "O\ U( Hide Other Languages" : "O\ U) Show Other Languages"}
          </button>
          <button 
            onClick={handleAITranslate} disabled={isTranslating} 
            className="flex items-center gap-2 bg-[var(--color-brand-gold)] hover:brightness-110 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-yellow-600/20 hover:-translate-y-0.5 transition-all"
          >
            <Star size={18} className={isTranslating ? "animate-spin" : ""} /> {isTranslating ? "Translating..." : "✨ AI Translate from Arabic"}
          </button>
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-[var(--color-brand-navy)] hover:bg-[#131d36] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all">
            <Save size={18} /> {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
`;
  c = c.replace(saveBtnRegex, newHeaderBtns);
}

// 3. Inject CSS to hide translation blocks when !showTranslations
const styleBlock = `
    <style>
      {\`
        .hide-translations .lang-en,
        .hide-translations .lang-zh {
          display: none !important;
        }
        .hide-translations .lang-ar {
          grid-column: span 3 / span 3;
        }
        /* Top Univ overrides */
        .hide-translations .tu-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        }
        .hide-translations .tu-en, .hide-translations .tu-zh {
          display: none !important;
        }
      \`}
    </style>
`;
if(!c.includes('.hide-translations')) {
    c = c.replace(
      '<div className="bg-[#F8FAFC] min-h-screen pb-40 font-sans text-gray-800">',
      styleBlock + '\n    <div className={`bg-[#F8FAFC] min-h-screen pb-40 font-sans text-gray-800 ${!showTranslations ? "hide-translations" : ""}`}>'
    );
}

// 4. Update the Grid columns to use `lang-en`, `lang-ar`, `lang-zh` classes
c = c.replace('{/* English */}', '{/* English */}\n<div className="lang-en bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">');
c = c.replace(/<div className="bg-gray-50\/70 p-6 rounded-2xl border border-gray-100/g, '<div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100'); // removed buggy class replacement

c = c.replace(
  '<div className="grid md:grid-cols-3 gap-6 relative z-10">',
  '<div className="grid md:grid-cols-3 gap-6 relative z-10">'
);
// Actually, it's easier to just do text replacement for the column wrappers
c = c.replace(
  '{/* English */}\n            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">',
  '{/* English */}\n            <div className="lang-en bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">'
);
c = c.replace(
  '{/* Arabic */}\n            <div dir="rtl" className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">',
  '{/* Arabic */}\n            <div dir="rtl" className="lang-ar bg-[var(--color-brand-navy)]/5 p-6 rounded-2xl border-2 border-[var(--color-brand-navy)]/20 hover:border-[var(--color-brand-gold)] transition-colors shadow-inner">'
);
c = c.replace(
  '{/* Chinese */}\n            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">',
  '{/* Chinese */}\n            <div className="lang-zh bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">'
);

// Intro Divs
c = c.replace(
  '<div>\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">English Intro</label>',
  '<div className="lang-en">\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">English Intro</label>'
);
c = c.replace(
  '<div dir="rtl">\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">Arabic Intro</label>',
  '<div dir="rtl" className="lang-ar">\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2 text-[var(--color-brand-navy)]">Arabic Intro (Main)</label>'
);
c = c.replace(
  '<div>\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">Chinese Intro</label>',
  '<div className="lang-zh">\n              <label className="text-gray-500 font-bold text-xs uppercase tracking-wider block mb-2">Chinese Intro</label>'
);

// Degree Levels Rows
c = c.replace(
  '<div className="space-y-3">\n                    <input placeholder="Level UI (EN)',
  '<div className="space-y-3 lang-en">\n                    <input placeholder="Level UI (EN)'
);
c = c.replace(
  '<div dir="rtl" className="space-y-3">\n                    <input placeholder="Level (AR)',
  '<div dir="rtl" className="space-y-3 lang-ar">\n                    <input placeholder="Level (AR)'
);
c = c.replace(
  '<div className="space-y-3">\n                    <input placeholder="Level (ZH)',
  '<div className="space-y-3 lang-zh">\n                    <input placeholder="Level (ZH)'
);

// Top Universities Rows
c = c.replace(
  '<div className="grid grid-cols-2 md:grid-cols-5 gap-4">',
  '<div className="grid grid-cols-2 md:grid-cols-5 gap-4 tu-grid">'
);
c = c.replace(
  '<div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name EN</label>',
  '<div className="tu-en"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name EN</label>'
);
c = c.replace(
  '<div><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name ZH</label>',
  '<div className="tu-zh"><label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Name ZH</label>'
);
c = c.replace(
  '<div><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount EN</label>',
  '<div className="tu-en"><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount EN</label>'
);
c = c.replace(
  '<div><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount ZH</label>',
  '<div className="tu-zh"><label className="text-[10px] font-bold text-orange-600 uppercase tracking-widest px-1">Discount ZH</label>'
);

fs.writeFileSync('src/app/admin/specializations/[id]/page.tsx', c);

console.log("Specializations Visual Editor layout and AI Translation injected!");
