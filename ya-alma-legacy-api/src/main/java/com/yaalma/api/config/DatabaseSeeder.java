package com.yaalma.api.config;

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
            BlogPostRepository blogPostRepository,
            DynamicPageRepository dynamicPageRepository,
            AppConfigRepository appConfigRepository) {
        
        return args -> {
            System.out.println("--- STARTING DATABASE SEEDING ---");
            
            // Seed Universities if empty
            if (universityRepository.count() == 0) {
                System.out.println("Seeding Universities...");
                
                University uni_0 = new University(null, "Taylor's University", "جامعة تايلور", "泰莱大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_0);
                University uni_1 = new University(null, "APU University", "جامعة APU", "亚太科技大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_1);
                University uni_2 = new University(null, "Multimedia University (MMU)", "جامعة الملتيميديا", "多媒体大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_2);
                University uni_3 = new University(null, "UCSI University", "جامعة UCSI", "思特雅大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_3);
                University uni_4 = new University(null, "Uniten", "جامعة تناجا", "国家能源大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_4);
                University uni_5 = new University(null, "Management and Science University (MSU)", "جامعة MSU", "管理与科学大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_5);
                University uni_6 = new University(null, "City University Malaysia", "جامعة City", "城市大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_6);
                University uni_7 = new University(null, "University of Cyberjaya", "جامعة سايبرجايا", "赛城大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_7);
                University uni_8 = new University(null, "SEGi University", "جامعة سيجي", "世纪大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_8);
                University uni_9 = new University(null, "MAHSA University", "جامعة ماهسا", "玛莎大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_9);
                University uni_10 = new University(null, "Limkokwing University", "جامعة ليمكوكوينج", "林国荣创意科技大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_10);
                University uni_11 = new University(null, "Universiti Kuala Lumpur (UniKL)", "جامعة كوالالمبور", "吉隆坡大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_11);
                University uni_12 = new University(null, "Universiti Teknologi PETRONAS (UTP)", "جامعة بتروناس", "国油科技大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_12);
                University uni_13 = new University(null, "Infrastructure University Kuala Lumpur", "جامعة IUKL", "马来亚大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_13);
                University uni_14 = new University(null, "Lincoln University College", "جامعة لينكولن", "林肯大学学院", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_14);
                University uni_15 = new University(null, "INTI International University", "جامعة INTI", "英迪国际大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_15);
                University uni_16 = new University(null, "Sunway University", "جامعة صنواي", "双威大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_16);
                University uni_17 = new University(null, "HELP University", "جامعة Help", "精英大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_17);
                University uni_18 = new University(null, "Universiti Tunku Abdul Rahman (UTAR)", "جامعة Utar", "拉曼大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_18);
                University uni_19 = new University(null, "University Malaysia of Computer Science & Engineering (UNIMY)", "جامعة UniMy", "马来西亚计算机科学与工程大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_19);
                University uni_20 = new University(null, "International Medical University (IMU)", "جامعة IMU", "国际医药大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_20);
                University uni_21 = new University(null, "Nilai University", "جامعة نيلاي", "汝来大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_21);
                University uni_22 = new University(null, "Geomatika University College", "جامعة Geomatika", "吉奥马提卡大学学院", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", true, true, 100);
                universityRepository.save(uni_22);
                University uni_23 = new University(null, "Heriot-Watt University Malaysia", "جامعة هيريوت وات", "赫瑞·瓦特大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_23);
                University uni_24 = new University(null, "Monash University Malaysia", "جامعة موناش", "莫纳什大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_24);
                University uni_25 = new University(null, "University of Nottingham Malaysia", "جامعة نوتنغهام", "诺丁汉大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_25);
                University uni_26 = new University(null, "International University of Malaya-Wales (IUMW)", "جامعة مالايا ويلز", "马来亚威尔士国际大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_26);
                University uni_27 = new University(null, "Universiti Teknologi Malaysia (UTM)", "جامعة UTM", "马来西亚理工大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_27);
                University uni_28 = new University(null, "Universiti Malaya (UM)", "جامعة مالايا", "马来亚大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_28);
                University uni_29 = new University(null, "Universiti Putra Malaysia (UPM)", "جامعة بوترا", "马来西亚博特拉大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_29);
                University uni_30 = new University(null, "Universiti Teknikal Malaysia Melaka (UTeM)", "جامعة ملاكا", "马六甲马来西亚技术大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_30);
                University uni_31 = new University(null, "Universiti Sains Malaysia (USM)", "جامعة العلوم", "马来西亚理科大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_31);
                University uni_32 = new University(null, "International Islamic University Malaysia (IIUM)", "الجامعة الاسلامية", "马来亚大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_32);
                University uni_33 = new University(null, "Universiti Kebangsaan Malaysia (UKM)", "الجامعة الوطنية", "马来西亚国立大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_33);
                University uni_34 = new University(null, "Universiti Malaysia Perlis (UniMAP)", "جامعة برليس", "马来西亚玻璃市大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_34);
                University uni_35 = new University(null, "Universiti Malaysia Sarawak (UNIMAS)", "جامعة ساراواك", "马来西亚砂拉越大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_35);
                University uni_36 = new University(null, "Universiti Teknologi MARA (UiTM)", "جامعة مارا", "玛拉工艺大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_36);
                University uni_37 = new University(null, "Universiti Utara Malaysia (UUM)", "جامعة اوتارا", "拉曼大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_37);
                University uni_38 = new University(null, "Universiti Tun Hussein Onn Malaysia (UTHM)", "جامعة UTHM", "马来西亚敦胡先翁大学", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo", false, true, 100);
                universityRepository.save(uni_38);

            }

            // Seed Consultants
            if (consultantRepository.count() == 0) {
                consultantRepository.saveAll(Arrays.asList(
                    new Consultant(null, "Eng. Abdullah Yousef", "المهندس عبدالله يوسف", "阿卜杜拉·优素福 工程师", "Academic Consultant", "مستشار أكاديمي", "学术顾问", "A", "60143240499")
                ));
            }

            // Seed Language Centers
            if (languageCenterRepository.count() == 0) {
                System.out.println("Seeding Language Centers...");
                LanguageCenter lc_0 = new LanguageCenter(null, "Excel Language Center", "معهد اكسل", "优秀语言中心 (Excel)", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_0);
                LanguageCenter lc_1 = new LanguageCenter(null, "Bright Language Center", "معهد برايت", "明亮语言中心 (Bright)", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_1);
                LanguageCenter lc_2 = new LanguageCenter(null, "IABT Malaysia", "معهد IABT", "IABT 语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_2);
                LanguageCenter lc_3 = new LanguageCenter(null, "ELC English Language Company", "معهد ELC", "ELC英语中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_3);
                LanguageCenter lc_4 = new LanguageCenter(null, "ELEC Language Center", "معهد ايليك", "ELEC 语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_4);
                LanguageCenter lc_5 = new LanguageCenter(null, "ELS Language Centers", "معهد ELS", "ELS 语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_5);
                LanguageCenter lc_6 = new LanguageCenter(null, "Big Ben Academy", "معهد بيج بين", "大本钟学院", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_6);
                LanguageCenter lc_7 = new LanguageCenter(null, "Stratford International Language Centre", "معهد ستراتفورد", "斯特拉特福国际语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_7);
                LanguageCenter lc_8 = new LanguageCenter(null, "Sheffield Academy", "اكاديمية شيفيلد", "谢菲尔德学院", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_8);
                LanguageCenter lc_9 = new LanguageCenter(null, "EMS Language Centre", "معهد EMS", "EMS 语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_9);
                LanguageCenter lc_10 = new LanguageCenter(null, "Britannia Language Centre", "معهد بريتانيا", "大不列颠语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_10);
                LanguageCenter lc_11 = new LanguageCenter(null, "Elite Linguistic Centre", "معهد ايليت", "精英语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_11);
                LanguageCenter lc_12 = new LanguageCenter(null, "Awesome English Language Center", "معهد اوسم", "Awesome 英语中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_12);
                LanguageCenter lc_13 = new LanguageCenter(null, "Wall Street English", "معهد wall street", "华尔街英语", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_13);
                LanguageCenter lc_14 = new LanguageCenter(null, "California KL Language Center", "معهد كاليفورنيا", "加利福尼亚（吉隆坡）语言中心", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_14);
                LanguageCenter lc_15 = new LanguageCenter(null, "Erican College", "معهد ايريكان", "爱立肯学院", "Kuala Lumpur", "كوالالمبور", "吉隆坡", "Kuala Lumpur", "default_logo");
                languageCenterRepository.save(lc_15);

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

            // Seed Dynamic Pages
            if (dynamicPageRepository.count() == 0) {
                DynamicPage p1 = new DynamicPage(null, "about-us", true, "About Us", "من نحن", "关于我们", "<h3>Welcome to YA ALMA</h3><p>We are the leading educational consultancy.</p>", "<h3>مرحباً بكم</h3><p>نحن رواد الاستشارات التعليمية</p>", "<h3>欢迎</h3><p>我们是领先的教育咨询公司</p>");
                dynamicPageRepository.save(p1);
            }

            // Seed AppConfig Navigation Array
            if (appConfigRepository.count() == 0) {
                String defaultNav = "[\n" +
                    "  { \"ar\": \"الرئيسية\", \"en\": \"Home\", \"zh\": \"首页\", \"href\": \"/\" },\n" +
                    "  { \"ar\": \"الجامعات\", \"en\": \"Universities\", \"zh\": \"大学\", \"href\": \"/universities\", \"categories\": [] },\n" +
                    "  { \"ar\": \"تواصل معنا\", \"en\": \"Contact Us\", \"zh\": \"联系我们\", \"href\": \"/contact\" }\n" +
                    "]";
                appConfigRepository.save(new AppConfig(null, "mainNavigation", defaultNav));
            }

            System.out.println("--- DATABASE SEEDING COMPLETED ---");
        };
    }
}
