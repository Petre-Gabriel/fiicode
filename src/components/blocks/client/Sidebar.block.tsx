import Button from "@/components/core/Button.component";
import Text from "@/components/core/Text.component";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="bg-white w-full h-[100vh] w-fit px-2.5 py-4 shadow flex flex-col gap-y-8">
      <div className="text-center flex flex-col gap-y-2">
        <div className="mx-auto w-5/12 aspect-square rounded-full bg-red-500"></div>

        <div className="mb-2">
          <Text as="h3">John Doe</Text>
          <Text className="font-thin">john_doe@gmail.com</Text>
        </div>

        <Button
          className="mx-auto border border-gray-200 !font-bold flex gap-x-2 items-center"
          color="none"
        >
          <FiLogOut />
          Logout
        </Button>
      </div>

      <hr className="border-[1px] border-gray-100 rounded-full" />
    </aside>
  );
}
