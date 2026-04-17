"use client";
import { Megaphone, Tag, Zap, TicketPercent, Presentation } from "lucide-react";

export default function MarketingCentrePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="mb-8 border-b border-zinc-200 pb-4">
         <h1 className="text-3xl font-playfair text-black uppercase tracking-widest flex items-center gap-4">
            <Megaphone className="text-black"/> Marketing Centre
         </h1>
         <p className="text-sm text-zinc-500 tracking-wider mt-2">Boost your sales with powerful promotional tools and campaigns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <MarketingCard 
            icon={<Zap size={32} className="text-black group-hover:scale-110 transition-transform"/>}
            title="Flash Sales"
            description="Create time-limited massive discounts to drive urgent purchases and clear inventory quickly."
            status="Active"
         />
         <MarketingCard 
            icon={<TicketPercent size={32} className="text-black group-hover:scale-110 transition-transform"/>}
            title="Shop Vouchers"
            description="Create discount codes and vouchers for followers or specific targeted products."
            status="3 Running"
         />
         <MarketingCard 
            icon={<Tag size={32} className="text-black group-hover:scale-110 transition-transform"/>}
            title="Discount Promotions"
            description="Set percentage or fixed discounts on single products or entire categories."
            status="Create New"
         />
         <MarketingCard 
            icon={<Presentation size={32} className="text-black group-hover:scale-110 transition-transform"/>}
            title="Affiliate Marketing"
            description="Allow influencers to promote your products for a commission. Boost reach organically."
            status="Join Program"
         />
      </div>

      <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 mt-12">
         <div className="max-w-2xl relative z-10">
            <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-4">Upcoming Platform Campaigns</h2>
            <p className="text-sm text-zinc-500 tracking-wider mb-8 flex items-center gap-2"><Zap className="text-orange-500" size={16}/> Join mega campaigns to get 5x more visibility across the platform.</p>
            
            <div className="border border-zinc-200 bg-zinc-50 p-6 rounded-sm flex justify-between items-center shadow-sm">
               <div>
                  <div className="text-xs text-black font-bold tracking-[0.2em] uppercase mb-1">Ramadan Mega Sale 2026</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Registration ends in 2 days</div>
               </div>
               <button className="bg-black text-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors rounded-sm shadow-sm">Nominate Products</button>
            </div>
         </div>
      </div>
    </div>
  );
}

function MarketingCard({ icon, title, description, status }: any) {
  return (
    <div className="bg-white border border-zinc-200 p-8 rounded-sm hover:border-black transition-colors group cursor-pointer relative overflow-hidden shadow-sm">
       <div className="absolute top-0 right-0 p-4">
          <span className="text-[9px] font-bold uppercase tracking-widest text-black bg-zinc-100 border border-zinc-200 px-2 py-1 rounded-sm">{status}</span>
       </div>
       <div className="mb-6 bg-zinc-50 w-16 h-16 rounded-full flex items-center justify-center border border-zinc-200 group-hover:border-black transition-colors">
          {icon}
       </div>
       <h3 className="text-base font-bold text-black uppercase tracking-wider mb-3">{title}</h3>
       <p className="text-xs text-zinc-500 tracking-wide leading-relaxed">{description}</p>
    </div>
  );
}
