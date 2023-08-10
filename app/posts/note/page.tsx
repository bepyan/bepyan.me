import { allNotes, type Note } from 'contentlayer/generated';
import { format } from 'date-fns';
import { type Metadata } from 'next';
import Link from 'next/link';

import NavHeader from '~/components/nav-header';

export const metadata: Metadata = {
  title: '수첩',
};

export default function NotePage() {
  return (
    <>
      <NavHeader href="/" />
      <main>
        <h2 className="mb-10 font-serif font-semibold leading-7">수첩</h2>
        <div className="group">
          {Object.entries(
            allNotes.reduce<{ [year: string]: Note[] }>((ac, v) => {
              const year = new Date(v.date).getFullYear();
              if (!ac[year]) {
                ac[year] = [];
              }

              ac[year].push(v);
              return ac;
            }, {}),
          )
            .sort((a, b) => +b[0] - +a[0])
            .map(([year, postList], i, years) => {
              const yearStage = years
                .slice(0, i)
                .reduce((stage, [, list]) => stage + list.length, 1);

              return (
                <div key={year} className="relative mt-4">
                  <div
                    data-animate
                    data-animate-stage={yearStage}
                    className="h-8 select-none"
                  >
                    <h3 className="outline-text absolute -left-8 top-2 -z-10 text-7xl font-[1000]">
                      {year}
                    </h3>
                  </div>
                  {postList
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                    )
                    .map((post, i) => {
                      return (
                        <Link
                          data-animate
                          data-animate-stage={yearStage + i}
                          href={post.slug}
                          key={i}
                          className="group/item flex items-center py-2 transition-opacity hover:!opacity-100 group-hover:opacity-40"
                        >
                          <span>{post.title}</span>
                          <span className="flex-shrink-0 px-2 text-sm text-gray-9">
                            {format(new Date(post.date), 'MM. dd.')}
                          </span>
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
