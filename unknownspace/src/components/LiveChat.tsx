"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { MessageCircle, X, Send, Paperclip, Mic, Image as ImageIcon, Video, Tag } from "lucide-react";

export default function LiveChat() {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  if (pathname?.startsWith("/admin")) return null;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] border border-[#cba258]/30 text-[#cba258] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(26,47,76,0.3)] hover:shadow-[0_12px_40px_rgba(203,162,88,0.2)] transition-all hover:scale-105 group"
      >
        <MessageCircle size={26} className="group-hover:scale-110 transition-transform duration-500" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[350px] sm:w-[400px] h-[550px] bg-white/90 backdrop-blur-2xl border border-[#cba258]/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
           {/* Header */}
           <div className="bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] border-b border-[#cba258]/20 p-5 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#cba258]/5 rounded-bl-[100%] pointer-events-none"></div>
              <div className="flex items-center gap-4 relative z-10">
                 <div className="w-12 h-12 rounded-full bg-[#111d32] text-[#cba258] flex items-center justify-center border border-[#cba258]/30 shadow-inner relative">
                    <span className="font-playfair text-xl">U</span>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#1a2f4c]"></div>
                 </div>
                 <div>
                    <h3 className="text-[13px] font-bold text-white tracking-[0.2em] uppercase font-playfair">UnknownSpace<span className="text-[9px] text-[#cba258] align-top ml-1">®</span></h3>
                    <p className="text-[9px] text-[#cba258] uppercase tracking-[0.3em] font-bold mt-1">Concierge Active</p>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#a0aabf] hover:text-[#cba258] transition-colors relative z-10 p-2">
                <X size={20} />
              </button>
           </div>

           {/* Chat Body */}
           <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#FDFCFA]/50 relative">
              <div className="text-center text-[9px] text-[#a0aabf] font-bold uppercase tracking-[0.3em] my-4">Protocol Initiated - Today</div>
              
              <div className="flex gap-4">
                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] text-[#cba258] flex justify-center items-center shrink-0 border border-[#cba258]/30 shadow-sm"><span className="font-playfair text-[13px]">U</span></div>
                 <div className="bg-white border border-[#EFEBE6] p-4 rounded-xl rounded-tl-none max-w-[80%] shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                    <p className="text-[11px] text-[#1a2f4c] leading-[2] tracking-wider">Welcome to UnknownSpace Singapore! ✨<br/><br/>How may we elevate your fragrance acquisition experience today?</p>
                 </div>
              </div>

              {!session && (
                 <div className="flex flex-col items-center justify-center h-full gap-5 mt-10">
                    <div className="text-[10px] text-[#5c6b89] uppercase tracking-[0.2em] text-center px-6 leading-loose">Authentication required to interface with our prestige concierge.</div>
                    <button onClick={() => signIn('google')} className="bg-white border border-[#EFEBE6] text-[#1a2f4c] px-8 py-4 rounded flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:border-[#cba258] hover:shadow-[0_4px_20px_rgba(203,162,88,0.1)] transition-all duration-300">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3.5 h-3.5"/>
                       Secure Google Login
                    </button>
                 </div>
              )}
           </div>

           {/* Input Area (Only if logged in) */}
           {session && (
              <div className="bg-white border-t border-[#EFEBE6] p-4">
                 {/* Attachment Tools */}
                 <div className="flex gap-5 mb-4 px-2">
                    <button className="text-[#a0aabf] hover:text-[#cba258] transition-colors duration-300"><ImageIcon size={18}/></button>
                    <button className="text-[#a0aabf] hover:text-[#cba258] transition-colors duration-300"><Video size={18}/></button>
                    <button className="text-[#a0aabf] hover:text-[#cba258] transition-colors duration-300"><Mic size={18}/></button>
                    <button className="text-[#a0aabf] hover:text-[#cba258] transition-colors duration-300"><Tag size={18}/></button>
                    <button className="text-[#a0aabf] hover:text-[#cba258] transition-colors duration-300 ml-auto"><Paperclip size={18}/></button>
                 </div>
                 <div className="flex items-center gap-3">
                    <input type="text" placeholder="Draft your message..." className="flex-1 bg-[#F8F9FA] border border-[#EFEBE6] rounded py-3.5 px-5 text-sm text-[#1a2f4c] outline-none focus:border-[#cba258] transition-colors placeholder:text-[#a0aabf] placeholder:text-[11px] placeholder:tracking-widest placeholder:uppercase" />
                    <button className="w-12 h-12 bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] text-[#cba258] rounded flex justify-center items-center shrink-0 hover:shadow-[0_4px_15px_rgba(203,162,88,0.3)] transition-all shadow-sm">
                       <Send size={18} />
                    </button>
                 </div>
                 <div className="text-[9px] text-[#5c6b89] text-center mt-3 uppercase tracking-[0.2em]">
                    Connected securely as {session.user?.name} <span className="mx-2">|</span> <button onClick={() => signOut()} className="hover:text-rose-500 transition-colors font-bold inline">Disconnect</button>
                 </div>
              </div>
           )}
        </div>
      )}
    </>
  );
}
