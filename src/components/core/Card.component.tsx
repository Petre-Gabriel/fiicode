import classNames from "classnames";
import Label, { LabelColors, LabelSize } from "./Label.component";
import Text from "./Text.component";

interface CardProps {
  title?: string;
  titleLabel?: {
    text: string;
    color?: LabelColors;
    size?: LabelSize;
  };

  children?: React.ReactNode;
  className?: string;
  contentClass?: string;
}

const Card = ({
  children,
  className,
  contentClass,
  title,
  titleLabel,
}: CardProps) => {
  const CardClass = classNames(
    "p-8 border border-gray-100 shadow-card rounded bg-white",
    className
  );

  return (
    <div className={CardClass}>
      {title && (
        <div className="pb-4 border-b border-slate-100 mb-4">
          <Text as="h3" className="text-neutral-900 flex items-center gap-x-2">
            {title}
            {titleLabel && (
              <Label color={titleLabel.color} size={titleLabel.size}>
                {titleLabel.text}
              </Label>
            )}
          </Text>
        </div>
      )}

      <div className={contentClass}>{children}</div>
    </div>
  );
};

export default Card;
