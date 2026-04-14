import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/universities/${params.id}`);
    
    if (!res.ok) {
      return {
        title: 'University Not Found',
      };
    }
    
    const uni = await res.json();
    
    return {
      title: uni.name,
      description: uni.aboutEn ? uni.aboutEn.substring(0, 160) + "..." : `Discover programs, scholarships, and campus life at ${uni.name}.`,
      openGraph: {
        title: `${uni.name} | Y.A Alma Legacy`,
        description: uni.aboutEn ? uni.aboutEn.substring(0, 160) + "..." : `Discover programs, scholarships, and campus life at ${uni.name}.`,
        images: uni.heroImage ? [{ url: uni.heroImage, width: 1200, height: 630 }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: uni.name,
        description: uni.aboutEn ? uni.aboutEn.substring(0, 160) : `Study at ${uni.name}`,
        images: uni.heroImage ? [uni.heroImage] : [],
      }
    };
  } catch (error) {
    return {
      title: 'University',
    };
  }
}

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
