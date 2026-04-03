import { notFound } from "next/navigation";


export default async function DynamicPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { lang?: string };
}) {
  const lang = searchParams.lang || "ar";
  const { slug } = params;

  try {
    const res = await fetch(`https://ya-alma.onrender.com/api/pages/slug/${slug}`, {
      cache: "no-store", // Ensure fresh content from CMS
    });
    
    if (!res.ok) {
      return notFound();
    }
    
    const page = await res.json();
    
    if (!page || !page.published) {
      return notFound();
    }

    const t_dyn = (en: string, ar: string, zh: string) => {
      if (lang === "ar") return ar || en;
      if (lang === "zh") return zh || en;
      return en;
    };

    const title = t_dyn(page.titleEn, page.titleAr, page.titleZh);
    const content = t_dyn(page.contentEn, page.contentAr, page.contentZh);

    const isRtl = lang === "ar";

    return (
      <main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-gray-50">
        <div className="bg-[#0b1b36] py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-black leading-tight mb-4">
              {title}
            </h1>
            <div className="w-24 h-1.5 bg-[var(--color-brand-gold)] mx-auto rounded-full mt-6"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div 
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-800 leading-relaxed space-y-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h2]:mt-8 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>a]:text-blue-600 [&>a]:underline"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </main>
    );
  } catch(e) {
    return notFound();
  }
}
