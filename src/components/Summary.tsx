interface SummaryProps {
  text: string;
}

export function Summary({ text }: SummaryProps) {
  return (
    <section className="mb-4">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Summary
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </section>
  );
}
