import { site } from '@/content/site';
import { assetExists } from '@/lib/assets';
import { Container } from './Container';
import { SafeLink } from './SafeLink';

const copy = site.dataReporting;
const linkClass = 'underline underline-offset-4';

export function DataReporting() {
  return (
    <section id="data" className="scroll-mt-4 bg-white py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl">{copy.heading}</h2>
        <p className="mt-3 max-w-[68ch] text-slate">{copy.intro}</p>

        <ul className="mt-8">
          {copy.items.map((item) => (
            <li key={item.title} className="border-t border-ink/15 py-5">
              <h3 className="text-lg">
                {'href' in item ? (
                  <SafeLink href={item.href} className={linkClass}>
                    {item.title}
                  </SafeLink>
                ) : (
                  item.title
                )}
              </h3>
              {'body' in item && <p className="mt-2 max-w-[68ch]">{item.body}</p>}
              {'download' in item && assetExists(item.download.href) && (
                <a href={item.download.href} className={`mt-3 inline-block ${linkClass}`}>
                  {item.download.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <SafeLink
          href={copy.profileLink.href}
          className={`inline-block border-t border-ink/15 pt-5 ${linkClass}`}
        >
          {copy.profileLink.label}
        </SafeLink>
      </Container>
    </section>
  );
}
