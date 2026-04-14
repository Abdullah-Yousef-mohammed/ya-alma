const fs = require('fs');
let c = fs.readFileSync('src/app/admin/specializations/[id]/page.tsx', 'utf8');

const regex = /return\s*\([\s\S]*?\{\/\* ── Sticky Save Header ── \*\/\}/m;

const replacement = `return (
    <div className={\`bg-[#F8FAFC] min-h-screen pb-40 font-sans text-gray-800 \${!showTranslations ? "hide-translations" : ""}\`}>
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
      
      {/* ── Sticky Save Header ── */}`;

c = c.replace(regex, replacement);
fs.writeFileSync('src/app/admin/specializations/[id]/page.tsx', c);
console.log("Fixed syntax error");
