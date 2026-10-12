import { site } from '@/content/site';
import { Container } from './Container';
import { CtaButton } from './CtaButton';
import { DemoPanel } from './DemoPanel';
import { SafeLink } from './SafeLink';

export function Hero() {
  return (
    <Container className="grid gap-10 pt-6 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-24">
      <div className="lg:col-span-5">
        <h1 className="text-[36px] leading-[40px] text-white lg:text-4xl lg:leading-[56px]">
          {site.hero.h1}
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg text-white/85">{site.hero.subline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <CtaButton />
          <SafeLink
            href={site.hero.secondaryLink.href}
            className="text-white underline underline-offset-4"
          >
            {site.hero.secondaryLink.label}
          </SafeLink>
        </div>
        <p className="mt-5 text-sm text-white/70">{site.hero.note}</p>
      </div>
      <div className="lg:col-span-7">
        <DemoPanel />
      </div>
    </Container>
  );
}
