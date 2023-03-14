import classNames from "classnames";

export default function Divider({ className }: { className?: string }) {
  const DividerClass = classNames(
    "w-full rounded h-[1px] bg-slate-100",
    className
  );

  return <div className={DividerClass}></div>;
}
