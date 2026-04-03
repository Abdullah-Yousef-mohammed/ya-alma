import sys

def run():
    with open('C:/Users/user/.gemini/antigravity/scratch/ya-alma-legacy/src/data/specializations.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    with open('C:/Users/user/.gemini/antigravity/scratch/engineering_specializations.txt', 'r', encoding='utf-8') as f:
        new_content = f.read()

    # The file ends with:
    #     searchQuery: "Information Technology"
    #   }
    # };
    # We will replace `  }\n};` with `  },\n` + new_content + `\n};\n`

    if "  }\n};" in content:
        content = content.replace("  }\n};", "  },\n" + new_content + "\n};\n")
    elif "  }\n};\n" in content:
        content = content.replace("  }\n};\n", "  },\n" + new_content + "\n};\n")
    else:
        # Fallback if line endings are different (CRLF)
        content = content.replace("  }\r\n};", "  },\n" + new_content + "\n};\n")
        content = content.replace("  }\r\n};\r\n", "  },\n" + new_content + "\n};\n")

    with open('C:/Users/user/.gemini/antigravity/scratch/ya-alma-legacy/src/data/specializations.ts', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Injected successfully!")

if __name__ == '__main__':
    run()
