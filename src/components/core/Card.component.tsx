import classNames from "classnames";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const CardClass = classNames(
    "p-8 border border-gray-100 shadow-card rounded",
    className
  );

  return <div className={CardClass}>{children}</div>;
};

export default Card;
