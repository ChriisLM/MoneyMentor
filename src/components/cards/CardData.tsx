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
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="flex flex-row items-center justify-between pb-1 space-y-1.5 p-6">
        <h6 className="font-semibold leading-none tracking-tight text-sm">
          {cardInfo.title}
        </h6>
        <span>
          <cardInfo.icon className="h-5 w-5 text-muted-foreground text-gray-500" />
        </span>
      </div>
      <div className="flex flex-col p-6 pt-0">
        <span className="text-2xl font-bold">{cardInfo.value}</span>
        <span className="text-xs text-muted-foreground text-gray-500">
          {cardInfo.details}
        </span>
      </div>
    </div>
  );
}
