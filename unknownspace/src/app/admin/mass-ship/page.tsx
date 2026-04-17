"use client";
import { useState } from "react";
import { Printer, FileSpreadsheet, Download, RefreshCcw, Search, Settings } from "lucide-react";

export default function MassShipmentPage() {
  const [activeTab, setActiveTab] = useState("docs");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
        <div>
           <h1 className="text-3xl font-playfair text-black uppercase tracking-widest">Mass Shipment</h1>
           <p className="text-sm text-zinc-500 tracking-wider mt-2">Generate thermal labels, picklists, and invoices in bulk.</p>
        </div>
        <button className="px-6 py-3 border border-zinc-300 text-black hover:bg-black hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.1em] rounded-sm flex gap-3 items-center shadow-sm">
          <RefreshCcw size={16}/> Sync Live Orders
        </button>
      </div>

      <div className="bg-white border border-zinc-200 rounded-sm shadow-sm flex flex-col xl:flex-row min-h-[700px] overflow-hidden">
         {/* Left Side: Orders list and filters */}
         <div className="flex-1 border-r border-zinc-200 flex flex-col bg-zinc-50/50">
            <div className="flex border-b border-zinc-200 px-8 pt-6 gap-10 bg-white">
               <button className="pb-5 text-sm font-bold uppercase tracking-[0.1em] text-zinc-400 hover:text-black transition-colors border-b-2 border-transparent">Orders To Ship</button>
               <button className="pb-5 text-sm font-bold uppercase tracking-[0.1em] text-black border-b-2 border-black">Generate Documents</button>
            </div>
            
            <div className="p-8 space-y-8 flex-1 flex flex-col">
               {/* Filters */}
               <div className="space-y-6 bg-white p-6 rounded-sm border border-zinc-200 shadow-sm">
                  <div className="flex gap-4 items-center flex-wrap">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold w-36">Order Type:</span>
                     <button className="px-5 py-2 rounded-sm border border-black text-white bg-black text-xs font-bold tracking-widest uppercase">All</button>
                     <button className="px-5 py-2 rounded-sm border border-zinc-200 text-zinc-600 hover:border-black text-xs font-bold tracking-widest uppercase transition-colors bg-zinc-50">Regular Order (0)</button>
                     <button className="px-5 py-2 rounded-sm border border-zinc-200 text-zinc-600 hover:border-black text-xs font-bold tracking-widest uppercase transition-colors bg-zinc-50">Instant (0)</button>
                  </div>
                  <div className="flex gap-4 items-center flex-wrap">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold w-36">Order Status:</span>
                     <button className="px-5 py-2 rounded-sm border border-black text-white bg-black text-xs font-bold tracking-widest uppercase">To Process</button>
                     <button className="px-5 py-2 rounded-sm border border-zinc-200 text-zinc-600 hover:border-black text-xs font-bold tracking-widest uppercase transition-colors bg-zinc-50">Processed</button>
                  </div>
                  <div className="flex gap-4 items-start flex-wrap pt-2 border-t border-zinc-100">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold w-36 mt-2">Shipping Channel:</span>
                     <div className="flex-1 flex flex-wrap gap-3">
                        <button className="px-5 py-2 rounded-sm border border-black text-white bg-black text-[10px] font-bold tracking-widest uppercase">All</button>
                        <button className="px-5 py-2 rounded-sm border border-zinc-200 hover:border-black text-zinc-600 text-[10px] font-bold tracking-widest uppercase transition-all bg-zinc-50">SPX Express (0)</button>
                        <button className="px-5 py-2 rounded-sm border border-zinc-200 hover:border-black text-zinc-600 text-[10px] font-bold tracking-widest uppercase transition-all bg-zinc-50">J&T Express (0)</button>
                        <button className="px-5 py-2 rounded-sm border border-zinc-200 hover:border-black text-zinc-600 text-[10px] font-bold tracking-widest uppercase transition-all bg-zinc-50">Ninja Van (0)</button>
                        <button className="px-5 py-2 rounded-sm border border-zinc-200 hover:border-black text-zinc-600 text-[10px] font-bold tracking-widest uppercase transition-all bg-zinc-50">Instant Delivery (0)</button>
                     </div>
                  </div>
               </div>

               {/* Table Area */}
               <div className="mt-4 border border-zinc-200 rounded-sm overflow-hidden flex flex-col flex-1 shadow-sm bg-white">
                  <div className="bg-zinc-50 p-4 border-b border-zinc-200 flex justify-between items-center">
                     <span className="text-xs font-bold tracking-[0.1em] text-black uppercase">0 Parcels Selected</span>
                     <div className="flex gap-2 text-[10px] font-mono text-zinc-500">
                        Sort By: <span className="text-black">Ship-By-Date (Oldest)</span>
                     </div>
                  </div>
                  <table className="w-full text-left">
                     <thead className="bg-zinc-100 text-[9px] text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-200">
                        <tr>
                           <th className="p-4 w-12 text-center"><input type="checkbox" className="accent-black" /></th>
                           <th className="p-4 font-bold">Order ID</th>
                           <th className="p-4 font-bold">Buyer</th>
                           <th className="p-4 font-bold">Channel</th>
                           <th className="p-4 font-bold">Tracking No.</th>
                        </tr>
                     </thead>
                     <tbody className="flex-1">
                        <tr>
                           <td colSpan={5} className="p-16 text-center">
                              <div className="flex flex-col items-center justify-center gap-6">
                                 <div className="w-24 h-24 rounded-full border border-dashed border-zinc-300 flex items-center justify-center bg-zinc-50">
                                    <FileSpreadsheet size={40} className="text-zinc-300"/>
                                 </div>
                                 <div className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">No Data Available</div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         {/* Right Side: Document Generation Panel */}
         <div className="w-full xl:w-[450px] bg-white flex flex-col border-l-4 border-l-zinc-100">
            <div className="p-8 border-b border-zinc-200 bg-zinc-50">
               <h3 className="text-sm font-bold tracking-[0.2em] text-black uppercase mb-2">Build Shipping Docs</h3>
               <p className="text-[11px] text-zinc-500 tracking-widest uppercase">Configure label template & print settings.</p>
            </div>

            <div className="p-8 space-y-8 flex-1 overflow-y-auto">
               <label className="flex items-center gap-4 cursor-pointer group bg-zinc-50 p-4 border border-zinc-200 rounded-sm hover:border-black transition-colors">
                  <input type="checkbox" className="w-5 h-5 accent-black" />
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-600 group-hover:text-black transition-colors">Generate Picklist</span>
               </label>
               
               <div className="space-y-6 bg-white border border-zinc-300 p-6 rounded-sm relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-full"></div>
                  
                  <label className="flex items-center gap-4 cursor-pointer group relative z-10">
                     <input type="checkbox" className="w-5 h-5 accent-black" defaultChecked />
                     <span className="text-sm font-bold tracking-widest uppercase text-black">Air Waybill / Thermal</span>
                  </label>
                  
                  <div className="pl-9 flex gap-8 relative z-10">
                     <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="waybill_type" className="accent-black" /> 
                        <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-black transition-colors">Normal (A4)</span>
                     </label>
                     <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="waybill_type" className="accent-black" defaultChecked /> 
                        <span className="text-[11px] font-bold uppercase tracking-widest text-black bg-zinc-100 px-3 py-1.5 rounded-sm border border-zinc-200 transition-colors">Thermal (A6)</span>
                     </label>
                  </div>

                  {/* Builder Button injected inside Waybill section */}
                  <div className="pl-9 pt-4 border-t border-zinc-200 relative z-10">
                     <button className="w-full py-4 bg-white border border-zinc-300 text-black hover:bg-black hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center justify-center gap-3 shadow-sm">
                         <Settings size={14} className="animate-spin-slow"/> Label Template Builder
                     </button>
                     <p className="text-[9px] text-zinc-400 text-center mt-3 tracking-widest uppercase leading-loose">Customize columns, logos, and inject FRAGILE warnings automatically before printing.</p>
                  </div>
               </div>

               <label className="flex items-center gap-4 cursor-pointer group bg-zinc-50 p-4 border border-zinc-200 rounded-sm hover:border-black transition-colors">
                  <input type="checkbox" className="w-5 h-5 accent-black" />
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-600 group-hover:text-black transition-colors">Packing List (Excel)</span>
               </label>
            </div>

            <div className="p-8 border-t border-zinc-200 bg-white">
               <button disabled className="w-full py-5 bg-zinc-100 text-zinc-400 border border-zinc-200 uppercase text-xs font-bold tracking-[0.2em] rounded-sm flex items-center justify-center gap-3 transition-all cursor-not-allowed">
                 <Download size={18}/> Generate Selected (0)
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
