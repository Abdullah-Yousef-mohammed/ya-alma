export interface DegreeLevel {
  titleEn: string;
  titleAr: string;
  titleZh?: string;
  titleMs?: string;
  feesRangeEn: string;
  feesRangeAr: string;
  feesRangeZh?: string;
  feesRangeMs?: string;
  durationEn: string;
  durationAr: string;
  durationZh?: string;
  durationMs?: string;
}

export interface TopUniversity {
  nameEn: string;
  nameAr: string;
  nameZh?: string;
  nameMs?: string;
  href: string;
  worldRanking: string;
  fieldRanking: string;
  annualFeesUSD: string;
  discountEn: string;
  discountAr: string;
  discountZh?: string;
  discountMs?: string;
}

export interface BudgetUniversity {
  nameEn: string;
  nameAr: string;
  nameZh?: string;
  nameMs?: string;
  href: string;
  annualFeesUSD: string;
}

export interface CourseYear {
  yearEn: string;
  yearAr: string;
  yearZh?: string;
  yearMs?: string;
  subjectsEn: string[];
  subjectsAr: string[];
  subjectsZh?: string[];
  subjectsMs?: string[];
}

export interface SpecializationData {
  slug: string;
  titleEn: string;
  titleAr: string;
  titleZh?: string;
  titleMs?: string;
  heroTaglineEn: string;
  heroTaglineAr: string;
  heroTaglineZh?: string;
  heroTaglineMs?: string;
  introEn: string;
  introAr: string;
  introZh?: string;
  introMs?: string;
  degreeLevels: DegreeLevel[];
  topUniversities: TopUniversity[];
  budgetUniversities: BudgetUniversity[];
  courseYears: CourseYear[];
  careerJobsEn: string[];
  careerJobsAr: string[];
  careerJobsZh?: string[];
  careerJobsMs?: string[];
  searchQuery?: string;
  countryComparisons?: any[];
  spotlightUniversities?: any[];
  seVsCs?: {
    questionEn: string;
    questionAr: string;
    questionZh?: string;
    questionMs?: string;
    titleEn: string;
    titleAr: string;
    titleZh?: string;
    titleMs?: string;
    sePointsEn: string[];
    sePointsAr: string[];
    sePointsZh?: string[];
    sePointsMs?: string[];
    otherTitleEn: string;
    otherTitleAr: string;
    otherTitleZh?: string;
    otherTitleMs?: string;
    otherPointsEn: string[];
    otherPointsAr: string[];
    otherPointsZh?: string[];
    otherPointsMs?: string[];
  };
}

export const specializationsData: SpecializationData[] = [
  {
    slug: "software-engineering",
    titleEn: "Software Engineering",
    titleAr: "هندسة البرمجيات (Software Engineering)",
    heroTaglineEn: "Master the architecture of the digital world. Graduate from Malaysia's top tech universities.",
    heroTaglineAr: "صمم معمارية المستقبل الرقمي. ادرس هندسة البرمجيات في أرقى جامعات ماليزيا التكنولوجية وانطلق نحو قيادة الابتكار.",
    introEn: "Software Engineering is not just coding; it's the meticulous art of designing, testing, and maintaining large-scale digital architectures. Studying in Malaysia immerses you in a Silicon-Valley-like tech ecosystem.",
    introAr: "هندسة البرمجيات ليست مجرد كتابة أكواد؛ بل هي الفن الدقيق لهندسة، وتصميم، وصيانة الأنظمة الرقمية الضخمة التي تدير عالمنا اليوم.\n\nإن اختيارك لماليزيا كوجهة لدراسة هذا التخصص يضعك مباشرة في مركز التكنولوجيا (وادي السيليكون الآسيوي)، حيث توفر لك الجامعات هنا برامج معتمدة من كبرى الشركات العالمية مثل Microsoft و Google، وتؤهلك لتصبح مهندس برمجيات بمرتبة خبير عالمي.",
    degreeLevels: [
      {
        titleEn: "Foundation in IT",
        titleAr: "السنة التحضيرية في تقنية المعلومات",
        feesRangeEn: "$4,000 - $6,000",
        feesRangeAr: "$4,000 - $6,000",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "Bachelor's Degree (B.Sc. SE)",
        titleAr: "البكالوريوس (B.Sc. SE)",
        feesRangeEn: "$5,000 - $9,000 / Year",
        feesRangeAr: "$5,000 - $9,000 / سنويًا",
        durationEn: "3 - 4 Years",
        durationAr: "3 إلى 4 سنوات"
      },
      {
        titleEn: "Master's Degree (M.Sc. SE)",
        titleAr: "الماجستير (M.Sc. SE)",
        feesRangeEn: "$6,500 - $12,000",
        feesRangeAr: "$6,500 - $12,000",
        durationEn: "1.5 - 2 Years",
        durationAr: "سنة ونصف إلى سنتين"
      }
    ],
    topUniversities: [
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك (APU)",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "#1 Tech in Malaysia",
        annualFeesUSD: "$6,500",
        discountEn: "Up to 30% Scholarship",
        discountAr: "منحة حصرية حتى 30%"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز (Taylor's)",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 200 in CS",
        annualFeesUSD: "$8,500",
        discountEn: "Premium Campus",
        discountAr: "حرم جامعي فائق الفخامة"
      },
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا (MMU)",
        href: "/universities/5",
        worldRanking: "Top 1000 QS",
        fieldRanking: "IT Pioneers",
        annualFeesUSD: "$4,800",
        discountEn: "Government Backed",
        discountAr: "مدعومة حكومياً"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        annualFeesUSD: "$4,000"
      },
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي ماليزيا",
        href: "/universities/7",
        annualFeesUSD: "$3,800"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Foundation of Computing",
        yearAr: "السنة الأولى: المعمارية البرمجية الأساسية",
        subjectsEn: ["Programming Concepts (C++/Java)", "Data Structures", "System Architecture", "Mathematics for IT"],
        subjectsAr: ["مفاهيم البرمجة المتقدمة (C++/Java)", "هياكل البيانات والخوارزميات", "معمارية أنظمة الحاسوب", "الرياضيات الهندسية لتقنية المعلومات"]
      },
      {
        yearEn: "Year 2: Core Engineering & Architecture",
        yearAr: "السنة الثانية: هندسة النظم المعقدة وتقنيات التطوير",
        subjectsEn: ["Software Requirements Engineering", "Object-Oriented Design", "Database Systems", "Software Quality Assurance"],
        subjectsAr: ["هندسة متطلبات البرمجيات (Requirements Engineering)", "التصميم الكائني التوجه (OOP Design)", "إدارة قواعد البيانات السحابية والموزعة", "ضمان جودة البرمجيات والاختبار المؤتمت"]
      },
      {
        yearEn: "Year 3 & 4: Mastery & Industry Deployment",
        yearAr: "السنة الثالثة والرابعة: الاحتراف ومشاريع التخرج",
        subjectsEn: ["Agile Software Development", "Cloud Architecture", "Final Year Project", "Industry Internship"],
        subjectsAr: ["منهجيات التطوير الرشيقة (Agile/Scrum)", "هندسة الحوسبة السحابية (AWS/Azure)", "مشروع التخرج الهندسي الشامل", "التدريب الميداني في شركات التقنية الكبرى"]
      }
    ],
    careerJobsEn: ["Lead Software Engineer", "Systems Architect", "Full Stack Developer", "Cloud Solutions Architect", "Quality Assurance Engineer", "DevOps Engineer"],
    careerJobsAr: ["مهندس برمجيات رئيسي", "معماري أنظمة تقنية", "مطور برمجيات متكامل (Full Stack)", "معماري حلول سحابية", "خبير ضمان الجودة (QA)", "مهندس عمليات برمجية (DevOps)"],
    seVsCs: {
      questionEn: "What is the difference between Software Engineering and Computer Science?",
      questionAr: "ما هو الفرق الجوهري بين هندسة البرمجيات وعلوم الحاسوب؟",
      titleEn: "Software Engineering (SE)",
      titleAr: "هندسة البرمجيات (SE)",
      sePointsEn: [
        "Focuses drastically on building and maintaining large software systems.",
        "Teaches project management, testing, and system architecture.",
        "Ideal for students who want to lead software development teams."
      ],
      sePointsAr: [
        "تركز بشكل هائل على تصميم، بناء، وإدارة الأنظمة البرمجية التجارية الضخمة.",
        "تغطي جوانب إدارة المشاريع وتوكيد الجودة (Quality Assurance).",
        "تؤهلك بدقة لتصبح 'مهندس أو قائد فريق تطوير' بمسار هندسي تطبيقي واضح."
      ],
      otherTitleEn: "Computer Science (CS)",
      otherTitleAr: "علوم الحاسوب (CS)",
      otherPointsEn: [
        "Focuses heavily on algorithms, mathematics, and how computers process data.",
        "Theoretical basis for AI, Data Science, and Machine Learning.",
        "Ideal for students who want to innovate in algorithms and pure computing logic."
      ],
      otherPointsAr: [
        "تغوص في الجانب النظري، الخوارزميات، والرياضيات المتقدمة وراء الكود.",
        "تعد الأساس الأقوى لدخول مجالات الذكاء الاصطناعي وبحوث التقنية المعقدة.",
        "تؤهلك لتصبح 'عالم أو مفكر تقني' يبحث في تطوير الخوارزميات وتحسين الأداء."
      ]
    }
  },
  {
    slug: "medicine",
    titleEn: "Medicine (MBBS / MD)",
    titleAr: "الطب البشري (MBBS الجراحة والطب)",
    heroTaglineEn: "Embark on the noblest profession. World-class medical degrees accredited globally.",
    heroTaglineAr: "ارتدِ المعطف الأبيض وابدأ رحلتك في أنبل المهن الإنسانية. شهادات طبية ماليزية باعتمادات عالمية فائقة.",
    introEn: "Studying Medicine in Malaysia blends British medical traditions with modern Asian healthcare innovations. Students gain phenomenal clinical exposure.",
    introAr: "دراسة الطب البشري في ماليزيا تمثل فرصة ذهبية للجمع بين المناهج الطبية البريطانية العريقة والابتكارات الحديثة في الرعاية الصحية الآسيوية.\n\nتتميز كليات الطب في ماليزيا بمستشفيات تعليمية ضخمة ومجهزة بأحدث التقنيات الجراحية، مما يضمن للطالب تدريباً سريرياً (Clinical Training) مكثفاً وشهادات تعترف بها منظمة الصحة العالمية (WHO) والمجالس الطبية العربية والدولية. استعد لتكون طبيباً استثنائياً يتمتع بالمهارة والإنسانية.",
    degreeLevels: [
      {
        titleEn: "Foundation in Science",
        titleAr: "السنة التحضيرية في العلوم (للطب)",
        feesRangeEn: "$5,000 - $7,000",
        feesRangeAr: "$5,000 - $7,000",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "Bachelor of Medicine & Surgery (MBBS/MD)",
        titleAr: "بكالوريوس الطب والجراحة (MBBS/MD)",
        feesRangeEn: "$15,000 - $25,000 / Year",
        feesRangeAr: "$15,000 - $25,000 / سنويًا",
        durationEn: "5 Years",
        durationAr: "5 سنوات (مقسمة لمرحلتين)"
      }
    ],
    topUniversities: [
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي (SEGi)",
        href: "/universities/3",
        worldRanking: "High Prestige in Medical",
        fieldRanking: "Top 5 Private Medical",
        annualFeesUSD: "$18,000",
        discountEn: "Excellent Clinical Rotation",
        discountAr: "تدريب سريري ممتاز"
      },
      {
        nameEn: "Cyberjaya University (UoC)",
        nameAr: "جامعة سايبرجايا (UoC)",
        href: "/universities/18",
        worldRanking: "5 Star Rating",
        fieldRanking: "Specialized in Heath",
        annualFeesUSD: "$20,000",
        discountEn: "Premium Facilities",
        discountAr: "مرافق طبية من الطراز الأول"
      },
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا (MAHSA)",
        href: "/universities/9",
        worldRanking: "Medical Powerhouse",
        fieldRanking: "Medical Hub",
        annualFeesUSD: "$17,500",
        discountEn: "Scholarships Available",
        discountAr: "منح جزئية متوفرة مجاناً"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Pre-Clinical Phase (Years 1-2)",
        yearAr: "المرحلة ما قبل السريرية (السنة 1-2)",
        subjectsEn: ["Basic Medical Sciences", "Anatomy & Physiology", "Biochemistry & Genetics", "Pathology & Pharmacology"],
        subjectsAr: ["العلوم الطبية الأساسية (Basic Medical Sciences)", "علم التشريح وظائف الأعضاء (Anatomy & Physiology)", "الكيمياء الحيوية وعلم الوراثة", "علم الأمراض وعلم الأدوية (Pathology & Pharmacology)"]
      },
      {
        yearEn: "Clinical Phase I (Year 3)",
        yearAr: "المرحلة السريرية الأولى (السنة 3)",
        subjectsEn: ["Internal Medicine", "General Surgery", "Pediatrics Intro", "Clinical Bedside Training"],
        subjectsAr: ["الطب الباطني (Internal Medicine)", "الجراحة العامة (General Surgery)", "مقدمة في طب الأطفال", "التدريب السريري التأسيسي في المستشفيات (Bedside Teaching)"]
      },
      {
        yearEn: "Clinical Phase II (Years 4-5)",
        yearAr: "المرحلة السريرية المتقدمة (السنة 4-5)",
        subjectsEn: ["Obstetrics & Gynecology", "Orthopedics & Psychiatry", "Emergency Medicine", "Intensive Clinical Rotations"],
        subjectsAr: ["أمراض النساء والتوليد (O&G)", "جراحة العظام والطب النفسي", "طب الطوارئ والعناية المركزة", "المناوبات السريرية المكثفة والتدريب الميداني التخصصي"]
      }
    ],
    careerJobsEn: ["General Practitioner (GP)", "Specialist Surgeon", "Medical Researcher", "Pediatrician", "Hospital Administrator"],
    careerJobsAr: ["طبيب عام ممارس (GP)", "جراح متخصص (Specialist Surgeon)", "باحث طبي عالمي", "طبيب أطفال واستشاري أمراض", "مدير مستشفى / رعاية صحية"]
  },
  {
    slug: "data-analytics",
    titleEn: "Data Analytics & Data Science",
    titleAr: "تحليل وعلوم البيانات (Data Science/Analytics)",
    heroTaglineEn: "Data is the new gold. Lead the AI and big data revolution with prestigious analytical skills.",
    heroTaglineAr: "البيانات هي نفط العصر الجديد. قد ثورة الذكاء الاصطناعي وعلوم البيانات بمهارات تحليلية لا تُضاهى.",
    introEn: "In the era of Artificial Intelligence, Data Scientists represent the most sought-after talent globally. Malaysia offers cutting-edge curriculums embedded with SAS, IBM, and AWS certifications.",
    introAr: "في عصر الذكاء الاصطناعي الحالي، يمثل 'عالم البيانات' ومحلوها العقول الأكثر طلباً والأعلى أجراً في العالم بأسره.\n\nإن اختيارك لدراسة علوم أو تحليل البيانات في ماليزيا يفتح لك أبواب المستقبل على مصراعيها، حيث تعقد الجامعات هناك شراكات حصرية مع عمالقة التقنية مثل IBM و SAS و AWS لدمج شهاداتهم المهنية داخل تخرجك الجامعي لتكون جاهزاً تماماً لابتلاع سوق العمل العالمي فور تخرجك.",
    degreeLevels: [
      {
        titleEn: "Foundation in Computing",
        titleAr: "السنة التحضيرية في الحوسبة",
        feesRangeEn: "$4,000 - $6,000",
        feesRangeAr: "$4,000 - $6,000",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "Bachelor of Computer Science (Data Analytics)",
        titleAr: "البكالوريوس المشترك في تحليل البيانات",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master of Data Science",
        titleAr: "ماجستير علوم البيانات",
        feesRangeEn: "$7,000 - $13,000",
        feesRangeAr: "$7,000 - $13,000",
        durationEn: "1.5 Years",
        durationAr: "سنة ونصف"
      }
    ],
    topUniversities: [
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك (APU)",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Tier 1 Data Science",
        annualFeesUSD: "$6,500",
        discountEn: "30% Merit Scholarship",
        discountAr: "خصم وتصنيف ذهبي (الرقم 1)"
      },
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي (Sunway)",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Premium Tech",
        annualFeesUSD: "$9,000",
        discountEn: "Lancaster Dual Degree",
        discountAr: "شهادة مزدوجة من بريطانيا"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز (Taylor's)",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 200 CS Global",
        annualFeesUSD: "$8,500",
        discountEn: "Elite Exposure",
        discountAr: "خبرة تعليمية فائقة الفخامة"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "MMU",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        annualFeesUSD: "$4,800"
      },
      {
        nameEn: "INTI International University",
        nameAr: "جامعة إنتي الدولية",
        href: "/universities/6",
        annualFeesUSD: "$4,500"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Programming & Math Foundations",
        yearAr: "السنة الأولى: الأسس البرمجية والرياضية",
        subjectsEn: ["Python & R Programming", "Calculus and Linear Algebra", "Database Management Systems", "Introduction to Statistics"],
        subjectsAr: ["برمجة البايثون الحديثة ولغة R", "التفاضل والتكامل والجبر الخطي السحابي", "إدارة وبناء قواعد البيانات", "مقدمة متقدمة في الإحصاء وتحليل الاحتمالات"]
      },
      {
        yearEn: "Year 2: Machine Learning & Big Data",
        yearAr: "السنة الثانية: تعلم الآلة والبيانات الضخمة",
        subjectsEn: ["Machine Learning Fundamentals", "Big Data Analytics Technologies", "Data Mining & Predictive Modeling", "Data Visualization Techniques"],
        subjectsAr: ["أساسيات تعلم الآلة (Machine Learning)", "تقنيات وتطبيقات البيانات الضخمة (Big Data)", "التنقيب في البيانات والنمذجة التنبؤية", "أساليب وتقنيات تصوير وتمثيل البيانات بصرياً"]
      },
      {
        yearEn: "Year 3: Deep AI Integration",
        yearAr: "السنة الثالثة: التكامل العميق مع الذكاء الاصطناعي",
        subjectsEn: ["Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Capstone Data Project", "Industry Tech Internship"],
        subjectsAr: ["التعلم العميق والشبكات العصبية (Deep Learning)", "معالجة اللغات الطبيعية (NLP)", "مشروع التخرج الشامل في علوم البيانات", "تدريب ميداني في شركات تحليل الأعمال الكبرى"]
      }
    ],
    careerJobsEn: ["Data Scientist", "Machine Learning Engineer", "Business Intelligence Analyst", "Big Data Architect", "AI Research Scientist", "Data Operations Leader"],
    careerJobsAr: ["عالم بيانات معتمد (Data Scientist)", "مهندس تعلم الآلة (ML Engineer)", "محلل ذكاء الأعمال (BI Analyst)", "معماري خبير للبيانات الضخمة (Data Architect)", "باحث في الذكاء الاصطناعي", "قائد عمليات البيانات والنمذجة"]
  },
  {
    slug: "cyber-security",
    titleEn: "Cyber Security",
    titleAr: "الأمن السيبراني (Cyber Security)",
    heroTaglineEn: "Become the elite digital defender. Master ethical hacking and cyber defense.",
    heroTaglineAr: "كن درع المستقبل الرقمي. احترف الاختراق الأخلاقي والأمن السيبراني في بيئة تكنولوجية متقدمة.",
    introEn: "Cyber Security is the frontline of the digital economy. In Malaysia, you will train in state-of-the-art cyber defense operations centers (SOC) integrated directly within the university campus.",
    introAr: "في ظل التهديدات الرقمية المتصاعدة، أصبحت الحاجة لخبراء 'الأمن السيبراني' مسألة أمن قومي لجميع الشركات والحكومات.\n\nالجامعات الماليزية التي نقدمها لك لا تعلمك الأمن السيبراني عبر الكتب، بل تضعك في مراكز عمليات أمنية حقيقية (SOC) داخل الحرم الجامعي، لتقوم بمحاكاة عمليات الاختراق والهجمات المعقدة والدفاع عنها، مما يجعلك خبيراً لا يُشق له غبار.",
    degreeLevels: [
      {
        titleEn: "Foundation in IT",
        titleAr: "السنة التحضيرية",
        feesRangeEn: "$4,000 - $6,000",
        feesRangeAr: "$4,000 - $6,000",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "B.Sc. Cyber Security",
        titleAr: "بكالوريوس الأمن السيبراني",
        feesRangeEn: "$6,000 - $9,500 / Year",
        feesRangeAr: "$6,000 - $9,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك (APU)",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Cyber Security Hub",
        annualFeesUSD: "$6,500",
        discountEn: "Up to 30%",
        discountAr: "خصم 30%"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Premium IT",
        annualFeesUSD: "$8,500",
        discountEn: "Elite Quality",
        discountAr: "فخامة وريادة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Foundation of Network Security",
        yearAr: "السنة الأولى: هيكلة أمن الشبكات",
        subjectsEn: ["Network Fundamentals", "Introduction to Security", "Programming Concepts"],
        subjectsAr: ["أساسيات الشبكات المخفية", "مقدمة متقدمة في الأمن الرقمي", "مفاهيم البرمجة وبناء الأكواد"]
      },
      {
        yearEn: "Year 2: Ethical Hacking",
        yearAr: "السنة الثانية: الاختراق الأخلاقي",
        subjectsEn: ["Ethical Hacking & Penetration Testing", "Digital Forensics", "Cryptography"],
        subjectsAr: ["عمليات الاختراق الأخلاقي واختبار الاختراق", "الأدلة الجنائية الرقمية", "التشفير وفك الشفرات المعقدة"]
      },
      {
        yearEn: "Year 3: Advanced Defense",
        yearAr: "السنة الثالثة: الدفاع المتقدم",
        subjectsEn: ["Malware Analysis", "Cyber Incident Response", "Final Project"],
        subjectsAr: ["تحليل البرمجيات الخبيثة", "الاستجابة للحوادث السيبرانية واحتوائها", "المشروع الأمني النهائي"]
      }
    ],
    careerJobsEn: ["Ethical Hacker", "Security Analyst", "Forensics Investigator", "CISO"],
    careerJobsAr: ["مخترق أخلاقي معتمد", "محلل أمن سيبراني", "محقق جنائي رقمي", "مدير أمن معلومات (CISO)"]
  },
  {
    slug: "artificial-intelligence",
    titleEn: "Artificial Intelligence (AI)",
    titleAr: "الذكاء الاصطناعي (AI)",
    heroTaglineEn: "Shape the minds of tomorrow. Lead the AI revolution.",
    heroTaglineAr: "اصنع عقول الغد. انضم إلى ثورة الذكاء الاصطناعي التي เปลี่ยน شكل العالم.",
    introEn: "AI is reshaping human existence. Study Artificial Intelligence in Malaysia to build the core deep learning engines that power tomorrow's industries.",
    introAr: "الذكاء الاصطناعي لم يعد خيالاً علمياً، بل هو المحرك الأساسي لكل الصناعات الحالية والقادمة.\n\nمن خلال دراسة الذكاء الاصطناعي في الجامعات الماليزية المعتمدة، ستغوص في عالم الشبكات العصبية، الرؤية الحاسوبية، والتعلم الآلي لتبني برمجيات فائقة الذكاء تتخذ القرارات بشكل مستقل، مما يجعلك من أكثر المهندسين قيمة في العالم المتقدم.",
    degreeLevels: [
      {
        titleEn: "B.Sc. in AI",
        titleAr: "بكالوريوس الذكاء الاصطناعي",
        feesRangeEn: "$5,500 - $9,000 / Year",
        feesRangeAr: "$5,500 - $9,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "MMU",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Top 1000",
        fieldRanking: "IT Pioneers",
        annualFeesUSD: "$4,800",
        discountEn: "Gov Supported",
        discountAr: "جامعة تكنولوجية ضخمة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Logic & Programming",
        yearAr: "السنة الأولى: المنطق والبرمجة",
        subjectsEn: ["Python for AI", "Mathematical Logic", "Data Structures"],
        subjectsAr: ["برمجة بايثون للذكاء الاصطناعي", "المنطق الرياضي والخوارزمي", "هياكل البيانات"]
      },
      {
        yearEn: "Year 2: Intelligent Systems",
        yearAr: "السنة الثانية: الأنظمة الذكية",
        subjectsEn: ["Neural Networks", "Computer Vision", "Machine Learning"],
        subjectsAr: ["الشبكات العصبية العميقة", "الرؤية الحاسوبية", "التعلم الآلي المتطور"]
      },
      {
        yearEn: "Year 3: Advanced AI",
        yearAr: "السنة الثالثة: ذكاء اصطناعي متقدم",
        subjectsEn: ["Natural Language Processing", "Robotics", "AI Final Project"],
        subjectsAr: ["معالجة اللغات الطبيعية (NLP)", "روبوتات الذكاء الاصطناعي", "مشروع ابتكار ذكي"]
      }
    ],
    careerJobsEn: ["AI Engineer", "Robotics Scientist", "ML Specialist"],
    careerJobsAr: ["مهندس ذكاء اصطناعي", "عالم روبوتات", "متخصص في تعلم الآلة"]
  },
  {
    slug: "business-administration",
    titleEn: "Business Administration (BBA/MBA)",
    titleAr: "إدارة الأعمال (BBA / MBA)",
    heroTaglineEn: "Empower your entrepreneurial spirit. Lead global corporations.",
    heroTaglineAr: "أيقظ روح القيادة داخلك. قم بإدارة كبرى الشركات العالمية وتأسيس إمبراطوريتك.",
    introEn: "A Business Administration degree from a leading Malaysian university provides a dual-continent perspective, bridging Eastern market dynamism with Western business philosophies.",
    introAr: "دراسة إدارة الأعمال في الجامعات الماليزية ليست مجرد حفظ للنظريات، بل هي تجربة عملية مكثفة تدربك على إدارة رأس المال، التسويق الاستراتيجي، والقيادة الريادية.\n\nهنا، ستتعلم كيف تبني شركات وتدير مؤسسات عالمية، وستحظى بشبكة علاقات دولية قوية تمنحك أفضلية ساحقة في سوق العمل الإداري.",
    degreeLevels: [
      {
        titleEn: "Foundation in Business",
        titleAr: "السنة التحضيرية في الأعمال",
        feesRangeEn: "$3,500 - $5,500",
        feesRangeAr: "$3,500 - $5,500",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "Bachelor of Business (BBA)",
        titleAr: "بكالوريوس إدارة الأعمال (BBA)",
        feesRangeEn: "$4,500 - $8,000 / Year",
        feesRangeAr: "$4,500 - $8,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master of Busines Admin (MBA)",
        titleAr: "ماجستير إدارة الأعمال (MBA)",
        feesRangeEn: "$8,000 - $16,000",
        feesRangeAr: "$8,000 - $16,000",
        durationEn: "1 - 1.5 Years",
        durationAr: "سنة إلى سنة ونصف"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 1% Business",
        annualFeesUSD: "$8,500",
        discountEn: "Premium Choice",
        discountAr: "خيار إدارة الأعمال الأول"
      },
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Excellent Business",
        annualFeesUSD: "$8,000",
        discountEn: "Lancaster Partner",
        discountAr: "شراكة دولية قوية"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي",
        href: "/universities/7",
        annualFeesUSD: "$3,200"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Business Fundamentals",
        yearAr: "السنة الأولى: أساسيات الأعمال",
        subjectsEn: ["Microeconomics", "Business Communication", "Principles of Marketing"],
        subjectsAr: ["الاقتصاد الجزئي", "التواصل التجاري الاستراتيجي", "مبادئ التسويق المتقدمة"]
      },
      {
        yearEn: "Year 2: Corporate Strategies",
        yearAr: "السنة الثانية: استراتيجيات الشركات",
        subjectsEn: ["Organizational Behavior", "Financial Management", "International Business"],
        subjectsAr: ["السلوك التنظيمي", "الإدارة المالية الفائقة", "إدارة الأعمال الدولية"]
      },
      {
        yearEn: "Year 3: Leadership & Entrepreneurship",
        yearAr: "السنة الثالثة: القيادة والريادة",
        subjectsEn: ["Strategic Management", "Entrepreneurship", "Business Internship"],
        subjectsAr: ["الإدارة الاستراتيجية", "ريادة الأعمال المبتكرة", "تدريب إداري في شركات كبرى"]
      }
    ],
    careerJobsEn: ["Business Consultant", "Marketing Director", "Operations Manager", "CEO / Entrepreneur"],
    careerJobsAr: ["مستشار أعمال وشركات", "مدير تسويق إقليمي", "مدير عمليات استراتيجية", "رئيس تنفيذي / رائد أعمال"]
  },
  {
    slug: "computer-science",
    titleEn: "Computer Science (CS)",
    titleAr: "علوم الحاسوب (CS)",
    heroTaglineEn: "Unlock the code that runs the universe. Master algorithms, logic, and pure computing power.",
    heroTaglineAr: "اكتشف الشيفرة التي تدير الكون الرقمي. احترف الخوارزميات، المنطق، والقوة الحسابية المطلقة.",
    introEn: "Computer Science is the mother of all computing disciplines. In Malaysia, you explore the deepest theories of computing, equipping you to invent new AI models, develop novel algorithms, and push human knowledge forward.",
    introAr: "علوم الحاسوب هي الأُم الحاضنة والمصنع الأساسي لكل التخصصات التقنية الحديثة.\n\nمن خلال هذا التخصص في نخبة جامعات ماليزيا، لن تكتفي بتعلم كتابة الأكواد، بل ستغوص عميقاً في ابتكار وتصميم الخوارزميات وصناعة لغات برمجة جديدة. هذا التخصص يصنع الخبراء والمفكرين التكنولوجيين القادرين على قيادة ثورات الذكاء الاصطناعي وبناء أنظمة لا مثيل لها.",
    degreeLevels: [
      {
        titleEn: "Foundation in Computing",
        titleAr: "السنة التحضيرية في الحوسبة",
        feesRangeEn: "$4,000 - $6,000",
        feesRangeAr: "$4,000 - $6,000",
        durationEn: "1 Year",
        durationAr: "سنة واحدة"
      },
      {
        titleEn: "B.Sc. Computer Science",
        titleAr: "بكالوريوس علوم الحاسوب",
        feesRangeEn: "$5,000 - $9,000 / Year",
        feesRangeAr: "$5,000 - $9,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 180 Global CS",
        annualFeesUSD: "$8,500",
        discountEn: "Premium Pathway",
        discountAr: "جامعة النخبة"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك (APU)",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Tech Pioneers",
        annualFeesUSD: "$6,500",
        discountEn: "Up to 30%",
        discountAr: "منح استثنائية 30%"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي ماليزيا",
        href: "/universities/7",
        annualFeesUSD: "$3,800"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Logic & Programming",
        yearAr: "السنة الأولى: المنطق والخوارزميات الأساسية",
        subjectsEn: ["Discrete Mathematics", "Data Structures", "Object-Oriented Programming (Java)"],
        subjectsAr: ["الرياضيات المتقطعة (أساس الحاسوب)", "هياكل البيانات", "البرمجة كائنية التوجه (OOP)"]
      },
      {
        yearEn: "Year 2: Advanced Systems",
        yearAr: "السنة الثانية: هندسة الأنظمة المتقدمة",
        subjectsEn: ["Algorithm Design & Analysis", "Operating Systems", "Computer Architecture"],
        subjectsAr: ["تصميم وتحليل الخوارزميات المعقدة", "بناء وتصميم أنظمة التشغيل", "هندسة معمارية الحواسيب"]
      },
      {
        yearEn: "Year 3: Innovation",
        yearAr: "السنة الثالثة: الابتكار والبحث العلمي",
        subjectsEn: ["Theory of Computation", "Machine Learning", "Final Capstone Project"],
        subjectsAr: ["نظرية الحسابية", "التعلم الآلي (Machine Learning)", "مشروع التخرج والبحث العلمي المتقدم"]
      }
    ],
    careerJobsEn: ["Algorithm Designer", "Data Scientist", "Research Scientist", "Lead Developer", "Software Architect"],
    careerJobsAr: ["عالم خوارزميات (Algorithm Designer)", "باحث ومهندس ذكاء اصطناعي", "معماري وباحث برمجيات", "عالم تقنية (Research Scientist)"]
  },
  {
    slug: "information-technology",
    titleEn: "Information Technology (IT)",
    titleAr: "تقنية المعلومات (IT)",
    heroTaglineEn: "Manage the digital ecosystems of megacorporations. Keep the world connected.",
    heroTaglineAr: "أدر النظم البيئية الرقمية للشركات العملاقة. ابقِ العالم متصلاً ومحميًا.",
    introEn: "Information Technology forms the operational backbone of every company on Earth. Studying IT in Malaysia gives you hands-on experience in managing enterprise databases, networks, and large-scale tech deployments.",
    introAr: "تقنية المعلومات تشكل العمود الفقري القلبي والتشغيلي لأي منشأة حديثة على وجه الأرض.\n\nبدلاً من التركيز على صناعة الكود من الصفر كمهندس برمجيات، ستتعلم في هذا التخصص كيفية دمج، إدارة، وحماية شبكات وأنظمة التكنولوجيا المعقدة لإبقاء الشركات العملاقة تعمل بلا توقف. دراسة الـ IT في ماليزيا تتضمن شهادات مدمجة من Cisco و Microsoft لجعلك رقماً صعباً في سوق العمل.",
    degreeLevels: [
      {
        titleEn: "Bachelor of IT",
        titleAr: "بكالوريوس تقنية المعلومات",
        feesRangeEn: "$4,500 - $8,000 / Year",
        feesRangeAr: "$4,500 - $8,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا (MMU)",
        href: "/universities/5",
        worldRanking: "Nation's Tech Hub",
        fieldRanking: "IT Dominance",
        annualFeesUSD: "$4,800",
        discountEn: "Highly Recognized",
        discountAr: "الجامعة التكنولوجية الأقوى"
      },
      {
        nameEn: "INTI International University",
        nameAr: "جامعة إنتي الدولية",
        href: "/universities/6",
        worldRanking: "Global Access",
        fieldRanking: "Coventry UK Partner",
        annualFeesUSD: "$5,500",
        discountEn: "UK Dual Degree",
        discountAr: "شهادة مزدوجة من بريطانيا"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: IT Fundamentals",
        yearAr: "السنة الأولى: أساسيات التقنية المتصلة",
        subjectsEn: ["Introduction to IT", "Computer Networks", "Basic Databases"],
        subjectsAr: ["مقدمة في البنية التحتية للحوسبة", "أساسيات شبكات الحاسب (Cisco)", "تطوير وإدارة قواعد البيانات"]
      },
      {
        yearEn: "Year 2: Enterprise Systems",
        yearAr: "السنة الثانية: أنظمة المشاريع والشركات",
        subjectsEn: ["System Administration", "Web Technologies", "Cloud Computing"],
        subjectsAr: ["إدارة وصيانة الأنظمة", "تقنيات الويب المؤسسية", "هندسة الحوسبة السحابية (AWS)"]
      },
      {
        yearEn: "Year 3: Integration & Management",
        yearAr: "السنة الثالثة: التكامل التكنولوجي",
        subjectsEn: ["IT Project Management", "Information Security", "Internship"],
        subjectsAr: ["إدارة المشاريع التقنية", "تأمين وحماية المعلومات", "التدريب الميداني في الشركات"]
      }
    ],
    careerJobsEn: ["IT Infrastructure Manager", "Network Administrator", "Cloud Service Manager", "Systems Analyst"],
    careerJobsAr: ["مدير البنية التحتية التقنية", "مهندس ومدير شبكات", "مدير خدمات سحابية", "محلل نظم معلومات تجارية"]
  },
  {
    slug: "computer-engineering",
    titleEn: "Computer Engineering",
    titleAr: "هندسة الحاسوب (Computer Engineering)",
    heroTaglineEn: "Bridge the gap between hardware and software. Engineer the next generation of smart devices.",
    heroTaglineAr: "اجمع بين قوة الإلكترونيات الساحقة وعقل البرمجيات. صمم المعالجات والأجهزة الذكية للمستقبل.",
    introEn: "Computer Engineers make magic happen at the circuit level. By combining Electrical Engineering with Computer Science, you will design microprocessors, IoT devices, and powerful supercomputers.",
    introAr: "مهندسو الحاسوب هم السحرة الذين يصنعون الأجهزة التي نستخدمها؛ فهم يجمعون ببراعة بين 'الهندسة الكهربائية' و'علوم البرمجيات'.\n\nدراسة هندسة الحاسوب في ماليزيا ستدخلك إلى مختبرات النانو والمعالجات الدقيقة، لتصميم الدوائر الكهربائية المعقدة، وبناء أجهزة إنترنت الأشياء (IoT) والأنظمة المدمجة التي تتحكم في الصواريخ، السيارات الذكية، والمعدات الطبية.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Computer Engineering (B.Eng)",
        titleAr: "بكالوريوس هندسة الحاسوب",
        feesRangeEn: "$6,500 - $9,500 / Year",
        feesRangeAr: "$6,500 - $9,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات (مكثفة هندسياً)"
      }
    ],
    topUniversities: [
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا (MMU)",
        href: "/universities/5",
        worldRanking: "Engineering Hub",
        fieldRanking: "Top 5 Engineering",
        annualFeesUSD: "$5,200",
        discountEn: "State-of-art Labs",
        discountAr: "مختبرات بملايين الدولارات"
      },
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي",
        href: "/universities/3",
        worldRanking: "5 Star Rating",
        fieldRanking: "Practical Focus",
        annualFeesUSD: "$4,500",
        discountEn: "Highly Affordable",
        discountAr: "اقتصادية وشراكات دولية"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Core Physics & Logic",
        yearAr: "السنة الأولى: الفيزياء والمنطق الرقمي",
        subjectsEn: ["Engineering Physics", "Digital Logic Design", "Circuit Analysis"],
        subjectsAr: ["الفيزياء الهندسية", "تصميم المنطق الرقمي", "تحليل الدوائر الكهربائية والإلكترونية"]
      },
      {
        yearEn: "Year 2: Microprocessors",
        yearAr: "السنة الثانية: المعالجات الدقيقة",
        subjectsEn: ["Microprocessor Architecture", "Signals & Systems", "C++ for Hardware"],
        subjectsAr: ["معمارية وهندسة المعالجات الدقيقة", "معالجة الإشارات والأنظمة", "البرمجة للدوائر المدمجة (C/C++)"]
      },
      {
        yearEn: "Year 3 & 4: System Design & IoT",
        yearAr: "السنة 3 و 4: تصميم الأنظمة والـ IoT",
        subjectsEn: ["Embedded Systems", "VLSI Design", "Internet of Things", "Final Year Engineering Project"],
        subjectsAr: ["الأنظمة المدمجة", "تصميم الدوائر المتكاملة جداً (VLSI)", "شبكات وإنترنت الأشياء (IoT)", "تصميم مشروع التخرج الهندسي"]
      }
    ],
    careerJobsEn: ["Hardware Layout Engineer", "Embedded Systems Designer", "IoT Architect", "Microchip Designer"],
    careerJobsAr: ["مهندس تصميم وأبحاث هاردوير", "مهندس أنظمة مدمجة", "معماري إنترنت الأشياء (IoT)", "مصمم ومطور شرائح دقيقة"]
  },
  {
    slug: "biomedical-engineering",
    titleEn: "Biomedical Engineering",
    titleAr: "الهندسة الطبية الحيوية (Biomedical Engineering)",
    heroTaglineEn: "Merge engineering with medicine. Create life-saving advanced healthcare technologies.",
    heroTaglineAr: "ادمج العبقرية الهندسية مع الطب. ابتكر تكنولوجيا الرعاية الصحية لإنقاذ ملايين الأرواح.",
    introEn: "Biomedical Engineering sits at the intersection of human biology and advanced mechanical/electrical engineering. You'll build pacemakers, bionic limbs, and MRI machines.",
    introAr: "الهندسة الطبية الحيوية هي التخصص الذي يجلس فيه المهندس والطبيب على نفس الطاولة.\n\nمن خلال هذا التخصص المستقبلي في ماليزيا، ستجمع بين الهندسة الميكانيكية، الكهربائية، وعلم الأحياء البشري لتصميم الأعضاء الصناعية، الأطراف الذكية (Bionic Limbs)، وأجهزة الرنين المغناطيسي لإنقاذ حياة آلاف المرضى وإحداث طفرة في القطاع الصحي.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Biomedical Engineering (B.Eng)",
        titleAr: "بكالوريوس الهندسة الطبية الحيوية",
        feesRangeEn: "$5,500 - $8,000 / Year",
        feesRangeAr: "$5,500 - $8,000 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top Tier Medical Eng",
        annualFeesUSD: "$9,000",
        discountEn: "Premium Choice",
        discountAr: "أقوى مختبرات طبية وهندسية"
      },
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        worldRanking: "Health Sciences Hub",
        fieldRanking: "Specialized",
        annualFeesUSD: "$4,500",
        discountEn: "Health Focus",
        discountAr: "جامعة متخصصة طبياً"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Bio & Core Engineering",
        yearAr: "السنة الأولى: دمج الطب والهندسة",
        subjectsEn: ["Human Anatomy & Physiology", "Engineering Mechanics", "Biomedical Materials"],
        subjectsAr: ["علم التشريح ووظائف الأعضاء", "الميكانيكا الهندسية", "علوم المواد الطبية الحيوية"]
      },
      {
        yearEn: "Year 2: Bio-Signals & Sensors",
        yearAr: "السنة الثانية: الإشارات والاستشعارات الطبية",
        subjectsEn: ["Medical Instrumentation", "Biomechanics", "Biosignal Processing"],
        subjectsAr: ["تصميم الأجهزة والمعدات الطبية", "الميكانيكا الحيوية (Biomechanics)", "معالجة الإشارات الحيوية لجسم الإنسان"]
      },
      {
        yearEn: "Year 3 & 4: Prototypes & Implants",
        yearAr: "السنة 3 و 4: النماذج وزراعة الأعضاء",
        subjectsEn: ["Artificial Organs", "Rehabilitation Engineering", "Clinical Attachment"],
        subjectsAr: ["تصميم وزراعة الأعضاء الصناعية", "هندسة إعادة التأهيل الحركي", "التدريب الميداني والسريري في المستشفيات"]
      }
    ],
    careerJobsEn: ["Medical Device Engineer", "Bionic Prosthetics Designer", "Clinical Engineer", "Biomedical Researcher"],
    careerJobsAr: ["مهندس أجهزة طبية دقيقة", "مصمم أطراف صناعية ذكية", "مهندس سريري في المستشفيات", "باحث استشاري في الابتكار الطبي"]
  },
  {
    slug: "mechatronics",
    titleEn: "Mechatronics Engineering",
    titleAr: "هندسة الميكاترونكس (Mechatronics)",
    heroTaglineEn: "The ultimate triad of Mechanics, Electronics, and Computing. Engineer the automated future.",
    heroTaglineAr: "الثالوث المطلق: ميكانيكا، إلكترونيات، وبرمجة. صمم أنظمة الأتمتة وآلات المستقبل.",
    introEn: "Mechatronics is the synergy of mechanical and electronic engineering with intelligent computer control. In Malaysia, you will master industrial automation, drones, and smart manufacturing systems.",
    introAr: "في عالم الصناعة الحديثة، لم تعد الميكانيكا تعمل وحدها! هندسة 'الميكاترونكس' هي المزيج الأقوى الذي يوحد الميكانيكا، الإلكترونيات، والأنظمة المبرمجة معاً.\n\nمن خلال جامعات ماليزيا التكنولوجية، ستتعلم كيف تجعل الآلات الميكانيكية الصماء 'تتحرك بذكاء وتفكر' لبناء سيارات ذاتية القيادة، طائرات بدون طيار (Drones)، وخطوط إنتاج المصانع الذكية.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Mechatronics Eng. (B.Eng)",
        titleAr: "بكالوريوس هندسة الميكاترونكس",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "IR 4.0 Leader",
        annualFeesUSD: "$7,000",
        discountEn: "Top Rated",
        discountAr: "الأولى تكنولوجياً"
      },
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي",
        href: "/universities/3",
        worldRanking: "5 Star Tier",
        fieldRanking: "Industry Connections",
        annualFeesUSD: "$4,500",
        discountEn: "Value & Quality",
        discountAr: "جامعة قوية واقتصادية"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: The Three Pillars",
        yearAr: "السنة الأولى: الأعمدة الثلاثة",
        subjectsEn: ["Thermodynamics", "Analogue Electronics", "Engineering Software"],
        subjectsAr: ["الديناميكا الحرارية التطبيقية", "أساسيات الإلكترونيات التناظرية", "البرمجة والخوارزميات الهندسية"]
      },
      {
        yearEn: "Year 2: Bringing Mechanics to Life",
        yearAr: "السنة الثانية: إحياء الآلات",
        subjectsEn: ["Kinematics & Dynamics", "Power Electronics", "Control Systems"],
        subjectsAr: ["الكينماتيكا وديناميكية الآلات", "إلكترونيات القوى ومحولات الطاقة", "أنظمة التحكم وهندستها"]
      },
      {
        yearEn: "Year 3 & 4: Automation Factory",
        yearAr: "السنة 3 و 4: مصانع الأتمتة الذكية",
        subjectsEn: ["Industrial Automation", "Machine Vision", "Robotics Dynamics"],
        subjectsAr: ["أنظمة الأتمتة الصناعية (PLC/SCADA)", "هندسة الرؤية الآلية لمعالجة الصور", "ديناميكية وتحكم الروبوتات المتقدم"]
      }
    ],
    careerJobsEn: ["Automation Engineer", "Mechatronics Systems Designer", "Control System Engineer", "Automotive Tech Engineer"],
    careerJobsAr: ["مهندس أتمتة وتحكم آلي", "مصمم أنظمة ميكاترونيكية مختلطة", "مهندس أنظمة المراقبة (SCADA)", "مهندس تطوير في صناعة السيارات الذكية"]
  },
  {
    slug: "robotics",
    titleEn: "Robotics Engineering / Intelligent Systems",
    titleAr: "هندسة الروبوتات والأنظمة الذكية",
    heroTaglineEn: "Build autonomous machines that see, learn, and act. Give iron a brain.",
    heroTaglineAr: "اصنع آلات بصرية ذاتية القيادة تفكر وتتعلم وتتصرف. امنح الحديد عقلاً وحياة.",
    introEn: "Robotics takes Mechatronics and AI to the absolute extreme. You'll study path planning, deep reinforcement learning, and advanced sensor integration to build humanoid robots.",
    introAr: "الروبوتات تمثل ذروة الإنجاز البشري في دمج الذكاء الاصطناعي مع الآلات المعقدة.\n\nستدرس في ماليزيا كيفية تصميم وبناء روبوتات تناطح القدرات البشرية، من روبوتات الجراحة الطبية الدقيقة إلى روبوتات الإنقاذ واستكشاف الفضاء. هذا التخصص مخصص للعقول الشغوفة بنقل البشرية لمرحلة الـ Cyborgs والآلات فائقة الذكاء.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Robotics & Cybernetics",
        titleAr: "بكالوريوس علم الروبوتات والسيبرانية",
        feesRangeEn: "$6,000 - $9,000 / Year",
        feesRangeAr: "$6,000 - $9,000 / سنويًا",
        durationEn: "3 - 4 Years",
        durationAr: "3 إلى 4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Robotics Innovation",
        annualFeesUSD: "$9,000",
        discountEn: "Premium Makerspace",
        discountAr: "أقوى مختبرات الاختراع"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "AI & Robotics Focus",
        annualFeesUSD: "$7,000",
        discountEn: "30% Merit Scholarship",
        discountAr: "شراكات حقيقية لصناعة الروبوتات"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Kinematics & AI Basics",
        yearAr: "السنة الأولى: حركية الآلات وأساسيات الذكاء",
        subjectsEn: ["Robotics Fundamentals", "AI Logic", "Sensor Technologies"],
        subjectsAr: ["أساسيات هندسة الروبوتات وحركة المفاصل", "البرمجة المنطقية للذكاء الاصطناعي", "هندسة وتقنيات المستشعرات (Sensors)"]
      },
      {
        yearEn: "Year 2: Perception & Motion",
        yearAr: "السنة الثانية: الإدراك البصري والحركة",
        subjectsEn: ["Path Planning", "Computer Vision for Robots", "Human-Robot Interaction"],
        subjectsAr: ["تخطيط مسار الروبوت (تخطي العقبات)", "الرؤية الحاسوبية لاكتشاف البيئة", "التفاعل المتقدم بين الإنسان والروبوت"]
      },
      {
        yearEn: "Year 3: Swarm Robotics & Autonomy",
        yearAr: "السنة الثالثة: الروبوتات الاستقلالية والسرب",
        subjectsEn: ["Swarm Intelligence", "Autonomous Vehicles AI", "Advanced Cybernetics"],
        subjectsAr: ["ذكاء السرب المتزامن للروبوتات المتعددة", "الذكاء الاصطناعي للمركبات ذاتية القيادة", "السيبرانية المتقدمة للتحكم الفائق"]
      }
    ],
    careerJobsEn: ["Robotics Software Engineer", "Autonomous Vehicle Researcher", "Drone Flight Controller", "Humanoid Robotics Architect"],
    careerJobsAr: ["مهندس برمجيات حركية للروبوتات", "باحث ومطور أنظمة للمركبات والطائرات المستقلة", "معماري بناء روبوتات شبيهة بالبشر (Humanoid)", "مهندس تحكم روبوتي في المصانع والصناعات الثقيلة"]
  },
  {
    slug: "data-science",
    titleEn: "Data Science (Advanced)",
    titleAr: "علوم البيانات المتقدمة (Data Science)",
    heroTaglineEn: "Predict the future. Transform raw big data into multi-million dollar business decisions.",
    heroTaglineAr: "اكتشف إشارات المستقبل المخفية. حول المليارات المبعثرة من البيانات إلى قرارات تجارية تصنع ثروات طائلة.",
    introEn: "Data Science is the purest form of predictive magic in the tech world. Earning your Data Science degree in Malaysia puts you at the edge of the financial and tech startup sectors.",
    introAr: "علم البيانات هو السحر الحقيقي للتنبؤ بسلوك الأسواق قبل حدوثه.\n\nستتعمق بشكل كثيف في بناء النماذج الإحصائية والنمذجة التنبؤية المعقدة لاكتشاف الأنماط المخفية بين ملايين الأرقام العشوائية في قاعدة البيانات واستنتاج الحلول. الجامعات الماليزية تزودك بمختبرات (Big Data) من شركات عالمية مثل IBM لتكون مؤهلاً من اليوم الأول.",
    degreeLevels: [
      {
        titleEn: "B.Sc. Data Science",
        titleAr: "بكالوريوس علوم البيانات",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي (Sunway)",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Premium Analytics",
        annualFeesUSD: "$9,000",
        discountEn: "Lancaster Dual Degree",
        discountAr: "شهادة مزدوجة (ماليزية/بريطانية)"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك (APU)",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Tier 1 Data Science",
        annualFeesUSD: "$6,500",
        discountEn: "30% Merit Scholarship",
        discountAr: "الأفضل والأقوى على مستوى البلاد"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Deep Mathematics & Python",
        yearAr: "السنة الأولى: الرياضيات العميقة والبايثون",
        subjectsEn: ["Advanced Statistics", "Python for Data Science", "Data Engineering Basics"],
        subjectsAr: ["الإحصاء الرياضي المتقدم", "برمجة بايثون لتحليل البيانات العملاقة", "تأسيس معمارية هندسة البيانات"]
      },
      {
        yearEn: "Year 2: Predictive Modeling",
        yearAr: "السنة الثانية: النمذجة التنبؤية",
        subjectsEn: ["Machine Learning Models", "R Programming", "Big Data Architecture"],
        subjectsAr: ["بناء نماذج وأدوات التعلم الآلي", "البرمجة الإحصائية بلغة R", "معمارية معالجة البيانات الضخمة (Hadoop/Spark)"]
      },
      {
        yearEn: "Year 3: AI Output & Strategies",
        yearAr: "السنة الثالثة: مخرجات الذكاء واستراتيجيات الأعمال",
        subjectsEn: ["Deep Learning & Tensor Flow", "Business Intelligence", "Industry Data Project"],
        subjectsAr: ["التعلم العميق باستخدام TensorFlow", "ذكاء الأعمال واستخراج التقارير الاستراتيجية", "مشروع تحليل ومحاكاة بيانات ضخمة للسوق"]
      }
    ],
    careerJobsEn: ["Data Scientist", "Big Data Engineer", "Machine Learning Modeler", "Predictive Analyst"],
    careerJobsAr: ["عالم بيانات معتمد (Data Scientist)", "مهندس منصات بيانات ضخمة (Big Data Engineer)", "مطور ومصمم نماذج تعلم الآلة", "محلل تنبؤي ومستشار ذكاء أعمال"]
  },
  {
    slug: "architecture",
    titleEn: "Architecture",
    titleAr: "الهندسة المعمارية (Architecture)",
    heroTaglineEn: "Design the skylines of tomorrow. Master the art and science of building the impossible.",
    heroTaglineAr: "صمم أفق الغد المعماري. احترف الفن الراقي والهندسة الدقيقة لبناء المستحيل.",
    introEn: "Architecture is the ultimate expression of human culture and engineering. In Malaysia, you will learn to design sustainable skyscrapers, smart cities, and breathtaking interior spaces using cutting-edge BIM technologies.",
    introAr: "الهندسة المعمارية هي التعبير الأسمى عن ثقافة البشر وإبداعهم الهندسي.\n\nمن خلال دراسة الهندسة المعمارية في ماليزيا (موطن ابتكار ناطحات السحاب)، ستتعلم كيفية المزج بين الفن الاستثنائي والرياضيات الدقيقة لتصميم مدن ذكية ومبانٍ خضراء مستدامة تقاوم الزمن. الجامعات هنا معتمدة من Board of Architects Malaysia (LAM) مما يضمن لك اعترافاً عالمياً فورياً.",
    degreeLevels: [
      {
        titleEn: "B.Sc. Architecture (LAM Part 1)",
        titleAr: "بكالوريوس العمارة (Part 1)",
        feesRangeEn: "$6,500 - $9,500 / Year",
        feesRangeAr: "$6,500 - $9,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      },
      {
        titleEn: "Master of Architecture (LAM Part 2)",
        titleAr: "ماجستير العمارة (Part 2)",
        feesRangeEn: "$8,000 - $12,000 / Year",
        feesRangeAr: "$8,000 - $12,000 / سنويًا",
        durationEn: "2 Years",
        durationAr: "سنتان"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 100 Built Environment",
        annualFeesUSD: "$9,500",
        discountEn: "Premium Studio",
        discountAr: "أرقى استوديوهات التصميم"
      },
      {
        nameEn: "UCSI University",
        nameAr: "جامعة UCSI",
        href: "/universities/4",
        worldRanking: "Top 1% QS",
        fieldRanking: "LAM Accredited",
        annualFeesUSD: "$7,500",
        discountEn: "High Employment",
        discountAr: "توظيف عالي للخريجين"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي ماليزيا",
        href: "/universities/7",
        annualFeesUSD: "$4,500"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Design Fundamentals",
        yearAr: "السنة الأولى: أساسيات التصميم المعماري",
        subjectsEn: ["Design Studio 1", "History of Architecture", "Building Construction Basics", "Environmental Science"],
        subjectsAr: ["استوديو التصميم المعماري الأول", "تاريخ العمارة العالمية", "أساسيات الإنشاءات ومواد البناء", "علوم البيئة المعمارية"]
      },
      {
        yearEn: "Year 2: Spatial & Urban Design",
        yearAr: "السنة الثانية: الفراغ والتصميم الحضري",
        subjectsEn: ["Design Studio 3", "Building Services", "Computer-Aided Design (CAD)", "Theory of Design"],
        subjectsAr: ["استوديو تصميم المشاريع المعقدة", "خدمات وأنظمة المباني", "التصميم المتقدم بمساعدة الحاسوب (BIM/CAD)", "نظريات وفلسفات العمارة"]
      },
      {
        yearEn: "Year 3: Pre-Professional Mastery",
        yearAr: "السنة الثالثة: الاحتراف وإدارة المشاريع",
        subjectsEn: ["Advanced Design Studio", "Project Management", "Working Drawings & Specifications", "Professional Practice"],
        subjectsAr: ["استوديو التخرج المعماري الشامل", "إدارة المشاريع الإنشائية", "المخططات التنفيذية والمواصفات", "الممارسة المهنية والقوانين المعمارية"]
      }
    ],
    careerJobsEn: ["Architect (LAM Certified)", "Urban Planner", "Interior Architect", "Landscape Designer"],
    careerJobsAr: ["مهندس معماري معتمد", "مخطط حضري للمدن", "معماري تصميم داخلي", "مصمم لاندسكيب (مساحات خارجية)"]
  },
  {
    slug: "mechanical-engineering",
    titleEn: "Mechanical Engineering",
    titleAr: "الهندسة الميكانيكية (Mechanical)",
    heroTaglineEn: "Master the mechanics of motion. Power the heavy industries of the world.",
    heroTaglineAr: "امتلك قوة الآلات في قبضتك. أدر عجلات الصناعات الثقيلة واصنع محركات المستقبل.",
    introEn: "Mechanical Engineering is the broadest of all engineering disciplines. From aerospace jet engines to delicate nanomaterials, you study in highly advanced Malaysian labs to become a versatile engineering leader.",
    introAr: "الهندسة الميكانيكية هي 'أم الهندسات التطبيقية' وأوسعها مجالاً.\n\nمن تصميم محركات الطائرات النفاثة والسيارات السريعة، إلى تصميم أنظمة التبريد المركزية ومحطات توليد الطاقة. دراسة الميكانيكا في ماليزيا توفر لك توازناً مثالياً بين النظريات الفيزيائية المعقدة والتطبيق الميداني في مصانع ضخمة مجهزة بأحدث آلات الـ (CNC) والروبوتات الصناعية.",
    degreeLevels: [
      {
        titleEn: "B.Eng Mechanical Engineering",
        titleAr: "بكالوريوس الهندسة الميكانيكية",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Engineering Elite",
        fieldRanking: "Top 5 Private",
        annualFeesUSD: "$5,200",
        discountEn: "Fully Accredited",
        discountAr: "اعتماد كامل لـ Washington Accord"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "World-Class Labs",
        annualFeesUSD: "$8,500",
        discountEn: "CDIO Initiative",
        discountAr: "نظام CDIO العالمي للمهندسين"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Statics & Dynamics",
        yearAr: "السنة الأولى: السكون وديناميكا الحركة",
        subjectsEn: ["Engineering Mechanics", "Thermodynamics 1", "Engineering Mathematics", "Fluid Mechanics"],
        subjectsAr: ["الميكانيكا الهندسية (ستاتيكا وديناميكا)", "الديناميكا الحرارية", "الرياضيات الهندسية المتقدمة", "ميكانيكا الموائع والغازات"]
      },
      {
        yearEn: "Year 2: Materials & Solid Mechanics",
        yearAr: "السنة الثانية: علم المواد وميكانيكا الجوامد",
        subjectsEn: ["Solid Mechanics", "Material Science", "Manufacturing Technology", "Heat Transfer"],
        subjectsAr: ["ميكانيكا الأجسام الصلبة والتشوه", "علم وهندسة المواد الصناعية", "تكنولوجيا وعمليات التصنيع", "انتقال الحرارة والطاقة"]
      },
      {
        yearEn: "Year 3 & 4: Design & Applied Engineering",
        yearAr: "السنة 3 و 4: التصميم والتطبيقات",
        subjectsEn: ["Machine Design", "Aerodynamics", "Control Systems", "Final Year Engineering Project"],
        subjectsAr: ["تصميم أجزاء الآلات المعقدة", "الديناميكا الهوائية للطائرات والمركبات", "أنظمة التحكم والحاسب الصناعي", "مشروع التخرج الهندسي الشامل"]
      }
    ],
    careerJobsEn: ["Mechanical Design Engineer", "Aerospace Engineer", "Manufacturing Manager", "Energy Systems Engineer"],
    careerJobsAr: ["مهندس تصميم آلات ميكانيكية", "مهندس طيران وهياكل طائرات", "مدير إنتاج وتصنيع صناعي", "مهندس أنظمة طاقة وتبريد مركزي"]
  },
  {
    slug: "civil-engineering",
    titleEn: "Civil Engineering",
    titleAr: "الهندسة المدنية (Civil)",
    heroTaglineEn: "Construct the foundations of society. Build resilient megastructures.",
    heroTaglineAr: "رسّخ قواعد الحضارة الحديثة. ابنِ ناطحات السحاب، الجسور العملاقة، ومدن المستقبل المقاومة للزلازل.",
    introEn: "Civil Engineering deals with the design, construction, and maintenance of the physical and naturally built environment. In Malaysia, you will learn to build monumental infrastructures that withstand the elements.",
    introAr: "الهندسة المدنية هي أقدم فروع الهندسة وأعظمها أثراً على البشرية.\n\nمن خلال هذا التخصص، ستتعلم هندسة التربة، الهياكل الخرسانية، وهندسة المياه والمواصلات. ستدرس في ماليزيا كيفية إنشاء الأنفاق تحت الأرض، الجسور المعلقة المعقدة، وناطحات السحاب، باستخدام أحدث برامج التحليل الإنشائي والزلازل.",
    degreeLevels: [
      {
        titleEn: "B.Eng Civil Engineering",
        titleAr: "بكالوريوس الهندسة المدنية",
        feesRangeEn: "$5,500 - $8,000 / Year",
        feesRangeAr: "$5,500 - $8,000 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي",
        href: "/universities/3",
        worldRanking: "Excellent Quality",
        fieldRanking: "Strong Civil Hub",
        annualFeesUSD: "$4,500",
        discountEn: "Cost Effective",
        discountAr: "اقتصادية وشديدة القوة"
      },
      {
        nameEn: "UCSI University",
        nameAr: "جامعة UCSI",
        href: "/universities/4",
        worldRanking: "Top 1% QS",
        fieldRanking: "Built Environment",
        annualFeesUSD: "$7,200",
        discountEn: "Elite Level",
        discountAr: "تصنيف عالمي ممتاز"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "IUKL",
        nameAr: "جامعة كوالالمبور للبنية التحتية",
        href: "/universities/14",
        annualFeesUSD: "$4,000"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Static Foundations",
        yearAr: "السنة الأولى: الركائز والأساسيات الإنشائية",
        subjectsEn: ["Statics", "Surveying", "Civil Engineering Materials", "Fluid Mechanics"],
        subjectsAr: ["علم السكون والقوى (ستاتيكا)", "هندسة المساحة والجيوماتكس", "مواد البناء المدنية ومكوناتها", "ميكانيكا الموائع القابلة للتدفق"]
      },
      {
        yearEn: "Year 2: Structures & Geotechnics",
        yearAr: "السنة الثانية: التحليل الإنشائي والتربة",
        subjectsEn: ["Structural Analysis", "Geotechnical Engineering 1", "Highway Engineering", "Hydraulics"],
        subjectsAr: ["التحليل الإنشائي للمباني", "الهندسة الجيوتقنية (هندسة التربة الأساسية)", "هندسة الطرق السريعة والمواصلات", "الهيدروليكا المائية والصدود"]
      },
      {
        yearEn: "Year 3 & 4: Reinforced Design",
        yearAr: "السنة 3 و 4: التصميم الخرساني والمعدني",
        subjectsEn: ["Reinforced Concrete Design", "Steel Design", "Project Estimation", "Final Year Layout"],
        subjectsAr: ["تصميم المنشآت الخرسانية المسلحة", "تصميم الهياكل الفولاذية والمعدنية", "إدارة المشاريع وحساب الكميات (BIM)", "مشروع التخرج في البنية التحتية والأبراج"]
      }
    ],
    careerJobsEn: ["Structural Engineer", "Geotechnical Engineer", "Site Manager", "Project Estimator"],
    careerJobsAr: ["مهندس إنشائي معتمد", "مهندس جيوتقني (تربة وأساسات)", "مدير مواقع مشاريع ضخمة", "مهندس تسعير وحساب كميات"]
  },
  {
    slug: "accounting",
    titleEn: "Accounting & Finance",
    titleAr: "المحاسبة والتمويل (Accounting)",
    heroTaglineEn: "Speak the language of business. Control the flow of massive capital.",
    heroTaglineAr: "تحدث لغة المال بطلاقة. تحكم في تدفقات رؤوس الأموال وكن العمود الفقري لأي إمبراطورية تجارية.",
    introEn: "Accounting is the language of business. A degree from Malaysia equips you with exemptions for ACCA, CPA, and CIMA, accelerating your path to becoming a Chartered Accountant globally.",
    introAr: "لا توجد شركة تقنية، أو مستشفى، أو مؤسسة حكومية على وجه الأرض يمكنها البقاء يوماً واحداً بدون 'المحاسب المالي'.\n\nتتميز دراسة المحاسبة في ماليزيا بالشراكة المباشرة مع أعظم الكيانات العالمية (ACCA, CPA, CIMA). بمجرد تخرجك، ستحصل على إعفاءات ضخمة من امتحانات الزمالة الدولية، مما يجعلك 'محاسب قانوني معتمد' بسرعة صاروخية، جاهزاً لقيادة الإدارات المالية لشركات الـ Fortune 500.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Accounting (Hons)",
        titleAr: "بكالوريوس المحاسبة (مرتبة الشرف)",
        feesRangeEn: "$4,500 - $7,500 / Year",
        feesRangeAr: "$4,500 - $7,500 / سنويًا",
        durationEn: "3 - 3.5 Years",
        durationAr: "3 إلى 3.5 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "ACCA Platinum Status",
        annualFeesUSD: "$8,000",
        discountEn: "High Exemptions",
        discountAr: "إعفاءات كاملة لزمالة ACCA"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة آسيا باسيفيك",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Fintech Focus",
        annualFeesUSD: "$6,500",
        discountEn: "Financial Tech",
        discountAr: "قوة في التقنية المالية (FinTech)"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي ماليزيا",
        href: "/universities/7",
        annualFeesUSD: "$3,200"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1: Financial Fundamentals",
        yearAr: "السنة الأولى: المبادئ المحاسبية",
        subjectsEn: ["Financial Accounting 1", "Micro & Macro Economics", "Business Law", "Quantitative Methods"],
        subjectsAr: ["المحاسبة المالية والاستاذ العام", "الاقتصاد الجزئي والكلي للأعمال", "القانون التجاري وقوانين الشركات", "أساليب التحليل الكمي والاحتمالات"]
      },
      {
        yearEn: "Year 2: Corporate Reporting",
        yearAr: "السنة الثانية: تقارير الشركات والتكاليف",
        subjectsEn: ["Corporate Accounting", "Cost & Management Accounting", "Taxation", "Audit & Assurance Basics"],
        subjectsAr: ["محاسبة الشركات المتقدمة والتقارير", "محاسبة التكاليف والإدارة الاستراتيجية", "قوانين الضرائب وتخطيطها", "أساسيات التدقيق الداخلي والخارجي"]
      },
      {
        yearEn: "Year 3: Advanced FinTech",
        yearAr: "السنة الثالثة: التدقيق والتمويل المتقدم",
        subjectsEn: ["Advanced Auditing", "Corporate Finance", "Accounting Info Systems", "Strategic Business Reporting"],
        subjectsAr: ["التدقيق والضمان الدقيق (المتقدم)", "تمويل الشركات المتقدم (Corporate Finance)", "نظم المعلومات المحاسبية المحوسبة", "التقارير الاستراتيجية والتحليل المالي للبورصة"]
      }
    ],
    careerJobsEn: ["Chartered Accountant (ACCA/CPA)", "Financial Analyst", "Tax Consultant", "Chief Financial Officer (CFO)"],
    careerJobsAr: ["محاسب قانوني معتمد (ACCA/CPA)", "محلل مالي وتجاري", "مستشار ضريبي عالمي", "المدير المالي التنفيذي (CFO)"]
  },
  {
    slug: "dentistry",
    titleEn: "Dentistry (BDS)",
    titleAr: "طب وجراحة الفم والأسنان (Dentistry)",
    heroTaglineEn: "Sculpt the perfect smile. Master complex maxillofacial surgeries.",
    heroTaglineAr: "انحت الابتسامات المثالية. احترف الجراحات الدقيقة للوجه والفكين في أرقى كليات الطب الراقية.",
    introEn: "Dentistry is an elite medical discipline requiring extreme precision and artistry. Malaysia offers world-class simulation labs embedded within functional dental hospitals, allowing you to treat real patients before graduation.",
    introAr: "طب الأسنان هو فن طبي فاخر يتطلب عقلاً علمياً ويداً فنية شديدة الدقة.\n\nتتميز دراسة طب الأسنان (BDS) في ماليزيا بوجود عيادات أسنان ضخمة ومستشفيات ملحقة بالجامعة، حيث ستمارس مهنتك بشكل مكثف على أنظمة المحاكاة ثلاثية الأبعاد (Phantom Heads) في السنوات التأسيسية، ثم تنتقل لعلاج المرضى الحقيقيين تحت إشراف نخبة من الجراحين وأطباء التجميل العالميين.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Dental Surgery (BDS)",
        titleAr: "بكالوريوس جراحة الأسنان (BDS)",
        feesRangeEn: "$16,000 - $22,000 / Year",
        feesRangeAr: "$16,000 - $22,000 / سنويًا",
        durationEn: "5 Years",
        durationAr: "5 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "SEGi University",
        nameAr: "جامعة سيجي",
        href: "/universities/3",
        worldRanking: "Extremely Respected",
        fieldRanking: "Top Tier Dentistry",
        annualFeesUSD: "$18,500",
        discountEn: "Fully Clinical",
        discountAr: "مستشفى أسنان خاص للتدريب"
      },
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        worldRanking: "Health Powerhouse",
        fieldRanking: "Elite Dental Labs",
        annualFeesUSD: "$17,000",
        discountEn: "Premium Campus",
        discountAr: "حرم جامعي طبي مذهل"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Pre-Clinical Phase (Years 1-2)",
        yearAr: "المرحلتان الأولى والثانية (ما قبل السريرية)",
        subjectsEn: ["Oral Anatomy & Histology", "Physiology & Biochemistry", "Dental Materials Science", "Phantom Head Simulation"],
        subjectsAr: ["علم تشريح وهندسة الفم والأسنان", "وظائف الأعضاء والكيمياء الحيوية", "علوم المواد السنية المتقدمة", "التدريب المكثف على رؤوس المحاكاة (Phantom Head)"]
      },
      {
        yearEn: "Clinical Phase (Years 3-4)",
        yearAr: "السنتان الثالثة والرابعة (التدريب السريري المبكر)",
        subjectsEn: ["Operative Dentistry", "Periodontology", "Oral Medicine & Pathology", "Prosthodontics"],
        subjectsAr: ["طب الأسنان التحفظي وحشو الأسنان", "علم أمراض اللثة وجراحتها", "طب وتشخيص أمراض الفم والأورام", "التركيبات السنية (الثابتة والمتحركة)"]
      },
      {
        yearEn: "Final Masterclass (Year 5)",
        yearAr: "السنة الخامسة (الاحتراف الجراحي الكامل)",
        subjectsEn: ["Oral & Maxillofacial Surgery", "Orthodontics", "Pediatric Dentistry", "Comprehensive Patient Treatment"],
        subjectsAr: ["جراحة الفم والوجه والفكين الدقيقة", "تقويم الأسنان وتعديل الفك", "طب أسنان الأطفال (Pedodontics)", "الإدارة الطبية المتكاملة لعيادات الأسنان"]
      }
    ],
    careerJobsEn: ["Dental Surgeon", "Orthodontist", "Maxillofacial Surgeon", "Aesthetic Dental Specialist"],
    careerJobsAr: ["جراح فم وأسنان معتمد", "أخصائي تقويم فكين وأسنان", "جراح وجه وفكين دقيق", "استشاري تجميل أسنان (هوليود سمايل)"]
  },
  {
    slug: "pharmacy",
    titleEn: "Pharmacy (B.Pharm)",
    titleAr: "الصيدلة (Pharmacy)",
    heroTaglineEn: "Develop the cure. Master the chemical formulas that save lives worldwide.",
    heroTaglineAr: "اكتشف وطور الدواء. احرص على شفاء البشرية من خلال إتقان الكيمياء الصيدلانية الدقيقة.",
    introEn: "Pharmacy is the deeply intricate science of medicines, clinical therapeutics, and chemical design. Studying Pharmacy in Malaysia exposes you to world-class pharmaceutical research labs and clinical hospital ward rotations.",
    introAr: "الصيدلة ليست مجرد بيع للأدوية، بل هي العلم العميق لتركيب العقاقير وتأثيرها البيولوجي على جسم الإنسان.\n\nمن خلال دراسة بكالوريوس الصيدلة (B.Pharm) في ماليزيا، ستمارس دورك الحقيقي في المختبرات التطبيقية لصناعة وتطوير الأدوية، والانخراط في المناوبات السريرية (Clinical Pharmacy) بجانب الأطباء في المستشفيات الحكومية لضمان فعالية العلاج ومنع التداخلات الدوائية القاتلة.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Pharmacy (Hons)",
        titleAr: "بكالوريوس الصيدلة (مرتبة الشرف)",
        feesRangeEn: "$8,000 - $12,000 / Year",
        feesRangeAr: "$8,000 - $12,000 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Cyberjaya University (UoC)",
        nameAr: "جامعة سايبرجايا (UoC)",
        href: "/universities/18",
        worldRanking: "Gold Rated",
        fieldRanking: "Top Tier Pharmacy",
        annualFeesUSD: "$10,500",
        discountEn: "Ministry Approved",
        discountAr: "جامعة رائدة طبياً في سايبرجايا"
      },
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        worldRanking: "Health Pioneers",
        fieldRanking: "Strong R&D",
        annualFeesUSD: "$9,000",
        discountEn: "Excellent Labs",
        discountAr: "مختبرات تطوير دوائي ضخمة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1: Biological & Chemical Science",
        yearAr: "السنة الأولى: الكيمياء والفيزيولوجيا الأساسية",
        subjectsEn: ["Pharmaceutical Chemistry", "Human Anatomy & Physiology", "Microbiology & Immunology", "Pharmaceutics 1"],
        subjectsAr: ["الكيمياء الصيدلانية الدقيقة", "علم وظائف الأعضاء والتشريح", "الأحياء الدقيقة (الميكروبيولوجي) والمناعة", "الصيدلانيات والمستحضرات الأولية"]
      },
      {
        yearEn: "Year 2: Pharmacology & Synthesis",
        yearAr: "السنة الثانية: علم الأدوية واصطناعها",
        subjectsEn: ["Pharmacology", "Medicinal Chemistry", "Physical Pharmacy", "Pharmacognosy"],
        subjectsAr: ["علم الأدوية (Pharmacology)", "الكيمياء الطبية لاصطناع المركبات", "الصيدلة الفيزيائية وصياغة الأدوية", "علم العقاقير الطبيعية (النباتات الطبية)"]
      },
      {
        yearEn: "Year 3 & 4: Clinical & Hospital Practice",
        yearAr: "السنة 3 و 4: الصيدلة السريرية وصناعة الدواء",
        subjectsEn: ["Clinical Pharmacy & Therapeutics", "Hospital & Community Pharmacy", "Toxicology", "Industrial Pharmacy"],
        subjectsAr: ["الصيدلة السريرية (العمل في المستشفيات)", "إدارة المستشفيات وصيدلة المجتمع", "علم السموم وترياقها", "الصيدلة الصناعية (تصنيع الأدوية تجارياً) والتدريب التام"]
      }
    ],
    careerJobsEn: ["Clinical Pharmacist", "Pharmaceutical Research Scientist", "Regulatory Affairs Specialist", "Toxicologist"],
    careerJobsAr: ["صيدلاني سريري (مستشفيات)", "عالم باحث في تطوير وتصنيع الأدوية", "أخصائي شؤون تنظيمية وجمركية طبية", "خبير علم السموم والمضادات"]
  },
  {
    slug: "chemical-engineering",
    titleEn: "Chemical Engineering",
    titleAr: "الهندسة الكيميائية (Chemical Engineering)",
    heroTaglineEn: "Transform raw matter into valuable products. Power the world's energy and material sectors.",
    heroTaglineAr: "حول المواد الخام إلى منتجات عالية القيمة. قد قطاعات الطاقة والمصانع العملاقة.",
    introEn: "Chemical engineers lead the global oil, gas, and energy transition. Studying in Malaysia provides direct access to state-of-the-art petroleum and biomaterial labs.",
    introAr: "المهندس الكيميائي هو العقل المدبر الذي يحول الموارد الطبيعية إلى ثروات (بترول، أدوية، طاقة بديلة، ومواد غذائية).\n\nدراسة الهندسة الكيميائية في ماليزيا (وهي من الدول الرائدة عالمياً في إنتاج النفط والبتروكيماويات) ستضعك في مواجهة مباشرة مع تدريبات ميدانية في شركات عملاقة، مع التركيز على الاستدامة وتصميم المفاعلات الكيميائية.",
    degreeLevels: [
      {
        titleEn: "B.Eng Chemical Engineering",
        titleAr: "بكالوريوس الهندسة الكيميائية",
        feesRangeEn: "$6,500 - $9,500 / Year",
        feesRangeAr: "$6,500 - $9,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "UCSI University",
        nameAr: "جامعة UCSI",
        href: "/universities/4",
        worldRanking: "Top 1% QS",
        fieldRanking: "Strong Chemical Hub",
        annualFeesUSD: "$7,500",
        discountEn: "Elite Level",
        discountAr: "ضمن النخبة عالمياً"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "World-Class Labs",
        annualFeesUSD: "$9,000",
        discountEn: "CDIO Based",
        discountAr: "مختبرات بمواصفات عالية"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Core Chemistry & Energy",
        yearAr: "السنتان 1-2: الكيمياء الفيزيائية وتوازن الطاقة",
        subjectsEn: ["Physical Chemistry", "Thermodynamics", "Mass & Energy Balance"],
        subjectsAr: ["الكيمياء الفيزيائية العميقة", "الديناميكا الحرارية", "توازن الكتلة والطاقة للمفاعلات"]
      },
      {
        yearEn: "Year 3-4: Process Design & Safety",
        yearAr: "السنتان 3-4: تصميم العمليات والسلامة",
        subjectsEn: ["Reactor Design", "Plant Design Project", "Industrial Safety"],
        subjectsAr: ["تصميم المفاعلات الكيميائية", "مشروع تصميم المصانع والمنشآت", "السلامة الصناعية وإدارة المخاطر"]
      }
    ],
    careerJobsEn: ["Process Engineer", "Petroleum Engineer", "Plant Manager", "Materials Scientist"],
    careerJobsAr: ["مهندس عمليات وتصنيع", "مهندس بترول وطاقة", "مدير محطة تكرير", "عالم في هندسة المواد"]
  },
  {
    slug: "electrical-engineering",
    titleEn: "Electrical & Electronic Engineering",
    titleAr: "الهندسة الكهربائية والإلكترونية",
    heroTaglineEn: "Electrify the future. Design high-voltage grids and microscopic nano-electronics.",
    heroTaglineAr: "كهرب المستقبل. صمم شبكات الضغط العالي والدارات الإلكترونية فائقة الدقة.",
    introEn: "Electrical engineering sits at the core of human innovation, from renewable energy grids to quantum computing circuits.",
    introAr: "كل جهاز حديث تلمسه، وكل مدينة تضيء ليلاً، تعمل بفضل مهندس الكهرباء والإلكترونيات.\n\nمن خلال جامعات ماليزيا التكنولوجية، ستدرس تصميم شرائح السليكون الدقيقة (Micro-electronics) بجانب هندسة شبكات القوى والضغط العالي، لتكون الخبير الأول في دمج الطاقة المتجددة وصناعة الأجهزة الذكية.",
    degreeLevels: [
      {
        titleEn: "B.Eng Electrical & Electronic",
        titleAr: "بكالوريوس الكهرباء والإلكترونيات",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Engineering Elite",
        fieldRanking: "Top 5 Private",
        annualFeesUSD: "$5,200",
        discountEn: "Highest Demand",
        discountAr: "الأقوى في الإلكترونيات"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة APU",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "IR 4.0 Focus",
        annualFeesUSD: "$6,500",
        discountEn: "Tech Focused",
        discountAr: "تركيز استثنائي على التكنولوجيا"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Circuits & Electromagnetic",
        yearAr: "السنتان 1-2: الدوائر والمغناطيسية",
        subjectsEn: ["Circuit Theory", "Electromagnetics", "Digital Logic Design"],
        subjectsAr: ["نظرية الدوائر الكهربائية", "المجالات الكهرومغناطيسية", "تصميم المنطق الرقمي الأساسي"]
      },
      {
        yearEn: "Year 3-4: Power & Control Systems",
        yearAr: "السنتان 3-4: القوى وأنظمة التحكم المدمجة",
        subjectsEn: ["Power Electronics", "Control Systems", "Renewable Energy Tech"],
        subjectsAr: ["إلكترونيات القوى العالية", "أنظمة التحكم وهندسة الروبوتات", "تكنولوجيا وإدارة الطاقة المتجددة"]
      }
    ],
    careerJobsEn: ["Electrical Engineer", "Electronics Designer", "Power Systems Engineer", "Control Engineer"],
    careerJobsAr: ["مهندس كهرباء قوى", "مصمم إلكترونيات دقيقة", "مهندس أنظمة وشبكات طاقة", "مهندس تحكم وأتمتة"]
  },
  {
    slug: "marketing",
    titleEn: "Marketing & Digital Strategy",
    titleAr: "التسويق والاستراتيجية الرقمية",
    heroTaglineEn: "Manipulate perception. Drive explosive revenue via psychology and data.",
    heroTaglineAr: "اقرأ العقول وقد المبيعات. حول الجماهير إلى عملاء دائمين واصنع العلامات التجارية.",
    introEn: "Marketing is the engine that drives business revenue. Modern marketing relies heavily on analytics, neuromarketing, and digital mass communication.",
    introAr: "المال لا يتدفق لأفضل منتج في العالم، بل للمنتج الأفضل تسويقاً!\n\nدراسة التسويق الحديث (Digital Marketing) في ماليزيا تتجاوز الإعلانات الورقية؛ إنها علم قراءة سلوك وعلم نفس المستهلكين، تحليل البيانات الضخمة (Data Analytics) لمعرفة ميولهم، واستخدام الذكاء الاصطناعي لحصد ملايين الدولارات للمؤسسات الكبرى.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Marketing",
        titleAr: "بكالوريوس التسويق (Digital)",
        feesRangeEn: "$4,500 - $7,000 / Year",
        feesRangeAr: "$4,500 - $7,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top 50 Business",
        annualFeesUSD: "$8,500",
        discountEn: "Elite Branding",
        discountAr: "الأقوى في بناء العلامات التجارية"
      },
      {
        nameEn: "INTI International University",
        nameAr: "جامعة إنتي الدولية",
        href: "/universities/6",
        worldRanking: "Excellent Quality",
        fieldRanking: "Global Access",
        annualFeesUSD: "$5,500",
        discountEn: "Highly Practical",
        discountAr: "مناهج عملية بحتة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Consumer Psychology & PR",
        yearAr: "السنتان 1-2: سيكولوجية المستهلك والعلاقات العامة",
        subjectsEn: ["Consumer Behavior", "Marketing Intelligence", "Brand Management"],
        subjectsAr: ["سلوك المستهلك وعلم النفس التجاري", "ذكاء وبحوث التسويق", "إدارة وتأسيس العلامات التجارية المرموقة"]
      },
      {
        yearEn: "Year 3: Digital Growth Hacking",
        yearAr: "السنة الثالثة: التسويق الرقمي وتوليد المبيعات",
        subjectsEn: ["Digital Marketing Strategy", "E-Commerce", "Strategic Campaign Planning"],
        subjectsAr: ["استراتيجيات التسويق الرقمي الحديثة", "إدارة التجارة الإلكترونية", "تخطيط الحملات الإعلانية الاستراتيجية"]
      }
    ],
    careerJobsEn: ["Chief Marketing Officer (CMO)", "Brand Strategist", "Digital Growth Hacker", "Market Analyst"],
    careerJobsAr: ["المدير التسويقي للحملات (CMO)", "مستشار بناء هوية استراتيجية", "خبير تسويق رقمي وحملات (Growth Hacker)", "محلل اتجاهات السوق وبيانات العملاء"]
  },
  {
    slug: "economics",
    titleEn: "Economics & Global Finance",
    titleAr: "الاقتصاد والتمويل العالمي",
    heroTaglineEn: "Govern the wealth of nations. Understand the hidden mechanics of global markets.",
    heroTaglineAr: "أدر ثروات الأمم. فكك آليات الأسواق العالمية وتنبأ بالانهيارات الاقتصادية.",
    introEn: "Economics is the macro-level study of capital, trade, and resources. Gain the highly specialized models needed to advise governments and corporate boards.",
    introAr: "الاقتصاد ليس مجرد أرقام، بل هو قرارات تتحكم في مصير الدول العظمى وانهيارها.\n\nسيعلمك هذا التخصص دراسة الأسواق العالمية، وتحليل التضخم والسياسات النقدية والعملات الرقمية والبنوك. شهادة الاقتصاد من الجامعات الماليزية تؤهلك للجلوس على كراسي المستشارين في البنوك المركزية والمنظمات الدولية وصناديق الاستثمار العملاقة.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Economics",
        titleAr: "بكالوريوس الاقتصاد",
        feesRangeEn: "$5,000 - $8,000 / Year",
        feesRangeAr: "$5,000 - $8,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Strong Economics",
        annualFeesUSD: "$8,000",
        discountEn: "Lancaster Dual Degree",
        discountAr: "كلية أعمال اقتصادية فخمة"
      },
      {
        nameEn: "UCSI University",
        nameAr: "جامعة UCSI",
        href: "/universities/4",
        worldRanking: "Top 1% QS",
        fieldRanking: "Actuarial Power",
        annualFeesUSD: "$7,500",
        discountEn: "Elite Faculty",
        discountAr: "جامعة راقية معترف بها عالمياً"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Micro, Macro & Maths",
        yearAr: "السنتان 1-2: الاقتصاد الكلي والجزئي",
        subjectsEn: ["Macroeconomics", "Microeconomics", "Econometrics"],
        subjectsAr: ["الاقتصاد الكلي العالمي", "الاقتصاد الجزئي للمؤسسات", "الاقتصاد القياسي (دمج الإحصاء بالاقتصاد)"]
      },
      {
        yearEn: "Year 3: Global Trade & Policy",
        yearAr: "السنة الثالثة: التجارة والسياسات النقدية",
        subjectsEn: ["International Trade", "Monetary Economics", "Development Economics"],
        subjectsAr: ["سياسات التجارة الدولية", "الاقتصاد النقدي وصناعة الأموال", "اقتصاديات الدول النامية والنمو"]
      }
    ],
    careerJobsEn: ["Economic Consultant", "Data Economist", "Policy Analyst", "Investment Banker"],
    careerJobsAr: ["مستشار اقتصادي استراتيجي", "خبير تسعير وتحليل التضخم", "محلل سياسات نقدية ومالية حكومية", "مصرفي في بنوك الاستثمار العالمية"]
  },
  {
    slug: "tourism-hospitality",
    titleEn: "Tourism & Hospitality Management",
    titleAr: "السياحة والفندقة وإدارة الفعاليات",
    heroTaglineEn: "Manage 5-star global empires. Deliver unforgettable human experiences.",
    heroTaglineAr: "أدر إمبراطوريات الـ 5 نجوم. اصنع ذكريات لا تُنسى في أرقى المنتجعات العالمية.",
    introEn: "The hospitality industry guarantees global mobility. Malaysia’s booming tourism sector is a real-world lab for managing hotels, events, and luxury services.",
    introAr: "مجال إدارة الضيافة والسياحة هو المهنة التي لا تعاني من الملل أبداً، وتتيح لك السفر المستمر حول العالم.\n\nماليزيا تعد وجهة سياحية عظمى، مما يعني أنك ستدرس في بيئة واقعية 100%. الجامعات الماليزية تمتلك (فنادق ومطاعم استثمارية خاصة بها) حيث ستتدرب فيها كمدير، بالإضافة إلى تنظيم فعاليات ضخمة ومؤتمرات كبرى لتخريج مدراء فنادق من الطراز الأول للماركات العالمية (مثل ماريوت وهيلتون).",
    degreeLevels: [
      {
        titleEn: "Bachelor of Hospitality Management",
        titleAr: "بكالوريوس إدارة الضيافة والفندقة",
        feesRangeEn: "$5,000 - $8,500 / Year",
        feesRangeAr: "$5,000 - $8,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#14 Global QS",
        fieldRanking: "World Top 14",
        annualFeesUSD: "$9,000",
        discountEn: "Best in ASIA",
        discountAr: "رقم 1 في آسيا في الفندقة"
      },
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Le Cordon Bleu",
        annualFeesUSD: "$8,500",
        discountEn: "Hotel Included",
        discountAr: "تدريب في قلب فنادق صنواي 5 نجوم"
      }
    ],
    budgetUniversities: [
      {
        nameEn: "City University Malaysia",
        nameAr: "جامعة سيتي ماليزيا",
        href: "/universities/7",
        annualFeesUSD: "$3,500"
      }
    ],
    courseYears: [
      {
        yearEn: "Year 1-2: Operations & Guest Relations",
        yearAr: "السنتان 1-2: العمليات والمكاتب الأمامية",
        subjectsEn: ["Rooms Division Management", "F&B Operations", "Hospitality Marketing"],
        subjectsAr: ["إدارة المكاتب الأمامية والغرف والأرباح", "عمليات الأغذية والمشروبات (الخدمة الراقية)", "الترويج والتسويق السياحي الفاخر"]
      },
      {
        yearEn: "Year 3: Global Event & Strategy",
        yearAr: "السنة الثالثة: الفعاليات الكبرى والمطاعم",
        subjectsEn: ["Event & Festival Management", "Revenue Management", "Hospitality Law"],
        subjectsAr: ["تنظيم المهرجانات والمؤتمرات الدولية", "إدارة الإيرادات الاستراتيجية للمنتجعات", "قوانين وأمن الشركات السياحية والفنادق"]
      }
    ],
    careerJobsEn: ["Hotel General Manager", "Event Director", "Resort Operations Manager", "Airline Services Manager"],
    careerJobsAr: ["المدير العام لفنادق 5 نجوم", "مدير تنظيم المؤتمرات والفعاليات", "مراقب ومدير جودة في منتجعات راقية", "مدير خدمات الضيافة في شركات الطيران"]
  },
  {
    slug: "nursing",
    titleEn: "Nursing (B.Sc)",
    titleAr: "التمريض السريري والرعاية",
    heroTaglineEn: "The frontline of human care. A deeply respected, instantly employable medical career.",
    heroTaglineAr: "خط الدفاع الأول للمرضى. المهنة الإنسانية ذات التوظيف الفوري والعالمي بلا حدود.",
    introEn: "Nurses are the backbone of any hospital. A Malaysian nursing degree focuses heavily on 1000+ clinical hours, preparing you for immediate registration around the globe.",
    introAr: "الممرض الماهر والمؤهل علمياً هو من ينقذ حياة المريض في غرف العناية المركزة في اللحظات الحاسمة.\n\nفي ماليزيا، دراسة بكالوريوس التمريض ليست مجرد دراسة نظرية، بل هي تدريب سريري شاق يصل لـ 1500 ساعة تدريب في مستشفيات حكومية وخاصة متطورة جداً، من غرف العمليات إلى الطوارئ. خريج التمريض في ماليزيا مطلوب فوراً في دول الخليج، بريطانيا، كندا، وأستراليا دون الحاجة لسنوات من البحث عن العمل.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Nursing (Hons)",
        titleAr: "بكالوريوس التمريض السريري",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        worldRanking: "Health Sciences Pivot",
        fieldRanking: "Largest Nursing Faculty",
        annualFeesUSD: "$6,500",
        discountEn: "Premium Choice",
        discountAr: "الجامعة الأكبر والأهم في التمريض"
      },
      {
        nameEn: "Cyberjaya University (UoC)",
        nameAr: "جامعة سايبرجايا",
        href: "/universities/18",
        worldRanking: "Medical Dominance",
        fieldRanking: "Fully Clinical",
        annualFeesUSD: "$7,000",
        discountEn: "State Hospitals",
        discountAr: "تدريب سريري مكثف في مستشفيات ضخمة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Anatomy & Foundations of Care",
        yearAr: "السنتان 1-2: أسس الرعاية وعلم التشريح",
        subjectsEn: ["Anatomy & Physiology", "Fundamentals of Nursing", "Pharmacology for Nurses"],
        subjectsAr: ["علم التشريح الجسدي ووظائف الأعضاء", "أسس وتقنيات الرعاية التمريضية القوية", "الأدوية وكيفية استخدامها في الطوارئ"]
      },
      {
        yearEn: "Year 3-4: Critical Care & Surgical Wards",
        yearAr: "السنتان 3-4: العناية المركزة والعمليات السريرية",
        subjectsEn: ["Critical Care Nursing", "Perioperative Nursing", "Pediatric & Maternity Care"],
        subjectsAr: ["التمريض المتقدم في العناية المركزة (ICU)", "رعاية ما قبل وبعد غرف العمليات الجراحية", "تمريض النساء والولادة والأطفال الخدّج"]
      }
    ],
    careerJobsEn: ["Registered Clinical Nurse (RN)", "ICU/Emergency Specialist", "Healthcare Manager", "Surgical Nurse"],
    careerJobsAr: ["ممرض قانوني ومسجل (RN) مستشفيات", "أخصائي تمريض عناية مركزة وطوارئ", "رئيس وموجه طواقم طبية للتمريض", "ممرض عمليات وتخدير"]
  },
  {
    slug: "physiotherapy",
    titleEn: "Physiotherapy & Rehabilitation",
    titleAr: "العلاج الطبيعي والتأهيل الحركي",
    heroTaglineEn: "Restore mobility, conquer pain. Heal athletes and patients with physical precision.",
    heroTaglineAr: "أعد الحركة، اقهر الألم. أعد تأهيل الرياضيين والمرضى بدقة علمية وحركات فيزيائية محسوبة.",
    introEn: "Physiotherapy is the science of biomechanics and holistic rehabilitation without surgical involvement.",
    introAr: "العلاج الطبيعي هو الفن الطبي لاستعادة حركة جسم الإنسان الطبيعية دون جراحة أو أدوية مُسكنة خطيرة.\n\nالجامعات الماليزية توفر برامج علاج طبيعي تعتمد على الممارسة العملية الدقيقة على مرضى الجلطات، الإصابات الرياضية الملاعب، ومراكز التأهيل العصبي. تعتبر هذه المهنة ذات دخل مالي مرتفع جداً نظراً للطلب الهائل عليها في الطب الرياضي وعيادات التأهيل لكبار السن وحوادث المرور.",
    degreeLevels: [
      {
        titleEn: "B.Sc Physiotherapy",
        titleAr: "بكالوريوس العلاج الطبيعي",
        feesRangeEn: "$6,000 - $8,500 / Year",
        feesRangeAr: "$6,000 - $8,500 / سنويًا",
        durationEn: "4 Years",
        durationAr: "4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "MAHSA University",
        nameAr: "جامعة ماهسا",
        href: "/universities/9",
        worldRanking: "Health Specialized",
        fieldRanking: "Top Tier Physio",
        annualFeesUSD: "$6,500",
        discountEn: "Therapy Centers",
        discountAr: "تمتلك أقوى مراكز العلاج الطبيعي"
      },
      {
        nameEn: "INTI International University",
        nameAr: "جامعة إنتي",
        href: "/universities/6",
        worldRanking: "Excellence",
        fieldRanking: "Practical Therapy",
        annualFeesUSD: "$7,000",
        discountEn: "Global Tie-ups",
        discountAr: "اعترافات دولية مذهلة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Musculoskeletal & Biomechanics",
        yearAr: "السنتان 1-2: الميكانيكا الحيوية والتشريح",
        subjectsEn: ["Kinesiology", "Musculoskeletal Physiotherapy", "Electrotherapy"],
        subjectsAr: ["علم الحركة (Kinesiology) الدقيق", "العلاج الطبيعي للجهاز العضلي والهيكلي", "طرق العلاج باستخدام الموجات والتيارات الكهربائية"]
      },
      {
        yearEn: "Year 3-4: Cardiopulmonary & Neuro-Rehab",
        yearAr: "السنتان 3-4: التأهيل العصبي والقلبي",
        subjectsEn: ["Neurological Rehabilitation", "Cardiopulmonary Physiotherapy", "Sports Therapy Clinics"],
        subjectsAr: ["التأهيل العصبي الدقيق (لمرضى الجلطات والشلل)", "العلاج الطبيعي للقلب والرئة (لمرضى العناية)", "التدريب السريري المكثف في عيادات الطب الرياضي والمستشفيات"]
      }
    ],
    careerJobsEn: ["Sports Team Physiotherapist", "Neuro-Rehabilitation Specialist", "Private Clinic Director", "Hospital Physiotherapist"],
    careerJobsAr: ["أخصائي علاج طبيعي رياضي للفرق المحترفة", "أخصائي تأهيل عصبي وحركي بعد الجلطات", "مدير عيادات تأهيل طبي وسبا طبيعية", "دكتور علاج طبيعي سريري شامل في المستشفيات"]
  },
  {
    slug: "interior-design",
    titleEn: "Interior Design & Architecture",
    titleAr: "التصميم الداخلي والعمارة الداخلية",
    heroTaglineEn: "Shape the emotion of space. Merge aesthetics with architectural functionality.",
    heroTaglineAr: "شكل العاطفة داخل الفراغ. ادمج التميز الجمالي بالوظيفة المعمارية الدقيقة للمساحات.",
    introEn: "Interior design is not just decoration—it is the structural and aesthetic redesign of indoor spaces. Master 3D modeling and sustainable materials to design 5-star hotels and luxury offices.",
    introAr: "التصميم الداخلي بعيد كل البعد عن كونه 'مجرد ديكور وصباغة ألوان'؛ بل هو هندسة الفراغات الداخلية (Interior Architecture).\n\nمن خلال هذا التخصص، ستتعلم هندسة الإضاءة، أكوستيك الصوت، تصميم الأثاث، واستخدام برامج الـ (3D) لتصميم مساحات داخلية ترفع الإنتاجية في المكاتب، وتمنح شعوراً بالفخامة في القصور وفنادق الخمس نجوم. استوديوهات الجامعات الماليزية تعتبر من الأرقى على مستوى آسيا.",
    degreeLevels: [
      {
        titleEn: "BA (Hons) Interior / Spatial Design",
        titleAr: "بكالوريوس التصميم الداخلي والفراغي",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "3 - 3.5 Years",
        durationAr: "3 إلى 3.5 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Elite Design School",
        annualFeesUSD: "$9,000",
        discountEn: "Premium Studios",
        discountAr: "أقوى استوديوهات الديزاين والفنون"
      },
      {
        nameEn: "Limkokwing University",
        nameAr: "جامعة ليمكوكوينج",
        href: "/universities/11",
        worldRanking: "Creative Hub",
        fieldRanking: "Design Dominance",
        annualFeesUSD: "$6,500",
        discountEn: "Highly Creative",
        discountAr: "الجامعة الأفضل للمبدعين والمصممين"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: CAD & Spatial Theory",
        yearAr: "السنتان 1-2: التخطيط الفراغي والمعلوماتية",
        subjectsEn: ["Interior Architecture Studio", "Computer-Aided Design (AutoCAD/3Ds Max)", "Materials & Lighting"],
        subjectsAr: ["استوديو العمارة والتخطيط الداخلي", "التصميم بالحاسوب المتقدم (Max/Vray/AutoCAD)", "تكنولوجيا الخامات والأسطح ودراسة الإضاءة"]
      },
      {
        yearEn: "Year 3: Commercial Projects",
        yearAr: "السنة الثالثة: المشاريع التجارية والتصاريح",
        subjectsEn: ["Commercial Design Studio", "Building Services & Furniture Design", "Professional Practice"],
        subjectsAr: ["استوديو تصميم المشاريع التجارية (بنوك/فنادق/مطاعم)", "خدمات المباني وتصميم الأثاث الخاص", "الممارسة المهنية والقوانين والمقاولات (للعمل التجاري)"]
      }
    ],
    careerJobsEn: ["Interior Architect", "Commercial Space Designer", "Exhibition & Event Designer", "Furniture Designer"],
    careerJobsAr: ["معماري تصميم داخلي للمشاريع الضخمة", "مصمم معارض، محلات تجارية، ومسارح", "مصمم أثاث ابتكاري وإضاءة", "مستشار تخطيط فراغي لشركات العقارات"]
  },
  {
    slug: "graphic-design",
    titleEn: "Graphic Design & Multimedia",
    titleAr: "تصميم الجرافيك والوسائط المتعددة",
    heroTaglineEn: "Visually communicate with the world. Turn digital canvases into priceless art.",
    heroTaglineAr: "تواصل مع العالم بصرياً. حول اللوحات الرقمية إلى فنون إعلانية لا تقدر بثمن.",
    introEn: "Graphic design merges digital art with marketing psychology to create stunning branding, UI/UX interfaces, and digital advertising.",
    introAr: "تصميم الجرافيك في العصر الرقمي لم يعد مجرد رسم، بل هو لغة العقل الباطن للمتلقي.\n\nمن خلال جامعات التقنية والفنون في ماليزيا (التي تملك شراكات مع Adobe)، ستتعلم تصميم الهويات البصرية للشركات العملاقة، تصميم واجهات المستخدم (UI/UX) للتطبيقات، والرسوم المتحركة ثنائية الأبعاد، لتصبح مصمماً قادراً على العمل عن بعد مع وكالات الإعلان والدعاية حول العالم.",
    degreeLevels: [
      {
        titleEn: "BA (Hons) Graphic Design",
        titleAr: "بكالوريوس تصميم الجرافيك والوسائط",
        feesRangeEn: "$5,000 - $8,000 / Year",
        feesRangeAr: "$5,000 - $8,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Limkokwing University",
        nameAr: "جامعة ليمكوكوينج",
        href: "/universities/11",
        worldRanking: "Global Creative Hub",
        fieldRanking: "Top Design Campus",
        annualFeesUSD: "$6,500",
        discountEn: "Iconic Creative Art",
        discountAr: "أيقونة الإبداع والفنون"
      },
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Creative Multimedia Tech",
        fieldRanking: "Strong Digital Output",
        annualFeesUSD: "$5,500",
        discountEn: "Tech & Art Blend",
        discountAr: "دمج الفنون بالبرمجة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Typography & Digital Art",
        yearAr: "السنتان 1-2: فن الخطوط والرسم الرقمي",
        subjectsEn: ["Typography & Layout", "Digital Illustration", "UI/UX Design Basics"],
        subjectsAr: ["هندسة الخطوط وتوزيع العناصر", "الرسم الرقمي والـ (Vector Art)", "أساسيات تصميم واجهات وتجربة المستخدم"]
      },
      {
        yearEn: "Year 3: Branding & Agency Work",
        yearAr: "السنة الثالثة: بناء العلامات والوكالات الإعلانية",
        subjectsEn: ["Corporate Branding Strategy", "Packaging Design", "Creative Portfolio Show"],
        subjectsAr: ["استراتيجية بناء الهوية للشركات", "تصميم أغلفة المنتجات وذكاء التسويق", "صناعة معرض الأعمال (Portfolio) للتوظيف"]
      }
    ],
    careerJobsEn: ["Senior Graphic Designer", "UI/UX Designer", "Art Director", "Brand Identity Specialist"],
    careerJobsAr: ["مصمم جرافيك رئيسي", "مصمم واجهات وتجربة مستخدم لتطبيقات الموبايل", "مخرج فني (Art Director) للحملات", "مستشار هوية بصرية للشركات"]
  },
  {
    slug: "animation",
    titleEn: "Animation & Visual Effects (VFX)",
    titleAr: "الرسوم المتحركة والمؤثرات البصرية",
    heroTaglineEn: "Breathe life into pure imagination. Engineer the magic of cinema and gaming.",
    heroTaglineAr: "انفخ الحياة في الخيال المطلق. هندس سحر السينما العالمية وصناعة الألعاب.",
    introEn: "Animation and VFX sit at the pinnacle of digital entertainment, powering blockbuster films and AAA video games.",
    introAr: "صناعة الأنمي، الرسوم المتحركة (3D)، والمؤثرات البصرية (VFX) للخدع السينمائية هي صناعة تدر مليارات الدولارات.\n\nماليزيا تعتبر اليوم (هوليوود آسيا) في صناعة الرسوم المتحركة الرقمية (مثل مسلسل Upin & Ipin). ستتدرب في استوديوهات تحاكي استوديوهات Pixar و Marvel، وتتعلم تقنيات التقاط الحركة (Motion Capture)، وبرمجة الشخصيات ثلاثية الأبعاد ببرامج (Maya) المتقدمة.",
    degreeLevels: [
      {
        titleEn: "BA (Hons) Animation & VFX",
        titleAr: "بكالوريوس الرسوم المتحركة والخدع البصرية",
        feesRangeEn: "$5,500 - $8,500 / Year",
        feesRangeAr: "$5,500 - $8,500 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Tech & Art Pioneer",
        fieldRanking: "Top Tier VFX",
        annualFeesUSD: "$5,800",
        discountEn: "Hollywood Tools",
        discountAr: "أدوات ومختبرات هوليوود"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة APU",
        href: "/universities/1",
        worldRanking: "Game Dev Elite",
        fieldRanking: "Animation Excellence",
        annualFeesUSD: "$6,500",
        discountEn: "Premium Gaming",
        discountAr: "ممتازة في رسوميات الألعاب"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: 3D Modeling & Storyboarding",
        yearAr: "السنتان 1-2: النمذجة ثلاثية الأبعاد وسيناريو القصص",
        subjectsEn: ["3D Modeling (Maya / Blender)", "Storyboarding & Concept Art", "Character Animation Principles"],
        subjectsAr: ["النمذجة 3D والأسطح (Maya)", "تصميم القصص المصورة والبيئة التخيلية", "مبادئ فيزياء حركة الشخصيات وتعبيرات الوجه"]
      },
      {
        yearEn: "Year 3: VFX Compositing",
        yearAr: "السنة الثالثة: تركيب الخدع السينمائية الكبرى",
        subjectsEn: ["VFX Compositing (Nuke)", "Motion Capture Technology", "Final Short Film Project"],
        subjectsAr: ["تركيب المؤثرات والانفجارات (VFX Compositing)", "تكنولوجيا التقاط ورسم الحركة للأجسام", "مشروع صناعة فيلم قصير متكامل للسينما"]
      }
    ],
    careerJobsEn: ["3D Character Animator", "VFX Artist / Compositor", "Game Environment Modeler", "Storyboard Artist"],
    careerJobsAr: ["محرك شخصيات 3D محترف", "مصمم مؤثرات وخدع سينمائية بصرية", "مصمم بيئات وحشية للألعاب", "فنان رسم وحبكة سيناريوهات القصص المشوقة"]
  },
  {
    slug: "culinary-arts",
    titleEn: "Culinary Arts & Gastronomy",
    titleAr: "فنون الطهي المتقدمة (Culinary Arts)",
    heroTaglineEn: "Master the fire. Combine science and art to create elite culinary masterpieces.",
    heroTaglineAr: "روّض النار والمذاق. ادمج الكيمياء بالفن لابتكار تحف طهي تأسر الحواس الخمس.",
    introEn: "Culinary arts is a serious, high-pressure profession for passionate creators aiming to run top-tier Michelin-star kitchens.",
    introAr: "الطهي الاحترافي لم يعد مجرد وصفات طعام؛ بل هو فن فرنسي صارم يجمع بين كيمياء التذوق، الضغط العالي، والإبداع المفرط.\n\nجامعات ماليزيا تمتلك مطابخ تدريب ضخمة من فئة الخمس نجوم. من خلال الشراكة مع معهد (Le Cordon Bleu) الفرنسي العريق، سيمتلك خريج فنون الطهي في ماليزيا القدرة على العمل كرئيس طهاة (Executive Chef) في أضخم الفنادق العالمية أو إطلاق سلسلته الخاصة من المطاعم الفاخرة.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Culinary Arts",
        titleAr: "بكالوريوس فنون الطهي",
        feesRangeEn: "$5,500 - $9,000 / Year",
        feesRangeAr: "$5,500 - $9,000 / سنويًا",
        durationEn: "3 Years",
        durationAr: "3 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Sunway University",
        nameAr: "جامعة صنواي",
        href: "/universities/4",
        worldRanking: "Top 2% QS",
        fieldRanking: "Le Cordon Bleu Partner",
        annualFeesUSD: "$8,500",
        discountEn: "French Elite Standard",
        discountAr: "شراكة مدرسة لو كوردون بلو الفرنسية"
      },
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#14 Global Hospitality",
        fieldRanking: "Top Asian Culinary",
        annualFeesUSD: "$9,000",
        discountEn: "Michelin Standard",
        discountAr: "تدريب بمعايير نجوم ميشلان"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: French Techniques & Food Science",
        yearAr: "السنتان 1-2: التقنيات الفرنسية وسلامة الغذاء",
        subjectsEn: ["Classical French Culinary Techniques", "Food Science & Hygiene", "Baking & Pastry Art"],
        subjectsAr: ["تقنيات القطع والطهي الفرنسي الكلاسيكي", "علم كيمياء الغذاء وسلامة المطابخ القاسية", "فنون المخبوزات والحلويات (Pastry Art) المعقدة"]
      },
      {
        yearEn: "Year 3: Kitchen Management & Event Banquet",
        yearAr: "السنة الثالثة: إدارة المطابخ والولائم الضخمة",
        subjectsEn: ["Executive Kitchen Management", "Gastronomy Innovation", "Banquet Operations"],
        subjectsAr: ["إدارة المطابخ التنفيذية وتكلفة المنيو", "ابتكار الأطباق الحديثة (Gastronomy)", "تشغيل وطهي ولائم المؤتمرات الضخمة (Banquet)"]
      }
    ],
    careerJobsEn: ["Executive Chef (Head Chef)", "Culinary Innovator", "Food & Beverage Director", "Pastry & Baking Artisan"],
    careerJobsAr: ["رئيس طهاة تنفيذي لفنادق عالمية", "مبتكر قوائم طعام راقية", "مدير قسم الأغذية والمشروبات", "شيف حلويات ومعجنات فنية معقدة"]
  },
  {
    slug: "law",
    titleEn: "Law (LL.B)",
    titleAr: "الشريعة والقانون العام (Law Degree)",
    heroTaglineEn: "Uphold justice. Wield the immense power of corporate and international law.",
    heroTaglineAr: "أرسِ دعائم العدالة. استخدم السلطة المطلقة لقوانين الشركات المعقدة والقانون الدولي للدفاع والهجوم.",
    introEn: "Law is the operating system of society. Studying law in Malaysia opens pathways to corporate litigation and prestigious global corporate counsel roles.",
    introAr: "القانون هو 'نظام التشغيل' للعالم بأسره؛ لا توجد دولة أو شركة أو فرد أو عقد إلا ويحكمه القانون.\n\nمن خلال دراسة البكالوريوس في ماليزيا سيتم تأسيسك كمحامٍ متكلم ومفاوض شرس يعتمد على 'القانون العام' البريطاني (Common Law). ستتعلم قوانين الشركات، والقانون الجنائي الدولي، وتدير جلسات محاكمات صورية (Moot Court) لتكون مستشاراً قانونياً مهاباً للشركات متعددة الجنسيات وحل النزاعات.",
    degreeLevels: [
      {
        titleEn: "Bachelor of Laws (LL.B Hons)",
        titleAr: "بكالوريوس القانون العالي",
        feesRangeEn: "$5,500 - $9,500 / Year",
        feesRangeAr: "$5,500 - $9,500 / سنويًا",
        durationEn: "3 - 4 Years",
        durationAr: "3 إلى 4 سنوات"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Top Tier Law",
        annualFeesUSD: "$9,500",
        discountEn: "Moot Court Access",
        discountAr: "قاعة محكمة صورية جبّارة"
      },
      {
        nameEn: "Multimedia University (MMU)",
        nameAr: "جامعة ملتيميديا",
        href: "/universities/5",
        worldRanking: "Excellent Quality",
        fieldRanking: "Strong Cyber Law",
        annualFeesUSD: "$6,500",
        discountEn: "High Employment",
        discountAr: "قوية جداً في قوانين وحقوق التكنولوجيا"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Criminal & Contract Law",
        yearAr: "السنتان 1-2: القانون الجنائي والعقود المدنية",
        subjectsEn: ["Law of Contract", "Criminal Law", "Constitutional Law"],
        subjectsAr: ["قوانين العقود والاتفاقيات الملزمة", "القانون الجنائي العام", "القانون الدستوري والتشريعات"]
      },
      {
        yearEn: "Year 3: Corporate & Cyber Legalities",
        yearAr: "السنة الثالثة: قوانين الشركات والنزاعات",
        subjectsEn: ["Company Law", "Corporate Litigation", "Mooting & Advocacy (Court Simulation)"],
        subjectsAr: ["قانون الشركات والأعمال المتقدم", "إجراءات التقاضي التجاري والملكية الفكرية", "المحكمة الصورية ومحاكاة المرافعات الحقيقية"]
      }
    ],
    careerJobsEn: ["Corporate Lawyer", "Legal Counsel for Tech Firms", "Arbitrator & Mediator", "Criminal Defense Attorney"],
    careerJobsAr: ["محامي شركات ومستشار تجاري دولي", "مستشار قوانين تكنولوجيا وأمن معلومات", "محكم دولي وفض نزاعات", "محامي دفاع في القضايا الجنائية المعقدة"]
  },
  {
    slug: "foundation-year",
    titleEn: "Foundation Year (Pre-University)",
    titleAr: "السنة التحضيرية الشاملة (Foundation Year)",
    heroTaglineEn: "The essential bridge. Gain guaranteed direct entry into world-class global bachelor’s degrees.",
    heroTaglineAr: "الجسر الذهبي الأساسي. احصل على تذكرة عبور وضمان دخول لأرقى البكالوريوسات العالمية ببريطانيا وماليزيا.",
    introEn: "The Foundation program is a fast-track, 1-year preparatory course tailored specifically for high school students lacking direct entry requirements for prestigious Bachelor’s degrees.",
    introAr: "السنة التحضيرية هي فرصتك الأعظم لتصحيح المسار وسد النقص في معدلك الثانوي.\n\nماليزيا تقدم نوعين من التحضيري: التحضيري الطبي/العلمي، والتحضيري الإداري/التقني. مدتها سنة واحدة (12 شهراً)، وتؤهلك لتجاوز شروط القبول المعقدة ودخول أقوى الجامعات العالمية لدراسة الطب أو التقنية فور انتهائها مباشرة بانتقال سلس دون تعقيدات.",
    degreeLevels: [
      {
        titleEn: "Foundation in Science / Arts / Business",
        titleAr: "تحضيري (علوم طبية / أعمال / تقنية)",
        feesRangeEn: "$3,500 - $6,000 / Total",
        feesRangeAr: "$3,500 - $6,000 / إجمالي البرنامج",
        durationEn: "1 Year",
        durationAr: "سنة واحدة فقط"
      }
    ],
    topUniversities: [
      {
        nameEn: "Taylor's University",
        nameAr: "جامعة تايلورز",
        href: "/universities/2",
        worldRanking: "#284 QS",
        fieldRanking: "Guaranteed Pathway",
        annualFeesUSD: "$5,500",
        discountEn: "Global Pathway",
        discountAr: "أقوى بوابة للمسار الطبي والبريطاني"
      },
      {
        nameEn: "Asia Pacific University (APU)",
        nameAr: "جامعة APU",
        href: "/universities/1",
        worldRanking: "Top 2.2%",
        fieldRanking: "Tech & IT Direct Prep",
        annualFeesUSD: "$4,500",
        discountEn: "Tech Pathway",
        discountAr: "أفضل تحضيري للذكاء الاصطناعي والحوسبة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Semester 1: Core Fundamentals & English Skills",
        yearAr: "الفصل الأول: الأساسيات التخصصية واللغة الأكاديمية",
        subjectsEn: ["Academic English & Communications", "Intro to Mathematics / IT", "Fundamentals of Business / Science"],
        subjectsAr: ["اللغة الإنجليزية الأكاديمية وكتابة الأبحاث", "مقدمة في الرياضيات المتقدمة أو تقنية المعلومات", "أساسيات الفيزياء الطبية أو ريادة الأعمال"]
      },
      {
        yearEn: "Semester 2: Degree Direct Specialization Prep",
        yearAr: "الفصل الثاني: التحضير المباشر للتخصص",
        subjectsEn: ["Specialized Subject Modules Focus", "Advanced Sciences / Advanced Stats", "Final Pathway Placement Exam"],
        subjectsAr: ["التركيز الصارم على مواد البكالوريوس القادم", "العلوم الإحصائية والكيمياء الحيوية (للطب)", "مشاريع تقييم وتصعيد مباشر للبكالوريوس بقوة"]
      }
    ],
    careerJobsEn: ["Guaranteed University Placement", "Med-School Entrant", "Engineering Entrant", "Business School Entrant"],
    careerJobsAr: ["ضمان مقعد مؤكد في البكالوريوس", "الانتقال السلس لدراسة الطب البشري", "القبول في كليات الهندسة المعقدة بسهولة", "تسريع الانضمام لكليات الأعمال والتجارة المرموقة"]
  },
  {
    slug: "distance-learning",
    titleEn: "Distance Learning & Blended Education",
    titleAr: "التعليم عن بعد والتعلم المدمج المشترك",
    heroTaglineEn: "Earn a global degree from home. Overcome borders, time zones, and high living costs.",
    heroTaglineAr: "احصل على شهادات عالمية من غرفة نومك. اقهر الحدود وتكاليف المعيشة مع مرونة استثنائية.",
    introEn: "Distance and online learning from recognized Malaysian universities grants working professionals and international students direct access to acclaimed degrees remotely.",
    introAr: "ليس عليك ترك وظيفتك وعائلتك للحصول على شهادة معتمدة عالمياً!\n\nبرامج التعلم عن بعد (ODL - Open and Distance Learning) في ماليزيا معتمدة رسمياً من هيئة الاعتماد (MQA). توفر التفاعل المباشر أونلاين عبر منصات متطورة مع دكاترة الجامعة لمهن الأعمال، التقنية الإدارية، وغيرها، بتكلفة دراسية منخفضة جداً تغنيك عن دفع السكن والتذاكر، وشهادة لا يكتب عليها 'أونلاين'.",
    degreeLevels: [
      {
        titleEn: "MBA / B.Sc / DBA (Fully Online)",
        titleAr: "بكالوريوس / ماجستير / دكتوراه (أونلاين 100%)",
        feesRangeEn: "$2,000 - $4,500 / Year",
        feesRangeAr: "$2,000 - $4,500 / سنويًا",
        durationEn: "Flexible",
        durationAr: "مرن (بناءً على تفرغ الطالب)"
      }
    ],
    topUniversities: [
      {
        nameEn: "Open University Malaysia (OUM)",
        nameAr: "الجامعة المفتوحة الماليزية (OUM)",
        href: "/universities/99",
        worldRanking: "Distance Elite",
        fieldRanking: "Largest Online Hub",
        annualFeesUSD: "$2,500",
        discountEn: "Cost Effective",
        discountAr: "الجامعة الوطنية الأهم للتعلم عن بعد"
      },
      {
        nameEn: "Manipal International University (MIU Online)",
        nameAr: "جامعة مانيبال الدولية (أونلاين)",
        href: "/universities/98",
        worldRanking: "Solid Blended Edu",
        fieldRanking: "Business & IT Online",
        annualFeesUSD: "$3,000",
        discountEn: "Flexible Hours",
        discountAr: "مرونة قصوى لدراسة إدارة الأعمال والحوسبة"
      }
    ],
    budgetUniversities: [],
    courseYears: [
      {
        yearEn: "Year 1-2: Virtual Classrooms & Assignments",
        yearAr: "السنتان 1-2: المنصات التفاعلية والحلقات الافتراضية",
        subjectsEn: ["Self-paced E-Learning Modules", "Live Weekend Forums & Debates", "Intensive Digital Assignments"],
        subjectsAr: ["وحدات دراسية مسجلة للمشاهدة في أي وقت", "نقاشات وحلقات حية في عطل نهاية الأسبوع", "تكليفات وأبحاث رقمية تعوض الحضور"]
      },
      {
        yearEn: "Year 3: Global Remote Thesis Defence",
        yearAr: "السنة الثالثة: الأطروحة والامتحانات المراقبة",
        subjectsEn: ["Proctored Online Examinations", "Virtual Final Year Project Defence", "Graduation Ceremony (Physical/Virtual)"],
        subjectsAr: ["امتحانات رقمية مراقبة دولياً (Proctored Exams)", "الدفاع الافتراضي (عبر زووم) عن الأبحاث النهائية", "حفل التخرج في ماليزيا (اختياري حضوره)"]
      }
    ],
    careerJobsEn: ["Working Professional Advancement", "Promotion Specialist", "Remote Tech Manager", "Business Entrepreneur"],
    careerJobsAr: ["الترقي السريع في وظيفتك الحالية للرتب العليا", "مدير مشاريع تنفيذي (عبر شهادة معتمدة وتحديث السيرة)", "خبير مجالات تقنية وإدارية مستقل", "رائد أعمال عالمي مدعوم بأقوى النظريات الأكاديمية"]
  }
];
