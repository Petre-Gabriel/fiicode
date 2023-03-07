interface ClientGridProps {
  children?: React.ReactNode;
}

export default function ClientGrid({ children }: ClientGridProps) {
  return <div className="grid grid-cols-12 gap-8">{children}</div>;
}
