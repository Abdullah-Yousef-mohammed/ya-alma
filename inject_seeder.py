import json
import re

with open("scraped_lcs.json", "r", encoding="utf-8") as f:
    scraped = json.load(f)

# Map names to their lc_X ID
# e.g., Excel -> lc_0, ELS -> lc_5, ELC -> lc_3, ELEC -> lc_4, EMS -> lc_9
mapping = {
    "Excel": "lc_0",
    "ELS": "lc_5",
    "ELC": "lc_3",
    "ELEC": "lc_4",
    "EMS": "lc_9"
}

generic_en = "A premier language training institution situated in the heart of Kuala Lumpur, dedicated to cross-cultural linguistic excellence and preparing international students for global university success through intensive immersive curriculums."
generic_zh = "一家位于吉隆坡市中心的顶级语言培训机构，致力于跨文化语言卓越，通过沉浸式的密集课程帮助国际学生为全球顶尖大学的学术成功做好充分准备。"

java_inserts = []

for entry in scraped:
    name = entry["name"]
    target_var = None
    for k, v in mapping.items():
        if k in name:
            target_var = v
            break
            
    if target_var:
        # Generate the java setters
        about_ar = entry["aboutAr"].replace('"', '\\"').replace("\n", "\\n")
        hero = entry["heroImage"]
        if hero:
            java_inserts.append(f'                {target_var}.setHeroImage("{hero}");')
            java_inserts.append(f'                {target_var}.setLogoUrl("{hero}");')
        if about_ar:
            java_inserts.append(f'                {target_var}.setAboutAr("{about_ar}");')
            java_inserts.append(f'                {target_var}.setAboutEn("{generic_en}");')
            java_inserts.append(f'                {target_var}.setAboutZh("{generic_zh}");')

            
# Read DatabaseSeeder
seeder_path = "ya-alma-legacy-api/src/main/java/com/yaalma/api/config/DatabaseSeeder.java"
with open(seeder_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to inject right before `languageCenterRepository.save(lc_15);` and the final bracket
# Actually, it's easier to inject right before `LanguageCenter lc_15`
target_anchor = 'LanguageCenter lc_15 = new LanguageCenter(null, "Erican College"'

injection_str = "\n".join(java_inserts) + "\n\n                " + target_anchor
new_content = content.replace(target_anchor, injection_str)

with open(seeder_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Injected language center details successfully!")
