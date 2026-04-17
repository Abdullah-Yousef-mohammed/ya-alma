import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/language-centers/${params.id}`);

    if (!res.ok) {
      return {
        title: 'Language Center Not Found',
      };
    }

    const center = await res.json();

    return {
      title: center.name,
      description: center.aboutEn ? center.aboutEn.substring(0, 160) + "..." : `Discover language programs at ${center.name}.`,
      openGraph: {
        title: `${center.name} | Y.A Alma Legacy Language Center`,
        description: center.aboutEn ? center.aboutEn.substring(0, 160) + "..." : `Discover language programs at ${center.name}.`,
        images: center.heroImage ? [{ url: center.heroImage, width: 1200, height: 630 }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: center.name,
        description: center.aboutEn ? center.aboutEn.substring(0, 160) : `Study at ${center.name}`,
        images: center.heroImage ? [center.heroImage] : [],
      }
    };
  } catch (error) {
    return {
      title: 'Language Center',
    };
  }
}

export default function LanguageCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
