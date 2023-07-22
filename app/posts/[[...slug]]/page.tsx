import '~/styles/mdx.css';

import { allDocuments } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Mdx } from '~/components/mdx-components';

interface PageProps {
  params: {
    slug: string[];
  };
}

function getDocFromParams({ params }: PageProps) {
  const slug = params.slug?.join('/') || '';
  const post = allDocuments.find((doc) => doc._raw.flattenedPath === slug);

  return post;
}

export function generateStaticParams() {
  return allDocuments.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }));
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

export default function WritingPage({ params }: PageProps) {
  const post = getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <>
      <nav className="font-serif italic">
        <Link href={`/posts/${post.type.toLocaleLowerCase()}`}>
          {post.type}
        </Link>
      </nav>
      <main>
        <div className="mb-10">
          <h1 className="font-semibold leading-7">{post.title}</h1>
          <time className="text-gray-11">
            {format(new Date(post.date), 'yyyy.MM.dd')}
          </time>
        </div>
        <Mdx code={post.body.code} />
      </main>
    </>
  );
}