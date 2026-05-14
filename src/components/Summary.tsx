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
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Summary
      </h2>
      <div className="flex items-end justify-between gap-4">
        <p className="text-sm text-gray-700 leading-relaxed flex-1">{text}</p>
        {hasStory && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="no-print shrink-0 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-900 transition-colors"
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
