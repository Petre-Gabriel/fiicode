/* eslint-disable @next/next/no-img-element */
import { Medic } from "@/components/client/medic/Medic.data";
import Button from "@/components/core/Button.component";
import Rating from "@/components/core/Rating.component";
import Text from "@/components/core/Text.component";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";

export default function MedicProfile({ medicData }: { medicData: Medic }) {
  return (
    <div>
      <div
        className="w-full h-[250px] bg-center bg-cover shadow"
        style={{
          backgroundImage: `url(${medicData.pictureUrl})`,
        }}
      ></div>

      <div className="py-6 px-6 flex flex-col gap-y-3 border">
        <div>
          <div className="flex items-center gap-x-3">
            <Text as="h3" className="text-slate-800">
              {medicData.fullName}
            </Text>

            <div>
              <Rating stars={4} />
            </div>
          </div>
          <Text className="text-slate-500">{medicData.type}</Text>
        </div>

        <div className="flex flex-col gap-y-2">
          <Text className="flex items-center gap-x-2 text-slate-500">
            <FiMapPin />
            Bd. Matei Basarab, bloc K3, scara A
          </Text>

          <Text className="flex items-center gap-x-2 text-slate-500">
            <FiPhone />
            0700-000-000
          </Text>

          <Text className="flex items-center gap-x-2 text-slate-500">
            <FiMail />
            programari@medic-familie.ro
          </Text>
        </div>

        <div>
          <Link href="/client/medics/3234234">
            <Button as="span" color="green" className="w-full mt-2">
              <FiUser />
              Vezi profil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
