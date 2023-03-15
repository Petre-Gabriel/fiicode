import React from "react";

import { DummyPatient } from "@/components/client/patient/Patient.data";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Text from "@/components/core/Text.component";
import MedicalFile from "./MedicalFile.component";
import Input from "@/components/core/Input.component";

export default function MedicalFileCard() {
  const [editable, setEditable] = React.useState(false);

  return (
    <Card title="Fisa medicala">
      <MedicalFile
        titleField={["Data", "Value"]}
        fields={[
          [
            "Nume complete",
            <>
              {editable === false && DummyPatient.fullName}
              {editable === true && (
                <div>
                  <Input
                    name="fullName"
                    placeholder="Nume complete"
                    value={DummyPatient.fullName}
                    className="w-full"
                  />
                </div>
              )}
            </>,
          ],
          [
            "CNP",
            <>
              {editable === false && "5000000000000"}
              {editable === true && (
                <div>
                  <Input
                    name="socialSecurity"
                    placeholder="CNP"
                    value={"5000000000000"}
                    className="w-full"
                  />
                </div>
              )}
            </>,
          ],
          [
            "Data nasterii",
            <>
              {editable === false && "03 Iulie 2004"}
              {editable === true && (
                <div>
                  <Input
                    name="birthDate"
                    placeholder="Data nasterii"
                    value={"03.07.2004"}
                    type="date"
                    className="w-full"
                  />
                </div>
              )}
            </>,
          ],
          [
            "Este suferind de",
            <>
              {editable === false && "Probleme cardiologice"}
              {editable === true && (
                <div>
                  <Input
                    name="knownIllness"
                    placeholder="Este suferind de"
                    value={"Probleme cardiologice"}
                    className="w-full"
                  />
                </div>
              )}
            </>,
          ],
        ]}
      />

      <Text className="mt-6 flex items-center gap-x-2">
        Datele nu sunt corecte?{" "}
        <Button
          className="!text-primary !text-base font-medium !px-0 !py-0 hover:!bg-transparent"
          tooltip="Editeaza datele pacientului"
          color="none"
          onClick={() => setEditable((isEditable) => !isEditable)}
        >
          Editeaza-le!
        </Button>
      </Text>
    </Card>
  );
}
