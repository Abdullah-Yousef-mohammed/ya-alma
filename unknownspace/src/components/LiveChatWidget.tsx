"use client";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, ImagePlus, CheckCircle2, User, Phone } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [msg, setMsg] = useState("");
  const { data: session } = useSession();
  const pathname = usePathname();
  
  const activeUserId = (session?.user as any)?.phone || session?.user?.email;
  const activeUserName = session?.user?.name || "Customer";

  // Hide widget entirely on admin pages
  if (pathname?.startsWith("/admin")) return null;
  
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !session) return;
    
    const fetchMsgs = async () => {
      if (!activeUserId) return;
      const res = await fetch(`/api/chat?userId=${activeUserId}`);
      const data = await res.json();
      setMessages(data);
      
      // Auto scroll
      if (chatRef.current) {
         chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };
    
    fetchMsgs();
    const interval = setInterval(fetchMsgs, 3000);
    return () => clearInterval(interval);
  }, [isOpen, session, activeUserId]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim() || !session) return;

    const newMsg = {
      userId: activeUserId,
      userName: activeUserName,
      text: msg,
      sender: "customer",
    };

    setMsg("");
    // Optimistic UI
    setMessages(prev => [...prev, { ...newMsg, id: Date.now(), timestamp: new Date().toISOString() }]);
    
    await fetch("/api/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(newMsg)
    });
    
    if (chatRef.current) {
       chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const handleGuestJoin = (e: React.FormEvent) => {
     e.preventDefault();
     if(guestName && guestPhone) setIsJoined(true);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-tr from-[#1a2f4c] to-[#0f1b2d] rounded-full flex items-center justify-center text-[#cba258] shadow-[0_8px_30px_rgba(26,47,76,0.3)] hover:scale-105 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
         <MessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[380px] h-[600px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col z-50 overflow-hidden border border-[#EFEBE6] animate-in slide-in-from-bottom-5 duration-300">
           {/* Header */}
           <div className="h-20 bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-[#cba258]/30 flex items-center justify-center bg-white/5">
                    <span className="text-[#cba258] font-playfair font-bold text-lg">C</span>
                 </div>
                 <div>
                    <h3 className="text-white font-bold tracking-widest uppercase text-xs">Concierge</h3>
                    <div className="flex items-center gap-2 text-[10px] text-[#a0aabf] tracking-widest uppercase mt-0.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                    </div>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                 <X size={20} />
              </button>
           </div>

           {/* Authentication State */}
           {!session ? (
              <div className="flex-1 p-8 flex flex-col justify-center bg-[#FDFCFA]">
                 <div className="text-center mb-10">
                    <h4 className="text-ya-navy font-playfair text-2xl mb-3">Live Concierge</h4>
                    <p className="text-[10px] text-[#5c6b89] tracking-[0.2em] uppercase leading-loose px-4">Please sign in to chat securely with our associates and track your communications.</p>
                 </div>
                 
                 <a href="/login" className="w-full bg-ya-navy text-white text-[10px] font-bold tracking-[0.2em] uppercase py-4 rounded-sm shadow-[0_8px_20px_rgba(26,47,76,0.15)] flex justify-center items-center hover:bg-[#111d32] transition-all duration-300">
                    Secure Login
                 </a>

                 <div className="mt-8 flex items-center gap-4">
                    <div className="flex-1 h-px bg-[#EFEBE6]"></div>
                    <span className="text-[9px] font-bold text-[#a0aabf] tracking-widest uppercase">Quick Access</span>
                    <div className="flex-1 h-px bg-[#EFEBE6]"></div>
                 </div>

                 <button onClick={() => signIn('google')} className="mt-8 w-full flex items-center justify-center gap-3 bg-white border border-[#EFEBE6] py-3 text-xs font-bold tracking-widest uppercase text-ya-navy hover:bg-zinc-50 transition-colors rounded-sm shadow-sm group">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4 group-hover:scale-110 transition-transform" alt="G" />
                    Sign in with Google
                 </button>
              </div>
           ) : (
             <>
               {/* Chat Messages */}
               <div ref={chatRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FDFCFA]">
                  {messages.length === 0 && (
                     <div className="text-center text-[10px] text-[#a0aabf] tracking-widest uppercase mt-10">
                        Ask us anything about our exclusive fragrances, dispatch times, or sourcing requests.
                     </div>
                  )}

                  {messages.map((m: any, i) => (
                     <div key={m.id || i} className={`flex gap-3 max-w-[85%] ${m.sender === 'customer' ? 'self-end flex-row-reverse ml-auto' : 'self-start mr-auto'}`}>
                        {m.sender === 'seller' && (
                           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] shrink-0 border border-[#cba258]/30 flex items-center justify-center text-[#cba258] font-playfair font-bold text-xs shadow-sm mt-1">C</div>
                        )}
                        <div className={`p-4 text-[13px] leading-relaxed shadow-sm ${
                           m.sender === 'customer' 
                             ? 'bg-ya-navy text-white rounded-2xl rounded-tr-sm' 
                             : 'bg-white border border-[#EFEBE6] text-ya-navy rounded-2xl rounded-tl-sm'
                        }`}>
                           {m.text}
                           <div className={`text-[9px] font-mono mt-2 flex items-center gap-1 opacity-70 ${m.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                              {new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              {m.sender === 'customer' && <CheckCircle2 size={10} />}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Input */}
               <form onSubmit={sendMessage} className="p-4 bg-white border-t border-[#EFEBE6] shrink-0">
                  <div className="flex items-center gap-3">
                     <button type="button" className="text-zinc-400 hover:text-ya-navy transition-colors shrink-0"><ImagePlus size={20}/></button>
                     <input 
                       value={msg}
                       onChange={e => setMsg(e.target.value)}
                       type="text" 
                       placeholder="Message Concierge..." 
                       className="flex-1 bg-zinc-50 border border-[#EFEBE6] py-3 px-4 rounded-full text-[13px] outline-none focus:border-[#cba258] transition-colors text-ya-navy shadow-inner"
                     />
                     <button type="submit" disabled={!msg.trim()} className="w-10 h-10 rounded-full bg-[#cba258] text-white flex items-center justify-center shrink-0 hover:bg-[#b08d4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
                        <Send size={16} className="-ml-0.5" />
                     </button>
                  </div>
               </form>
             </>
           )}
        </div>
      )}
    </>
  );
}
