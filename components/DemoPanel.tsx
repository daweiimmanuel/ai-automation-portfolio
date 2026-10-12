import { demos } from '@/content/demos';
import { site } from '@/content/site';
import { SafeLink } from './SafeLink';

const ui = site.ui.demo;

export function DemoPanel() {
  const scenario = demos[0];
  if (!scenario) return null;
  const fields = scenario.records.flatMap((record) => record.fields);

  return (
    <div className="rounded-panel bg-navy-700 p-4 text-white md:p-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm text-white/70">{ui.input}</p>
          <p className="whitespace-pre-wrap rounded-chip bg-navy-900 p-4 text-sm leading-relaxed text-white/90">
            {scenario.input}
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">{ui.output}</p>
          <ul className="divide-y divide-white/10 rounded-chip bg-navy-900">
            {fields.map((field) => (
              <li
                key={field.label}
                className="grid grid-cols-[1fr_auto] items-start gap-x-3 px-4 py-2.5"
              >
                <div className="min-w-0">
                  <p className="text-sm text-white/70">{field.label}</p>
                  <p className="font-mono text-sm break-words text-white">{field.value}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`rounded-chip px-2 py-0.5 text-sm font-semibold text-white ${
                      field.status === 'auto' ? 'bg-ok' : 'bg-review'
                    }`}
                  >
                    {field.status === 'auto' ? ui.autoFilled : ui.needsReview}
                  </span>
                  {field.confidence !== undefined && (
                    <span className="font-mono text-sm text-white/70">
                      {field.confidence.toFixed(2)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {scenario.summaryLine && (
            <p className="mt-3 text-sm text-white/80">{scenario.summaryLine}</p>
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-sm">
        <SafeLink
          href={`/builds/${scenario.caseStudySlug}`}
          className="text-amber underline underline-offset-4"
        >
          {ui.howThisWorks}
        </SafeLink>
        <p className="text-white/70">{scenario.footnote}</p>
      </div>
    </div>
  );
}
