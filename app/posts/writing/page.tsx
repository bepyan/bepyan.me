import { allWritings, type Writing } from 'contentlayer/generated';
import { format } from 'date-fns';
import Link from 'next/link';

import NavHeader from '~/components/nav-header';
import { cn } from '~/libs/utils';

export default function WritingPage() {
  return (
    <>
      <NavHeader href="/" />
      <main>
        <h2 className="mb-16 font-serif font-semibold leading-7">개발서재</h2>
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
            .map(([year, postList]) => {
              return (
                <div key={year} className="relative border-t">
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
                          className="group/item flex"
                        >
                          <div className="ml-[20%] flex flex-1 border-t py-3 group-first-of-type/item:border-t-0">
                            <span className="text-gray-12 transition-colors group-hover/item:text-gray-12 group-hover:text-gray-10">
                              {post.title}
                            </span>
                            <span
                              className={cn(
                                'ml-auto flex-shrink-0 px-2 text-sm',
                                'text-gray-9 transition-colors group-hover/item:text-gray-9 group-hover:text-gray-7',
                              )}
                            >
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
