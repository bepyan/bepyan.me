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
      return '개발서재';
    } else if (href.includes('note')) {
      return '수첩';
    } else {
      return '집으로';
    }
  }, [href]);

  return (
    <nav className="sticky top-page font-serif leading-7 lg:relative lg:top-0">
      <Link
        href={href}
        className="inline-flex select-none items-center gap-2 text-gray-11 transition-colors hover:text-gray-12"
      >
        <UndoIcon className="shrink-0" />
        <span>{heading}</span>
      </Link>
      {children}
    </nav>
  );
}
