import React from "react";
import classNames from "classnames";

export default function TableData({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const TableDataClass = classNames(
    "py-4 px-2 first:pl-4 last:pr-4",
    className
  );

  return <td className={TableDataClass}>{children}</td>;
}
