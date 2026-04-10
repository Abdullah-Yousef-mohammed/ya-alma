"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dynamicTranslationsZh } from "./dynamicTranslations";

type Language = "en" | "ar" | "zh";

export const translations = {
  en: {
    nav: { 
      home: "Home", 
      universities: "Universities", 
      privateUni: "Private Universities",
      publicUni: "Public Universities",
      foreignUni: "Foreign Universities",
      specializations: "Specializations",
      it: "Computer Science & IT",
      engineering: "Engineering",
      medicine: "Medicine & Health",
      business: "Business & Management",
      arts: "Arts & Design",
      languageCenters: "Language Institutes",
      allLanguage: "All Institutes",
      elc: "ELC English Language Company",
      ems: "EMS Language Centre",
      awesome: "Awesome English Academy",
      british: "British Council",
      courses: "Search Courses",
      blog: "Blog",
      services: "Services",
      process: "Process",
      contact: "Contact Us", 
      apply: "Apply Now" 
    },
    filters: {
      searchUni: "Search by University Name...",
      searchCourse: "Search for a Program...",
      location: "Location",
      allLocations: "All Locations",
      level: "Level of Study",
      allLevels: "All Levels",
      bachelor: "Bachelor",
      master: "Master",
      phd: "PhD",
      freeOffer: "Free Offer Letter",
      clear: "Clear Filters",
      results: "Results found"
    },
    hero: { 
      badge: "Top Educational Agency in Malaysia",
      title1: "Expert Guidance for Your",
      title2: "Educational Journey",
      desc: "Y.A ALMA LEGACY helps students start their academic lives in Malaysia smoothly. We offer university admission, visa assistance, and full support upon arrival.",
      btn1: "Explore Universities",
      btn2: "Chat With Us",
      stats: { s1: "Students Assisted", s2: "Partner Universities", s3: "Success Rate" }
    },
    services: {
      title: "Core Services",
      desc: "Comprehensive zero-stress support from your first inquiry to settling down in Malaysia.",
      s1_title: "University Admission",
      s1_desc: "Get accepted into top-ranked Malaysian universities with our guaranteed admission process tailored to your academic background.",
      s2_title: "Visa & Flight Support",
      s2_desc: "End-to-end support for Student Pass (EMGS), medical checkups, booking your flight, and airport pick-up.",
      s3_title: "Accommodation Setup",
      s3_desc: "Find your perfect home near campus before you arrive. Ranging from luxury condos to budget shared apartments.",
      learn_more: "Learn more"
    },
    process: {
      sub: "How It Works",
      title1: "Your Roadmap To",
      title2: "Study In Malaysia",
      desc: "We've streamlined the entire application and relocation process so you can focus on what matters most — your education.",
      p1_title: "Free Consultation",
      p1_desc: "Chat with our experts to find the right university and major.",
      p2_title: "Apply & Admission",
      p2_desc: "We submit your paperwork and secure your offer letter swiftly.",
      p3_title: "Visa Processing",
      p3_desc: "We guide you through the EMGS student visa process step-by-step.",
      p4_title: "Arrival & Settlement",
      p4_desc: "Airport pick-up, accommodation handover, and local SIM card.",
      float1: "Flight Booked",
      float2: "See you soon!"
    },
    universities: {
      title1: "Top Partner",
      title2: "Universities",
      desc: "We proudly partner with Malaysia's most prestigious public and private institutions.",
      btn: "View Programs"
    },
    consultants: {
      title1: "Meet Our Expert",
      title2: "Consultants",
      desc: "Direct access to dedicated experts who will handle your entire journey.",
      role: "Academic Consultant",
      btn: "WhatsApp Now",
      fast_response: "24/7 Fast Response",
      multilingual: "Multilingual Support",
      official: "Official Representatives"
    },
    why_free: {
      title: "Why Our Services Are Free",
      desc: "As official representatives of top Malaysian universities, our commission comes directly from the institutions. You pay absolutely NO extra fees for our expert admission and visa guidance.",
      transparent: "Transparent Process",
      free_offer: "100% Free",
      official_rep: "Official University Representatives",
      f1: "No hidden fees or premium charges",
      f2: "Direct application processing to universities",
      f3: "Unbiased, objective educational advice",
      certified: "Certified Agent"
    },
    video_tours: {
      title: "Exclusive Campus Coverage",
      desc: "Get a real look at student life in Malaysia."
    },
    testimonials: {
      title: "Student Experiences",
      desc: "Hear from students who have successfully embarked on their journey with Y.A Alma Legacy."
    },
    language_centers: {
      title: "English Language Institutes",
      desc: "Master English in Malaysia's premier language centers before starting your degree.",
      btn: "View Institutes"
    },
    blog: {
      title: "Latest Articles & Guides",
      desc: "Stay updated with the latest news, student tips, and guides about living in Malaysia.",
      read: "Read Article"
    },
    widget: {
      title: "Talk to an academic consultant",
      experts: "Our Experts",
      online: "Online",
      chat: "Start Chat"
    },
    footer: {
      desc: "Y.A ALMA LEGACY helps students start their academic lives in Malaysia smoothly. We aim to provide top educational counseling aligned with your future goals.",
      quick: "Quick Links",
      edu: "Educational Services",
      contact: "Contact Info",
      about: "About Us",
      universities: "Universities",
      services: "Our Services",
      privacy: "Privacy Policy",
      lang: "Language Institutes",
      bachelor: "Bachelor's Degrees",
      master: "Master's Degrees",
      phd: "PhD Programs",
      rights: "Y.A Alma Legacy. All Rights Reserved."
    },
    contact: {
      title: "Contact Us",
      desc: "We are here to help you start your academic journey. Fill out the form and our consultants will reach out immediately.",
      details_title: "Get In Touch",
      form_title: "Submit Inquiry",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      country: "Country of Residence",
      select_country: "Select Country",
      interest: "Study Interest",
      interest_degree: "Bachelor / Master Degree",
      interest_language: "English Language Courses",
      interest_phd: "PhD",
      message: "Your Message / Inquiry",
      btn: "Submit Free Application",
      success_title: "Request Received Successfully!",
      success_desc: "One of our academic consultants will contact you within 24 hours.",
      whatsapp_chat: "Chat on WhatsApp"
    },
    service_pages: {
      s1_b1: "We carefully review your academic background, transcripts, and personal interests to match you with the perfect Malaysian university.",
      s1_b2: "Our experts handle the entire application process, ensuring all documents are correctly formatted and submitted on time to increase your acceptance rate.",
      s1_b3: "Direct liaison with university admission departments to fast-track your offer letter without the usual bureaucratic delays.",
      s1_btn: "Start Your Application via WhatsApp",
      
      s2_b1: "Complete EMGS (Education Malaysia Global Services) visa application management. We handle the paperwork so you endure zero stress.",
      s2_b2: "Assistance with mandatory pre-arrival medical checkups and vaccination requirement guidance.",
      s2_b3: "Flight booking advice and VIP airport pick-up service. As soon as you land at KLIA, our representative will be there to welcome you.",
      s2_btn: "Chat with our Visa Specialists",
      
      s3_b1: "We provide real photos, videos, and virtual tours of available accommodations right next to your university campus.",
      s3_b2: "Options for every budget: from premium luxury condominiums with gym and pool access, to economical shared student apartments.",
      s3_b3: "We secure your lease and handle the key handover so your new home is perfectly ready the moment you arrive in Malaysia.",
      s3_btn: "Explore Housing Options Together"
    }
  },
  ar: {
    nav: { 
      home: "الرئيسية", 
      universities: "الجامعات", 
      privateUni: "جامعات خاصة",
      publicUni: "جامعات حكومية",
      foreignUni: "جامعات أجنبية",
      specializations: "التخصصات",
      it: "علوم الحاسوب وتقنية المعلومات",
      engineering: "الهندسة",
      medicine: "الطب والصحة",
      business: "إدارة الأعمال والاقتصاد",
      arts: "الفنون والتصميم",
      languageCenters: "معاهد اللغة",
      allLanguage: "جميع المعاهد",
      elc: "معهد إي إل سي",
      ems: "معهد إي إم إس",
      awesome: "أكاديمية أوسوم",
      british: "المجلس الثقافي البريطاني",
      courses: "البحث عن تخصص",
      blog: "المدونة",
      services: "الخدمات",
      process: "آلية العمل",
      contact: "تواصل معنا", 
      apply: "سجل الآن" 
    },
    filters: {
      searchUni: "ابحث باسم الجامعة...",
      searchCourse: "ابحث عن برنامج دراسي...",
      location: "الموقع",
      allLocations: "جميع المواقع",
      level: "المرحلة الدراسية",
      allLevels: "جميع المراحل",
      bachelor: "بكالوريوس",
      master: "ماجستير",
      phd: "دكتوراه",
      freeOffer: "قبول مجاني",
      clear: "مسح الفلاتر",
      results: "نتيجة"
    },
    hero: {
      badge: "أفضل وكالة تعليمية في ماليزيا",
      title1: "توجيه خبراء لمسيرتك",
      title2: "التعليمية",
      desc: "واي آيه تساعد الطلاب العرب على بدء حياتهم الأكاديمية في ماليزيا بكل سهولة. نقدم قبولات جامعية، دعم التأشيرات، ودعم كامل عند الوصول.",
      btn1: "اكتشف الجامعات",
      btn2: "تحدث معنا",
      stats: { s1: "طالب ساعدناهم", s2: "جامعة شريكة", s3: "نسبة نجاح" }
    },
    services: {
      title: "الخدمات الأساسية",
      desc: "دعم شامل وبلا ضغوط من استفسارك الأول وحتى استقرارك في ماليزيا.",
      s1_title: "القبول الجامعي",
      s1_desc: "احصل على قبول في أفضل الجامعات الماليزية من خلال عملية تقديم مضمونة ومصممة لتناسب خلفيتك الأكاديمية.",
      s2_title: "تأشيرة الدخول والطيران",
      s2_desc: "دعم شامل لاستخراج تأشيرة الطالب (EMGS)، الفحوصات الطبية، حجز الطيران، والاستقبال في المطار.",
      s3_title: "تجهيز السكن",
      s3_desc: "نوفر لك السكن المثالي بالقرب من الحرم الجامعي قبل وصولك، بدءاً من الشقق الفاخرة المشتركة وحتى الخيارات الاقتصادية.",
      learn_more: "اعرف المزيد"
    },
    process: {
      sub: "آلية العمل",
      title1: "خارطة طريقك",
      title2: "للدراسة في ماليزيا",
      desc: "لقد قمنا بتسهيل جميع إجراءات التقديم لكي تركز على ما يهمك أكثر — ألا وهو تعليمك.",
      p1_title: "استشارة مجانية",
      p1_desc: "تحدث مع خبرائنا لاختيار التخصص والجامعة المناسبة.",
      p2_title: "التقديم والقبول",
      p2_desc: "نقوم بتقديم أوراقك ونحصل على رسالة القبول بسرعة.",
      p3_title: "إجراءات التأشيرة",
      p3_desc: "نرشدك خطوة بخطوة في إجراءات تأشيرة الطالب عبر نظام EMGS.",
      p4_title: "الوصول والاستقرار",
      p4_desc: "نستقبلك في المطار، ونسلمك السكن وشريحة اتصال محلية.",
      float1: "تم حجز الطيران",
      float2: "نراك قريباً!"
    },
    universities: {
      title1: "أبرز شركائنا من",
      title2: "الجامعات",
      desc: "نفخر بشراكتنا مع أرقى الجامعات الحكومية والخاصة في ماليزيا.",
      btn: "عرض البرامج"
    },
    consultants: {
      title1: "تعرّف على مستشارينا",
      title2: "الخبراء",
      desc: "وصول مباشر لخبراء مخصصين سيتولون إدارة رحلتك بالكامل.",
      role: "مستشار أكاديمي",
      btn: "تحدث معنا عبر الواتساب",
      fast_response: "استجابة سريعة 24/7",
      multilingual: "دعم متعدد اللغات",
      official: "ممثلون رسميون"
    },
    why_free: {
      title: "لماذا خدماتنا مجانية؟",
      desc: "بصفتنا ممثلين رسميين لأفضل الجامعات الماليزية، فإننا نتلقى عمولتنا مباشرة من الجامعات. لذا، فلن تدفع أي رسوم إضافية مقابل توجيهاتنا المتخصصة في القبول والتأشيرة.",
      transparent: "عملية شفافة",
      free_offer: "مجاني 100%",
      official_rep: "ممثلون رسميون للجامعات",
      f1: "بدون رسوم خفية أو تكاليف إضافية",
      f2: "معالجة مباشرة للطلبات لدى الجامعات",
      f3: "استشارات تعليمية موضوعية وغير متحيزة",
      certified: "وكيل معتمد"
    },
    video_tours: {
      title: "تغطية حصرية للحرم الجامعي",
      desc: "ألقِ نظرة حقيقية على الحياة الطلابية في ماليزيا."
    },
    testimonials: {
      title: "تجارب الطلاب",
      desc: "استمع إلى الطلاب الذين بدأوا رحلتهم بنجاح مع خبراء واي آيه."
    },
    language_centers: {
      title: "معاهد اللغة الإنجليزية",
      desc: "أتقن اللغة الإنجليزية في أفضل معاهد اللغة في ماليزيا قبل البدء في دراستك الجامعية.",
      btn: "عرض المعاهد"
    },
    blog: {
      title: "أحدث المقالات والأدلة",
      desc: "ابق مطّلعاً على أحدث الأخبار، ونصائح الطلاب، وأدلة العيش في ماليزيا.",
      read: "اقرأ المقال"
    },
    widget: {
      title: "تحدث مع مستشار تعليمي",
      experts: "خُبرائنا",
      online: "متصل",
      chat: "ابدأ المحادثة"
    },
    footer: {
      desc: "واي آيه تساعد الطلاب العرب على بدء حياتهم الأكاديمية في ماليزيا بكل سهولة ولدينا هدف واضح لتقديم أفضل الاستشارات التعليمية الموجهة لمستقبلك.",
      quick: "روابط سريعة",
      edu: "الخدمات التعليمية",
      contact: "معلومات التواصل",
      about: "من نحن",
      universities: "الجامعات",
      services: "الخدمات الأساسية",
      privacy: "سياسة الخصوصية",
      lang: "معاهد اللغة",
      bachelor: "درجات البكالوريوس",
      master: "درجات الماجستير",
      phd: "برامج الدكتوراه",
      rights: "واي آيه - عالم من التجارب. جميع الحقوق محفوظة."
    },
    contact: {
      title: "اتصل بنا",
      desc: "نحن هنا لمساعدتك في بدء رحلتك الأكاديمية. املأ النموذج وسيقوم مستشارونا بالتواصل معك فوراً.",
      details_title: "معلومات الاتصال",
      form_title: "إرسال استفسار",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      country: "بلد الإقامة",
      select_country: "اختر الدولة",
      interest: "الاهتمام الدراسي",
      interest_degree: "دراسة البكالوريوس / الماجستير",
      interest_language: "دراسة لغة إنجليزية",
      interest_phd: "دكتوراه",
      message: "رسالتك واستفسارك",
      btn: "إرسال الطلب مجاناً",
      success_title: "تم استلام طلبك بنجاح!",
      success_desc: "سيتصل بك أحد مستشارينا الأكاديميين خلال 24 ساعة.",
      whatsapp_chat: "تحدث معنا عبر الواتساب"
    },
    service_pages: {
      s1_b1: "نقوم بمراجعة خلفيتك الأكاديمية ودرجاتك بعناية لمطابقتك مع الجامعة الماليزية المثالية.",
      s1_b2: "يتعامل خبراؤنا مع عملية التقديم بالكامل بدلاً عنك، للتأكد من تنسيق جميع المستندات وتقديمها لزيادة نسبة قبولك.",
      s1_b3: "تواصل مباشر مع إدارات القبول في الجامعات لتسريع الحصول على رسالة القبول.",
      s1_btn: "ابدأ التقديم عبر الواتساب",
      
      s2_b1: "إدارة شاملة لتأشيرة (EMGS). نحن نتعامل مع الأعمال الورقية، فتضمن صفر ضغوط.",
      s2_b2: "المساعدة في الفحوصات الطبية الإلزامية قبل الوصول ومتطلبات التطعيم.",
      s2_b3: "تقديم نصائح حجز الطيران واستقبال كبار الشخصيات من المطار (KLIA).",
      s2_btn: "تحدث مع مختصي التأشيرات",
      
      s3_b1: "نقدم صوراً حقيقية ومقاطع فيديو وجولات افتراضية للسكن المتاح بجوار جامعتك.",
      s3_b2: "خيارات تناسب جميع الميزانيات: من المجمعات السكنية الفاخرة إلى سكن الطلاب الاقتصادي.",
      s3_b3: "نؤمن إيجارك ونسلمك المفاتيح ليكون منزلك الجديد جاهزاً تماماً وحال وصولك لماليزيا.",
      s3_btn: "اكتشف خيارات السكن معنا"
    }
  },
  zh: {
    nav: { 
      home: "首页", 
      universities: "大学", 
      privateUni: "私立大学",
      publicUni: "公立大学",
      foreignUni: "外国大学",
      specializations: "专业",
      it: "计算机科学与信息技术",
      engineering: "工程",
      medicine: "医学与健康",
      business: "商业与管理",
      arts: "艺术与设计",
      languageCenters: "语言学院",
      allLanguage: "所有学院",
      elc: "ELC 英语学院",
      ems: "EMS 语言中心",
      awesome: "Awesome 英语学院",
      british: "英国文化协会 (British Council)",
      courses: "搜索课程",
      blog: "博客",
      services: "服务",
      process: "申请流程",
      contact: "联系我们", 
      apply: "立即申请" 
    },
    filters: {
      searchUni: "按大学名称搜索...",
      searchCourse: "搜索课程程序...",
      location: "位置",
      allLocations: "所有位置",
      level: "学习阶段",
      allLevels: "所有阶段",
      bachelor: "学士",
      master: "硕士",
      phd: "博士",
      freeOffer: "免费录取通知书",
      clear: "清除条件",
      results: "找到结果"
    },
    hero: {
      badge: "马来西亚顶级教育机构",
      title1: "专业指导您的",
      title2: "教育之旅",
      desc: "Y.A ALMA LEGACY 帮助学生顺利开启在马来西亚的学术生活。我们提供大学录取、签证协助以及抵达后的全面支持。",
      btn1: "探索大学",
      btn2: "与我们聊天",
      stats: { s1: "已协助学生", s2: "合作大学", s3: "成功率" }
    },
    services: {
      title: "核心服务",
      desc: "从您最初的咨询到在马来西亚安顿下来，我们提供全方位零压力的支持。",
      s1_title: "大学录取",
      s1_desc: "通过我们针对您学术背景量身定制的录取流程，获取马来西亚顶尖大学的录取通知书。",
      s2_title: "签证及机票支持",
      s2_desc: "学生签证（EMGS）、体检、机票预订及机场接机的端到端支持。",
      s3_title: "住宿安排",
      s3_desc: "在您抵达前，在校园附近找到完美的住所。从豪华公寓到经济型共享公寓，应有尽有。",
      learn_more: "了解更多"
    },
    process: {
      sub: "工作流程",
      title1: "关于您的",
      title2: "马来西亚留学路线图",
      desc: "我们简化了整个申请和搬迁流程，以便您可以专注于最重要的事情——您的教育。",
      p1_title: "免费咨询",
      p1_desc: "与我们的专家交流，以找到合适的大学和专业。",
      p2_title: "申请与录取",
      p2_desc: "我们会迅速提交您的文件并确保获得录取通知书。",
      p3_title: "签证处理",
      p3_desc: "我们将逐步指导您完成 EMGS 学生签证流程。",
      p4_title: "抵达与安顿",
      p4_desc: "机场接机、住宿交接和本地 SIM 卡办理。",
      float1: "已预订航班",
      float2: "很快就见！"
    },
    universities: {
      title1: "顶尖合作",
      title2: "大学",
      desc: "我们很自豪能与马来西亚最负盛名的公立和私立机构合作。",
      btn: "查看课程"
    },
    consultants: {
      title1: "认识我们的",
      title2: "专家顾问",
      desc: "直接联系将负责您整个旅程的专属专家。",
      role: "学术顾问",
      btn: "立即使用 WhatsApp 联系",
      fast_response: "24/7 快速响应",
      multilingual: "多语言支持",
      official: "官方代表"
    },
    why_free: {
      title: "为何我们的服务免费？",
      desc: "作为马来西亚顶尖大学的官方代表，我们的佣金直接来自这些机构。您完全无需为我们的专业录取和签证指导支付任何额外费用。",
      transparent: "透明的流程",
      free_offer: "100% 免费",
      official_rep: "官方大学代表",
      f1: "无隐藏费用或附加收费",
      f2: "直接向大学处理申请",
      f3: "公正客观的教育建议",
      certified: "认证代理"
    },
    video_tours: {
      title: "独家校园巡礼",
      desc: "真实了解马来西亚的学生生活。"
    },
    testimonials: {
      title: "学生体验",
      desc: "听听与 Y.A Alma Legacy 专家成功开启旅程的学生的心声。"
    },
    language_centers: {
      title: "英语语言学院",
      desc: "在攻读学位之前，在马来西亚顶级的语言中心掌握英语。",
      btn: "查看学院"
    },
    blog: {
      title: "最新文章及指南",
      desc: "随时了解有关在马来西亚生活的最新新闻、学生建议和指南。",
      read: "阅读文章"
    },
    widget: {
      title: "与学术顾问交流",
      experts: "我们的专家",
      online: "在线",
      chat: "开始聊天"
    },
    footer: {
      desc: "Y.A ALMA LEGACY 帮助学生顺利开启在马来西亚的学术生活。我们的目标是提供符合您未来目标的最佳教育咨询。",
      quick: "快速链接",
      edu: "教育服务",
      contact: "联系信息",
      about: "关于我们",
      universities: "大学",
      services: "我们的服务",
      privacy: "隐私政策",
      lang: "语言学院",
      bachelor: "学士学位",
      master: "硕士学位",
      phd: "博士课程",
      rights: "Y.A Alma Legacy。版权所有。"
    },
    contact: {
      title: "联系我们",
      desc: "我们在这里帮助您开启学术旅程。填写表格，我们的顾问将立即与您联系。",
      details_title: "获取联系",
      form_title: "提交咨询",
      name: "全名",
      email: "电子邮件地址",
      phone: "电话号码",
      country: "居住国家",
      select_country: "选择国家",
      interest: "学习意向",
      interest_degree: "学士 / 硕士学位",
      interest_language: "英语语言课程",
      interest_phd: "博士",
      message: "您的信息 / 查询",
      btn: "提交免费申请",
      success_title: "请求已成功接收！",
      success_desc: "我们的学术顾问将在24小时内与您联系。",
      whatsapp_chat: "在 WhatsApp 上聊天"
    },
    service_pages: {
      s1_b1: "我们会仔细审查您的学术背景并为您匹配最完美的马来西亚大学。",
      s1_b2: "我们的专家负责整个申请流程，确保您的录取率。",
      s1_b3: "与大学直接联系，快速获取您的录取通知书。",
      s1_btn: "通过 WhatsApp 立即申请",
      
      s2_b1: "全面的 EMGS 签证申请管理，无需您烦恼纸质文件。",
      s2_b2: "协助处理强制性的到达前体检和疫苗要求。",
      s2_b3: "机票预定建议和 VIP 接机服务。",
      s2_btn: "咨询签证专家",
      
      s3_b1: "提供大学附近的住宿选择及真实照片、视频。",
      s3_b2: "各种预算的选项：从高级共管公寓到经济共享住宿。",
      s3_b3: "我们将搞定您的租约，确保您到达即可入住。",
      s3_btn: "探索住宿选项"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isRtl: boolean;
  t_dyn: (textEn: string, textAr: string, textZh?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const [dbTranslations, setDbTranslations] = useState<any>({});

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved === "en" || saved === "ar" || saved === "zh") {
      setLanguage(saved);
    }
    setMounted(true); // Don't block app render on the database fetch!
    
    // Fetch dynamic translations from backend
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/translations`)
      .then(res => res.json())
      .then(data => {
        const mapped: any = {};
        data.forEach((item: any) => {
          mapped[item.key] = { en: item.en, ar: item.ar, zh: item.zh };
        });
        setDbTranslations(mapped);
      })
      .catch(err => {
        console.error("Translation fetch error:", err);
      });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ar" : prev === "ar" ? "zh" : "en"));
  };

  // Helper to deep merge or lookup keys using flat path "nav.home"
  const getTranslation = (path: string) => {
    if (dbTranslations[path] && dbTranslations[path][language]) {
      return dbTranslations[path][language];
    }
    // Fallback to static
    const keys = path.split('.');
    let result: any = translations[language] || translations.en;
    for (const key of keys) {
      if (result) result = result[key];
    }
    // If not found in current lang static fallback, check EN static
    if (!result) {
       result = translations.en;
       for (const key of keys) {
         if (result) result = result[key];
       }
    }
    return result || path;
  };

  // Proxy the t object so that t.nav.home implicitly queries DB first
  // Note: For full dynamic replacement, we wrap the entire `translations` object in a Proxy
  const createProxy = (baseObj: any, currentPath: string = ""): any => {
    return new Proxy(baseObj, {
      get: (target, prop: string) => {
        if (typeof prop !== "string") return target[prop];
        const newPath = currentPath ? `${currentPath}.${prop}` : prop;
        
        // If it's a deeply nested object, keep proxying
        if (typeof target[prop] === 'object' && target[prop] !== null && !Array.isArray(target[prop])) {
          return createProxy(target[prop], newPath);
        }
        
        // Leaf node reached: check DB first, then static target
        if (dbTranslations[newPath] && dbTranslations[newPath][language]) {
          return dbTranslations[newPath][language];
        }
        
        return target[prop] || newPath;
      }
    });
  };

  const t = createProxy(translations[language] || translations.en);

  const t_dyn = (textEn: string, textAr: string, textZh?: string) => {
    if (!textEn) return "";
    if (language === "ar") return textAr || textEn;
    if (language === "zh") return textZh || dynamicTranslationsZh[textEn] || textEn;
    return textEn;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[var(--color-brand-navy)]"></div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRtl: language === "ar", t_dyn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
