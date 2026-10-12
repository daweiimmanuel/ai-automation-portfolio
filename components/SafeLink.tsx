import Link from 'next/link';
import type { ReactNode } from 'react';
import { hasTodo, todoAttr } from '@/lib/todo';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

export function SafeLink({ href, children, className }: Props) {
  if (hasTodo(href)) {
    return (
      <span className={className} {...todoAttr(href)}>
        {children}
      </span>
    );
  }
  if (/^https?:/.test(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
