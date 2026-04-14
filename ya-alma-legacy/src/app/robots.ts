import { MetadataRoute } from 'next';

const DOMAIN = process.env.NEXT_PUBLIC_BASE_URL || 'https://yaalmalegacy.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
