import { CardData } from "../components/cards/CardData";
import { FinanceSummary } from "../components/FinanceSummary";
import { Title } from "../components/Title";
import { useFinanceData } from "../hooks/useFinanceData";
import { AmbulenceIcon, CashIcon, WalletIcon } from "../icons/Icons";

export function Dashboard() {
  const { totalBalance, savingGoals } = useFinanceData();

  const totalSaved = savingGoals.reduce(
    (total, goal) => total + goal.savedAmount,
    0
  );

  const goalEmergency = savingGoals.find(
    (goal) => goal.name === "Emergency Fund"
  );

  const cardBalance = {
    title: "Total Balance",
    icon: CashIcon,
    value: totalBalance,
    details: "last month",
  };

  const cardSaving = {
    title: "Saving",
    icon: WalletIcon,
    value: totalSaved,
    details: "last month",
  };

  const cardEmergency = {
    title: "Emergency Fund",
    icon: AmbulenceIcon,
    value: goalEmergency?.savedAmount || 0,
    details: "last month",
  };
  return (
    <section className="px-8 pb-4">
      <Title title="Dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-6 px-2">
        <CardData cardInfo={cardBalance} />
        <CardData cardInfo={cardSaving} />
        <CardData cardInfo={cardEmergency} />
      </div>
      <FinanceSummary />
    </section>
  );
}
