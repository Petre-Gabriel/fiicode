import { DummyMedic } from "@/components/client/medic/Medic.data";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Input from "@/components/core/Input.component";
import Text from "@/components/core/Text.component";
import { FiSearch } from "react-icons/fi";
import MedicProfile from "./MedicProfile.component";

export default function MedicsListing() {
  return (
    <div>
      <Card title="Cauta un medic">
        <div className="mb-6 flex gap-x-2">
          <div className="w-full">
            <Input
              name="pacientSearch"
              placeholder="Cauta medici dupa nume sau locatie"
            />
          </div>

          <Button>
            <FiSearch />
          </Button>
        </div>

        {/* <Table headCols={["#", "Nume complete", "CNP", "Adresa email"]}>
          {new Array(10).fill(0).map((_, idx) => (
            <TableRow key={idx}>
              <TableData className="font-bold">#{idx + 1}</TableData>
              <TableData>{DummyPatient.fullName}</TableData>
              <TableData>5000000000000</TableData>
              <TableData>{DummyPatient.email}</TableData>
            </TableRow>
          ))}{" "}
        </Table> */}

        <div className="grid grid-cols-3 gap-8">
          {new Array(5).fill(0).map((_, idx) => (
            <MedicProfile key={idx} medicData={DummyMedic} />
          ))}
        </div>

        <Text className="mt-8">* Sunt afisate primele 50 de rezultate</Text>
      </Card>
    </div>
  );
}
