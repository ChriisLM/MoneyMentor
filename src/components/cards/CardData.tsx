import { useConvertCurrency } from "../../hooks/useConvertCurrency";

type CardInfo = {
  title: string;
  icon: JSX.Element | any;
  value: number;
  details: string;
};
interface CardDataProp {
  cardInfo: CardInfo;
}

export function CardData({ cardInfo }: CardDataProp) {
  const currency = { label: "USD", value: "usd", symbol: "$" };
  const { formattedValue } = useConvertCurrency(cardInfo.value, currency);
  return (
    <div className="bg-white rounded-lg border text-card-foreground shadow dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <div className="flex flex-row items-center justify-between pb-1 space-y-1.5 p-6 dark:text-gray-200 text-gray-500">
        <h6 className="font-semibold leading-none tracking-tight text-sm">
          {cardInfo.title}
        </h6>
        <span>
          <cardInfo.icon className="h-5 w-5 text-muted-foreground" />
        </span>
      </div>
      <div className="flex flex-col p-6 pt-0 dark:text-gray-200 text-gray-500">
        <span className="text-2xl font-bold border-b pb-1 text-black dark:text-neutral-400 dark:border-neutral-500">
          {formattedValue}
        </span>
        <span className="text-xs text-muted-foreground pt-1">
          {cardInfo.details}
        </span>
      </div>
    </div>
  );
}
