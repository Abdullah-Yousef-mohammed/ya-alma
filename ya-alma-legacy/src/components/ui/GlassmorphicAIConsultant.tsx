"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, PhoneCall, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  options?: { id: string; text: string }[];
}

export default function GlassmorphicAIConsultant() {
  const { language, t_dyn, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scoped memory for tree traversal
  const [currentNode, setCurrentNode] = useState<string>("start");

  // Multi-lingual Tree Data
  const getFaqTree = () => {
    return {
      start: {
        msg: t_dyn(
          "Welcome to Ya Alma AI Consultant! Malaysian education offers excellence and affordability. What would you like to explore?",
          "أهلاً بك في المساعد الذكي الخاص بـ يا الما! ماليزيا تقدم لك تعليماً فخماً بتكاليف مبهرة. كيف يمكنني إرشادك لبدء رحلتك؟",
          "欢迎咨询 Ya Alma 智能助手！马来西亚提供卓越且实惠的教育。您想了解什么？",
          "Selamat datang ke Perunding AI Ya Alma! Pendidikan di Malaysia menawarkan kecemerlangan. Apa yang anda ingin teroka?"
        ),
        opts: [
          { id: "fees", text: t_dyn("Tuition & Fees", "تكاليف الدراسة المجانية", "学费和费用", "Yuran Pengajian") },
          { id: "living", text: t_dyn("Living Costs", "تكاليف المعيشة", "生活费", "Kos Sara Hidup") },
          { id: "work", text: t_dyn("Student Work", "عمل الطلاب", "学生工作", "Kerja Pelajar") },
          { id: "housing", text: t_dyn("Accommodation", "السكن الجامعي", "住宿", "Penginapan") },
          { id: "scholarship", text: t_dyn("Scholarships", "المنح الجزئية", "奖学金", "Biasiswa") },
          { id: "why_us", text: t_dyn("Why Ya Alma?", "لماذا يا الما مجانية؟", "为什么选择我们？", "Kenapa Ya Alma?") }
        ]
      },
      fees: {
        msg: t_dyn(
          "Universities in Malaysia vary. Public (approx $3K-$5K/year), Private (approx $5K-$12K/year). And remember, Ya Alma processes your university application absolutely FREE!",
          "تختلف الرسوم باختلاف الجامعة والمرحلة. الجامعات الحكومية (حوالي 3-5 آلاف دولار سنوياً)، والخاصة (5-12 ألف دولار سنوياً). الجميل في الأمر؟ نحن في يا الما ننهي كافة أوراق القبول مجاناً بالكامل دون أي رسوم مخفية!",
          "马来西亚大学的费用各不相同。公立大学（约3-5千美元/年），私立大学（约5-1.2万美元/年）。我们免费为您处理申请！",
          "Yuran universiti di Malaysia berbeza. Awam (kira-kira $3K-$5K/tahun), Swasta ($5K-$12K/tahun). Kami memproses permohonan secara PERCUMA!"
        ),
        opts: [
          { id: "apply", text: t_dyn("Apply For Free", "ابدأ التقديم المجاني", "免费申请", "Mohon Percuma") },
          { id: "start", text: t_dyn("Back to Menu", "العودة للقائمة", "返回菜单", "Kembali ke Menu") }
        ]
      },
      living: {
        msg: t_dyn(
          "Living in Malaysia is incredibly affordable yet highly modern! The average living cost (including decent food, transport, and leisure) is just around $300-$500 per month.",
          "تكلفة المعيشة في ماليزيا مدهشة حقاً! يمكنك الاستمتاع بنمط حياة عصري ومترف بتكلفة تتراوح بين 300$ إلى 500$ شهرياً فقط شاملة الأكل الممتاز، المواصلات الحديثة، والترفيه.",
          "在马来西亚生活非常实惠且现代化！平均生活费（包括餐饮、交通和休闲）每月仅约300-500美元。",
          "Kos sara hidup di Malaysia sangat berpatutan! Purata kos sara hidup sekitar $300-$500 sebulan."
        ),
        opts: [
          { id: "housing", text: t_dyn("Tell me about Housing", "حدثني عن السكن", "了解住宿", "Ketahui Penginapan") },
          { id: "start", text: t_dyn("Back to Menu", "العودة للقائمة", "返回菜单", "Kembali ke Menu") }
        ]
      },
      work: {
        msg: t_dyn(
          "Great news! International students have the right to work part-time for up to 20 hours per week during semester breaks and holidays. It's a fantastic way to gain global experience.",
          "أخبار رائعة! يحق للطلاب الدوليين في ماليزيا العمل بدوام جزئي (Part-time) لمدة تصل إلى 20 ساعة أسبوعياً خلال الإجازات والعطلات الجامعية. إنها فرصة ذهبية لاكتساب خبرة دولية ومصروف إضافي.",
          "好消息！国际学生在学期放假期间每周可合法兼职工作长达20小时。",
          "Berita baik! Pelajar antarabangsa boleh bekerja sambilan sehingga 20 jam seminggu semasa cuti semester."
        ),
        opts: [
          { id: "human", text: t_dyn("Ask a Consultant 💬", "تحدث مع خبيرنا 💬", "咨询专家 💬", "Tanya Perunding") },
          { id: "start", text: t_dyn("Back to Menu", "العودة للقائمة", "返回菜单", "Kembali ke Menu") }
        ]
      },
      housing: {
        msg: t_dyn(
          "From luxurious off-campus condos with swimming pools and gyms (approx $150-$300/month) to convenient on-campus dorms, Malaysia offers world-class student accommodation.",
          "تخيل أن تسكن في مجمع سكني (Condo) فخم بقلب كوالالمبور يحتوي على مسبح وجيم بأقل من 300$ شهرياً! ماليزيا توفر خيارات سكن داخلي وخارجي تناسب كافة الميزانيات بمستوى عالمي.",
          "从带有游泳池和健身房的豪华校外公寓（每月约150-300美元）到便利的校内宿舍，应有尽有。",
          "Dari kondominium mewah luar kampus dengan kolam renang (sekitar $150-$300/bulan) hingga asrama dalam kampus yang mudah."
        ),
        opts: [
          { id: "apply", text: t_dyn("Help me secure Housing", "ساعدوني في توفير السكن", "帮我寻找住宿", "Bantu saya cari penginapan") },
          { id: "start", text: t_dyn("Back to Menu", "العودة للقائمة", "返回菜单", "Kembali ke Menu") }
        ]
      },
      why_us: {
        msg: t_dyn(
          "We are OFFICIAL partners with top Malaysian universities. They fund us directly so YOU don't have to! You receive premium admission, visa processing, and airport VIP pick-up for 0 extra cost.",
          "نحن الممثل الرسمي (والمعتمد) لأقوى جامعات ماليزيا. الجامعات هي من تقوم بتمويلنا لتسهيل وصولك! لذلك، أنت تحصل على خدمة فحص الملفات، القبول، التأشيرة، وحتى الاستقبال الـ VIP من المطار مجـــــاناً بنسبة 100%.",
          "我们是马来西亚顶尖大学的官方合作伙伴。大学直接资助我们！您无需支付任何额外费用。",
          "Kami adalah wakil rasmi universiti terkemuka Malaysia. Mereka membiayai kami secara langsung!"
        ),
        opts: [
          { id: "apply", text: t_dyn("Start VIP Service", "البدء بالخدمة الـ VIP", "开始VIP服务", "Mula Perkhidmatan VIP") },
          { id: "human", text: t_dyn("Verify Credentials", "تحدث مع الإدارة", "验证资质", "Sahkan Kelayakan") }
        ]
      },
      visa: {
        msg: t_dyn(
          "The Student Visa (EMGS) takes about 3 to 6 weeks. Forget the complicated paperwork—we handle all government liaison on your behalf until your visa is approved!",
          "إجراءات تأشيرة الطالب (EMGS) تأخذ عادة 3 إلى 6 أسابيع. انسَ هموم الأوراق المعقدة! فريقنا يتولى التنسيق المباشر مع الجامعة وإدارة الهجرة الماليزية حتى تصدر تأشيرتك بسلام.",
          "学生签证流程大约需要 3 到 6 周。我们代表您处理所有政府联络。",
          "Proses Visa Pelajar (EMGS) mengambil masa 3 hingga 6 minggu."
        ),
        opts: [
          { id: "apply", text: t_dyn("Help me apply", "ساعدني في التقديم", "帮我申请", "Bantu saya") },
          { id: "start", text: t_dyn("Back to Menu", "العودة للقائمة", "返回菜单", "Kembali ke Menu") }
        ]
      },
      scholarship: {
        msg: t_dyn(
          "Our partner universities offer exclusive discounts and merit-based scholarships up to 50%! Let our consultants evaluate your transcripts today to see what you qualify for.",
          "شركاؤنا من الجامعات يوفرون لك عبر (يا الما) خصومات حصرية ومنحاً دراسية تصل حتى 50% تعتمد على معدلك! أرسل شهاداتك اليوم لمستشارينا لتقييمها واغتنام الفرصة.",
          "许多合作大学提供高达 50% 的奖学金！请让我们的顾问马上评估您的成绩单。",
          "Banyak universiti rakan kongsi menawarkan sehingga 50% biasiswa!"
        ),
        opts: [
          { id: "human", text: t_dyn("Speak to Consultant 💬", "تقييم شهاداتي الآن 💬", "与顾问交谈 💬", "Bercakap dengan Perunding") },
        ]
      },
      apply: {
        msg: t_dyn(
          "Excellent choice! I'm transferring you directly to a Senior Academic Advisor on WhatsApp to kick-start your VIP journey.",
          "قرار ممتاز، وحكيم جداً! سأقوم الآن بتحويلك فوراً وفي هذه اللحظة لأحد مستشارينا الأكاديميين المعتمدين على واتساب لفتح ملفك وبدء رحلتك الـ VIP.",
          "极好的选择！我马上帮您联系资深学术顾问。",
          "Pilihan yang sangat baik! Mari bantu anda berhubung dengan penasihat akademik."
        ),
        opts: [
          { id: "human", text: t_dyn("Proceed to WhatsApp (Fast)", "انتقل إلى الواتساب (سريع) 🚀", "继续 WhatsApp", "Teruskan ke WhatsApp") },
        ]
      }
    };
  };

  useEffect(() => {
    // Initial welcome
    if (isOpen && messages.length === 0) {
      const tree: any = getFaqTree();
      setMessages([{
        id: Date.now().toString(),
        sender: "ai",
        text: tree.start.msg,
        options: tree.start.opts
      }]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (optId: string, optText: string) => {
    if (optId === "human") {
      window.open("https://wa.me/601158722903", "_blank");
      return;
    }

    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString() + "u", sender: "user", text: optText }]);

    // Add AI bot reply
    setTimeout(() => {
      const tree: any = getFaqTree();
      const nextNode = tree[optId];
      if (nextNode) {
        setMessages(prev => [...prev, {
          id: Date.now().toString() + "a",
          sender: "ai",
          text: nextNode.msg,
          options: nextNode.opts
        }]);
        setCurrentNode(optId);
      }
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <div className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-50 flex flex-col items-end pointer-events-none`}>
        
        {/* The Chat Window */}
        <div 
          className={`pointer-events-auto mb-4 w-80 md:w-96 transform transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        >
          <div className="bg-white dark:bg-[#0b0f19]/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden ring-1 ring-gray-900/5">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--color-brand-navy)] to-[#1a2f6b] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white dark:bg-[#0b0f19]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Bot size={22} className="text-[var(--color-brand-gold)]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[var(--color-brand-navy)] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{t_dyn("AI Assistant", "المساعد الذكي", "AI助手", "Pembantu AI")}</h3>
                  <p className="text-white/70 text-xs">{t_dyn("Always Online", "متصل دائماً", "始终在线", "Sentiasa dalam Talian")}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white bg-white dark:bg-[#0b0f19]/10 hover:bg-white dark:bg-[#0b0f19]/20 p-1.5 rounded-full backdrop-blur-sm transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#11192d]/50" dir={isRtl ? "rtl" : "ltr"}>
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] ${m.sender === "user" ? "" : "flex gap-2"}`}>
                    
                    {m.sender === "ai" && (
                      <div className="w-6 h-6 shrink-0 bg-[var(--color-brand-navy)]/10 rounded-full flex items-center justify-center mt-1">
                        <Sparkles size={12} className="text-[var(--color-brand-gold)]" />
                      </div>
                    )}
                    
                    <div>
                      <div className={`px-4 py-3 text-sm shadow-sm ${
                        m.sender === "user" 
                          ? "bg-[var(--color-brand-navy)] text-white rounded-2xl rounded-tr-sm" 
                          : "bg-white dark:bg-[#0b0f19] border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-sm relative"
                      }`}>
                        {m.text}
                      </div>
                      
                      {m.options && (
                        <div className={`flex flex-wrap gap-2 mt-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                          {m.options.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => handleOptionClick(opt.id, opt.text)}
                              className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                                opt.id === "human" || opt.id === "apply"
                                ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] hover:bg-yellow-400 border border-yellow-200"
                                : "bg-white dark:bg-[#0b0f19] text-[var(--color-brand-navy)] border border-gray-200 dark:border-gray-700 hover:border-[var(--color-brand-navy)] hover:bg-gray-50 dark:bg-[#11192d]"
                              }`}
                            >
                              {opt.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Fake/Decorative) */}
            <div className="p-3 bg-white dark:bg-[#0b0f19] border-t border-gray-100 dark:border-gray-800">
               <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-full cursor-not-allowed opacity-60">
                 <span className="text-xs text-gray-400 font-medium">Select an option above to chat...</span>
                 <Send size={14} className="text-gray-300 ml-auto" />
               </div>
            </div>
          </div>
        </div>

        {/* Toggle Button Container - The pulsing sphere */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`pointer-events-auto relative group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-500 overflow-hidden ${
            isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-gradient-to-tr from-[var(--color-brand-navy)] to-[#2B406B] hover:scale-105"
          }`}
        >
          {/* Glassmorphic internal glow */}
          <div className="absolute inset-0 bg-white dark:bg-[#0b0f19]/10 backdrop-blur-sm rounded-full"></div>
          
          {isOpen ? (
            <X size={26} className="text-white relative z-10" />
          ) : (
            <>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-20 animate-pulse"></div>
              <Sparkles size={28} className="text-[var(--color-brand-gold)] relative z-10" />
            </>
          )}
        </button>

      </div>
    </>
  );
}
