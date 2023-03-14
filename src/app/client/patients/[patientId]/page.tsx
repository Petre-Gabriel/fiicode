"use client";

import { DummyPatient } from "@/components/client/patient/Patient.data";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Divider from "@/components/core/Divider.component";
import Label from "@/components/core/Label.component";
import Modal from "@/components/core/Modal.component";
import Table from "@/components/core/Table.component";
import TableData from "@/components/core/TableData.component";
import TableRow from "@/components/core/TableRow.component";
import Text from "@/components/core/Text.component";
import ClientGrid from "@/components/layout/ClientGrid.component";
import { SendDeleteNotification } from "@/models/MedicalFile.model";
import React from "react";
import { FiCalendar, FiEdit, FiTrash } from "react-icons/fi";
import DetailsListing from "./DetailsListing.component";
import MedicalFile from "./MedicalFile.component";

export default function PatientProfile() {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  return (
    <ClientGrid>
      <Modal
        title="Test"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        sdsdsds
      </Modal>

      <div className="col-span-9 flex flex-col gap-y-8">
        <Card title="Fisa medicala">
          <MedicalFile
            titleField={["Data", "Value"]}
            fields={[
              ["Nume complete", DummyPatient.fullName],
              ["CNP", "5000000000000"],
              ["Data nasterii", "03 Iulie 2004"],
              ["Este suferind de", "Probleme cardiologocie"],
            ]}
          />

          <Text className="mt-6 flex items-center gap-x-2">
            Datele nu sunt corecte?{" "}
            <Button
              className="!text-primary !text-base font-medium !px-0 !py-0 hover:!bg-transparent"
              tooltip="Editeaza datele pacientului"
              color="none"
            >
              Editeaza-le!
            </Button>
          </Text>
        </Card>

        <Card
          title="Programari pacient"
          titleLabel={{ text: "45", color: "green", size: "sm" }}
        >
          <Divider className="mt-4 mb-6" />

          <Table headCols={["#", "Ora programare", "Status", "Actiuni"]}>
            <TableRow>
              <TableData className="font-bold">#1</TableData>
              <TableData>14:30</TableData>
              <TableData>
                <Label color="red">Finalizata</Label>
              </TableData>
              <TableData className="flex gap-x-2">
                <Button color="none" tooltip="Schimba status">
                  <FiEdit />
                </Button>
                <Button
                  color="red"
                  tooltip="Sterge"
                  onClick={() => setOpenDeleteModal(true)}
                  disabled={false}
                >
                  <FiTrash />
                </Button>
              </TableData>
            </TableRow>
          </Table>
        </Card>
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
