import re

data = {
    "private_unis": [
        "جامعة تايلور / Taylor's University",
        "جامعة APU / APU University",
        "جامعة الملتيميديا / Multimedia University (MMU)",
        "جامعة UCSI / UCSI University",
        "جامعة تناجا / Uniten",
        "جامعة MSU / Management and Science University (MSU)",
        "جامعة City / City University Malaysia",
        "جامعة سايبرجايا / University of Cyberjaya",
        "جامعة سيجي / SEGi University",
        "جامعة ماهسا / MAHSA University",
        "جامعة ليمكوكوينج / Limkokwing University",
        "جامعة كوالالمبور / Universiti Kuala Lumpur (UniKL)",
        "جامعة بتروناس / Universiti Teknologi PETRONAS (UTP)",
        "جامعة IUKL / Infrastructure University Kuala Lumpur",
        "جامعة لينكولن / Lincoln University College",
        "جامعة INTI / INTI International University",
        "جامعة صنواي / Sunway University",
        "جامعة Help / HELP University",
        "جامعة Utar / Universiti Tunku Abdul Rahman (UTAR)",
        "جامعة UniMy / University Malaysia of Computer Science & Engineering (UNIMY)",
        "جامعة IMU / International Medical University (IMU)",
        "جامعة نيلاي / Nilai University",
        "جامعة Geomatika / Geomatika University College"
    ],
    "foreign_unis": [
        "جامعة هيريوت وات / Heriot-Watt University Malaysia",
        "جامعة موناش / Monash University Malaysia",
        "جامعة نوتنغهام / University of Nottingham Malaysia",
        "جامعة مالايا ويلز / International University of Malaya-Wales (IUMW)"
    ],
    "public_unis": [
        "جامعة UTM / Universiti Teknologi Malaysia (UTM)",
        "جامعة مالايا / Universiti Malaya (UM)",
        "جامعة بوترا / Universiti Putra Malaysia (UPM)",
        "جامعة ملاكا / Universiti Teknikal Malaysia Melaka (UTeM)",
        "جامعة العلوم / Universiti Sains Malaysia (USM)",
        "الجامعة الاسلامية / International Islamic University Malaysia (IIUM)",
        "الجامعة الوطنية / Universiti Kebangsaan Malaysia (UKM)",
        "جامعة برليس / Universiti Malaysia Perlis (UniMAP)",
        "جامعة ساراواك / Universiti Malaysia Sarawak (UNIMAS)",
        "جامعة مارا / Universiti Teknologi MARA (UiTM)",
        "جامعة اوتارا / Universiti Utara Malaysia (UUM)",
        "جامعة UTHM / Universiti Tun Hussein Onn Malaysia (UTHM)"
    ],
    "language_centers": [
        "معهد اكسل / Excel Language Center",
        "معهد برايت / Bright Language Center",
        "معهد IABT / IABT Malaysia",
        "معهد ELC / ELC English Language Company",
        "معهد ايليك / ELEC Language Center",
        "معهد ELS / ELS Language Centers",
        "معهد بيج بين / Big Ben Academy",
        "معهد ستراتفورد / Stratford International Language Centre",
        "اكاديمية شيفيلد / Sheffield Academy",
        "معهد EMS / EMS Language Centre",
        "معهد بريتانيا / Britannia Language Centre",
        "معهد ايليت / Elite Linguistic Centre",
        "معهد اوسم / Awesome English Language Center",
        "معهد wall street / Wall Street English",
        "معهد كاليفورنيا / California KL Language Center",
        "معهد ايريكان / Erican College"
    ]
}

def translate_to_zh(en_name):
    mappings = {
        "Taylor": "泰莱大学",
        "APU": "亚太科技大学",
        "MMU": "多媒体大学",
        "UCSI": "思特雅大学",
        "Uniten": "国家能源大学",
        "MSU": "管理与科学大学",
        "City": "城市大学",
        "Cyberjaya": "赛城大学",
        "SEGi": "世纪大学",
        "MAHSA": "玛莎大学",
        "Limkokwing": "林国荣创意科技大学",
        "UniKL": "吉隆坡大学",
        "UTP": "国油科技大学",
        "IUKL": "吉隆坡建设大学",
        "Lincoln": "林肯大学学院",
        "INTI": "英迪国际大学",
        "Sunway": "双威大学",
        "HELP": "精英大学",
        "UTAR": "拉曼大学",
        "UNIMY": "马来西亚计算机科学与工程大学",
        "IMU": "国际医药大学",
        "Nilai": "汝来大学",
        "Geomatika": "吉奥马提卡大学学院",
        "Heriot-Watt": "赫瑞·瓦特大学",
        "Monash": "莫纳什大学",
        "Nottingham": "诺丁汉大学",
        "IUMW": "马来亚威尔士国际大学",
        "UTM": "马来西亚理工大学",
        "UM": "马来亚大学",
        "UPM": "马来西亚博特拉大学",
        "UTeM": "马六甲马来西亚技术大学",
        "USM": "马来西亚理科大学",
        "IIUM": "马来西亚国际伊斯兰大学",
        "UKM": "马来西亚国立大学",
        "UniMAP": "马来西亚玻璃市大学",
        "UNIMAS": "马来西亚砂拉越大学",
        "UiTM": "玛拉工艺大学",
        "UUM": "马来西亚北方大学",
        "UTHM": "马来西亚敦胡先翁大学",
    }
    for key, val in mappings.items():
        if key.lower() in en_name.lower():
            return val
    return en_name + " (Zh)"

def translate_lc_to_zh(en_name):
    mappings = {
        "Excel": "优秀语言中心 (Excel)",
        "Bright": "明亮语言中心 (Bright)",
        "IABT": "IABT 语言中心",
        "ELC": "ELC英语中心",
        "ELEC": "ELEC 语言中心",
        "ELS": "ELS 语言中心",
        "Big Ben": "大本钟学院",
        "Stratford": "斯特拉特福国际语言中心",
        "Sheffield": "谢菲尔德学院",
        "EMS": "EMS 语言中心",
        "Britannia": "大不列颠语言中心",
        "Elite": "精英语言中心",
        "Awesome": "Awesome 英语中心",
        "Wall Street": "华尔街英语",
        "California KL": "加利福尼亚（吉隆坡）语言中心",
        "Erican": "爱立肯学院"
    }
    for key, val in mappings.items():
        if key.lower() in en_name.lower():
            return val
    return en_name + " (Zh)"

java_template = """package com.yaalma.api.config;

import com.yaalma.api.models.*;
import com.yaalma.api.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class DatabaseSeeder {

    @Bean
    public CommandLineRunner initDatabase(
            UniversityRepository universityRepository,
            ConsultantRepository consultantRepository,
            TestimonialRepository testimonialRepository,
            LanguageCenterRepository languageCenterRepository,
            CourseRepository courseRepository,
            LanguageProgramRepository languageProgramRepository,
            BlogPostRepository blogPostRepository) {
        
        return args -> {
            System.out.println("--- STARTING DATABASE SEEDING ---");
            
            // Seed Universities if empty
            if (universityRepository.count() == 0) {
                System.out.println("Seeding Universities...");
                
__UNIS_CODE__
            }

            // Seed Consultants
            if (consultantRepository.count() == 0) {
                consultantRepository.saveAll(Arrays.asList(
                    new Consultant(null, "A. Abdullah Belfaqih", "أ. عبدالله بلفقيه", "阿卜杜拉·贝尔法基", "Academic Consultant", "مستشار أكاديمي", "学术顾问", "A", "601161283150"),
                    new Consultant(null, "A. Saeed Al-Johi", "أ. سعيد الجوهي", "赛义德·阿尔乔希", "Academic Consultant", "مستشار أكاديمي", "学术顾问", "S", "601137032417")
                ));
            }

            // Seed Language Centers
            if (languageCenterRepository.count() == 0) {
                System.out.println("Seeding Language Centers...");
__LC_CODE__
            }

            // Seed Courses
            if (courseRepository.count() == 0) {
                List<University> unis = universityRepository.findAll();
                for (University u : unis) {
                    courseRepository.save(new Course(null, "Computer Science", "علوم الحاسوب", "计算机科学", "Technology", "التكنولوجيا", "技术", "Bachelor Degree", "بكالوريوس", "学士学位", "3 Years", "3 سنوات", "3年", "Jan, May, Sep", 20000, u.getId(), u.getName()));
                    courseRepository.save(new Course(null, "Business Administration", "إدارة الأعمال", "工商管理", "Business", "إدارة", "商业", "Bachelor Degree", "بكالوريوس", "学士学位", "3 Years", "3 سنوات", "3年", "Feb, Jun, Oct", 18000, u.getId(), u.getName()));
                }
            }

            // Seed Language Programs
            if (languageProgramRepository.count() == 0) {
                List<LanguageCenter> centers = languageCenterRepository.findAll();
                for (LanguageCenter lc : centers) {
                    languageProgramRepository.save(new LanguageProgram(null, "Intensive English", "لغة إنجليزية مكثفة", "强化英语", "4 Weeks", "4 أسابيع", "4周", "All Levels", "جميع المستويات", "所有级别", "Every Monday", "كل يوم إثنين", "每周一", 2500, lc.getId()));
                    languageProgramRepository.save(new LanguageProgram(null, "IELTS Preparation", "تحضير لاختبار الآيلتس", "雅思考试准备", "12 Weeks", "12 أسبوع", "12周", "Intermediate to Advanced", "متوسط إلى متقدم", "中高级", "First Monday of Month", "أول إثنين من الشهر", "每月第一个周一", 4800, lc.getId()));
                }
            }

            // Seed Testimonials
            if (testimonialRepository.count() == 0) {
                testimonialRepository.save(new Testimonial(null, "Ahmed R.", "أحمد", "APU University", "جامعة آسيا والمحيط الهادئ", "亚太科技大学", "Great experience!", "تجربة رائعة!", "棒极了的体验！", 5));
            }

            // Seed Blog Posts
            if (blogPostRepository.count() == 0) {
                BlogPost p1 = new BlogPost();
                p1.setTitle("Study in Malaysia 2024");
                p1.setTitleAr("الدراسة في ماليزيا 2024");
                p1.setTitleZh("2024年马来西亚留学指南");
                p1.setCategory("Education");
                p1.setCategoryAr("التعليم");
                p1.setCategoryZh("教育");
                p1.setPublished(true);
                blogPostRepository.save(p1);
            }

            System.out.println("--- DATABASE SEEDING COMPLETED ---");
        };
    }
}
"""

unis_code = ""
lc_code = ""

import re
var_count = 0

def clean_var(name):
    return re.sub(r'[^a-zA-Z0-9]', '', name).lower() + str(var_count)

for cat in ["private_unis", "foreign_unis", "public_unis"]:
    is_private = "true" if cat == "private_unis" else "false"
    for item in data[cat]:
        parts = item.split(" / ")
        ar_name = parts[0].strip()
        en_name = parts[1].strip()
        zh_name = translate_to_zh(en_name)
        vname = "uni_" + str(var_count)
        
        # public University(Long id, String name, String nameAr, String nameZh, String location, String locationAr, String locationZh, String state, String logoUrl, Boolean isPrivate, Boolean freeOfferLetter, Integer courseCount)
        unis_code += f'                University {vname} = new University(null, "{en_name}", "{ar_name}", "{zh_name}", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", {is_private}, true, 100);\n'
        unis_code += f'                universityRepository.save({vname});\n'
        var_count += 1

var_count = 0
for item in data["language_centers"]:
    parts = item.split(" / ")
    ar_name = parts[0].strip()
    en_name = parts[1].strip()
    zh_name = translate_lc_to_zh(en_name)
    vname = "lc_" + str(var_count)
    
    # public LanguageCenter(Long id, String name, String nameAr, String nameZh, String location, String locationAr, String locationZh, String state, String logoUrl)
    lc_code += f'                LanguageCenter {vname} = new LanguageCenter(null, "{en_name}", "{ar_name}", "{zh_name}", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");\n'
    lc_code += f'                languageCenterRepository.save({vname});\n'
    var_count += 1

final_code = java_template.replace("__UNIS_CODE__", unis_code).replace("__LC_CODE__", lc_code)

with open("C:\\Users\\user\\.gemini\\antigravity\\scratch\\ya-alma-legacy-api\\src\\main\\java\\com\\yaalma\\api\\config\\DatabaseSeeder.java", "w", encoding="utf-8") as f:
    f.write(final_code)

print("DatabaseSeeder.java generated successfully.")
