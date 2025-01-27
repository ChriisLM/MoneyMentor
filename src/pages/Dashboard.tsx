import { CardData } from "../components/cards/CardData";
import { Title } from "../components/Title";
import { AmbulenceIcon, CashIcon, WalletIcon } from "../icons/Icons";

export function Dashboard() {
  const cardBalance = {
    title: "Total Balance",
    icon: CashIcon,
    value: 4500,
    details: "last mount",
  };
  const cardSaving = {
    title: "Saving",
    icon: WalletIcon,
    value: 2500,
    details: "last mount",
  };
  const cardEmergency = {
    title: "Emergency Fund",
    icon: AmbulenceIcon,
    value: 2500,
    details: "last mount",
  };
  return (
    <section className="px-8 py-4">
      <Title title="Dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-6 px-2">
        <CardData cardInfo={cardBalance} />
        <CardData cardInfo={cardSaving} />
        <CardData cardInfo={cardEmergency} />
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 py-6 px-2">
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-green-700">Income</h2>
          <p className="text-2xl font-bold text-green-900">$5,000.00</p>
          <p className="text-sm text-green-600">Total received this month</p>
          <div className="mt-3 text-green-800">
            <ul className="text-sm space-y-2">
              <li>
                💼 Salary: <span className="font-medium">$3,500.00</span>
              </li>
              <li>
                📈 Investments: <span className="font-medium">$1,000.00</span>
              </li>
              <li>
                💰 Freelance: <span className="font-medium">$500.00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-red-700">Expenses</h2>
          <p className="text-2xl font-bold text-red-900">-$2,200.00</p>
          <p className="text-sm text-red-600">Total spent this month</p>
          <div className="mt-3 text-red-800">
            <ul className="text-sm space-y-2">
              <li>
                🏠 Rent: <span className="font-medium">-$1,000.00</span>
              </li>
              <li>
                🛒 Groceries: <span className="font-medium">-$500.00</span>
              </li>
              <li>
                🎉 Entertainment: <span className="font-medium">-$300.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
