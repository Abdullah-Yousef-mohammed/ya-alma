import Link from 'next/link';
import { MessageCircle, Globe, Share2, MapPin, Phone, Mail } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';

async function getFooterConfig() {
  try {
    const filePath = path.join(process.cwd(), "data/footer-config.json");
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {
      brandName: "UnknownSpace",
      tagline: "Providing the finest curated luxury fragrances globally, tailored for the elite of Singapore. Elevate your presence.",
      shopLinks: [
        { label: "All Perfumes", href: "/" },
        { label: "Oud Collection", href: "/" },
        { label: "Home Fragrances", href: "/" },
        { label: "Gift Sets", href: "/" },
        { label: "New Arrivals", href: "/new-launch", highlight: true }
      ],
      supportLinks: [
        { label: "Track Order", href: "/" },
        { label: "Shipping & Returns", href: "/" },
        { label: "Frequently Asked", href: "/" },
        { label: "Corporate Gifting", href: "/" }
      ],
      address: "Level 4, ION Orchard, Singapore 238801",
      phone: "+65 8749 3911",
      email: "concierge@unknownspace.sg",
      copyright: "© 2026 UnknownSpace Singapore. All rights reserved.",
      paymentMethods: ["Visa", "Mastercard", "Amex", "PayNow"]
    };
  }
}

export default async function Footer() {
  const cfg = await getFooterConfig();

  return (
    <footer className="bg-gradient-to-b from-[#1a2f4c] to-[#0f1b2d] border-t border-[#cba258]/20 pt-24 pb-10 mt-32 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cba258] to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
           <h3 className="text-2xl font-bold tracking-[0.2em] text-white font-playfair uppercase">{cfg.brandName}<span className="text-[#cba258] text-xs align-top">®</span></h3>
           <p className="text-[11px] text-[#a0aabf] tracking-[0.2em] leading-[2.5] pr-8 uppercase">{cfg.tagline}</p>
           <div className="flex gap-4 pt-4">
              <div className="w-10 h-10 rounded-full border border-[#cba258]/30 flex items-center justify-center text-[#cba258] hover:bg-[#cba258] hover:text-[#1a2f4c] transition-all duration-500 cursor-pointer shadow-[0_4px_15px_rgba(203,162,88,0.1)]"><MessageCircle size={16}/></div>
              <div className="w-10 h-10 rounded-full border border-[#cba258]/30 flex items-center justify-center text-[#cba258] hover:bg-[#cba258] hover:text-[#1a2f4c] transition-all duration-500 cursor-pointer shadow-[0_4px_15px_rgba(203,162,88,0.1)]"><Globe size={16}/></div>
              <div className="w-10 h-10 rounded-full border border-[#cba258]/30 flex items-center justify-center text-[#cba258] hover:bg-[#cba258] hover:text-[#1a2f4c] transition-all duration-500 cursor-pointer shadow-[0_4px_15px_rgba(203,162,88,0.1)]"><Share2 size={16}/></div>
           </div>
        </div>

        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10 border-b border-[#cba258]/20 pb-4 inline-block">Shop Selection</h4>
           <ul className="space-y-5 text-[11px] text-[#a0aabf] tracking-[0.2em] list-none pl-0 uppercase">
             {cfg.shopLinks.map((link: any, i: number) => (
               <li key={i}>
                 <Link href={link.href} className={`hover:text-[#cba258] transition-colors duration-300 ${link.highlight ? "text-[#cba258] font-bold" : ""}`}>
                   {link.label}
                 </Link>
               </li>
             ))}
           </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10 border-b border-[#cba258]/20 pb-4 inline-block">Support Hub</h4>
           <ul className="space-y-5 text-[11px] text-[#a0aabf] tracking-[0.2em] list-none pl-0 uppercase">
             {cfg.supportLinks.map((link: any, i: number) => (
               <li key={i}>
                 <Link href={link.href} className="hover:text-[#cba258] transition-colors duration-300">{link.label}</Link>
               </li>
             ))}
           </ul>
        </div>

        <div className="space-y-8">
           <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10 border-b border-[#cba258]/20 pb-4 inline-block">Visit Us</h4>
           <div className="flex items-start gap-5 text-[11px] text-[#a0aabf] tracking-[0.2em] uppercase hover:text-[#cba258] transition-colors duration-300 cursor-pointer">
              <MapPin className="w-4 h-4 shrink-0 mt-1"/>
              <span className="leading-[2.2]">{cfg.address}</span>
           </div>
           <div className="flex items-center gap-5 text-[11px] text-[#a0aabf] tracking-[0.2em] uppercase hover:text-[#cba258] transition-colors duration-300 cursor-pointer">
              <Phone className="w-4 h-4 shrink-0"/>
              <span>{cfg.phone}</span>
           </div>
           <div className="flex items-center gap-5 text-[11px] text-[#a0aabf] tracking-[0.2em] hover:text-[#cba258] transition-colors duration-300 cursor-pointer">
              <Mail className="w-4 h-4 shrink-0"/>
              <span>{cfg.email}</span>
           </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
         <p className="text-[9px] text-[#5c6b89] tracking-[0.3em] uppercase text-center md:text-left font-bold">{cfg.copyright}</p>
         <div className="flex gap-4">
            {cfg.paymentMethods.map((method: string, i: number) => (
              <div key={i} className="h-10 px-5 bg-white/5 border border-white/10 rounded items-center justify-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#a0aabf] hover:text-white hover:border-[#cba258]/50 transition-all duration-300 flex">{method}</div>
            ))}
         </div>
      </div>
    </footer>
  );
}
