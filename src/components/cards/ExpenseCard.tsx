interface ExpenseCardProps {
  title: string;
  spent: number;
  total: number;
  color: string;
}

export function ExpenseCard({ title, spent, total, color }: ExpenseCardProps) {
  const percentage = Math.min((spent / total) * 100, 100);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md max-w-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
        <span>${spent.toLocaleString()} spent</span>
        <span>${total.toLocaleString()} total</span>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right font-medium">
        {percentage.toFixed(1)}% of your budget used
      </p>
    </div>
  );
}
