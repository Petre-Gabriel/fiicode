import Text from "@/components/core/Text.component";

export default function MedicalFile({
  fields,
  titleField,
}: {
  fields: React.ReactNode[][];
  titleField?: string[];
}) {
  return (
    <div className="flex flex-col">
      {titleField && (
        <div
          className="px-6 py-4 w-full bg-black grid justify-start"
          style={{
            gridTemplateColumns: `repeat(${fields[0].length}, 1fr)`,
          }}
        >
          <Text className="font-bold text-white">{titleField[0]}</Text>
          <Text className="font-bold text-white">{titleField[1]}</Text>
        </div>
      )}

      {fields.map((field, idx) => (
        <div
          className="px-6 py-4 w-full odd:bg-slate-50 grid justify-start"
          style={{
            gridTemplateColumns: `repeat(${fields[0].length}, 1fr)`,
          }}
          key={idx}
        >
          <Text className="font-medium">{field[0]}</Text>
          <Text>{field[1]}</Text>
        </div>
      ))}
    </div>
  );
}
