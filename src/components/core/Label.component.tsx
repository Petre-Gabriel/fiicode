import classNames from "classnames";
import React from "react";

export type LabelColors = "primary" | "green" | "red";
export type LabelSize = "xs" | "sm" | "md" | "lg";

interface LabelProps {
  children?: React.ReactNode;
  color?: LabelColors;
  size?: LabelSize;

  className?: string;
}

const Label = ({
  children,
  className,
  size = "xs",
  color = "primary",
}: LabelProps) => {
  const LabelClass = classNames(
    "w-fit h-fit py-0.5 px-2 font-medium rounded",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
    },
    {
      "text-primary-800 bg-primary-100/25": color === "primary",
      "text-green-800 bg-green-200": color === "green",
      "text-red-800 bg-red-200": color === "red",
    },
    className
  );

  return <div className={LabelClass}>{children}</div>;
};

export default Label;
