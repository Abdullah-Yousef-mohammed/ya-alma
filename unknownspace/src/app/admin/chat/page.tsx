"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Send, ImagePlus, Box, Wand2, Paperclip, CheckCircle2 } from "lucide-react";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [activeContact, setActiveContact] = useState<any>(null);
  
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMsgs = async () => {
      const res = await fetch("/api/chat");
      const data = await res.json();
      
      // Group messages by user
      const usersMap = new Map();
      data.forEach((m: any) => {
         if (!usersMap.has(m.userId)) {
            usersMap.set(m.userId, { 
               userId: m.userId, 
               name: m.userName || m.userId,
               messages: [],
               lastMsg: m.text,
               lastTime: new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            });
         }
         const user = usersMap.get(m.userId);
         user.messages.push(m);
         user.lastMsg = m.text;
         user.lastTime = new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      });

      const parsedContacts = Array.from(usersMap.values());
      setContacts(parsedContacts);

      if (activeContact) {
         setMessages(usersMap.get(activeContact.userId)?.messages || []);
      } else if (parsedContacts.length > 0) {
         setActiveContact(parsedContacts[0]);
         setMessages(parsedContacts[0].messages);
      }
    };
    
    fetchMsgs();
    const int = setInterval(fetchMsgs, 3000);
    return () => clearInterval(int);
  }, [activeContact]);

  useEffect(() => {
     if(chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim() || !activeContact) return;

    const newMsg = {
      userId: activeContact.userId,
      userName: activeContact.name,
      text: msg,
      sender: "seller",
    };

    setMsg("");
    setMessages(prev => [...prev, { ...newMsg, id: Date.now(), timestamp: new Date().toISOString() }]);
    
    await fetch("/api/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(newMsg)
    });
  };

  return (
    <div className="flex h-[calc(100vh-140px)] animate-in fade-in duration-500 border border-zinc-200 rounded-sm shadow-sm overflow-hidden">
      {/* Contact List */}
      <div className="w-80 bg-zinc-50 border-r border-zinc-200 flex flex-col shrink-0">
         <div className="p-4 border-b border-zinc-200 bg-white">
            <h2 className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-4">Live Chat Center</h2>
            <div className="relative">
               <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
               <input type="text" placeholder="Search customers..." className="w-full bg-zinc-50 border border-zinc-200 px-9 py-2 text-xs outline-none focus:border-zinc-400 text-black rounded-sm transition-colors"/>
            </div>
         </div>
         <div className="flex-1 overflow-y-auto bg-white">
            {contacts.length === 0 && (
               <div className="text-center text-zinc-400 text-[10px] uppercase font-bold tracking-widest mt-10">No Active Chats</div>
            )}
            {contacts.map(c => (
               <div key={c.userId} onClick={() => { setActiveContact(c); setMessages(c.messages); }} className={`p-4 border-b border-zinc-100 cursor-pointer transition-colors ${activeContact?.userId === c.userId ? 'bg-zinc-50 border-l-2 border-l-black' : 'hover:bg-zinc-50'}`}>
                  <div className="flex justify-between items-center mb-1">
                     <div className={`text-xs font-bold tracking-wider ${activeContact?.userId === c.userId ? 'text-black' : 'text-zinc-700'}`}>{c.name}</div>
                     <div className="text-[9px] text-zinc-400 font-mono">{c.lastTime}</div>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="text-[11px] text-zinc-500 line-clamp-1 mr-4">{c.lastMsg}</div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Chat Area */}
      {activeContact ? (
      <div className="flex-1 bg-white flex flex-col relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-white to-white"></div>
         
         <div className="h-16 border-b border-zinc-200 bg-white/90 backdrop-blur-md flex items-center justify-between px-6 z-10 shrink-0">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-black font-playfair font-bold">{(activeContact.name[0] || '?').toUpperCase()}</div>
               <div>
                  <h3 className="text-sm font-bold text-black tracking-wider">{activeContact.name}</h3>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online ({activeContact.userId})
                  </div>
               </div>
            </div>
            <button className="text-[10px] border border-zinc-300 text-black px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-sm tracking-widest uppercase font-bold">View User Details</button>
         </div>

         <div ref={chatRef} className="flex-1 overflow-y-auto p-6 space-y-6 z-10 flex flex-col bg-zinc-50/50">
            {messages.map((m: any, i: number) => (
               <div key={m.id || i} className={`flex gap-4 max-w-2xl ${m.sender === 'seller' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  {m.sender === 'seller' ? (
                     <div className="w-8 h-8 rounded-full bg-black border border-transparent flex items-center justify-center text-white text-[10px] font-bold mt-1 shadow-sm shrink-0">US</div>
                  ) : (
                     <div className="w-8 h-8 rounded-full bg-white border border-zinc-300 flex items-center justify-center text-black text-[10px] font-bold mt-1 shrink-0">{(activeContact.name[0]||'C').toUpperCase()}</div>
                  )}
                  
                  <div className={`${m.sender === 'seller' ? 'bg-zinc-100 border border-zinc-200 rounded-tr-sm' : 'bg-white border border-zinc-200 rounded-tl-sm'} rounded-2xl p-4 text-[13px] text-black tracking-wide leading-relaxed shadow-sm`}>
                     {m.sender === 'seller' ? (
                        <div className="flex items-center justify-end gap-2 mb-2">
                           <span className="text-zinc-500 text-[10px] font-mono">{new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                           <CheckCircle2 size={12} className="text-black"/>
                        </div>
                     ) : (
                        <span className="text-zinc-400 text-[10px] block mb-2 font-mono">{new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                     )}
                     {m.text}
                  </div>
               </div>
            ))}
         </div>

         <form onSubmit={sendMessage} className="p-4 bg-white border-t border-zinc-200 z-10 shrink-0">
            <div className="flex items-center gap-3 mb-3 px-2">
               <button type="button" className="text-zinc-500 hover:text-black transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"><Wand2 size={12}/> AI Reply</button>
               <button type="button" className="text-zinc-400 hover:text-black transition-colors"><Box size={16}/></button>
               <button type="button" className="text-zinc-400 hover:text-black transition-colors"><ImagePlus size={18}/></button>
               <button type="button" className="text-zinc-400 hover:text-black transition-colors"><Paperclip size={16}/></button>
            </div>
            <div className="flex items-end gap-4">
               <textarea 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Message customer..." 
                  className="flex-1 bg-zinc-50 border border-zinc-200 rounded-sm p-4 text-sm outline-none focus:border-zinc-400 text-black resize-none h-14 placeholder:text-zinc-400"
               ></textarea>
               <button type="submit" disabled={!msg.trim()} className="bg-black hover:bg-zinc-800 disabled:opacity-50 text-white p-4 rounded-sm transition-all shadow-sm mb-0.5">
                  <Send size={18} />
               </button>
            </div>
         </form>
      </div>
      ) : (
         <div className="flex-1 bg-white flex items-center justify-center">
            <div className="text-center text-zinc-400 text-[10px] uppercase tracking-widest font-bold">Select a chat to begin</div>
         </div>
      )}
    </div>
  );
}
