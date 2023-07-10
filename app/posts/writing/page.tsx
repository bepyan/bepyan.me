import { allWritings } from 'contentlayer/generated';
import Link from 'next/link';

export default function WritingPage() {
  return (
    <>
      <nav>
        <Link href="/">Index</Link>
      </nav>
      <main>
        <h2>writing</h2>
        {allWritings.map((post, i) => {
          return (
            <div key={i}>
              <Link href={post.slug}>{post.title}</Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
