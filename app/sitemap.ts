import { allDocuments } from 'contentlayer/generated';

import siteConfig from '~/libs/site-config';

export default function sitemap() {
  const posts = allDocuments
    .filter((doc) => !doc.draft)
    .map(({ href, date }) => ({
      url: `${siteConfig.url}${href}`,
      lastModified: date,
    }));

  const routes = ['', '/writing', '/note'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
