'use client';

import { useEffect, useState } from 'react';

import { type TOCSection } from '~/libs/mdx';
import { cn } from '~/libs/utils';

export default function Toc({ toc }: { toc: TOCSection[] }) {
  const { currentSectionSlug } = useTocScroll(toc);

  return (
    <ul
      data-animate-layer
      className="mt-12 space-y-2.5 font-sans text-sm text-gray-11 lg:hidden"
    >
      {toc.map((section, i) => (
        <li key={i} className="flex">
          <a
            className={cn(
              'transition-colors hover:text-tx',
              currentSectionSlug === section.slug && 'font-medium text-tx',
            )}
            href={`#${section.slug}`}
          >
            {section.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

const useTocScroll = (tableOfContents: TOCSection[]) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];

    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0',
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16');

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>('.mdx h2'),
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const NAV_TOP = 120;
      const top = window.pageYOffset + scrollMt - NAV_TOP + 1;

      let current: typeof currentSectionSlug = undefined;
      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }
      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();

    window.addEventListener('scroll', onScroll, { capture: true });
    window.addEventListener('resize', onResize, { capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { currentSectionSlug };
};
