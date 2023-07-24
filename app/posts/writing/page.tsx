import { allWritings } from 'contentlayer/generated';
import Link from 'next/link';

import NavHeader from '~/components/nav-header';

export default function WritingPage() {
  return (
    <>
      <NavHeader href="/" />
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
