'use client';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '~/libs/utils';

const components: MDXComponents = {
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr aria-orientation="horizontal" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
};

export function Mdx({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);

  return (
    <article className="mdx">
      <MDXContent components={components} />
    </article>
  );
}
