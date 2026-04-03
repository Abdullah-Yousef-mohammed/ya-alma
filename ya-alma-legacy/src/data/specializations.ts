export interface DegreeLevel {
  titleEn: string;
  titleAr: string;
  titleZh?: string;
  feesRangeEn: string;
  feesRangeAr: string;
  feesRangeZh?: string;
  durationEn: string;
  durationAr: string;
  durationZh?: string;
}

export interface TopUniversity {
  nameEn: string;
  nameAr: string;
  nameZh?: string;
  href: string;
  worldRanking: string;
  fieldRanking: string;
  annualFeesUSD: string;
  discountEn: string;
  discountAr: string;
  discountZh?: string;
}

export interface BudgetUniversity {
  nameEn: string;
  nameAr: string;
  nameZh?: string;
  href: string;
  annualFeesUSD: string;
}

export interface CourseYear {
  yearEn: string;
  yearAr: string;
  yearZh?: string;
  subjectsEn: string[];
  subjectsAr: string[];
  subjectsZh?: string[];
}

export interface CountryComparison {
  countryEn: string;
  countryAr: string;
  countryZh?: string;
  durationEn: string;
  durationAr: string;
  durationZh?: string;
  worldRanking: string;
  feesRangeEn: string;
  feesRangeAr: string;
  feesRangeZh?: string;
  livingCostEn: string;
  livingCostAr: string;
  livingCostZh?: string;
}

export interface SpotlightUniversity {
  nameEn: string;
  nameAr: string;
  nameZh?: string;
  href: string;
  descEn: string;
  descAr: string;
  descZh?: string;
}

export interface SpecializationData {
  slug: string;

  titleEn: string;
  titleAr: string;
  titleZh?: string;

  heroTaglineEn: string;
  heroTaglineAr: string;
  heroTaglineZh?: string;

  introEn: string;
  introAr: string;
  introZh?: string;

  degreeLevels: DegreeLevel[];

  topUniversities: TopUniversity[];
  budgetUniversities: BudgetUniversity[];

  courseYears: CourseYear[];

  careerJobsEn: string[];
  careerJobsAr: string[];
  careerJobsZh?: string[];

  seVsCs?: {
    questionEn: string;
    questionAr: string;
    questionZh?: string;
    sePointsEn: string[];
    sePointsAr: string[];
    sePointsZh?: string[];
    otherPointsEn: string[];
    otherPointsAr: string[];
    otherPointsZh?: string[];
    otherTitleEn: string;
    otherTitleAr: string;
    otherTitleZh?: string;
  };

  countryComparisons: CountryComparison[];
  spotlightUniversities: SpotlightUniversity[];

  searchQuery: string;
}

export const specializationsData: Record<string, SpecializationData> = {
  "software-engineering": {
    slug: "software-engineering",
    titleEn: "Study Software Engineering in Malaysia",
    titleAr: "دراسة هندسة البرمجيات في ماليزيا",
    heroTaglineEn: "Everything you need to know about Software Engineering — Best Universities — Prices — Cheapest Private Universities",
    heroTaglineAr: "كل ما تريد معرفته عن تخصص هندسة البرمجيات - أفضل الجامعات - الأسعار - أرخص الجامعات الخاصة لدراسة هندسة البرمجيات في ماليزيا",
    introEn: "Do you dream of becoming a professional software engineer, studying in a country that combines quality, international recognition, and affordable cost?\n\nThen Malaysian universities are your ideal destination!\n\nMalaysian universities not only offer globally recognized programs in Software Engineering, but also host hundreds of companies like HP, Dell, Intel, and Huawei, alongside hundreds of growing startups!",
    introAr: "هل تحلم بأن تصبح مهندس برمجيات محترف ، وتدرس في بلد يجمع بين الجودة ، الاعتراف العالمي ، والتكلفة المناسبة؟\n\nإذن قد تكون جامعات ماليزيا هي وجهتك المثالية!\n\nفجامعات ماليزيا لا تقدم فقط برامج معترف بها عالمياً في هندسة البرمجيات ، بل تحتضن أيضاً جانب شركات Intel ، Dell ، HP، Huawei ، إلى جانب مئات الشركات الناشئة التي تنمو بسرعة مذهلة!",
    degreeLevels: [
      {
        titleEn: "Diploma in Software Engineering",
        titleAr: "دبلوم في هندسة البرمجيات",
        feesRangeEn: "$1,927 - $10,650",
        feesRangeAr: "1,927 - 10,650 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Software Engineering",
        titleAr: "بكالوريوس في هندسة البرمجيات",
        feesRangeEn: "$2,979 - $12,250",
        feesRangeAr: "2,979 - 12,250 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Software Engineering",
        titleAr: "ماجستير في هندسة البرمجيات",
        feesRangeEn: "$3,276 - $9,700",
        feesRangeAr: "3,276 - 9,700 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Software Engineering",
        titleAr: "دكتوراة في هندسة البرمجيات",
        feesRangeEn: "$1,250 - $12,966",
        feesRangeAr: "1,250 - 12,966 دولار",
        durationEn: "2 - 3 Years",
        durationAr: "2 - 3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "301 - 350", annualFeesUSD: "$9,837", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$8,158", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "501 - 550", annualFeesUSD: "$8,292", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "-", annualFeesUSD: "$4,510", discountEn: "Public University", discountAr: "جامعة حكومية" },
      { nameEn: "Uniten University", nameAr: "جامعة Uniten", href: "/universities/5", worldRanking: "641 - 650", fieldRanking: "701 - 720", annualFeesUSD: "$6,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" }
    ],
    budgetUniversities: [
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/6", annualFeesUSD: "$2,979" },
      { nameEn: "UniMy University", nameAr: "جامعة UniMy", href: "/universities/7", annualFeesUSD: "$3,651" },
      { nameEn: "Nilai University", nameAr: "جامعة Nilai", href: "/universities/8", annualFeesUSD: "$4,000" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Database Systems", "Python Programming", "Introduction to Networking", "Software Engineering Basics", "Computer Architecture"],
        subjectsAr: ["أنظمة قواعد البيانات", "البرمجة باستخدام Python", "مقدمة في الشبكات", "مبادئ هندسة البرمجيات", "هندسة وتنظيم الكمبيوتر"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Data Structures", "Requirements Engineering", "Object-Oriented Programming", "Software Architecture & Testing"],
        subjectsAr: ["هياكل البيانات", "هندسة المتطلبات", "البرمجة الشيئية", "معمارية واختبار البرمجيات"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Graduation Project", "Computer Security", "Professional Training", "Software Quality"],
        subjectsAr: ["مشروع التخرج", "أمن الكمبيوتر", "التدريب المهني", "جودة البرمجيات"]
      }
    ],
    careerJobsEn: ["IT Engineer", "IT Consultant", "Software Engineer", "Game Developer", "Software Designer", "Java J2EE Developer", "Graphics Designer", "Network Engineer", "Computer Specialist"],
    careerJobsAr: ["مهندس تكنولوجيا المعلومات", "مستشار تكنولوجيا المعلومات", "مهندس برمجيات", "مطور ألعاب", "مصمم برمجيات", "مطور Java J2EE", "مصمم جرافيك", "مطور مهندس شبكات", "أخصائي اتصالات الحاسوب"],
    seVsCs: {
      questionEn: "Software Engineering or Computer Science?",
      questionAr: "هندسة البرمجيات أم علوم الحاسوب؟",
      sePointsEn: ["Focuses on design, testing, and software maintenance", "Emphasizes the applied side and teaches concepts like project management, systems engineering, and quality assurance"],
      sePointsAr: ["تهتم بتصميم وبناء واختبار وصيانة البرمجيات.", "يُركّز التخصص على الجانب التطبيقي ويُدرّس مفاهيم مثل إدارة المشاريع، هندسة الأنظمة، ضمان الجودة"],
      otherTitleEn: "Computer Science",
      otherTitleAr: "علوم الحاسوب",
      otherPointsEn: ["Addresses the theoretical side of computing science", "Focuses on algorithms, data structures, programming languages, and the mathematics behind computers"],
      otherPointsAr: ["يتناول الجانب النظري لعلم الحوسبة", "يركّز على الخوارزميات، هياكل البيانات، لغات البرمجة، والنظريات الرياضية وراء تشغيل الحواسيب"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 - 4 Years", durationAr: "3 - 4 سنوات", worldRanking: "60", feesRangeEn: "$2,979 - $12,250", feesRangeAr: "2,979 - 12,250$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 - 4 Years", durationAr: "3 - 4 سنوات", worldRanking: "2", feesRangeEn: "$15,538 - $43,797", feesRangeAr: "15,538 - 43,797 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" },
      { countryEn: "Australia", countryAr: "أستراليا", durationEn: "3 - 4 Years", durationAr: "3 - 4 سنوات", worldRanking: "13", feesRangeEn: "$17,143 - $32,497", feesRangeAr: "17,143 - 32,497 دولار", livingCostEn: "$1,200 - $2,000/month", livingCostAr: "1,200 - 2,000 دولار/شهر" },
      { countryEn: "United States", countryAr: "الولايات المتحدة", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "1", feesRangeEn: "$9,858 - $43,900", feesRangeAr: "9,858 - 43,900 دولار", livingCostEn: "$1,000 - $2,500/month", livingCostAr: "1,000 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة Taylor's",
        href: "/universities/1",
        descEn: "Taylor's University has a strong academic accreditation and internationally recognized curricula in Software Engineering (MQA certified). Taylor's provides technology training opportunities with partnerships with universities in Australia, UK and other countries to complete studies at a partner university abroad!",
        descAr: "لدى جامعة Taylor's اعتماد أكاديمي قوي ومناهج معترف بها دولياً ، وتخصص هندسة البرمجيات في جامعة Taylor's مُعتمد من هيئة الاعتماد الماليزية (MQA). توفر Taylor's فرص تدريب تكنولوجية مع شراكات مع جامعات في أستراليا والمملكة المتحدة وغيرها لإكمال الدراسة في جامعة شريكة في الخارج!"
      },
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU is one of Malaysia's leading technology universities. Software Engineering at APU is backed by a global tech curriculum and has direct industry ties with top companies. APU graduates have an extremely high employment rate.",
        descAr: "تُعدّ جامعة APU من أبرز جامعات التكنولوجيا في ماليزيا. تخصص هندسة البرمجيات في APU مدعوم بمنهج تقني عالمي وارتباطات مباشرة مع كبرى الشركات. كما يتمتع خريجو APU بمعدل توظيف مرتفع للغاية."
      }
    ],
    searchQuery: "Software"
  },

  "cyber-security": {
    slug: "cyber-security",
    titleEn: "Study Cyber Security in Malaysia",
    titleAr: "دراسة الأمن السيبراني في ماليزيا",
    heroTaglineEn: "Everything you need to know about Cyber Security — Best Universities — Prices — Top Certifications",
    heroTaglineAr: "كل ما تريد معرفته عن الأمن السيبراني - أفضل الجامعات - الأسعار - أبرز الشهادات",
    introEn: "With the rapid spread of digital threats, Cyber Security has become one of the most important and demanded specializations globally. Malaysia has positioned itself as a major cybersecurity hub in Southeast Asia, making it an excellent destination to study this critical field.",
    introAr: "مع الانتشار المتسارع للتهديدات الرقمية، أصبح الأمن السيبراني من أكثر التخصصات أهمية وطلباً على مستوى العالم. وقد مثّلت ماليزيا نفسها مركزاً رئيسياً للأمن السيبراني في جنوب شرق آسيا، مما يجعلها وجهة ممتازة لدراسة هذا المجال الحيوي.",
    degreeLevels: [
      {
        titleEn: "Diploma in Cyber Security",
        titleAr: "دبلوم في الأمن السيبراني",
        feesRangeEn: "$2,000 - $8,500",
        feesRangeAr: "2,000 - 8,500 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Cyber Security",
        titleAr: "بكالوريوس في الأمن السيبراني",
        feesRangeEn: "$3,500 - $13,000",
        feesRangeAr: "3,500 - 13,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Cyber Security",
        titleAr: "ماجستير في الأمن السيبراني",
        feesRangeEn: "$4,000 - $10,500",
        feesRangeAr: "4,000 - 10,500 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Cyber Security",
        titleAr: "دكتوراة في الأمن السيبراني",
        feesRangeEn: "$2,000 - $14,000",
        feesRangeAr: "2,000 - 14,000 دولار",
        durationEn: "2 - 3 Years",
        durationAr: "2 - 3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$9,100", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$10,200", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$8,800", discountEn: "Scholarship Available", discountAr: "خصم متاح" }
    ],
    budgetUniversities: [
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/6", annualFeesUSD: "$3,200" },
      { nameEn: "UniMy University", nameAr: "جامعة UniMy", href: "/universities/7", annualFeesUSD: "$3,900" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Introduction to Cyber Security", "Python for Security", "Networking Fundamentals", "Operating Systems"],
        subjectsAr: ["مقدمة في الأمن السيبراني", "بايثون للأمن", "أساسيات الشبكات", "أنظمة التشغيل"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Ethical Hacking", "Cryptography", "Malware Analysis", "Digital Forensics"],
        subjectsAr: ["الاختراق الأخلاقي", "التشفير", "تحليل البرامج الضارة", "الجنائيات الرقمية"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Penetration Testing", "Incident Response", "Security Architecture", "Graduation Project"],
        subjectsAr: ["اختبار الاختراق", "الاستجابة للحوادث", "هندسة الأمان", "مشروع التخرج"]
      }
    ],
    careerJobsEn: ["Cyber Security Analyst", "Ethical Hacker", "Security Architect", "Penetration Tester", "Digital Forensics Expert", "Network Security Engineer", "CISO"],
    careerJobsAr: ["محلل أمن سيبراني", "مخترق أخلاقي", "مهندس أمني", "مختبر اختراق", "خبير جنائيات رقمية", "مهندس أمن الشبكات", "مدير أمن المعلومات"],
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 - 4 Years", durationAr: "3 - 4 سنوات", worldRanking: "60", feesRangeEn: "$3,500 - $13,000", feesRangeAr: "3,500 - 13,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 - 4 Years", durationAr: "3 - 4 سنوات", worldRanking: "2", feesRangeEn: "$18,000 - $45,000", feesRangeAr: "18,000 - 45,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU is recognized as a top Cyber Security university in Asia. APU's program includes EC-Council certifications bundled directly into the curriculum, meaning graduates leave with internationally recognized professional certificates (CEH, CHFI) on top of their degree!",
        descAr: "تُعدّ APU من أبرز جامعات الأمن السيبراني في آسيا. يشتمل برنامج APU على شهادات EC-Council مدمجة مباشرة في المنهج الدراسي، مما يعني أن الخريجين يغادرون وبحوزتهم شهادات مهنية معترف بها دولياً (CEH، CHFI) إضافة إلى شهادتهم الجامعية!"
      }
    ],
    searchQuery: "Cyber"
  },

  "business-administration": {
    slug: "business-administration",
    titleEn: "Study Business Administration in Malaysia",
    titleAr: "دراسة إدارة الأعمال في ماليزيا",
    heroTaglineEn: "Complete guide to Business Administration degrees in Malaysia — Rankings, Fees & Dual Awards",
    heroTaglineAr: "الدليل الكامل لشهادات إدارة الأعمال في ماليزيا - التصنيفات والرسوم والشهادات المزدوجة",
    introEn: "Business Administration is one of the most versatile and globally demanded degrees. Malaysia offers an exceptional environment for business studies, with its diverse multicultural economy, strategic location in Southeast Asia, and access to dual-award programs with top UK and Australian universities.",
    introAr: "إدارة الأعمال هي واحدة من أكثر الشهادات تنوعاً والأكثر طلباً عالمياً. تقدم ماليزيا بيئة استثنائية لدراسة الأعمال، مع اقتصادها المتعدد الثقافات، وموقعها الاستراتيجي في جنوب شرق آسيا، والوصول إلى برامج الشهادات المزدوجة مع أفضل الجامعات البريطانية والأسترالية.",
    degreeLevels: [
      {
        titleEn: "Foundation in Business",
        titleAr: "سنة تأسيسية في الأعمال",
        feesRangeEn: "$1,500 - $5,000",
        feesRangeAr: "1,500 - 5,000 دولار",
        durationEn: "1 Year",
        durationAr: "1 سنة"
      },
      {
        titleEn: "Bachelor's in Business Administration (BBA)",
        titleAr: "بكالوريوس إدارة الأعمال (BBA)",
        feesRangeEn: "$2,500 - $11,000",
        feesRangeAr: "2,500 - 11,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "MBA - Master of Business Administration",
        titleAr: "ماجستير إدارة الأعمال (MBA)",
        feesRangeEn: "$4,000 - $18,500",
        feesRangeAr: "4,000 - 18,500 دولار",
        durationEn: "1 - 2 Years",
        durationAr: "1 - 2 سنوات"
      },
      {
        titleEn: "PhD in Business",
        titleAr: "دكتوراة في الأعمال",
        feesRangeEn: "$3,000 - $15,000",
        feesRangeAr: "3,000 - 15,000 دولار",
        durationEn: "3 - 5 Years",
        durationAr: "3 - 5 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "Top 200", annualFeesUSD: "$8,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$7,200", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "800+", fieldRanking: "-", annualFeesUSD: "$5,800", discountEn: "Scholarship Available", discountAr: "خصم متاح" }
    ],
    budgetUniversities: [
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/6", annualFeesUSD: "$2,500" },
      { nameEn: "Nilai University", nameAr: "جامعة Nilai", href: "/universities/8", annualFeesUSD: "$3,000" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Principles of Management", "Business Economics", "Accounting Fundamentals", "Business Communication"],
        subjectsAr: ["مبادئ الإدارة", "اقتصاد الأعمال", "أساسيات المحاسبة", "التواصل التجاري"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Marketing Management", "Financial Management", "Human Resource Management", "Business Law"],
        subjectsAr: ["إدارة التسويق", "الإدارة المالية", "إدارة الموارد البشرية", "قانون الأعمال"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Strategic Management", "Entrepreneurship", "International Business", "Business Capstone Project"],
        subjectsAr: ["الإدارة الاستراتيجية", "ريادة الأعمال", "الأعمال الدولية", "مشروع التخرج"]
      }
    ],
    careerJobsEn: ["Business Manager", "Entrepreneur", "Financial Analyst", "Marketing Director", "HR Manager", "Operations Manager", "Business Consultant", "Product Manager"],
    careerJobsAr: ["مدير أعمال", "رائد أعمال", "محلل مالي", "مدير تسويق", "مدير موارد بشرية", "مدير عمليات", "مستشار أعمال", "مدير منتجات"],
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "60", feesRangeEn: "$2,500 - $11,000", feesRangeAr: "2,500 - 11,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "2", feesRangeEn: "$14,000 - $38,000", feesRangeAr: "14,000 - 38,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة Taylor's",
        href: "/universities/1",
        descEn: "Taylor's School of Business ranks among the best in Asia. Their BBA program offers an optional Dual Award with Sheffield Hallam University (UK), meaning graduates receive TWO degrees: one from Taylor's and one from a UK university.",
        descAr: "تُصنَّف كلية الأعمال في Taylor's ضمن الأفضل في آسيا. يوفر برنامج BBA خياراً للحصول على شهادة مزدوجة مع جامعة Sheffield Hallam (المملكة المتحدة)، مما يعني أن الخريجين يحصلون على شهادتين: واحدة من Taylor's وأخرى من جامعة بريطانية."
      }
    ],
    searchQuery: "Business"
  },

  "medicine": {
    slug: "medicine",
    titleEn: "Study Medicine & Surgery (MBBS) in Malaysia",
    titleAr: "دراسة الطب والجراحة (MBBS) في ماليزيا",
    heroTaglineEn: "Complete guide to MBBS programs in Malaysia — Accreditation, Fees & Clinical Training",
    heroTaglineAr: "الدليل الكامل لبرامج MBBS في ماليزيا - الاعتماد والرسوم والتدريب السريري",
    introEn: "Studying Medicine (MBBS) in Malaysia gives you access to world-class teaching hospitals and clinics, rigorous internationally recognized curricula, and extensive hands-on clinical rotations. Malaysian medical degrees are strictly regulated and universally respected, providing a direct pathway to global medical residency.",
    introAr: "تمنحك دراسة الطب (MBBS) في ماليزيا إمكانية الوصول إلى مستشفيات تعليمية وعيادات عالمية المستوى، ومناهج دراسية صارمة معترف بها دولياً، وتدريبات سريرية مكثفة. تُحظى الشهادات الطبية الماليزية بتنظيم صارم واحترام عالمي، وتوفر مساراً مباشراً للإقامة الطبية العالمية.",
    degreeLevels: [
      {
        titleEn: "Foundation in Science (Pre-Medicine)",
        titleAr: "سنة تأسيسية في العلوم (قبل الطب)",
        feesRangeEn: "$2,000 - $6,500",
        feesRangeAr: "2,000 - 6,500 دولار",
        durationEn: "1 Year",
        durationAr: "1 سنة"
      },
      {
        titleEn: "MBBS - Bachelor of Medicine, Bachelor of Surgery",
        titleAr: "MBBS - بكالوريوس الطب والجراحة",
        feesRangeEn: "$9,000 - $22,000 / year",
        feesRangeAr: "9,000 - 22,000 دولار / سنة",
        durationEn: "5 Years",
        durationAr: "5 سنوات"
      },
      {
        titleEn: "Master's (Specialization / Residency)",
        titleAr: "الماجستير (التخصص / الإقامة)",
        feesRangeEn: "$5,000 - $15,000",
        feesRangeAr: "5,000 - 15,000 دولار",
        durationEn: "2 - 4 Years",
        durationAr: "2 - 4 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "RCSI & UCD Malaysia", nameAr: "جامعة RCSI & UCD", href: "/universities/10", worldRanking: "-", fieldRanking: "Top 200", annualFeesUSD: "$18,000", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Monash University Malaysia", nameAr: "جامعة Monash ماليزيا", href: "/universities/11", worldRanking: "37", fieldRanking: "Top 50", annualFeesUSD: "$21,000", discountEn: "Merit Scholarships", discountAr: "منح استحقاق" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "Top 80", annualFeesUSD: "$5,200", discountEn: "Public University", discountAr: "جامعة حكومية" }
    ],
    budgetUniversities: [
      { nameEn: "AIMST University", nameAr: "جامعة AIMST", href: "/universities/12", annualFeesUSD: "$9,500" },
      { nameEn: "Lincoln University College", nameAr: "جامعة Lincoln", href: "/universities/13", annualFeesUSD: "$10,200" }
    ],
    courseYears: [
      {
        yearEn: "Year 1 & 2 (Pre-Clinical)",
        yearAr: "السنة 1 و 2 (ما قبل الإكلينيكي)",
        subjectsEn: ["Anatomy", "Physiology", "Biochemistry", "Medical Ethics", "Pharmacology Introduction"],
        subjectsAr: ["علم التشريح", "علم وظائف الأعضاء", "الكيمياء الحيوية", "أخلاقيات الطب", "مقدمة في الصيدلة"]
      },
      {
        yearEn: "Year 3, 4 & 5 (Clinical Rotations)",
        yearAr: "السنة 3، 4 و 5 (التدريب الإكلينيكي)",
        subjectsEn: ["Internal Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Psychiatry", "Emergency Medicine"],
        subjectsAr: ["الطب الباطني", "الجراحة", "طب الأطفال", "التوليد وأمراض النساء", "الطب النفسي", "طب الطوارئ"]
      }
    ],
    careerJobsEn: ["Medical Doctor (GP)", "Surgeon", "Pediatrician", "Cardiologist", "Radiologist", "Psychiatrist", "Emergency Physician", "Medical Researcher"],
    careerJobsAr: ["طبيب عام", "جراح", "طبيب أطفال", "طبيب قلب", "طبيب أشعة", "طبيب نفسي", "طبيب طوارئ", "باحث طبي"],
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "5 Years", durationAr: "5 سنوات", worldRanking: "60", feesRangeEn: "$9,000 - $22,000/yr", feesRangeAr: "9,000 - 22,000$/سنة", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "5 - 6 Years", durationAr: "5 - 6 سنوات", worldRanking: "2", feesRangeEn: "$30,000 - $60,000/yr", feesRangeAr: "30,000 - 60,000$/سنة", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "Monash University Malaysia",
        nameAr: "جامعة Monash ماليزيا",
        href: "/universities/11",
        descEn: "Monash Malaysia's Faculty of Medicine is ranked top 50 globally. Students complete their first 2 years in Malaysia and can transfer to the main Monash campus in Melbourne, Australia for clinical years. The degree is recognized in over 30 countries.",
        descAr: "تُصنَّف كلية الطب في Monash ماليزيا ضمن أفضل 50 دولياً. يُكمل الطلاب أول سنتين في ماليزيا ويمكنهم الانتقال إلى الحرم الرئيسي لـ Monash في ملبورن، أستراليا لسنوات التدريب السريري. الشهادة معترف بها في أكثر من 30 دولة."
      }
    ],
    searchQuery: "Medicine"
  },

  "data-analytics": {
    slug: "data-analytics",
    titleEn: "Study Data Analytics in Malaysia",
    titleAr: "دراسة تخصص تحليل البيانات في ماليزيا",
    heroTaglineEn: "Everything you need to know about Data Analytics — Best Universities — Prices — Cheapest Private Universities",
    heroTaglineAr: "كل ما تريد معرفته عن تخصص تحليل البيانات - الجامعات - الأسعار - أرخص الجامعات الخاصة في ماليزيا",
    introEn: "Do you want to become a data analytics expert and contribute to smart decision-making in organizations? Malaysia offers advanced curricula combining theoretical and practical aspects, allowing you to learn the latest tools.",
    introAr: "هل تريد أن تصبح خبيراً في تحليل البيانات وتساهم في صناعة قرارات ذكية داخل الشركات والمنظمات؟ ماليزيا تمنحك الطريق لذلك! فجامعات ماليزيا تقدم لك مناهج متقدمة في تحليل البيانات، تجمع بين الجانب النظري والعملي، وتتيح لك تعلم أحدث الأدوات.",
    degreeLevels: [
      {
        titleEn: "Diploma in Data Analytics",
        titleAr: "دبلوم في تحليل البيانات",
        feesRangeEn: "$2,000 - $5,750",
        feesRangeAr: "2,000 - 5,750 دولار",
        durationEn: "2 Years",
        durationAr: "2 سنوات"
      },
      {
        titleEn: "Bachelor's in Data Analytics",
        titleAr: "بكالوريوس في تحليل البيانات",
        feesRangeEn: "$3,625 - $10,525",
        feesRangeAr: "3,625 - 10,525 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Data Analytics",
        titleAr: "ماجستير في تحليل البيانات",
        feesRangeEn: "$4,875 - $12,075",
        feesRangeAr: "4,875 - 12,075 دولار",
        durationEn: "1 Year",
        durationAr: "1 سنة"
      },
      {
        titleEn: "PhD in Data Analytics",
        titleAr: "دكتوراه في تحليل البيانات",
        feesRangeEn: "$4,875 - $10,475",
        feesRangeAr: "4,875 - 10,475 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "-", annualFeesUSD: "$8,250", discountEn: "Not available", discountAr: "غير متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$11,625", discountEn: "Not available", discountAr: "غير متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001 - 1200", fieldRanking: "-", annualFeesUSD: "$6,425", discountEn: "Not available", discountAr: "غير متاح" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", worldRanking: "78", fieldRanking: "-", annualFeesUSD: "$5,446", discountEn: "Not available", discountAr: "غير متاح" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "61", fieldRanking: "-", annualFeesUSD: "$5,262", discountEn: "Not available", discountAr: "غير متاح" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,425" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,446" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", annualFeesUSD: "$5,400" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Principles of Computing", "Discrete Mathematics", "Python Programming", "Information Systems Fundamentals", "Professional Communication"],
        subjectsAr: ["مبادئ الحوسبة", "الرياضيات المتقطعة", "البرمجة بلغة (Python)", "أساسيات نظم المعلومات", "مهارات التواصل المهني"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Information Literacy", "Data Structures", "Fundamentals of Machine Learning", "Computer Systems Engineering"],
        subjectsAr: ["محو الأمية المعلوماتية", "هيكلة البيانات", "أساسيات التعلم الآلي", "هندسة نظم الحاسوب"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Advanced Data Visualization", "Operating Systems", "Network Technology", "Internship"],
        subjectsAr: ["تصور البيانات المتقدمة", "أنظمة التشغيل", "تقنية الشبكات", "التدريب العملي"]
      }
    ],
    careerJobsEn: ["Data Analyst", "BI Analyst", "Data Scientist", "Financial Analyst", "Marketing Analyst", "Data Engineer", "Operations Analyst", "Healthcare Data Analyst", "Research Analyst", "Data Visualization Specialist"],
    careerJobsAr: ["محلل بيانات", "محلل ذكاء أعمال", "عالم بيانات", "محلل مالي", "محلل تسويق", "مهندس بيانات", "محلل عمليات", "محلل بيانات الرعاية الصحية", "محلل أبحاث", "أخصائي تصور بيانات"],
    countryComparisons: [],
    spotlightUniversities: [],
    searchQuery: "Data"
  },
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    titleEn: "Study Artificial Intelligence in Malaysia",
    titleAr: "تخصص الذكاء الاصطناعي في ماليزيا",
    heroTaglineEn: "Everything you need to know about Artificial Intelligence — Best Universities — Prices — Complete Guide",
    heroTaglineAr: "كل ما تريد معرفته عن تخصص الذكاء الاصطناعي - أفضل الجامعات - الأسعار - الدليل الشامل في ماليزيا",
    introEn: "Artificial Intelligence (AI) is transforming the world as we know it. By studying AI in Malaysia, you get a world-class education bridging theory and practical application, equipping you to build smart systems, machine learning models, and next-generation technologies at an affordable cost.",
    introAr: "الذكاء الاصطناعي (AI) يغير العالم كما نعرفه. من خلال دراسة الذكاء الاصطناعي في ماليزيا، ستحصل على تعليم عالمي المستوى يربط بين النظرية والتطبيق العملي، مما يؤهلك لبناء أنظمة ذكية، نماذج تعلم آلي، وتقنيات الجيل القادم بتكلفة معقولة.",
    degreeLevels: [
      {
        titleEn: "Diploma in Artificial Intelligence",
        titleAr: "دبلوم في الذكاء الاصطناعي",
        feesRangeEn: "$2,500 - $6,000",
        feesRangeAr: "2,500 - 6,000 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Artificial Intelligence",
        titleAr: "بكالوريوس في الذكاء الاصطناعي",
        feesRangeEn: "$3,500 - $12,500",
        feesRangeAr: "3,500 - 12,500 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Artificial Intelligence",
        titleAr: "ماجستير في الذكاء الاصطناعي",
        feesRangeEn: "$4,500 - $11,000",
        feesRangeAr: "4,500 - 11,000 دولار",
        durationEn: "1 - 2 Years",
        durationAr: "1 - 2 سنوات"
      },
      {
        titleEn: "PhD in Artificial Intelligence",
        titleAr: "دكتوراة في الذكاء الاصطناعي",
        feesRangeEn: "$3,000 - $14,000",
        feesRangeAr: "3,000 - 14,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$11,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$9,000", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "-", annualFeesUSD: "$6,500", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "Top 80", annualFeesUSD: "$5,300", discountEn: "Public Uni", discountAr: "جامعة حكومية" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,500" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,500" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", annualFeesUSD: "$5,300" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Introduction to AI", "Python Programming", "Discrete Mathematics", "Algorithms and Data Structures", "Logic & Concepts"],
        subjectsAr: ["مقدمة في الذكاء الاصطناعي", "البرمجة باستخدام Python", "الرياضيات المتقطعة", "الخوارزميات وهياكل البيانات", "المنطق والمفاهيم"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Machine Learning", "Neural Networks", "Data Mining", "Human-Computer Interaction"],
        subjectsAr: ["التعلم الآلي", "الشبكات العصبية", "التنقيب عن البيانات", "التفاعل بين الإنسان والحاسوب"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Final Year Project"],
        subjectsAr: ["التعلم العميق", "معالجة اللغات الطبيعية (NLP)", "الرؤية الحاسوبية", "مشروع التخرج"]
      }
    ],
    careerJobsEn: ["AI Engineer", "Machine Learning Specialist", "Data Scientist", "NLP Engineer", "Robotics Scientist", "AI Researcher", "Business Intelligence Developer"],
    careerJobsAr: ["مهندس ذكاء اصطناعي", "أخصائي تعلم آلي", "عالم بيانات", "مهندس معالجة اللغات الطبيعية", "عالم روبوتات", "باحث ذكاء اصطناعي", "مطور ذكاء الأعمال"],
    seVsCs: {
      questionEn: "Artificial Intelligence vs Computer Science?",
      questionAr: "الذكاء الاصطناعي أم علوم الحاسوب؟",
      sePointsEn: ["Highly specialized in algorithms that mimic human intelligence", "Focuses deeply on Machine Learning, Neural Networks, and NLP", "Demands strong statistical and probabilistic mathematics"],
      sePointsAr: ["متخصص بشكل كبير في الخوارزميات التي تحاكي الذكاء البشري", "يركز بعمق على التعلم الآلي، الشبكات العصبية، ومعالجة اللغات الطبيعية", "يتطلب رياضيات قوية في الإحصاء والاحتمالات"],
      otherTitleEn: "Computer Science",
      otherTitleAr: "علوم الحاسوب",
      otherPointsEn: ["A broader field covering software engineering, networking, and more", "Teaches fundamental computational theory", "Offers general foundational knowledge before specializing"],
      otherPointsAr: ["مجال أوسع يغطي هندسة البرمجيات، الشبكات، والمزيد", "يعلم النظريات الحسابية الأساسية", "يقدم معرفة تأسيسية عامة قبل التخصص"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "60", feesRangeEn: "$3,500 - $12,500", feesRangeAr: "3,500 - 12,500$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "2", feesRangeEn: "$16,000 - $40,000", feesRangeAr: "16,000 - 40,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU stands as the definitive university for Artificial Intelligence in Malaysia. Their AI degree is uniquely designed to create world-class specialists and incorporates certifications from top global tech names.",
        descAr: "تُعدّ APU الجامعة الأمثل للذكاء الاصطناعي في ماليزيا. تم تصميم شهادة الذكاء الاصطناعي الخاصة بهم بشكل فريد لتخريج أخصائيين على مستوى عالمي، وتتضمن شهادات من أبرز شركات التقنية العالمية."
      }
    ],
    searchQuery: "Artificial Intelligence"
  },
  "data-science": {
    slug: "data-science",
    titleEn: "Study Data Science in Malaysia",
    titleAr: "تخصص علوم البيانات في ماليزيا",
    heroTaglineEn: "Master Data Science in Malaysia — Best Tech Universities — Fees — Comprehensive Guide",
    heroTaglineAr: "دراسة علوم البيانات ورسم المستقبل في ماليزيا - أفضل الجامعات - الأسعار - الدليل الشامل",
    introEn: "Data Science is the driving force behind modern business and technology. By studying Data Science in Malaysia, you immerse yourself in an environment filled with tech hubs, global corporations, and cutting-edge academic curricula. Malaysian universities offer world-class degrees combining programming, statistics, and domain expertise to solve complex real-world challenges.",
    introAr: "تعتبر علوم البيانات القوة الدافعة وراء الأعمال والتكنولوجيا الحديثة. من خلال دراسة علوم البيانات في ماليزيا، تنغمس في بيئة مليئة بالمراكز التقنية والشركات العالمية والمناهج الأكاديمية المتطورة. تقدم الجامعات الماليزية شهادات عالمية المستوى تجمع بين البرمجة، الإحصاء، وخبرات المجال لحل التحديات المعقدة في العالم الحقيقي.",
    degreeLevels: [
      {
        titleEn: "Diploma in Data Science",
        titleAr: "دبلوم في علوم البيانات",
        feesRangeEn: "$2,200 - $5,500",
        feesRangeAr: "2,200 - 5,500 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Data Science",
        titleAr: "بكالوريوس في علوم البيانات",
        feesRangeEn: "$3,800 - $11,500",
        feesRangeAr: "3,800 - 11,500 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Data Science",
        titleAr: "ماجستير في علوم البيانات",
        feesRangeEn: "$4,500 - $12,000",
        feesRangeAr: "4,500 - 12,000 دولار",
        durationEn: "1 - 2 Years",
        durationAr: "1 - 2 سنوات"
      },
      {
        titleEn: "PhD in Data Science / Computing",
        titleAr: "دكتوراة في علوم البيانات",
        feesRangeEn: "$3,500 - $13,500",
        feesRangeAr: "3,500 - 13,500 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$11,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$9,200", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "-", annualFeesUSD: "$6,500", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "Monash University Malaysia", nameAr: "جامعة موناش ماليزيا", href: "/universities/33", worldRanking: "37", fieldRanking: "Top 50", annualFeesUSD: "$13,000", discountEn: "Merit Grants", discountAr: "منح استحقاق" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,500" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,500" },
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/7", annualFeesUSD: "$3,900" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Introduction to Data Science", "Calculus & Linear Algebra", "Python Programming", "Database Systems", "Statistics Fundamentals"],
        subjectsAr: ["مقدمة في علوم البيانات", "حساب التفاضل والتكامل والجبر الخطي", "البرمجة باستخدام Python", "أنظمة قواعد البيانات", "أساسيات الإحصاء"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Machine Learning", "Data Visualization", "Big Data Analytics", "Applied Probability", "Cloud Computing"],
        subjectsAr: ["التعلم الآلي", "تصور البيانات", "تحليل البيانات الضخمة (Big Data)", "الاحتمالات التطبيقية", "الحوسبة السحابية"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Deep Learning & Neural Networks", "Advanced Data Mining", "Data Science Ethics", "Final Year Project", "Internship"],
        subjectsAr: ["التعلم العميق والشبكات العصبية", "التنقيب المتقدم في البيانات", "أخلاقيات علوم البيانات", "مشروع التخرج", "التدريب المهني"]
      }
    ],
    careerJobsEn: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Business Intelligence Analyst", "Data Engineer", "Operations Research Analyst", "Big Data Architect"],
    careerJobsAr: ["عالم بيانات", "مهندس تعلم آلي", "محلل بيانات", "محلل ذكاء الأعمال", "مهندس بيانات", "محلل بحوث العمليات", "مهندس البيانات الضخمة"],
    seVsCs: {
      questionEn: "Data Science vs Data Analytics?",
      questionAr: "علوم البيانات أم تحليل البيانات؟",
      sePointsEn: ["Creates predictive models using Machine Learning", "Focuses deeply on statistics, programming, and algorithms", "Aims to forecast future trends and automate insight generation"],
      sePointsAr: ["تقوم بإنشاء نماذج تنبؤية باستخدام التعلم الآلي", "تركز بعمق على الإحصاء والبرمجة والخوارزميات", "تهدف إلى التنبؤ بالاتجاهات المستقبلية وأتمتة استخراج الرؤى"],
      otherTitleEn: "Data Analytics",
      otherTitleAr: "تحليل البيانات",
      otherPointsEn: ["Examines historical data to answer specific questions", "Uses tools like Excel, SQL, and Business Intelligence software", "Has less emphasis on heavy coding and building new ML models"],
      otherPointsAr: ["تفحص البيانات التاريخية للإجابة على أسئلة محددة", "تستخدم أدوات مثل Excel و SQL وبرامج ذكاء الأعمال", "تركيزها أقل على البرمجة المكثفة وبناء نماذج التعلم الآلي الجديدة"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "60", feesRangeEn: "$3,800 - $13,000", feesRangeAr: "3,800 - 13,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "2", feesRangeEn: "$18,000 - $45,000", feesRangeAr: "18,000 - 45,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU stands out with its globally recognized Data Science programs, complete with external industry certifications (e.g. TIBCO and SAS). APU students regularly win top tech awards internationally.",
        descAr: "تبرز APU ببرامجها في علوم البيانات المعترف بها عالمياً، بالإضافة إلى شهادات مهنية خارجية مثل TIBCO و SAS، كما يحصد طلابها بانتظام جوائز دولية كبرى في مجال التكنولوجيا."
      },
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة الملتيميديا (MMU)",
        href: "/universities/9",
        descEn: "MMU provides excellent value for Data Science. Founded by Telekom Malaysia, the university sits directly within Cyberjaya - Malaysia's silicon valley.",
        descAr: "توفر جامعة الملتيميديا للمواضيع التقنية وعلوم البيانات قيمة ممتازة. كونها تأسست من قبل Telekom Malaysia وهي تقع داخل سايبرجايا التي تعتبر وادي السيليكون الماليزي، مما يوفر بيئة استثنائية."
      }
    ],
    searchQuery: "Data Science"
  },
  "computer-science": {
    slug: "computer-science",
    titleEn: "Study Computer Science in Malaysia",
    titleAr: "تخصص علوم الحاسوب في ماليزيا",
    heroTaglineEn: "Everything about studying Computer Science in Malaysia — Best Tech Universities — Fees — Complete Guide",
    heroTaglineAr: "دليلك الشامل لدراسة علوم الحاسوب في ماليزيا - أفضل الجامعات وأنسبها - الأسعار - المميزات",
    introEn: "Computer Science is the foundation of the digital age. By studying Computer Science in Malaysia, you get an exceptional blend of theoretical knowledge and practical engineering skills at a highly affordable cost. Malaysian universities partner with global tech giants to provide you with the latest in software development, algorithms, and system design.",
    introAr: "علوم الحاسوب هي حجر الأساس للعصر الرقمي. من خلال دراسة علوم الحاسوب في ماليزيا، ستحصل على مزيج استثنائي من المعرفة النظرية والمهارات الهندسية العملية بتكلفة مناسبة جداً. تعقد الجامعات الماليزية شراكات مع عمالقة التقنية العالميين لتزويدك بأحدث ما توصل إليه تطوير البرمجيات والخوارزميات وتصميم الأنظمة.",
    degreeLevels: [
      {
        titleEn: "Diploma in Computer Science",
        titleAr: "دبلوم في علوم الحاسوب",
        feesRangeEn: "$2,000 - $5,000",
        feesRangeAr: "2,000 - 5,000 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Computer Science",
        titleAr: "بكالوريوس في علوم الحاسوب",
        feesRangeEn: "$3,500 - $11,000",
        feesRangeAr: "3,500 - 11,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Computer Science",
        titleAr: "ماجستير في علوم الحاسوب",
        feesRangeEn: "$4,000 - $10,500",
        feesRangeAr: "4,000 - 10,500 دولار",
        durationEn: "1 - 2 Years",
        durationAr: "1 - 2 سنوات"
      },
      {
        titleEn: "PhD in Computer Science",
        titleAr: "دكتوراة في علوم الحاسوب",
        feesRangeEn: "$3,000 - $12,000",
        feesRangeAr: "3,000 - 12,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$11,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$9,000", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "-", annualFeesUSD: "$6,500", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "Top 80", annualFeesUSD: "$5,300", discountEn: "Public Uni", discountAr: "جامعة حكومية" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,500" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,500" },
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/7", annualFeesUSD: "$3,900" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Introduction to Programming", "Computer Architecture", "Discrete Mathematics", "Operating Systems Fundamentals", "Database Concepts"],
        subjectsAr: ["مقدمة في البرمجة", "هندسة الحاسوب", "الرياضيات المتقطعة", "أساسيات أنظمة التشغيل", "مفاهيم قواعد البيانات"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Object-Oriented Programming", "Algorithms & Data Structures", "Software Engineering", "Computer Networks", "Web Development"],
        subjectsAr: ["البرمجة كائنية التوجه", "الخوارزميات وهياكل البيانات", "هندسة البرمجيات", "شبكات الحاسوب", "تطوير الويب"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Artificial Intelligence Basics", "Cyber Security", "Distributed Systems", "Final Year Project", "Professional Internship"],
        subjectsAr: ["أساسيات الذكاء الاصطناعي", "الأمن السيبراني", "الأنظمة الموزعة", "مشروع التخرج", "التدريب المهني"]
      }
    ],
    careerJobsEn: ["Software Developer", "Systems Analyst", "Database Administrator", "Network Engineer", "IT Consultant", "Web Developer", "Cloud Architect"],
    careerJobsAr: ["مطور برمجيات", "محلل نظم", "مدير قواعد بيانات", "مهندس شبكات", "مستشار تكنولوجيا المعلومات", "مطور ويب", "مهندس حوسبة سحابية"],
    seVsCs: {
      questionEn: "Computer Science vs Software Engineering?",
      questionAr: "علوم الحاسوب أم هندسة البرمجيات؟",
      sePointsEn: ["Focuses extensively on the mathematical and theoretical foundations of computing", "Ideal for students interested in how computers work at a foundational level", "Covers algorithms, machine learning, and hardware interaction"],
      sePointsAr: ["تركز بشكل مكثف على الأسس الرياضية والنظرية للحوسبة", "مثالية للطلاب المهتمين بكيفية عمل الحواسيب على المستوى التأسيسي", "تغطي الخوارزميات، التعلم الآلي، والتفاعل مع الأجهزة"],
      otherTitleEn: "Software Engineering",
      otherTitleAr: "هندسة البرمجيات",
      otherPointsEn: ["Focuses on the practical application of building and maintaining software systems", "Emphasizes project management, software testing, and architecture", "Geared towards developing scalable commercial applications"],
      otherPointsAr: ["تركز على التطبيق العملي لبناء وصيانة أنظمة البرمجيات", "تؤكد على إدارة المشاريع، اختبار البرمجيات، وهندسة النظم", "تتجه نحو تطوير تطبيقات تجارية قابلة للتوسع"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "60", feesRangeEn: "$3,500 - $11,000", feesRangeAr: "3,500 - 11,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "2", feesRangeEn: "$15,000 - $40,000", feesRangeAr: "15,000 - 40,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU is Malaysia's premier technology university, offering multiple specialized tracks within its Computer Science and IT degrees. Known for boasting a 100% employability rate.",
        descAr: "جامعة APU هي الجامعة التقنية الرائدة في ماليزيا، حيث تقدم مسارات متخصصة متعددة ضمن درجات علوم الحاسوب وتقنية المعلومات. وتُعرف بمعدل توظيف يبلغ 100٪."
      },
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة الملتيميديا (MMU)",
        href: "/universities/9",
        descEn: "Being one of the oldest private tech universities in the country, MMU has a vast alumni network and strong ties with the telecommunications sector.",
        descAr: "باعتبارها واحدة من أقدم الجامعات التقنية الخاصة في البلاد، تمتلك جامعة الملتيميديا شبكة خريجين واسعة وعلاقات قوية مع قطاع الاتصالات."
      }
    ],
    searchQuery: "Computer Science"
  },
  "information-technology": {
    slug: "information-technology",
    titleEn: "Study Information Technology in Malaysia",
    titleAr: "تخصص تكنولوجيا المعلومات في ماليزيا",
    heroTaglineEn: "Everything about studying Information Technology in Malaysia — Best Tech Universities — Fees — Complete Guide",
    heroTaglineAr: "دليلك الشامل لدراسة تكنولوجيا المعلومات (IT) في ماليزيا - أفضل الجامعات وأنسبها - الأسعار - المميزات",
    introEn: "Information Technology is the backbone of modern infrastructure. By studying IT in Malaysia, you equip yourself with the practical skills needed to build, manage, and maintain enterprise computing systems. Malaysian IT degrees are highly industry-driven, preparing you for seamless entry into the global workforce at an affordable cost.",
    introAr: "تعتبر تكنولوجيا المعلومات (IT) العمود الفقري للبنية التحتية الحديثة. من خلال دراسة تكنولوجيا المعلومات في ماليزيا، فإنك تزود نفسك بالمهارات العملية اللازمة لبناء وإدارة وصيانة أنظمة الحوسبة المؤسسية. درجات الـ IT الماليزية مدفوعة بقوة باحتياجات الصناعة، مما يؤهلك لدخول سوق العمل العالمي بسلاسة وبتكلفة منخفضة.",
    degreeLevels: [
      {
        titleEn: "Diploma in Information Technology",
        titleAr: "دبلوم في تكنولوجيا المعلومات",
        feesRangeEn: "$2,000 - $4,800",
        feesRangeAr: "2,000 - 4,800 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Information Technology",
        titleAr: "بكالوريوس في تكنولوجيا المعلومات",
        feesRangeEn: "$3,500 - $11,000",
        feesRangeAr: "3,500 - 11,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master's in Information Technology",
        titleAr: "ماجستير في تكنولوجيا المعلومات",
        feesRangeEn: "$4,000 - $10,500",
        feesRangeAr: "4,000 - 10,500 دولار",
        durationEn: "1 - 2 Years",
        durationAr: "1 - 2 سنوات"
      },
      {
        titleEn: "PhD in Information Technology",
        titleAr: "دكتوراة في تكنولوجيا المعلومات",
        feesRangeEn: "$3,000 - $12,000",
        feesRangeAr: "3,000 - 12,000 دولار",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$11,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$9,000", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "-", annualFeesUSD: "$6,500", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", worldRanking: "78", fieldRanking: "-", annualFeesUSD: "$5,500", discountEn: "Available", discountAr: "متاح" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,500" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,500" },
      { nameEn: "City University", nameAr: "جامعة City", href: "/universities/7", annualFeesUSD: "$3,900" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Introduction to IT", "Web Technologies", "IT Fundamentals", "Database Basics", "Communication Skills"],
        subjectsAr: ["مقدمة في تقنية المعلومات", "تقنيات الويب", "أساسيات تقنية المعلومات", "أساسيات قواعد البيانات", "مهارات التواصل"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Systems Analysis & Design", "Network Technologies", "E-Commerce", "IT Security", "Project Management"],
        subjectsAr: ["تحليل النظم وتصميمها", "تقنيات الشبكات", "التجارة الإلكترونية", "أمن تكنولوجيا المعلومات", "إدارة المشاريع"]
      },
      {
        yearEn: "Year 3",
        yearAr: "السنة الثالثة",
        subjectsEn: ["Cloud Computing", "Enterprise Systems", "IT Innovation", "Final Year Project", "Professional Internship"],
        subjectsAr: ["الحوسبة السحابية", "أنظمة المؤسسات", "ابتكارات تقنية المعلومات", "مشروع التخرج", "التدريب المهني"]
      }
    ],
    careerJobsEn: ["IT Manager", "Network Administrator", "Systems Engineer", "Cloud Solutions Architect", "Database Manager", "Tech Support Specialist"],
    careerJobsAr: ["مدير تقنية معلومات", "مسؤول شبكات", "مهندس أنظمة", "معمار حلول سحابية", "مدير قواعد بيانات", "أخصائي دعم فني"],
    seVsCs: {
      questionEn: "Information Technology vs Computer Science?",
      questionAr: "تكنولوجيا المعلومات أم علوم الحاسوب؟",
      sePointsEn: ["Focuses on practical implementation to support business needs", "Deals heavily with networking, database deployment, and network security", "Uses existing technologies to build holistic solutions"],
      sePointsAr: ["تركز على التطبيق العملي لدعم احتياجات الأعمال", "تتعامل بكثافة مع الشبكات ونشر قواعد البيانات والأمن السيبراني", "تستخدم التقنيات الموجودة لبناء حلول متكاملة"],
      otherTitleEn: "Computer Science",
      otherTitleAr: "علوم الحاسوب",
      otherPointsEn: ["Focuses on mathematical theory and computation algorithms", "Delves into the 'why' behind programming languages and hardware", "Aims to develop entirely new software frameworks and AI pipelines"],
      otherPointsAr: ["تركز على النظرية الرياضية وخوارزميات الحوسبة", "تتعمق في طبيعة عمل لغات البرمجة والأجهزة", "تهدف إلى تطوير أطر برمجية جديدة بالكامل و مسارات الذكاء الاصطناعي"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "60", feesRangeEn: "$3,500 - $11,000", feesRangeAr: "3,500 - 11,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", durationEn: "3 Years", durationAr: "3 سنوات", worldRanking: "2", feesRangeEn: "$15,000 - $40,000", feesRangeAr: "15,000 - 40,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU is Malaysia's premier technology university, offering multiple specialized tracks within its Computer Science and IT degrees. Known for boasting a 100% employability rate.",
        descAr: "جامعة APU هي الجامعة التقنية الرائدة في ماليزيا، حيث تقدم مسارات متخصصة متعددة ضمن درجات علوم الحاسوب وتقنية المعلومات. وتُعرف بمعدل توظيف يبلغ 100٪."
      },
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي (SEGi)",
        href: "/universities/8",
        descEn: "SEGi offers a fantastic blend of affordability and strong industry-partnered IT courses, making it a very popular choice.",
        descAr: "تقدم جامعة SEGi مزيجاً من التكلفة المعقولة والدورات القوية لدراسة تقنية المعلومات المرتبطة بقطاع الصناعة، مما يجعلها خياراً شائعاً للغاية."
      }
    ],
    searchQuery: "Information Technology"
  },
  "computer-engineering": {
    slug: "computer-engineering",
    titleEn: "Study Computer Engineering in Malaysia",
    titleAr: "تخصص هندسة الحاسوب في ماليزيا",
    heroTaglineEn: "Comprehensive Guide to Computer Engineering in Malaysia — Universities, Costs & Requirements",
    heroTaglineAr: "الدليل الشامل لدراسة هندسة الحاسوب في ماليزيا - أفضل الجامعات، التكاليف والشروط",
    introEn: "Computer Engineering merges electronic engineering with computer sciences, empowering you to design and build both cutting-edge hardware and optimal software. By studying in Malaysia, you will gain hands-on access to advanced microprocessor labs and real-world industrial projects, heavily guided by the Malaysian Board of Engineers (BEM) and international Washington Accord standards.",
    introAr: "تدمج هندسة الحاسوب بين الهندسة الإلكترونية وعلوم الحاسوب، مما يمنحك القدرة على تصميم وبناء كل من الأجهزة المتطورة والبرمجيات المثالية. من خلال الدراسة في ماليزيا، ستحصل على إمكانية الوصول العملي إلى مختبرات المعالجات الدقيقة المتقدمة والمشاريع الصناعية الحقيقية، مسترشداً بمجلس المهندسين الماليزي (BEM) ومعايير اتفاقية واشنطن (Washington Accord) المرموقة.",
    degreeLevels: [
      {
        titleEn: "Diploma in Computer Engineering",
        titleAr: "دبلوم في هندسة الحاسوب",
        feesRangeEn: "$2,500 - $6,000",
        feesRangeAr: "2,500 - 6,000 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Computer Engineering",
        titleAr: "بكالوريوس في هندسة الحاسوب",
        feesRangeEn: "$4,000 - $13,500",
        feesRangeAr: "4,000 - 13,500 دولار",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      },
      {
        titleEn: "Master's in Computer Engineering",
        titleAr: "ماجستير في هندسة الحاسوب",
        feesRangeEn: "$4,500 - $11,000",
        feesRangeAr: "4,500 - 11,000 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Computer Engineering",
        titleAr: "دكتوراة في هندسة الحاسوب",
        feesRangeEn: "$3,500 - $14,000",
        feesRangeAr: "3,500 - 14,000 دولار",
        durationEn: "3 - 4 Years",
        durationAr: "3 - 4 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$12,500", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "Top 300", annualFeesUSD: "$6,800", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "Top 50", annualFeesUSD: "$6,300", discountEn: "Public Uni", discountAr: "جامعة حكومية" },
      { nameEn: "Uniten University", nameAr: "جامعة Uniten", href: "/universities/5", worldRanking: "641-650", fieldRanking: "-", annualFeesUSD: "$6,500", discountEn: "Energy Background", discountAr: "تركز على الطاقة" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,800" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,800" },
      { nameEn: "IUKL University", nameAr: "جامعة IUKL", href: "/universities/14", annualFeesUSD: "$4,500" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Engineering Mathematics", "Circuit Analysis", "Digital Logic Design", "C/C++ Programming", "Physics for Engineers"],
        subjectsAr: ["الرياضيات الهندسية", "تحليل الدوائر", "تصميم المنطق الرقمي", "البرمجة بلغة C/C++", "الفيزياء للمهندسين"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Microprocessors & Microcontrollers", "Embedded Systems", "Data Structures & Algorithms", "Signals & Systems", "Electrical Measurements"],
        subjectsAr: ["المعالجات الدقيقة والمتحكمات", "الأنظمة المدمجة", "هياكل البيانات والخوارزميات", "الإشارات والأنظمة", "القياسات الكهربائية"]
      },
      {
        yearEn: "Year 3 & 4",
        yearAr: "السنة الثالثة والرابعة",
        subjectsEn: ["VLSI Design", "Digital Signal Processing", "Computer Networks", "Robotics Basics", "Final Year Engineering Project", "Industrial Training (Internship)"],
        subjectsAr: ["تصميم الأنظمة المتكاملة الواسعة (VLSI)", "معالجة الإشارات الرقمية", "شبكات الحاسوب", "أساسيات الروبوتات", "مشروع التخرج الهندسي", "التدريب الصناعي (العملي)"]
      }
    ],
    careerJobsEn: ["Computer Hardware Engineer", "Embedded Systems Developer", "Network Architect", "Firmware Engineer", "Systems Integrator", "IoT Developer", "Electronics Engineer"],
    careerJobsAr: ["مهندس أجهزة حاسوب", "مطور أنظمة مدمجة", "معمار شبكات", "مهندس برامج ثابتة (Firmware)", "مكامل أنظمة", "مطور إنترنت الأشياء (IoT)", "مهندس إلكترونيات"],
    seVsCs: {
      questionEn: "Computer Engineering vs Computer Science?",
      questionAr: "هندسة الحاسوب أم علوم الحاسوب؟",
      sePointsEn: ["Focuses intensely on hardware and the integration of hardware with low-level software", "Studies microchips, electronics, and digital circuits", "Often requires a 4-year degree (B.Eng) to meet Washington Accord requirements"],
      sePointsAr: ["تركز بشكل مكثف على الأجهزة وتكامل الأجهزة مع البرامج ذات المستوى المنخفض (Low-level)", "تدرس الرقائق الدقيقة، الإلكترونيات، والدوائر الرقمية", "تتطلب غالباً شهادة مدتها 4 سنوات (B.Eng) لتلبية متطلبات اتفاقية واشنطن"],
      otherTitleEn: "Computer Science",
      otherTitleAr: "علوم الحاسوب",
      otherPointsEn: ["Focuses exclusively on software systems, coding algorithms, and pure computational theory", "Deals minimally with physical computer hardware design", "Usually a 3-year degree program (BSc)"],
      otherPointsAr: ["تركز حصرياً على أنظمة البرمجيات، خوارزميات الترميز، ونظرية الحوسبة البحتة", "تتعامل بأدنى حد مع التصميم المادي لأجهزة الحاسوب", "عادةً ما يكون برنامجاً دراسياً مدته 3 سنوات (BSc)"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "60", feesRangeEn: "$4,000 - $13,500", feesRangeAr: "4,000 - 13,500$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "USA", countryAr: "الولايات المتحدة", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "1", feesRangeEn: "$25,000 - $60,000", feesRangeAr: "25,000 - 60,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "Offers dual degrees affiliated with De Montfort University (UK). APU features cutting-edge engineering labs for robotics and embedded systems.",
        descAr: "تقدم شهادات مزدوجة بالتعاون مع جامعة دي مونتفورت (المملكة المتحدة). تتميز APU بمختبرات هندسية متطورة للروبوتات والأنظمة المدمجة."
      },
      {
        nameEn: "UM University (Universiti Malaya)",
        nameAr: "جامعة UM (جامعة مالايا)",
        href: "/universities/4",
        descEn: "Malaysia's #1 public university with globally recognized engineering faculties and incredibly low tuition rates for a world top-100 institution.",
        descAr: "الجامعة الحكومية الأولى في ماليزيا مع كليات هندسة معترف بها عالمياً ورسوم دراسية منخفضة بشكل لا يصدق بالنسبة لمؤسسة ضمن أفضل 100 جامعة في العالم."
      }
    ],
    searchQuery: "Computer Engineering"
  },
  "biomedical-engineering": {
    slug: "biomedical-engineering",
    titleEn: "Study Biomedical Engineering in Malaysia",
    titleAr: "تخصص الهندسة الطبية الحيوية في ماليزيا",
    heroTaglineEn: "Master the Intersection of Medicine and Technology — Best Malaysian Universities & Guidelines",
    heroTaglineAr: "الدليل الشامل لدراسة الهندسة الطبية الحيوية في ماليزيا - تقاطع الطب والتكنولوجيا - أفضل الجامعات وأسعارها",
    introEn: "Biomedical Engineering bridges the gap between engineering sciences and healthcare. By studying this highly specialized degree in Malaysia, you will learn to design medical equipment, prosthetics, artificial organs, and sophisticated diagnostic tools. Malaysian top-tier universities possess world-class clinical laboratories and powerful affiliations with leading international medical tech companies.",
    introAr: "تسد الهندسة الطبية الحيوية الفجوة بين العلوم الهندسية والرعاية الصحية. من خلال دراسة هذه الدرجة المتخصصة للغاية في ماليزيا، ستتعلم تصميم المعدات الطبية، والأطراف الصناعية، والأعضاء التناسلية، وأدوات التشخيص الدقيقة. تمتلك الجامعات الماليزية المرموقة مختبرات سريرية عالمية المستوى وارتباطات قوية مع شركات التكنولوجيا الطبية الدولية الرائدة.",
    degreeLevels: [
      {
        titleEn: "Bachelor's in Biomedical Engineering",
        titleAr: "بكالوريوس في الهندسة الطبية الحيوية",
        feesRangeEn: "$4,500 - $14,000",
        feesRangeAr: "4,500 - 14,000 دولار",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      },
      {
        titleEn: "Master's in Biomedical Engineering",
        titleAr: "ماجستير في الهندسة الطبية الحيوية",
        feesRangeEn: "$5,000 - $12,500",
        feesRangeAr: "5,000 - 12,500 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Biomedical Engineering",
        titleAr: "دكتوراة في الهندسة الطبية الحيوية",
        feesRangeEn: "$4,000 - $15,000",
        feesRangeAr: "4,000 - 15,000 دولار",
        durationEn: "3 - 4 Years",
        durationAr: "3 - 4 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$12,800", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "UM University", nameAr: "جامعة UM", href: "/universities/4", worldRanking: "60", fieldRanking: "Top 100", annualFeesUSD: "$6,500", discountEn: "Public Uni", discountAr: "جامعة حكومية" },
      { nameEn: "UTM University", nameAr: "جامعة UTM", href: "/universities/24", worldRanking: "188", fieldRanking: "Top 150", annualFeesUSD: "$5,500", discountEn: "Public Uni", discountAr: "جامعة حكومية" }
    ],
    budgetUniversities: [
      { nameEn: "UTM University", nameAr: "جامعة UTM", href: "/universities/24", annualFeesUSD: "$5,500" },
      { nameEn: "Mahsa University", nameAr: "جامعة MAHSA", href: "/universities/10", annualFeesUSD: "$5,600" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Human Anatomy & Physiology", "Engineering Mathematics", "Biochemistry", "Physics for Health Sciences", "Computer Programming"],
        subjectsAr: ["تشريح وظائف الأعضاء (فسيولوجي)", "الرياضيات الهندسية", "الكيمياء الحيوية", "الفيزياء للعلوم الصحية", "برمجة الحاسب الآلي"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Biomechanics", "Biomedical Instrumentation", "Signals & Linear Systems", "Biomaterials", "Pathology for Engineers"],
        subjectsAr: ["الميكانيكا الحيوية", "الأجهزة الطبية الحيوية", "الإشارات والأنظمة الخطية", "المواد الحيوية", "علم الأمراض للمهندسين"]
      },
      {
        yearEn: "Year 3 & 4",
        yearAr: "السنة الثالثة والرابعة",
        subjectsEn: ["Medical Imaging Systems", "Tissue Engineering", "Clinical Engineering", "Rehabilitation Engineering", "Final Year Research Project", "Hospital / Industrial Internship"],
        subjectsAr: ["أنظمة التصوير الطبي", "هندسة الأنسجة", "الهندسة السريرية", "هندسة إعادة التأهيل", "مشروع بحث التخرج", "التدريب السريري/الصناعي في المستشفيات"]
      }
    ],
    careerJobsEn: ["Biomedical Engineer", "Clinical Engineer", "Medical Device Designer", "Biomaterials Developer", "Healthcare Technology Manager", "Research Scientist", "Rehabilitation Engineer"],
    careerJobsAr: ["مهندس طبي حيوي", "مهندس سريري (إكلينيكي)", "مصمم أجهزة طبية", "مطور مواد حيوية", "مدير تكنولوجيا الرعاية الصحية", "عالم أبحاث", "مهندس إعادة تأهيل"],
    seVsCs: {
      questionEn: "Biomedical Engineering vs Pharmacy/Medicine?",
      questionAr: "الهندسة الطبية الحيوية أم الطب/الصيدلة؟",
      sePointsEn: ["Biomedical Engineering focuses purely on designing the technological tools, machinery, and artificial implants that doctors and surgeons use", "You rarely prescribe medication or directly treat outpatients", "Highly math, programming, and physics intensive"],
      sePointsAr: ["تركز الهندسة الطبية الحيوية بحتاً على تصميم الأدوات التكنولوجية والآلات والزرعات الاصطناعية التي يستخدمها الأطباء والجراحون", "نادراً ما تقوم بوصف الأدوية أو معالجة المرضى الخارجيين مباشرة", "تعتمد بشكل مكثف على الرياضيات، البرمجة، والفيزياء"],
      otherTitleEn: "Medicine / Pharmacy",
      otherTitleAr: "الطب / الصيدلة",
      otherPointsEn: ["Focuses exclusively on diagnosing, curing illnesses, performing surgeries, or dispensing medication directly to patients", "Requires heavy memorization and biological studies", "Requires hospital residencies"],
      otherPointsAr: ["يركز حصرياً على التشخيص وعلاج الأمراض وإجراء العمليات الجراحية أو صرف الأدوية للمرضى مباشرة", "يتطلب دراسات حيوية وحفظاً مكثفاً", "يتطلب إقامة سريرية/فترة تدريب بالمستشفيات"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "60", feesRangeEn: "$4,500 - $14,000", feesRangeAr: "4,500 - 14,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "UK/Germany", countryAr: "بريطانيا/ألمانيا", durationEn: "3-4 Years", durationAr: "3-4 سنوات", worldRanking: "5", feesRangeEn: "$10,000 - $35,000", feesRangeAr: "10,000 - 35,000 دولار", livingCostEn: "$1,200 - $2,500/month", livingCostAr: "1,200 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة Taylor's",
        href: "/universities/1",
        descEn: "Features incredible state-of-the-art medical and engineering wings. Taylor's offers a very hands-on approach directly connected with medical faculties.",
        descAr: "تتميز بأجنحة طبية وهندسية حديثة ومذهلة. تقدم تايلورز نهجاً عملياً مرتبطاً بشكل مباشر بالكليات الطبية."
      },
      {
        nameEn: "UM University (Universiti Malaya)",
        nameAr: "جامعة UM (جامعة مالايا)",
        href: "/universities/4",
        descEn: "Possesses Malaysia's leading clinical hospital (UMMC). Biomedical engineering students gain direct, premier exposure to real hospital environments.",
        descAr: "تمتلك المستشفى السريري الرائد في ماليزيا (UMMC). يكتسب طلاب الهندسة الطبية الحيوية تعرضاً مباشراً ومميزاً لبيئات المستشفيات الحقيقية."
      }
    ],
    searchQuery: "Biomedical Engineering"
  },
  "mechatronics": {
    slug: "mechatronics",
    titleEn: "Study Mechatronics Engineering in Malaysia",
    titleAr: "تخصص هندسة الميكاترونكس في ماليزيا",
    heroTaglineEn: "The Future of Automation — Study Mechatronics in Malaysia: Universities, Fees & Guide",
    heroTaglineAr: "مستقبل الأتمتة: الدليل الشامل لدراسة هندسة الميكاترونكس في ماليزيا - الجامعات والأسعار",
    introEn: "Mechatronics Engineering is a multidisciplinary field seamlessly uniting mechanical, electrical, computer, and control engineering. By studying Mechatronics in Malaysia, you will dive deeply into robotics, AI automation, and advanced manufacturing. Malaysia is a formidable manufacturing hub, ensuring massive demand for automation experts trained in local world-class universities.",
    introAr: "هندسة الميكاترونكس هي مجال متعدد التخصصات يدمج بسلاسة بين الهندسة الميكانيكية والكهربائية وهندسة الحاسوب والتحكم. من خلال دراسة الميكاترونكس في ماليزيا، ستغوص بعمق في الروبوتات، الأتمتة بالذكاء الاصطناعي، والتصنيع المتقدم. تعد ماليزيا مركزاً صناعياً قوياً، مما يضمن طلباً هائلاً على خبراء الأتمتة المدربين في الجامعات المحلية ذات المستوى العالمي.",
    degreeLevels: [
      {
        titleEn: "Diploma in Mechatronics",
        titleAr: "دبلوم في هندسة الميكاترونكس",
        feesRangeEn: "$2,800 - $6,500",
        feesRangeAr: "2,800 - 6,500 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Mechatronics Engineering",
        titleAr: "بكالوريوس في الميكاترونكس",
        feesRangeEn: "$4,500 - $13,000",
        feesRangeAr: "4,500 - 13,000 دولار",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      },
      {
        titleEn: "Master's in Mechatronics Engineering",
        titleAr: "ماجستير في هندسة الميكاترونكس",
        feesRangeEn: "$4,800 - $11,500",
        feesRangeAr: "4,800 - 11,500 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Mechatronics",
        titleAr: "دكتوراة في الميكاترونكس",
        feesRangeEn: "$3,500 - $12,000",
        feesRangeAr: "3,500 - 12,000 دولار",
        durationEn: "3 - 4 Years",
        durationAr: "3 - 4 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Nottingham University Malaysia", nameAr: "جامعة Nottingham", href: "/universities/34", worldRanking: "100", fieldRanking: "Top 50", annualFeesUSD: "$13,500", discountEn: "Merit Based", discountAr: "مبني على الجدارة" },
      { nameEn: "UCSI University", nameAr: "جامعة UCSI", href: "/universities/4", worldRanking: "300", fieldRanking: "-", annualFeesUSD: "$7,100", discountEn: "Available", discountAr: "متاح" },
      { nameEn: "UTM University", nameAr: "جامعة UTM", href: "/universities/24", worldRanking: "188", fieldRanking: "Top 100", annualFeesUSD: "$5,500", discountEn: "Public Uni", discountAr: "جامعة حكومية" }
    ],
    budgetUniversities: [
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,800" },
      { nameEn: "UTM University", nameAr: "جامعة UTM", href: "/universities/24", annualFeesUSD: "$5,500" },
      { nameEn: "IUKL University", nameAr: "جامعة IUKL", href: "/universities/14", annualFeesUSD: "$4,300" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Engineering Mechanics", "Thermodynamics", "Electrical Circuits", "Engineering Math", "C Programming"],
        subjectsAr: ["الميكانيكا الهندسية", "الديناميكا الحرارية", "الدوائر الكهربائية", "الرياضيات الهندسية", "البرمجة بلغة C"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Kinematics & Dynamics", "Analogue Electronics", "Fluid Mechanics", "Sensors & Actuators", "Microprocessors"],
        subjectsAr: ["الكينماتيكا والديناميكا", "الإلكترونيات التماثلية", "ميكانيكا الموائع", "المستشعرات والمحركات", "المعالجات الدقيقة"]
      },
      {
        yearEn: "Year 3 & 4",
        yearAr: "السنة الثالثة والرابعة",
        subjectsEn: ["Control Systems Engineering", "Industrial Automation & Robotics", "Machine Vision", "PLC Programming", "Final Year Engineering Project", "Industrial Internship"],
        subjectsAr: ["هندسة أنظمة التحكم", "الأتمتة الصناعية والروبوتات", "رؤية الآلة (Machine Vision)", "برمجة أجهزة الـ PLC", "مشروع التخرج الهندسي", "التدريب الصناعي المهني"]
      }
    ],
    careerJobsEn: ["Mechatronics Engineer", "Automation Engineer", "Robotics Engineer", "Control Systems Designer", "Electro-mechanical Technician", "Advanced Manufacturing Engineer", "Automotive Engineer"],
    careerJobsAr: ["مهندس ميكاترونكس", "مهندس أتمتة", "مهندس روبوتات", "مصمم أنظمة تحكم", "فني كهروميكانيكي", "مهندس تصنيع متقدم", "مهندس سيارات"],
    seVsCs: {
      questionEn: "Mechatronics Engineering vs Mechanical Engineering?",
      questionAr: "هندسة الميكاترونكس أم الهندسة الميكانيكية؟",
      sePointsEn: ["Mechatronics heavily integrates electronic computing, AI, and control logic to build 'smart' mechanical systems (like automated assembly lines or drones)", "Relies heavily on programming to control hardware", "Wider umbrella of study involving 4 different engineering branches"],
      sePointsAr: ["تقوم الميكاترونكس بدمج الحوسبة الإلكترونية والذكاء الاصطناعي ومنطق التحكم لبناء أنظمة ميكانيكية 'ذكية' (مثل طائرات الدرون أو خطوط التجميع التلقائية)", "تعتمد بشكل كبير على البرمجة للتحكم في الأجهزة", "مظلة أوسع للدراسة تشمل 4 فروع هندسية مختلفة"],
      otherTitleEn: "Mechanical Engineering",
      otherTitleAr: "الهندسة الميكانيكية",
      otherPointsEn: ["Focuses exclusively on solid mechanics, fluid dynamics, thermodynamics, and physical structures", "Less emphasis on writing code or designing electronic microchips", "Core, traditional engineering suited for heavy machinery, HVAC, and power generation"],
      otherPointsAr: ["تركز حصرياً على ميكانيكا المواد الصلبة، ديناميكا الموائع، الديناميكا الحرارية، والهياكل المادية", "تركيز أقل على كتابة الرموز (الأكواد) أو تصميم الرقائق الإلكترونية", "هندسة أساسية وتقليدية مناسبة للآلات الثقيلة والتكييف وتوليد الطاقة"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "60", feesRangeEn: "$4,500 - $13,000", feesRangeAr: "4,500 - 13,000$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "Germany", countryAr: "ألمانيا", durationEn: "3.5 - 4 Years", durationAr: "3.5 - 4 سنوات", worldRanking: "3", feesRangeEn: "$0 - $3,000", feesRangeAr: "0 - 3,000 دولار (رسوم إدارية)", livingCostEn: "$1,200 - $1,800/month", livingCostAr: "1,200 - 1,800 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "APU boasts incredible Robotics setups and is globally recognized for merging IT seamlessly with mechanical automation.",
        descAr: "تفتخر جامعة APU بإعدادات روبوتات مذهلة ومعترف بها عالمياً لدمجها السلس لتقنية المعلومات مع الأتمتة الميكانيكية."
      },
      {
        nameEn: "Nottingham University Malaysia",
        nameAr: "جامعة نوتنغهام ماليزيا",
        href: "/universities/34",
        descEn: "Provides an elite UK-based curriculum directly at the Malaysia campus. Exceptional prestige and top-50 global engineering ranking.",
        descAr: "تقدم منهاجاً نخبوياً بريطانياً مباشرة في الحرم الجامعي بماليزيا. هيبة استثنائية وتصنيف ضمن أفضل 50 جامعة هندسية عالمياً."
      }
    ],
    searchQuery: "Mechatronics Engineering"
  },
  "robotics": {
    slug: "robotics",
    titleEn: "Study Robotics Engineering in Malaysia",
    titleAr: "تخصص هندسة الروبوتات في ماليزيا",
    heroTaglineEn: "Build the Future — Study Intelligent Robotics in Malaysia: Best Universities, Jobs, & Requirements",
    heroTaglineAr: "ابنِ المستقبل - ادرس الذكاء الاصطناعي والروبوتات في ماليزيا: أفضل الجامعات والفرص الوظيفية",
    introEn: "Robotics Engineering focuses precisely on creating, programming, and deploying autonomous robotic systems. By taking this pathway in Malaysia, you enter a futuristic sector integrating Deep Learning (AI) with kinematic hardware. Malaysian tech universities are equipped with world-class drone labs, automated manufacturing centers, and strong global connections.",
    introAr: "تركز هندسة الروبوتات على وجه التحديد على ابتكار وبرمجة ونشر الأنظمة الروبوتية المستقلة. باتباع هذا المسار في ماليزيا، فإنك تدخل قطاعاً مستقبلياً يدمج التعلم العميق (الذكاء الاصطناعي) بالأجهزة الحركية. تُجَهّز الجامعات التقنية الماليزية بمختبرات طائرات بدون طيار (درون) عالمية المستوى، ومراكز تصنيع آلية، وعلاقات قوية مع شركات التكنولوجيا العالمية.",
    degreeLevels: [
      {
        titleEn: "Diploma in Robotics / Mechatronics",
        titleAr: "دبلوم تصنيع الروبوتات",
        feesRangeEn: "$2,800 - $6,500",
        feesRangeAr: "2,800 - 6,500 دولار",
        durationEn: "2 - 2.5 Years",
        durationAr: "2 - 2.5 سنوات"
      },
      {
        titleEn: "Bachelor's in Robotics Engineering / AI",
        titleAr: "بكالوريوس في هندسة الروبوتات",
        feesRangeEn: "$5,000 - $13,500",
        feesRangeAr: "5,000 - 13,500 دولار",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      },
      {
        titleEn: "Master's in Robotics",
        titleAr: "ماجستير في الروبوتات",
        feesRangeEn: "$5,500 - $12,000",
        feesRangeAr: "5,500 - 12,000 دولار",
        durationEn: "1.5 - 2 Years",
        durationAr: "1.5 - 2 سنوات"
      },
      {
        titleEn: "PhD in Intelligent Robotics",
        titleAr: "دكتوراة في الروبوتات الذكية",
        feesRangeEn: "$4,000 - $14,000",
        feesRangeAr: "4,000 - 14,000 دولار",
        durationEn: "3 - 4 Years",
        durationAr: "3 - 4 سنوات"
      }
    ],
    topUniversities: [
      { nameEn: "APU University", nameAr: "جامعة APU", href: "/universities/2", worldRanking: "611 - 620", fieldRanking: "Top 100", annualFeesUSD: "$8,500", discountEn: "Scholarship Available", discountAr: "خصم متاح" },
      { nameEn: "Taylor's University", nameAr: "جامعة Taylor's", href: "/universities/1", worldRanking: "251", fieldRanking: "-", annualFeesUSD: "$12,800", discountEn: "Scholarship $2,500", discountAr: "خصم 2,500 دولار" },
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", worldRanking: "1001-1200", fieldRanking: "Top 300", annualFeesUSD: "$6,800", discountEn: "Not Available", discountAr: "غير متاح" },
      { nameEn: "Sunway University", nameAr: "جامعة Sunway", href: "/universities/3", worldRanking: "539", fieldRanking: "-", annualFeesUSD: "$9,200", discountEn: "Scholarship Available", discountAr: "خصم متاح" }
    ],
    budgetUniversities: [
      { nameEn: "MMU University", nameAr: "جامعة MMU", href: "/universities/9", annualFeesUSD: "$6,800" },
      { nameEn: "SEGi University", nameAr: "جامعة SEGi", href: "/universities/8", annualFeesUSD: "$5,800" }
    ],
    courseYears: [
      {
        yearEn: "Year 1",
        yearAr: "السنة الأولى",
        subjectsEn: ["Calculus & Logic", "Introduction to Intelligent Automation", "C/Python Programming", "Basic Electronic Systems", "Mechanics"],
        subjectsAr: ["حساب التفاضل والتكامل والمنطق", "مقدمة في الأتمتة الذكية", "البرمجة باستخدام بايثون/C", "الأنظمة الإلكترونية الأساسية", "الميكانيكا"]
      },
      {
        yearEn: "Year 2",
        yearAr: "السنة الثانية",
        subjectsEn: ["Sensors & Measurement", "Kinematics & Mechanics of Robotics", "Artificial Intelligence Fundamentals", "Control Theory", "Microcontrollers"],
        subjectsAr: ["أجهزة الاستشعار والقياس", "كينماتيكا وميكانيكا الروبوتات", "أساسيات الذكاء الاصطناعي", "نظرية التحكم", "وحدات التحكم الدقيقة (Microcontrollers)"]
      },
      {
        yearEn: "Year 3 & 4",
        yearAr: "السنة الثالثة والرابعة",
        subjectsEn: ["Machine Vision", "Autonomous Systems", "Swarms & Collaborative Robotics", "Deep Learning in Robotics", "Final Capstone Project", "Industry Training"],
        subjectsAr: ["رؤية الآلة", "الأنظمة المستقلة ذاتية القيادة", "الروبوتات الجماعية والتعاونية", "التعلم العميق في الروبوتات", "مشروع التخرج المتقدم", "التدريب الميداني في الشركات"]
      }
    ],
    careerJobsEn: ["Robotics Engineer", "AI/Machine Learning Engineer", "UAV (Drone) Designer", "Automation Specialist", "Research Scientist", "Computer Vision Engineer"],
    careerJobsAr: ["مهندس روبوتات", "مهندس ذكاء اصطناعي/تعلم آلي", "مصمم طائرات بدون طيار (درون)", "أخصائي أتمتة", "عالم أبحاث", "مهندس رؤية حاسوبية"],
    seVsCs: {
      questionEn: "Robotics vs Mechatronics?",
      questionAr: "الروبوتات أم המيكاترونكس؟",
      sePointsEn: ["Robotics is a specialized subset of Mechatronics solely devoted to autonomous, intelligent robots and AI integration", "Typically involves intense deep learning, machine vision, and drone programming", "Aims purely to replace/assist complex human tasks with autonomous entities"],
      sePointsAr: ["الروبوتات هي فرع متخصص من الميكاترونكس مكرس بالكامل للروبوتات الذكية والمستقلة والتكامل مع الذكاء الاصطناعي", "تتضمن عادة تعلمًا عميقًا مكثفًا، ورؤية حاسوبية للآلات، وبرمجة طائرات بدون طيار", "تهدف بشكل خالص إلى استبدال أو مساعدة المهام البشرية المعقدة بكيانات مستقلة"],
      otherTitleEn: "Mechatronics",
      otherTitleAr: "هندسة الميكاترونكس",
      otherPointsEn: ["A broader field that builds any electro-mechanical system, not just robots (e.g., smart elevators, ABS car brakes, CNC machines)", "May not heavily focus on Artificial Intelligence and autonomy", "Focuses deeply on industrial manufacturing scale"],
      otherPointsAr: ["تقوم بالتركيز على أي نظام كهروميكانيكي، وليس فقط الروبوتات (مثل المصاعد الذكية، مكابح ABS في السيارات، آلات الـ CNC)", "قد لا تضع تركيزاً مكثفاً للغاية على الذكاء الاصطناعي والاستقلالية الذاتية للآلة", "تركز بشكل أعمق بكثير على مستوى التصنيع الصناعي"]
    },
    countryComparisons: [
      { countryEn: "Malaysia", countryAr: "ماليزيا", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "60", feesRangeEn: "$5,000 - $13,500", feesRangeAr: "5,000 - 13,500$", livingCostEn: "$300 - $700/month", livingCostAr: "300 - 700 دولار/شهر" },
      { countryEn: "USA", countryAr: "الولايات المتحدة", durationEn: "4 Years", durationAr: "4 سنوات", worldRanking: "1", feesRangeEn: "$25,000 - $60,000", feesRangeAr: "25,000 - 60,000 دولار", livingCostEn: "$1,500 - $2,500/month", livingCostAr: "1,500 - 2,500 دولار/شهر" }
    ],
    spotlightUniversities: [
      {
        nameEn: "APU University",
        nameAr: "جامعة APU",
        href: "/universities/2",
        descEn: "Renowned across Asia for its multi-award-winning Robotics teams. APU's AI and Robotics labs are officially powered by global giants like Intel and Amazon Web Services.",
        descAr: "تشتهر في جميع أنحاء آسيا بفرق الروبوتات الخاصة بها والحائزة على جوائز متعددة. مختبرات الذكاء الاصطناعي والروبوتات في APU مدعومة رسمياً من عمالقة عالميين مثل إنتل (Intel) وأمازون."
      }
    ],
    searchQuery: "Robotics Engineering"
  }

};


