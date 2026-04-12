package com.yaalma.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LanguageCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String nameAr;
    private String nameZh;
    private String nameMs;
    private String location;
    private String locationAr;
    private String locationZh;
    private String locationMs;
    private String state;
    private String logoUrl;

    @Column(columnDefinition = "TEXT")
    private String aboutEn;
    
    @Column(columnDefinition = "TEXT")
    private String aboutAr;

    @Column(columnDefinition = "TEXT")
    private String aboutZh;
    @Column(columnDefinition = "TEXT")
    private String aboutMs;
    
    private String heroImage;
    private String videoUrl;
    private String videoUrlAr;
    private String videoUrlZh;
    private String videoUrlMs;
    private String galleryUrl1;
    private String galleryUrl2;
    private String galleryUrl3;
    private String galleryUrl4;

    private String bannerUrl;
    private String locationMapUrl;

    @Column(columnDefinition = "TEXT")
    private String scholarshipDescEn;
    @Column(columnDefinition = "TEXT")
    private String scholarshipDescAr;
    @Column(columnDefinition = "TEXT")
    private String scholarshipDescZh;
    @Column(columnDefinition = "TEXT")
    private String scholarshipDescMs;
    
    private String registrationDeadline;

    private String scholarshipDiscount;
    private String scholarshipCriteria;

    @Column(columnDefinition = "TEXT")
    private String admissionUndergradEn;
    @Column(columnDefinition = "TEXT")
    private String admissionUndergradAr;
    @Column(columnDefinition = "TEXT")
    private String admissionUndergradZh;
    @Column(columnDefinition = "TEXT")
    private String admissionUndergradMs;

    @Column(columnDefinition = "TEXT")
    private String admissionPostgradEn;
    @Column(columnDefinition = "TEXT")
    private String admissionPostgradAr;
    @Column(columnDefinition = "TEXT")
    private String admissionPostgradZh;
    @Column(columnDefinition = "TEXT")
    private String admissionPostgradMs;

    // Financials
    private Integer registrationFeeMyr;
    private Integer visaFeeMyr;
    private Integer depositFeeMyr;
    private Integer insuranceFeeMyr;

    // Intakes
    private String nextIntakeMonths;

    public LanguageCenter(Long id, String name, String nameAr, String nameZh, String location, String locationAr, String locationZh, String state, String logoUrl) {
        this.id = id;
        this.name = name;
        this.nameAr = nameAr;
        this.nameZh = nameZh;
        this.location = location;
        this.locationAr = locationAr;
        this.locationZh = locationZh;
        this.state = state;
        this.logoUrl = logoUrl;
        
        this.aboutEn = name + " is a premier language institute.";
        this.aboutAr = "يعد " + nameAr + " معهداً رائداً.";
        this.aboutZh = nameZh + " 是一所顶尖的语言学院。";

        this.heroImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000";
        this.videoUrl = "acmeO0JivYk";
        this.videoUrlAr = "acmeO0JivYk";
        this.videoUrlZh = "acmeO0JivYk";
        this.galleryUrl1 = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1500";
        this.galleryUrl2 = "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=800";
        this.galleryUrl3 = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800";
        this.galleryUrl4 = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800";
        
        this.bannerUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000";
        this.locationMapUrl = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500";
        this.scholarshipDescEn = "Financial aid packages are available up to 50% for high-achieving international students. Eligibility is based on high school results and English proficiency.";
        this.scholarshipDescAr = "تتوفر حزم مساعدات مالية تصل إلى 50% للطلاب الدوليين المتفوقين. تعتمد الأهلية على نتائج الثانوية العامة.";
        this.scholarshipDescZh = "为成绩优异的国际学生提供高达50%的经济援助套餐。资格基于高中成绩和英语水平。";
        this.scholarshipDiscount = "50%";
        this.scholarshipCriteria = "GPA 3.8";
        this.admissionUndergradEn = "High School Results|Passport Full Scan|Health Check Declaration|IELTS 5.5 / Equivalent";
        this.admissionUndergradAr = "كشف درجات الثانوية|نسخة كاملة من الجواز|إقرار الفحص الطبي|اختبار ايلتس 5.5 أو ما يعادله";
        this.admissionUndergradZh = "高中成绩单|护照全本扫描件|体检声明|雅思 5.5 / 同等水平";
        this.admissionPostgradEn = "Bachelor Transcripts|Professional CV|Research Proposal|Recommendation Letters";
        this.admissionPostgradAr = "كشف درجات البكالوريوس|سيرة ذاتية مهنية|مقترح بحث|رسائل توصية";
        this.admissionPostgradZh = "本科成绩单|专业简历|研究计划|推荐信";
        
        this.nextIntakeMonths = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";
    }
}
