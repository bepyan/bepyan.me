import { allNotes } from 'contentlayer/generated';
import Link from 'next/link';

export default function NotePage() {
  return (
    <>
      <nav>
        <Link href="/">Index</Link>
      </nav>
      <main>
        <h2>note</h2>

        {allNotes.map((post, i) => {
          return (
            <div key={i}>
              <Link href={`/${post._raw.flattenedPath}`}>{post.title}</Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
