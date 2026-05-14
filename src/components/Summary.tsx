interface SummaryProps {
  paragraphs: string[];
}

export function Summary({ paragraphs }: SummaryProps) {
  return (
    <section className="mb-4 space-y-3">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-gray-700 leading-relaxed">
          {p}
        </p>
      ))}
    </section>
  );
}
