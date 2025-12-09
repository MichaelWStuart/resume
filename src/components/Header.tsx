interface HeaderProps {
  name: string;
  email: string;
  phone: string;
}

export function Header({ name, email, phone }: HeaderProps) {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">{name}</h1>
      <div className="text-sm text-gray-600 flex gap-4">
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </header>
  );
}
