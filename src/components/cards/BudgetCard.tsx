import { calculateBudgetProgress } from "../../services/financeService";
import { Budget } from "../../types";

interface BudgetCardProps {
  isCommon?: boolean;
  title: string;
  spent: number;
  total: number;
}

export function BudgetCard({
  title,
  spent,
  total,
  isCommon = true,
}: BudgetCardProps) {
  const BudgetInfo: Budget = {
    id: title,
    category: title,
    limit: total,
    spent: spent,
  };
  const percentage = calculateBudgetProgress(BudgetInfo);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-none tracking-tight dark:text-gray-200">
        {title}
      </h2>
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600 dark:text-gray-200">
        <span>${spent.toLocaleString()} spent</span>
        <span>${total.toLocaleString()} total</span>
      </div>
      <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            isCommon ? "bg-blue-500" : "bg-slate-950"
          } rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right font-medium dark:text-neutral-400">
        {percentage.toFixed(1)}% of your budget used
      </p>
    </div>
  );
}
