import { allWritings, type Writing } from 'contentlayer/generated';
import { format } from 'date-fns';
import { type Metadata } from 'next';
import Link from 'next/link';

import NavHeader from '~/components/nav-header';

export const metadata: Metadata = {
  title: '나의 서재',
};

export default function WritingPage() {
  return (
    <>
      <NavHeader href="/" />
      <main>
        <h2 className="mb-16 font-serif font-semibold leading-7">나의 서재</h2>
        <div className="group">
          {Object.entries(
            allWritings.reduce<{ [year: string]: Writing[] }>((ac, v) => {
              const year = new Date(v.date).getFullYear();
              if (!ac[year]) {
                ac[year] = [];
              }

              ac[year].push(v);
              return ac;
            }, {}),
          )
            .sort((a, b) => +b[0] - +a[0])
            .map(([year, postList], i) => {
              return (
                <div
                  key={year}
                  data-animate
                  data-animate-stage={i + 1}
                  className="relative border-t"
                >
                  <h3 className="absolute top-3 -z-10 text-sm text-gray-9">
                    {year}
                  </h3>
                  {postList
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                    )
                    .map((post, i) => {
                      return (
                        <Link
                          href={post.slug}
                          key={i}
                          className="group/item flex transition-opacity hover:!opacity-100 group-hover:opacity-40"
                        >
                          <div className="ml-[20%] flex flex-1 border-t py-3 group-first-of-type/item:border-t-0">
                            <span className="text-gray-12">{post.title}</span>
                            <span className="ml-auto flex-shrink-0 px-2 text-sm text-gray-9">
                              {format(new Date(post.date), 'MM. dd.')}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
