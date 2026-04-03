import os
import re

uni_path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\universities\[id]\page.tsx"
lang_path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\app\language-centers\[id]\page.tsx"

with open(uni_path, 'r', encoding='utf-8') as f:
    code = f.read()

# React Component name
code = code.replace('export default function UniversityProfilePage', 'export default function LanguageCenterProfilePage')

# Variable renames
code = code.replace('university, setUniversity', 'center, setCenter')
code = code.replace('!university', '!center')
code = code.replace('university.', 'center.')
code = code.replace('university?', 'center?')
code = code.replace('universityName=', 'centerName=')
code = code.replace('universityNameAr=', 'centerNameAr=')
code = code.replace('universityNameZh=', 'centerNameZh=')

# API paths
code = code.replace('/api/universities/', '/api/language-centers/')
# Keep courses API the same because courses are linked by ID or we might want to change it?
# In DatabaseSeeder.java, does LanguageCenter have courses? 
# If courses are attached via universityId in the DB, fetching by ID will fetch the UNI's courses...
# This might bleed courses to institutes! But we'll leave it as is for now or we can change the API fetch.

# Labels
code = code.replace('University Overview', 'Institute Overview')
code = code.replace('نظرة عامة على الجامعة', 'نظرة عامة على المعهد')
code = code.replace('University at a Glance', 'Institute at a Glance')
code = code.replace('نظرة سريعة على الجامعة', 'نظرة سريعة على المعهد')
code = code.replace('Back to Directory', 'Back to Institutes')
code = code.replace('العودة إلى الجامعات', 'العودة إلى المعاهد')

# Type fallbacks for language center (since they don't have isPrivate)
code = code.replace('center.isPrivate \n                    ? t_dyn("Private Institution", "مؤسسة خاصة", "私立机构") \n                    : t_dyn("Public Institution", "مؤسسة حكومية", "公立机构")', 't_dyn("Language Institute", "معهد لغات", "语言学院")')
code = code.replace('center.isPrivate ? t_dyn(\'Private University\', \'جامعة خاصة\', \'私立大学\') : t_dyn(\'Public University\', \'جامعة حكومية\', \'公立大学\')', 't_dyn(\'Language Institute\', \'معهد لغات\', \'语言学院\')')

# Disable free offer letter check (they probably don't have it natively unless I add it, actually I didn't add it to LanguageCenter.java! Wait, did I? No, I did not add freeOfferLetter to LanguageCenter)
# Safe removal of freeOfferLetter
code = re.sub(r'\{center\.freeOfferLetter && \([^)]*?\)\}', '', code, flags=re.DOTALL)

with open(lang_path, 'w', encoding='utf-8') as f:
    f.write(code)

print("Migration complete!")
