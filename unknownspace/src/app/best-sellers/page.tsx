import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export default async function BestSellersPage() {
  let products = await prisma.product.findMany({ 
     where: {
         hasFlashSale: true
     },
     orderBy: { createdAt: "desc" }, 
     include: { category: true } 
  });

  // Fallback: If no explicit flash sale or best seller flagged, pull items with lowest stock indicating high demand
  if (products.length === 0) {
      products = await prisma.product.findMany({
         orderBy: { inventory: "asc" },
         take: 12,
         include: { category: true }
      });
  }

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-[#FDFCFA] text-ya-navy font-sans relative overflow-hidden min-h-screen">
         <section className="w-full relative py-32 flex flex-col items-center justify-center border-b border-[#EFEBE6] overflow-hidden bg-white">
            <div className="z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto">
               <span className="text-ya-gold tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-8 block animate-in fade-in slide-in-from-bottom duration-1000 delay-100">Highest Demand</span>
               <h1 className="text-4xl md:text-6xl font-playfair tracking-widest leading-none mb-6 text-[#1a2f4c] uppercase animate-in fade-in zoom-in-95 duration-[1.5s]">
                 Best Sellers
               </h1>
               <p className="text-[#5c6b89] text-[11px] md:text-[13px] tracking-[0.3em] uppercase max-w-xl font-medium animate-in fade-in duration-1000 delay-300">
                  The most coveted selections by our sophisticated clientele. Uncompromising in elegance.
               </p>
            </div>
         </section>
         <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                 {products.length === 0 && <div className="col-span-full text-center text-[#a0aabf] py-12 uppercase tracking-widest text-[10px] font-bold">Reserving Stock for Elite Clients...</div>}
                 {products.map((p, i) => (
                    <ProductCard key={p.id} id={p.id} name={p.name} desc={p.category?.name || "Exclusive Series"} fullDesc={p.description || ""} price={p.price.toString()} badge={i < 2 ? "HIGH DEMAND" : undefined} inventory={p.inventory} images={p.images} />
                 ))}
              </div>
         </section>
      </main>
      <Footer />
    </>
  );
}
