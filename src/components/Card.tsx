import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card(props: Props) {
  return (
    <div className={`p-5 rounded-2xl bg-slate-950/5 ${props.className}`}>
      {props.children}
    </div>
  );
}
