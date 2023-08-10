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
        <div className="group border-l pl-4">
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
                <div key={year} className="relative mb-8">
                  <div
                    data-animate
                    data-animate-stage={yearStage}
                    className="absolute -left-20 select-none sm:relative sm:left-0 sm:mb-2"
                  >
                    <h3 className="font-serif text-gray-11">{year}</h3>
                  </div>
                  {postList
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                    )
                    .map((post, i) => {
                      return (
                        <div
                          key={i}
                          data-animate
                          data-animate-stage={yearStage + i}
                        >
                          <Link
                            href={post.slug}
                            className="mb-4 flex items-center transition-opacity hover:!opacity-100 group-hover:opacity-40"
                          >
                            <span>{post.title}</span>
                            <span className="flex-shrink-0 px-2 text-sm text-gray-9">
                              {format(new Date(post.date), 'MM. dd.')}
                            </span>
                          </Link>
                        </div>
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
