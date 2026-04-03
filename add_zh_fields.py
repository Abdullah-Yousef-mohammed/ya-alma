import re

filepath = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\admin\page.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Interfaces
content = content.replace(
    'name: string; nameAr: string;',
    'name: string; nameAr: string; nameZh: string;'
)
content = content.replace(
    'location: string; locationAr: string;',
    'location: string; locationAr: string; locationZh: string;'
)
content = content.replace(
    'aboutEn: string; aboutAr: string;',
    'aboutEn: string; aboutAr: string; aboutZh: string;'
)
content = content.replace(
    'title: string; titleAr: string;',
    'title: string; titleAr: string; titleZh: string;'
)
content = content.replace(
    'category: string; categoryAr: string;',
    'category: string; categoryAr: string; categoryZh: string;'
)
content = content.replace(
    'excerpt: string; excerptAr: string;',
    'excerpt: string; excerptAr: string; excerptZh: string;'
)
content = content.replace(
    'contentEn: string; contentAr: string;',
    'contentEn: string; contentAr: string; contentZh: string;'
)
content = content.replace(
    'duration: string;',
    'duration: string; durationAr: string; durationZh: string;'
)

# 2. Update emptyRow definitions
content = content.replace(
    'name: "", nameAr: "",',
    'name: "", nameAr: "", nameZh: "",'
)
content = content.replace(
    'location: "", locationAr: "",',
    'location: "", locationAr: "", locationZh: "",'
)
content = content.replace(
    'aboutEn: "", aboutAr: "",',
    'aboutEn: "", aboutAr: "", aboutZh: "",'
)
content = content.replace(
    'title: "", titleAr: "",',
    'title: "", titleAr: "", titleZh: "",'
)
content = content.replace(
    'category: "", categoryAr: "",',
    'category: "", categoryAr: "", categoryZh: "",'
)
content = content.replace(
    'excerpt: "", excerptAr: "",',
    'excerpt: "", excerptAr: "", excerptZh: "",'
)
content = content.replace(
    'contentEn: "", contentAr: "",',
    'contentEn: "", contentAr: "", contentZh: "",'
)
content = content.replace(
    'duration: ""',
    'duration: "", durationAr: "", durationZh: ""'
)

# 3. Add UI Fields for Universities / Language Centers / Courses / Blog

# ExtendedFieldsForm
content = re.sub(
    r'(<TextAreaField label="Scholarship Desc \(AR\)" value=\{item\.scholarshipDescAr\} onChange=\{\(v: string\) => setItem\(\{ \.\.\.item, scholarshipDescAr: v \}\)\} rows=\{2\} />)',
    r'\1\n      <TextAreaField label="Scholarship Desc (ZH)" value={item.scholarshipDescZh} onChange={(v: string) => setItem({ ...item, scholarshipDescZh: v })} rows={2} />',
    content
)
content = re.sub(
    r'(<TextAreaField label="Undergraduate/Bachelor \(AR\)" value=\{item\.admissionUndergradAr\} onChange=\{\(v: string\) => setItem\(\{ \.\.\.item, admissionUndergradAr: v \}\)\} rows=\{3\} />)',
    r'\1\n      <TextAreaField label="Undergraduate/Bachelor (ZH)" value={item.admissionUndergradZh} onChange={(v: string) => setItem({ ...item, admissionUndergradZh: v })} rows={3} />',
    content
)
content = re.sub(
    r'(<TextAreaField label="Postgraduate/Master \(AR\)" value=\{item\.admissionPostgradAr\} onChange=\{\(v: string\) => setItem\(\{ \.\.\.item, admissionPostgradAr: v \}\)\} rows=\{3\} />)',
    r'\1\n      <TextAreaField label="Postgraduate/Master (ZH)" value={item.admissionPostgradZh} onChange={(v: string) => setItem({ ...item, admissionPostgradZh: v })} rows={3} />',
    content
)

# Universities + Language Centers
content = re.sub(
    r'(<FormField label="Name \(Arabic\)" value=\{item\.nameAr\} onChange=\{v => setItem\(\{ \.\.\.item, nameAr: v \}\)\} />)',
    r'\1\n          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />',
    content
)
content = re.sub(
    r'(<FormField label="Location / City \(AR\)" value=\{item\.locationAr\} onChange=\{v => setItem\(\{ \.\.\.item, locationAr: v \}\)\} />)',
    r'\1\n          <FormField label="Location / City (ZH)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />',
    content
)
content = re.sub(
    r'(<FormField label="City \(Arabic\)" value=\{item\.locationAr\} onChange=\{v => setItem\(\{ \.\.\.item, locationAr: v \}\)\} />)',
    r'\1\n          <FormField label="City (Chinese)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />',
    content
)
content = re.sub(
    r'(<TextAreaField label="About \(Arabic\)" value=\{item\.aboutAr\} onChange=\{v => setItem\(\{ \.\.\.item, aboutAr: v \}\)\} rows=\{4\} />)',
    r'\1\n          <TextAreaField label="About (Chinese)" value={item.aboutZh} onChange={v => setItem({ ...item, aboutZh: v })} rows={4} />',
    content
)

# Courses
content = re.sub(
    r'(<FormField label="Title \(Arabic\)" value=\{item\.titleAr\} onChange=\{v => setItem\(\{ \.\.\.item, titleAr: v \}\)\} />)',
    r'\1\n          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />',
    content
)

# Blog
content = re.sub(
    r'(<FormField label="Title \(Arabic\)" value=\{item\.titleAr\} onChange=\{v => setItem\(\{ \.\.\.item, titleAr: v \}\)\} />)',
    r'\1\n          <FormField label="Title (Chinese)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />',
    content
)
content = re.sub(
    r'(<FormField label="Category \(Arabic\)" value=\{item\.categoryAr\} onChange=\{v => setItem\(\{ \.\.\.item, categoryAr: v \}\)\} />)',
    r'\1\n          <FormField label="Category (Chinese)" value={item.categoryZh} onChange={v => setItem({ ...item, categoryZh: v })} />',
    content
)
content = re.sub(
    r'(<TextAreaField label="Excerpt \(Arabic\)" value=\{item\.excerptAr\} onChange=\{v => setItem\(\{ \.\.\.item, excerptAr: v \}\)\} rows=\{2\} />)',
    r'\1\n          <TextAreaField label="Excerpt (Chinese)" value={item.excerptZh} onChange={v => setItem({ ...item, excerptZh: v })} rows={2} />',
    content
)
content = re.sub(
    r'(<TextAreaField label="Content \(Arabic\)" value=\{item\.contentAr\} onChange=\{v => setItem\(\{ \.\.\.item, contentAr: v \}\)\} rows=\{8\} />)',
    r'\1\n          <TextAreaField label="Content (Chinese)" value={item.contentZh} onChange={v => setItem({ ...item, contentZh: v })} rows={8} />',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished adding Chinese language fields.")
