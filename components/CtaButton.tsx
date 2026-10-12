import { links, site } from '@/content/site';
import { SafeLink } from './SafeLink';

const sizes = {
  nav: 'px-4 py-2 text-sm md:px-5 md:text-body',
  default: 'px-5 py-3',
};

interface Props {
  className?: string;
  size?: keyof typeof sizes;
}

export function CtaButton({ className = '', size = 'default' }: Props) {
  return (
    <SafeLink
      href={links.upworkProfile}
      className={`inline-block rounded-chip bg-amber text-center font-semibold text-navy-900 hover:brightness-95 ${sizes[size]} ${className}`}
    >
      {site.cta.label}
    </SafeLink>
  );
}
