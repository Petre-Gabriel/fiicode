import Patient, {
  DummyPatient,
} from "@/components/client/patient/Patient.data";
import Button from "@/components/core/Button.component";
import Card from "@/components/core/Card.component";
import Link from "next/link";
import { FiCalendar, FiUser } from "react-icons/fi";

export default function PatientsPage() {
  return (
    <div>
      <Card title="Pacientii Dvs.">
        <div className="w-full">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left bg-neutral-900 text-white">
                <th className="py-4 px-2 pl-4">#</th>
                <th className="py-4 px-2">Nume</th>
                <th className="py-4 px-2">Email</th>
                <th className="py-4 px-2 pr-4">Actiuni</th>
              </tr>
            </thead>
            <tbody>
              {new Array(10).fill(DummyPatient).map((patient: Patient, idx) => (
                <tr
                  className="even:bg-slate-50 text-md text-slate-800 items-center"
                  key={idx}
                >
                  <td className="py-4 px-2 pl-4 font-bold text-sm">
                    {idx + 1}
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-x-2 items-center">
                      <span>
                        <div
                          className="bg-center bg-cover w-[28px] h-[28px] rounded-full"
                          style={{
                            backgroundImage: `url(${patient.pictureUrl})`,
                          }}
                        ></div>
                      </span>
                      <span>{patient.fullName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">{patient.email}</td>
                  <td className="py-4 px-2 pr-4 flex gap-x-4">
                    <Link href="/client/patients/32432">
                      <Button
                        as="span"
                        color="none"
                        size="small"
                        className="w-fit flex gap-x-2 items-center"
                        tooltip="Vezi profil"
                      >
                        <FiUser size={18} />
                      </Button>
                    </Link>
                    <Button
                      color="green"
                      size="small"
                      className="flex gap-x-2 items-center"
                      tooltip="Programeaza pacient"
                    >
                      <FiCalendar size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
