import requests
import json
import time

BASE_URL = "http://localhost:8080/api"

def get_universities():
    resp = requests.get(f"{BASE_URL}/universities")
    if resp.status_code == 200:
        return resp.json()
    return []

def delete_all_courses():
    resp = requests.get(f"{BASE_URL}/courses")
    if resp.status_code == 200:
        courses = resp.json()
        print(f"Purging {len(courses)} existing test courses...")
        for c in courses:
            requests.delete(f"{BASE_URL}/courses/{c['id']}")
            
def create_course(course_data, uni_id, uni_name_en, uni_name_ar, uni_name_zh):
    payload = {
        "titleEn": course_data["titleEn"],
        "titleAr": course_data["titleAr"],
        "titleZh": course_data["titleZh"],
        
        "facultyEn": course_data["facultyEn"],
        "facultyAr": course_data["facultyAr"],
        "facultyZh": course_data["facultyZh"],
        
        "level": course_data["level"],
        "levelAr": course_data["levelAr"],
        "levelZh": course_data["levelZh"],
        
        "duration": course_data["duration"],
        "durationAr": course_data["durationAr"],
        "durationZh": course_data["durationZh"],
        
        "intakes": course_data["intakes"],
        "intakesAr": course_data["intakesAr"],
        "intakesZh": course_data["intakesZh"],
        
        # Multiply estimated USD by 4.5
        "feeMyr": int(course_data["feeUsd"] * 4.5),
        
        "universityId": uni_id,
        "universityName": uni_name_en,
        "universityNameAr": uni_name_ar,
        "universityNameZh": uni_name_zh
    }
    
    resp = requests.post(f"{BASE_URL}/courses", json=payload)
    if resp.status_code not in [200, 201]:
        print(f"FAILED POST: {resp.status_code} - {resp.text}")
        
PROGRAMS_DATA = {
    # TAYLOR'S UNIVERSITY (Broad selection)
    "Taylor's University": [
        # Foundation & Pre-U
        {"facultyEn": "Foundation & Pre-U", "facultyAr": "السنة التحضيرية وما قبل الجامعة", "facultyZh": "预科与预科课程",
         "titleEn": "Foundation in Arts / Business", "titleAr": "برنامج تأسيسي في الفنون / الأعمال", "titleZh": "文科/商科预科",
         "level": "Foundation", "levelAr": "تأسيسي", "levelZh": "预科",
         "duration": "1 Year", "durationAr": "سنة واحدة", "durationZh": "1年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 6500},
         
        {"facultyEn": "Foundation & Pre-U", "facultyAr": "السنة التحضيرية وما قبل الجامعة", "facultyZh": "预科与预科课程",
         "titleEn": "Foundation in Science & Engineering", "titleAr": "برنامج تأسيسي في العلوم والهندسة", "titleZh": "理科预科",
         "level": "Foundation", "levelAr": "تأسيسي", "levelZh": "预科",
         "duration": "1 Year", "durationAr": "سنة واحدة", "durationZh": "1年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 7500},
         
        {"facultyEn": "Foundation & Pre-U", "facultyAr": "السنة التحضيرية وما قبل الجامعة", "facultyZh": "预科与预科课程",
         "titleEn": "Cambridge A Levels (3 or 4 subjects)", "titleAr": "مستويات كامبريدج A", "titleZh": "剑桥A Levels",
         "level": "Pre-U", "levelAr": "ما قبل الجامعة", "levelZh": "大学预科",
         "duration": "1.5 Years", "durationAr": "سنة ونصف", "durationZh": "1.5年",
         "intakes": "Jan, Mar, Aug", "intakesAr": "يناير، مارس، أغسطس", "intakesZh": "1月, 3月, 8月", "feeUsd": 8500},

        # Undergrad - Computing
        {"facultyEn": "Computing & IT", "facultyAr": "الحوسبة وتقنية المعلومات", "facultyZh": "计算机与信息技术",
         "titleEn": "Bachelor of Computer Science (AI, Data Science)", "titleAr": "بكالوريوس علوم الحاسوب (الذكاء الاصطناعي)", "titleZh": "计算机科学学士 (AI, 数据科学)",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 9200},
         
        {"facultyEn": "Computing & IT", "facultyAr": "الحوسبة وتقنية المعلومات", "facultyZh": "计算机与信息技术",
         "titleEn": "Bachelor of Software Engineering (Hons)", "titleAr": "بكالوريوس هندسة البرمجيات", "titleZh": "软件工程学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 9200},

        # Undergrad - Business
        {"facultyEn": "Business Administration", "facultyAr": "إدارة الأعمال", "facultyZh": "工商管理",
         "titleEn": "Bachelor of Business (Accounting / Finance)", "titleAr": "بكالوريوس أعمال (محاسبة / مالية)", "titleZh": "商学学士 (会计/金融)",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 10100},
         
        {"facultyEn": "Business Administration", "facultyAr": "إدارة الأعمال", "facultyZh": "工商管理",
         "titleEn": "BSc (Hons) Actuarial Studies", "titleAr": "بكالوريوس الدراسات الاكتوارية", "titleZh": "精算学理学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Aug", "intakesAr": "مارس، أغسطس", "intakesZh": "3月, 8月", "feeUsd": 11100},

        # Medicine
        {"facultyEn": "Biological Sciences & Medicine", "facultyAr": "العلوم البيولوجية والطب", "facultyZh": "医学与生物科学",
         "titleEn": "Bachelor of Medicine, Bachelor of Surgery (MBBS)", "titleAr": "بكالوريوس الطب والجراحة (MBBS)", "titleZh": "医学与外科学士 (MBBS)",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "5 Years", "durationAr": "5 سنوات", "durationZh": "5年",
         "intakes": "Feb, Sep", "intakesAr": "فبراير، سبتمبر", "intakesZh": "2月, 9月", "feeUsd": 20000},
         
        {"facultyEn": "Biological Sciences & Medicine", "facultyAr": "العلوم البيولوجية والطب", "facultyZh": "医学与生物科学",
         "titleEn": "Bachelor of Pharmacy (Hons)", "titleAr": "بكالوريوس الصيدلة", "titleZh": "药学学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "4 Years", "durationAr": "4 سنوات", "durationZh": "4年",
         "intakes": "Feb, Sep", "intakesAr": "فبراير، سبتمبر", "intakesZh": "2月, 9月", "feeUsd": 14100},

        # Postgraduate
        {"facultyEn": "Postgraduate (Master/PhD)", "facultyAr": "الدراسات العليا (ماجستير/دكتوراه)", "facultyZh": "研究生课程",
         "titleEn": "Master of Business Administration (MBA)", "titleAr": "ماجستير إدارة الأعمال (MBA)", "titleZh": "工商管理硕士 (MBA)",
         "level": "Master", "levelAr": "ماجستير", "levelZh": "硕士",
         "duration": "1.5 Years", "durationAr": "سنة ونصف", "durationZh": "1.5年",
         "intakes": "Flexible", "intakesAr": "مرن", "intakesZh": "灵活", "feeUsd": 8500},
         
        {"facultyEn": "Postgraduate (Master/PhD)", "facultyAr": "الدراسات العليا (ماجستير/دكتوراه)", "facultyZh": "研究生课程",
         "titleEn": "PhD by Research", "titleAr": "دكتوراه عن طريق البحث", "titleZh": "研究型博士",
         "level": "PhD", "levelAr": "دكتوراه", "levelZh": "博士",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Flexible", "intakesAr": "مرن", "intakesZh": "灵活", "feeUsd": 4100},
    ],
    
    # APU UNIVERSITY
    "APU": [
        {"facultyEn": "Computing & Technology", "facultyAr": "الحوسبة والتكنولوجيا", "facultyZh": "计算与技术",
         "titleEn": "BSc (Hons) in Cyber Security", "titleAr": "بكالوريوس في الأمن السيبراني", "titleZh": "网络安全理学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Jul, Sep", "intakesAr": "مارس، يوليو، سبتمبر", "intakesZh": "3月, 7月, 9月", "feeUsd": 8000},
         
        {"facultyEn": "Computing & Technology", "facultyAr": "الحوسبة والتكنولوجيا", "facultyZh": "计算与技术",
         "titleEn": "BSc (Hons) in Artificial Intelligence", "titleAr": "بكالوريوس في الذكاء الاصطناعي", "titleZh": "人工智能理学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Jul, Sep", "intakesAr": "مارس، يوليو، سبتمبر", "intakesZh": "3月, 7月, 9月", "feeUsd": 8000},
         
        {"facultyEn": "Engineering", "facultyAr": "الهندسة", "facultyZh": "工程学院",
         "titleEn": "BEng (Hons) in Mechatronic Engineering", "titleAr": "بكالوريوس هندسة الميكاترونكس", "titleZh": "机电工程学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "4 Years", "durationAr": "4 سنوات", "durationZh": "4年",
         "intakes": "Mar, Jul, Sep", "intakesAr": "مارس، يوليو، سبتمبر", "intakesZh": "3月, 7月, 9月", "feeUsd": 7600},
    ],
    
    # MULTIMEDIA UNIVERSITY (MMU)
    "Multimedia University": [
        {"facultyEn": "Computing & Informatics", "facultyAr": "الحوسبة والمعلوماتية", "facultyZh": "计算与信息学",
         "titleEn": "Bachelor of Computer Science (AI)", "titleAr": "بكالوريوس علوم الحاسوب (AI)", "titleZh": "计算机科学学士 (AI)",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Sep", "intakesAr": "مارس، سبتمبر", "intakesZh": "3月, 9月", "feeUsd": 5700},
         
        {"facultyEn": "Engineering", "facultyAr": "الهندسة", "facultyZh": "工程学院",
         "titleEn": "BEng (Hons) Electrical / Electronics", "titleAr": "بكالوريوس هندسة كهربائية / إلكترونيات", "titleZh": "电气/电子工程学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "4 Years", "durationAr": "4 سنوات", "durationZh": "4年",
         "intakes": "Mar, Sep", "intakesAr": "مارس، سبتمبر", "intakesZh": "3月, 9月", "feeUsd": 6200},
         
        {"facultyEn": "Creative Multimedia", "facultyAr": "الوسائط المتعددة الإبداعية", "facultyZh": "创意多媒体",
         "titleEn": "Bachelor of Cinematic Arts", "titleAr": "بكالوريوس الفنون السينمائية", "titleZh": "电影艺术学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Mar, Sep", "intakesAr": "مارس، سبتمبر", "intakesZh": "3月, 9月", "feeUsd": 6800},
    ],
    
    # UCSI UNIVERSITY
    "UCSI": [
        {"facultyEn": "Business & Management", "facultyAr": "الأعمال والإدارة", "facultyZh": "商业与管理",
         "titleEn": "Bachelor of Arts in Logistics Management", "titleAr": "بكالوريوس الآداب في إدارة الخدمات اللوجستية", "titleZh": "物流管理文学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Jan, May, Sep", "intakesAr": "يناير، مايو، سبتمبر", "intakesZh": "1月, 5月, 9月", "feeUsd": 6500},
         
        {"facultyEn": "Medicine & Health Sciences", "facultyAr": "الطب والعلوم الصحية", "facultyZh": "医学与健康科学",
         "titleEn": "Doctor of Medicine (MD)", "titleAr": "دكتور في الطب (MD)", "titleZh": "医学博士 (MD)",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "5 Years", "durationAr": "5 سنوات", "durationZh": "5年",
         "intakes": "Sep", "intakesAr": "سبتمبر", "intakesZh": "9月", "feeUsd": 19000},
         
        {"facultyEn": "Music", "facultyAr": "الموسيقى", "facultyZh": "音乐学院",
         "titleEn": "Bachelor of Classical Music", "titleAr": "بكالوريوس الموسيقى الكلاسيكية", "titleZh": "古典音乐学士",
         "level": "Bachelor", "levelAr": "بكالوريوس", "levelZh": "本科",
         "duration": "3 Years", "durationAr": "3 سنوات", "durationZh": "3年",
         "intakes": "Jan, May, Sep", "intakesAr": "يناير، مايو، سبتمبر", "intakesZh": "1月, 5月, 9月", "feeUsd": 8500},
    ]
}

def seed_courses():
    delete_all_courses()
    unis = get_universities()
    if not unis:
        print("No universities found in DB!")
        return
        
    for keyword, courses in PROGRAMS_DATA.items():
        # Find matching uni ID roughly
        matching_uni = next((u for u in unis if keyword.lower() in u['name'].lower()), None)
        if not matching_uni:
            print(f"Warning: Could not match a university ID for {keyword}")
            continue
            
        uni_id = matching_uni['id']
        uni_name_en = matching_uni['name']
        uni_name_ar = matching_uni['nameAr']
        uni_name_zh = matching_uni['nameZh']
        
        print(f"Injecting {len(courses)} high-fidelity programs for: {uni_name_en}")
        for course in courses:
            create_course(course, uni_id, uni_name_en, uni_name_ar, uni_name_zh)
            
    print("FINISHED INJECTING PROGRAMS INTO THE LIVE DATABASE.")

if __name__ == "__main__":
    seed_courses()
