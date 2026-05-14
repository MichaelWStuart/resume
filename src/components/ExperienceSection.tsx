import { ExperienceItem } from "./ExperienceItem";
import type { ExperienceEntry } from "../content/resume";

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <section className="mb-4">
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
