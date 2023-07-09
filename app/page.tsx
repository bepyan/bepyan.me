import { allNotes, allWritings } from 'contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>bepyan</h1>
      <div>
        <div className="mt-4">
          <h2>writing</h2>
          {allWritings.map((post, i) => {
            return (
              <div key={i}>
                <Link href={`/${post._raw.flattenedPath}`}>{post.title}</Link>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <h2>note</h2>

          {allNotes.map((post, i) => {
            return (
              <div key={i}>
                <Link href={`/${post._raw.flattenedPath}`}>{post.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
