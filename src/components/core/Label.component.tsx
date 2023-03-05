import classNames from "classnames";
import React from "react";

interface LabelProps {
  children?: React.ReactNode;
  color?: "primary";
}

const Label = ({ children, color = "primary" }: LabelProps) => {
  const LabelClass = classNames("py-0.5 px-2 text-xs font-medium rounded", {
    "text-primary-800 bg-primary-100/25": color === "primary",
  });

  return <div className={LabelClass}>{children}</div>;
};

export default Label;
