"use client";
import { useState } from "react";
import { ImageIcon, Video, PackageX, PackageSearch, Tag, Info, ListOrdered, Scale, ShieldAlert, ChevronDown, Wand2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { removeBackground } from "@imgly/background-removal";

export default function NewProductPage() {
  const router = useRouter();
  const [activeSegment, setActiveSegment] = useState("basic");
  const [images, setImages] = useState<Array<{ preview: string, file: File | null }>>([]);
  const [isRemovingBg, setIsRemovingBg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const segments = [
    { id: "basic", label: "Basic Info", icon: <Info size={14}/> },
    { id: "specs", label: "Specification", icon: <Tag size={14}/> },
    { id: "desc", label: "Description", icon: <ListOrdered size={14}/> },
    { id: "sales", label: "Sales Info", icon: <PackageSearch size={14}/> },
    { id: "shipping", label: "Shipping", icon: <Scale size={14}/> },
    { id: "others", label: "Others", icon: <PackageX size={14}/> },
  ];

  const scrollToSegment = (id: string) => {
    setActiveSegment(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBgRemoval = async () => {
    if (images.length === 0) return;
    setIsRemovingBg(true);
    try {
        const newImages = [...images];
        for (let i = 0; i < newImages.length; i++) {
           if (newImages[i].file) {
              const blob = await removeBackground(newImages[i].preview);
              const url = URL.createObjectURL(blob);
              newImages[i].preview = url;
              newImages[i].file = new File([blob], "rmbg-" + newImages[i].file?.name, { type: "image/png" });
           }
        }
        setImages(newImages);
    } catch(e) {
        console.error("BG remove failed", e);
        alert("Failed to remove background.");
    }
    setIsRemovingBg(false);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.delete("image");
    
    images.forEach(img => {
      if (img.file) formData.append("images", img.file);
    });

    const res = await fetch("/api/admin/products", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      router.push("/admin/products");
      router.refresh();
    } else {
      alert("Failed to create product");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-32 animate-in fade-in duration-700">
      <div className="mb-6 flex justify-between items-center bg-white px-8 py-5 border border-zinc-200 rounded-sm shadow-sm">
         <h1 className="text-2xl font-playfair text-black uppercase tracking-widest">Create Product</h1>
         <div className="flex gap-4">
            <button type="button" onClick={() => router.push('/admin/products')} className="bg-zinc-50 border border-zinc-200 text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors rounded-sm">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="bg-black hover:bg-zinc-800 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm disabled:opacity-50">{isSubmitting ? "Uploading..." : "Submit To Live"}</button>
         </div>
      </div>

      {/* Header Sticky Navigation */}
      <div className="sticky top-[63px] z-40 bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-8 py-4 mb-8 flex justify-between shadow-sm -mx-8">
         <div className="flex gap-10 overflow-x-auto scrollbar-hide py-2">
            {segments.map((s) => (
               <button 
                  key={s.id} 
                  type="button"
                  onClick={() => scrollToSegment(s.id)}
                  className={`flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${activeSegment === s.id ? 'text-black scale-105' : 'text-zinc-500 hover:text-black'}`}
               >
                  {s.icon} {s.label}
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
         <div className="xl:col-span-3 space-y-12">
            
            {/* Basic Information */}
            <div id="basic" className="bg-white border border-zinc-200 rounded-sm shadow-sm p-10 scroll-m-32">
               <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-8 border-b border-zinc-100 pb-4">Basic Information</h2>
               
               <div className="space-y-10 mt-8">
                  {/* Images */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                     <div className="lg:w-48 text-xs font-bold tracking-widest text-black uppercase lg:text-right mt-3"><span className="text-red-500 mr-2">*</span>Product Images</div>
                     <div className="flex-1 bg-zinc-50 p-6 rounded-sm border border-zinc-200">
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-200 pb-6">
                           <p className="text-[11px] text-zinc-500 tracking-widest uppercase">Upload up to 9 images. (1:1 Ratio) Max 2MB.</p>
                           <button onClick={handleBgRemoval} disabled={isRemovingBg || images.length === 0} type="button" className="bg-white border border-zinc-300 text-black px-4 py-2 hover:bg-black hover:text-white transition-all rounded-sm flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.2em] shadow-sm disabled:opacity-50">
                              <Wand2 size={12}/> {isRemovingBg ? "Processing AI..." : "AI BG Remover"}
                           </button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                           {images.map((img, idx) => (
                             <div key={idx} className="w-28 h-28 border border-zinc-200 bg-white rounded-sm group relative overflow-hidden shadow-sm">
                                <img src={img.preview} alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                <button type="button" onClick={() => removeImage(idx)} className="absolute top-1 right-1 bg-white hover:bg-red-50 text-red-500 rounded p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"><X size={14}/></button>
                                {idx === 0 && <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-br-sm">Cover</div>}
                             </div>
                           ))}
                           {images.length < 9 && (
                             <label className="w-28 h-28 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-zinc-400 hover:text-black hover:border-black cursor-pointer transition-all rounded-sm hover:bg-zinc-50 bg-white group shadow-sm">
                                <span className="text-2xl font-light mb-1 mt-2 text-zinc-300 group-hover:text-black transition-colors">+</span>
                                <input 
                                  type="file" 
                                  multiple
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={(e) => {
                                    if (e.target.files) {
                                      const newFiles = Array.from(e.target.files).map(file => ({
                                        preview: URL.createObjectURL(file),
                                        file
                                      }));
                                      setImages(prev => [...prev, ...newFiles].slice(0,9));
                                    }
                                  }}
                                />
                             </label>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* Video */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                     <div className="lg:w-48 text-xs font-bold tracking-widest text-black uppercase lg:text-right mt-3">Product Video</div>
                     <div className="flex-1 flex gap-8 items-start bg-zinc-50 p-6 rounded-sm border border-zinc-200">
                        <div className="w-28 h-28 bg-white border border-dashed border-zinc-300 flex flex-col items-center justify-center text-zinc-400 hover:border-black hover:text-black cursor-pointer transition-all rounded-sm hover:bg-zinc-50 group">
                           <Video size={28} className="group-hover:text-red-500 transition-colors mb-2"/>
                           <span className="text-[9px] uppercase font-bold tracking-widest group-hover:text-black">Add Video</span>
                        </div>
                        <ul className="text-[11px] text-zinc-500 space-y-2 list-none tracking-wider">
                           <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div>Size: Max 30MB (MP4)</li>
                           <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div>Duration: 10s-60s</li>
                           <li className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div>Resolution: Min 1x1px</li>
                        </ul>
                     </div>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                     <div className="lg:w-48 text-xs font-bold tracking-widest text-black uppercase lg:text-right mt-4"><span className="text-red-500 mr-2">*</span>Product Name</div>
                     <div className="flex-1 relative">
                        <input type="text" name="name" placeholder="Club de Nuit Bling Armaf for women and men" className="w-full bg-white border border-zinc-200 p-4 pr-16 text-sm outline-none focus:border-zinc-400 text-black rounded-sm transition-colors ring-0 shadow-sm" required/>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500 font-mono tracking-widest bg-zinc-100 px-2 py-1 rounded-sm">0 / 120</span>
                     </div>
                  </div>

                  {/* Category */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                     <div className="lg:w-48 text-xs font-bold tracking-widest text-black uppercase lg:text-right mt-4"><span className="text-red-500 mr-2">*</span>Category</div>
                     <div className="flex-1">
                        <button type="button" className="w-full bg-white border border-zinc-200 p-4 text-left text-sm outline-none hover:border-zinc-400 text-black rounded-sm transition-colors flex justify-between items-center shadow-sm group">
                           <span className="tracking-wide">Beauty &gt; Perfumes &amp; Fragrances</span>
                           <ChevronDown size={16} className="text-zinc-400 group-hover:scale-110 group-hover:text-black transition-transform"/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* AI Optimizer / Variations (Sales Info) combined */}
            <div id="sales" className="bg-white border border-zinc-200 rounded-sm shadow-sm p-10 scroll-m-32">
               <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-8 border-b border-zinc-100 pb-4">Sales Information</h2>
               
               <div className="space-y-8">
                  <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-sm">
                     <div className="flex items-center gap-3 mb-4">
                        <input type="radio" checked readOnly className="w-4 h-4 accent-black" />
                        <span className="text-sm font-bold text-black uppercase tracking-widest">Variations</span>
                     </div>
                     <button type="button" className="px-6 py-3 border border-dashed border-zinc-300 text-black bg-white hover:bg-zinc-50 transition-colors text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2">
                        + Enable Variations
                     </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest"><span className="text-red-500 mr-2">*</span>Price (RM)</label>
                        <input type="number" name="price" placeholder="300.00" className="w-full bg-white border border-zinc-200 p-4 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm transition-colors" required/>
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest"><span className="text-red-500 mr-2">*</span>Stock</label>
                        <input type="number" name="inventory" placeholder="0" className="w-full bg-white border border-zinc-200 p-4 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm transition-colors" required/>
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest"><span className="text-red-500 mr-2">*</span>Min Purchase Qty</label>
                        <input type="number" defaultValue="1" className="w-full bg-white border border-zinc-200 p-4 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm transition-colors"/>
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Max Purchase Qty</label>
                        <input type="number" placeholder="Unlimited" className="w-full bg-white border border-zinc-200 p-4 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm transition-colors"/>
                     </div>
                  </div>
               </div>
            </div>

            {/* Shipping */}
            <div id="shipping" className="bg-white border border-zinc-200 rounded-sm shadow-sm p-10 scroll-m-32">
               <h2 className="text-xl font-playfair text-black uppercase tracking-widest mb-8 border-b border-zinc-100 pb-4">Shipping Customization</h2>
               
               <div className="grid grid-cols-1 gap-10 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest"><span className="text-red-500 mr-2">*</span>Weight (kg)</label>
                        <input type="number" step="0.01" placeholder="e.g. 0.5" className="w-full bg-zinc-50 border border-zinc-200 p-4 text-lg outline-none focus:border-zinc-400 text-black rounded-sm font-mono shadow-inner"/>
                     </div>
                     <div className="space-y-4">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2"><span className="text-red-500">*</span>Dangerous Goods <ShieldAlert size={14} className="text-red-500"/></label>
                        <div className="flex gap-6 mt-2 bg-zinc-50 p-4 rounded-sm border border-zinc-200">
                           <label className="flex items-center gap-3 text-sm text-black cursor-pointer font-bold uppercase tracking-wider"><input type="radio" name="danger" className="w-4 h-4 accent-black" defaultChecked/> No</label>
                           <label className="flex items-center gap-3 text-sm text-black cursor-pointer font-bold uppercase tracking-wider"><input type="radio" name="danger" className="w-4 h-4 accent-black"/> Yes</label>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest"><span className="text-red-500 mr-2">*</span>Parcel Size (cm)</label>
                     <div className="flex gap-6 items-center bg-zinc-50 p-4 border border-zinc-200 rounded-sm">
                        <input type="number" placeholder="Width" className="w-full bg-white border border-zinc-200 p-3 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm text-center placeholder:font-sans placeholder:tracking-widest placeholder:uppercase"/>
                        <span className="text-black font-bold">✕</span>
                        <input type="number" placeholder="Length" className="w-full bg-white border border-zinc-200 p-3 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm text-center placeholder:font-sans placeholder:tracking-widest placeholder:uppercase"/>
                        <span className="text-black font-bold">✕</span>
                        <input type="number" placeholder="Height" className="w-full bg-white border border-zinc-200 p-3 text-sm outline-none focus:border-zinc-400 text-black font-mono rounded-sm text-center placeholder:font-sans placeholder:tracking-widest placeholder:uppercase"/>
                     </div>
                  </div>

                  <div className="border border-zinc-200 rounded-sm overflow-hidden">
                     <div className="bg-zinc-50 p-5 border-b border-zinc-200 flex justify-between items-center">
                        <div>
                           <h3 className="text-sm font-bold tracking-[0.1em] text-black uppercase">Shipping Channel Rates</h3>
                           <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Rates auto-calculate based on weight/dimensions.</p>
                        </div>
                        <button type="button" className="text-[10px] border border-zinc-300 text-black bg-white px-3 py-1 rounded-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Edit Default Rates</button>
                     </div>
                     
                     <div className="divide-y divide-zinc-100 bg-white">
                        {/* Channel Row */}
                        <div className="p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors group">
                           <div>
                              <div className="text-sm text-black font-bold tracking-wider uppercase mb-2">Next Day Delivery</div>
                              <div className="text-[9px] text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded-sm uppercase tracking-[0.2em] w-fit">Shopee Supported Logistics</div>
                           </div>
                           <div className="flex items-center gap-8">
                              <span className="text-lg font-mono text-black transition-all">RM 4.90 <span className="opacity-50 ml-1 cursor-pointer">✏️</span></span>
                              <div className="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
                                 <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer top-0 left-0 checked:right-0 checked:border-black z-10"/>
                                 <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-7 rounded-full bg-zinc-100 cursor-pointer border border-zinc-200"></label>
                              </div>
                           </div>
                        </div>

                        {/* Channel Row */}
                        <div className="p-6 flex items-center justify-between hover:bg-zinc-50 transition-colors group">
                           <div>
                              <div className="text-sm text-black font-bold tracking-wider uppercase mb-2">Instant Delivery</div>
                              <div className="text-[9px] text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded-sm uppercase tracking-[0.2em] w-fit">Max 10kg</div>
                           </div>
                           <div className="flex items-center gap-8">
                              <span className="text-lg font-mono text-black transition-all">RM 15.00 <span className="opacity-50 ml-1 cursor-pointer">✏️</span></span>
                              <div className="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
                                 <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 border-black appearance-none cursor-pointer top-0 left-0 checked:right-0 checked:border-black z-10" defaultChecked/>
                                 <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-7 rounded-full bg-zinc-800 cursor-pointer border border-black"></label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Sticky Side Preview Panel */}
         <div className="xl:col-span-1 hidden xl:block relative">
            <div className="sticky top-[140px] bg-white border border-zinc-200 rounded-sm shadow-sm p-6 border-t-8 border-t-black">
               <h3 className="text-xs font-bold tracking-[0.2em] text-black uppercase border-b border-zinc-100 pb-4 mb-6">Live Preview</h3>
               
               {/* Mobile phone mock */}
               <div className="bg-white border-4 border-zinc-200 rounded-[2rem] p-3 shadow-inner h-[500px] flex flex-col mx-auto w-[240px]">
                  <div className="w-full flex-1 bg-zinc-50 rounded-2xl overflow-hidden relative border border-zinc-100">
                     <div className="w-full h-1/2 bg-white border-b border-zinc-100 flex items-center justify-center overflow-hidden relative">
                        {images.length > 0 ? (
                          <img src={images[0].preview} className="w-full h-full object-cover" alt="Live Preview" />
                        ) : (
                          <>
                            <span className="text-[10px] text-zinc-400 tracking-widest uppercase relative z-10">No Image</span>
                            <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
                          </>
                        )}
                     </div>
                     <div className="p-4 space-y-3 relative z-10 bg-white h-full">
                        <div className="flex justify-between items-start">
                           <div className="h-2 bg-zinc-200 w-16 rounded-full"></div>
                        </div>
                        <div className="h-3 bg-zinc-300 w-3/4 rounded-full mt-2"></div>
                        <div className="h-3 bg-zinc-100 w-1/2 rounded-full"></div>
                        <div className="h-6 w-full flex gap-2 mt-4">
                           <div className="flex-1 bg-black rounded-full border border-black"></div>
                           <div className="flex-1 bg-zinc-100 rounded-full border border-zinc-200"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </form>
  );
}
