export default function TableRow({ children }: { children?: React.ReactNode }) {
  return (
    <tr className="even:bg-slate-50 text-md text-slate-800 items-center">
      {children}
    </tr>
  );
}
