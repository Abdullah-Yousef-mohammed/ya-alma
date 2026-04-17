"use client";
import { useState, useEffect } from "react";
import { Save, Plus, Trash2, GripVertical, Globe, Phone, Mail, MapPin, CreditCard, Link2 } from "lucide-react";

type FooterLink = { label: string; href: string; highlight?: boolean };
type FooterConfig = {
  brandName: string;
  tagline: string;
  shopLinks: FooterLink[];
  supportLinks: FooterLink[];
  address: string;
  phone: string;
  email: string;
  copyright: string;
  paymentMethods: string[];
};

export default function FooterConfigPage() {
  const [config, setConfig] = useState<FooterConfig | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/footer-config")
      .then(r => r.json())
      .then(data => setConfig(data));
  }, []);

  const save = async () => {
    if (!config) return;
    setIsSaving(true);
    const res = await fetch("/api/admin/footer-config", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setIsSaving(false);
  };

  const updateShopLink = (i: number, field: keyof FooterLink, value: string | boolean) => {
    if (!config) return;
    const links = [...config.shopLinks];
    links[i] = { ...links[i], [field]: value };
    setConfig({ ...config, shopLinks: links });
  };

  const updateSupportLink = (i: number, field: keyof FooterLink, value: string | boolean) => {
    if (!config) return;
    const links = [...config.supportLinks];
    links[i] = { ...links[i], [field]: value };
    setConfig({ ...config, supportLinks: links });
  };

  const addShopLink = () => {
    if (!config) return;
    setConfig({ ...config, shopLinks: [...config.shopLinks, { label: "New Link", href: "/" }] });
  };

  const removeShopLink = (i: number) => {
    if (!config) return;
    setConfig({ ...config, shopLinks: config.shopLinks.filter((_, idx) => idx !== i) });
  };

  const addSupportLink = () => {
    if (!config) return;
    setConfig({ ...config, supportLinks: [...config.supportLinks, { label: "New Link", href: "/" }] });
  };

  const removeSupportLink = (i: number) => {
    if (!config) return;
    setConfig({ ...config, supportLinks: config.supportLinks.filter((_, idx) => idx !== i) });
  };

  const addPayment = () => {
    if (!config) return;
    setConfig({ ...config, paymentMethods: [...config.paymentMethods, ""] });
  };

  const removePayment = (i: number) => {
    if (!config) return;
    setConfig({ ...config, paymentMethods: config.paymentMethods.filter((_, idx) => idx !== i) });
  };

  if (!config) return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4 animate-pulse">
        <div className="w-12 h-12 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Loading Footer Config...</p>
      </div>
    </div>
  );

  return (
    <div className="pb-32 animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center bg-white px-8 py-5 border border-zinc-200 rounded-sm shadow-sm">
        <div>
          <h1 className="text-2xl font-playfair text-black uppercase tracking-widest">Footer Management</h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Control all storefront footer content</p>
        </div>
        <button
          onClick={save}
          disabled={isSaving}
          className={`flex items-center gap-3 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${saved ? "bg-emerald-600 text-white" : "bg-black hover:bg-zinc-800 text-white"} disabled:opacity-50`}
        >
          <Save size={14} />
          {saved ? "Saved!" : isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Brand Section */}
        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black border-b border-zinc-100 pb-4 flex items-center gap-2">
            <Globe size={14} className="text-zinc-400" /> Brand Identity
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">Brand Name</label>
              <input
                value={config.brandName}
                onChange={e => setConfig({ ...config, brandName: e.target.value })}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-zinc-400 rounded-sm font-bold text-black transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">Tagline / Description</label>
              <textarea
                value={config.tagline}
                onChange={e => setConfig({ ...config, tagline: e.target.value })}
                rows={3}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-zinc-400 rounded-sm text-black resize-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">Copyright Text</label>
              <input
                value={config.copyright}
                onChange={e => setConfig({ ...config, copyright: e.target.value })}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-zinc-400 rounded-sm text-black transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black border-b border-zinc-100 pb-4 flex items-center gap-2">
            <MapPin size={14} className="text-zinc-400" /> Contact Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2 flex items-center gap-2"><MapPin size={10} /> Address</label>
              <textarea
                value={config.address}
                onChange={e => setConfig({ ...config, address: e.target.value })}
                rows={2}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-zinc-400 rounded-sm text-black resize-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2 flex items-center gap-2"><Phone size={10} /> Phone / WhatsApp</label>
              <input
                value={config.phone}
                onChange={e => setConfig({ ...config, phone: e.target.value })}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-mono outline-none focus:border-zinc-400 rounded-sm text-black transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2 flex items-center gap-2"><Mail size={10} /> Email Address</label>
              <input
                value={config.email}
                onChange={e => setConfig({ ...config, email: e.target.value })}
                className="w-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-mono outline-none focus:border-zinc-400 rounded-sm text-black transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Shop Links */}
        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black border-b border-zinc-100 pb-4 flex items-center gap-2">
            <Link2 size={14} className="text-zinc-400" /> Shop Selection Links
          </h2>
          <div className="space-y-3">
            {config.shopLinks.map((link, i) => (
              <div key={i} className="flex gap-3 items-center group">
                <GripVertical size={14} className="text-zinc-300 flex-shrink-0 cursor-grab" />
                <input
                  value={link.label}
                  onChange={e => updateShopLink(i, "label", e.target.value)}
                  placeholder="Label"
                  className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs outline-none focus:border-zinc-400 rounded-sm text-black"
                />
                <input
                  value={link.href}
                  onChange={e => updateShopLink(i, "href", e.target.value)}
                  placeholder="/path"
                  className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-mono outline-none focus:border-zinc-400 rounded-sm text-black"
                />
                <label className="flex items-center gap-1 text-[10px] text-zinc-500 font-bold uppercase tracking-widest cursor-pointer whitespace-nowrap">
                  <input type="checkbox" checked={!!link.highlight} onChange={e => updateShopLink(i, "highlight", e.target.checked)} className="accent-black" />
                  Gold
                </label>
                <button onClick={() => removeShopLink(i)} className="text-zinc-300 hover:text-red-500 transition-colors flex-shrink-0">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button onClick={addShopLink} className="w-full border border-dashed border-zinc-300 py-2 text-xs text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors rounded-sm flex items-center justify-center gap-2 mt-2">
              <Plus size={12} /> Add Shop Link
            </button>
          </div>
        </div>

        {/* Support Links */}
        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black border-b border-zinc-100 pb-4 flex items-center gap-2">
            <Link2 size={14} className="text-zinc-400" /> Support Hub Links
          </h2>
          <div className="space-y-3">
            {config.supportLinks.map((link, i) => (
              <div key={i} className="flex gap-3 items-center group">
                <GripVertical size={14} className="text-zinc-300 flex-shrink-0 cursor-grab" />
                <input
                  value={link.label}
                  onChange={e => updateSupportLink(i, "label", e.target.value)}
                  placeholder="Label"
                  className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs outline-none focus:border-zinc-400 rounded-sm text-black"
                />
                <input
                  value={link.href}
                  onChange={e => updateSupportLink(i, "href", e.target.value)}
                  placeholder="/path"
                  className="flex-1 border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-mono outline-none focus:border-zinc-400 rounded-sm text-black"
                />
                <button onClick={() => removeSupportLink(i)} className="text-zinc-300 hover:text-red-500 transition-colors flex-shrink-0">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button onClick={addSupportLink} className="w-full border border-dashed border-zinc-300 py-2 text-xs text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors rounded-sm flex items-center justify-center gap-2 mt-2">
              <Plus size={12} /> Add Support Link
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white border border-zinc-200 rounded-sm shadow-sm p-8 space-y-6 xl:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black border-b border-zinc-100 pb-4 flex items-center gap-2">
            <CreditCard size={14} className="text-zinc-400" /> Payment Methods (shown in footer)
          </h2>
          <div className="flex flex-wrap gap-3">
            {config.paymentMethods.map((method, i) => (
              <div key={i} className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2 group">
                <input
                  value={method}
                  onChange={e => {
                    const methods = [...config.paymentMethods];
                    methods[i] = e.target.value;
                    setConfig({ ...config, paymentMethods: methods });
                  }}
                  className="text-xs font-bold uppercase tracking-widest bg-transparent outline-none text-black w-24"
                />
                <button onClick={() => removePayment(i)} className="text-zinc-300 hover:text-red-500 transition-colors">
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
            <button onClick={addPayment} className="border border-dashed border-zinc-300 px-4 py-2 text-xs text-zinc-400 hover:text-black hover:border-zinc-400 transition-colors rounded-sm flex items-center gap-2">
              <Plus size={12} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Live Preview Panel */}
      <div className="mt-8 bg-gradient-to-b from-[#1a2f4c] to-[#0f1b2d] rounded-sm border border-zinc-700 overflow-hidden">
        <div className="px-6 py-3 border-b border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Live Footer Preview</span>
        </div>
        <div className="p-10 grid grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-[0.2em] text-white font-playfair uppercase">{config.brandName}<span className="text-[#cba258] text-xs align-top">®</span></h3>
            <p className="text-[10px] text-[#a0aabf] tracking-[0.15em] leading-[2] uppercase">{config.tagline}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6 border-b border-[#cba258]/20 pb-3 inline-block">Shop Selection</h4>
            <ul className="space-y-3 text-[10px] tracking-[0.2em] uppercase">
              {config.shopLinks.map((l, i) => (
                <li key={i} className={l.highlight ? "text-[#cba258] font-bold" : "text-[#a0aabf]"}>{l.label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6 border-b border-[#cba258]/20 pb-3 inline-block">Support Hub</h4>
            <ul className="space-y-3 text-[10px] text-[#a0aabf] tracking-[0.2em] uppercase">
              {config.supportLinks.map((l, i) => <li key={i}>{l.label}</li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6 border-b border-[#cba258]/20 pb-3 inline-block">Visit Us</h4>
            <p className="text-[10px] text-[#a0aabf] tracking-[0.15em] uppercase leading-loose">{config.address}</p>
            <p className="text-[10px] text-[#a0aabf] tracking-[0.15em] uppercase">{config.phone}</p>
            <p className="text-[10px] text-[#a0aabf] tracking-[0.15em]">{config.email}</p>
          </div>
        </div>
        <div className="px-10 py-4 border-t border-white/5 flex justify-between items-center">
          <p className="text-[9px] text-[#5c6b89] tracking-[0.2em] uppercase font-bold">{config.copyright}</p>
          <div className="flex gap-2">
            {config.paymentMethods.map((m, i) => (
              <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-[#a0aabf] bg-white/5 border border-white/10 px-3 py-1 rounded">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
