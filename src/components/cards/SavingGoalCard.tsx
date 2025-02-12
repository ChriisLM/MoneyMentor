import { calculateSavingGoalProgress } from "../../services/financeService";
import { SavingGoal } from "../../types";

interface SavingGoalCardProps {
  goal: SavingGoal;
}

export function SavingGoalCard({ goal }: SavingGoalCardProps) {
  const percentage = calculateSavingGoalProgress(goal);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 leading-none tracking-tight dark:text-gray-200">
        {goal.name}
      </h2>
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600 dark:text-gray-200">
        <span>${goal.savedAmount.toLocaleString()} saved</span>
        <span>${goal.targetAmount.toLocaleString()} goal</span>
      </div>
      <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full bg-blue-500 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-smtext-gray-600 dark:text-neutral-400 mt-2 text-right font-medium">
        {percentage.toFixed(1)}% of your goal achieved
      </p>
    </div>
  );
}
