import { ExpenseCard } from "../components/cards/ExpenseCard";
import { Title } from "../components/Title";
import { AddCircleIcon } from "../icons/Icons";
import { TabBudget } from "../components/TabBudget";

export function Budget() {
  return (
    <section className="px-8 py-4">
      <div className="flex flex-row items-center justify-between pr-2">
        <Title title="Budget" />
        <button className="flex gap-2 bg-gray-900 text-zinc-50 text-sm px-3 py-2 rounded-lg font-medium hover:bg-gray-800">
          <AddCircleIcon className="w-5 h-5" />
          Add Budget Category
        </button>
      </div>
      <TabBudget />
      <div className="grid gap-4 lg:grid-cols-2 py-6 px-2">
        <ExpenseCard
          title="Groceries"
          spent={300}
          total={500}
          color="bg-green-500"
        />
        <ExpenseCard
          title="Entertainment"
          spent={150}
          total={300}
          color="bg-blue-500"
        />
        <ExpenseCard
          title="Utilities"
          spent={400}
          total={600}
          color="bg-yellow-500"
        />
      </div>
    </section>
  );
}
