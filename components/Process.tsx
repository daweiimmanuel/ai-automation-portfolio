import { site } from '@/content/site';
import { Container } from './Container';

const copy = site.process;

export function Process() {
  return (
    <section id="how-i-work" className="scroll-mt-4 py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl">{copy.heading}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="border-t border-ink/15 pt-4">
              <p className="text-xl font-semibold text-navy-900">{index + 1}</p>
              <h3 className="mt-2 text-lg">{step.title}</h3>
              <p className="mt-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
