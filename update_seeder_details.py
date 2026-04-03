import re

data = {
    "private_unis": [
        "جامعة تايلور / Taylor's University",         # We have detailed data
        "جامعة APU / APU University",              # We have detailed data
        "جامعة الملتيميديا / Multimedia University (MMU)", # We have detailed data
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
        "Taylor": "泰莱大学", "APU": "亚太科技大学", "MMU": "多媒体大学",
        "UCSI": "思特雅大学", "Uniten": "国家能源大学", "MSU": "管理与科学大学",
        "City": "城市大学", "Cyberjaya": "赛城大学", "SEGi": "世纪大学",
        "MAHSA": "玛莎大学", "Limkokwing": "林国荣创意科技大学", "UniKL": "吉隆坡大学",
        "UTP": "国油科技大学", "IUKL": "吉隆坡建设大学", "Lincoln": "林肯大学学院",
        "INTI": "英迪国际大学", "Sunway": "双威大学", "HELP": "精英大学",
        "UTAR": "拉曼大学", "UNIMY": "马来西亚计算机科学与工程大学", "IMU": "国际医药大学",
        "Nilai": "汝来大学", "Geomatika": "吉奥马提卡大学学院", "Heriot-Watt": "赫瑞·瓦特大学",
        "Monash": "莫纳什大学", "Nottingham": "诺丁汉大学", "IUMW": "马来亚威尔士国际大学",
        "UTM": "马来西亚理工大学", "UM": "马来亚大学", "UPM": "马来西博特拉大学",
        "UTeM": "马六甲马来西亚技术大学", "USM": "马来西亚理科大学", "IIUM": "马来西亚国际伊斯兰大学",
        "UKM": "马来西亚国立大学", "UniMAP": "马来西亚玻璃市大学", "UNIMAS": "马来西亚砂拉越大学",
        "UiTM": "玛拉工艺大学", "UUM": "马来西亚北方大学", "UTHM": "马来西亚敦胡先翁大学",
    }
    for key, val in mappings.items():
        if key.lower() in en_name.lower(): return val
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
            BlogPostRepository blogPostRepository) {
        
        return args -> {
            System.out.println("--- STARTING DATABASE SEEDING ---");
            
            // Seed Universities if empty
            if (universityRepository.count() == 0) {
                System.out.println("Seeding Universities with Full Detail...");
                
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
__LC_CODE__
            }

            // Seed Courses Table (Generic Fallback)
            if (courseRepository.count() == 0) {
                List<University> unis = universityRepository.findAll();
                for (University u : unis) {
                    if(u.getFaculties().isEmpty()) {
                        courseRepository.save(new Course(null, "Computer Science", "علوم الحاسوب", "计算机科学", "Technology", "التكنولوجيا", "Bachelor", u.getId(), u.getName(), "Jan, May, Sep"));
                        courseRepository.save(new Course(null, "Business Administration", "إدارة الأعمال", "工商管理", "Business", "إدارة", "Bachelor", u.getId(), u.getName(), "Feb, Jun, Oct"));
                    }
                }
            }

            System.out.println("--- DATABASE SEEDING COMPLETED ---");
        };
    }
}
"""

unis_code = ""

var_count = 0
for cat in ["private_unis", "foreign_unis", "public_unis"]:
    is_private = "true" if cat == "private_unis" else "false"
    for item in data[cat]:
        parts = item.split(" / ")
        ar_name = parts[0].strip()
        en_name = parts[1].strip()
        zh_name = translate_to_zh(en_name)
        vname = "uni_" + str(var_count)
        
        # Base Creation
        unis_code += f'                University {vname} = new University(null, "{en_name}", "{ar_name}", "{zh_name}", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Selangor", "default_logo", {is_private}, true, 100);\n'
        
        # Apply specialized data if it exists
        if "Taylor" in en_name:
            unis_code += f"""                {vname}.setAboutEn("Taylor's University is ranked 251st globally (QS 2025) and is the #1 Private University in Malaysia. Located at the scenic Lakeside Campus in Subang Jaya.");\n"""
            unis_code += f'                {vname}.setAboutAr("تعتبر جامعة تايلورز في المرتبة 251 عالميًا (QS 2025) وهي الجامعة الخاصة رقم 1 في ماليزيا. تقع في حرم ليكسايد الجامعي الخلاب في سوبانج جايا.");\n'
            unis_code += f'                {vname}.setAboutZh("泰莱大学在全球排名第251位（2025年QS排名），是马来西亚排名第一的私立大学。位于梳邦再也风景秀丽的湖畔校区。");\n'
            unis_code += f'                {vname}.setRegistrationFeeUsd(1397);\n'
            unis_code += f'                {vname}.setVisaFeeUsd(659);\n'
            unis_code += f'                {vname}.getRankings().addAll(Arrays.asList("251st Globally QS 2025", "#1 Private University in Malaysia"));\n'
            
            # Add faculties
            f_idx = "f_taylor_bus"
            unis_code += f'                Faculty {f_idx} = new Faculty("Business Administration", "إدارة الأعمال", "工商管理", {vname});\n'
            unis_code += f'                {f_idx}.getPrograms().add(new Program("Bachelor of Business Administration", "بكالوريوس في إدارة الأعمال", "工商管理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 10147, {f_idx}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx});\n'
            
            f_idx2 = "f_taylor_it"
            unis_code += f'                Faculty {f_idx2} = new Faculty("Computing & IT", "الحوسبة وتقنية المعلومات", "计算机与信息技术", {vname});\n'
            unis_code += f'                {f_idx2}.getPrograms().add(new Program("Bachelor of Software Engineering", "بكالوريوس في هندسة البرمجيات", "软件工程学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 9191, {f_idx2}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx2});\n'
            
            f_idx3 = "f_taylor_eng"
            unis_code += f'                Faculty {f_idx3} = new Faculty("Engineering", "الهندسة", "工程", {vname});\n'
            unis_code += f'                {f_idx3}.getPrograms().add(new Program("Bachelor of Mechanical Engineering (Hons)", "بكالوريوس في الهندسة الميكانيكية", "机械工程荣誉学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 11194, {f_idx3}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx3});\n'

        elif "APU" in en_name:
            unis_code += f'                {vname}.setAboutEn("Asia Pacific University of Technology & Innovation (APU) holds a 5-Star QS Rating and boasts a 100% graduate employment rate. Well known for Dual Degrees with De Montfort University (UK).");\n'
            unis_code += f'                {vname}.setAboutAr("تحمل جامعة آسيا والمحيط الهادئ للتكنولوجيا والابتكار (APU) تصنيف 5 نجوم من QS وتفتخر بمعدل توظيف للخريجين يبلغ 100%. معروفة جيدًا بالدرجات المزدوجة مع جامعة دي مونتفورت (المملكة المتحدة).");\n'
            unis_code += f'                {vname}.setAboutZh("亚太科技大学 (APU) 拥有 QS 5 星评级，毕业生就业率高达 100%。以与英国德蒙福特大学的双学位项目而闻名。");\n'
            unis_code += f'                {vname}.setRegistrationFeeUsd(1444);\n'
            unis_code += f'                {vname}.getRankings().addAll(Arrays.asList("5-Star QS Rating", "100% Graduate Employment Rate"));\n'

            f_idx = "f_apu_it"
            unis_code += f'                Faculty {f_idx} = new Faculty("Computing & Technology", "الحوسبة والتكنولوجيا", "计算机与技术", {vname});\n'
            unis_code += f'                {f_idx}.getPrograms().add(new Program("BSc (Hons) in Cyber Security", "بكالوريوس في الأمن السيبراني", "网络安全理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Mar, Jul, Sep, Nov", 8037, {f_idx}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx});\n'

            f_idx2 = "f_apu_eng"
            unis_code += f'                Faculty {f_idx2} = new Faculty("Engineering", "الهندسة", "工程", {vname});\n'
            unis_code += f'                {f_idx2}.getPrograms().add(new Program("BEng (Hons) in Mechatronic Engineering", "بكالوريوس هندسة الميكاترونكس", "机电工程学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Mar, Jul, Sep, Nov", 7622, {f_idx2}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx2});\n'

            f_idx3 = "f_apu_bus"
            unis_code += f'                Faculty {f_idx3} = new Faculty("Business & Management", "Business & Management", "商业与管理", {vname});\n'
            unis_code += f'                {f_idx3}.getPrograms().add(new Program("BA (Hons) in Business Management", "BA (Hons) in Business Management", "商业管理文学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Mar, Jul, Sep, Nov", 7622, {f_idx3}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx3});\n'


        elif "MMU" in en_name:
            unis_code += f'                {vname}.setAboutEn("Multimedia University (MMU) is ranked #451 in Computer Science globally. With campuses in Cyberjaya and Melaka, it is highly regarded for its industry collaboration.");\n'
            unis_code += f'                {vname}.setAboutAr("تصنف جامعة الملتيميديا (MMU) في المرتبة 451 عالميًا في علوم الكمبيوتر. مع فروعها في سايبرجايا وملاكا، تحظى بتقدير كبير لتعاونها مع الصناعة.");\n'
            unis_code += f'                {vname}.setAboutZh("多媒体大学 (MMU) 在计算机科学领域全球排名第451位。其赛城和马六甲校区以其紧密的工业合作而享有盛誉。");\n'
            unis_code += f'                {vname}.setRegistrationFeeUsd(444);\n'
            unis_code += f'                {vname}.setVisaFeeUsd(633);\n'
            unis_code += f'                {vname}.setDepositFeeUsd(333);\n'
            unis_code += f'                {vname}.getRankings().addAll(Arrays.asList("#351 in Electrical Eng", "#451 in Computer Science"));\n'

            f_idx = "f_mmu_it"
            unis_code += f'                Faculty {f_idx} = new Faculty("Computer Science", "علوم الحاسوب", "计算机科学", {vname});\n'
            unis_code += f'                {f_idx}.getPrograms().add(new Program("Bachelor of Computer Science (AI)", "بكالوريوس علوم الحاسوب (الذكاء الاصطناعي)", "计算机科学学士 (AI)", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "March", 5722, {f_idx}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx});\n'

            f_idx2 = "f_mmu_eng"
            unis_code += f'                Faculty {f_idx2} = new Faculty("Engineering", "الهندسة", "工程", {vname});\n'
            unis_code += f'                {f_idx2}.getPrograms().add(new Program("Bachelor of Engineering (Telecommunications)", "بكالوريوس الهندسة (الاتصالات)", "工程学士 (电信)", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "March", 5250, {f_idx2}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx2});\n'

        unis_code += f'                universityRepository.save({vname});\n'
        var_count += 1

lc_code = ""
var_count = 0
for item in data["language_centers"]:
    parts = item.split(" / ")
    ar_name = parts[0].strip()
    en_name = parts[1].strip()
    vname = "lc_" + str(var_count)
    lc_code += f'                LanguageCenter {vname} = new LanguageCenter(null, "{en_name}", "{ar_name}", "{en_name}", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");\n'
    lc_code += f'                languageCenterRepository.save({vname});\n'
    var_count += 1

final_code = java_template.replace("__UNIS_CODE__", unis_code).replace("__LC_CODE__", lc_code)

with open("C:\\Users\\user\\.gemini\\antigravity\\scratch\\ya-alma-legacy-api\\src\\main\\java\\com\\yaalma\\api\\config\\DatabaseSeeder.java", "w", encoding="utf-8") as f:
    f.write(final_code)

print("DatabaseSeeder.java updated with specialized detailed content for Taylor, APU, and MMU.")
