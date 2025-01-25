import { useState } from "react";
import { BudgetCard } from "./cards/BudgetCard";

export function TabBudget() {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <div className="flex flex-col md:flex-row py-4">
      <div className="flex flex-col justify-center md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 md:pr-6 pb-4 md:pb-0 mx-6 md:mx-0">
        <button
          className={`block w-full text-center p-2 rounded-lg mb-2 font-medium ${
            activeTab === "monthly"
              ? "bg-gray-100 text-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly Budget
        </button>
        <button
          className={`block w-full text-center p-2 rounded-lg font-medium ${
            activeTab === "annual"
              ? "bg-gray-100 text-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("annual")}
        >
          Annual Budget
        </button>
      </div>
      <div className="md:w-3/4 w-full px-6 md:pr-2 pt-4 md:pt-0">
        {activeTab === "monthly" ? (
          <BudgetCard title="Monthly Budget" spent={1500} total={2000} />
        ) : (
          <BudgetCard title="Annual Budget" spent={18000} total={24000} />
        )}
      </div>
    </div>
  );
}
