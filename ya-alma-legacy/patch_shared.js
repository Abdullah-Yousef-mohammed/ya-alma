const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'app', 'admin', 'components', 'shared.tsx');
let content = fs.readFileSync(file, 'utf8');

// Fix 1: handleSave ID overwrite
const saveMatch = `  const handleSave = () => {
    if (!editing) return;
    const method = isNew ? "POST" : "PUT";
    const url = isNew ? \`\${API}\${apiPath}\` : \`\${API}\${apiPath}/\${(editing as any).id}\`;
    authFetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    }).then(() => {
      setEditing(null);
      setIsNew(false);
      fetchItems();
    });
  };`;

const saveReplace = `  const handleSave = () => {
    if (!editing) return;
    const method = isNew ? "POST" : "PUT";
    const url = isNew ? \`\${API}\${apiPath}\` : \`\${API}\${apiPath}/\${(editing as any).id}\`;
    const payload = { ...editing } as any;
    if (isNew) delete payload.id;
    authFetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      setEditing(null);
      setIsNew(false);
      fetchItems();
    });
  };`;

content = content.replace(saveMatch.replace(/\r\n/g, '\n'), saveReplace.replace(/\r\n/g, '\n'));
content = content.replace(saveMatch, saveReplace);


// Fix 2: AI Translate Logic
const translateMatch = `  const handleAITranslate = async () => {
    if (!editing) return;
    setIsTranslating(true);
    try {
      const updates: any = { ...editing };
      const keys = Object.keys(editing).filter(k => k.endsWith('Ar') && typeof (editing as any)[k] === 'string' && (editing as any)[k].trim() !== '');
      
      const translateText = async (text: string, targetLang: string) => {
        const res = await authFetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang })
        });
        const data = await res.json();
        return data.translatedText || text;
      };

      for (const k of keys) {
        const arText = (editing as any)[k];
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
  };`;

const translateReplace = `  const handleAITranslate = async () => {
    if (!editing) return;
    setIsTranslating(true);
    try {
      const updates: any = { ...editing };
      
      const translateText = async (text: string, targetLang: string) => {
        const res = await authFetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang })
        });
        const data = await res.json();
        return data.translatedText || text;
      };

      const keysWithAr = Object.keys(updates).filter(k => k.endsWith('Ar'));
      for (const arKey of keysWithAr) {
        const base = arKey.replace(/Ar$/, '');
        const enKey = (base + 'En' in updates) ? base + 'En' : base;
        const zhKey = base + 'Zh';
        const msKey = base + 'Ms';

        const enText = updates[enKey];
        const arText = updates[arKey];

        let sourceText = '';
        if (typeof arText === 'string' && arText.trim() !== '') {
          sourceText = arText;
        } else if (typeof enText === 'string' && enText.trim() !== '') {
          sourceText = enText;
        }

        if (sourceText) {
          if (enKey !== base && typeof updates[enKey] === 'string' && updates[enKey].trim() === '') updates[enKey] = await translateText(sourceText, 'en');
          if (typeof updates[arKey] === 'string' && updates[arKey].trim() === '') updates[arKey] = await translateText(sourceText, 'ar');
          if (zhKey in updates && typeof updates[zhKey] === 'string' && updates[zhKey].trim() === '') updates[zhKey] = await translateText(sourceText, 'zh-CN');
          if (msKey in updates && typeof updates[msKey] === 'string' && updates[msKey].trim() === '') updates[msKey] = await translateText(sourceText, 'ms');
        }
      }
      setEditing(updates);
      alert('Translation Complete! (Click Save to commit)');
    } catch(e) {
      console.error(e);
      alert('Translation failed');
    }
    setIsTranslating(false);
  };`;

content = content.replace(translateMatch.replace(/\r\n/g, '\n'), translateReplace.replace(/\r\n/g, '\n'));
content = content.replace(translateMatch, translateReplace);

fs.writeFileSync(file, content, 'utf8');
console.log("Done patching shared.tsx");
