import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GoogleOther',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot-Extended',
          'Bytespider',
          'bingbot'
        ],
        allow: '/',
        disallow: ['/api/'],
      }
    ],
    sitemap: 'https://flexoscontrol.com/sitemap.xml',
    host: 'https://flexoscontrol.com',
  }
}
