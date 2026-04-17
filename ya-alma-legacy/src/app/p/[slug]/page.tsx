import { notFound } from "next/navigation";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/pages/slug/${params.slug}`);

    if (!res.ok) {
      return { title: 'Page Not Found' };
    }

    const page = await res.json();

    return {
      title: page.titleEn,
      description: page.contentEn ? page.contentEn.substring(0, 150).replace(/<[^>]+>/g, '') : "Y.A Alma Legacy Page",
      openGraph: {
        title: page.titleEn,
        type: 'website',
      }
    };
  } catch (error) {
    return { title: 'Page' };
  }
}


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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/pages/slug/${slug}`, {
      cache: "no-store", // Ensure fresh content from CMS
    });

    if (!res.ok) {
      return notFound();
    }

    const page = await res.json();

    if (!page || !page.published) {
      return notFound();
    }

    const t_dyn = (en: string, ar: string, zh: string, ms?: string) => {
      if (lang === "ar") return ar || en;
      if (lang === "zh") return zh || en;
      if (lang === "ms") return ms || en;
      return en;
    };

    const title = t_dyn(page.titleEn, page.titleAr, page.titleZh, page.titleMs || page.titleEn);
    const content = t_dyn(page.contentEn, page.contentAr, page.contentZh, page.contentMs || page.contentEn);

    const isRtl = lang === "ar";

    return (
      <main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-gray-50 dark:bg-[#11192d]">
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
            className="bg-white dark:bg-[#0b0f19] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 leading-relaxed space-y-6 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h2]:mt-8 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>a]:text-blue-600 [&>a]:underline"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    );
  } catch (e) {
    return notFound();
  }
}
