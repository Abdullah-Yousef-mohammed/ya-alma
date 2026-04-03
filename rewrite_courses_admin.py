import re

path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\admin\page.tsx"
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Replace Interface Course
new_interface = """interface Course { id: number; titleEn: string; titleAr: string; titleZh: string; facultyEn: string; facultyAr: string; facultyZh: string; level: string; levelAr: string; levelZh: string; universityId: number; universityName: string; universityNameAr: string; universityNameZh: string; feeMyr: number; duration: string; durationAr: string; durationZh: string; intakes: string; intakesAr: string; intakesZh: string; }"""
text = re.sub(r'interface Course \{.*?\}', new_interface, text, count=1, flags=re.DOTALL)

# 2. Replace CoursesManager function
new_manager = """function CoursesManager() {
  return (
    <CrudTable<Course>
      title="Master Programs & Courses"
      apiEndpoint={`${API}/courses`}
      columns={[
        { key: "titleEn", label: "Program Name" },
        { key: "facultyEn", label: "Faculty / Category" },
        { key: "level", label: "Level", render: (c) => <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">{c.level}</span> },
        { key: "universityName", label: "University" },
        { key: "feeMyr", label: "Fee (MYR)", render: (c) => `RM ${c.feeMyr}` },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", facultyEn: "", facultyAr: "", facultyZh: "", level: "Bachelor", levelAr: "بكالوريوس", levelZh: "本科", universityId: 0, universityName: "", universityNameAr: "", universityNameZh: "", feeMyr: 0, duration: "3 Years", durationAr: "3 سنوات", durationZh: "3年", intakes: "Jan, May, Sep", intakesAr: "", intakesZh: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />

          <FormField label="Faculty / Category (EN)" value={item.facultyEn} onChange={v => setItem({ ...item, facultyEn: v })} />
          <FormField label="Faculty / Category (AR)" value={item.facultyAr} onChange={v => setItem({ ...item, facultyAr: v })} />
          <FormField label="Faculty / Category (ZH)" value={item.facultyZh} onChange={v => setItem({ ...item, facultyZh: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Degree Level (EN)" value={item.level} onChange={v => setItem({ ...item, level: v })} />
          <FormField label="Degree Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Degree Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />

          <FormField label="Duration (EN)" value={item.duration} onChange={v => setItem({ ...item, duration: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR / Year)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intakes (EN)" value={item.intakes} onChange={v => setItem({ ...item, intakes: v })} />
          <FormField label="Intakes (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          
          <SectionDivider label="University Binding" />
          <FormField label="Assigned University ID" value={String(item.universityId || 0)} onChange={v => setItem({ ...item, universityId: parseInt(v) || 0 })} />
          <FormField label="Assigned University Name" value={item.universityName} onChange={v => setItem({ ...item, universityName: v })} />
        </>
      )}
    />
  );
}"""

text = re.sub(r'function CoursesManager\(\) \{.*?(?=// ─── Blog Posts Manager ─────────────────────────────)', new_manager + '\n\n', text, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated admin form mapping!")
