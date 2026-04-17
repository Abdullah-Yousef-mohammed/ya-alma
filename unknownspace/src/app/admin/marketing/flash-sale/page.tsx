import prisma from "@/lib/prisma";
import { Zap, Clock, Calendar, CheckCircle2, Search } from "lucide-react";

export default async function FlashSalePage() {
  const products = await prisma.product.findMany({ take: 10 });

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-32">
      <div className="flex justify-between items-center border-b border-zinc-200 pb-6">
        <div>
           <h1 className="text-3xl font-playfair text-black uppercase tracking-widest flex items-center gap-3"><Zap size={28} className="text-orange-500"/> Flash Sales Setup</h1>
           <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2 font-bold">Drive Urgency, Maximize Conversions</p>
        </div>
        <button className="px-8 py-3 bg-black hover:bg-zinc-800 text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase rounded-sm flex items-center gap-2 shadow-sm">
          <CheckCircle2 size={16}/> Deploy Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Config Panel */}
         <div className="bg-white border border-zinc-200 rounded-sm p-8 shadow-sm relative overflow-hidden h-fit">
            <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-8 border-b border-zinc-100 pb-4">Campaign Details</h2>
            
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-2">Campaign Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g. Ramadan Midnight Sale" className="w-full bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest"/>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-2"><Calendar size={12}/> Target Date <span className="text-red-500">*</span></label>
                  <input type="date" className="w-full bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest appearance-none"/>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-2"><Clock size={12}/> Start Time <span className="text-red-500">*</span></label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 appearance-none">
                       <option>00:00 (Midnight)</option>
                       <option>12:00 (Noon)</option>
                       <option>18:00 (Evening)</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 flex items-center gap-2"><Clock size={12}/> End Time <span className="text-red-500">*</span></label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 appearance-none">
                       <option>23:59</option>
                    </select>
                 </div>
               </div>

               <div className="space-y-2 pt-4 border-t border-zinc-100">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-black flex items-center gap-2">Global Discount Logic</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="20" className="w-24 bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400"/>
                    <select className="flex-1 bg-zinc-50 border border-zinc-200 p-4 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 appearance-none">
                       <option>% Percentage Off</option>
                       <option>$ Fixed Amount Off</option>
                    </select>
                  </div>
               </div>
            </div>
         </div>

         {/* Product Selection */}
         <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-sm p-8 shadow-sm relative overflow-hidden">
             <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
               <h2 className="text-xl font-playfair text-black uppercase tracking-widest">Select Nominees</h2>
               <div className="relative w-64">
                 <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                 <input type="text" placeholder="Search product..." className="w-full bg-zinc-50 border border-zinc-200 px-9 py-2 text-xs outline-none focus:border-zinc-400 text-black rounded-sm"/>
               </div>
             </div>

             <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-hide">
                {products.length === 0 && (
                   <div className="text-center py-20 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">No active products to nominate.</div>
                )}
                {products.map(product => (
                  <div key={product.id} className="p-4 border border-zinc-100 rounded-sm bg-zinc-50 hover:border-zinc-300 transition-colors flex items-center gap-6">
                    <div className="relative inline-block w-6 align-middle select-none transition duration-200 ease-in shrink-0">
                        <input type="checkbox" className="toggle-checkbox absolute block w-4 h-4 rounded-sm bg-white border border-zinc-300 appearance-none cursor-pointer top-0 left-0 checked:bg-black transition-all"/>
                    </div>
                    <div className="w-12 h-12 bg-white border border-zinc-200 p-1 shrink-0">
                       <img src="/ph-1.jpg" alt="" className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                       <div className="text-xs font-bold text-black tracking-wider mb-1 line-clamp-1">{product.name}</div>
                       <div className="text-[9px] text-zinc-600 uppercase tracking-widest">ID: {product.id.slice(0, 8)}</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xs font-mono text-black font-bold">SGD {product.price.toFixed(2)}</div>
                       <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Stock: {product.inventory}</div>
                    </div>
                  </div>
                ))}
             </div>
         </div>
      </div>
    </div>
  );
}
