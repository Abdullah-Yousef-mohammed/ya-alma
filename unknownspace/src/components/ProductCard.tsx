"use client";
import { useState } from "react";
import { createOrder } from "@/app/actions/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProductCard({ id, name, desc, fullDesc, price, badge, inventory, images }: { id: string, name: string, desc: string, fullDesc?: string, price: string, badge?: string, inventory?: number, images?: string }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const isSoldOut = inventory !== undefined && inventory <= 0;

  const handleCheckoutOpen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!session) {
       router.push("/login");
       return;
    }
    setIsDetailsOpen(false);
    setIsCheckoutOpen(true);
  };

  let imageUrl = undefined;
  let secondImageUrl = undefined;
  let allImages: string[] = [];
  if (images) {
    try {
      const parsed = JSON.parse(images);
      if (parsed && Array.isArray(parsed) && parsed.length > 0) {
        allImages = parsed;
        imageUrl = parsed[0];
        if (parsed.length > 1) secondImageUrl = parsed[1];
      }
    } catch(e) {}
  }

  async function handleCheckout(formData: FormData) {
    setIsSubmitting(true);
    formData.append("productId", id);
    try {
      await createOrder(formData);
      setSuccess(true);
      setTimeout(() => { setIsCheckoutOpen(false); setSuccess(false); }, 3000);
    } catch (e: any) {
      alert(e.message || "Failed to order");
    }
    setIsSubmitting(false);
  }

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setIsDetailsOpen(true)}>
         <div className="relative w-full aspect-[3/4] bg-white border border-[#EFEBE6] rounded overflow-hidden mb-6 flex items-center justify-center p-6 shadow-[0_4px_30px_rgba(0,0,0,0.01)] group-hover:border-[#cba258]/30 group-hover:shadow-[0_8px_40px_rgba(203,162,88,0.08)] transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Minimalist Image Display */}
            <div className="absolute inset-0 p-8 overflow-hidden z-10 bg-transparent flex flex-col items-center justify-center pointer-events-none">
               <div style={{ backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined }} className={`absolute inset-8 bg-contain bg-no-repeat bg-center mix-blend-multiply transition-all duration-[1.2s] ${secondImageUrl ? "group-hover:opacity-0" : "group-hover:scale-[1.08]"} ${!imageUrl ? "bg-[#FDFCFA]" : ""}`}></div>
               {secondImageUrl && (
                 <div style={{ backgroundImage: `url('${secondImageUrl}')` }} className="absolute inset-8 bg-contain bg-no-repeat bg-center mix-blend-multiply transition-all duration-[1.2s] opacity-0 group-hover:opacity-100 group-hover:scale-[1.08]"></div>
               )}
            </div>

            {badge && (
               <div className="absolute top-5 left-5 bg-[#1a2f4c] text-[#cba258] px-3 py-1 text-[8px] uppercase font-bold tracking-[0.3em] z-20 rounded shadow-sm">
                  {badge}
               </div>
            )}
            {isSoldOut && (
               <div className="absolute top-5 right-5 bg-rose-900 text-white px-3 py-1 text-[8px] uppercase font-bold tracking-[0.3em] z-20 rounded shadow-sm">
                  Sold Out
               </div>
            )}

            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-20 bg-white/90 backdrop-blur-md border-t border-[#cba258]/20">
               <button 
                  disabled={isSoldOut}
                  onClick={handleCheckoutOpen}
                  className="w-full text-[#1a2f4c] font-bold py-4 text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-[#1a2f4c] hover:text-[#cba258] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#1a2f4c] pointer-events-auto">
                  {isSoldOut ? "Out of Stock" : "Reserve Now"}
               </button>
            </div>
         </div>
         <div className="text-center px-2">
            <h3 className="text-[12px] font-bold text-[#1a2f4c] uppercase tracking-[0.2em] mb-2 group-hover:text-[#cba258] transition-colors duration-500 leading-wider">{name}</h3>
            <div className="text-[9px] text-[#5c6b89] uppercase tracking-[0.3em] mb-4 font-medium">{desc}</div>
            <div className="flex justify-center items-center gap-2">
               <span className="text-[#cba258] font-bold tracking-[0.2em] text-[12px]">SGD {price}.00</span>
            </div>
         </div>
      </div>

      {/* Details Description Modal */}
      {isDetailsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a2f4c]/80 backdrop-blur-xl animate-in fade-in" onClick={() => setIsDetailsOpen(false)}>
           <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#cba258]/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#1a2f4c] via-[#cba258] to-[#1a2f4c]"></div>
              
              <button type="button" onClick={() => setIsDetailsOpen(false)} className="absolute top-6 right-6 text-[#a0aabf] hover:text-rose-500 transition-colors w-8 h-8 rounded-full flex items-center justify-center bg-[#F8F9FA] hover:bg-rose-50 z-50">✕</button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                 <div className="bg-[#FDFCFA] p-12 border-b md:border-b-0 md:border-r border-[#EFEBE6] flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-full relative aspect-square mb-6">
                       {allImages.length > 0 ? (
                           <div className="absolute inset-0 bg-contain bg-center bg-no-repeat mix-blend-multiply transition-all duration-700" style={{ backgroundImage: `url('${allImages[0]}')` }}></div>
                       ) : (
                           <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-xs uppercase tracking-widest text-zinc-400">No Image</div>
                       )}
                    </div>
                    {allImages.length > 1 && (
                       <div className="flex gap-3 overflow-x-auto pb-2 w-full justify-center">
                          {allImages.map((img, idx) => (
                             <div key={idx} className="w-16 h-16 border border-[#EFEBE6] rounded bg-white p-2 flex-shrink-0 cursor-pointer hover:border-[#cba258] transition-colors">
                                <div className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply" style={{ backgroundImage: `url('${img}')` }}></div>
                             </div>
                          ))}
                       </div>
                    )}
                 </div>
                 <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="text-[10px] text-[#cba258] font-bold uppercase tracking-[0.3em] mb-4">{desc}</div>
                    <h2 className="text-3xl font-playfair text-[#1a2f4c] leading-[1.3] mb-6 uppercase tracking-wider">{name}</h2>
                    <div className="text-xl font-mono text-[#1a2f4c] mb-8 pb-8 border-b border-[#EFEBE6]">SGD {price}.00</div>
                    
                    <div className="prose prose-sm prose-zinc text-[#5c6b89] leading-loose whitespace-pre-wrap text-sm mb-12">
                       {fullDesc || "An exclusive luxury item. Details are strictly reserved for esteemed clientele upon consultation."}
                    </div>

                    <button 
                       disabled={isSoldOut}
                       onClick={(e) => handleCheckoutOpen(e as any)}
                       className="relative group overflow-hidden w-full border border-transparent bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded shadow-[0_8px_30px_rgba(26,47,76,0.3)] disabled:opacity-50 hover:shadow-[0_12px_40px_rgba(203,162,88,0.2)]">
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cba258] to-[#e4cd9b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                       <span className="relative z-10 text-[#cba258] group-hover:text-[#1a2f4c] transition-colors duration-500">
                          {isSoldOut ? "Out of Stock" : "Reserve Now"}
                       </span>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a2f4c]/80 backdrop-blur-xl">
           <div className="bg-white w-full max-w-lg border border-[#cba258]/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 relative animate-in zoom-in-95 duration-500 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#1a2f4c] via-[#cba258] to-[#1a2f4c]"></div>
              
              <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-6 right-6 text-[#a0aabf] hover:text-rose-500 transition-colors w-8 h-8 rounded-full flex items-center justify-center bg-[#F8F9FA] hover:bg-rose-50">✕</button>
              
              {success ? (
                 <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200 mx-auto mb-8 text-3xl shadow-sm">✓</div>
                    <h3 className="text-2xl font-playfair text-[#1a2f4c] uppercase tracking-widest mb-3">Acquisition Confirmed</h3>
                    <p className="text-[#5c6b89] text-[10px] uppercase tracking-[0.2em] leading-loose">Your selection will be dispatched via White Glove Delivery.<br/>Payment will be securely processed upon arrival.</p>
                 </div>
              ) : (
                 <form action={handleCheckout} className="space-y-8">
                    <div className="text-center mb-10">
                       <h3 className="text-2xl font-playfair text-[#1a2f4c] uppercase tracking-[0.15em] mb-3">Concierge Checkout</h3>
                       <p className="text-[#cba258] text-[11px] uppercase tracking-[0.3em] font-bold">{name} <span className="mx-2 text-[#EFEBE6]">|</span> SGD {price}.00</p>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-[#EFEBE6]">
                       <div>
                          <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Full Name</label>
                          <input required name="fullName" type="text" className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)]" placeholder="Your designated recipient name" />
                       </div>
                       <div>
                          <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Contact Number</label>
                          <input required name="phone" type="text" placeholder="e.g. +65 8749 3911" className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] font-mono rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)]" />
                       </div>
                       <div>
                          <label className="text-[9px] text-[#5c6b89] font-bold uppercase tracking-[0.2em] mb-2 block ml-1">Dispatch Destination</label>
                          <textarea required name="address" rows={3} className="w-full bg-[#FDFCFA] border border-[#EFEBE6] px-5 py-4 text-sm outline-none focus:border-[#cba258] text-[#1a2f4c] rounded transition-all focus:shadow-[0_0_15px_rgba(203,162,88,0.1)] resize-none" placeholder="Provide complete delivery details" />
                       </div>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="relative group overflow-hidden w-full border border-transparent bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded shadow-[0_8px_30px_rgba(26,47,76,0.3)] disabled:opacity-50 hover:shadow-[0_12px_40px_rgba(203,162,88,0.2)]">
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cba258] to-[#e4cd9b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
                       <span className="relative z-10 text-[#cba258] group-hover:text-[#1a2f4c] transition-colors duration-500">
                          {isSubmitting ? "Initiating Secure Protocol..." : "Confirm White Glove Delivery"}
                       </span>
                    </button>
                    <div className="text-center pb-2">
                       <span className="text-[8px] text-[#a0aabf] font-bold uppercase tracking-[0.3em]">🔒 Secured by UnknownSpace Prestige Protocol</span>
                    </div>
                 </form>
              )}
           </div>
        </div>
      )}
    </>
  );
}
