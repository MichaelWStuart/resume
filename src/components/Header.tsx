interface HeaderProps {
  name: string;
  email: string;
  phone: string;
}

export function Header({ name, email, phone }: HeaderProps) {
  return (
    <header className="mb-4">
      <h1 className="font-display text-3xl font-semibold text-gray-900 tracking-tight mb-1">{name}</h1>
      <div className="font-mono text-sm text-gray-500 flex gap-4">
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </header>
  );
}
