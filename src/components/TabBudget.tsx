import { useState } from "react";
import { BudgetCard } from "./cards/BudgetCard";
import { useFinanceData } from "../hooks/useFinanceData";
import { calculateBudgetTotal } from "../services/financeService";

export function TabBudget() {
  const [activeTab, setActiveTab] = useState("monthly");
  const { budgets } = useFinanceData();
  const { totalSpent, totalLimit } = calculateBudgetTotal(budgets);
  return (
    <div className="flex flex-col md:flex-row py-4">
      <div className="flex flex-col justify-center md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 md:pr-6 pb-4 md:pb-0 mx-6 md:mx-0">
        <button
          className={`block w-full text-center p-2 rounded-lg mb-2 font-medium ${
            activeTab === "monthly"
              ? "bg-gray-300 text-blue-500 dark:text-blue-400 dark:bg-zinc-700 "
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-zinc-700"
          }`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly Budget
        </button>
        <button
          className={`block w-full text-center p-2 rounded-lg font-medium ${
            activeTab === "annual"
              ? "bg-gray-300 text-blue-500 dark:text-blue-400 dark:bg-zinc-700 "
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-300 hover:dark:bg-zinc-700"
          }`}
          onClick={() => setActiveTab("annual")}
        >
          Annual Budget
        </button>
      </div>
      <div className="md:w-3/4 w-full px-6 md:pr-2 pt-4 md:pt-0">
        {activeTab === "monthly" ? (
          <BudgetCard
            title="Monthly Budget"
            spent={totalSpent}
            total={totalLimit}
            isCommon={false}
          />
        ) : (
          <BudgetCard
            title="Annual Budget"
            spent={totalSpent * 12}
            total={totalLimit * 12}
            isCommon={false}
          />
        )}
      </div>
    </div>
  );
}
