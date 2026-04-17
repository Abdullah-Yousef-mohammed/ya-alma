"use client";
import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [currency, setCurrency] = useState("SGD");
  return (
    <header className="w-full bg-white/70 backdrop-blur-xl border-b border-[#EFEBE6] flex flex-col pt-10 pb-6 sticky top-0 z-50 shadow-[0_4px_40px_rgba(0,0,0,0.01)] transition-all">
      
      {/* Main Nav Area */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex justify-between items-center mb-10">
         {/* Left Side (Empty on Desktop, Menu on Mobile) */}
         <div className="flex-1 flex md:hidden items-center">
            <Menu className="w-6 h-6 text-ya-navy cursor-pointer" />
         </div>
         <div className="flex-1 hidden md:flex items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-[#5c6b89]">
            <select 
               value={currency} 
               onChange={(e) => setCurrency(e.target.value)}
               className="bg-transparent border-none outline-none cursor-pointer hover:text-ya-gold transition-colors focus:ring-0"
            >
               <option value="SGD">SGD - S$</option>
               <option value="MYR">MYR - RM</option>
               <option value="USD">USD - $</option>
            </select>
            <div className="w-[1px] h-3 bg-[#EFEBE6]"></div>
            <Link href="/admin" className="hover:text-ya-gold transition-colors">Concierge Login</Link>
         </div>

         {/* Center Logo */}
         <Link href="/" className="flex flex-col items-center flex-1 shrink-0 relative group">
           <h1 className="text-3xl md:text-5xl font-playfair tracking-[0.15em] bg-gradient-to-r from-ya-navy via-[#3a5a8c] to-ya-navy bg-clip-text text-transparent uppercase text-center transition-all duration-700">UNKNOWNSPACE</h1>
           <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-ya-gold uppercase mt-2 font-bold group-hover:tracking-[0.5em] transition-all duration-700">.SG</span>
           <div className="absolute -bottom-4 inset-x-0 h-px bg-gradient-to-r from-transparent via-ya-gold to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
         </Link>

         {/* Right Actions */}
         <div className="flex items-center gap-8 justify-end flex-1">
            <Link href="/account" className="flex items-center gap-2 text-[#a0aabf] hover:text-ya-navy transition-colors group">
               <User className="w-4 h-4 md:hidden" />
               <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-ya-gold transition-colors duration-300">Account</span>
            </Link>
            <button className="flex items-center gap-2 text-[#a0aabf] hover:text-ya-navy transition-colors group">
               <Search className="w-4 h-4 md:hidden" />
               <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-ya-gold transition-colors duration-300">Search</span>
            </button>
            <Link href="/cart" className="flex items-center gap-2 text-[#a0aabf] hover:text-ya-navy transition-colors group">
               <ShoppingBag className="w-4 h-4 md:hidden" />
               <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-ya-gold transition-colors duration-300">Cart (0)</span>
            </Link>
         </div>
      </div>
      
      {/* Bottom Links */}
      <nav className="hidden md:flex items-center justify-center gap-14 text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#5c6b89]">
         <Link href="/" className="hover:text-ya-gold transition-colors text-ya-navy relative group py-1">
             Home
             <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-ya-gold"></div>
         </Link>
         <Link href="/new-launch" className="hover:text-ya-gold transition-colors relative group py-1">
             New Launch
             <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ya-gold group-hover:w-full transition-all duration-300"></div>
         </Link>
         <Link href="/arabiyat-prestige" className="hover:text-ya-gold transition-colors relative group py-1">
             Exclusive Brands
             <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ya-gold group-hover:w-full transition-all duration-300"></div>
         </Link>
         <Link href="/best-sellers" className="hover:text-ya-gold transition-colors relative group py-1">
             Best Sellers
             <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ya-gold group-hover:w-full transition-all duration-300"></div>
         </Link>
         <Link href="/contact" className="hover:text-ya-gold transition-colors relative group py-1">
             Bespoke Contact
             <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ya-gold group-hover:w-full transition-all duration-300"></div>
         </Link>
      </nav>
    </header>
  );
}
