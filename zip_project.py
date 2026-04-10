import os
import zipfile

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        # Exclude heavy/unnecessary directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.git', 'target', 'data', '.mvn']]
        for file in files:
            if file.endswith('.zip') or file == 'update_domain.py' or file == 'zip_project.py' or file.endswith('.webp'):
                continue
            filepath = os.path.join(root, file)
            arcname = os.path.relpath(filepath, path)
            ziph.write(filepath, arcname)

if __name__ == '__main__':
    workspace_path = r"c:\Users\user\.gemini\antigravity\scratch"
    zip_path = os.path.join(workspace_path, "ya-alma-hostinger-upload.zip")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir(workspace_path, zipf)
    print(f"Created ZIP file at: {zip_path}")
