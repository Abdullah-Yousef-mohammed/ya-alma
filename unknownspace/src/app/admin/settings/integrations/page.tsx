"use client";
import { useState } from "react";
import { KeySquare, CreditCard, Truck, AlertCircle, Save, CheckCircle2 } from "lucide-react";

export default function IntegrationsPage() {
  const [shippingProviders, setShippingProviders] = useState([
    { id: "ninjavan", name: "Ninja Van SG", active: true, apiKey: "nv_live_839210xxxxxxxxxxx", secretKey: "************************", logo: "📦" },
    { id: "jnt", name: "J&T Express", active: false, apiKey: "", secretKey: "", logo: "🚚" },
    { id: "singpost", name: "SingPost Local", active: true, apiKey: "sp_prod_001928xx", secretKey: "************************", logo: "📫" }
  ]);

  const [paymentGateways, setPaymentGateways] = useState([
    { id: "stripe", name: "Stripe", active: true, publicKey: "pk_live_51O...", secretKey: "sk_live_51O...", logo: "💳", supports: "Visa, Mastercard, Amex, Apple Pay" },
    { id: "paynow", name: "PayNow SG / UEN", active: true, publicKey: "UEN: 202612345M", secretKey: "Bank API Key", logo: "🏦", supports: "QR Code Instant Transfer" },
    { id: "midtrans", name: "Midtrans (Optional)", active: false, publicKey: "", secretKey: "", logo: "🌐", supports: "E-Wallets, Bank Transfers" }
  ]);

  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  const toggleShipping = (index: number) => {
    const newProviders = [...shippingProviders];
    newProviders[index].active = !newProviders[index].active;
    setShippingProviders(newProviders);
  };

  const togglePayment = (index: number) => {
    const newGateways = [...paymentGateways];
    newGateways[index].active = !newGateways[index].active;
    setPaymentGateways(newGateways);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-32">
      <div className="flex justify-between items-center border-b border-zinc-200 pb-6">
        <div>
           <h1 className="text-3xl font-playfair text-black uppercase tracking-widest flex items-center gap-3"><KeySquare size={28}/> API Integrations</h1>
           <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2 font-bold">Manage Payment Gateways & Shipping Providers API Keys</p>
        </div>
        <button 
           onClick={handleSave}
           className="px-8 py-3 bg-black hover:bg-zinc-800 text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase rounded-sm flex items-center gap-2 shadow-sm">
          {saving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/> : <Save size={16}/>}
          {saving ? "Deploying APIs..." : "Save Secrets"}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
         {/* Payment Gateways */}
         <div className="bg-white border border-zinc-200 rounded-sm p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-zinc-50 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-2 flex items-center gap-3"><CreditCard className="text-black"/> Financial Gateways</h2>
            <p className="text-[10px] text-zinc-500 tracking-widest font-bold uppercase mb-8 border-b border-zinc-100 pb-4">Enable or disable checkout payment methods globally.</p>

            <div className="space-y-6 relative z-10">
               {paymentGateways.map((pg, i) => (
                  <div key={pg.id} className={`p-6 border rounded-sm transition-all ${pg.active ? 'border-zinc-300 bg-white shadow-sm' : 'border-zinc-200 bg-zinc-50 opacity-70'}`}>
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-sm flex items-center justify-center text-2xl">{pg.logo}</div>
                           <div>
                              <h3 className="text-sm font-bold text-black uppercase tracking-widest">{pg.name}</h3>
                              <p className="text-[9px] text-zinc-500 font-mono mt-1">{pg.supports}</p>
                           </div>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                           <input type="checkbox" checked={pg.active} onChange={() => togglePayment(i)} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer top-0 left-0 checked:right-0 checked:border-black z-10 transition-all"/>
                           <label className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer border ${pg.active ? 'bg-zinc-100 border-black' : 'bg-zinc-200 border-zinc-300'}`}></label>
                        </div>
                     </div>
                     
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 flex items-center gap-2">Public Key / Client ID</label>
                           <input type="text" defaultValue={pg.publicKey} placeholder="Enter Client ID or Public Key" className="w-full bg-white border border-zinc-200 p-3 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest" disabled={!pg.active}/>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 flex items-center gap-2">Secret Key / Live Token</label>
                           <input type="password" defaultValue={pg.secretKey} placeholder="Enter Secret Key" className="w-full bg-white border border-zinc-200 p-3 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest" disabled={!pg.active}/>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Shipping Providers */}
         <div className="bg-white border border-zinc-200 rounded-sm p-8 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 bg-zinc-50 w-64 h-64 rounded-full blur-3xl -mr-20 -mb-20"></div>
            <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-2 flex items-center gap-3"><Truck className="text-black"/> Shipping Logistics APIs</h2>
            <p className="text-[10px] text-zinc-500 tracking-widest font-bold uppercase mb-8 border-b border-zinc-100 pb-4">Sync orders to local fulfillment centers for AWB generation.</p>

            <div className="space-y-6 relative z-10">
               {shippingProviders.map((sp, i) => (
                  <div key={sp.id} className={`p-6 border rounded-sm transition-all ${sp.active ? 'border-zinc-300 bg-white shadow-sm' : 'border-zinc-200 bg-zinc-50 opacity-70'}`}>
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-sm flex items-center justify-center text-xl">{sp.logo}</div>
                           <h3 className="text-sm font-bold text-black uppercase tracking-widest">{sp.name}</h3>
                        </div>
                        <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                           <input type="checkbox" checked={sp.active} onChange={() => toggleShipping(i)} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer top-0 left-0 checked:right-0 checked:border-black z-10 transition-all"/>
                           <label className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer border ${sp.active ? 'bg-zinc-100 border-black' : 'bg-zinc-200 border-zinc-300'}`}></label>
                        </div>
                     </div>
                     
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">App ID / Client Key</label>
                           <input type="text" defaultValue={sp.apiKey} placeholder="Shipping Company App ID" className="w-full bg-white border border-zinc-200 p-3 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest" disabled={!sp.active}/>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">Webhooks Secret</label>
                           <input type="password" defaultValue={sp.secretKey} placeholder="Enter Webhook Signature Secret" className="w-full bg-white border border-zinc-200 p-3 text-xs font-mono text-black rounded-sm outline-none focus:border-zinc-400 placeholder:font-sans placeholder:tracking-widest" disabled={!sp.active}/>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
