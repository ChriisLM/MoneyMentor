interface SavingGoalCardProps {
  goalName: string;
  saved: number;
  target: number;
  color: string;
}

export function SavingGoalCard({
  goalName,
  saved,
  target,
  color,
}: SavingGoalCardProps) {
  const percentage = Math.min((saved / target) * 100, 100);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md max-w-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{goalName}</h2>
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
        <span>${saved.toLocaleString()} saved</span>
        <span>${target.toLocaleString()} goal</span>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right font-medium">
        {percentage.toFixed(1)}% of your goal achieved
      </p>
    </div>
  );
}
