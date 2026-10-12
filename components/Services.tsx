import { builds } from '@/content/builds';
import { site } from '@/content/site';
import { Container } from './Container';
import { SafeLink } from './SafeLink';

const copy = site.servicesSection;
const grid = 'lg:grid-cols-[1.1fr_2fr_1.4fr_1.4fr_0.8fr_1.1fr]';

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm text-slate lg:hidden">{label}</p>
      {children}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-4 bg-white py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl">{copy.heading}</h2>
        <p className="mt-3 max-w-[68ch] text-slate">{copy.intro}</p>

        <div
          className={`mt-10 hidden gap-6 border-b border-ink/15 pb-3 text-sm text-slate lg:grid ${grid}`}
        >
          <p className="sr-only">{copy.heading}</p>
          <p className="col-start-3">{copy.columns.send}</p>
          <p>{copy.columns.get}</p>
          <p>{copy.columns.startingAt}</p>
          <p>{copy.columns.proof}</p>
        </div>

        <ul className="mt-6 lg:mt-0">
          {copy.services.map((service) => (
            <li
              key={service.id}
              className={`grid gap-5 border-b border-ink/15 py-7 md:grid-cols-2 lg:gap-6 ${grid}`}
            >
              <h3 className="text-lg">{service.name}</h3>
              <p>{service.what}</p>
              <Cell label={copy.columns.send}>
                <p>{service.send}</p>
              </Cell>
              <Cell label={copy.columns.get}>
                <p>{service.get}</p>
              </Cell>
              <Cell label={copy.columns.startingAt}>
                {service.price.catalogUrl ? (
                  <SafeLink
                    href={service.price.catalogUrl}
                    className="font-semibold underline underline-offset-4"
                  >
                    {service.price.label}
                  </SafeLink>
                ) : (
                  <p className="font-semibold">{service.price.label}</p>
                )}
              </Cell>
              <Cell label={copy.columns.proof}>
                <ul className="flex flex-col gap-1">
                  {service.proofBuilds.map((slug) => (
                    <li key={slug}>
                      <SafeLink href={`/builds/${slug}`} className="underline underline-offset-4">
                        {builds.find((build) => build.slug === slug)?.title}
                      </SafeLink>
                    </li>
                  ))}
                  {service.proofSection && (
                    <li>
                      <SafeLink
                        href={service.proofSection.href}
                        className="underline underline-offset-4"
                      >
                        {service.proofSection.label}
                      </SafeLink>
                    </li>
                  )}
                </ul>
              </Cell>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
