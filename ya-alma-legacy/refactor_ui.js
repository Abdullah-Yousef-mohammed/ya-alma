const fs = require('fs');

let c = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

// 1. Restore handleAITranslate
if (!c.includes('handleAITranslate')) {
  c = c.replace('const [isNew, setIsNew] = useState(false);', 
`const [isNew, setIsNew] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);

  const handleAITranslate = async () => {
    if (!editing) return;
    setIsTranslating(true);
    setShowTranslations(true); // Pop open the fields instantly so user can see the magic!
    try {
      const updates = { ...editing };
      // Gather all 'Ar' keys
      const keys = Object.keys(editing).filter(k => k.endsWith('Ar') && typeof editing[k] === 'string' && editing[k].trim() !== '');
      
      const translateText = async (text, targetLang) => {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang })
        });
        const data = await res.json();
        return data.translatedText || text;
      };

      for (const k of keys) {
        const arText = editing[k];
        const base = k.replace(/Ar$/, '');
        
        const enKey = (base + 'En' in editing) ? base + 'En' : base;
        const zhKey = base + 'Zh';
        const msKey = base + 'Ms';
        
        // Skip translating if already manually entered? No, overwrite to force sync.
        updates[enKey] = await translateText(arText, 'en');
        if (zhKey in editing) updates[zhKey] = await translateText(arText, 'zh-CN');
        if (msKey in editing) updates[msKey] = await translateText(arText, 'ms');
      }
      setEditing(updates);
      // alert('Translation Complete!'); // no annoying alerts
    } catch(e) {
      console.error(e);
      alert('Translation failed');
    }
    setIsTranslating(false);
  };`);

  // 2. Add the UI Header
  const btnReplacement = `
            <div className="flex gap-2">
              <button 
                onClick={() => setShowTranslations(!showTranslations)} 
                className="flex items-center gap-2 bg-gray-100 text-gray-700 border border-gray-200 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                title="Toggle visibility of English, Chinese, and Malay fields"
              >
                {showTranslations ? "Hide Translations" : "Show Translations"}
              </button>
              
              <button 
                onClick={handleAITranslate} 
                disabled={isTranslating} 
                className="flex items-center gap-2 bg-[var(--color-brand-gold)] text-white shadow-lg shadow-[var(--color-brand-gold)]/20 px-6 py-2.5 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all"
              >
                {isTranslating ? "✨ Translating..." : "✨ AI Translate from Arabic"}
              </button>
              
              <button onClick={handleSave} className="flex items-center gap-2 bg-[var(--color-brand-navy)] test-white text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#131d36] transition-colors ml-4">
                <Save size={16} /> Save
              </button>
            </div>
`;
  // Using regex or exact match to replace the Save button
  c = c.replace(/<button onClick=\{handleSave\}[\s\S]*?<\/button>/, btnReplacement);
}

// 3. Inject CSS Wrapper to toggle fields based on showTranslations!
// We can pass `showTranslations` to `renderForm`
c = c.replace(
  'renderForm: (item: T, setItem: (item: T) => void) => React.ReactNode;',
  'renderForm: (item: T, setItem: (item: T) => void, showTranslations?: boolean) => React.ReactNode;'
);
c = c.replace(
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2">',
  '<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2 ${!showTranslations ? "hide-translation-fields" : ""}`}>'
);
c = c.replace(
  '{renderForm(editing, setEditing)}',
  '{renderForm(editing, setEditing, showTranslations)}'
);

// 4. Update the global CSS inside the file to hide En/Zh/Ms labels when hide-translation-fields is active.
// Wait, the easiest way is to add a style block at the top of CrudTable!
const styleBlock = `
    <style>
      {\`
        .hide-translation-fields .translation-field {
          display: none !important;
        }
      \`}
    </style>
`;
if(!c.includes('.hide-translation-fields')) {
    c = c.replace('<div className="fixed inset-0 bg-black/60', styleBlock + '\n      <div className="fixed inset-0 bg-black/60');
}

fs.writeFileSync('src/app/admin/page.tsx', c);

console.log("CrudTable layout and AI Translation restored!");
