"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  BookOpen, 
  ChevronLeft, 
  Info, 
  Image as ImageIcon, 
  Video, 
  GraduationCap, 
  FileText,
  BadgeDollarSign,
  Globe,
  Award,
  Users,
  ChevronDown,
  Calendar,
  Map,
  X,
  Play
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { Button } from "@/components/ui/Button";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const monthMap: Record<string, number> = {
  "Jan": 0, "January": 0, "Feb": 1, "February": 1, "Mar": 2, "March": 2, 
  "Apr": 3, "April": 3, "May": 4, "Jun": 5, "June": 5, "Jul": 6, "July": 6, 
  "Aug": 7, "August": 7, "Sep": 8, "September": 8, "Oct": 9, "October": 9, 
  "Nov": 10, "November": 10, "Dec": 11, "December": 11
};

const monthNamesAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesZh = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

const RollingIntakeBanner = ({ centerName, centerNameAr, centerNameZh }: { centerName: string, centerNameAr: string, centerNameZh: string }) => {
  const { t_dyn, language } = useLanguage();

  return (
    <div className="w-full relative overflow-hidden py-24 shadow-2xl z-10">
      {/* Deep navy gradient with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b3e] via-[#1a2f6b] to-[#0d1b3e]"></div>
      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(198,163,69,0.3)_0%,_transparent_70%)]"></div>
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #c6a345 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      {/* Top gold border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c6a345] to-transparent"></div>
      {/* Bottom gold border */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c6a345] to-transparent"></div>

      <div className="container mx-auto max-w-5xl relative z-20 flex flex-col items-center text-center px-4">
        
        {/* Live Alert Pill */}
        <div className="inline-flex items-center gap-3 bg-[#c6a345]/20 border border-[#c6a345]/50 backdrop-blur-md rounded-full px-6 py-2.5 mb-10">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6a345] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c6a345]"></span>
          </span>
          <span className="text-[#c6a345] font-black tracking-[0.25em] text-sm uppercase">
            {language === 'ar' ? 'متاح طوال العام' : language === 'zh' ? '全年开放' : 'Open All Year Round'}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 drop-shadow-xl leading-tight tracking-tight">
          {language === 'ar' ? `التسجيل مفتوح دائمًا` 
            : language === 'zh' ? `滚动录取注册现已开放` : `Rolling Admissions Open`}
        </h2>
        <h3 className="text-2xl md:text-4xl font-black text-[#c6a345] mb-8 drop-shadow-lg">
          {language === 'ar' ? `ابدأ دراستك في أي شهر` : language === 'zh' ? `随时开始您的学习之旅` : `Start Your Studies Any Month`}
        </h3>

        {/* Description */}
        <p className="text-blue-100 text-lg md:text-xl font-medium max-w-3xl mb-12 leading-relaxed">
          {language === 'ar' 
            ? `تواصل مع مستشارينا لمعرفة متطلبات التسجيل في ${centerNameAr}، أو قدم طلبك مباشرة لنبدأ إجراءات قبولك فوراً.`
            : language === 'zh' 
            ? `联系我们的顾问，了解${centerNameZh}的入学要求，或直接提交申请，我们将立即为您办理。`
            : `Contact our consultants to check requirements at ${centerName}, or apply directly to fast-track your admission.`}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 items-stretch justify-center gap-4 md:gap-6 mb-16" dir="ltr">
          {[
            { icon: <Calendar size={40} strokeWidth={1.5} />, titleEn: 'Flexible', titleAr: 'مرونة', titleZh: '灵活', subtitleEn: 'Intakes', subtitleAr: 'في المواعيد', subtitleZh: '入学时间' },
            { icon: <Users size={40} strokeWidth={1.5} />, titleEn: 'All Levels', titleAr: 'لجميع', titleZh: '适合', subtitleEn: 'Accepted', subtitleAr: 'المستويات', subtitleZh: '所有水平' },
            { icon: <FileText size={40} strokeWidth={1.5} />, titleEn: 'Express', titleAr: 'فيزا', titleZh: '快速', subtitleEn: 'Visa', subtitleAr: 'سريعة', subtitleZh: '签证办理' },
            { icon: <Award size={40} strokeWidth={1.5} />, titleEn: 'Certified', titleAr: 'شهادة', titleZh: '认证', subtitleEn: 'Programs', subtitleAr: 'معتمدة', subtitleZh: '优质课程' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full sm:w-[130px] h-[120px] sm:h-[140px] bg-white/5 backdrop-blur-xl border border-[#c6a345]/30 rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(198,163,69,0.3)] flex flex-col items-center justify-center relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-3xl"></div>
                <div className="text-white mb-2 group-hover:scale-110 group-hover:text-[var(--color-brand-gold)] transition-all">
                  {item.icon}
                </div>
                <span className="text-[#c6a345] font-black text-sm md:text-base tracking-widest uppercase mt-1">
                  {language === 'ar' ? item.titleAr : language === 'zh' ? item.titleZh : item.titleEn}
                </span>
                <span className="text-white/80 font-medium text-xs md:text-sm mt-0.5">
                  {language === 'ar' ? item.subtitleAr : language === 'zh' ? item.subtitleZh : item.subtitleEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <button className="group relative inline-flex items-center justify-center gap-4 bg-[#c6a345] hover:bg-[#e8c96d] text-[#0d1b3e] font-black text-xl md:text-2xl py-5 px-14 rounded-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(198,163,69,0.4)] hover:shadow-[0_20px_60px_rgba(198,163,69,0.6)] hover:-translate-y-1">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d1b3e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0d1b3e]"></span>
            </span>
            {t_dyn('Apply for Admission Now', 'قدم طلب القبول الآن')}
            <FileText className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};


export default function LanguageCenterProfilePage() {
  const params = useParams();
  const { language, isRtl, t_dyn } = useLanguage();
  const { formatPrice } = useCurrency();
  
  // 1. All Hooks at the top
  const [center, setCenter] = useState<any>(null);
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Video Inline State
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Helper to ensure valid src strings
  const getImgSrc = (src: string | null | undefined) => {
    if (!src || src === "null" || src.trim() === "") return null;
    if (src.startsWith('http') || src.startsWith('/')) return src;
    return `/${src}`;
  };

  useEffect(() => {
    const sections = ["overview", "gallery", "tour", "programs", "scholarships", "registration", "admission", "location"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust based on navbar height
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading, center]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [uniRes, progRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/language-centers/${params.id}`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"}/language-programs/center/${params.id}`)
        ]);
        
        if (uniRes.ok) setCenter(await uniRes.json());
        if (progRes.ok) setPrograms(await progRes.json());
      } catch (err) {
        console.error("Failed to fetch language center data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  // 2. Conditional returns after all hooks
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-brand-navy)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-brand-gold)]"></div>
        <p className="mt-4 text-[var(--color-brand-gold)] font-bold animate-pulse">
          {language === 'ar' ? "جارٍ تحميل البيانات..." : language === 'zh' ? "正在加载数据..." : "Loading Data..."}
        </p>
      </div>
    );
  }

  if (!center) return <div className="min-h-screen flex items-center justify-center">Institute not found.</div>;

  const totalPrograms = programs.length;

  // Use university's dedicated intake schedule (set per-university in DB)
  const allIntakes: string[] = center.nextIntakeMonths
    ? center.nextIntakeMonths.split(',')
    : ["Feb", "Jul", "Sep"]; // safe fallback

  return (
    <div className="bg-gray-50 pb-20" dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[var(--color-brand-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_var(--color-brand-gold)_0%,_transparent_50%)]"></div>
          {center.bannerUrl && (
            <Image 
              src={center.bannerUrl} 
              alt="Banner" 
              fill 
              className="object-cover opacity-30 grayscale"
            />
          )}
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col">
          <Link href="/universities" className="inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors mb-8">
            <ChevronLeft size={20} className={`mr-1 ${isRtl ? 'rotate-180' : ''}`} />
            {t_dyn("Back to Institutes", "العودة إلى المعاهد")}
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 bg-white rounded-3xl shadow-2xl flex items-center justify-center flex-shrink-0 text-3xl font-bold border-4 border-white/20 p-4">
               {center.logoUrl && center.logoUrl !== 'default_logo' ? (
                 <Image src={center.logoUrl.startsWith('http') || center.logoUrl.startsWith('/') ? center.logoUrl : `/${center.logoUrl}`} alt="Logo" width={120} height={120} className="object-contain" />
               ) : center.name.charAt(0)}
            </div>
            <div className={`${isRtl ? 'text-center md:text-right' : 'text-center md:text-left'} flex-grow`}>
              <div className={`flex flex-wrap items-center justify-center ${isRtl ? 'md:justify-end' : 'md:justify-start'} gap-3 mb-4`}>
                <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                  {t_dyn("Language Institute", "معهد لغات", "语言学院")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">{t_dyn(center.name, center.nameAr, center.nameZh || center.name)}</h1>
              <h2 className="text-2xl text-[var(--color-brand-gold)] mb-6 font-medium">{t_dyn(center.nameAr, center.name, center.name)}</h2>
              <div className={`flex flex-wrap items-center justify-center ${isRtl ? 'md:justify-end' : 'md:justify-start'} text-gray-300 font-medium gap-6 text-sm`}>
                <span className="flex items-center gap-2"><MapPin size={18} className="text-[var(--color-brand-gold)]" /> {t_dyn(center.location, center.locationAr, center.locationZh || center.location)}</span>
                <span className="flex items-center gap-2"><BookOpen size={18} className="text-[var(--color-brand-gold)]" /> {totalPrograms} {t_dyn("Language Programs", "برامج لغوية", "语言课程")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧭 Secondary Sticky Navigation Bar (Scroll Spy) */}
      <div className="sticky top-[80px] z-[41] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-1 py-3 whitespace-nowrap overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: t_dyn("Overview", "نظرة عامة", "综合介绍"), icon: <Info size={16}/> },
              { id: 'gallery', label: t_dyn("Gallery", "المعرض", "图片库"), icon: <ImageIcon size={16}/> },
              { id: 'tour', label: t_dyn("Tour", "الجولة", "校园游览"), icon: <Video size={16}/> },
              { id: 'programs', label: t_dyn("Programs", "البرامج", "课程"), icon: <GraduationCap size={16}/> },
              { id: 'scholarships', label: t_dyn("Scholarships", "المنح", "奖学金"), icon: <Award size={16}/> },
              { id: 'registration', label: t_dyn("Registration", "التسجيل", "立即注册"), icon: <Calendar size={16}/> },
              { id: 'admission', label: t_dyn("Admission", "القبول", "入学要求"), icon: <FileText size={16}/> },
              { id: 'location', label: t_dyn("Location", "الموقع", "获取位置"), icon: <Map size={16}/> },
            ].map((pill) => (
              <button 
                key={pill.id}
                onClick={() => {
                  const el = document.getElementById(pill.id);
                  if (el) {
                    const offset = 140; // Navbar + Subnav height
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }} 
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 relative group ${activeSection === pill.id ? 'text-[var(--color-brand-navy)] bg-gray-50' : 'text-gray-500 hover:text-[var(--color-brand-navy)] hover:bg-gray-50'}`}
              >
                {pill.icon} {pill.label}
                {activeSection === pill.id && (
                  <div className="absolute bottom-1 left-3 right-3 h-1 bg-[var(--color-brand-gold)] rounded-full shadow-[0_0_10px_rgba(198,163,69,0.5)]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout: Content + Sticky Sidebar */}
      <div className="container mx-auto px-4 md:px-8 mt-12 pb-24 relative z-20">
        <div className="flex flex-col xl:flex-row gap-8 items-start">

        {/* ── LEFT: Main Content (65%) ── */}
        <div className="w-full xl:w-[68%] space-y-12">
          
          {/* Overview Section */}
          <section id="overview" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
            <div className="flex items-center gap-4 mb-8 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)]">
                <Info size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Institute Overview", "نظرة عامة على المعهد")}</h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 leading-[2.2] text-lg">
              <div className="relative">
                <div className={`absolute ${isRtl ? '-right-6' : '-left-6'} top-0 bottom-0 w-1 bg-[var(--color-brand-gold)] opacity-20 rounded-full`}></div>
                <p className="whitespace-pre-line">{t_dyn(center.aboutEn, center.aboutAr, center.aboutZh || center.aboutEn)}</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4 text-[var(--color-brand-navy)]">
                <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)]">
                  <ImageIcon size={28} />
                </div>
                <h3 className="text-3xl font-black">{t_dyn("Campus Gallery", "معرض الحرم الجامعي")}</h3>
              </div>
              <Button 
                onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
                variant="outline" size="sm" className="hidden md:flex rounded-xl font-bold border-2"
              >
                {t_dyn("View All", "عرض الكل")}
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div 
                className="col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-lg group relative cursor-pointer"
                onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
              >
                <Image src={getImgSrc(center.galleryUrl1) || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1500"} alt="Campus Main" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <p className="text-white font-bold">{t_dyn("Main Academic Wing", "الجناح الأكاديمي الرئيسي")}</p>
                </div>
              </div>
              {[
                getImgSrc(center.galleryUrl2),
                getImgSrc(center.galleryUrl3),
                getImgSrc(center.galleryUrl4),
                "https://images.unsplash.com/photo-1523050853063-880cd2f280a3?q=80&w=800"
              ].filter(Boolean).slice(0, 4).map((src, i) => (
                <div 
                  key={i} 
                  className="aspect-square rounded-2xl overflow-hidden shadow-md group relative cursor-pointer"
                  onClick={() => { setLightboxIndex(i + 1); setLightboxOpen(true); }}
                >
                  <Image src={src as string} alt={`Campus photo ${i+2}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>

            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              plugins={[Zoom, Fullscreen, Thumbnails]}
              slides={[
                { src: getImgSrc(center.galleryUrl1) || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1500" },
                ...([
                  getImgSrc(center.galleryUrl2),
                  getImgSrc(center.galleryUrl3),
                  getImgSrc(center.galleryUrl4),
                  "https://images.unsplash.com/photo-1523050853063-880cd2f280a3?q=80&w=800"
                ].filter(Boolean).slice(0, 4).map(src => ({ src: src as string })))
              ]}
            />
          </section>

          {/* Tour Section */}
          <section id="tour" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
            <div className="flex items-center gap-4 mb-10 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)]">
                <Video size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Virtual Tour", "الجولة الافتراضية")}</h3>
            </div>

            <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-gray-900 relative shadow-2xl border-4 border-white">
              {isVideoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${t_dyn(center.videoUrl, center.videoUrlAr || center.videoUrl, center.videoUrlZh || center.videoUrl)}?autoplay=1&controls=1&rel=0`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                ></iframe>
              ) : (
                <div 
                  className="w-full h-full relative group cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${t_dyn(center.videoUrl, center.videoUrlAr || center.videoUrl, center.videoUrlZh || center.videoUrl)}/maxresdefault.jpg`} 
                    alt="Virtual Tour Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-60" 
                    onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${t_dyn(center.videoUrl, center.videoUrlAr || center.videoUrl, center.videoUrlZh || center.videoUrl)}/hqdefault.jpg`; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-[var(--color-brand-gold)] rounded-full animate-ping opacity-70"></div>
                      <div className="w-24 h-24 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(198,163,69,0.8)] z-10 transition-transform duration-300 group-hover:scale-110">
                        <Play size={40} className="ml-2 fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Language Programs Section */}
          <section id="programs" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 mb-12 mt-12">
            <div className="flex items-center gap-4 mb-10 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)]">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Available Programs", "البرامج والرسوم", "可选课程")}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((prog: any) => (
                <div key={prog.id} className="bg-gray-50/50 rounded-[2rem] p-8 border border-gray-100 hover:border-[var(--color-brand-navy)]/30 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-[var(--color-brand-navy)] group-hover:text-[#c6a345] transition-colors mb-3 leading-tight">
                        {t_dyn(prog.titleEn, prog.titleAr, prog.titleZh || prog.titleEn)}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-[var(--color-brand-navy)]/5 text-[var(--color-brand-navy)] rounded-lg text-[10px] font-black uppercase tracking-[0.15em] border border-[var(--color-brand-navy)]/10">
                        {t_dyn(prog.levelEn, prog.levelAr, prog.levelZh || prog.levelEn)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Calendar size={18} className="text-[#c6a345]" />
                      <span className="font-medium text-[15px]">
                        <strong className="text-gray-900 font-bold">{t_dyn("Duration: ", "المدة: ", "时长: ")}</strong>
                        {t_dyn(prog.durationEn, prog.durationAr, prog.durationZh || prog.durationEn)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <FileText size={18} className="text-[#c6a345]" />
                      <span className="font-medium text-[15px]">
                        <strong className="text-gray-900 font-bold">{t_dyn("Intakes: ", "بداية الدورة: ", "开课时间: ")}</strong>
                        {t_dyn(prog.intakesEn, prog.intakesAr, prog.intakesZh || prog.intakesEn)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 mt-auto flex justify-between items-end">
                    <div>
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                        {t_dyn("Estimated Fee", "الرسوم التقديرية", "预估费用")}
                      </span>
                      <span className="text-2xl md:text-3xl font-black text-[var(--color-brand-navy)]">
                        {formatPrice(prog.feeMyr)}
                      </span>
                    </div>
                    <Link href="/contact" className="w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:border-[#c6a345] flex items-center justify-center text-[var(--color-brand-navy)] group-hover:bg-[#c6a345] group-hover:text-white transition-all shadow-sm group-hover:shadow-[0_4px_20px_rgba(198,163,69,0.4)]">
                      <ChevronLeft size={20} className={isRtl ? '' : 'rotate-180'} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scholarships Section */}
          <section id="scholarships" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
             <div className="flex items-center gap-4 mb-10 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600">
                <Award size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Scholarships & Aid", "المنح والمساعدات")}</h3>
            </div>
             <div className="relative bg-[#f8faff] rounded-[2.5rem] p-8 md:p-12 border border-blue-100">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-3xl font-black text-[var(--color-brand-navy)] mb-6">{t_dyn("Merit Grants", "منح التفوق")}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                       {t_dyn(
                         center.scholarshipDescEn || "Financial aid packages are available up to 50% for high-achieving students.", 
                         center.scholarshipDescAr || "تتوفر حزم مساعدات مالية تصل إلى 50%.",
                         center.scholarshipDescZh
                       )}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <p className="text-3xl font-black text-[var(--color-brand-gold)] mb-1">{center.scholarshipDiscount || "50%"}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t_dyn("Max Discount", "أقصى خصم")}</p>
                      </div>
                      <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <p className="text-2xl font-black text-[var(--color-brand-navy)] mb-1">{center.scholarshipCriteria || "GPA 3.8"}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t_dyn("Min Criteria", "أقل معيار")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" alt="Students" fill className="object-cover" />
                  </div>
                </div>
             </div>
          </section>

          {/* 🟦 Registration Banner */}
          <section id="registration" className="scroll-mt-40">
            <RollingIntakeBanner 
              centerName={center.name} 
              centerNameAr={center.nameAr}
              centerNameZh={center.nameZh || center.name}
            />
          </section>

          {/* Admission Section */}
          <section id="admission" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
             <div className="flex items-center gap-4 mb-12 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600">
                <FileText size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Admission Protocol", "بروتوكول القبول")}</h3>
            </div>
             
             <div className="grid md:grid-cols-2 gap-10">
               <div className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100">
                 <h4 className="text-2xl font-black text-[var(--color-brand-navy)] mb-8 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">1</span>
                   {t_dyn("General English", "متطلبات اللغة الإنجليزية", "通用英语要求")}
                 </h4>
                 <ul className="space-y-6">
                   {(center.admissionUndergradEn ? center.admissionUndergradEn.split('|') : ["High School Results", "Passport Full Scan", "Health Check Declaration", "IELTS 5.5 / Equivalent"]).map((item: string, i: number) => {
                     const arItem = center.admissionUndergradAr ? center.admissionUndergradAr.split('|')[i] : item;
                     const zhItem = center.admissionUndergradZh ? center.admissionUndergradZh.split('|')[i] : null;
                     return (
                       <li key={i} className="flex items-center gap-4 text-gray-600 font-bold">
                         <div className="w-6 h-6 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">✓</div>
                         <span className="text-sm">{t_dyn(item, arItem || item, zhItem || item)}</span>
                       </li>
                     );
                   })}
                 </ul>
               </div>
               
               <div className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100">
                 <h4 className="text-2xl font-black text-[var(--color-brand-navy)] mb-8 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">2</span>
                   {t_dyn("Exam Preparation", "تحضير الاختبارات", "考试准备要求")}
                 </h4>
                 <ul className="space-y-6">
                   {(center.admissionPostgradEn ? center.admissionPostgradEn.split('|') : ["Bachelor Transcripts", "Professional CV", "Research Proposal", "Recommendation Letters"]).map((item: string, i: number) => {
                     const arItem = center.admissionPostgradAr ? center.admissionPostgradAr.split('|')[i] : item;
                     const zhItem = center.admissionPostgradZh ? center.admissionPostgradZh.split('|')[i] : null;
                     return (
                       <li key={i} className="flex items-center gap-4 text-gray-600 font-bold">
                         <div className="w-6 h-6 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">✓</div>
                         <span className="text-sm">{t_dyn(item, arItem || item, zhItem || item)}</span>
                       </li>
                     );
                   })}
                 </ul>
               </div>
             </div>
          </section>

          {/* Location Section */}
          <section id="location" className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-40 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
             <div className="flex items-center gap-4 mb-10 text-[var(--color-brand-navy)]">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-gold)]">
                <Map size={28} />
              </div>
              <h3 className="text-3xl font-black">{t_dyn("Campus Footprint", "موقع الحرم الجامعي")}</h3>
            </div>
             
             <div className="flex flex-col md:flex-row gap-10">
               <div className="md:w-1/3">
                  <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 h-full">
                    <MapPin size={32} className="text-red-500 mb-6" />
                    <h4 className="text-2xl font-black text-[var(--color-brand-navy)] mb-6">{t_dyn(center.location, center.locationAr, center.locationZh || center.location)}</h4>
                    <Link href={`https://www.google.com/maps/search/${encodeURIComponent(center.name)}`} target="_blank">
                      <Button variant="outline" className="w-full rounded-2xl border-2 py-6 font-black">{t_dyn("Open Maps", "فتح الخرائط")}</Button>
                    </Link>
                  </div>
               </div>
               
               <div className="md:w-2/3 aspect-video rounded-[3rem] overflow-hidden bg-gray-100 border-4 border-white shadow-2xl relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-10 transition-all duration-700 hover:grayscale-0 hover:opacity-60"
                    style={{ backgroundImage: `url('${center.locationMapUrl || "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500"}')` }}
                  ></div>
               </div>
             </div>
          </section>

        </div> {/* end main content */}

        {/* ── RIGHT: Sticky Sidebar (35%) ── */}
        <div className="w-full xl:w-[35%] space-y-5 xl:sticky xl:top-[160px] z-30">

            {/* Key Stats Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--color-brand-navy)] to-[#1a2f6b] px-7 py-5">
                <h3 className="text-white font-black text-lg">{t_dyn('Institute at a Glance', 'نظرة سريعة على المعهد', '大学概览')}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { icon: <Globe size={18}/>, label: t_dyn('Type', 'النوع', '类型'), value: t_dyn('Language Institute', 'معهد لغات', '语言学院') },
                  { icon: <MapPin size={18}/>, label: t_dyn('Location', 'الموقع', '位置'), value: t_dyn(center.location, center.locationAr, center.locationZh || center.location) },
                  { icon: <Award size={18}/>, label: t_dyn('Ranking', 'التصنيف', '排名'), value: (language === 'zh' ? center.rankingsZh?.[0] : language === 'ar' ? center.rankingsAr?.[0] : center.rankings?.[0]) || t_dyn('Top Tier', 'تصنيف عالمي', '顶尖排名') },
                  { icon: <BookOpen size={18}/>, label: t_dyn('Programs', 'البرامج', '专业数量'), value: `${totalPrograms} ${t_dyn('Programs', 'برنامج', '个专业')}` },
                  { icon: <Users size={18}/>, label: t_dyn('Campus', 'الحرم', '校区'), value: t_dyn('Global Campus', 'حرم عالمي', '国际校区') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-7 py-4 hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 bg-[var(--color-brand-navy)]/8 rounded-xl flex items-center justify-center text-[var(--color-brand-gold)] shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-900 font-bold text-sm truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees Summary Card */}
            {(center.registrationFeeMyr || center.visaFeeMyr || center.depositFeeMyr) && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#f8f9fa] px-7 py-5 border-b border-gray-100 flex items-center gap-3">
                  <BadgeDollarSign size={20} className="text-[var(--color-brand-gold)]"/>
                  <h3 className="text-[var(--color-brand-navy)] font-black text-base">{t_dyn('Estimated Fees', 'الرسوم التقديرية', '预估费用')}</h3>
                </div>
                <div className="px-7 py-5 space-y-3">
                  {center.registrationFeeMyr && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{t_dyn('Registration', 'تسجيل', '注册费')}</span>
                      <span className="font-black text-[var(--color-brand-navy)]">{formatPrice(center.registrationFeeMyr)}</span>
                    </div>
                  )}
                  {center.visaFeeMyr && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{t_dyn('Student Visa', 'تأشيرة الطالب', '学生签证')}</span>
                      <span className="font-black text-[var(--color-brand-navy)]">{formatPrice(center.visaFeeMyr)}</span>
                    </div>
                  )}
                  {center.depositFeeMyr && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{t_dyn('Security Deposit', 'الوديعة', '保证金')}</span>
                      <span className="font-black text-[var(--color-brand-navy)]">{formatPrice(center.depositFeeMyr)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-3 mt-2 flex justify-between items-center">
                    <span className="text-gray-700 font-black text-sm uppercase tracking-wide">{t_dyn('Total Est.', 'المجموع', '预估总计')}</span>
                    <span className="text-2xl font-black text-[var(--color-brand-gold)]">
                      {formatPrice((center.registrationFeeMyr || 0) + (center.visaFeeMyr || 0) + (center.depositFeeMyr || 0))}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Next Intake mini badge */}
            {allIntakes.length > 0 && (
              <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1a2f6b] rounded-3xl px-7 py-6 border border-[#c6a345]/20 flex items-center gap-5">
                <div className="w-14 h-14 bg-[#c6a345]/10 border border-[#c6a345]/30 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap size={26} className="text-[#c6a345]"/>
                </div>
                <div>
                  <p className="text-[#c6a345] text-xs font-black uppercase tracking-widest mb-1">{t_dyn('NEXT INTAKE', 'الفصل القادم')}</p>
                  <p className="text-white font-black text-lg">{allIntakes.join(' · ')}</p>
                  <p className="text-blue-200 text-xs mt-1">{t_dyn('Registration open now', 'التسجيل مفتوح')}</p>
                </div>
              </div>
            )}

            {/* WhatsApp + Apply CTA */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 space-y-3">
              <Link href="https://wa.me/60143240499" target="_blank" className="block">
                <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {t_dyn('Chat on WhatsApp', 'تحدث عبر واتساب')}
                </button>
              </Link>
              <Link href="/contact" className="block">
                <button className="w-full flex items-center justify-center gap-3 bg-[var(--color-brand-navy)] hover:bg-[#1a2f6b] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgba(13,27,62,0.2)] hover:shadow-[0_12px_30px_rgba(13,27,62,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                  <FileText size={20}/>
                  {t_dyn('Apply for Admission', 'تقدم للقبول')}
                </button>
              </Link>
              <p className="text-center text-gray-400 text-xs pt-1">{t_dyn('Free consultation · No hidden fees', 'استشارة مجانية · بدون رسوم خفية')}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

