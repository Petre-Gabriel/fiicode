import classNames from "classnames";
import Text from "./Text.component";

interface CardProps {
  title?: string;

  children?: React.ReactNode;
  className?: string;
  contentClass?: string;
}

const Card = ({ children, className, contentClass, title }: CardProps) => {
  const CardClass = classNames(
    "p-8 border border-gray-100 shadow-card rounded bg-white",
    className
  );

  return (
    <div className={CardClass}>
      {title && (
        <div className="pb-4 border-b border-gray-200 mb-4">
          <Text as="h3" className="text-neutral-900">
            {title}
          </Text>
        </div>
      )}

      <div className={contentClass}>{children}</div>
    </div>
  );
};

export default Card;
