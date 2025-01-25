interface BudgetCardProps {
  title: string;
  spent: number;
  total: number;
}

export function BudgetCard({ title, spent, total }: BudgetCardProps) {
  const percentage = ((spent / total) * 100).toFixed(0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
        <span>${spent} spent</span>
        <span>${total} total</span>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-slate-950 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right font-medium">
        {percentage}% of your budget used
      </p>
    </div>
  );
}
