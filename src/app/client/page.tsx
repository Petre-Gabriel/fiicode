"use client";

import { DummyPatient } from "@/components/client/patient/Patient.data";
import PatientProblem from "@/components/client/patient/PatientProblem.component";
import Card from "@/components/core/Card.component";
import ClientGrid from "@/components/layout/ClientGrid.component";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function ClientPortal() {
  return (
    <div>
      <ClientGrid>
        <Card title="Statistici Generale" className="col-span-7">
          <div className="w-full mx-auto">
            <Chart
              type="bar"
              data={{
                labels: [
                  "Ianuarie",
                  "Februarie",
                  "Martie",
                  "Aprilie",
                  "Mai",
                  "Iunie",
                ],
                datasets: [
                  {
                    label: "Numar programari",
                    data: [25, 12, 43, 67, 23, 11],
                    backgroundColor: "rgba(37, 150, 190, 0.2)",
                    borderColor: "#1B57DB",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </Card>

        <Card title="Probleme pacienti" className="col-span-5">
          <div className="flex flex-col">
            <ul className="divide-y divide-slate-200">
              {new Array(5).fill(0).map((_, idx) => (
                <li key={idx}>
                  <PatientProblem
                    patientData={DummyPatient}
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in placerat arcu, sit amet aliquam velit."
                  />
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card title="sdsdsd" className="col-span-12"></Card>
      </ClientGrid>
    </div>
  );
}
