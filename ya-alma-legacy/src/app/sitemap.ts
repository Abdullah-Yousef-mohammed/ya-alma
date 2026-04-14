import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yaalmalegacy.com';

  // These are the static core paths
  const coreRoutes = [
    '',
    '/contact',
    '/process',
    '/services',
    '/universities',
    '/universities/private',
    '/universities/public',
    '/universities/foreign',
    '/specializations',
    '/language-centers',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Attempt to fetch dynamic universities for the sitemap
  let uniRoutes: any[] = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://yaalmalegacy.com/api';
    const res = await fetch(`${apiUrl}/universities`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const dbUniversities = await res.json();
      uniRoutes = dbUniversities.map((uni: any) => ({
        url: `${baseUrl}/universities/${uni.slug}`,
        lastModified: new Date(uni.updatedAt || Date.now()).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch universities for sitemap:", error);
  }

  return [...coreRoutes, ...uniRoutes];
}
