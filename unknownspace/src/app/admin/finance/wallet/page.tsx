"use client";
import { Wallet, ArrowDownToLine, ArrowUpRight, History, Download, Landmark } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="mb-6 flex justify-between items-center pb-4 border-b border-zinc-200">
         <div>
            <h1 className="text-3xl font-playfair text-black uppercase tracking-widest">Seller Wallet</h1>
            <p className="text-sm text-zinc-500 tracking-wider mt-2">Manage your balance, withdrawals, and transactions.</p>
         </div>
         <button className="bg-white border border-zinc-300 text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-sm flex items-center gap-2">
            <Landmark size={16}/> Link Bank Account
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Balance Card */}
         <div className="bg-gradient-to-br from-zinc-100 via-white to-white border border-zinc-200 rounded-sm p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-bl-full shadow-inner transition-colors"></div>
            <div className="relative z-10">
               <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2 flex items-center gap-2">
                  <Wallet size={14} className="text-black"/> Available Balance
               </h2>
               <div className="text-4xl font-playfair text-black my-6 tracking-wide">RM 14,250.00</div>
               
               <div className="grid grid-cols-2 gap-4 mt-8">
                  <button className="bg-black hover:bg-zinc-800 text-white py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2">
                     <ArrowDownToLine size={16}/> Withdraw
                  </button>
                  <button className="bg-white border border-zinc-300 text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors rounded-sm flex items-center justify-center gap-2">
                     <ArrowUpRight size={16}/> Top Up
                  </button>
               </div>
            </div>
         </div>

         {/* Stats */}
         <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-200 rounded-sm p-8 flex flex-col justify-center shadow-sm">
               <div className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mb-4">Pending Income (Orders to be Completed)</div>
               <div className="text-2xl font-mono text-black">RM 3,240.50</div>
               <button className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mt-4 hover:underline w-fit">View Details &rarr;</button>
            </div>
            <div className="bg-white border border-zinc-200 rounded-sm p-8 flex flex-col justify-center relative overflow-hidden shadow-sm">
               <div className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mb-4">Total Withdrawals (This Month)</div>
               <div className="text-2xl font-mono text-black">RM 8,500.00</div>
               <div className="absolute right-0 bottom-0 text-[100px] text-zinc-100 select-none -mb-8 -mr-4 pointer-events-none font-playfair">RM</div>
            </div>
         </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-zinc-200 rounded-sm shadow-sm mt-12 overflow-hidden">
         <div className="p-6 border-b border-zinc-200 flex justify-between items-center bg-zinc-50">
            <h3 className="text-sm font-bold tracking-[0.15em] text-black uppercase flex items-center gap-2">
               <History size={16}/> Recent Transactions
            </h3>
            <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-zinc-300">
               <Download size={14}/> Download Statement
            </button>
         </div>
         <div className="p-6">
            <table className="w-full text-left">
               <thead className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-100">
                  <tr>
                     <th className="pb-4 font-bold">Date & Time</th>
                     <th className="pb-4 font-bold">Transaction Type</th>
                     <th className="pb-4 font-bold">Order ID / Ref No.</th>
                     <th className="pb-4 font-bold text-right">Amount (RM)</th>
                     <th className="pb-4 font-bold text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-zinc-100">
                  <tr className="hover:bg-zinc-50 transition-colors">
                     <td className="py-4 text-xs font-mono text-zinc-500">2026-04-14 14:30</td>
                     <td className="py-4">
                        <div className="text-sm text-black font-medium">Income from Order</div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Order Completion</div>
                     </td>
                     <td className="py-4 text-xs font-mono text-black">230414ABCDEFGH</td>
                     <td className="py-4 text-right text-green-700 font-mono font-bold">+ 300.00</td>
                     <td className="py-4 text-right">
                        <span className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-2 py-1 uppercase tracking-widest rounded-sm">Successful</span>
                     </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 transition-colors">
                     <td className="py-4 text-xs font-mono text-zinc-500">2026-04-13 09:15</td>
                     <td className="py-4">
                        <div className="text-sm text-black font-medium">Withdrawal</div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">To RHB Bank BHD (***4567)</div>
                     </td>
                     <td className="py-4 text-xs font-mono text-black">W-987654321</td>
                     <td className="py-4 text-right text-red-700 font-mono font-bold">- 1,500.00</td>
                     <td className="py-4 text-right">
                        <span className="text-[9px] bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 uppercase tracking-widest rounded-sm">Processing</span>
                     </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 transition-colors">
                     <td className="py-4 text-xs font-mono text-zinc-500">2026-04-12 11:00</td>
                     <td className="py-4">
                        <div className="text-sm text-black font-medium">Seller Value-added Services</div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Shopee Ads Top-up</div>
                     </td>
                     <td className="py-4 text-xs font-mono text-black">ADS-123456</td>
                     <td className="py-4 text-right text-red-700 font-mono font-bold">- 50.00</td>
                     <td className="py-4 text-right">
                        <span className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-2 py-1 uppercase tracking-widest rounded-sm">Successful</span>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
