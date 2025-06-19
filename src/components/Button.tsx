import { LucideIcon } from "lucide-react";

interface Props {
  text?: string;
  icon: LucideIcon;
  onClick: VoidFunction;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className="w-full flex items-center justify-center px-2 py-2 gap-2 rounded-lg bg-slate-950/5 cursor-pointer transition-colors duration-400 hover:bg-slate-800/10"
    >
      <props.icon size={20} />
    </button>
  );
}
