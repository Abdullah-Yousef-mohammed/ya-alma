import re

data = {
    "private_unis": [
        "جامعة تايلور / Taylor's University",         # 1
        "جامعة APU / APU University",              # 2
        "جامعة الملتيميديا / Multimedia University (MMU)", # 3
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
            
            if (universityRepository.count() == 0) {
                System.out.println("Seeding Universities with Full Detail...");
__UNIS_CODE__
            }

            if (consultantRepository.count() == 0) {
                consultantRepository.saveAll(Arrays.asList(
                    new Consultant(null, "A. Abdullah Belfaqih", "أ. عبدالله بلفقيه", "阿卜杜拉·贝尔法基", "Academic Consultant", "مستشار أكاديمي", "学术顾问", "A", "601161283150"),
                    new Consultant(null, "A. Saeed Al-Johi", "أ. سعيد الجوهي", "赛义德·阿尔乔希", "Academic Consultant", "مستشار أكاديمي", "学术顾问", "S", "601137032417")
                ));
            }

            if (languageCenterRepository.count() == 0) {
__LC_CODE__
            }

            if (courseRepository.count() == 0) {
                List<University> unis = universityRepository.findAll();
                for (University u : unis) {
                    if(u.getFaculties().isEmpty()) {
                        courseRepository.save(new Course(null, "Computer Science", "علوم الحاسوب", "计算机科学", "Technology", "التكنولوجيا", "Bachelor", u.getId(), u.getName(), "Jan, May, Sep"));
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
        
        unis_code += f'                University {vname} = new University(null, "{en_name}", "{ar_name}", "{zh_name}", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Selangor", "default_logo", {is_private}, true, 100);\n'
        
        if "Taylor" in en_name:
            unis_code += f"""                {vname}.setAboutEn("Taylor's University is recognized as the leading private university in Malaysia and is positioned amongst the top 250 universities globally. Located at the scenic Lakeside Campus in Subang Jaya, the institution prides itself on its 'Smart Campus' environment, delivering world-class education with heavily integrated industry partnerships.");\n"""
            unis_code += f"""                {vname}.setAboutAr("تعتبر جامعة تايلورز الجامعة الخاصة الرائدة في ماليزيا وتحتل مكانة بين أفضل 250 جامعة على مستوى العالم. تفتخر المؤسسة، الواقعة في الحرم الجامعي 'ليكا سايد' الخلاب في سوبانج جايا، ببيئتها 'الذكية'، وتقدم تعليماً عالمي المستوى مع شراكات صناعية متكاملة بشكل كبير.");\n"""
            unis_code += f"""                {vname}.setAboutZh("泰莱大学被公认为马来西亚领先的私立大学，位列全球前250名大学之列。该机构位于梳邦再也风景秀丽的湖畔校区，以其“智慧校园”环境为荣，通过与行业的深度整合提供世界一流的教育。");\n"""
            unis_code += f'                {vname}.setRegistrationFeeUsd(1397);\n'
            unis_code += f'                {vname}.setVisaFeeUsd(659);\n'
            unis_code += f'                {vname}.setDepositFeeUsd(666);\n'
            unis_code += f'                {vname}.getRankings().addAll(Arrays.asList("251st Globally (QS 2025)", "#1 Private University in Malaysia", "49th for Universities Under 50 Years Old"));\n'
            
            # 1. Foundation
            unis_code += f'                Faculty f_t_found = new Faculty("Foundation & Pre-U", "السنة التحضيرية وما قبل الجامعة", "预科与大学预科", {vname});\n'
            unis_code += f'                f_t_found.getPrograms().add(new Program("Foundation in Arts / Business / Computing", "برنامج تأسيسي في الفنون / الأعمال / الحوسبة", "文科/商科/计算机预科", "1 Year", "سنة واحدة", "1年", "Foundation", "تأسيسي", "预科", "Feb, Jul, Aug", 6500, f_t_found));\n'
            unis_code += f'                f_t_found.getPrograms().add(new Program("Foundation in Science & Engineering", "برنامج تأسيسي في العلوم والهندسة", "科学与工程预科", "1 Year", "سنة واحدة", "1年", "Foundation", "تأسيسي", "预科", "Feb, Jul, Aug", 7544, f_t_found));\n'
            unis_code += f'                f_t_found.getPrograms().add(new Program("Cambridge A Levels (3 or 4 subjects)", "مستويات كامبريدج A", "剑桥A Levels", "1.5 Years", "سنة ونصف", "1.5年", "Pre-U", "ما قبل الجامعة", "大学预科", "Jan, Mar, Aug", 8500, f_t_found));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_found);\n'

            # 2. Diploma
            unis_code += f'                Faculty f_t_dip = new Faculty("Diploma Programs", "برامج الدبلوم", "文凭课程", {vname});\n'
            unis_code += f'                f_t_dip.getPrograms().add(new Program("Diploma in Accounting / Interior Design", "دبلوم في المحاسبة / التصميم الداخلي", "会计/室内设计文凭", "2 Years", "سنتان", "2年", "Diploma", "دبلوم", "文凭", "Jan, Mar, Aug", 5192, f_t_dip));\n'
            unis_code += f'                f_t_dip.getPrograms().add(new Program("Diploma in Business / IT / Communication", "دبلوم في الأعمال / الحوسبة / الاتصال", "商业/IT/传播文凭", "2 Years", "سنتان", "2年", "Diploma", "دبلوم", "文凭", "Jan, Mar, Aug", 6490, f_t_dip));\n'
            unis_code += f'                f_t_dip.getPrograms().add(new Program("Diploma in Culinary Arts", "دبلوم في فنون الطهي", "烹饪艺术文凭", "2.5 Years", "سنتان ونصف", "2.5年", "Diploma", "دبلوم", "文凭", "Jan, Mar, Aug", 7309, f_t_dip));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_dip);\n'

            # 3. Computing & IT
            unis_code += f'                Faculty f_t_it = new Faculty("Computing & IT", "الحوسبة وتقنية المعلومات", "计算机与信息技术", {vname});\n'
            unis_code += f'                f_t_it.getPrograms().add(new Program("Bachelor of Computer Science (AI, Data Science)", "بكالوريوس علوم الحاسوب (ذكاء اصطناعي، علم البيانات)", "计算机科学学士 (AI, 数据科学)", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 9191, f_t_it));\n'
            unis_code += f'                f_t_it.getPrograms().add(new Program("Bachelor of Software Engineering (Hons)", "بكالوريوس في هندسة البرمجيات (مع مرتبة الشرف)", "软件工程荣誉学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 9191, f_t_it));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_it);\n'

            # 4. Built Environment & Design
            unis_code += f'                Faculty f_t_arch = new Faculty("Architecture & Design", "العمارة والتصميم", "建筑与设计学院", {vname});\n'
            unis_code += f'                f_t_arch.getPrograms().add(new Program("BSc (Hons) in Architecture", "بكالوريوس (مع مرتبة الشرف) في الهندسة المعمارية", "建筑学荣誉理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 10199, f_t_arch));\n'
            unis_code += f'                f_t_arch.getPrograms().add(new Program("BSc (Hons) in Quantity Surveying", "بكالوريوس (مع مرتبة الشرف) في مسح الكميات", "工料测量荣誉理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 6792, f_t_arch));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_arch);\n'

            # 5. Business
            unis_code += f'                Faculty f_t_bus = new Faculty("Business Administration", "إدارة الأعمال", "工商管理", {vname});\n'
            unis_code += f'                f_t_bus.getPrograms().add(new Program("Bachelor of Business (Accounting / Finance)", "بكالوريوس أعمال (المحاسبة / المالية)", "商学学士 (会计/金融)", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 10147, f_t_bus));\n'
            unis_code += f'                f_t_bus.getPrograms().add(new Program("BSc (Hons) Actuarial Studies", "بكالوريوس (مع مرتبة الشرف) في الدراسات الاكتوارية", "精算学荣誉理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 11102, f_t_bus));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_bus);\n'

            # 6. Biological Sciences & Medicine
            unis_code += f'                Faculty f_t_med = new Faculty("Biological Sciences & Medicine", "العلوم البيولوجية والطب", "生物科学与医学", {vname});\n'
            unis_code += f'                f_t_med.getPrograms().add(new Program("Bachelor of Medicine, Bachelor of Surgery (MBBS)", "بكالوريوس الطب والجراحة (MBBS)", "医学学士和外科学士 (MBBS)", "5 Years", "5 سنوات", "5年", "Bachelor", "بكالوريوس", "本科", "Multiple Intakes", 20011, f_t_med));\n'
            unis_code += f'                f_t_med.getPrograms().add(new Program("Bachelor of Pharmacy (Hons)", "بكالوريوس الصيدلة (مع مرتبة الشرف)", "药学荣誉学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Feb, Sep", 14142, f_t_med));\n'
            unis_code += f'                f_t_med.getPrograms().add(new Program("BSc (Hons) Biomedical Science / Biotechnology", "بكالوريوس علوم الطب الحيوي / التكنولوجيا الحيوية", "生物医学/生物技术理学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 12504, f_t_med));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_med);\n'

            # 7. Arts, Sci & Comm
            unis_code += f'                Faculty f_t_arts = new Faculty("Arts, Sciences & Communication", "الآداب والعلوم والاتصال", "艺术、科学与传播", {vname});\n'
            unis_code += f'                f_t_arts.getPrograms().add(new Program("Bachelor of Psychology (Hons)", "بكالوريوس في علم النفس (مع مرتبة الشرف)", "心理学荣誉学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 9191, f_t_arts));\n'
            unis_code += f'                f_t_arts.getPrograms().add(new Program("Bachelor of Mass Communication (Hons)", "بكالوريوس في الاتصال الجماهيري (مع مرتبة الشرف)", "大众传播荣誉学士", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 9191, f_t_arts));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_arts);\n'

            # 8. Engineering
            unis_code += f'                Faculty f_t_eng = new Faculty("Engineering", "الهندسة", "工程学院", {vname});\n'
            unis_code += f'                f_t_eng.getPrograms().add(new Program("Bachelor of Chemical Engineering (Hons)", "بكالوريوس في الهندسة الكيميائية (مع مرتبة الشرف)", "化学工程荣誉学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 11194, f_t_eng));\n'
            unis_code += f'                f_t_eng.getPrograms().add(new Program("Bachelor of Electrical & Electronic Engineering", "بكالوريوس في الهندسة الكهربائية والإلكترونية", "电气与电子工程学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 11194, f_t_eng));\n'
            unis_code += f'                f_t_eng.getPrograms().add(new Program("Bachelor of Mechanical Engineering (Hons)", "بكالوريوس الهندسة الميكانيكية (مع مرتبة الشرف)", "机械工程荣誉学士", "4 Years", "4 سنوات", "4年", "Bachelor", "بكالوريوس", "本科", "Feb, Jul, Aug", 11194, f_t_eng));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_eng);\n'

            # 9. Masters
            unis_code += f'                Faculty f_t_post = new Faculty("Postgraduate (Master/PhD)", "الدراسات العليا (ماجستير/دكتوراه)", "研究生(硕士/博士)", {vname});\n'
            unis_code += f'                f_t_post.getPrograms().add(new Program("Master of Business Administration (MBA)", "ماجستير إدارة الأعمال (MBA)", "工商管理硕士 (MBA)", "1.5 Years", "سنة ونصف", "1.5年", "Master", "ماجستير", "硕士", "Multiple Intakes", 8500, f_t_post));\n'
            unis_code += f'                f_t_post.getPrograms().add(new Program("Master of Management (Online)", "ماجستير في الإدارة (عبر الإنترنت)", "管理硕士 (在线)", "2 Years", "سنتان", "2年", "Master", "ماجستير", "硕士", "Flexible", 3466, f_t_post));\n'
            unis_code += f'                f_t_post.getPrograms().add(new Program("Master of Architecture", "ماجستير في العمارة", "建筑学硕士", "2 Years", "سنتان", "2年", "Master", "ماجستير", "硕士", "Multiple Intakes", 6700, f_t_post));\n'
            unis_code += f'                f_t_post.getPrograms().add(new Program("Master / PhD by Research", "ماجستير / دكتوراه عن طريق البحث", "研究型硕士/博士", "3 Years", "3 سنوات", "3年", "PhD", "دكتوراه", "博士", "Flexible", 4122, f_t_post));\n'
            unis_code += f'                {vname}.getFaculties().add(f_t_post);\n'

        elif "APU" in en_name:
            unis_code += f"""                {vname}.setAboutEn("Asia Pacific University of Technology & Innovation (APU) holds a 5-Star QS Rating and boasts a 100% graduate employment rate. Well known for Dual Degrees with De Montfort University (UK).");\n"""
            unis_code += f"""                {vname}.setAboutAr("تحمل جامعة آسيا والمحيط الهادئ للتكنولوجيا والابتكار (APU) تصنيف 5 نجوم من QS وتفتخر بمعدل توظيف للخريجين يبلغ 100%. معروفة جيدًا بالدرجات المزدوجة مع جامعة دي مونتفورت (المملكة المتحدة).");\n"""
            unis_code += f"""                {vname}.setAboutZh("亚太科技大学 (APU) 拥有 QS 5 星评级，毕业生就业率高达 100%。以与英国德蒙福特大学的双学位项目而闻名。");\n"""
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

        elif "MMU" in en_name:
            unis_code += f"""                {vname}.setAboutEn("Multimedia University (MMU) is ranked #451 in Computer Science globally. With campuses in Cyberjaya and Melaka, it is highly regarded for its industry collaboration.");\n"""
            unis_code += f"""                {vname}.setAboutAr("تصنف جامعة الملتيميديا (MMU) في المرتبة 451 عالميًا في علوم الكمبيوتر. مع فروعها في سايبرجايا وملاكا، تحظى بتقدير كبير لتعاونها مع الصناعة.");\n"""
            unis_code += f"""                {vname}.setAboutZh("多媒体大学 (MMU) 在计算机科学领域全球排名第451位。其赛城和马六甲校区以其紧密的工业合作而享有盛誉。");\n"""
            unis_code += f'                {vname}.setRegistrationFeeUsd(444);\n'
            unis_code += f'                {vname}.setVisaFeeUsd(633);\n'
            unis_code += f'                {vname}.setDepositFeeUsd(333);\n'
            unis_code += f'                {vname}.getRankings().addAll(Arrays.asList("#351 in Electrical Eng", "#451 in Computer Science"));\n'

            f_idx = "f_mmu_it"
            unis_code += f'                Faculty {f_idx} = new Faculty("Computer Science", "علوم الحاسوب", "计算机科学", {vname});\n'
            unis_code += f'                {f_idx}.getPrograms().add(new Program("Bachelor of Computer Science (AI)", "بكالوريوس علوم الحاسوب (الذكاء الاصطناعي)", "计算机科学学士 (AI)", "3 Years", "3 سنوات", "3年", "Bachelor", "بكالوريوس", "本科", "March", 5722, {f_idx}));\n'
            unis_code += f'                {vname}.getFaculties().add({f_idx});\n'

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

print("DatabaseSeeder.java completely rewritten with full Taylor's programs")
