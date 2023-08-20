'use client';
import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

import { cn } from '~/libs/utils';

import { ArrowTopIcon } from './icons/arrow-icon';

export default function FloatScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      setShow(window.scrollY > window.innerHeight);
    }, 300);

    onScroll();
    window.addEventListener('scroll', onScroll, { capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'instant' });
  };

  return (
    <div
      className={cn(
        'fixed bottom-3 right-3 z-10 transition-opacity',
        !show && 'pointer-events-none opacity-0',
      )}
    >
      <button
        onClick={scrollToTop}
        className="rounded-full p-2 text-gray-9 transition hover:bg-gray-3 active:text-gray-11"
      >
        <ArrowTopIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
