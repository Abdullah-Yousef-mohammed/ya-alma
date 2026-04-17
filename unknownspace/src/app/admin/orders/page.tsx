import Link from "next/link";
import prisma from "@/lib/prisma";
import { PackageOpen, Download, Search } from "lucide-react";

export default async function OrdersPage({ searchParams }: { searchParams: { tab?: string } }) {
  const awaitedParams = await searchParams;
  const activeTab = awaitedParams?.tab || "All";
  const tabs = ["All", "Unpaid", "To Ship", "Shipping", "Completed", "Cancellation", "Return/Refund"];

  let whereClause = {};
  if (activeTab === "Unpaid") whereClause = { status: "UNPAID" };
  if (activeTab === "To Ship") whereClause = { status: "TO_SHIP" };
  
  const orders = await prisma.order.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
    include: {
       orderItems: {
          include: { product: true }
       }
    }
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
        <h1 className="text-3xl font-playfair text-black uppercase tracking-widest">My Orders</h1>
        <button className="px-6 py-2 border border-zinc-300 text-black hover:bg-black hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em] rounded-sm flex gap-2 items-center">
          <Download size={14}/> Export
        </button>
      </div>

      <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden">
         <div className="flex border-b border-zinc-200 overflow-x-auto scrollbar-hide py-2 px-4 gap-4">
            {tabs.map(tab => (
               <Link 
                 key={tab} 
                 href={`/admin/orders?tab=${tab}`}
                 className={`whitespace-nowrap pb-3 pt-3 px-6 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeTab === tab ? 'text-black border-black bg-zinc-50' : 'text-zinc-500 border-transparent hover:text-black hover:bg-zinc-50'}`}
               >
                 {tab} {tab === "All" && `(${orders.length})`}
               </Link>
            ))}
         </div>

         <div className="p-6 bg-zinc-50 border-b border-zinc-100 flex gap-4">
            <div className="relative w-full max-w-lg">
               <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
               <input type="text" placeholder="Search Order ID, Buyer Username..." className="w-full bg-white border border-zinc-200 px-10 py-4 text-xs outline-none focus:border-zinc-400 text-black rounded-sm transition-colors"/>
            </div>
            <button className="bg-white border border-zinc-200 text-black px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-100 transition-colors rounded-sm">Search</button>
         </div>

         <div className="p-0">
            <table className="w-full text-left">
               <thead className="bg-zinc-50 text-[10px] text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-200">
                  <tr>
                     <th className="p-6 font-bold min-w-[300px]">Product(s)</th>
                     <th className="p-6 font-bold text-center">Order Total</th>
                     <th className="p-6 font-bold text-center">Status</th>
                     <th className="p-6 font-bold text-center">Customer</th>
                     <th className="p-6 font-bold text-center">Method</th>
                     <th className="p-6 font-bold text-center">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-zinc-100">
                  {orders.length === 0 && (
                     <tr>
                        <td colSpan={6} className="text-center py-24 text-zinc-400 uppercase tracking-widest text-xs font-bold">No orders found in this category.</td>
                     </tr>
                  )}
                  {orders.map(order => (
                     <tr key={order.id} className="hover:bg-zinc-50 transition-colors">
                        <td className="p-6">
                            {order.orderItems.map((item, idx) => (
                               <div key={idx} className="flex gap-6 items-center mb-4 last:mb-0">
                                  <div className="w-16 h-16 bg-white border border-zinc-200 rounded-sm p-1 shrink-0 relative overflow-hidden flex items-center justify-center">
                                     <img src="/ph-1.jpg" alt="" className="w-full h-full object-cover opacity-80" />
                                  </div>
                                  <div>
                                     <div className="text-sm font-bold text-black tracking-wider mb-2">{item.product.name}</div>
                                     <div className="text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-100 px-2 py-0.5 rounded-sm w-fit border border-zinc-200">Price: SGD {item.price}</div>
                                     <div className="text-[10px] font-mono text-zinc-500 mt-1 font-bold">Qty: {item.quantity}</div>
                                  </div>
                               </div>
                            ))}
                        </td>
                        <td className="p-6 text-center border-l border-zinc-100">
                           <div className="text-lg font-mono text-black font-bold mb-2">SGD {order.totalAmount.toFixed(2)}</div>
                           <div className="text-[9px] text-zinc-500 uppercase tracking-widest">Paid via {order.paymentMethod}</div>
                        </td>
                        <td className="p-6 text-center border-l border-zinc-100">
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-50 px-3 py-1.5 rounded-sm border border-orange-200">{order.status}</span>
                        </td>
                        <td className="p-6 text-center text-zinc-600 text-[10px] font-bold tracking-wider border-l border-zinc-100 uppercase leading-relaxed">
                           <div>{order.shippingAddress}</div>
                           <div className="text-zinc-500 mt-1">{order.phone}</div>
                        </td>
                        <td className="p-6 text-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.1em] border-l border-zinc-100 leading-loose">
                           <div>Shopee-MY-BEST</div>
                           <div className="opacity-50 mt-1">{order.id.slice(0, 10).toUpperCase()}</div>
                        </td>
                        <td className="p-6 text-center border-l border-zinc-100">
                           <button className="bg-black hover:bg-zinc-800 text-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all rounded-sm w-full">Arrange Shipment</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {/* Pagination mock */}
         <div className="p-6 flex items-center justify-end text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 border-t border-zinc-100 bg-zinc-50">
          Showing {orders.length} Orders
        </div>
      </div>
    </div>
  );
}
