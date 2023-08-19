import Link from 'next/link';
import { useMemo } from 'react';

import { UndoIcon } from './icons/undo-icon';

export default function NavHeader({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const heading = useMemo(() => {
    if (href.includes('writing')) {
      return '나의 서재';
    } else if (href.includes('note')) {
      return '수첩';
    } else {
      return '집으로';
    }
  }, [href]);

  return (
    <nav className="sticky top-page font-serif leading-7 md:relative md:top-0">
      <Link
        href={href}
        className="inline-flex select-none items-start gap-2 text-gray-11 transition-colors hover:text-gray-12"
      >
        <UndoIcon className="mt-1.5 shrink-0" />
        <span className="">{heading}</span>
      </Link>
      {children}
    </nav>
  );
}
