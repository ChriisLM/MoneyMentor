interface BankCardProps {
  styleType: "visa" | "mastercard";
}

export function BankCard({ styleType }: BankCardProps) {
  const cardStyles: Record<"visa" | "mastercard", string> = {
    visa: "bg-blue-600 text-white h-44 p-6 rounded-lg shadow-md relative",
    mastercard: "bg-black text-white h-44 p-6 rounded-lg shadow-md relative",
  };

  return (
    <div className={cardStyles[styleType]}>
      <h2 className="text-lg font-semibold mb-3">
        {styleType === "visa" ? "Visa Card" : "MasterCard"}
      </h2>
      <p className="text-4xl pt-1 font-bold">$450</p>
      <p className="absolute bottom-5 left-6 text-xs">Nombre</p>
      {styleType === "visa" && (
        <div className="absolute top-2 right-4 text-2xl font-bold">VISA</div>
      )}
      {styleType === "mastercard" && (
        <div className="absolute top-4 right-4">
          <div className="w-6 h-6 bg-red-500 rounded-full translate-x-3 opacity-95 inline-block"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full inline-block ml-1"></div>
        </div>
      )}
    </div>
  );
}
