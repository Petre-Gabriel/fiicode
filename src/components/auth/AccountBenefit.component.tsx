import { FiCheck } from "react-icons/fi";
import Text from "../core/Text.component";

interface AccountBenefitProps {
  title: string;
  children?: React.ReactNode;
}

const AccountBenefit = ({ children, title }: AccountBenefitProps) => {
  return (
    <div className="flex gap-x-3">
      <div className="bg-primary-300 rounded-full h-fit p-0.5 mt-1.5">
        <FiCheck className="text-white" />
      </div>
      <div>
        <Text as="h2" variant="h3" className="text-neutral-800">
          {title}
        </Text>
        <Text className="text-gray-500 max-w-prose">{children}</Text>
      </div>
    </div>
  );
};

export default AccountBenefit;
