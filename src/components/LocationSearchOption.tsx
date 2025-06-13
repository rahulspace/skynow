import { SearchResultItem } from "@/apis/weatherApi";

interface Props {
  location: SearchResultItem;
  onSelect: (location: SearchResultItem) => void;
}

export default function LocationSearchOption(props: Props) {
  const { location } = props;

  const handleClick = () => {
    props.onSelect(location);
  };

  return (
    <div
      className="text-sm px-4 py-1 transition-colors hover:bg-slate-100/20 cursor-pointer select-none"
      onClick={handleClick}
    >
      {`${location.name}, ${location.region}, ${location.country}`}
    </div>
  );
}
