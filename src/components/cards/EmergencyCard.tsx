import { useFinanceData } from "../../hooks/useFinanceData";
import { calculateSavingGoalProgress } from "../../services/financeService";

export function EmergencyCard() {
  const { savingGoals } = useFinanceData();
  const goalEmergency = savingGoals.find(
    (goal) => goal.name === "Emergency Fund"
  );

  if (!goalEmergency) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow text-card-foreground dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-none tracking-tight dark:text-gray-200">
          Emergency Fund
        </h2>
        <p className="text-gray-600 text-sm">No emergency fund goal found.</p>
      </div>
    );
  }

  const percentage = calculateSavingGoalProgress(goalEmergency);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 leading-none tracking-tight dark:text-gray-200">
        Emergency Fund
      </h2>
      <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">
        Current Balance: ${goalEmergency.savedAmount.toLocaleString()}
      </p>
      <p className="text-gray-600 dark:text-gray-200 text-sm">
        Goal: ${goalEmergency.targetAmount.toLocaleString()}
      </p>
      <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-green-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2 text-right font-medium">
        {percentage.toFixed(1)}% of goal reached
      </p>
    </div>
  );
}
