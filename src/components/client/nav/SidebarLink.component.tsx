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
    "flex items-center !text-base !w-full !p-2 group hover:!bg-primary-100[.1]",
    active && "!bg-primary-100/[.1]"
  );

  const ButtonTextClass = classNames(
    "ml-2.5 text-slate-800 group-hover:text-primary-500",
    active && "!text-primary-500"
  );

  const IconClass = classNames(
    "text-slate-800 group-hover:text-primary-500",
    active && "!text-primary-500"
  );

  return (
    <li className="list-none">
      <NavLink href={href}>
        <Button as="span" color="none" className={ButtonClass}>
          <ReactIcon size={16} className={IconClass} />
          <span className={ButtonTextClass}>{title}</span>
        </Button>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
