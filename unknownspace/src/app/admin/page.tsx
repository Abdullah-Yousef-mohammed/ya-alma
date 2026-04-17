import prisma from "@/lib/prisma";

export default async function BusinessInsights() {
  const ordersCount = await prisma.order.count();
  
  const salesResult = await prisma.order.aggregate({
    _sum: { totalAmount: true },
    where: { status: { not: "CANCELED" } }
  });
  const totalSales = salesResult._sum.totalAmount || 0;

  const productsCount = await prisma.product.count();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cba258]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a2f4c]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header section with gradient line */}
      <div className="relative pb-6">
        <div className="flex justify-between items-end border-b border-[#EFEBE6] pb-8 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="w-8 h-[1px] bg-[#cba258]"></span>
               <span className="text-[10px] text-[#cba258] uppercase font-bold tracking-[0.3em]">Executive Overview</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-playfair text-[#1a2f4c] uppercase tracking-widest drop-shadow-sm flex items-center gap-4">
              Intelligence
            </h1>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-[#1a2f4c] to-[#111d32] border border-[#1a2f4c] text-[#cba258] hover:from-[#111d32] hover:to-[#0f1b2d] hover:shadow-[0_8px_30px_rgba(26,47,76,0.3)] hover:-translate-y-0.5 transition-all duration-500 uppercase text-[10px] font-bold tracking-[0.2em] rounded-md">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics Dashboard */}
      <div>
        <h2 className="text-sm font-playfair text-[#a0aabf] tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
           Store Operations
           <div className="flex-1 h-[1px] bg-gradient-to-r from-[#EFEBE6] to-transparent"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          <MetricCard title="Gross Volume" value={`SGD ${totalSales.toFixed(2)}`} change="+15.3%" isUp={true} />
          <MetricCard title="Total Transactions" value={ordersCount.toString()} change="+8.4%" isUp={true} />
          <MetricCard title="Active Listings" value={productsCount.toString()} change="+2.0%" isUp={true} />
          <MetricCard title="Conversion Rate" value="4.2%" change="+1.2%" isUp={true} />
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
         {/* Main Chart Area */}
         <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-[#EFEBE6] rounded-xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:border-[#cba258]/30 transition-colors duration-500">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#cba258]/10 to-transparent rounded-bl-[100%] pointer-events-none transition-opacity fade-in duration-1000 opacity-50 group-hover:opacity-100"></div>
           
           <div className="flex justify-between items-start mb-10 relative z-10">
              <h3 className="text-xs font-bold tracking-[0.2em] text-[#1a2f4c] uppercase">Trajectory</h3>
              <span className="text-[10px] bg-[#F8F9FA] px-3 py-1 text-[#5c6b89] tracking-widest uppercase rounded">YDT Simulation</span>
           </div>

           <div className="h-72 flex flex-col items-center justify-center border border-dashed border-[#EFEBE6] rounded-lg bg-[#FDFCFA]/50 relative z-10 overflow-hidden group-hover:border-[#cba258]/30 transition-colors duration-500">
             <div className="flex items-end gap-3 h-40 mt-auto mb-6 border-b border-[#EFEBE6] pb-1 w-4/5 justify-between px-6 z-10">
                {[4, 6, 8, 5, 9, 12, 10, 16, 20].map((h, i) => (
                  <div key={i} className="w-10 bg-gradient-to-t from-[#1a2f4c] to-[#2a456c] rounded-t-sm hover:from-[#cba258] hover:to-[#e4cd9b] transition-all duration-500 cursor-pointer shadow-[0_4px_10px_rgba(26,47,76,0.1)] relative group/bar" style={{ height: `${h * 10}px` }}>
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white border border-[#EFEBE6] shadow-xl text-[#1a2f4c] text-[10px] font-bold px-2 py-1 rounded">{(h*1.5).toFixed(1)}k</div>
                  </div>
                ))}
             </div>
           </div>
         </div>

         {/* Traffic Sources */}
         <div className="bg-white/80 backdrop-blur-xl border border-[#EFEBE6] rounded-xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.02)] relative">
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#111d32] via-[#cba258] to-[#111d32] opacity-80 rounded-t-xl"></div>
           
           <h3 className="text-xs font-bold tracking-[0.2em] text-[#1a2f4c] uppercase mb-10">Channels</h3>
           
           <div className="space-y-8">
             <TrafficRow title="Organic Search" amount={totalSales * 0.7} percentage="70%" change="+26.87%" />
             <div className="h-[1px] bg-gradient-to-r from-[#EFEBE6] to-transparent"></div>
             
             <TrafficRow title="Direct Link" amount={totalSales * 0.25} percentage="25%" change="+10.02%" />
             <div className="h-[1px] bg-gradient-to-r from-[#EFEBE6] to-transparent"></div>
             
             <TrafficRow title="Social Media" amount={totalSales * 0.05} percentage="5%" change="+2.40%" />
           </div>
         </div>
      </div>
    </div>
  );
}

function TrafficRow({ title, amount, percentage, change }: { title: string, amount: number, percentage: string, change: string }) {
  return (
    <div className="flex justify-between items-end group cursor-default">
      <div>
         <div className="text-[10px] text-[#a0aabf] uppercase tracking-widest mb-2 font-bold bg-[#F8F9FA] w-fit px-3 py-1 rounded">{title}</div>
         <div className="text-2xl font-playfair text-[#1a2f4c] group-hover:text-[#cba258] transition-colors duration-300">SGD {amount.toFixed(2)}</div>
         <div className="text-[10px] text-[#5c6b89] tracking-widest uppercase mt-1 opacity-70">{percentage} of Volume</div>
      </div>
      <div className="text-emerald-700 text-[10px] font-bold tracking-wider bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">{change}</div>
    </div>
  );
}

function MetricCard({ title, value, change, isUp }: { title: string, value: string, change: string, isUp: boolean }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-[#EFEBE6] rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#cba258]/50 hover:shadow-[0_12px_40px_rgba(203,162,88,0.1)] transition-all duration-500 group cursor-pointer relative overflow-hidden">
      {/* Premium accent hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cba258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#cba258] to-[#e4cd9b] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
      
      <div className="text-[10px] text-[#a0aabf] uppercase tracking-[0.2em] font-bold mb-6 relative z-10">{title}</div>
      
      <div className="text-4xl font-playfair bg-gradient-to-r from-[#1a2f4c] to-[#3a5a8c] bg-clip-text text-transparent mb-6 relative z-10 truncate group-hover:from-[#cba258] group-hover:to-[#e4cd9b] transition-all duration-500">{value}</div>
      
      <div className={`text-[10px] font-bold tracking-widest w-fit px-2 py-1 rounded relative z-10 border ${isUp ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-rose-700 bg-rose-50 border-rose-100'}`}>
        {change} <span className="text-opacity-60 text-inherit font-normal ml-1">vs Prior</span>
      </div>
    </div>
  );
}
