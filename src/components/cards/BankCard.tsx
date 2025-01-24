import { AddCircleIcon } from "../../icons/Icons";

const cards = [{ id: "1", name: "Credit Card", balance: -1000, limit: 5000 },{id:"2", name: "Debit Card", balance: -200, limit: 4000}];

const currency = { label: "USD", value: "usd", symbol: "$" };

const exchangeRates = {
  usd: 1,
  eur: 0.85,
  gbp: 0.73,
  jpy: 110.14,
  cad: 1.25,
};

function convertCurrency(amount: number, from: string, to: string): number {
  return (
    amount *
    (exchangeRates[to as keyof typeof exchangeRates] /
      exchangeRates[from as keyof typeof exchangeRates])
  );
}

export function BankCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="flex flex-row items-center justify-between pb-2 space-y-1.5 p-6">
        <h4 className="font-bold leading-none tracking-tight text-xl">
          Cards
        </h4>
        <button className="flex gap-2 bg-gray-900 text-zinc-50 text-sm px-3 py-2 rounded-lg font-medium hover:bg-gray-800">
          <AddCircleIcon className="w-5 h-5" />
          Add Card
        </button>
      </div>
      <div className="flex flex-col p-6 pt-0">
        <ul className="space-y-2">
          {cards.map((card) => (
            <li key={card.id} className="flex justify-between items-center">
              <span>{card.name}</span>
              <div className="text-right">
                <div className="font-semibold">
                  {currency.symbol}
                  {convertCurrency(card.balance, "usd", currency.value).toFixed(
                    2
                  )}
                </div>
                <div className="text-sm text-muted-foreground text-gray-500">
                  Limit: {currency.symbol}
                  {convertCurrency(card.limit, "usd", currency.value).toFixed(
                    2
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
