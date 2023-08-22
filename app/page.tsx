import { allNotes, allWritings } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

import {
  GithubIcon,
  NotionIcon,
  TwitterXIcon,
} from '~/components/icons/logo-icon';
import { filterDraft } from '~/libs/mdx';

export default function Home() {
  return (
    <main className="text-tx">
      <h1 className="mb-7 font-serif font-semibold">김평안 ﹒ bepyan</h1>
      <p data-animate data-animate-stage={1}>
        사용자와 <span className="font-serif font-semibold">부드러운</span>{' '}
        상호작용하는 것, 복잡한 것을 단순하고 간편하게 만드는 것에 열광합니다.
        <br />
        탐구하고 사색하는 것을 좋아하여 틈틈이 발견한 것을 기록하려 합니다.
      </p>
      <p data-animate data-animate-stage={2} className="mt-7">
        현재{' '}
        <Link
          href="https://www.kakaocorp.com/page/"
          target="_blank"
          rel="noreferrer"
          className="link font-serif font-semibold"
        >
          카카오
        </Link>
        에서{' '}
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
      <div data-animate data-animate-stage={2} className="mt-2 flex gap-2">
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
        <Link
          className="flex items-end text-gray-12 hover:text-gray-11"
          href="https://bepyan.notion.site/Frontend-Developer-69fd245161734c1793e8df78dffe705c?pvs=4"
          target="_blank"
        >
          <NotionIcon />
          <span className="ml-px text-[6px] leading-tight">(이력서)</span>
        </Link>
      </div>

      <div data-animate data-animate-stage={3} className="mt-12 flex gap-8">
        <div className="w-80">
          <h2 className="mb-4 font-serif text-gray-11">나의 서재</h2>
          {allWritings
            .filter(filterDraft)
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
            .filter(filterDraft)
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
