import json

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Interfaces
    content = content.replace("nextIntakeMonths: string; }", "nextIntakeMonths: string; registrationDeadline?: string; }")
    
    # 2. emptyRows
    content = content.replace('nextIntakeMonths: "" }', 'nextIntakeMonths: "", registrationDeadline: "" }')

    # 3. Add to FormFields
    # I need to find the <FormField label="Next Intake Months"...> and add registrationDeadline next to it.
    old_field = '<FormField label="Next Intake Months (e.g. Apr,Jul,Oct)" value={item.nextIntakeMonths || ""} onChange={v => setItem({ ...item, nextIntakeMonths: v })} />'
    new_field = '<FormField label="Next Intake Months (e.g. Apr,Jul,Oct)" value={item.nextIntakeMonths || ""} onChange={v => setItem({ ...item, nextIntakeMonths: v })} />\n          <FormField label="Registration Deadline (Optional, YYYY-MM-DD)" value={item.registrationDeadline || ""} onChange={v => setItem({ ...item, registrationDeadline: v })} />'
    
    content = content.replace(old_field, new_field)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Patched {filepath}")

patch_file("C:/Users/user/.gemini/antigravity/scratch/ya-alma-legacy/src/app/admin/page.tsx")
patch_file("C:/Users/user/.gemini/antigravity/scratch/ya-alma-legacy/src/components/sections/Universities.tsx")
patch_file("C:/Users/user/.gemini/antigravity/scratch/ya-alma-legacy/src/app/universities/page.tsx")
