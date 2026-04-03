import os

path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\courses\page.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Interface renames
c = c.replace("title: string;", "titleEn: string;")
c = c.replace("field: string;", "facultyEn: string;")
c = c.replace("fieldAr: string;", "facultyAr: string;")
c = c.replace("fieldZh: string;", "facultyZh: string;")

# State and logic variables renaming (for consistency, though JS doesn't strictly care about state names, it cares about property access)
c = c.replace("c.title.toLowerCase()", "c.titleEn.toLowerCase()")
c = c.replace("c.field === filterField", "c.facultyEn === filterField")
c = c.replace("c.field).filter", "c.facultyEn).filter")

# Render mappings
c = c.replace("course.field, course.fieldAr || course.field", "course.facultyEn, course.facultyAr, course.facultyZh || course.facultyEn")
c = c.replace("course.title, course.titleAr", "course.titleEn, course.titleAr, course.titleZh || course.titleEn")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print("Course page properties patched!")
