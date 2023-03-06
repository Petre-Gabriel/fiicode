import Button from "@/components/core/Button.component";
import Text from "@/components/core/Text.component";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import Patient from "./Patient.data";

interface PatientProblemProps {
  patientData: Patient;
  message: string;
}

const PatientProblem = ({ patientData, message }: PatientProblemProps) => {
  return (
    <Link href="/client">
      <div className="py-4 px-3 rounded hover:bg-slate-50">
        <div className="flex gap-x-2 items-center mb-2">
          <div
            className="w-10 h-10 mt-1 rounded-full bg-gray-200 bg-center bg-contain"
            style={{
              backgroundImage: `url(${patientData.pictureUrl})`,
            }}
          ></div>

          <div>
            <Text
              as="p"
              className="!font-medium !leading-none !text-lg text-slate-900 mb-0.5"
            >
              {patientData.fullName}
            </Text>
            <Text className="!leading-none !text-slate-500">
              {patientData.email}
            </Text>
          </div>
        </div>

        <div className="w-full">
          <Text className="!text-sm !text-slate-600 max-w-prose">
            {message}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default PatientProblem;
