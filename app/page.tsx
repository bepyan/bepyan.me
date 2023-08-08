import { allNotes, allWritings } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

import { GithubIcon, TwitterXIcon } from '~/components/icons/logo-icon';

export default function Home() {
  return (
    <main className="text-tx">
      <h1 className="mb-7 font-serif font-semibold">김평안 ﹒ bepyan</h1>
      <p className="">
        사용자와 <span className="font-serif font-semibold">부드러운</span>{' '}
        상호작용하는 것, 복잡한 것을 단순하고 간편하게 만드는 것에 열광합니다.
        <br />더 나은 자신이 되기 위해 영감을 쫒고 기록하려합니다.
      </p>
      <p className="mt-7">
        현재{' '}
        <Link
          href="https://www.kakaocorp.com/page/"
          target="_blank"
          rel="noreferrer"
          className="link font-serif font-semibold"
        >
          카카오
        </Link>
        에서&nbsp;
        <Link
          href="https://brunch.co.kr/"
          target="_blank"
          rel="noreferrer"
          className="link font-serif font-semibold"
        >
          브런치
        </Link>
        를 개발하고 있습니다.
      </p>
      <div className="mt-2 flex gap-2">
        <Link
          className="text-gray-12 hover:text-gray-11"
          href="https://github.com/bepyan"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </Link>
        <Link
          className="text-gray-12 hover:text-gray-11"
          href="https://twitter.com/__pyungan"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterXIcon />
        </Link>
      </div>

      <div className="mt-12 flex gap-8">
        <div className="w-80">
          <h2 className="mb-4 font-serif text-gray-11">개발서재</h2>
          {allWritings
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, 3)
            .map((post, i) => {
              return (
                <div key={i} className="mb-4">
                  <Link href={post.slug} className="link">
                    {post.title}
                  </Link>
                  <p className="mt-0.5 text-sm text-gray-11">
                    {post.description}
                  </p>
                </div>
              );
            })}
          <Link
            href="/posts/writing"
            className="link inline-block text-gray-11"
          >
            ...
          </Link>
        </div>
        <div className="w-80">
          <h2 className="mb-4 font-serif text-gray-11">수첩</h2>
          {allNotes
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, 5)
            .map((post, i) => {
              return (
                <div key={i} className="mb-1">
                  <Link href={post.slug} className="link">
                    {post.title}
                  </Link>
                </div>
              );
            })}
          <Link href="/posts/note" className="link inline-block text-gray-11">
            ...
          </Link>
        </div>
      </div>
    </main>
  );
}
