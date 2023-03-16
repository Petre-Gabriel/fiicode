import classNames from "classnames";

interface Select {
  children?: React.ReactNode;
  name: string;
  label?: string;
}

type CompleteSelectProps = Select & React.HTMLProps<HTMLSelectElement>;

export default function Select({
  children,
  name,
  label,
  className,
  ...props
}: CompleteSelectProps) {
  const SelectClass = classNames(
    "w-full p-2 rounded-md bg-gray-50/50 text-gray-600 border border-gray-200 outline-0 transition-all focus:ring ring-offset-0 ring-offset-primary-400",
    className
  );

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} className={SelectClass} {...props}>
        {children}
      </select>
    </div>
  );
}
