interface ExperienceItemProps {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  tagline: string;
  bullets: string[];
}

export function ExperienceItem({
  title,
  company,
  dateRange,
  location,
  tagline,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="experience-item mb-4">
      <div className="experience-header flex justify-between items-baseline mb-0.5">
        <div>
          <span className="font-semibold text-gray-900">{title}</span>
          <span className="text-gray-500"> · {company}</span>
        </div>
        <div className="text-sm text-gray-500">
          {dateRange} · {location}
        </div>
      </div>
      <p className="text-sm text-gray-500 italic mb-1.5">{tagline}</p>
      <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-0.5">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
