import json
import re

file_path = r"C:\Users\user\.gemini\antigravity\scratch\ya-alma-legacy\src\data\specializations.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to inject the "artificial-intelligence" key right before the last closing brace
new_content = """  "artificial-intelligence": {
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
  }
};
"""

new_content_with_added = content.replace("  }\n};\n", "  },\n" + new_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content_with_added)

print("Injected Artificial Intelligence successfully!")
