import { Search as SearchIcon } from "lucide-react";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (name: string, value: string) => void;
}

export default function Search(props: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };

  return (
    <div className="w-full flex items-center justify-center px-2 py-2 gap-2 rounded-lg bg-slate-950/5">
      <SearchIcon className="text-slate-200" size={18} />
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
        className="w-full outline-none placeholder:text-slate-200 text-sm font-light"
      />
    </div>
  );
}
