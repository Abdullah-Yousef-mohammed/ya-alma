"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const { t, language, t_dyn } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "degree",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Database
    try {
      await fetch('https://ya-alma.onrender.com/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.error("Failed to submit to DB", err);
    }

    const msg = `Hello, I am ${formData.name} (${formData.email}, ${formData.country}). I am interested in: ${formData.interest}. Message: ${formData.message}`;
    window.open(`https://wa.me/60143240499?text=${encodeURIComponent(msg)}`, '_blank');
    
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-4">{t.nav.contact}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details Panel */}
          <div className="bg-[var(--color-brand-navy)] text-white rounded-3xl p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {t.contact.details_title}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[var(--color-brand-gold)]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-gray-300">{t_dyn("Phone", "الهاتف")}</h4>
                    <p className="text-lg" dir="ltr">+60 14-324 0499</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[var(--color-brand-gold)]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-gray-300">{t_dyn("Email", "البريد الإلكتروني")}</h4>
                    <p className="text-lg">info@yaalmalegacy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[var(--color-brand-gold)]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-gray-300">{t_dyn("Headquarters", "المقر الرئيسي")}</h4>
                    <p className="text-lg leading-relaxed">
                      Kuala Lumpur City Centre, <br />
                      50088 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <a href="https://wa.me/60143240499" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full text-lg h-14">
                  <MessageCircle size={24} className="mr-2" />
                  {t.contact.whatsapp_chat}
                </Button>
              </a>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">
                  {t.contact.success_title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t.contact.success_desc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.name}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.email}</label>
                    <input 
                        required
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow"
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.phone}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow"
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.country}</label>
                    <select 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow"
                      onChange={e => setFormData({...formData, country: e.target.value})}
                    >
                      <option value="">{t.contact.select_country}</option>
                      <option value="MY">Malaysia (+60)</option>
                      <option value="SA">Saudi Arabia (+966)</option>
                      <option value="AE">UAE (+971)</option>
                      <option value="KW">Kuwait (+965)</option>
                      <option value="QA">Qatar (+974)</option>
                      <option value="BH">Bahrain (+973)</option>
                      <option value="OM">Oman (+968)</option>
                      <option value="JO">Jordan (+962)</option>
                      <option value="IQ">Iraq (+964)</option>
                      <option value="EG">Egypt (+20)</option>
                      <option value="LB">Lebanon (+961)</option>
                      <option value="SY">Syria (+963)</option>
                      <option value="YE">Yemen (+967)</option>
                      <option value="LY">Libya (+218)</option>
                      <option value="SD">Sudan (+249)</option>
                      <option value="TN">Tunisia (+216)</option>
                      <option value="DZ">Algeria (+213)</option>
                      <option value="MA">Morocco (+212)</option>
                      <option value="PK">Pakistan (+92)</option>
                      <option value="BD">Bangladesh (+880)</option>
                      <option value="IN">India (+91)</option>
                      <option value="ID">Indonesia (+62)</option>
                      <option value="NG">Nigeria (+234)</option>
                      <option value="KE">Kenya (+254)</option>
                      <option value="GH">Ghana (+233)</option>
                      <option value="TR">Turkey (+90)</option>
                      <option value="IR">Iran (+98)</option>
                      <option value="CN">China (+86)</option>
                      <option value="JP">Japan (+81)</option>
                      <option value="KR">South Korea (+82)</option>
                      <option value="PH">Philippines (+63)</option>
                      <option value="VN">Vietnam (+84)</option>
                      <option value="TH">Thailand (+66)</option>
                      <option value="MM">Myanmar (+95)</option>
                      <option value="US">United States (+1)</option>
                      <option value="GB">United Kingdom (+44)</option>
                      <option value="AU">Australia (+61)</option>
                      <option value="CA">Canada (+1)</option>
                      <option value="DE">Germany (+49)</option>
                      <option value="FR">France (+33)</option>
                      <option value="IT">Italy (+39)</option>
                      <option value="ES">Spain (+34)</option>
                      <option value="RU">Russia (+7)</option>
                      <option value="BR">Brazil (+55)</option>
                      <option value="MX">Mexico (+52)</option>
                      <option value="ZA">South Africa (+27)</option>
                      <option value="OTHER">{t_dyn("Other", "أخرى")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.interest}</label>
                  <select 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow"
                    onChange={e => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="degree">{t.contact.interest_degree}</option>
                    <option value="language">{t.contact.interest_language}</option>
                    <option value="phd">{t.contact.interest_phd}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-gold)] outline-none transition-shadow resize-none"
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="h-14 text-lg w-full mt-4 shadow-lg flex items-center justify-center gap-2">
                  {t.contact.btn}
                  <Send size={18} className="rtl:rotate-180" />
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
