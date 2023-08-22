import { type DocumentTypes } from 'contentlayer/generated';
import { type LocalDocument } from 'contentlayer/source-files';
import { compareDesc } from 'date-fns';

import { isDev, isProd } from './utils';

export const parseSlug = (doc: LocalDocument | DocumentTypes) => {
  return doc._raw.flattenedPath.split('/').slice(1).join('/');
};

export const filterDraft = (doc: DocumentTypes) => {
  return isDev || (isProd && !doc.draft);
};

export const sortDateDesc = (a: DocumentTypes, b: DocumentTypes) => {
  return compareDesc(new Date(a.date), new Date(b.date));
};

// table-of-content

export type TOCSection = TOCSubSection & {
  subSections: TOCSubSection[];
};

export type TOCSubSection = {
  slug: string;
  text: string;
};

export const parseToc = (source: string) => {
  return source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TOCSection[]>((ac, rawHeading) => {
      const nac = [...ac];
      const removeMdx = rawHeading
        .replace(/^##*\s/, '')
        .replace(/[\*,\~]{2,}/g, '')
        .replace(/(?<=\])\((.*?)\)/g, '')
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '');

      const section = {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s/g, '-'),
        text: removeMdx,
      };

      const isSubTitle = rawHeading.split('#').length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.subSections.push(section);
      } else {
        nac.push({ ...section, subSections: [] });
      }

      return nac;
    }, []);
};
