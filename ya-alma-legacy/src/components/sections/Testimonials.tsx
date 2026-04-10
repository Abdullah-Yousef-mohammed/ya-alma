"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface Testimonial {
  id: number;
  studentName: string;
  universityName: string;
  universityNameAr: string;
  reviewText: string;
  reviewTextAr: string;
  rating: number;
}

export default function Testimonials() {
  const { t, language, t_dyn } = useLanguage();
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    direction: language === "ar" ? "rtl" : "ltr"
  });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/testimonials`)
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        setReviews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching testimonials", err);
        setReviews([]);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-[var(--color-brand-gold)]/5 skew-y-3 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.testimonials.desc}
          </p>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container gap-6 py-8">
            {Array.isArray(reviews) && reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative h-full flex flex-col mt-6">
                  <div className="absolute -top-6 ltr:left-8 rtl:right-8 w-12 h-12 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-white shadow-lg">
                    <Quote size={20} className="fill-white" />
                  </div>
                  
                  <div className="flex text-yellow-400 mb-6 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                    "{t_dyn(review.reviewText, review.reviewTextAr)}"
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                      {review.studentName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-brand-navy)]">{review.studentName}</h4>
                      <span className="text-sm text-[var(--color-brand-gold)]">{t_dyn(review.universityName, review.universityNameAr)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
