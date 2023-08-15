import { allDocuments } from 'contentlayer/generated';

import siteConfig from '~/libs/site-config';

export default function sitemap() {
  const posts = allDocuments.map(({ slug, date }) => ({
    url: `${siteConfig.url}${slug}`,
    lastModified: date,
  }));

  const routes = ['', '/posts/writing', '/posts/note'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
