"use client";

import React from "react";
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail, Phone, AlertCircle, FileText } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function PrivacyPage() {
  const { language, isRtl } = useLanguage();

  const t = {
    ar: {
      title: "سياسة الخصوصية",
      subtitle: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية",
      lastUpdated: "آخر تحديث: أبريل 2026",
      intro: "تصف سياسة الخصوصية هذه كيفية جمع شركة Y.A Alma Legacy واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني وخدماتنا المتعلقة بالتعليم في ماليزيا.",
      sections: [
        {
          icon: Database,
          title: "المعلومات التي نجمعها",
          content: [
            "الاسم الكامل وبيانات التواصل (البريد الإلكتروني، رقم الهاتف، الدولة)",
            "المعلومات الأكاديمية (المرحلة الدراسية، التخصص المرغوب، الجامعة المفضلة)",
            "بيانات الاستخدام (الصفحات المُزارة، مدة الجلسة، الجهاز المستخدم)",
            "المعلومات المقدمة في نماذج التواصل وطلبات القبول",
          ]
        },
        {
          icon: Eye,
          title: "كيف نستخدم معلوماتك",
          content: [
            "تقديم استشارات تعليمية مخصصة ومساعدتك في اختيار الجامعة المناسبة",
            "التواصل معك بخصوص طلبات القبول والتأشيرة والإجراءات اللازمة",
            "إرسال تحديثات عن فرص المنح الدراسية والمواعيد المهمة",
            "تحسين خدماتنا وتجربة المستخدم على موقعنا",
            "الامتثال للمتطلبات القانونية والتنظيمية",
          ]
        },
        {
          icon: Lock,
          title: "حماية بياناتك",
          content: [
            "نستخدم تشفير SSL/TLS لجميع البيانات المنقولة عبر الموقع",
            "يتم تخزين البيانات على خوادم آمنة محمية بجدران نارية متقدمة",
            "يقتصر الوصول إلى بياناتك على موظفينا المخوّلين فقط",
            "لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف ثالثة لأغراض تجارية",
          ]
        },
        {
          icon: UserCheck,
          title: "مشاركة المعلومات",
          content: [
            "قد نشارك معلوماتك مع الجامعات والمعاهد اللغوية التي تقدمت إليها بإذنك",
            "قد نشارك بيانات مع مزودي الخدمات (استضافة، تحليل) بموجب اتفاقيات صارمة",
            "سنُفصح عن المعلومات إذا كان ذلك مطلوباً بموجب القانون أو أمر قضائي",
            "لن نبيع بياناتك الشخصية لأي جهة تسويقية تحت أي ظرف",
          ]
        },
        {
          icon: Globe,
          title: "ملفات تعريف الارتباط (Cookies)",
          content: [
            "نستخدم ملفات Cookies لتحسين تجربة التصفح وحفظ تفضيلاتك (اللغة، العملة)",
            "ملفات Cookies الأساسية: ضرورية لعمل الموقع ولا يمكن تعطيلها",
            "ملفات Cookies التحليلية: تساعدنا على فهم كيفية استخدام الموقع",
            "يمكنك التحكم في ملفات Cookies من إعدادات متصفحك في أي وقت",
          ]
        },
        {
          icon: Shield,
          title: "حقوقك",
          content: [
            "الحق في الوصول: يمكنك طلب نسخة من جميع بياناتك الشخصية لدينا",
            "الحق في التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة",
            "الحق في الحذف: يمكنك طلب حذف بياناتك الشخصية من سجلاتنا",
            "الحق في الاعتراض: يمكنك الاعتراض على معالجة بياناتك لأغراض معينة",
            "لممارسة أي من هذه الحقوق، تواصل معنا عبر البريد الإلكتروني المذكور أدناه",
          ]
        },
        {
          icon: AlertCircle,
          title: "الاحتفاظ بالبيانات",
          content: [
            "نحتفظ ببياناتك طوال فترة علاقتنا التجارية وبعدها لمدة 3 سنوات",
            "بيانات الطلبات: تُحفظ لمدة 5 سنوات لأغراض قانونية وتنظيمية",
            "سجلات التواصل: تُحفظ لمدة سنتين من آخر تواصل",
            "يمكنك طلب حذف بياناتك في أي وقت وسنستجيب خلال 30 يوماً",
          ]
        },
        {
          icon: FileText,
          title: "التغييرات على السياسة",
          content: [
            "قد نحدّث سياسة الخصوصية هذه بشكل دوري لتعكس التغييرات في ممارساتنا",
            "سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع",
            "استمرارك في استخدام الموقع بعد التعديلات يُعدّ قبولاً للسياسة الجديدة",
            "ننصحك بمراجعة هذه الصفحة دورياً للاطلاع على أي تحديثات",
          ]
        },
      ],
      contactTitle: "تواصل معنا بخصوص الخصوصية",
      contactText: "إذا كان لديك أي استفسار حول سياسة الخصوصية أو ممارساتنا في حماية البيانات، لا تتردد في التواصل معنا:",
    },
    en: {
      title: "Privacy Policy",
      subtitle: "We respect your privacy and are committed to protecting your personal data",
      lastUpdated: "Last Updated: April 2026",
      intro: "This Privacy Policy describes how Y.A Alma Legacy collects, uses, and protects your personal information when you use our website and services related to education in Malaysia.",
      sections: [
        {
          icon: Database,
          title: "Information We Collect",
          content: [
            "Full name and contact details (email, phone number, country)",
            "Academic information (study level, desired specialization, preferred university)",
            "Usage data (pages visited, session duration, device used)",
            "Information provided in contact forms and admission applications",
          ]
        },
        {
          icon: Eye,
          title: "How We Use Your Information",
          content: [
            "Providing personalized educational consultations and helping you choose the right university",
            "Communicating with you regarding admission applications, visa, and necessary procedures",
            "Sending updates about scholarship opportunities and important deadlines",
            "Improving our services and user experience on our website",
            "Complying with legal and regulatory requirements",
          ]
        },
        {
          icon: Lock,
          title: "Protecting Your Data",
          content: [
            "We use SSL/TLS encryption for all data transmitted through the website",
            "Data is stored on secure servers protected by advanced firewalls",
            "Access to your data is restricted to authorized staff only",
            "We do not sell or share your personal data with third parties for commercial purposes",
          ]
        },
        {
          icon: UserCheck,
          title: "Information Sharing",
          content: [
            "We may share your information with universities and language institutes you apply to, with your consent",
            "We may share data with service providers (hosting, analytics) under strict agreements",
            "We will disclose information if required by law or court order",
            "We will never sell your personal data to any marketing entity under any circumstances",
          ]
        },
        {
          icon: Globe,
          title: "Cookies",
          content: [
            "We use cookies to improve browsing experience and save your preferences (language, currency)",
            "Essential cookies: necessary for website operation and cannot be disabled",
            "Analytical cookies: help us understand how the site is used",
            "You can control cookies from your browser settings at any time",
          ]
        },
        {
          icon: Shield,
          title: "Your Rights",
          content: [
            "Right to Access: You can request a copy of all your personal data we hold",
            "Right to Rectification: You can request correction of any inaccurate information",
            "Right to Erasure: You can request deletion of your personal data from our records",
            "Right to Object: You can object to processing of your data for certain purposes",
            "To exercise any of these rights, contact us via the email address below",
          ]
        },
        {
          icon: AlertCircle,
          title: "Data Retention",
          content: [
            "We retain your data throughout our business relationship and for 3 years thereafter",
            "Application data: retained for 5 years for legal and regulatory purposes",
            "Communication records: retained for 2 years from last contact",
            "You can request deletion of your data at any time and we will respond within 30 days",
          ]
        },
        {
          icon: FileText,
          title: "Changes to This Policy",
          content: [
            "We may update this Privacy Policy periodically to reflect changes in our practices",
            "We will notify you of any significant changes via email or a notice on the website",
            "Continued use of the website after amendments constitutes acceptance of the new policy",
            "We recommend reviewing this page periodically for any updates",
          ]
        },
      ],
      contactTitle: "Contact Us About Privacy",
      contactText: "If you have any questions about our Privacy Policy or data protection practices, please don't hesitate to contact us:",
    },
    zh: {
      title: "隐私政策",
      subtitle: "我们尊重您的隐私并致力于保护您的个人数据",
      lastUpdated: "最后更新：2026年4月",
      intro: "本隐私政策描述了 Y.A Alma Legacy 在您使用我们的网站和马来西亚教育相关服务时，如何收集、使用和保护您的个人信息。",
      sections: [],
      contactTitle: "联系我们了解隐私问题",
      contactText: "如果您对我们的隐私政策或数据保护实践有任何疑问，请随时联系我们：",
    },
  };

  const content = language === "zh" ? t.zh : language === "ar" ? t.ar : t.en;
  const sections = language === "zh" ? t.en.sections : language === "ar" ? t.ar.sections : t.en.sections;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19]" dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#0d1b3e] via-[#1a2f6b] to-[#0d1b3e] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(198,163,69,0.25)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #c6a345 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#c6a345]/20 border border-[#c6a345]/40 rounded-full px-6 py-2.5 mb-8">
            <Shield size={16} className="text-[#c6a345]" />
            <span className="text-[#c6a345] font-bold text-sm uppercase tracking-widest">
              {language === "ar" ? "الخصوصية والأمان" : language === "zh" ? "隐私与安全" : "Privacy & Security"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">{content.title}</h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">{content.subtitle}</p>
          <span className="text-[#c6a345]/70 text-sm font-medium">{content.lastUpdated}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">

        {/* Introduction */}
        <div className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 mb-10">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{content.intro}</p>
        </div>

        {/* Sections Grid */}
        <div className="space-y-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const colors = [
              "from-blue-500 to-blue-600",
              "from-emerald-500 to-emerald-600",
              "from-violet-500 to-violet-600",
              "from-orange-500 to-orange-600",
              "from-rose-500 to-rose-600",
              "from-teal-500 to-teal-600",
              "from-amber-500 to-amber-600",
              "from-indigo-500 to-indigo-600",
            ];
            const bgColor = colors[idx % colors.length];

            return (
              <div key={idx} className="bg-white dark:bg-[#0b0f19] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bgColor} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-black text-[var(--color-brand-navy)] dark:text-gray-100 mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${bgColor} mt-2.5 flex-shrink-0`}></div>
                          <span className="text-[15px] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-[#0d1b3e] to-[#1a2f6b] rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c6a345]/10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-3">{content.contactTitle}</h2>
            <p className="text-blue-200 mb-8 leading-relaxed">{content.contactText}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:info@yaalmalegacy.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 group">
                <div className="w-10 h-10 bg-[#c6a345] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-semibold uppercase tracking-wider mb-0.5">
                    {language === "ar" ? "البريد الإلكتروني" : "Email"}
                  </p>
                  <p className="text-white font-bold text-sm">info@yaalmalegacy.com</p>
                </div>
              </a>
              <a href="https://wa.me/601158722903" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 group">
                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-white font-bold text-sm">+60 12-345 6789</p>
                </div>
              </a>
              <Link href="/contact" className="flex items-center gap-3 bg-[#c6a345]/20 hover:bg-[#c6a345]/30 border border-[#c6a345]/40 transition-colors rounded-2xl p-4 group">
                <div className="w-10 h-10 bg-[#c6a345] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#c6a345]/80 font-semibold uppercase tracking-wider mb-0.5">
                    {language === "ar" ? "نموذج التواصل" : "Contact Form"}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {language === "ar" ? "تواصل معنا" : "Get in Touch"}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {[
            { href: "/", label: language === "ar" ? "الرئيسية" : "Home" },
            { href: "/contact", label: language === "ar" ? "تواصل معنا" : "Contact Us" },
            { href: "/universities", label: language === "ar" ? "الجامعات" : "Universities" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-500 hover:text-[var(--color-brand-gold)] text-sm font-semibold transition-colors underline underline-offset-4">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
