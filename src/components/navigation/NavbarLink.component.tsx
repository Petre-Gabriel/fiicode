import NextLink from "next/link";
import Text from "../core/Text.component";

interface NavbarLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavbarLink = ({ children, href }: NavbarLinkProps) => {
  return (
    <NextLink href={href}>
      <Text
        as="span"
        className="font-medium text-zinc-600 hover:text-zinc-900 transition-all duration-50"
      >
        {children}
      </Text>
    </NextLink>
  );
};

export default NavbarLink;
