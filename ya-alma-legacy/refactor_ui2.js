const fs = require('fs');

let c = fs.readFileSync('src/app/admin/page.tsx', 'utf8');

// The goal is to add `className="translation-field"` to any <FormField> that is checking for (English), (Chinese), (Malay) or (EN), (ZH), (MS).
// Wait, FormField is defined as: `function FormField({ label, value, onChange, type = "text" }`
// It doesn't accept className! Let's modify `FormField` definition first:
c = c.replace(
  'function FormField({ label, value, onChange, type = "text" }: { label: string; value: any; onChange: (val: any) => void; type?: string }) {',
  'function FormField({ label, value, onChange, type = "text", className = "" }: { label: string; value: any; onChange: (val: any) => void; type?: string; className?: string }) {'
);
c = c.replace(
  '<div className="mb-4">',
  '<div className={`mb-4 ${className}`}>'
);

// Now apply className="translation-field" to ANY FormField where label ends with (EN), (ZH), (MS), (English), (Chinese), (Malay).
c = c.replace(/<FormField label="[^"]*\((?:EN|ZH|MS|English|Chinese|Malay)\)"/gi, (match) => {
  return match + ' className="translation-field"';
});

// Also hide manual specific elements outside FormField:
// E.g. <div dir="rtl"><label ...>Name AR
// We will hide <div ...> if it contains EN, ZH, MS inside UniversitiesManager. Wait, the <FormField> handles UniversitiesManager!
// What about other elements? We can just do a mass replace on `page.tsx` where EN/ZH/MS are labeled.
// Actually, FormField accounts for 90% of the inputs!

fs.writeFileSync('src/app/admin/page.tsx', c);
console.log("FormFields updated to accept classNames and hide translations.");
