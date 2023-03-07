import { DummyPatient } from "@/components/client/patient/Patient.data";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Text from "@/components/core/Text.component";
import ClientGrid from "@/components/layout/ClientGrid.component";
import { FiCalendar } from "react-icons/fi";
import DetailsListing from "./DetailsListing.component";

export default function PatientProfile() {
  return (
    <ClientGrid>
      <div className="col-span-9">
        <Card></Card>
      </div>
      <div className="col-span-3">
        <Text className="uppercase font-medium text-slate-700 mb-4">
          Detalii pacient #324234
        </Text>

        <div className="bg-white">
          <div
            className="w-full h-[250px] bg-slate-100 bg-center bg-cover"
            style={{
              backgroundImage: `url(${DummyPatient.pictureUrl})`,
            }}
          ></div>

          <div className="p-8 flex flex-col gap-y-4">
            <div>
              <Text as="h1" variant="h3" className="text-slate-800">
                {DummyPatient.fullName}
              </Text>
              <Text className="text-slate-500">{DummyPatient.email}</Text>
            </div>

            <DetailsListing
              details={[
                ["Varsta", 25],
                ["Sex", "Barbat"],
                ["Grupa sanguina", "O+"],
                ["Inaltime (m)", "-"],
                ["Greutate (kg)", "~75"],
              ]}
            />

            <div>
              <Button color="green" className="w-full">
                <FiCalendar />
                Programeaza o consultatie
              </Button>
              {/* <Text className="text-slate-500 !text-sm mt-1">
                * Pacientul va fi informat prin email
              </Text> */}
            </div>
          </div>
        </div>
      </div>
    </ClientGrid>
  );
}
