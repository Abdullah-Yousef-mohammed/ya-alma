import json

file_path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\data\specializations.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Synthetic "data-science" data
new_content = """  "data-science": {
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
  }
};
"""

# Replace the closing "  }\n};" or "  }\n};\n" with the new content
new_content_with_added = content.replace("  }\n};\n", "  },\n" + new_content).replace("  }\n};", "  },\n" + new_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content_with_added)

print("Injected Data Science successfully!")
