import Divider from "@/components/core/Divider.component";
import Text from "@/components/core/Text.component";

interface DetailsListingProps {
  details: any[][];
}

export default function DetailsListing({ details }: DetailsListingProps) {
  return (
    <div>
      <Text className="uppercase font-medium text-slate-700">Detalii</Text>

      <div className="mt-1 mb-3">
        <Divider />
      </div>

      <ul>
        {details.map((detailArr) => (
          <div
            key={detailArr[0]}
            className="flex gap-x-2 justify-between py-1.5"
          >
            <Text as="h3" variant="p" className="text-slate-800">
              {detailArr[0]}
            </Text>
            <Text className="font-bold text-slate-900">{detailArr[1]}</Text>
          </div>
        ))}
      </ul>
    </div>
  );
}
