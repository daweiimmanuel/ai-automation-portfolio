import { builds } from '@/content/builds';
import { demos } from '@/content/demos';
import { site } from '@/content/site';
import type { Build } from '@/content/types';
import { Container } from './Container';
import { SafeLink } from './SafeLink';
import { StackLine } from './StackLine';

const copy = site.buildsSection;

function ChatMock({ build }: { build: Build }) {
  const demo = demos.find((d) => d.id === build.demoId);
  if (!demo) return null;
  return (
    <div className="flex flex-col gap-3 rounded-panel bg-navy-700 p-5">
      <p className="max-w-[85%] self-end rounded-panel bg-white px-4 py-3 text-ink">{demo.input}</p>
      {demo.assistantReply && (
        <p className="max-w-[85%] self-start rounded-panel bg-navy-900 px-4 py-3 text-white">
          {demo.assistantReply}
        </p>
      )}
    </div>
  );
}

function BuildText({ build, large = false }: { build: Build; large?: boolean }) {
  return (
    <div>
      <p className="text-sm text-slate">{copy.statusLabels[build.status]}</p>
      <h3 className={`mt-1 ${large ? 'text-xl' : 'text-lg'}`}>{build.title}</h3>
      <p className="mt-2 max-w-[68ch]">{build.summary}</p>
      <StackLine items={build.stack} className="mt-3 text-sm text-slate" />
      <SafeLink
        href={`/builds/${build.slug}`}
        className="mt-4 inline-block font-semibold text-ink underline underline-offset-4"
      >
        {copy.readCaseStudy}
      </SafeLink>
    </div>
  );
}

export function Builds() {
  const published = builds.filter((build) => build.published);
  const featured = published.find((build) => build.featured) ?? published[0];
  const rest = published.filter((build) => build !== featured);

  return (
    <section id="builds" className="scroll-mt-4 py-16 lg:py-24">
      <Container>
        <h2 className="text-2xl">{copy.heading}</h2>
        <p className="mt-3 max-w-[68ch] text-slate">{copy.intro}</p>

        {featured && (
          <div className="mt-10 grid items-center gap-8 border-y border-ink/15 bg-white p-6 lg:grid-cols-2 lg:p-8">
            <BuildText build={featured} large />
            <ChatMock build={featured} />
          </div>
        )}

        <ul className="mt-2">
          {rest.map((build) => (
            <li key={build.slug} className="border-b border-ink/15 py-8">
              <BuildText build={build} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
