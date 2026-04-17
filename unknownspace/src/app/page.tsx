import Link from 'next/link';
import { ChevronRight, ArrowRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export default async function Home() {
  const products = await prisma.product.findMany({ take: 4, orderBy: { createdAt: "desc" }, include: { category: true } });
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-[#FDFCFA] text-ya-navy font-sans relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ya-gold/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-[40%] left-[-20%] w-[600px] h-[600px] bg-ya-navy/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Minimal Hero Section */}
        <section className="w-full relative py-40 md:py-64 flex flex-col items-center justify-center border-b border-[#EFEBE6] overflow-hidden">
          {/* Background Image Layer (Fully automated external premium asset) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541123437800-1bb1317bc920?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-[0.15] filter grayscale blur-sm scale-105 animate-[pulse_20s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA]/95 via-[#FDFCFA]/80 to-[#FDFCFA]"></div>

          <div className="z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto">
            <span className="text-ya-gold tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-8 block animate-in fade-in slide-in-from-bottom duration-1000">The Essence of Elegance</span>
            <h1 className="text-6xl md:text-8xl font-playfair tracking-widest leading-none mb-10 text-[#1a2f4c] uppercase animate-in fade-in zoom-in-95 duration-[1.5s] delay-150 drop-shadow-sm">
              New Launch
            </h1>
            <p className="text-[#5c6b89] text-[11px] md:text-[13px] tracking-[0.3em] uppercase mb-14 leading-relaxed animate-in fade-in duration-1000 delay-500 max-w-xl font-medium">
               The essence of Arabian Luxury, blended with oriental mastery in the UAE. Direct exclusively to Singapore. 
            </p>
            <button className="relative group overflow-hidden border border-ya-navy bg-transparent text-ya-navy px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 animate-in fade-in slide-in-from-bottom duration-1000 delay-700 hover:shadow-[0_8px_40px_rgba(26,47,76,0.15)] hover:border-transparent">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ya-navy to-[#111d32] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-ya-gold transition-colors duration-700">Explore Collection</span>
            </button>
          </div>
        </section>

        {/* Featured Collection / Best Sellers */}
        <section className="w-full bg-[#FDFCFA] py-20 md:py-32 relative z-10">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="flex justify-between items-end border-b border-[#EFEBE6] pb-6 mb-16">
                 <h2 className="text-2xl md:text-3xl font-playfair text-ya-navy tracking-[0.2em] uppercase">Latest Expressions</h2>
                 <Link href="/shop" className="text-[10px] text-ya-gold font-bold tracking-[0.2em] uppercase hover:text-ya-navy transition-colors">View Complete Selection</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                 {products.length === 0 && <div className="col-span-full text-center text-[#a0aabf] py-12 uppercase tracking-widest text-[10px] font-bold">Reserving Stock for Elite Clients...</div>}
                 {products.map((p, i) => (
                    <ProductCard key={p.id} id={p.id} name={p.name} desc={p.category?.name || "Exclusive Series"} fullDesc={p.description || ""} price={p.price.toString()} badge={i === 0 ? "EXHIBIT" : undefined} inventory={p.inventory} images={p.images} />
                 ))}
              </div>
           </div>
        </section>

        {/* Story Banner */}
        <section className="w-full bg-white py-24 md:py-36 px-6 border-y border-[#EFEBE6] relative overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.01)]">
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ya-gold/30 to-transparent"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="w-12 h-12 mx-auto mb-10 border border-[#cba258]/30 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] shadow-[0_4px_20px_rgba(203,162,88,0.1)]">
                 <Star size={16} className="text-ya-gold fill-ya-gold" />
              </div>
              <h3 className="text-3xl md:text-5xl font-playfair text-ya-navy tracking-[0.15em] leading-[1.3] uppercase mb-10 drop-shadow-sm">Captivating Scents,<br/>Timeless Memories.</h3>
              <p className="text-[#5c6b89] text-[11px] md:text-xs tracking-[0.3em] uppercase font-medium leading-[2.5] mb-14 mx-auto max-w-2xl">
                 Rare ingredients sourced globally and blended with oriental mastery in the UAE. Brought to you locally in Singapore with exclusive dispatch.
              </p>
              <button className="border-b border-ya-navy text-ya-navy pb-1 text-[11px] font-bold uppercase tracking-[0.3em] hover:text-ya-gold hover:border-ya-gold transition-colors duration-500">
                 Discover Our Heritage
              </button>
           </div>
        </section>

        {/* Features / Benefits */}
        <section className="w-full bg-[#FDFCFA] py-24">
           <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-ya-navy">
              <div className="space-y-6 px-4 group">
                 <div className="w-px h-12 bg-gradient-to-b from-transparent via-ya-gold to-transparent mx-auto group-hover:scale-y-150 transition-transform duration-700"></div>
                 <h4 className="text-[11px] font-bold uppercase tracking-[0.3em]">White Glove Dispatch</h4>
                 <p className="text-[10px] text-[#5c6b89] tracking-widest leading-loose">Next day secured delivery across Singapore</p>
              </div>
              <div className="space-y-6 px-4 group">
                 <div className="w-px h-12 bg-gradient-to-b from-transparent via-ya-gold to-transparent mx-auto group-hover:scale-y-150 transition-transform duration-700"></div>
                 <h4 className="text-[11px] font-bold uppercase tracking-[0.3em]">Guaranteed Authenticity</h4>
                 <p className="text-[10px] text-[#5c6b89] tracking-widest leading-loose">Direct import from official prestige distributors</p>
              </div>
              <div className="space-y-6 px-4 group">
                 <div className="w-px h-12 bg-gradient-to-b from-transparent via-ya-gold to-transparent mx-auto group-hover:scale-y-150 transition-transform duration-700"></div>
                 <h4 className="text-[11px] font-bold uppercase tracking-[0.3em]">Secure Transactions</h4>
                 <p className="text-[10px] text-[#5c6b89] tracking-widest leading-loose">Encrypted connections & Singapore PayNow</p>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}


