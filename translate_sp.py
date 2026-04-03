import re

file_path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\specializations\[slug]\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add str helper to SpecializationContent
if "const str = " not in content:
    content = content.replace(
        "function SpecializationContent({ data, language, isRtl, t, formatRange }",
        "function SpecializationContent({ data, language, isRtl, isZh, t, formatRange }"
    )
    content = content.replace(
        "return <SpecializationContent data={data} language={language} isRtl={isRtl} t={t} formatRange={formatRange} />;",
        "const isZh = language === \"zh\";\n  return <SpecializationContent data={data} language={language} isRtl={isRtl} isZh={isZh} t={t} formatRange={formatRange} />;"
    )
    content = content.replace(
        "return (\n    <div className=\"min-h-screen",
        "const str = (en: any, ar: any, zh?: any) => {\n    if (isZh && zh) return zh;\n    if (isRtl && ar) return ar;\n    return en;\n  };\n\n  return (\n    <div className=\"min-h-screen"
    )
    content = content.replace(
        "{ data, language, isRtl, t, formatRange }: { data: SpecializationData; language: string; isRtl: boolean; t: any; formatRange: (text: string) => string }",
        "{ data, language, isRtl, isZh, t, formatRange }: { data: any; language: string; isRtl: boolean; isZh: boolean; t: any; formatRange: (text: string) => string }"
    )

    # 1. Replace `{isRtl ? obj.propAr : obj.propEn}` -> `{str(obj.propEn, obj.propAr, obj.propZh)}`
    # We match: isRtl \? ([A-Za-z0-9_\.]+)Ar : \1En
    # Wait, sometimes it's `isRtl ? data.titleAr : data.titleEn`
    content = re.sub(
        r"isRtl\s*\?\s*([a-zA-Z0-9_\.]+?)Ar\s*:\s*(\1)En",
        r"str(\1En, \1Ar, \1Zh)",
        content
    )
    
    # Also handle the inverted case if it exists, but typically I wrote AR : EN.
    # What about formatRange? `{isRtl ? formatRange(deg.feesRangeAr) : formatRange(deg.feesRangeEn)}`
    content = re.sub(
        r"isRtl\s*\?\s*formatRange\(([a-zA-Z0-9_\.]+?)Ar\)\s*:\s*formatRange\(\1En\)",
        r"str(formatRange(\1En), formatRange(\1Ar), formatRange(\1Zh))",
        content
    )
    
    # Hardcoded strings like:
    content = content.replace(
        '{isRtl ? "الدرجة العلمية" : "Degree"}',
        '{str("Degree", "الدرجة العلمية", "学位")}'
    ).replace(
        '{isRtl ? "الرسوم الدراسية السنوية" : "Annual Tuition Fees"}',
        '{str("Annual Tuition Fees", "الرسوم الدراسية السنوية", "年度学费")}'
    ).replace(
        '{isRtl ? "المدة الدراسية" : "Duration"}',
        '{str("Duration", "المدة الدراسية", "学制")}'
    ).replace(
        '{isRtl ? "الجامعة" : "University"}',
        '{str("University", "الجامعة", "大学")}'
    ).replace(
        '{isRtl ? "التصنيف العالمي" : "World Ranking"}',
        '{str("World Ranking", "التصنيف العالمي", "世界排名")}'
    ).replace(
        '{isRtl ? "التصنيف في التخصص" : "Field Ranking"}',
        '{str("Field Ranking", "التصنيف في التخصص", "专业排名")}'
    ).replace(
        '{isRtl ? "الرسوم الدراسية السنوية" : "Annual Fees"}',
        '{str("Annual Fees", "الرسوم الدراسية السنوية", "年度学费")}'
    ).replace(
        '{isRtl ? "الخصم المتوفر" : "Discount"}',
        '{str("Discount", "الخصم المتوفر", "可用折扣")}'
    ).replace(
        '{isRtl ? "الرسوم" : "Tuition Fee"}',
        '{str("Tuition Fee", "الرسوم", "学费")}'
    ).replace(
        '{isRtl ? "تكلفة المعيشة" : "Living Cost"}',
        '{str("Living Cost", "تكلفة المعيشة", "生活费")}'
    )

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replaced successfully!")
