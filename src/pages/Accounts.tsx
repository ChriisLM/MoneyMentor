import { AccountCard } from "../components/cards/AccountCard";
import { BankCardList } from "../components/cards/BankCardList";
import { EmergencyCard } from "../components/cards/EmergencyCard";
import { SavingAccountCard } from "../components/cards/SavingAccountCard";
import { CardsViewer } from "../components/CardsViewer";
import { Title } from "../components/Title";

export function Accounts() {
  return (
    <section className="px-8 py-4">
      <Title title="Accounts" />
      <div className="grid gap-8 md:grid-cols-2 py-6 px-2">
        <AccountCard />
        <BankCardList />
      </div>
      <EmergencyCard/>
      <div className="grid gap-8 md:grid-cols-2 py-6 px-2 relative overflow-hidden">
        <SavingAccountCard/>
        <CardsViewer/>
      </div>
    </section>
  );
}
