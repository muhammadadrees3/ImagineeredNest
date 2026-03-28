import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://imagineerednest.com'
  
  const routes = [
    '',
    '/contact',
    '/services/app-development',
    '/services/graphic-design',
    '/services/design',
    '/services/desktop-development',
    '/services/branding',
    '/services/development',
    '/services/google-maps',
    '/services/local-presence',
    '/services/marketing',
    '/services/seo',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
