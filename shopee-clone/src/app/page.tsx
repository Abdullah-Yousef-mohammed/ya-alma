"use client";

import Image from "next/image";
import { ChevronRight, ShieldCheck, TicketCheck, Undo2, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching from the backend API we just created!
  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 mt-6 flex flex-col gap-6 w-full pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="flex gap-2 w-full h-[240px] md:h-[300px]">
        {/* Left Main Carousel */}
        <div className="flex-[2.5] relative rounded overflow-hidden shadow-sm h-full bg-white object-cover">
           <img 
              src="/hero_banner.png" 
              alt="4.4 Mega Sale Banner" 
              className="w-full h-full object-cover"
           />
        </div>
        
        {/* Right Banners */}
        <div className="flex-1 hidden md:flex flex-col gap-2 h-full">
          <div className="flex-1 rounded overflow-hidden shadow-sm relative group bg-gradient-to-r from-[#ff7a59] to-[#ee4d2d] flex items-center justify-center text-white p-4">
             <div className="z-10 text-center">
                <span className="font-bold text-lg block">RM15 Free Shipping</span>
                <span className="text-xs bg-white text-[#ee4d2d] px-2 py-1 mt-1 rounded-full font-bold shadow-sm">Claim Now</span>
             </div>
          </div>
          <div className="flex-1 rounded overflow-hidden shadow-sm relative group bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white p-4">
             <div className="z-10 text-center">
                <span className="font-bold text-lg block">Brand Super Deals</span>
                <span className="text-xs backdrop-blur bg-black/20 text-white px-2 py-1 mt-1 rounded-full font-bold shadow-sm">Up to 80% OFF</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Row */}
      <section className="bg-white rounded shadow-sm p-4 w-full">
         <div className="flex justify-between items-start text-center overflow-x-auto hide-scrollbar">
            {[
              { title: "Free Shipping", icon: "🚚", color: "text-[#ee4d2d]" },
              { title: "10% Cashback", icon: "💵", color: "text-green-500" },
              { title: "Shopee Mall", icon: "🛍️", color: "text-red-600" },
              { title: "Coins Rewards", icon: "🪙", color: "text-yellow-500" },
              { title: "ShopeePay Deals", icon: "💳", color: "text-blue-500" },
              { title: "Games & Prizes", icon: "🎮", color: "text-purple-500" },
              { title: "Local Deals", icon: "📍", color: "text-teal-500" },
              { title: "Vouchers", icon: "🎫", color: "text-orange-600" },
            ].map((srv, idx) => (
               <div key={idx} className="flex flex-col items-center justify-center min-w-[90px] cursor-pointer hover:-translate-y-1 transition transform duration-200">
                  <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-2xl bg-gray-50 mb-2 shadow-sm">
                    {srv.icon}
                  </div>
                  <span className="text-[12px] text-gray-700 font-medium px-1">{srv.title}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Shocking Sale */}
      <section className="bg-white rounded overflow-hidden shadow-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-1 text-[#ee4d2d]">
                <Zap size={24} className="fill-[#ee4d2d] text-[#ee4d2d]" />
                <h2 className="text-2xl font-black italic tracking-tighter">SHOCKING SALE</h2>
             </div>
             <div className="flex space-x-1 text-white font-bold">
               <span className="bg-black px-2 py-1 rounded-sm text-sm">02</span><span className="text-black">:</span>
               <span className="bg-black px-2 py-1 rounded-sm text-sm">45</span><span className="text-black">:</span>
               <span className="bg-black px-2 py-1 rounded-sm text-sm">12</span>
             </div>
          </div>
          <a href="#" className="flex items-center text-[#ee4d2d] hover:underline text-sm font-medium">
             Sell All <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="p-4 flex gap-4 overflow-x-auto hide-scrollbar">
           {[1,2,3,4,5,6].map((item) => (
             <div key={item} className="min-w-[170px] flex flex-col cursor-pointer group hover:opacity-90 transition">
                <div className="relative pt-[100%] bg-gray-100 rounded">
                   <div className="absolute top-0 right-0 bg-[#fceea7] text-[#ee4d2d] text-xs font-bold px-1.5 py-1 z-10 font-sans tracking-tight shadow-sm">
                      -50%
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center text-5xl">
                      {['👟', '📱', '🎧', '🎮', '⌚', '📸'][item-1]}
                   </div>
                </div>
                <div className="mt-3 flex flex-col items-center text-center">
                   <span className="text-[#ee4d2d] font-bold text-xl">RM 15.00</span>
                   <div className="w-full bg-gray-200 rounded-full h-3.5 mt-2 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#ffb445] to-[#ee4d2d] w-[75%] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-[9px] text-white font-bold drop-shadow-sm uppercase">Selling Fast</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Shopee Mall */}
      <section className="bg-white rounded shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
           <div className="flex items-center space-x-8">
              <h2 className="text-red-600 text-lg font-bold uppercase tracking-tight flex items-center space-x-1">
                 <span>Shopee Mall</span>
              </h2>
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
                 <span className="flex items-center space-x-1"><Undo2 size={16} className="text-red-600"/> <span>15 Days Return</span></span>
                 <span className="flex items-center space-x-1"><ShieldCheck size={16} className="text-red-600"/> <span>100% Authentic</span></span>
                 <span className="flex items-center space-x-1"><TicketCheck size={16} className="text-red-600"/> <span>Free Shipping</span></span>
              </div>
           </div>
           <a href="#" className="flex items-center text-red-600 hover:underline text-sm font-medium">
             Sell All <ChevronRight size={16} />
           </a>
        </div>
        <div className="p-4 flex gap-4 overflow-x-auto hide-scrollbar">
           {[
              {brand: "Apple", item: "💻", color: "bg-gray-800", text: "text-white"},
              {brand: "Samsung", item: "📱", color: "bg-blue-600", text: "text-white"},
              {brand: "Nike", item: "👟", color: "bg-orange-500", text: "text-white"},
              {brand: "L'Oreal", item: "💄", color: "bg-pink-500", text: "text-white"},
              {brand: "Sony", item: "📸", color: "bg-teal-500", text: "text-white"},
           ].map((mall, idx) => (
             <div key={idx} className="min-w-[200px] rounded group cursor-pointer border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition">
                <div className={`h-32 w-full flex items-center justify-center text-5xl rounded-t object-cover ${mall.color} ${mall.text}`}>
                   {mall.item}
                </div>
                <div className="p-3 bg-white  flex flex-col items-center justify-center rounded-b">
                   <div className="font-bold text-gray-800">{mall.brand}</div>
                   <div className="text-xs text-red-500 font-medium">Up to 50% Off</div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Daily Discover */}
      <section className="w-full">
         <div className="bg-white px-0 py-0 flex w-full sticky top-[72px] z-40 border-b-4 border-[#ee4d2d] mb-4 shadow-sm">
            <div className="flex-1 py-4 text-center font-semibold text-[#ee4d2d]">DAILY DISCOVER</div>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {loading ? (
              // Loading Skeletons
              Array(12).fill(null).map((_, i) => (
                <div key={i} className="animate-pulse bg-white p-2 rounded flex flex-col gap-2 min-h-[200px]">
                  <div className="w-full pt-[100%] bg-gray-200"></div>
                  <div className="h-4 bg-gray-200 w-3/4 rounded mt-2"></div>
                  <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                  <div className="mt-auto h-6 bg-gray-200 w-1/3 rounded"></div>
                </div>
              ))
            ) : (
              // Actual Products from Backend
              products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))
            )}
         </div>

         {!loading && (
           <div className="flex justify-center mt-6">
              <button className="bg-white border hover:bg-gray-50 text-gray-700 w-full max-w-[400px] py-3 rounded text-sm shadow-sm transition">
                See More
              </button>
           </div>
         )}
      </section>

    </main>
  );
}
