import { todoAttr } from '@/lib/todo';

export function StackLine({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <p className={className}>
      {items.slice(0, 5).map((item, index, shown) => (
        <span key={item}>
          <span {...todoAttr(item)}>{item}</span>
          {index < shown.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}
