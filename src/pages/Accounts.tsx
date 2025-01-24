import { AccountCard } from "../components/cards/AccountCard";
import { BankCard } from "../components/cards/BankCard";
import { Title } from "../components/Title";

export function Accounts() {
  return (
    <section className="px-8 py-4">
      <Title title="Accounts" />
      <div className="grid gap-8 md:grid-cols-2 py-6 px-2">
        <AccountCard />
        <BankCard />
      </div>
    </section>
  );
}
