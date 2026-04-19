import type { MetadataRoute } from 'next';

const BASE = 'https://www.canninglog.com';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/library`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/ball-canning-recipes`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/water-bath-canning`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/canning-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pressure-canning-recipes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/canning-safety-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/canning-log-sheet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/free-download`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/support`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
