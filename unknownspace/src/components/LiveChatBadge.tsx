"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LiveChatBadge() {
  const [unreadCount, setUnreadCount] = useState(0);
  const pathname = usePathname();
  const prevCountRef = useRef(0);

  useEffect(() => {
    const fetchMsgs = async () => {
      try {
        const res = await fetch("/api/admin/chat");
        if (!res.ok) return;
        const data = await res.json();
        const totalCustomerMsgs = data.messages ? data.messages.filter((m: any) => m.sender !== "Concierge").length : 0;
        
        // If we are on the chat page, we consider all as read
        if (pathname === "/admin/chat") {
          setUnreadCount(0);
          prevCountRef.current = totalCustomerMsgs;
          return;
        }

        // Calculate if there's new messages since last we checked
        if (totalCustomerMsgs > prevCountRef.current) {
          if (prevCountRef.current !== 0) { // Don't alert on first load
            // A new message arrived while we're not on the chat page!
            const newMsgsCount = totalCustomerMsgs - prevCountRef.current;
            setUnreadCount(prev => prev + newMsgsCount);
            
            // Optional: Play a tiny ping sound
            try {
               const audio = new Audio("https://cdn.freesound.org/previews/536/536422_4921277-lq.mp3"); // Minimal modern pop sound
               audio.volume = 0.5;
               audio.play();
            } catch(e) {}
          }
          prevCountRef.current = totalCustomerMsgs;
        }
      } catch (err) {
        console.error("Failed to poll chat", err);
      }
    };

    fetchMsgs();
    const interval = setInterval(fetchMsgs, 3000);
    return () => clearInterval(interval);
  }, [pathname]);

  if (unreadCount === 0) return null;

  return (
    <span className="w-5 h-5 bg-[#cba258] text-[#1a2f4c] rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm animate-pulse">
      {unreadCount > 9 ? '9+' : unreadCount}
    </span>
  );
}
