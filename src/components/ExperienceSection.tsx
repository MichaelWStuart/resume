import { ExperienceItem } from "./ExperienceItem";
import type { ExperienceEntry } from "../content/resume";

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <section className="mb-4">
      <h2 className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-2">
        Experience
      </h2>
      {entries.map((entry, index) => (
        <ExperienceItem
          key={index}
          title={entry.title}
          company={entry.company}
          dateRange={entry.dateRange}
          location={entry.location}
          tagline={entry.tagline}
          bullets={entry.bullets}
        />
      ))}
    </section>
  );
}
