export type MenuItem = {
  ar: string;
  en: string;
  zh: string; ms?: string;
  href: string;
  isHeader?: boolean;
};

export type MenuCategory = {
  ar: string;
  en: string;
  zh: string; ms?: string;
  items: MenuItem[];
};

export type MegaMenu = {
  ar: string;
  en: string;
  zh: string; ms?: string;
  href: string;
  categories?: MenuCategory[];
  items?: MenuItem[]; // For simple dropdowns
};

export const mainNavigation: MegaMenu[] = [
  { ar: "الرئيسية", en: "Home", zh: "首页", href: "/" },
  {
    ar: "الجامعات",
    en: "Universities",
    zh: "大学",
    href: "/universities",
    categories: [
      {
        ar: "جامعات خاصة",
        en: "Private Universities",
        zh: "私立大学",
        items: [
          { ar: "جامعة تايلور", en: "Taylor's University", zh: "泰莱大学 (Taylor's)", href: "/universities/1" },
          { ar: "جامعة APU", en: "APU University", zh: "亚太科技大学 (APU)", href: "/universities/2" },
          { ar: "جامعة الملتيميديا", en: "Multimedia University (MMU)", zh: "多媒体大学 (MMU)", href: "/universities/3" },
          { ar: "جامعة UCSI", en: "UCSI University", zh: "思特雅大学 (UCSI)", href: "/universities/4" },
          { ar: "جامعة تناجا", en: "Uniten University", zh: "国家能源大学 (Uniten)", href: "/universities/5" },
          { ar: "جامعة MSU", en: "MSU University", zh: "管理与科学大学 (MSU)", href: "/universities/6" },
          { ar: "جامعة سيتي", en: "City University", zh: "城市大学 (City)", href: "/universities/7" },
          { ar: "جامعة سايبرجايا", en: "Cyberjaya University", zh: "赛城大学 (Cyberjaya)", href: "/universities/8" },
          { ar: "جامعة سيجي", en: "SEGi University", zh: "世纪大学 (SEGi)", href: "/universities/9" },
          { ar: "جامعة ماهسا", en: "MAHSA University", zh: "玛莎大学 (MAHSA)", href: "/universities/10" },
          { ar: "جامعة ليمكوكوينج", en: "Limkokwing University", zh: "林国荣大学 (Limkokwing)", href: "/universities/11" },
          { ar: "جامعة كوالالمبور (UniKL)", en: "UniKL University", zh: "吉隆坡大学 (UniKL)", href: "/universities/12" },
          { ar: "جامعة بتروناس (UTP)", en: "UTP University", zh: "国油大学 (UTP)", href: "/universities/13" },
          { ar: "جامعة IUKL", en: "IUKL University", zh: "吉隆坡建设大学 (IUKL)", href: "/universities/14" },
          { ar: "جامعة لينكولن", en: "Lincoln University", zh: "林肯大学 (Lincoln)", href: "/universities/15" },
          { ar: "جامعة إنتي", en: "INTI University", zh: "英迪大学 (INTI)", href: "/universities/16" },
          { ar: "جامعة صنواي", en: "Sunway University", zh: "双威大学 (Sunway)", href: "/universities/17" },
          { ar: "جامعة هيلب", en: "Help University", zh: "精英大学 (HELP)", href: "/universities/18" },
          { ar: "جامعة يوتار (UTAR)", en: "UTAR University", zh: "拉曼大学 (UTAR)", href: "/universities/19" },
          { ar: "جامعة يونيمي (UniMy)", en: "UniMy University", zh: "马来西亚计算机大学 (UniMy)", href: "/universities/20" },
          { ar: "جامعة IMU", en: "IMU University", zh: "国际医药大学 (IMU)", href: "/universities/21" },
          { ar: "جامعة نيلاي", en: "Nilai University", zh: "汝来大学 (Nilai)", href: "/universities/22" },
          { ar: "جامعة جيوماتيكا", en: "Geomatika University", zh: "地质测绘大学 (Geomatika)", href: "/universities/23" },
        ]
      },
      {
        ar: "جامعات أجنبية",
        en: "Foreign Universities",
        zh: "外国大学",
        items: [
          { ar: "جامعة هيريوت وات", en: "Heriot-Watt University", zh: "赫瑞瓦特大学 (Heriot-Watt)", href: "/universities/35" },
          { ar: "جامعة موناش", en: "Monash University", zh: "莫纳什大学 (Monash)", href: "/universities/33" },
          { ar: "جامعة نوتنغهام", en: "Nottingham University", zh: "诺丁汉大学 (Nottingham)", href: "/universities/34" },
          { ar: "جامعة مالايا ويلز (IUMW)", en: "IUMW University", zh: "马来亚威尔士国际大学 (IUMW)", href: "/universities/36" },
        ]
      },
      {
        ar: "جامعات حكومية",
        en: "Public Universities",
        zh: "公立大学",
        items: [
          { ar: "جامعة UTM", en: "UTM University", zh: "马来西亚理工大学 (UTM)", href: "/universities/24" },
          { ar: "جامعة مالايا (UM)", en: "UM University", zh: "马来亚大学 (UM)", href: "/universities/37" },
          { ar: "جامعة بوترا (UPM)", en: "UPM University", zh: "博特拉大学 (UPM)", href: "/universities/38" },
          { ar: "جامعة يوتيم (UTeM)", en: "UTeM University", zh: "马六甲技术大学 (UTeM)", href: "/universities/27" },
          { ar: "جامعة العلوم (USM)", en: "USM University", zh: "理科大学 (USM)", href: "/universities/39" },
          { ar: "الجامعة الإسلامية (IIUM)", en: "IIUM University", zh: "国际伊斯兰大学 (IIUM)", href: "/universities/25" },
          { ar: "الجامعة الوطنية (UKM)", en: "UKM University", zh: "国民大学 (UKM)", href: "/universities/26" },
          { ar: "جامعة بيرليس (UniMAP)", en: "UniMAP University", zh: "玻璃市大学 (UniMAP)", href: "/universities/28" },
          { ar: "جامعة ساراواك (UNIMAS)", en: "UNIMAS University", zh: "砂拉越大学 (UNIMAS)", href: "/universities/29" },
          { ar: "جامعة مارا (UiTM)", en: "UiTM University", zh: "玛拉工艺大学 (UiTM)", href: "/universities/30" },
          { ar: "جامعة أوتارا (UUM)", en: "UUM University", zh: "北方大学 (UUM)", href: "/universities/31" },
          { ar: "جامعة يو تي أتش إم (UTHM)", en: "UTHM University", zh: "敦胡先翁大学 (UTHM)", href: "/universities/32" },
        ]
      }
    ]
  },
  {
    ar: "تخصصات",
    en: "Specializations",
    zh: "专业方向",
    href: "/courses",
    categories: [
      {
        ar: "علوم الحاسوب وتقنية المعلومات",
        en: "Computer Science & IT",
        zh: "计算机科学与信息技术",
        items: [
          { ar: "هندسة البرمجيات", en: "Software Engineering", zh: "软件工程", href: "/specializations/software-engineering" },
          { ar: "تحليل البيانات", en: "Data Analysis", zh: "数据分析", href: "/specializations/data-analytics" },
          { ar: "الامن السيبراني", en: "Cyber Security", zh: "网络安全", href: "/specializations/cyber-security" },
          { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence", zh: "人工智能", href: "/specializations/artificial-intelligence" },
          { ar: "علوم البيانات", en: "Data Science", zh: "数据科学", href: "/specializations/data-science" },
          { ar: "علوم الحاسوب", en: "Computer Science", zh: "计算机科学", href: "/specializations/computer-science" },
          { ar: "تكنولوجيا المعلومات", en: "Information Technology", zh: "信息技术", href: "/specializations/information-technology" },
        ]
      },
      {
        ar: "الهندسة",
        en: "Engineering",
        zh: "工程",
        items: [
          { ar: "هندسة الحاسوب", en: "Computer Engineering", zh: "计算机工程", href: "/specializations/computer-engineering" },
          { ar: "الهندسة الطبية الحيوية", en: "Biomedical Engineering", zh: "生物医学工程", href: "/specializations/biomedical-engineering" },
          { ar: "هندسة الميكاترونكس", en: "Mechatronics Engineering", zh: "机电工程", href: "/specializations/mechatronics" },
          { ar: "هندسة الروبوتات", en: "Robotics Engineering", zh: "机器人工程", href: "/specializations/robotics" },
          { ar: "الهندسة المعمارية", en: "Architecture", zh: "建筑学", href: "/specializations/architecture" },
          { ar: "الهندسة الكيميائية", en: "Chemical Engineering", zh: "化学工程", href: "/specializations/chemical-engineering" },
          { ar: "الهندسة الميكانيكية", en: "Mechanical Engineering", zh: "机械工程", href: "/specializations/mechanical-engineering" },
          { ar: "الهندسة المدنية", en: "Civil Engineering", zh: "土木工程", href: "/specializations/civil-engineering" },
          { ar: "الهندسة الكهربائية", en: "Electrical Engineering", zh: "电气工程", href: "/specializations/electrical-engineering" },
        ]
      },
      {
        ar: "العلوم الإدارية والاقتصاد",
        en: "Management & Economics",
        zh: "管理与经济",
        items: [
          { ar: "ادارة الاعمال والتجارة", en: "Business Administration", zh: "工商管理", href: "/specializations/business-administration" },
          { ar: "التسويق", en: "Marketing", zh: "市场营销", href: "/specializations/marketing" },
          { ar: "المحاسبة", en: "Accounting", zh: "会计学", href: "/specializations/accounting" },
          { ar: "الاقتصاد", en: "Economics", zh: "经济学", href: "/specializations/economics" },
          { ar: "السياحة والفندقة", en: "Tourism & Hospitality", zh: "旅游与酒店管理", href: "/specializations/tourism-hospitality" },
        ]
      },
      {
        ar: "الطب والصحة",
        en: "Medicine & Health",
        zh: "医学与健康",
        items: [
          { ar: "طب وجراحة", en: "Medicine & Surgery", zh: "内科与外科", href: "/specializations/medicine" },
          { ar: "طب الاسنان", en: "Dentistry", zh: "牙科学", href: "/specializations/dentistry" },
          { ar: "الصيدلة", en: "Pharmacy", zh: "药学", href: "/specializations/pharmacy" },
          { ar: "التمريض", en: "Nursing", zh: "护理学", href: "/specializations/nursing" },
          { ar: "العلاج الطبيعي", en: "Physiotherapy", zh: "物理治疗", href: "/specializations/physiotherapy" },
        ]
      },
      {
        ar: "الفنون والتصميم",
        en: "Arts & Design",
        zh: "艺术与设计",
        items: [
          { ar: "التصميم الداخلي", en: "Interior Design", zh: "室内设计", href: "/specializations/interior-design" },
          { ar: "تصميم الجرافيك", en: "Graphic Design", zh: "平面设计", href: "/specializations/graphic-design" },
          { ar: "الرسوم المتحركة", en: "Animation", zh: "动画", href: "/specializations/animation" },
          { ar: "فنون الطهي", en: "Culinary Arts", zh: "烹饪艺术", href: "/specializations/culinary-arts" },
        ]
      },
      {
        ar: "برامج أخرى",
        en: "Other Programs",
        zh: "其他项目",
        items: [
          { ar: "دراسة القانون", en: "Law Degree", zh: "法学", href: "/specializations/law" },
          { ar: "السنة التحضيرية", en: "Foundation Year", zh: "预科", href: "/specializations/foundation-year" },
          { ar: "عن بعد", en: "Distance Learning", zh: "远程教育", href: "/specializations/distance-learning" },
        ]
      }
    ]
  },
  {
    ar: "معاهد اللغة",
    en: "Language Institutes",
    zh: "语言学院",
    href: "/language-centers",
    categories: [
      {
        ar: "جميع المعاهد",
        en: "All Institutes",
        zh: "所有学院",
        items: [
          { ar: "اكاديمية شيفيلد", en: "Sheffield Academy", zh: "谢菲尔德学院", href: "/language-centers/9" },
          { ar: "معهد ELC", en: "ELC English Language Company", zh: "ELC英语中心", href: "/language-centers/4" },
          { ar: "معهد ELS", en: "ELS Language Centers", zh: "ELS 语言中心", href: "/language-centers/6" },
          { ar: "معهد EMS", en: "EMS Language Centre", zh: "EMS 语言中心", href: "/language-centers/10" },
          { ar: "معهد IABT", en: "IABT Malaysia", zh: "IABT 语言中心", href: "/language-centers/3" },
          { ar: "معهد wall street", en: "Wall Street English", zh: "华尔街英语", href: "/language-centers/14" },
          { ar: "معهد اكسل / Excel", en: "Excel Language Center", zh: "优秀语言中心 (Excel)", href: "/language-centers/1" },
          { ar: "معهد اوسم", en: "Awesome English Language Center", zh: "Awesome 英语中心", href: "/language-centers/13" },
          { ar: "معهد ايريكان", en: "Erican College", zh: "爱立肯学院", href: "/language-centers/16" },
          { ar: "معهد ايليت", en: "Elite Linguistic Centre", zh: "精英语言中心", href: "/language-centers/12" },
          { ar: "معهد ايليك", en: "ELEC Language Center", zh: "ELEC 语言中心", href: "/language-centers/5" },
          { ar: "معهد برايت", en: "Bright Language Center", zh: "明亮语言中心 (Bright)", href: "/language-centers/2" },
          { ar: "معهد بريتانيا", en: "Britannia Language Centre", zh: "大不列颠语言中心", href: "/language-centers/11" },
          { ar: "معهد بيج بين", en: "Big Ben Academy", zh: "大本钟学院", href: "/language-centers/7" },
          { ar: "معهد ستراتفورد", en: "Stratford International Language Centre", zh: "斯特拉特福国际语言中心", href: "/language-centers/8" },
          { ar: "معهد كاليفورنيا", en: "California KL Language Center", zh: "加利福尼亚（吉隆坡）语言中心", href: "/language-centers/15" },
        ]
      }
    ]
  },

  { ar: "تواصل معنا", en: "Contact Us", zh: "联系我们", href: "/contact" },
  { ar: "كن شريكاً لنا", en: "Be our partner", zh: "成为我们的伙伴", href: "/contact" },
];
