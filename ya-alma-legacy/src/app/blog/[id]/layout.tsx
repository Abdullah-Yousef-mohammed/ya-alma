import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/blog/${params.id}`);

    if (!res.ok) {
      return { title: 'Blog Post Not Found' };
    }

    const post = await res.json();

    return {
      title: post.title,
      description: post.excerpt ? post.excerpt : "Read the latest educational updates and articles on Y.A Alma Legacy.",
      openGraph: {
        title: post.title,
        description: post.excerpt ? post.excerpt : "Read the latest educational updates and articles on Y.A Alma Legacy.",
        images: post.imageUrl ? [{ url: post.imageUrl, width: 1200, height: 630 }] : [],
        type: 'article',
        publishedTime: post.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.imageUrl ? [post.imageUrl] : [],
      }
    };
  } catch (error) {
    return { title: 'Blog Post' };
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
