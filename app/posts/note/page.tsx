import { allNotes } from 'contentlayer/generated';
import Link from 'next/link';

import NavHeader from '~/components/nav-header';

export default function NotePage() {
  return (
    <>
      <NavHeader href="/" />
      <main>
        <h2>note</h2>

        {allNotes.map((post, i) => {
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
