import classNames from "classnames";

interface InputProps {
  label: string;
  name: string;
}

type FullInputProps = InputProps & React.HTMLProps<HTMLInputElement>;

const Input = ({ label, name, className, ...props }: FullInputProps) => {
  const InputClass = classNames(
    "p-2 rounded-md bg-gray-50/50 text-gray-600 placeholder:!text-gray-500 border border-gray-200 outline-0 transition-all focus:ring ring-offset-0 ring-offset-primary-400",
    className
  );

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-neutral-700 font-medium text-base mb-2"
      >
        {label}
      </label>
      <input className={InputClass} name={name} id={name} {...props} />
    </div>
  );
};

export default Input;
