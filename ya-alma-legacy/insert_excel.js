const data = [
  { p: '1 Month', pA: 'شهر واحد', pZ: '1个月', f: 2000 },
  { p: '2 Months', pA: 'شهران', pZ: '2个月', f: 3400 },
  { p: '3 Months', pA: '3 أشهر', pZ: '3个月', f: 4900 },
  { p: '4 Months', pA: '4 أشهر', pZ: '4个月', f: 9150 },
  { p: '5 Months', pA: '5 أشهر', pZ: '5个月', f: 10550 },
  { p: '6 Months', pA: '6 أشهر', pZ: '6个月', f: 11950 },
  { p: '7 Months', pA: '7 أشهر', pZ: '7个月', f: 13350 },
  { p: '8 Months', pA: '8 أشهر', pZ: '8个月', f: 14750 },
  { p: '9 Months', pA: '9 أشهر', pZ: '9个月', f: 16150 },
  { p: '10 Months', pA: '10 أشهر', pZ: '10个月', f: 17550 },
  { p: '11 Months', pA: '11 شهر', pZ: '11个月', f: 18950 },
  { p: '12 Months', pA: '12 شهر', pZ: '12个月', f: 20350 },
];

const intakes = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";
const intakesAr = "يناير، فبراير، مارس، أبريل، مايو، يونيو، يوليو، أغسطس، سبتمبر، أكتوبر، نوفمبر، ديسمبر";

async function run() {
  for (const item of data) {
    const payload = {
      titleEn: `General English - ${item.p}`,
      titleAr: `لغة إنجليزية عامة - ${item.pA}`,
      titleZh: `通用英语 - ${item.pZ}`,
      titleMs: `Bahasa Inggeris Umum - ${item.p}`,
      durationEn: item.p,
      durationAr: item.pA,
      durationZh: item.pZ,
      durationMs: item.p,
      levelEn: "All Levels",
      levelAr: "جميع المستويات",
      levelZh: "所有级别",
      levelMs: "Semua Tahap",
      intakesEn: intakes,
      intakesAr: intakesAr,
      intakesZh: intakes,
      intakesMs: intakes,
      feeMyr: item.f,
      languageCenterId: 1 // Excel ID
    };
    
    await fetch('http://localhost:8080/api/language-programs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log(`Inserted ${item.p}`);
  }
}
run();
