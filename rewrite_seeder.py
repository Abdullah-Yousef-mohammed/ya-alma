import sys

path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src\main\java\com\yaalma\api\config\DatabaseSeeder.java"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Remove references to Faculty & Program imports
text = text.replace("import com.yaalma.api.models.Faculty;\n", "")
text = text.replace("import com.yaalma.api.models.Program;\n", "")

# 2. Find the Faculty and Program injection blocks for uni_1 and uni_2 and remove them completely.
# Since python regex is tricky over large files, let's use carefully targeted slice or replace.
# Looking at previously viewed DatabaseSeeder snippet, we know Faculty f_taylor_business = new Faculty...
import re
text = re.sub(r'Faculty f_.*?;', '', text, flags=re.DOTALL)
text = re.sub(r'f_[a-z_]+\.getPrograms\(\)\.add\(new Program\(.*?\)\);', '', text, flags=re.DOTALL)
text = re.sub(r'uni_\d+\.getFaculties\(\)\.add\(f_.*?\);', '', text, flags=re.DOTALL)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)
print("Seeder cleaned!")
