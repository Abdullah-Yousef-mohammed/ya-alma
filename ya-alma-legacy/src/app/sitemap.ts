import { MetadataRoute } from 'next';

const DOMAIN = process.env.NEXT_PUBLIC_BASE_URL || 'https://yaalmalegacy.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://yaalmalegacy.com/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static Routes
  const staticRoutes = ['', '/universities', '/language-centers', '/blog', '/contact', '/about'].map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  sitemapEntries.push(...staticRoutes);

  try {
    // 2. Fetch Universities
    const uniRes = await fetch(`${API_URL}/universities`, { next: { revalidate: 3600 } });
    if (uniRes.ok) {
      const universities = await uniRes.json();
      const uniRoutes = universities.map((uni: any) => ({
        url: `${DOMAIN}/universities/${uni.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }));
      sitemapEntries.push(...uniRoutes);
    }

    // 3. Fetch Language Centers
    const lcRes = await fetch(`${API_URL}/language-centers`, { next: { revalidate: 3600 } });
    if (lcRes.ok) {
      const centers = await lcRes.json();
      const lcRoutes = centers.map((center: any) => ({
        url: `${DOMAIN}/language-centers/${center.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
      sitemapEntries.push(...lcRoutes);
    }

    // 4. Fetch Blog Posts
    const blogRes = await fetch(`${API_URL}/blog/published`, { next: { revalidate: 3600 } });
    if (blogRes.ok) {
      const blogs = await blogRes.json();
      const blogRoutes = blogs.map((post: any) => ({
        url: `${DOMAIN}/blog/${post.id}`, // Setup routing according to your schema (or slug)
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
      sitemapEntries.push(...blogRoutes);
    }

    // 5. Fetch Custom Pages
    const pagesRes = await fetch(`${API_URL}/pages`, { next: { revalidate: 3600 } });
    if (pagesRes.ok) {
      const pages = await pagesRes.json();
      const pageRoutes = pages.map((page: any) => ({
        url: `${DOMAIN}/p/${page.slug}`,
        lastModified: new Date(page.updatedAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
      sitemapEntries.push(...pageRoutes);
    }

  } catch (error) {
    console.error("Error generating dynamic sitemap:", error);
  }

  return sitemapEntries;
}
