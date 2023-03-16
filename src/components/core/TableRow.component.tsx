import classNames from "classnames";

export default function TableRow({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const RowClass = classNames(
    "even:bg-slate-50 text-md text-slate-800 items-center",
    className
  );

  return <tr className={RowClass}>{children}</tr>;
}
