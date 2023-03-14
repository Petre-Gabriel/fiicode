import React from "react";

export default function Table({
  children,
  headCols,
}: {
  children?: React.ReactNode;
  headCols: string[];
}) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-left bg-neutral-900 text-white">
          {headCols.map((headCol, idx) => (
            <th
              className={`py-4 px-2 ${idx === 0 && "pl-4"} ${
                idx === headCols.length - 1 && "pr-4"
              }`}
              key={headCol}
            >
              {headCol}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
