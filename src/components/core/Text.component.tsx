import classNames from "classnames";
import { ReactNode } from "react";

export type TextVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "a"
  | "span";

interface TextProps {
  as?: TextVariants;
  variant?: TextVariants;

  children?: ReactNode;
  className?: string;

  href?: string;
}

function GetStylingBooleanFromVariants(
  tag: TextVariants,
  variant: TextVariants,
  ComponentTag: TextVariants
): boolean {
  if ((variant === ComponentTag && ComponentTag === tag) || variant === tag)
    return true;

  return false;
}

const Text = ({
  as: ComponentTag = "p",
  href,
  variant,
  className,
  children,
}: TextProps) => {
  if (!variant) variant = ComponentTag;

  const componentClass = classNames(
    {
      "text-3xl lg:text-4xl xl:text-5xl font-bold !leading-tight":
        GetStylingBooleanFromVariants("h1", variant, ComponentTag),
      "text-3xl lg:text-4xl font-bold !leading-tight":
        GetStylingBooleanFromVariants("h2", variant, ComponentTag),
      "text-xl lg:text-2xl font-bold !leading-tight":
        GetStylingBooleanFromVariants("h3", variant, ComponentTag),
      "text-lg lg:text-xl font-bold !leading-tight":
        GetStylingBooleanFromVariants("h4", variant, ComponentTag),
      "text-sm lg:text-base": ["span", "p", "a"].includes(
        variant || ComponentTag
      ),
    },
    className
  );

  return (
    <ComponentTag className={componentClass} href={href}>
      {children}
    </ComponentTag>
  );
};

export default Text;
