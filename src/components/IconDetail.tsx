import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  text: string;
}

export default function IconDetail(props: Props) {
  return (
    <div className="flex flex-col items-center gap-1 text-slate-200">
      <props.icon />
      <p className="text-sm">{props.text}</p>
    </div>
  );
}
