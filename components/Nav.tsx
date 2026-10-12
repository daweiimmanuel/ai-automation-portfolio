import Link from 'next/link';
import { site } from '@/content/site';
import { Container } from './Container';
import { CtaButton } from './CtaButton';

export function Nav() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-5 lg:gap-x-6">
        <Link href="/" className="text-lg font-semibold text-white">
          {site.nav.home}
        </Link>
        <CtaButton size="nav" className="order-2 lg:order-3" />
        <nav aria-label={site.ui.navLabel} className="order-3 w-full lg:order-2 lg:w-auto">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 md:gap-x-8">
            {site.nav.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
