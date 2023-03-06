import SidebarLinkGroup from "@/components/client/nav/SidebarLinkGroup.component";
import SidebarNotification from "@/components/client/nav/SidebarNotification.component";
import Button from "@/components/core/Button.component";
import Text from "@/components/core/Text.component";
import {
  FiActivity,
  FiArchive,
  FiCalendar,
  FiLogOut,
  FiPhone,
  FiPieChart,
  FiSliders,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import SidebarLink from "../../client/nav/SidebarLink.component";

export default function Sidebar() {
  return (
    <aside className="sticky left-0 top-0 z-10 bg-white w-full h-[100vh] w-fit px-2.5 py-4 shadow flex flex-col justify-between">
      <div className="flex flex-col gap-y-8">
        <div className="text-center flex flex-col gap-y-2">
          <div className="mx-auto w-5/12 max-w-[128px] aspect-square rounded-full bg-red-500"></div>

          <div className="mb-2">
            <Text as="h3">Petre Gabriel</Text>
            <Text className="font-thin">gabrielpetre04@gmail.com</Text>
          </div>

          <Button
            className="!w-full mx-auto border border-gray-200 hover:!text-red-700 !font-bold flex gap-x-2 justify-center items-center"
            color="none"
          >
            <FiLogOut size={18} />
            Logout
          </Button>
        </div>

        <SidebarLinkGroup>
          <SidebarLink active href="/client" title="Acasa" icon={FiPieChart} />
          <SidebarLink href="/client" title="Pacienti" icon={FiUsers} />
          <SidebarLink href="/client" title="Medici" icon={FiActivity} />
          <SidebarLink href="/client" title="Documente" icon={FiArchive} />
          <SidebarLink href="/client" title="Programari" icon={FiCalendar} />
          <SidebarLink href="/client" title="Contacteaza-ne" icon={FiPhone} />
        </SidebarLinkGroup>

        <SidebarLinkGroup title="Despre cont">
          <SidebarLink
            href="/client/settings"
            title="Setari cont"
            icon={FiSliders}
          />
        </SidebarLinkGroup>
      </div>

      <div className="flex flex-col gap-y-2">
        <SidebarNotification
          label="Programare"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          CTAText="Vezi programarea"
          CTALink="/client/reservation"
        />
      </div>
    </aside>
  );
}
