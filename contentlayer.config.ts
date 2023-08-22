import {
  type ComputedFields,
  defineDocumentType,
  type FieldDefs,
  makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  image: { type: 'string' },
  date: { type: 'date', required: true },
  draft: { type: 'boolean' },
  tags: { type: 'list', of: { type: 'string' } },
};

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/posts/${doc._raw.flattenedPath.split('/').at(-1)}`,
  },
};

export const Writing = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: `writing/**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields,
}));

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `note/**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields,
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Writing, Note],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener noreferrer'],
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'css-variables',
        },
      ],
    ],
  },
});
