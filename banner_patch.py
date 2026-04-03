import os

def rewrite_banner(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add explicitDeadline to props
    old_props = "intakes: string[], universityName: string, universityNameAr: string, universityNameZh: string"
    new_props = "intakes: string[], universityName: string, universityNameAr: string, universityNameZh: string, explicitDeadline?: string"
    if "explicitDeadline?: string" not in content:
        content = content.replace(old_props, new_props)

    old_destruct = "const CountdownBanner = ({ intakes, universityName, universityNameAr, universityNameZh }:"
    new_destruct = "const CountdownBanner = ({ intakes, universityName, universityNameAr, universityNameZh, explicitDeadline }:"
    if explicitDeadline not in old_destruct (wait, I will use regular replace):
    pass # I'll do this carefully.

    return content

# Actually it's easier to just use `multi_replace_file_content` directly if it's small, 
# or rewrite the whole component if it's 80 lines.
