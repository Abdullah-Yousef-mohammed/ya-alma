import Link from "next/link";
import { Plus, Search, ChevronDown, Flame } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function MyProductsPage({ searchParams }: { searchParams: { tab?: string } }) {
  // Extract tab safely for Next 15 Server Components (searchParams is async usually in Next 15, but we can await it if needed)
  const awaitedParams = await searchParams;
  const activeTab = awaitedParams?.tab || "All";
  const tabs = ["All", "Live", "Violation", "Under Review", "Unpublished"];

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true }
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-playfair text-black uppercase tracking-widest">My Products</h1>
        <div className="flex gap-4">
           <button className="px-4 py-2 border border-zinc-300 text-black hover:border-black transition-colors text-xs font-bold tracking-widest rounded-sm flex items-center gap-2 bg-white">
             Product Settings <ChevronDown size={14} />
           </button>
           <button className="px-4 py-2 border border-zinc-300 text-black hover:border-black transition-colors text-xs font-bold tracking-widest rounded-sm flex items-center gap-2 bg-white">
             Mass Function <ChevronDown size={14} />
           </button>
           <Link href="/admin/products/new" className="px-6 py-2 bg-black text-white transition-all text-xs font-bold tracking-widest rounded-sm flex items-center gap-2 hover:bg-zinc-800 shadow-sm">
             <Plus size={16} /> Add New Product
           </Link>
        </div>
      </div>

      {/* AI Optimiser Banner */}
      <div className="bg-gradient-to-r from-zinc-100 to-white border border-zinc-200 rounded-sm p-5 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-5">
            <div className="p-3 bg-white rounded-full border border-zinc-200 shadow-sm"><Flame className="text-orange-500 animate-pulse" size={24} /></div>
            <div>
               <h3 className="text-sm font-bold text-black uppercase tracking-wider">You Have {products.length} Model(s) That Can Join Price Bidding To Improve Performance!</h3>
               <p className="text-xs text-zinc-500 mt-2 tracking-widest font-mono">Impression +875% &nbsp; | &nbsp; Orders +1100% &nbsp; | &nbsp; Sales +173%</p>
            </div>
         </div>
         <button className="px-8 py-3 bg-white text-black border border-zinc-300 hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
            Join Now
         </button>
      </div>

      {/* Main Table Interface */}
      <div className="bg-white border border-zinc-200 rounded-sm shadow-sm mt-8">
        {/* Tabs */}
        <div className="flex border-b border-zinc-200 px-6 bg-zinc-50">
          {tabs.map((tab) => (
            <Link 
              key={tab}
              href={`/admin/products?tab=${tab}`}
              className={`px-6 py-5 text-xs font-bold uppercase tracking-[0.1em] border-b-2 transition-all ${activeTab === tab ? 'border-black text-black bg-white' : 'border-transparent text-zinc-500 hover:text-black hover:bg-white'}`}
            >
              {tab} {tab === "All" && `(${products.length})`}
            </Link>
          ))}
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-zinc-100 flex items-center gap-6 bg-white">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
               type="text" 
               placeholder="Search Product Name, Parent SKU, Item ID..." 
               className="w-full bg-zinc-50 border border-zinc-200 rounded-sm py-3 pl-12 pr-4 text-sm text-black outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-400 tracking-wide"
            />
          </div>
          <button className="px-6 py-3 border border-zinc-300 text-black hover:bg-black hover:text-white transition-colors text-xs font-bold uppercase tracking-widest rounded-sm bg-white">
            Search
          </button>
          <div className="ml-auto">
             <button className="px-4 py-3 bg-orange-50 text-orange-600 border border-dashed border-orange-200 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 hover:bg-orange-100 transition-colors">
               <Flame size={14} className="text-orange-500" /> AI Optimiser
             </button>
          </div>
        </div>

        {/* Table View */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                <th className="p-5 font-bold w-12"><input type="checkbox" className="accent-black" /></th>
                <th className="p-5 font-bold min-w-[350px]">Product Info</th>
                <th className="p-5 font-bold">Price</th>
                <th className="p-5 font-bold">Stock</th>
                <th className="p-5 font-bold">Performance</th>
                <th className="p-5 font-bold text-center w-40">Action</th>
              </tr>
            </thead>
            <tbody>
               {products.length === 0 && (
                 <tr>
                   <td colSpan={6} className="text-center py-20 bg-white">
                      <div className="text-black tracking-widest uppercase text-sm mb-4">No Products Found</div>
                      <Link href="/admin/products/new" className="text-zinc-500 hover:text-black hover:underline text-xs tracking-widest font-bold transition-colors">Upload Your First Product</Link>
                   </td>
                 </tr>
               )}
               {products.map(product => (
                 <tr key={product.id} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors group bg-white">
                    <td className="p-5"><input type="checkbox" className="accent-black" /></td>
                    <td className="p-5 flex items-start gap-5">
                       <div className="w-20 h-20 bg-white border border-zinc-200 rounded-sm p-1 shrink-0 group-hover:border-zinc-400 transition-colors relative overflow-hidden flex items-center justify-center shadow-sm">
                          <img src="/ph-1.jpg" alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                       </div>
                       <div className="flex-1">
                          <div className="text-black font-semibold tracking-wide hover:text-zinc-600 transition-colors line-clamp-2 leading-relaxed text-sm">{product.name}</div>
                          <div className="text-[10px] text-zinc-500 mt-3 grid grid-cols-2 gap-x-2 gap-y-1 bg-zinc-50 p-2 rounded-sm border border-zinc-100">
                             <span className="font-mono">Category: {product.category?.name || "Uncategorized"}</span>
                             <span className="font-mono flex items-center justify-between">Item ID: {product.id.slice(0, 8)}</span>
                          </div>
                       </div>
                    </td>
                    <td className="p-5 text-black font-medium tracking-widest border-l border-zinc-100 font-mono">SGD {product.price.toFixed(2)}</td>
                    <td className="p-5 border-l border-zinc-100">
                       <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border ${product.inventory > 0 ? 'bg-zinc-100 text-black border-zinc-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                          {product.inventory > 0 ? `${product.inventory} in stock` : 'Sold out'}
                       </span>
                    </td>
                    <td className="p-5 text-[11px] tracking-wider border-l border-zinc-100">
                       <div className="text-green-700 font-bold mb-2 text-sm">Sales 0</div>
                       <div className="text-zinc-500 opacity-80 mb-1">L30D Views: <span className="text-black font-semibold">0</span></div>
                    </td>
                    <td className="p-5 border-l border-zinc-100">
                       <div className="flex flex-col gap-3 items-center">
                         <Link href={`/admin/products/${product.id}`} className="text-black border border-zinc-300 bg-white w-full text-center py-2 hover:bg-black hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-sm block">Edit</Link>
                         <button className="bg-zinc-100 w-full text-zinc-600 hover:text-black transition-colors py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm">More</button>
                       </div>
                    </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
