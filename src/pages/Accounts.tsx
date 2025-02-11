import { AccountCard } from "../components/cards/AccountCard";
import { BankCardList } from "../components/cards/BankCardList";
import { EmergencyCard } from "../components/cards/EmergencyCard";
import { SavingAccountCard } from "../components/cards/SavingAccountCard";
import { CardsViewer } from "../components/CardsViewer";
import { Title } from "../components/Title";
import { useFinanceData } from "../hooks/useFinanceData";

export function Accounts() {
  const { accounts } = useFinanceData();

  return (
    <section className="px-8 pb-4">
      <Title title="Accounts" />
      <div className="grid gap-8 md:grid-cols-2 py-6 px-2">
        <AccountCard accounts={accounts} />
        <BankCardList accounts={accounts} />
      </div>
      <div className="px-2">
        <EmergencyCard />
      </div>
      <div className="grid gap-8 md:grid-cols-2 py-6 px-2 relative overflow-hidden">
        <SavingAccountCard />
        <CardsViewer />
      </div>
    </section>
  );
}
