const fs = require('fs');

let c = fs.readFileSync('src/app/admin/specializations/[id]/page.tsx', 'utf8');

const translateLogic = `
  const [isTranslating, setIsTranslating] = useState(false);

  const translateDeepData = async (obj, targetLang) => {
    if (!obj) return obj;
    if (typeof obj === 'string') {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: obj, targetLang })
      });
      const data = await res.json();
      return data.translatedText || obj;
    }
    if (Array.isArray(obj)) {
      return Promise.all(obj.map(item => translateDeepData(item, targetLang)));
    }
    if (typeof obj === 'object') {
      const newObj = { ...obj };
      for (const [k, v] of Object.entries(obj)) {
        if (k.endsWith('Ar') && typeof v === 'string' && v.trim() !== '') {
          const base = k.replace(/Ar$/, '');
          const enKey = (base + 'En' in obj) ? base + 'En' : base;
          const zhKey = base + 'Zh';
          const msKey = base + 'Ms';
          newObj[enKey] = await translateDeepData(v, 'en');
          if (zhKey in obj) newObj[zhKey] = await translateDeepData(v, 'zh-CN');
          if (msKey in obj) newObj[msKey] = await translateDeepData(v, 'ms');
        } else if (Array.isArray(v) || typeof v === 'object') {
          newObj[k] = await translateDeepData(v, targetLang);
        }
      }
      return newObj;
    }
    return obj;
  };

  const handleAITranslate = async () => {
    setIsTranslating(true);
    try {
      const newData = await translateDeepData(data, null);
      setData(newData);
      alert('Visual Setup Translated Successfully! Click Update to save modifications.');
    } catch(e) {
      console.error(e);
      alert('Translation failed.');
    }
    setIsTranslating(false);
  };

  const handleSave = async () => {`;

c = c.replace('  const handleSave = async () => {', translateLogic);

const buttonUI = `
        <div className="flex items-center gap-3">
          <button 
            onClick={handleAITranslate} 
            disabled={isTranslating}
            className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-indigo-200 hover:-translate-y-0.5 transition-all"
          >
            {isTranslating ? "Translating..." : "✨ AI Translate Deep"}
          </button>
          <button 
            onClick={handleSave} `;

c = c.replace('        <div className="flex items-center gap-3">\n          <button \n            onClick={handleSave} ', buttonUI);

fs.writeFileSync('src/app/admin/specializations/[id]/page.tsx', c);
