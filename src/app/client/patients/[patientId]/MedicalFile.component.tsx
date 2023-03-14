import Text from "@/components/core/Text.component";

export default function MedicalFile({
  fields,
  titleField,
}: {
  fields: string[][];
  titleField?: string[];
}) {
  return (
    <div className="flex flex-col">
      {titleField && (
        <div className="px-6 py-4 w-full bg-black flex justify-between">
          <Text className="font-bold text-white">{titleField[0]}</Text>
          <Text className="font-bold text-white">{titleField[1]}</Text>
        </div>
      )}

      {fields.map((field) => (
        <div
          className="px-6 py-4 w-full odd:bg-slate-50 flex justify-between"
          key={field[0]}
        >
          <Text className="font-medium">{field[0]}</Text>
          <Text>{field[1]}</Text>
        </div>
      ))}
    </div>
  );
}
