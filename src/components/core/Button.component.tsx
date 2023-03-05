import classNames from "classnames";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string | string[];

  color?: "primary" | "none";

  as?: "span" | "button";
}

type FullButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  color = "primary",
  as: ButtonTag = "button",
  ...props
}: FullButtonProps) => {
  const buttonClass = classNames(
    "w-fit block text-center text-white text-sm !font-medium py-2.5 px-5 rounded-md rounded-[2px] cursor-pointer transition-all duration-150",
    {
      "bg-primary hover:bg-primary-700 ring-0 ring-offset-primary-200 ring-offset-0 focus:ring":
        color === "primary",
      "bg-transparent hover:bg-gray-100 !text-gray-700": color === "none",
    },
    className
  );

  return (
    <ButtonTag className={buttonClass} {...props}>
      {children}
    </ButtonTag>
  );
};

export default Button;
