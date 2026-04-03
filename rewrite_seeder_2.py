import re
import sys

path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy-api\src\main\java\com\yaalma\api\config\DatabaseSeeder.java"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Remove the compilation failure logic
text = re.sub(r'if \(\s*courseRepository\.count\(\) == 0\s*\)\s*\{.*?\}(?=\s*System\.out\.println)', '', text, flags=re.DOTALL)

# Inject the new unified Courses seeding block before the completed line
new_block = """
            if (courseRepository.count() == 0) {
                List<University> unis = universityRepository.findAll();
                System.out.println("Seeding Unified Courses Platform...");
                for (University u : unis) {
                    if (u.getName().contains("Taylor's")) {
                        // Taylor's specific high fidelity data
                        courseRepository.save(new Course(null, "Foundation in Science", "تأسيسي في العلوم", "理科预科", 
                            "Foundation & Diploma", "السنة التحضيرية والدبلوم", "预科与文凭", 
                            "Foundation", "تأسيسي", "预科", "1 Year", "سنة واحدة", "1年", 
                            "March, August", 27880, u.getId(), u.getName()));
                        courseRepository.save(new Course(null, "Bachelor of Medicine, Bachelor of Surgery (MBBS)", "بكالوريوس الطب والجراحة", "医学学士，外科学士", 
                            "Medicine & Biosciences", "الطب والعلوم البيولوجية", "医学与生物科学", 
                            "Bachelor", "بكالوريوس", "本科", "5 Years", "5 سنوات", "5年", 
                            "February, September", 82000, u.getId(), u.getName()));
                        courseRepository.save(new Course(null, "Bachelor of Business (Hons)", "بكالوريوس الأعمال (مع مرتبة الشرف)", "商业学士 （荣誉）", 
                            "Business & Law", "الأعمال والقانون", "商业与法律", 
                            "Bachelor", "بكالوريوس", "本科", "3 Years", "3 سنوات", "3年", 
                            "March, August", 42000, u.getId(), u.getName()));
                    } else if (u.getName().contains("Multimedia")) {
                        // MMU data
                        courseRepository.save(new Course(null, "Foundation in Science & Technology", "تأسيسي في العلوم والتكنولوجيا", "科学与技术预科", 
                            "Foundation & Diploma", "السنة التحضيرية والدبلوم", "预科与文凭", 
                            "Foundation", "تأسيسي", "预科", "1 Year", "سنة واحدة", "1年", 
                            "March, July", 11997, u.getId(), u.getName()));
                        courseRepository.save(new Course(null, "BEng (Hons) Electrical / Electronics", "بكالوريوس هندسة كهربائية / إلكترونيات", "电气/电子工程学士", 
                            "Engineering", "الهندسة", "工程学院", 
                            "Bachelor", "بكالوريوس", "本科", "4 Years", "4 سنوات", "4年", 
                            "March, July", 23625, u.getId(), u.getName()));
                    } else {
                        // Generic Fallback
                        courseRepository.save(new Course(null, "Computer Science", "علوم الحاسوب", "计算机科学", 
                            "Technology", "التكنولوجيا", "技术", 
                            "Bachelor", "بكالوريوس", "本科", "3 Years", "3 سنوات", "3年", 
                            "Jan, May, Sep", 25000, u.getId(), u.getName()));
                    }
                }
            }
"""

text = text.replace('System.out.println("--- DATABASE SEEDING COMPLETED ---");', new_block + '\n            System.out.println("--- DATABASE SEEDING COMPLETED ---");')

with open(path, "w", encoding="utf-8") as f:
    f.write(text)
print("Seeder refactored.")
