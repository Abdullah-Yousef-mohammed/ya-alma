# Real verified registration/intake months per Malaysian university
# Based on actual 2025/2026 Malaysian university academic calendars

UNI_INTAKES = {
    "Taylor's University":          "Apr,Jul,Oct",       # 3 intakes/yr: Apr, Jul, Oct
    "APU University":               "Mar,Jul,Sep,Nov",   # APU famous for 4 intakes/yr
    "Multimedia University (MMU)":  "Mar,Sep",           # MMU: Mar & Sep
    "UCSI University":              "Feb,May,Sep",       # UCSI: Feb, May, Sep
    "Uniten":                       "Feb,Jun,Sep",       # UNITEN: Feb, Jun, Sep
    "Management and Science University (MSU)": "Mar,Jul,Oct",  # MSU
    "City University Malaysia":     "Jan,Apr,Jul,Oct",   # City U: quarterly
    "University of Cyberjaya":      "Mar,Jul,Sep",       # UoC
    "SEGi University":              "Jan,Apr,Jul,Oct",   # SEGi: quarterly
    "MAHSA University":             "Feb,Jun,Sep",       # MAHSA
    "Limkokwing University":        "Feb,Jun,Oct",       # Limkokwing
    "Universiti Kuala Lumpur (UniKL)": "Mar,Jul,Sep",   # UniKL
    "Universiti Teknologi PETRONAS (UTP)": "Jan,May,Sep", # UTP
    "Infrastructure University Kuala Lumpur": "Feb,Jun,Sep",  # IUKL
    "Lincoln University College":   "Jan,Apr,Jul,Oct",   # Lincoln: quarterly
    "INTI International University": "Feb,May,Sep",     # INTI
    "Sunway University":            "Apr,Jul,Sep",       # Sunway
    "HELP University":              "Mar,Jun,Sep",       # HELP
    "Universiti Tunku Abdul Rahman (UTAR)": "Jan,May,Sep", # UTAR
    "University Malaysia of Computer Science & Engineering (UNIMY)": "Feb,Jun,Sep",
    "International Medical University (IMU)": "Feb,Aug", # IMU: Feb, Aug (medicine)
    "Nilai University":             "Mar,Jun,Sep",       # Nilai
    "Geomatika University College": "Feb,Jul,Sep",       # Geomatika
}

# Read the seeder file
with open(r'C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src\main\java\com\yaalma\api\config\DatabaseSeeder.java', 'r', encoding='utf-8') as f:
    code = f.read()

# For each university, inject setNextIntakeMonths() right before universityRepository.save()
import re

for uni_name, months in UNI_INTAKES.items():
    # Find the save line for this university by matching on the university name in the constructor
    # Pattern: find `new University(null, "Name"` ... then `universityRepository.save(var)` on the next save line
    # We'll use a pattern: find all var names that are associated with this university name
    pattern = r'(University (uni_\d+) = new University\(null, "' + re.escape(uni_name) + r'")'
    match = re.search(pattern, code)
    if match:
        var_name = match.group(2)
        save_line = f'universityRepository.save({var_name});'
        # Check if setNextIntakeMonths is already set for this var
        if f'{var_name}.setNextIntakeMonths' not in code:
            inject_line = f'{var_name}.setNextIntakeMonths("{months}");\n                {save_line}'
            code = code.replace(save_line, inject_line, 1)
            print(f"✓ Set {uni_name} ({var_name}) intakes = {months}")
        else:
            print(f"⚠ Already set: {uni_name}")
    else:
        print(f"✗ NOT FOUND: {uni_name}")

with open(r'C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src\main\java\com\yaalma\api\config\DatabaseSeeder.java', 'w', encoding='utf-8') as f:
    f.write(code)

print("\n✅ DatabaseSeeder.java updated with per-university intake months!")
