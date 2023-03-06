import Button from "@/components/core/Button.component";
import Label from "@/components/core/Label.component";
import Text from "@/components/core/Text.component";
import classNames from "classnames";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

interface SidebarNotificationProps {
  label: string;
  description: string;

  color?: "primary";

  CTAText: string;
  CTALink: string;
}

const SidebarNotification = ({
  label,
  description,
  color = "primary",
  CTAText,
  CTALink,
}: SidebarNotificationProps) => {
  const CTAClass = classNames(
    "flex items-center gap-x-2 !py-1 !px-0 hover:!bg-transparent hover:underline",
    {
      "!text-primary": color === "primary",
    }
  );

  return (
    <div className="bg-slate-100 p-4 rounded">
      <div className="flex justify-between mb-3">
        <Label color={color}>{label}</Label>

        <button>
          <FiX />
        </button>
      </div>

      <Text className="!text-sm !text-neutral-700 mb-4">{description}</Text>

      <Link href={CTALink}>
        <Button as="span" color="none" className={CTAClass}>
          <span className="flex items-center gap-x-2">
            {CTAText}
            <BsArrowRight />
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default SidebarNotification;
