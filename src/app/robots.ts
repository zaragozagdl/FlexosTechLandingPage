import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/ai-context'],
        disallow: ['/api/contacto'],
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GoogleOther',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot',
          'Applebot-Extended',
          'bingbot',
          'Bytespider',
          'cohere-ai',
          'Amazonbot'
        ],
        allow: ['/', '/api/ai-context'],
        disallow: ['/api/contacto'],
      }
    ],
    sitemap: 'https://flexos.tech/sitemap.xml',
    host: 'https://flexos.tech',
  };
}
