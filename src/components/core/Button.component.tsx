"use client";

import classNames from "classnames";
import React from "react";

import { IoTriangleSharp } from "react-icons/io5";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string | string[];

  color?: "primary" | "green" | "red" | "none";

  as?: "span" | "button";

  size?: "default" | "small";

  tooltip?: string;
}

type FullButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  color = "primary",
  size = "default",
  tooltip,
  as: ButtonTag = "button",
  ...props
}: FullButtonProps) => {
  const buttonClass = classNames(
    "relative group w-fit flex items-center justify-center gap-x-2 text-center text-white text-sm !font-medium rounded-md rounded-[2px] cursor-pointer transition-all duration-150",
    "disabled:opacity-75 disabled:cursor-not-allowed",
    "ring-0 ring-offset-0 focus:ring",
    {
      "bg-primary hover:bg-primary-700 !ring-primary-200 !text-white":
        color === "primary",
      "bg-transparent hover:bg-gray-100/75 !ring-gray-200 !text-gray-700":
        color === "none",
      "bg-green-600 hover:bg-green-700 !ring-green-200 !text-white":
        color === "green",
      "bg-red-600 hover:bg-red-700 !ring-red-200 !text-white": color === "red",
    },
    {
      "py-2.5 px-5": size === "default",
      "py-2.5 px-4": size === "small",
    },
    className
  );

  return (
    <ButtonTag className={buttonClass} {...props}>
      {children}

      {tooltip && (
        <div className="absolute z-50 w-max pointer-events-none opacity-0 group-hover:opacity-100 top-[100%] mt-1 left-1/2 -translate-x-1/2">
          <IoTriangleSharp className="mx-auto text-slate-900 translate-y-[3px]" />
          <div className="block transition-all py-2 px-4 rounded text-white bg-zinc-900">
            {tooltip}
          </div>
        </div>
      )}
    </ButtonTag>
  );
};

export default Button;
