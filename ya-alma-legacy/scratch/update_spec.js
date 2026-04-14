const fs = require('fs');

let code = fs.readFileSync('src/app/specializations/[slug]/page.tsx', 'utf8');

// 1. Add isMs variable
code = code.replace(
  /const isZh = language === "zh";/,
  \`const isZh = language === "zh";
  const isMs = language === "ms";\`
);

// 2. Update props 
code = code.replace(
  /isZh={isZh} /,
  \`isZh={isZh} isMs={isMs} \`
);

code = code.replace(
  /isZh: boolean;/,
  \`isZh: boolean; isMs: boolean;\`
);

// 3. Update str
code = code.replace(
  /const str = <T,>\(en: T, ar: T, zh\?: T\): T => \{[\\s\\S]*?return en;\\s*\};/,
  \`const str = <T,>(en: T, ar: T, zh?: T, ms?: T): T => {
    if (isZh && zh !== undefined) return zh;
    if (isMs && ms !== undefined) return ms;
    if (isRtl && ar !== undefined) return ar;
    return en;
  };\`
);

// 4. Update data fields 
code = code.replace(/str\\(data\\.(\\w+En),\\s*data\\.(\\w+Ar),\\s*data\\.(\\w+Zh)\\)/g, (match, en, ar, zh) => {
  return \`str(data.\${en}, data.\${ar}, data.\${zh}, data.\${zh.replace('Zh', 'Ms')})\`;
});

// Update arrays logic fields like yr.yearEn, uni.nameEn
code = code.replace(/str\\((\\w+)\\.(\\w+En),\\s*(\\w+)\\.(\\w+Ar),\\s*(\\w+)\\.(\\w+Zh)\\)/g, (match, o1, f1, o2, f2, o3, f3) => {
  return \`str(\${o1}.\${f1}, \${o2}.\${f2}, \${o3}.\${f3}, \${o1}.\${f1.replace('En', 'Ms')})\`;
});

// 5. Update static UI translations
const msTranslations = {
  "Chat with an Academic Consultant": "Biasa dengan Perunding Akademik",
  "Degree": "Ijazah",
  "Annual Tuition Fees": "Yuran Pengajian Tahunan",
  "Duration": "Tempoh Pengajian",
  "* Fees are calculated in USD": "* Yuran dikira dalam USD dan mungkin berubah mengikut kadar pertukaran.",
  "University": "Universiti",
  "World Ranking": "Kedudukan Dunia",
  "Field Ranking": "Kedudukan Bidang",
  "Annual Fees": "Yuran Tahunan",
  "Discount": "Diskaun",
  "Annual Fees (USD)": "Yuran Tahunan (USD)",
  "Guidance to choose the right university": "Bimbingan memilih universiti yang tepat",
  "Admission & application support": "Sokongan kemasukan & permohonan",
  "University accommodation assistance": "Bantuan penginapan universiti",
  "Airport reception & arrival support": "Sambutan di lapangan terbang & sokongan ketibaan",
  "Register via YourUni": "Daftar melalui YourUni — Ejen Rasmi",
  "Year": "Tahun",
  "Subjects": "Mata Pelajaran",
  "View University": "Lihat Universiti",
  "Destination": "Destinasi",
  "Annual Fees": "Yuran Tahunan",
  "Living Cost/Year": "Kos Sara Hidup / Tahun",
  "Browse Universities": "Layari Universiti",
  "Chat on WhatsApp": "Sembang di WhatsApp"
};

code = code.replace(/str\\("([^"]+)",\\s*"([^"]+)",\\s*"([^"]+)"\\)/g, (match, en, ar, zh) => {
  let ms = msTranslations[en];
  if (!ms) {
    if (en.includes('Degree Levels in')) ms = 'Tahap Ijazah bagi ' + en.replace('Degree Levels in', '').trim();
    else if (en.includes('Best Universities for')) ms = 'Universiti Terbaik bagi ' + en.replace('Best Universities for', '').replace('in Malaysia', '').trim();
    else ms = en; // Fallback
  }
  return \`str("\${en}", "\${ar}", "\${zh}", "\${ms}")\`;
});

// Fix complex str()
code = code.replace(
  /str\\(\`Degree Levels in \\\\?\\$\\{data\\.titleEn[^}]*\\}\`,[\\s\\S]*?学及课程\`\\)/,
  \`str(\\\`Degree Levels in \\\${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")}\\\`, \\\`الدرجات العلمية في \\\${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")}\\\`, \\\`马来西亚 \\\${data.titleZh} 学位及课程\\\`, \\\`Tahap Ijazah bagi \\\${data.titleMs ? data.titleMs.replace("Pengajian ", "").replace(" di Malaysia", "") : ""}\\\`)\`
);

code = code.replace(
  /str\\(\`Best Universities for \\\\?\\$\\{data\\.titleEn[^}]*\\}\`,[\\s\\S]*?大学\`\\)/,
  \`str(\\\`Best Universities for \\\${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")} in Malaysia\\\`, \\\`أفضل الجامعات لدراسة \\\${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")} في ماليزيا\\\`, \\\`马来西亚顶尖 \\\${data.titleZh} 大学\\\`, \\\`Universiti Terbaik untuk \\\${data.titleMs ? data.titleMs.replace("Pengajian ", "").replace(" di Malaysia", "") : ""} di Malaysia\\\`)\`
);

code = code.replace(
  /str\\(\`Interested in Studying \\\\?\\$\\{data\\.titleEn[^}]*\\}\`,[\\s\\S]*?吗？\`\\)/,
  \`str(\\\`Interested in Studying \\\${data.titleEn.replace("Study ", "").replace(" in Malaysia", "")} in Malaysia?\\\`, \\\`مهتم بدراسة \\\${data.titleAr.replace("دراسة ", "").replace(" في ماليزيا", "")} في ماليزيا؟\\\`, \\\`有兴趣在马来西亚学习 \\\${data.titleZh} 吗？\\\`, \\\`Berminat Mengkaji \\\${data.titleMs ? data.titleMs.replace("Pengajian ", "").replace(" di Malaysia", "") : ""} di Malaysia?\\\`)\`
);

fs.writeFileSync('src/app/specializations/[slug]/page.tsx.tmp', code);
console.log("Done");
