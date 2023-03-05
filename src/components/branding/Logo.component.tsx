import Text, { TextVariants } from "../core/Text.component";

interface LogoProps {
  as?: TextVariants;
}

const Logo = ({ as }: LogoProps) => {
  return (
    <Text as={as} className="font-medium !text-2xl text-neutral-900">
      WeCare Health
    </Text>
  );
};

export default Logo;
