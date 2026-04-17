import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export default async function ArabiyatPrestigePage() {
  const products = await prisma.product.findMany({ 
     where: {
         OR: [
             { name: { contains: "Arabiyat" } },
             { category: { name: { contains: "Arabiyat" } } }
         ]
     },
     orderBy: { createdAt: "desc" }, 
     include: { category: true } 
  });

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-[#FDFCFA] text-ya-navy font-sans relative overflow-hidden min-h-screen">
         <section className="w-full relative py-32 flex flex-col items-center justify-center border-b border-[#EFEBE6] overflow-hidden bg-white">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ya-gold/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ya-navy/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

            <div className="z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto">
               <span className="text-ya-gold tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-8 block animate-in fade-in slide-in-from-bottom duration-1000 delay-100">Our Premium Selection</span>
               <h1 className="text-4xl md:text-6xl font-playfair tracking-widest leading-none mb-6 text-[#1a2f4c] uppercase animate-in fade-in zoom-in-95 duration-[1.5s]">
                 Exclusive Brands
               </h1>
               <p className="text-[#5c6b89] text-[11px] md:text-[13px] tracking-[0.3em] uppercase max-w-xl font-medium animate-in fade-in duration-1000 delay-300">
                  Curated prestige labels imported directly for our distinguished clientele.
               </p>
            </div>
         </section>
         <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10 bg-[#FDFCFA]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                 {products.length === 0 && <div className="col-span-full text-center text-[#a0aabf] py-12 uppercase tracking-widest text-[10px] font-bold">Reserving Stock for Elite Clients...</div>}
                 {products.map((p, i) => (
                    <ProductCard key={p.id} id={p.id} name={p.name} desc={p.category?.name || "Exclusive Series"} fullDesc={p.description || ""} price={p.price.toString()} badge={i === 0 ? "ROYAL" : undefined} inventory={p.inventory} images={p.images} />
                 ))}
              </div>
         </section>
      </main>
      <Footer />
    </>
  );
}
