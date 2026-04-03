"use client";

import { useCart } from "@/context/CartContext";
import { Search, ShoppingCart, Bell, HelpCircle, Globe } from "lucide-react";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full shadow-md" style={{ backgroundColor: "var(--shopee-primary)" }}>
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between max-w-7xl mx-auto w-full px-4 py-1 text-white/90 text-[13px] font-medium">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white hover:opacity-100 opacity-80 transition">Seller Centre</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-white hover:opacity-100 opacity-80 transition">Download</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-white hover:opacity-100 opacity-80 transition">Follow us on Facebook</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="flex items-center space-x-1 hover:text-white hover:opacity-100 opacity-80 transition">
            <Bell size={14} /> <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-white hover:opacity-100 opacity-80 transition">
            <HelpCircle size={14} /> <span>Help</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-white hover:opacity-100 opacity-80 transition">
            <Globe size={14} /> <span>English</span>
          </a>
          <a href="#" className="font-bold hover:text-white hover:opacity-100 opacity-80 transition">Sign Up</a>
          <span className="opacity-40">|</span>
          <a href="#" className="font-bold hover:text-white hover:opacity-100 opacity-80 transition">Login</a>
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 py-4 pt-2">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <h1 className="text-white text-3xl font-extrabold tracking-tight flex items-center space-x-2">
            <ShoppingCart className="text-white mb-1" size={32} />
            <span>Shopee Clone</span>
          </h1>
        </div>

        {/* Search Input Container */}
        <div className="flex-grow max-w-4xl relative flex flex-col justify-center">
          <div className="flex w-full bg-white rounded-sm p-1 shadow-sm">
            <input 
              type="text" 
              placeholder="Sign Up and Get 100% OFF Code!" 
              className="flex-grow px-3 py-2 text-sm text-gray-800 outline-none w-full bg-transparent"
            />
            <button className="bg-[#ee4d2d] hover:bg-[#f53d2d] text-white px-6 py-2 rounded-sm transition flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>
          {/* Trending Tags below search */}
          <div className="hidden lg:flex space-x-4 text-xs text-white/90 mt-2 px-1">
            {['iPhone 15', 'Crocs', 'Headphone', 'Luggage', 'Powerbank', 'Monitor'].map(item => (
              <a key={item} href="#" className="hover:text-white">{item}</a>
            ))}
          </div>
        </div>

        {/* Cart Icon  */}
        <div className="ml-10 relavtive cursor-pointer pr-4 group">
            <div className="relative p-2">
            <ShoppingCart className="text-white group-hover:scale-110 transition" size={30} />
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#ee4d2d] text-[11px] font-extrabold px-2 py-[1px] rounded-[10px] border-2 border-[#ee4d2d] shadow-sm transform translate-x-1 -translate-y-1">
                {cartCount > 99 ? '99+' : cartCount}
                </span>
            )}
            </div>
        </div>
      </div>
    </header>
  );
}
