import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-[#FDFCFA] text-ya-navy font-sans relative overflow-hidden min-h-screen">
         <section className="w-full relative py-20 md:py-32 flex justify-center border-b border-[#EFEBE6] overflow-hidden bg-white">
            <div className="z-10 text-center max-w-4xl mx-auto px-6">
               <span className="text-ya-gold tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-8 block animate-in fade-in slide-in-from-bottom duration-1000 delay-100">Concierge Desk</span>
               <h1 className="text-4xl md:text-6xl font-playfair tracking-widest leading-[1.3] mb-6 text-[#1a2f4c] uppercase animate-in fade-in zoom-in-95 duration-[1.5s]">
                 Bespoke <br className="hidden md:block" /> Communications
               </h1>
               <p className="text-[#5c6b89] text-[11px] md:text-[13px] tracking-[0.3em] uppercase max-w-xl mx-auto font-medium animate-in fade-in duration-1000 delay-300">
                  Exclusive access for elite inquiries and sourcing.
               </p>
            </div>
         </section>

         <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 py-20 md:py-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div>
                    <h3 className="text-2xl font-playfair text-ya-navy uppercase tracking-widest mb-4">Direct Contact</h3>
                    <p className="text-[#5c6b89] text-[11px] uppercase tracking-[0.2em] leading-loose max-w-sm border-l-2 border-[#cba258] pl-4">For elite inquiries, exclusive sourcing, or wholesale access, our concierge team is at your complete disposal.</p>
                 </div>

                 <div className="space-y-6">
                    <div className="pb-6 border-b border-[#EFEBE6] group">
                       <h4 className="text-[10px] text-[#cba258] font-bold tracking-[0.3em] uppercase mb-2">WhatsApp Protocol</h4>
                       <p className="text-sm font-mono text-ya-navy tracking-wider group-hover:text-[#cba258] transition-colors cursor-pointer">+65 8749 3911</p>
                    </div>
                    <div className="pb-6 border-b border-[#EFEBE6] group">
                       <h4 className="text-[10px] text-[#cba258] font-bold tracking-[0.3em] uppercase mb-2">Electronic Mail</h4>
                       <p className="text-sm font-mono text-ya-navy tracking-wider group-hover:text-[#cba258] transition-colors cursor-pointer">concierge@unknownspace.sg</p>
                    </div>
                    <div className="pb-6 border-b border-[#EFEBE6]">
                       <h4 className="text-[10px] text-[#cba258] font-bold tracking-[0.3em] uppercase mb-2">Regional Dispatch Headquarter</h4>
                       <p className="text-sm font-mono text-ya-navy tracking-wider">Singapore</p>
                    </div>
                 </div>
              </div>

              {/* Secure Web Form */}
              <div className="bg-white p-10 md:p-14 border border-[#EFEBE6] shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
                 <h3 className="text-xl font-playfair text-ya-navy uppercase tracking-widest mb-10">Send Secure Dispatch</h3>
                 <form className="space-y-8">
                    <div>
                        <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Entity / Name</label>
                        <input required type="text" className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)]" placeholder="Your name or company" />
                    </div>
                    <div>
                        <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Contact Reference</label>
                        <input required type="text" className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)]" placeholder="Phone or email address" />
                    </div>
                    <div>
                        <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Message Content</label>
                        <textarea required rows={5} className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)] resize-none" placeholder="State your inquiry clearly" />
                    </div>

                    <button type="button" onClick={() => alert('Secure message dispatched successfully. Our concierge will reach out within 24 hours.')} className="relative group overflow-hidden w-full border border-transparent bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded shadow-[0_8px_30px_rgba(26,47,76,0.3)] hover:shadow-[0_12px_40px_rgba(203,162,88,0.2)]">
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cba258] to-[#e4cd9b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                       <span className="relative z-10 text-[#cba258] group-hover:text-[#1a2f4c] transition-colors duration-500">
                          Transmit Message
                       </span>
                    </button>
                    <div className="text-center pt-2">
                       <span className="text-[7.5px] text-[#a0aabf] font-bold uppercase tracking-[0.3em]">🔒 Secured by UnknownSpace</span>
                    </div>
                 </form>
              </div>
         </section>
      </main>
      <Footer />
    </>
  );
}
