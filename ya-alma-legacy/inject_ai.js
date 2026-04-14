const fs = require('fs');
let c = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

c = c.replace('const [isNew, setIsNew] = useState(false);', 
`const [isNew, setIsNew] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleAITranslate = async () => {
    if (!editing) return;
    setIsTranslating(true);
    try {
      const updates = { ...editing };
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
  };`);

c = c.replace('<Save size={16} /> Save\n            </button>', 
`<Save size={16} /> Save
            </button>
            <button onClick={handleAITranslate} disabled={isTranslating} className="flex items-center gap-2 bg-indigo-100 text-indigo-700 border border-indigo-200 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-200 transition-colors">
               {isTranslating ? "Translating..." : "✨ Auto Translate (AI)"}
            </button>`);

fs.writeFileSync('src/app/admin/page.tsx', c);
