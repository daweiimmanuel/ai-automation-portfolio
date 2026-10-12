import Image from 'next/image';
import { site } from '@/content/site';
import { Container } from './Container';

const copy = site.background;

export function Background() {
  return (
    <section id="background" className="scroll-mt-4 py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl">{copy.heading}</h2>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="flex max-w-[68ch] flex-col gap-4 lg:col-span-7">
            {copy.headshot && (
              <Image
                src={copy.headshot.src}
                alt={copy.headshot.alt}
                width={160}
                height={160}
                className="rounded-panel"
              />
            )}
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="flex flex-col gap-4 lg:col-span-5">
            {copy.toolGroups.map((group) => (
              <div key={group.label} className="border-t border-ink/15 pt-3">
                <dt className="font-semibold">{group.label}</dt>
                <dd className="text-slate">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
