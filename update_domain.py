import os

frontend_dir = r"c:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src"
backend_dir = r"c:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src"

def replace_in_files(directory, old_str, new_str):
    updated = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx') or file.endswith('.java'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if old_str in content:
                        content = content.replace(old_str, new_str)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Updated {filepath}")
                        updated += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Finished replacing in {directory}, updated {updated} files.")

replace_in_files(frontend_dir, 'http://localhost:8080', 'https://yaalmalegacy.com')
replace_in_files(backend_dir, 'http://localhost:8080', 'https://yaalmalegacy.com')
