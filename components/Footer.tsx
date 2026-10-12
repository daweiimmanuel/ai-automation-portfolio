import { links, site } from '@/content/site';
import { Container } from './Container';
import { CtaButton } from './CtaButton';
import { SafeLink } from './SafeLink';

const copy = site.footer;
const linkClass = 'text-white underline underline-offset-4';

export function Footer() {
  return (
    <footer className="bg-navy-900 py-14 text-white">
      <Container className="flex flex-col gap-8">
        <div>
          <CtaButton />
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          <li>
            <SafeLink href={`mailto:${links.email}`} className={linkClass}>
              {copy.emailLabel}
            </SafeLink>
          </li>
          <li>
            <SafeLink href={links.linkedin} className={linkClass}>
              {copy.linkedinLabel}
            </SafeLink>
          </li>
          <li>
            <SafeLink href={links.github} className={linkClass}>
              {copy.githubLabel}
            </SafeLink>
          </li>
        </ul>
        <p className="max-w-[68ch] text-sm text-white/70">{copy.location}</p>
      </Container>
    </footer>
  );
}
