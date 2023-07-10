import { allDocuments } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string[];
  };
}

function getDocFromParams({ params }: PageProps) {
  const slug = params.slug?.join('/') || '';
  const post = allDocuments.find((doc) => doc._raw.flattenedPath === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  return post;
}

export function generateStaticParams() {
  return allDocuments.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getDocFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export default async function WritingPage({ params }: PageProps) {
  const post = await getDocFromParams({ params });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <nav>
        <Link href={`/posts/${post.type.toLocaleLowerCase()}`}>
          {post.type}
        </Link>
      </nav>
      <main>
        <div className="mb-8">
          <h1 className="font-medium">{post.title}</h1>
          <time className="">{format(new Date(post.date), 'yyyy.MM.dd')}</time>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </main>
    </>
  );
}
