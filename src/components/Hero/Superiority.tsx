import { Check } from "lucide-react";

interface SuperiorityProps {
  superiority: string;
}
export default function Superiority(props: SuperiorityProps) {
  const { superiority } = props;
  return (
    <li className="flex gap-1.5 items-center text-left">
      <Check className="h-5 w-5 shrink-0 text-green-600" />
      {superiority}
    </li>
  );
}
