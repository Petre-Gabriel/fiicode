export default interface Patient {
  fullName: string;
  email: string;
  phone: string;
  pictureUrl: string | null;
}

export const DummyPatient: Patient = {
  fullName: "Petre Gabriel",
  email: "gabrielpetre04@gmail.com",
  phone: "0730000000",
  pictureUrl: "/images/dummy.jpg",
};
