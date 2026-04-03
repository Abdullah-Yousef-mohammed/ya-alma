import re

path = r'C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src\main\java\com\yaalma\api\config\DatabaseSeeder.java'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Fix Program prices
    if 'new Program(' in line:
        line = re.sub(r',\s*(\d+),\s*([a-zA-Z0-9_]+)\)\);', lambda m: f", {int(int(m.group(1))*4.5)}, {m.group(2)}));", line)
    
    # Fix set...FeeMyr prices
    if 'FeeMyr(' in line:
        def convert_set_fee(match):
            method = match.group(1)
            val = int(match.group(2))
            
            # Skip the ones we already converted earlier
            if val in [6287, 2966, 2997, 2300]:
                return match.group(0)
                
            new_val = int(val * 4.5)
            # Add a comment to explicitly show it was converted so people know
            return f"{method}({new_val}) /* Converted from USD */"
            
        line = re.sub(r'(set[a-zA-Z]+FeeMyr)\((\d+)\)', convert_set_fee, line)

    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Succesfully updated all prices to MYR.")
