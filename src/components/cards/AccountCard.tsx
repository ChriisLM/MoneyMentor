import { AddCircleIcon } from "../../icons/Icons";

const accounts = [
  { id: "1", name: "Checking Account", balance: 5000 },
  { id: "2", name: "Savings Account", balance: 10000 },
];

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

export function AccountCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="flex flex-row items-center justify-between pb-2 space-y-1.5 p-6">
        <h4 className="font-bold leading-none tracking-tight text-xl">
          Accounts
        </h4>
        <button className="flex gap-2 bg-gray-900 text-zinc-50 text-sm px-3 py-2 rounded-lg font-medium hover:bg-gray-800">
          <AddCircleIcon className="w-5 h-5"/>
          Add Account
        </button>
      </div>
      <div className="flex flex-col p-6 pt-0">
        <ul className="space-y-2">
          {accounts.map((account) => (
            <li key={account.id} className="flex justify-between items-center">
              <span>{account.name}</span>
              <span className="font-semibold">
                {currency.symbol}
                {convertCurrency(
                  account.balance,
                  "usd",
                  currency.value
                ).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
