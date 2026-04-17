import Link from "next/link";
import { LayoutDashboard, Package, Tag, Wallet, MessageSquare, Truck, BarChart3, Settings, Zap, Crown, PanelBottom } from "lucide-react";

import LiveChatBadge from "@/components/LiveChatBadge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex text-ya-navy bg-[#FDFCFA] font-sans selection:bg-ya-gold/30 selection:text-ya-navy">
      {/* Sidebar - Ultra Luxury Light Theme */}
      <aside className="w-72 flex-shrink-0 bg-white border-r border-[#EFEBE6] flex flex-col h-screen sticky top-0 shadow-[4px_0_24px_rgba(26,47,76,0.02)] z-30 relative overflow-hidden">
        {/* Subtle background noise texture (simulated via radial gradient) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] pointer-events-none"></div>
        
        <div className="p-8 border-b border-[#EFEBE6] flex flex-col items-center justify-center relative bg-white pb-10">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#111d32] via-[#cba258] to-[#111d32]"></div>
          
          <div className="mb-4 mt-2 relative">
             <div className="w-14 h-14 bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(203,162,88,0.2)] border border-[#cba258]/30">
               <Crown className="text-[#cba258] w-6 h-6" />
             </div>
             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#FDFCFA] rounded-full flex flex-col items-center justify-center border border-[#EFEBE6]">
               <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
             </div>
          </div>
          
          <h2 className="text-2xl font-playfair tracking-[0.15em] text-[#1a2f4c] uppercase text-center font-bold">Seller Centre</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-4 h-[1px] bg-[#cba258]/50"></span>
            <span className="text-[9px] text-[#cba258] font-bold tracking-[0.4em] uppercase">UnknownSpace</span>
            <span className="w-4 h-[1px] bg-[#cba258]/50"></span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2 scrollbar-hide relative z-10">
          <SidebarGroup title="Order Management">
             <SidebarItem href="/admin/orders" icon={<Package size={16} />} label="My Orders" />
             <SidebarItem href="/admin/mass-ship" icon={<Truck size={16} />} label="Mass Shipment" />
          </SidebarGroup>
          
          <SidebarGroup title="Product Portfolio">
             <SidebarItem href="/admin/products" icon={<Tag size={16} />} label="My Products" />
             <SidebarItem href="/admin/products/new" icon={<Tag size={16} />} label="Add New Product" />
          </SidebarGroup>

          <SidebarGroup title="Financials">
             <SidebarItem href="/admin/finance/income" icon={<Wallet size={16} />} label="My Income" />
             <SidebarItem href="/admin/finance/wallet" icon={<Wallet size={16} />} label="Seller Wallet" />
          </SidebarGroup>

          <SidebarGroup title="Marketing">
             <SidebarItem href="/admin/marketing/flash-sale" icon={<Zap size={16} />} label="Flash Sales Setup" />
          </SidebarGroup>

          <SidebarGroup title="Intelligence">
             <SidebarItem href="/admin" icon={<BarChart3 size={16} />} label="Business Insights" />
          </SidebarGroup>
          
          <SidebarGroup title="Configuration">
             <SidebarItem href="/admin/settings" icon={<Settings size={16} />} label="Shop Information" />
             <SidebarItem href="/admin/settings/footer" icon={<PanelBottom size={16} />} label="Footer Manager" />
          </SidebarGroup>
        </div>

        <div className="p-4 border-t border-[#EFEBE6] bg-white relative z-10">
           <Link href="/admin/chat" className="flex items-center justify-between p-3 rounded-md bg-gradient-to-r from-[#1a2f4c] to-[#111d32] text-white hover:shadow-[0_8px_30px_rgba(26,47,76,0.3)] transition-all duration-500 group">
             <div className="flex items-center gap-3">
               <MessageSquare size={16} className="text-[#cba258]" />
               <span className="text-xs font-semibold tracking-wider uppercase">Live Concierge</span>
             </div>
             <LiveChatBadge />
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#FDFCFA]">
        {/* Top Navbar */}
        <header className="h-20 border-b border-[#EFEBE6] flex items-center justify-end px-12 bg-white/70 backdrop-blur-xl sticky top-0 z-20 transition-all">
            <div className="flex items-center gap-6 cursor-pointer group">
              <div className="text-right">
                 <div className="text-[10px] text-[#cba258] font-bold tracking-[0.2em] uppercase mb-0.5">UnknownSpace</div>
                 <div className="text-sm font-bold tracking-widest text-[#1a2f4c] uppercase group-hover:text-[#cba258] transition-colors">Workspace</div>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#cba258]/40 bg-gradient-to-br from-[#1a2f4c] to-[#0f1b2d] text-[#cba258] flex items-center justify-center font-playfair text-lg shadow-[0_4px_15px_rgba(203,162,88,0.15)] group-hover:scale-105 transition-transform duration-500">
                 AY
              </div>
            </div>
        </header>

        <div className="p-10 lg:p-14 overflow-y-auto flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

function SidebarGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="px-3 text-[9px] font-bold tracking-[0.2em] text-[#a0aabf] mb-3 uppercase flex items-center gap-2">
        <span>{title}</span>
        <div className="flex-1 h-[1px] bg-[#EFEBE6]"></div>
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarItem({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-4 px-4 py-3 rounded-md text-[13px] font-medium tracking-wide text-[#5c6b89] hover:bg-[#F8F9FA] hover:text-[#1a2f4c] hover:shadow-sm transition-all duration-300 group outline-none overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-0 bg-[#cba258] transition-all duration-300 group-hover:w-1"></div>
      <span className="text-[#a0aabf] group-hover:text-[#cba258] transition-colors duration-300">{icon}</span>
      {label}
    </Link>
  );
}
