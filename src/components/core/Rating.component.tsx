import { BsStarFill } from "react-icons/bs";

export default function Rating({ stars }: { stars: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex gap-x-2">
      {new Array(stars).fill(0).map((_, idx) => (
        <div key={idx} className="!text-yellow-400 text-sm">
          <BsStarFill />
        </div>
      ))}
    </div>
  );
}
