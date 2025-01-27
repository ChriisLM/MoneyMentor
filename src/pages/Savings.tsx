import { ButtonAdd } from "../components/ButtonAdd";
import { SavingGoalCard } from "../components/cards/SavingGoalCard";
import { Title } from "../components/Title";

export function Savings() {
  return (
    <section className="px-8 py-4">
      <div className="flex flex-row items-center justify-between pr-2">
        <Title title="Saving Goals" />
        <ButtonAdd icon={true}>Add Goal</ButtonAdd>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 py-6 px-2">
        <SavingGoalCard
          goalName="Vacation Fund"
          saved={1500}
          target={5000}
          color="bg-blue-500"
        />

        <SavingGoalCard
          goalName="New Laptop"
          saved={800}
          target={1500}
          color="bg-green-500"
        />

        <SavingGoalCard
          goalName="Emergency Fund"
          saved={3000}
          target={10000}
          color="bg-red-500"
        />
      </div>
    </section>
  );
}
