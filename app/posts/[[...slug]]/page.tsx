import '~/styles/mdx.css';

import { allDocuments, type DocumentTypes } from 'contentlayer/generated';
import { compareAsc, format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Mdx } from '~/components/mdx-components';
import NavHeader from '~/components/nav-header';

interface PageProps {
  params: {
    slug: string[];
  };
}

export function generateStaticParams() {
  return allDocuments.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }));
}

function getDocFromParams({ params }: PageProps) {
  const slug = params.slug?.join('/') || '';
  const post = allDocuments.find((doc) => doc._raw.flattenedPath === slug);

  return post;
}

export function generateMetadata({ params }: PageProps) {
  const post = getDocFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

type RelatedInfo = {
  prevPost?: {
    title: string;
    href: string;
  };
  nextPost?: {
    title: string;
    href: string;
  };
};

function getReplatedInfo(post: DocumentTypes): RelatedInfo {
  return allDocuments
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
    .reduce<RelatedInfo>((ac, v, index, list) => {
      if (v._raw.flattenedPath === post._raw.flattenedPath) {
        const prevPost = list
          .slice(0, index)
          .reverse()
          .find((doc) => doc.type === post.type);

        if (prevPost) {
          ac.prevPost = {
            title: prevPost.title,
            href: `/posts/${prevPost._raw.flattenedPath}`,
          };
        }

        const nextPost = list
          .slice(index + 1)
          .find((doc) => doc.type === post.type);

        if (nextPost) {
          ac.nextPost = {
            title: nextPost.title,
            href: `/posts/${nextPost._raw.flattenedPath}`,
          };
        }
      }
      return ac;
    }, {});
}

export default function WritingPage({ params }: PageProps) {
  const post = getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  const { prevPost, nextPost } = getReplatedInfo(post);

  return (
    <>
      <NavHeader href={`/posts/${post.type.toLocaleLowerCase()}`} />
      <main>
        <div className="mb-10">
          <h1 className="font-semibold leading-7">{post.title}</h1>
          <time className="text-sm text-gray-11">
            {format(new Date(post.date), 'MMMM dd. yyyy')}
          </time>
        </div>
        <Mdx code={post.body.code} />
        <hr className="mb-10 mt-20 h-[1px] w-full border-gray-5" />
        <footer className="flex items-stretch justify-between gap-1 text-sm text-tx">
          {!!prevPost && (
            <Link className="flex flex-col gap-1" href={prevPost.href}>
              <div className="text-gray-10">Previous</div>
              <span className="">{prevPost.title}</span>
            </Link>
          )}
          {!!nextPost && (
            <Link
              className="ml-auto flex flex-col gap-1 text-right"
              href={nextPost.href}
            >
              <div className="text-gray-10">Next</div>
              <span className="">{nextPost.title}</span>
            </Link>
          )}
        </footer>
      </main>
    </>
  );
}
