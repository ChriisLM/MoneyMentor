import { useState } from "react";
import { ButtonAdd } from "../components/ButtonAdd";
import { SavingGoalCard } from "../components/cards/SavingGoalCard";
import { Title } from "../components/Title";
import { useFinanceData } from "../hooks/useFinanceData";
import { FormAddDialog } from "../components/FormAddDialog";
import { type SavingGoal } from "../types";

export function Savings() {
  const { savingGoals, addSavingGoal } = useFinanceData();
  const [open, setOpen] = useState(false);

  const handleAddGoal = (data: SavingGoal) => {
    addSavingGoal(data);
  };

  return (
    <section className="px-8 pb-4">
      <div className="flex flex-row items-center justify-between pr-2">
        <Title title="Saving Goals" />
        <ButtonAdd icon={true} onClick={() => setOpen(true)}>
          Add Goal
        </ButtonAdd>
        <FormAddDialog
          type="goal"
          open={open}
          onOpenChange={setOpen}
          onSubmit={(data) => handleAddGoal(data)}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2 py-6 px-2">
        {savingGoals.map((goal) => (
          <SavingGoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
}
