import re

path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\admin\specializations\[id]\page.tsx"

with open(path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update parsedData with Zh attributes safely
code = code.replace(
    'careerJobsAr: JSON.parse(spData.careerJobsArJson || "[]"),',
    'careerJobsAr: JSON.parse(spData.careerJobsArJson || "[]"),\n        careerJobsZh: JSON.parse(spData.careerJobsZhJson || "[]"),'
)

# 2. Update handleSave payload
code = code.replace(
    'careerJobsArJson: JSON.stringify(data.careerJobsAr),',
    'careerJobsArJson: JSON.stringify(data.careerJobsAr),\n      careerJobsZhJson: JSON.stringify(data.careerJobsZh),'
)

# 3. HandleUniSelect
code = code.replace(
    'nameAr: uni.nameAr,',
    'nameAr: uni.nameAr,\n      nameZh: uni.nameZh,'
)

# 4. grid md:grid-cols-2 to grid md:grid-cols-3 for Hero
code = code.replace(
    '<div className="grid md:grid-cols-2 gap-8 mt-6">',
    '<div className="grid md:grid-cols-3 gap-6 mt-6">'
).replace(
    '''            <div dir="rtl">
              <label className="text-white font-bold text-sm mb-1 block">Title (Arabic)</label>
              <input value={data.titleAr} onChange={e=>setData({...data, titleAr: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-2xl font-black outline-none focus:bg-white focus:text-gray-900 transition" />
              <label className="text-white font-bold text-sm mt-4 mb-1 block">Tagline (Arabic)</label>
              <textarea value={data.heroTaglineAr} onChange={e=>setData({...data, heroTaglineAr: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-lg font-medium outline-none focus:bg-white focus:text-gray-900 transition" rows={3}></textarea>
            </div>''',
    '''            <div dir="rtl">
              <label className="text-white font-bold text-sm mb-1 block">Title (Arabic)</label>
              <input value={data.titleAr} onChange={e=>setData({...data, titleAr: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-2xl font-black outline-none focus:bg-white focus:text-gray-900 transition" />
              <label className="text-white font-bold text-sm mt-4 mb-1 block">Tagline (Arabic)</label>
              <textarea value={data.heroTaglineAr} onChange={e=>setData({...data, heroTaglineAr: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-lg font-medium outline-none focus:bg-white focus:text-gray-900 transition" rows={3}></textarea>
            </div>
            <div>
              <label className="text-white font-bold text-sm mb-1 block">Title (Chinese)</label>
              <input value={data.titleZh || ""} onChange={e=>setData({...data, titleZh: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-2xl font-black outline-none focus:bg-white focus:text-gray-900 transition" />
              <label className="text-white font-bold text-sm mt-4 mb-1 block">Tagline (Chinese)</label>
              <textarea value={data.heroTaglineZh || ""} onChange={e=>setData({...data, heroTaglineZh: e.target.value})} className="w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-lg font-medium outline-none focus:bg-white focus:text-gray-900 transition" rows={3}></textarea>
            </div>'''
)

# 5. Intro Content
code = code.replace(
    '<div className="grid md:grid-cols-2 gap-8">',
    '<div className="grid md:grid-cols-3 gap-6">'
).replace(
    '''            <div dir="rtl">
              <label className="text-gray-500 font-bold text-xs uppercase block mb-2">Arabic Intro</label>
              <textarea value={data.introAr} onChange={e=>setData({...data, introAr: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm min-h-[150px] outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]" />
            </div>''',
    '''            <div dir="rtl">
              <label className="text-gray-500 font-bold text-xs uppercase block mb-2">Arabic Intro</label>
              <textarea value={data.introAr} onChange={e=>setData({...data, introAr: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm min-h-[150px] outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]" />
            </div>
            <div>
              <label className="text-gray-500 font-bold text-xs uppercase block mb-2">Chinese Intro</label>
              <textarea value={data.introZh || ""} onChange={e=>setData({...data, introZh: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm min-h-[150px] outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]" />
            </div>'''
)

# 6. Degree Levels Arrays
code = code.replace(
    'titleAr: "", feesRangeEn: "RM 0 - RM 0", feesRangeAr: "RM 0 - RM 0", durationEn: "3 Years", durationAr: "3 سنوات" }',
    'titleAr: "", titleZh: "", feesRangeEn: "RM 0 - RM 0", feesRangeAr: "RM 0 - RM 0", feesRangeZh: "RM 0 - RM 0", durationEn: "3 Years", durationAr: "3 سنوات", durationZh: "3年" }'
).replace(
    '<div className="flex-1 grid grid-cols-2 gap-4">',
    '<div className="flex-1 grid grid-cols-3 gap-4">'
).replace(
    '''                  <div dir="rtl">
                    <input placeholder="Level (AR)" value={lvl.titleAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-2 border rounded-md mb-2" />
                    <input placeholder="Fees (AR)" value={lvl.feesRangeAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md text-green-700 font-bold mb-2" />
                    <input placeholder="Duration (AR)" value={lvl.durationAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md" />
                  </div>''',
    '''                  <div dir="rtl">
                    <input placeholder="Level (AR)" value={lvl.titleAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-2 border rounded-md mb-2" />
                    <input placeholder="Fees (AR)" value={lvl.feesRangeAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md text-green-700 font-bold mb-2" />
                    <input placeholder="Duration (AR)" value={lvl.durationAr} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationAr=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md" />
                  </div>
                  <div>
                    <input placeholder="Level (ZH)" value={lvl.titleZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].titleZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm font-bold p-2 border rounded-md mb-2" />
                    <input placeholder="Fees (ZH)" value={lvl.feesRangeZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].feesRangeZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md text-green-700 font-bold mb-2" />
                    <input placeholder="Duration (ZH)" value={lvl.durationZh || ""} onChange={e=>{const arr=[...data.degreeLevels]; arr[i].durationZh=e.target.value; setData({...data, degreeLevels:arr})}} className="w-full text-sm p-2 border rounded-md" />
                  </div>'''
)

# 7. Top Universities
code = code.replace(
    'nameEn: "New", nameAr: "New", href: "#"',
    'nameEn: "New", nameAr: "New", nameZh: "New", href: "#"'
).replace(
    'discountEn: "-", discountAr: "-"}',
    'discountEn: "-", discountAr: "-", discountZh: "-"'
).replace(
    '<div className="grid grid-cols-2 md:grid-cols-4 gap-3">',
    '<div className="grid grid-cols-2 md:grid-cols-5 gap-3">'
).replace(
    '''                  <input placeholder="Name AR" value={uni.nameAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md font-bold text-blue-600 text-right" dir="rtl" />''',
    '''                  <input placeholder="Name AR" value={uni.nameAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md font-bold text-blue-600 text-right" dir="rtl" />
                  <input placeholder="Name ZH" value={uni.nameZh || ""} onChange={e=>{const arr=[...data.topUniversities]; arr[i].nameZh=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md font-bold text-blue-600" />'''
).replace(
    '''                  <input placeholder="Discount AR" value={uni.discountAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md text-orange-600 bg-orange-50 text-right" dir="rtl" />''',
    '''                  <input placeholder="Discount AR" value={uni.discountAr} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountAr=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md text-orange-600 bg-orange-50 text-right" dir="rtl" />
                  <input placeholder="Discount ZH" value={uni.discountZh || ""} onChange={e=>{const arr=[...data.topUniversities]; arr[i].discountZh=e.target.value; setData({...data, topUniversities:arr})}} className="w-full text-sm p-2 border rounded-md text-orange-600 bg-orange-50" />'''
)


with open(path, "w", encoding="utf-8") as f:
    f.write(code)

print("Updated admin visual editor for Zh!")
