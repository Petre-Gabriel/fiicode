"use client";

import SidebarLinkGroup from "@/components/client/nav/SidebarLinkGroup.component";
import SidebarNotification from "@/components/client/nav/SidebarNotification.component";
import { DummyPatient } from "@/components/client/patient/Patient.data";
import Button from "@/components/core/Button.component";
import Text from "@/components/core/Text.component";
import { usePathname } from "next/navigation";
import {
  FiActivity,
  FiArchive,
  FiCalendar,
  FiLogOut,
  FiPhone,
  FiPieChart,
  FiSliders,
  FiUsers,
} from "react-icons/fi";
import SidebarLink from "../../client/nav/SidebarLink.component";

export default function Sidebar() {
  const routePath = usePathname();

  function isLinkActive(linkName: string): boolean {
    const activeLinkName = routePath.split("/")[2] ?? "/";

    if (linkName === "home" && activeLinkName === "/") return true;

    if (linkName.toLowerCase() === activeLinkName.toLowerCase()) return true;

    return false;
  }

  return (
    <aside className="sticky left-0 top-0 z-10 bg-white w-full h-[100vh] w-fit px-2.5 py-4 shadow flex flex-col justify-between">
      <div className="flex flex-col gap-y-8">
        <div className="text-center flex flex-col gap-y-2">
          <div
            className="mx-auto w-5/12 max-w-[128px] aspect-square rounded-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${DummyPatient.pictureUrl})`,
            }}
          ></div>

          <div className="mb-2">
            <Text as="h3" className="!text-slate-900">
              {DummyPatient.fullName}
            </Text>
            <Text className="font-thin text-slate-700">
              {DummyPatient.email}
            </Text>
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
          <SidebarLink
            active={isLinkActive("home")}
            href="/client"
            title="Acasa"
            icon={FiPieChart}
          />
          <SidebarLink
            active={isLinkActive("patients")}
            href="/client/patients"
            title="Pacienti"
            icon={FiUsers}
          />
          <SidebarLink
            active={isLinkActive("medics")}
            href="/client"
            title="Medici"
            icon={FiActivity}
          />
          <SidebarLink
            active={isLinkActive("documents")}
            href="/client"
            title="Documente"
            icon={FiArchive}
          />
          <SidebarLink
            active={isLinkActive("appointments")}
            href="/client"
            title="Programari"
            icon={FiCalendar}
          />
          <SidebarLink
            active={isLinkActive("contact")}
            href="/client"
            title="Contacteaza-ne"
            icon={FiPhone}
          />
        </SidebarLinkGroup>

        <SidebarLinkGroup title="Despre cont">
          <SidebarLink
            href="/client/account"
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
