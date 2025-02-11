import { Title } from "../components/Title";
import { TabBudget } from "../components/TabBudget";
import { useFinanceData } from "../hooks/useFinanceData";
import { BudgetCard } from "../components/cards/BudgetCard";
import { ButtonAdd } from "../components/ButtonAdd";
import { useState } from "react";
import { FormAddDialog } from "../components/FormAddDialog";
import { type Budget } from "../types";

export function Budget() {
  const { budgets, addBudget } = useFinanceData();
  const [open, setOpen] = useState(false);

  const handleAddBudget = (data: Budget) => {
    addBudget(data);
  };

  return (
    <section className="px-8 pb-4">
      <div className="flex flex-row items-center justify-between pr-2">
        <Title title="Budget" />
        <ButtonAdd icon onClick={() => setOpen(true)}>
          Add Budget Category
        </ButtonAdd>
        <FormAddDialog
          type="budget"
          open={open}
          onOpenChange={setOpen}
          onSubmit={(data) => handleAddBudget(data)}
        />
      </div>
      <TabBudget />
      <div className="grid gap-4 lg:grid-cols-2 py-6 px-2">
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            title={budget.category}
            spent={budget.spent}
            total={budget.limit}
          />
        ))}
      </div>
    </section>
  );
}
