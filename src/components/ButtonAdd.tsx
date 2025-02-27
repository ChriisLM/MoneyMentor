import { AddCircleIcon } from "../icons/Icons";

interface ButtonAddProps {
  icon: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
export function ButtonAdd({ icon = true, children, onClick }: ButtonAddProps) {
  return (
    <button
      className="flex gap-2 bg-slate-600 shadow-md transition-all text-zinc-50 text-sm px-3 py-2 rounded-lg font-medium hover:bg-gray-800"
      onClick={onClick}
    >
      {icon && <AddCircleIcon className="w-5 h-5" />}
      {children}
    </button>
  );
}
