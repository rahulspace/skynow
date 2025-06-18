import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card(props: Props) {
  return (
    <div
      className={`p-5 rounded-2xl bg-slate-950/5 transition-colors duration-400 hover:bg-slate-800/10 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
