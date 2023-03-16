export interface Medic {
  fullName: string;
  type: string;
  rating: number;
  patients: number;

  pictureUrl: string | null;
}

export const DummyMedic: Medic = {
  fullName: "Petre Gabriel",
  type: "Medic de familie",
  rating: 4.5,
  patients: 126,
  pictureUrl: "/images/dummy.jpg",
};
