import { useState } from "react";

interface SummaryProps {
  text: string;
  storyParagraphs?: string[];
}

export function Summary({ text, storyParagraphs }: SummaryProps) {
  const [open, setOpen] = useState(false);
  const hasStory = storyParagraphs && storyParagraphs.length > 0;

  return (
    <section className="mb-4">
      <div className="relative">
        <h2 className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-2">
          Summary
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
        {hasStory && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="no-print font-mono absolute bottom-0 right-0 text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] hover:text-gray-900 transition-colors"
            aria-expanded={open}
          >
            {open ? "Less −" : "More +"}
          </button>
        )}
      </div>
      {open && hasStory && (
        <div className="no-print mt-3 space-y-3 text-sm text-gray-700 leading-relaxed">
          {storyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </section>
  );
}
