import Link from "next/link";
import Logo from "../branding/Logo.component";
import Button from "../core/Button.component";
import Text from "../core/Text.component";
import NavbarLink from "../navigation/NavbarLink.component";

const Navbar = () => {
  return (
    <nav className="bg-white grid grid-cols-3 items-center px-16 py-6 h-[12vh]">
      <Logo />

      <div className="flex gap-x-6 justify-center items-center">
        <NavbarLink href="/">home</NavbarLink>
        <NavbarLink href="/">about us</NavbarLink>
        <NavbarLink href="/">client portal</NavbarLink>
      </div>

      <div className="flex gap-x-3 justify-end items-center">
        <Link href="/client/login">
          <Button color="none" as="span" className="w-fit">
            Login
          </Button>
        </Link>
        <Link href="/client/sign-up">
          <Button as="span">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
