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
          { ar: "جامعة تايلور / Taylor", en: "Taylor's University", zh: "泰莱大学 (Taylor's)", href: "/universities/1" },
          { ar: "جامعة APU", en: "APU University", zh: "亚太科技大学 (APU)", href: "/universities/2" },
          { ar: "جامعة الملتيميديا / MMU", en: "Multimedia University (MMU)", zh: "多媒体大学 (MMU)", href: "/universities/3" },
          { ar: "جامعة UCSI", en: "UCSI University", zh: "思特雅大学 (UCSI)", href: "/universities/4" },
          { ar: "جامعة تناجا / Uniten", en: "Uniten University", zh: "国家能源大学 (Uniten)", href: "/universities/5" },
          { ar: "جامعة MSU", en: "MSU University", zh: "管理与科学大学 (MSU)", href: "/universities/6" },
          { ar: "جامعة City", en: "City University", zh: "城市大学 (City)", href: "/universities/7" },
          { ar: "جامعة سايبرجايا / Cyberjaya", en: "Cyberjaya University", zh: "赛城大学 (Cyberjaya)", href: "/universities/8" },
          { ar: "جامعة سيجي / Segi", en: "SEGi University", zh: "世纪大学 (SEGi)", href: "/universities/9" },
          { ar: "جامعة ماهسا / MAHSA", en: "MAHSA University", zh: "玛莎大学 (MAHSA)", href: "/universities/10" },
          { ar: "جامعة ليمكوكوينج / Limkokwing", en: "Limkokwing University", zh: "林国荣大学 (Limkokwing)", href: "/universities/11" },
          { ar: "جامعة كوالالمبور / UniKL", en: "UniKL University", zh: "吉隆坡大学 (UniKL)", href: "/universities/12" },
          { ar: "جامعة بتروناس / UTP", en: "UTP University", zh: "国油大学 (UTP)", href: "/universities/13" },
          { ar: "جامعة IUKL", en: "IUKL University", zh: "吉隆坡建设大学 (IUKL)", href: "/universities/14" },
          { ar: "جامعة لينكولن / Lincoln", en: "Lincoln University", zh: "林肯大学 (Lincoln)", href: "/universities/15" },
          { ar: "جامعة INTI", en: "INTI University", zh: "英迪大学 (INTI)", href: "/universities/16" },
          { ar: "جامعة صنواي / Sunway", en: "Sunway University", zh: "双威大学 (Sunway)", href: "/universities/17" },
          { ar: "جامعة Help", en: "Help University", zh: "精英大学 (HELP)", href: "/universities/18" },
          { ar: "جامعة Utar", en: "UTAR University", zh: "拉曼大学 (UTAR)", href: "/universities/19" },
          { ar: "جامعة UniMy", en: "UniMy University", zh: "马来西亚计算机大学 (UniMy)", href: "/universities/20" },
          { ar: "جامعة IMU", en: "IMU University", zh: "国际医药大学 (IMU)", href: "/universities/21" },
          { ar: "جامعة نيلاي / Nilai", en: "Nilai University", zh: "汝来大学 (Nilai)", href: "/universities/22" },
          { ar: "جامعة Geomatika", en: "Geomatika University", zh: "地质测绘大学 (Geomatika)", href: "/universities/23" },
        ]
      },
      {
        ar: "جامعات اجنبية",
        en: "Foreign Universities",
        zh: "外国大学",
        items: [
          { ar: "جامعة هيريوت وات / Heriot-Watt", en: "Heriot-Watt University", zh: "赫瑞瓦特大学 (Heriot-Watt)", href: "/universities/35" },
          { ar: "جامعة موناش / Monash", en: "Monash University", zh: "莫纳什大学 (Monash)", href: "/universities/33" },
          { ar: "جامعة نوتنغهام / Nottingham", en: "Nottingham University", zh: "诺丁汉大学 (Nottingham)", href: "/universities/34" },
          { ar: "جامعة مالايا ويلز / IUMW", en: "IUMW University", zh: "马来亚威尔士国际大学 (IUMW)", href: "/universities/36" },
        ]
      },
      {
        ar: "جامعات حكومية",
        en: "Public Universities",
        zh: "公立大学",
        items: [
          { ar: "جامعة UTM", en: "UTM University", zh: "马来西亚理工大学 (UTM)", href: "/universities/24" },
          { ar: "جامعة مالايا / UM", en: "UM University", zh: "马来亚大学 (UM)", href: "/universities/21" },
          { ar: "جامعة بوترا / UPM", en: "UPM University", zh: "博特拉大学 (UPM)", href: "/universities/22" },
          { ar: "جامعة ملاكا / UTeM", en: "UTeM University", zh: "马六甲技术大学 (UTeM)", href: "/universities/27" },
          { ar: "جامعة العلوم / USM", en: "USM University", zh: "理科大学 (USM)", href: "/universities/23" },
          { ar: "الجامعة الاسلامية / IIUM", en: "IIUM University", zh: "国际伊斯兰大学 (IIUM)", href: "/universities/25" },
          { ar: "الجامعة الوطنية / UKM", en: "UKM University", zh: "国民大学 (UKM)", href: "/universities/26" },
          { ar: "جامعة برليس / UniMAP", en: "UniMAP University", zh: "玻璃市大学 (UniMAP)", href: "/universities/28" },
          { ar: "جامعة ساراواك / UNIMAS", en: "UNIMAS University", zh: "砂拉越大学 (UNIMAS)", href: "/universities/29" },
          { ar: "جامعة مارا / UiTM", en: "UiTM University", zh: "玛拉工艺大学 (UiTM)", href: "/universities/30" },
          { ar: "جامعة اوتارا / UUM", en: "UUM University", zh: "北方大学 (UUM)", href: "/universities/31" },
          { ar: "جامعة / UTHM", en: "UTHM University", zh: "敦胡先翁大学 (UTHM)", href: "/universities/32" },
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
          { ar: "الهندسة المعمارية", en: "Architecture", zh: "建筑学", href: "/courses?search=architecture" },
          { ar: "الهندسة الكيميائية", en: "Chemical Engineering", zh: "化学工程", href: "/courses?search=chemical" },
          { ar: "الهندسة الميكانيكية", en: "Mechanical Engineering", zh: "机械工程", href: "/courses?search=mechanical" },
          { ar: "الهندسة المدنية", en: "Civil Engineering", zh: "土木工程", href: "/courses?search=civil" },
          { ar: "الهندسة الكهربائية", en: "Electrical Engineering", zh: "电气工程", href: "/courses?search=electrical" },
        ]
      },
      {
        ar: "العلوم الإدارية والاقتصاد",
        en: "Management & Economics",
        zh: "管理与经济",
        items: [
          { ar: "ادارة الاعمال والتجارة", en: "Business Administration", zh: "工商管理", href: "/specializations/business-administration" },
          { ar: "التسويق", en: "Marketing", zh: "市场营销", href: "/courses?search=marketing" },
          { ar: "المحاسبة", en: "Accounting", zh: "会计学", href: "/courses?search=accounting" },
          { ar: "الاقتصاد", en: "Economics", zh: "经济学", href: "/courses?search=economics" },
          { ar: "السياحة والفندقة", en: "Tourism & Hospitality", zh: "旅游与酒店管理", href: "/courses?search=tourism" },
        ]
      },
      {
        ar: "الطب والصحة",
        en: "Medicine & Health",
        zh: "医学与健康",
        items: [
          { ar: "طب وجراحة", en: "Medicine & Surgery", zh: "内科与外科", href: "/specializations/medicine" },
          { ar: "طب الاسنان", en: "Dentistry", zh: "牙科学", href: "/courses?search=dentistry" },
          { ar: "الصيدلة", en: "Pharmacy", zh: "药学", href: "/courses?search=pharmacy" },
          { ar: "التمريض", en: "Nursing", zh: "护理学", href: "/courses?search=nursing" },
          { ar: "العلاج الطبيعي", en: "Physiotherapy", zh: "物理治疗", href: "/courses?search=physiotherapy" },
        ]
      },
      {
        ar: "الفنون والتصميم",
        en: "Arts & Design",
        zh: "艺术与设计",
        items: [
          { ar: "التصميم الداخلي", en: "Interior Design", zh: "室内设计", href: "/courses?search=interior" },
          { ar: "تصميم الجرافيك", en: "Graphic Design", zh: "平面设计", href: "/courses?search=graphic" },
          { ar: "الرسوم المتحركة", en: "Animation", zh: "动画", href: "/courses?search=animation" },
          { ar: "فنون الطهي", en: "Culinary Arts", zh: "烹饪艺术", href: "/courses?search=culinary" },
        ]
      },
      {
        ar: "برامج أخرى",
        en: "Other Programs",
        zh: "其他项目",
        items: [
          { ar: "دراسة القانون", en: "Law Degree", zh: "法学", href: "/courses?search=law" },
          { ar: "السنة التحضيرية", en: "Foundation Year", zh: "预科", href: "/courses?search=foundation" },
          { ar: "عن بعد", en: "Distance Learning", zh: "远程教育", href: "/courses?search=distance" },
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
          { ar: "معهد اكسل / Excel", en: "Excel", zh: "Excel", href: "/language-centers/8" },
          { ar: "معهد برايت / Bright", en: "Bright", zh: "Bright", href: "/language-centers/9" },
          { ar: "معهد IABT", en: "IABT", zh: "IABT", href: "/language-centers/10" },
          { ar: "معهد ELC", en: "ELC", zh: "ELC", href: "/language-centers/2" },
          { ar: "معهد ايليك / ELEC", en: "ELEC", zh: "ELEC", href: "/language-centers/11" },
          { ar: "معهد ELS", en: "ELS", zh: "ELS", href: "/language-centers?search=els" },
          { ar: "معهد بيج بين / Big Ben", en: "Big Ben", zh: "Big Ben", href: "/language-centers/12" },
          { ar: "معهد ستراتفورد / Stratford", en: "Stratford", zh: "Stratford", href: "/language-centers/13" },
          { ar: "اكاديمية شيفيلد / Sheffield", en: "Sheffield", zh: "Sheffield", href: "/language-centers/14" },
          { ar: "معهد EMS", en: "EMS", zh: "EMS", href: "/language-centers/1" },
          { ar: "معهد بريتانيا / Britannia", en: "Britannia", zh: "Britannia", href: "/language-centers/15" },
          { ar: "معهد ايليت / Elit", en: "Elit", zh: "Elit", href: "/language-centers/16" },
          { ar: "معهد اوسم / Awesome", en: "Awesome", zh: "Awesome", href: "/language-centers/3" },
          { ar: "معهد وول ستريت / Wall Street", en: "Wall Street", zh: "Wall Street", href: "/language-centers/6" },
          { ar: "معهد كاليفورنيا / Californiakl", en: "Californiakl", zh: "Californiakl", href: "/language-centers/17" },
          { ar: "معهد ايريكان / Erican", en: "Erican", zh: "Erican", href: "/language-centers/18" },
        ]
      }
    ]
  },

  { ar: "تواصل معنا", en: "Contact Us", zh: "联系我们", href: "/contact" },
  { ar: "كن شريكاً لنا", en: "Be our partner", zh: "成为我们的伙伴", href: "/contact" },
];
