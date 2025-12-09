interface ReferenceBlockProps {
  text: string;
}

export function ReferenceBlock({ text }: ReferenceBlockProps) {
  return (
    <footer className="mt-auto pt-4 border-t border-gray-200">
      <p className="text-xs text-gray-500 text-center">{text}</p>
    </footer>
  );
}
