"use client";

import React from "react";
import Link from "next/link";
import { 
  GraduationCap, Star, Users, Globe, Target, Heart, 
  Award, CheckCircle, ArrowLeft, Phone, Mail, MapPin,
  Lightbulb, Shield, TrendingUp, BookOpen
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { language, isRtl } = useLanguage();

  const isAr = language === "ar";
  const isZh = language === "zh";

  const t = {
    badge: isAr ? "من نحن" : isZh ? "关于我们" : "About Us",
    hero_title: "Y.A. Alma Legacy",
    hero_subtitle: isAr
      ? "شريكك الموثوق لمتابعة التعليم العالي في ماليزيا"
      : isZh
      ? "您在马来西亚追求优质高等教育的可信赖伙伴"
      : "Your Trusted Partner for Higher Education in Malaysia",
    hero_desc: isAr
      ? "نحن شركة استشارات تعليمية متخصصة في مساعدة الطلاب العرب والدوليين على متابعة أحلامهم الأكاديمية في ماليزيا — إحدى أبرز وجهات التعليم في آسيا. منذ تأسيسنا، ساعدنا آلاف الطلاب من أكثر من 20 دولة على الالتحاق بأفضل الجامعات والمعاهد الماليزية."
      : isZh
      ? "我们是一家专业教育咨询公司，致力于帮助阿拉伯和国际学生在马来西亚追求学术梦想。马来西亚是亚洲顶尖教育目的地之一。自成立以来，我们已帮助来自20多个国家的数千名学生进入顶级马来西亚大学和学院。"
      : "We are a specialized educational consultancy helping Arab and international students pursue their academic dreams in Malaysia — one of Asia's premier educational destinations. Since our founding, we have helped thousands of students from over 20 countries enroll in top Malaysian universities and institutes.",

    story_title: isAr ? "قصتنا" : isZh ? "我们的故事" : "Our Story",
    story_p1: isAr
      ? "بدأت Y.A. Alma Legacy برؤية بسيطة: جعل التعليم العالي في ماليزيا في متناول كل طالب عربي يطمح لمستقبل أفضل. رأى مؤسسونا الفجوة الكبيرة بين الطموحات الطلابية وتعقيدات إجراءات القبول الجامعي خارج البلاد، فقرروا بناء جسر من الثقة والخبرة."
      : isZh
      ? "Y.A. Alma Legacy以一个简单的愿景起步：让每一位有志于更美好未来的阿拉伯学生都能负担得起马来西亚的高等教育。创始人发现了学生抱负与海外大学入学程序复杂性之间的巨大差距，因此决定建立一座信任与专业知识的桥梁。"
      : "Y.A. Alma Legacy started with a simple vision: making higher education in Malaysia accessible to every Arab student who aspires for a better future. Our founders saw the huge gap between student ambitions and the complexities of overseas university admission procedures, so they decided to build a bridge of trust and expertise.",
    story_p2: isAr
      ? "اليوم، نُعدّ من أبرز مراكز الاستشارات التعليمية المتخصصة في التعليم الماليزي، بفريق من المستشارين المعتمدين والخبراء الأكاديميين الذين عاشوا تجربة الدراسة في ماليزيا وفهموا تحدياتها بعمق."
      : isZh
      ? "如今，我们是马来西亚教育领域最杰出的教育咨询中心之一，拥有一支由认证顾问和学术专家组成的团队，他们亲身经历了在马来西亚学习的历程，深刻了解其中的挑战。"
      : "Today, we are among the most prominent educational consultancy centers specializing in Malaysian education, with a team of certified advisors and academic experts who lived the experience of studying in Malaysia and understood its challenges deeply.",

    stats: [
      { value: "5000+", label: isAr ? "طالب ساعدناهم" : isZh ? "帮助过的学生" : "Students Helped" },
      { value: "20+", label: isAr ? "دولة نخدمها" : isZh ? "服务的国家" : "Countries Served" },
      { value: "35+", label: isAr ? "جامعة شريكة" : isZh ? "合作大学" : "Partner Universities" },
      { value: "8+", label: isAr ? "سنوات خبرة" : isZh ? "年经验" : "Years of Experience" },
    ],

    mission_title: isAr ? "مهمتنا ورؤيتنا" : isZh ? "我们的使命与愿景" : "Our Mission & Vision",
    mission_title2: isAr ? "المهمة" : isZh ? "使命" : "Mission",
    mission_desc: isAr
      ? "تمكين الطلاب الدوليين من الوصول إلى أفضل خيارات التعليم العالي في ماليزيا، من خلال استشارات شخصية موثوقة وشفافة تضع مصلحة الطالب أولاً."
      : isZh
      ? "通过可信赖、透明的个性化咨询，让国际学生能够获得马来西亚最优质的高等教育选择，始终将学生利益放在首位。"
      : "To empower international students to access the best higher education options in Malaysia, through reliable and transparent personal consultations that put the student's interest first.",
    vision_title: isAr ? "الرؤية" : isZh ? "愿景" : "Vision",
    vision_desc: isAr
      ? "أن نكون المرجع الأول والأكثر ثقة لكل طالب يتطلع للدراسة في ماليزيا، وأن نبني جيلاً من المتعلمين الدوليين المؤهلين الذين يحققون طموحاتهم."
      : isZh
      ? "成为每位希望在马来西亚学习的学生的首选和最值得信赖的参考，培养一代具有资格的国际学习者，实现他们的抱负。"
      : "To be the first and most trusted reference for every student aspiring to study in Malaysia, and to build a generation of qualified international learners who achieve their ambitions.",

    values_title: isAr ? "قيمنا الأساسية" : isZh ? "我们的核心价值观" : "Our Core Values",
    values: [
      {
        icon: Shield,
        title: isAr ? "الشفافية والأمانة" : isZh ? "透明与诚信" : "Transparency & Honesty",
        desc: isAr ? "نقدم معلومات دقيقة وصريحة دون مبالغة أو تضليل" : isZh ? "提供准确、直接的信息，不夸大或误导" : "We provide accurate and candid information without exaggeration or misleading",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: Heart,
        title: isAr ? "الاهتمام الشخصي" : isZh ? "个性化关怀" : "Personal Care",
        desc: isAr ? "نتعامل مع كل طالب كقضية فريدة ونولي اهتماماً لتفاصيل احتياجاته" : isZh ? "将每位学生视为独特案例，关注其需求细节" : "We treat each student as a unique case and pay attention to the details of their needs",
        color: "from-rose-500 to-rose-600"
      },
      {
        icon: Award,
        title: isAr ? "التميز المهني" : isZh ? "职业卓越" : "Professional Excellence",
        desc: isAr ? "فريقنا مدرّب ومعتمد ويواكب أحدث متطلبات التعليم الماليزي" : isZh ? "我们的团队训练有素、持证合格，紧跟马来西亚最新教育要求" : "Our team is trained, certified and keeps up with the latest Malaysian education requirements",
        color: "from-amber-500 to-amber-600"
      },
      {
        icon: Target,
        title: isAr ? "النتائج المضمونة" : isZh ? "保证结果" : "Guaranteed Results",
        desc: isAr ? "لا نتوقف حتى يحصل طالبنا على القبول المناسب في أفضل مؤسسة" : isZh ? "我们不会停止，直到学生在最好的机构获得适合的录取通知" : "We don't stop until our student gets the right acceptance at the best institution",
        color: "from-emerald-500 to-emerald-600"
      },
      {
        icon: Globe,
        title: isAr ? "التنوع والشمول" : isZh ? "多元与包容" : "Diversity & Inclusion",
        desc: isAr ? "نرحب بطلاب من جميع الخلفيات والجنسيات بلا استثناء" : isZh ? "欢迎来自各种背景和国籍的学生，无一例外" : "We welcome students from all backgrounds and nationalities without exception",
        color: "from-violet-500 to-violet-600"
      },
      {
        icon: Lightbulb,
        title: isAr ? "الابتكار المستمر" : isZh ? "持续创新" : "Continuous Innovation",
        desc: isAr ? "نطوّر خدماتنا باستمرار لتلبية متطلبات التعليم الحديث" : isZh ? "不断发展我们的服务，以满足现代教育的要求" : "We continuously develop our services to meet modern education requirements",
        color: "from-teal-500 to-teal-600"
      },
    ],

    services_title: isAr ? "خدماتنا" : isZh ? "我们的服务" : "Our Services",
    services: [
      { icon: "🎓", title: isAr ? "الاستشارة الجامعية" : isZh ? "大学咨询" : "University Consulting", desc: isAr ? "مساعدتك في اختيار الجامعة والتخصص الأنسب وفقاً لمؤهلاتك وميزانيتك" : isZh ? "根据您的资质和预算，协助您选择最合适的大学和专业" : "Helping you choose the right university and specialization based on your qualifications and budget" },
      { icon: "📋", title: isAr ? "طلبات القبول" : isZh ? "入学申请" : "Admission Applications", desc: isAr ? "إعداد وتقديم طلبات القبول الكاملة بدقة واحترافية" : isZh ? "专业、准确地准备和提交完整的入学申请" : "Preparing and submitting complete admission applications with precision and professionalism" },
      { icon: "🛂", title: isAr ? "خدمات التأشيرة" : isZh ? "签证服务" : "Visa Services", desc: isAr ? "إرشادك خطوة بخطوة لاستكمال إجراءات تأشيرة الدراسة بنجاح" : isZh ? "一步步指导您成功办理学习签证手续" : "Guiding you step by step to successfully complete study visa procedures" },
      { icon: "🏠", title: isAr ? "السكن والاستقبال" : isZh ? "住宿与接待" : "Housing & Reception", desc: isAr ? "مساعدتك في إيجاد السكن المناسب والاستقبال لدى وصولك لماليزيا" : isZh ? "协助您找到合适的住所，并在您抵达马来西亚时予以接待" : "Helping you find suitable housing and reception upon your arrival in Malaysia" },
      { icon: "💳", title: isAr ? "المنح والتمويل" : isZh ? "奖学金与资助" : "Scholarships & Funding", desc: isAr ? "مساعدتك في الحصول على أفضل المنح والتخفيضات الدراسية المتاحة" : isZh ? "帮助您获得最佳奖学金和学费折扣" : "Helping you secure the best scholarships and study discounts available" },
      { icon: "🌐", title: isAr ? "الدعم المستمر" : isZh ? "持续支持" : "Ongoing Support", desc: isAr ? "دعم مستمر قبل وأثناء وبعد وصولك لضمان تجربة دراسية ناجحة" : isZh ? "在您抵达前、抵达时及抵达后提供持续支持，确保成功的学习体验" : "Continuous support before, during, and after your arrival to ensure a successful study experience" },
    ],

    why_title: isAr ? "لماذا تختار يا علما؟" : isZh ? "为什么选择 Ya Alma？" : "Why Choose Ya Alma?",
    why_items: [
      isAr ? "فريق من المستشارين المعتمدين والمتخصصين" : isZh ? "由认证专业顾问组成的团队" : "Team of certified and specialized consultants",
      isAr ? "علاقات مباشرة مع أكثر من 35 جامعة ومعهد" : isZh ? "与35所以上大学和学院的直接合作关系" : "Direct relationships with over 35 universities and institutes",
      isAr ? "خدمة شاملة من البداية حتى الوصول" : isZh ? "从开始到抵达的全面服务" : "Comprehensive service from start to arrival",
      isAr ? "دعم متعدد اللغات (عربي، إنجليزي، صيني)" : isZh ? "多语言支持（阿拉伯语、英语、中文）" : "Multi-language support (Arabic, English, Chinese)",
      isAr ? "نسبة قبول تصل إلى 98% لطلابنا" : isZh ? "学生录取率高达98%" : "Acceptance rate up to 98% for our students",
      isAr ? "متابعة مجانية بعد التسجيل" : isZh ? "注册后免费跟进" : "Free follow-up after enrollment",
    ],

    team_title: isAr ? "تواصل معنا" : isZh ? "联系我们" : "Contact Us",
    cta_title: isAr ? "ابدأ رحلتك التعليمية اليوم" : isZh ? "今天开启您的教育之旅" : "Start Your Educational Journey Today",
    cta_desc: isAr ? "تحدث مع أحد مستشارينا المتخصصين الآن وستحصل على استشارة مجانية كاملة تساعدك في اتخاذ القرار الصحيح." : isZh ? "立即与我们的专业顾问之一交谈，您将获得完整的免费咨询，帮助您做出正确的决定。" : "Speak with one of our specialized consultants now and get a complete free consultation that helps you make the right decision.",
    whatsapp_btn: isAr ? "تحدث معنا عبر واتساب" : isZh ? "通过 WhatsApp 联系我们" : "Chat with Us on WhatsApp",
    contact_btn: isAr ? "تواصل معنا" : isZh ? "联系我们" : "Contact Us",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19]" dir={isRtl ? "rtl" : "ltr"}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2f6b 50%, #0d1b3e 100%)', paddingTop: '7rem', paddingBottom: '7rem' }}>
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #c6a345 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Gold radial glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(198,163,69,0.2) 0%, transparent 70%)' }} />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text side */}
            <div className="flex-1 text-center lg:text-start">
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(198,163,69,0.15)', border: '1px solid rgba(198,163,69,0.4)', borderRadius: '9999px', padding: '10px 20px', marginBottom: '24px' }}>
                <Star size={14} style={{ color: '#c6a345', fill: '#c6a345' }} />
                <span style={{ color: '#c6a345', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.badge}</span>
              </div>

              {/* Title — plain white, no box */}
              <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em', background: 'none' }}>
                {t.hero_title}
              </h1>

              {/* Subtitle */}
              <p style={{ color: '#c6a345', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>
                {t.hero_subtitle}
              </p>

              {/* Description */}
              <p style={{ color: 'rgba(191,219,254,0.9)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px' }}>
                {t.hero_desc}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '36px', justifyContent: isRtl ? 'flex-end' : 'flex-start' }}>
                <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-black px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all"
                  style={{ background: '#25D366', color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>
                  💬 {t.whatsapp_btn}
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-2xl transition-all"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                  {t.contact_btn}
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              {t.stats.map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '24px', padding: '24px', textAlign: 'center', minWidth: '140px' }}>
                  <p style={{ fontSize: '2.25rem', fontWeight: 900, color: '#c6a345', margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(191,219,254,0.8)', marginTop: '4px', fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 max-w-6xl space-y-20">

        {/* ── Our Story ── */}
        <section>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full px-4 py-2 text-sm font-bold mb-6">
                <BookOpen size={16} /> {t.story_title}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">{t.story_p1}</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t.story_p2}</p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-[#0d1b3e] to-[#1a2f6b] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c6a345]/10 rounded-full blur-3xl" />
              <GraduationCap size={48} className="text-[#c6a345] mb-6" />
              <h3 className="text-2xl font-black mb-4">{isAr ? "خبرة أكاديمية حقيقية" : isZh ? "真正的学术经验" : "Real Academic Experience"}</h3>
              <p className="text-blue-200 leading-relaxed">
                {isAr ? "جميع مستشارينا درسوا أو عملوا في ماليزيا، مما يمنحهم فهماً عميقاً لمتطلبات كل جامعة وتوقعات حياة الطالب هناك." : isZh ? "我们所有的顾问都曾在马来西亚学习或工作，这使他们对每所大学的要求和学生生活的期望有了深刻的理解。" : "All our consultants have studied or worked in Malaysia, giving them a deep understanding of each university's requirements and student life expectations there."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["UTM", "MMU", "APU", "Taylor's", "UCSI", "UPM"].map(u => (
                  <span key={u} className="bg-white/10 px-3 py-1.5 rounded-xl text-sm font-bold text-[#c6a345]">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section>
          <h2 className="text-3xl font-black text-[var(--color-brand-navy)] dark:text-white mb-10 text-center">{t.mission_title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-[var(--color-brand-navy)] dark:text-gray-100 mb-4">{t.mission_title2}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.mission_desc}</p>
            </div>
            <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c6a345] to-amber-600 flex items-center justify-center mb-6">
                <Star size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-[var(--color-brand-navy)] dark:text-gray-100 mb-4">{t.vision_title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.vision_desc}</p>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section>
          <h2 className="text-3xl font-black text-[var(--color-brand-navy)] dark:text-white mb-10 text-center">{t.values_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white dark:bg-[#0b0f19] rounded-3xl p-7 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-black text-[var(--color-brand-navy)] dark:text-gray-100 mb-3">{v.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Services ── */}
        <section>
          <h2 className="text-3xl font-black text-[var(--color-brand-navy)] dark:text-white mb-10 text-center">{t.services_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map((s, i) => (
              <div key={i} className="bg-white dark:bg-[#0b0f19] rounded-3xl p-7 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-[#c6a345]/30 transition-all group">
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <h3 className="text-lg font-black text-[var(--color-brand-navy)] dark:text-gray-100 mb-3">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-gradient-to-br from-[#0d1b3e] to-[#1a2f6b] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c6a345]/10 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-10 text-center">{t.why_title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.why_items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/10 rounded-2xl p-5">
                  <CheckCircle size={20} className="text-[#c6a345] flex-shrink-0 mt-0.5" />
                  <p className="text-blue-100 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Info ── */}
        <section>
          <h2 className="text-3xl font-black text-[var(--color-brand-navy)] dark:text-white mb-10 text-center">{t.team_title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer"
              className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <p className="font-black text-[var(--color-brand-navy)] dark:text-gray-100 text-lg">WhatsApp</p>
                <p className="text-gray-500 font-mono mt-1">+601158722903</p>
              </div>
            </a>
            <a href="mailto:info@yaalmalegacy.com"
              className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <p className="font-black text-[var(--color-brand-navy)] dark:text-gray-100 text-lg">{isAr ? "البريد الإلكتروني" : isZh ? "电子邮件" : "Email"}</p>
                <p className="text-gray-500 text-sm mt-1">info@yaalmalegacy.com</p>
              </div>
            </a>
            <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c6a345] to-amber-600 rounded-2xl flex items-center justify-center">
                <MapPin size={28} className="text-white" />
              </div>
              <div>
                <p className="font-black text-[var(--color-brand-navy)] dark:text-gray-100 text-lg">{isAr ? "الموقع" : isZh ? "地点" : "Location"}</p>
                <p className="text-gray-500 text-sm mt-1">Kuala Lumpur, Malaysia 🇲🇾</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center bg-white dark:bg-[#0b0f19] rounded-[2.5rem] p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
          <GraduationCap size={56} className="text-[#c6a345] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-brand-navy)] dark:text-white mb-4">{t.cta_title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{t.cta_desc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-5 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-lg">
              💬 {t.whatsapp_btn}
            </a>
            <Link href="/universities" className="inline-flex items-center gap-3 bg-[var(--color-brand-navy)] hover:bg-[#1a2f6b] text-white font-black px-10 py-5 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-lg">
              <GraduationCap size={22} />
              {isAr ? "استعرض الجامعات" : isZh ? "浏览大学" : "Browse Universities"}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
