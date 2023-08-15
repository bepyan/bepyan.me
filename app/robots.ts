import siteConfig from '~/libs/site-config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
