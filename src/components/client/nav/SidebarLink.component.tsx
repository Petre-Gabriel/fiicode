import Button from "@/components/core/Button.component";
import classNames from "classnames";
import NavLink from "next/link";
import { IconType as ReactIconsType } from "react-icons";
import { FiLayers } from "react-icons/fi";

interface SidebarLinkProps {
  href: string;
  title: string;
  icon: ReactIconsType;

  active?: boolean;
}

const SidebarLink = ({
  title,
  active,
  href,
  icon: ReactIcon,
}: SidebarLinkProps) => {
  const ButtonClass = classNames(
    "flex items-center !text-base !w-full !p-2 group",
    active && "!bg-gray-100/75"
  );

  const ButtonTextClass = classNames(
    "ml-2.5 !text-neutral-700 group-hover:!text-neutral-900",
    active && "!text-neutral-900"
  );

  return (
    <li className="list-none">
      <NavLink href={href}>
        <Button as="span" color="none" className={ButtonClass}>
          <ReactIcon
            size={16}
            className="!text-neutral-700 group-hover:!text-neutral-900"
          />
          <span className={ButtonTextClass}>{title}</span>
        </Button>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
