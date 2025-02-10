import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useFinanceData } from "../hooks/useFinanceData";

export function FinanceSummary() {
  const { accounts, transactions } = useFinanceData();

  const accountData = accounts.map((acc) => ({
    name: acc.name,
    value: Math.abs(acc.balance),
    type: acc.type,
  }));

  const getColor = (type: string, index: number) => {
    const accountColors = [
      "#4CAF50",
      "#45a049",
      "#388e3c",
      "#2e7d32",
      "#1b5e20",
    ];
    const cardColors = ["#2196F3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"];

    return type === "account"
      ? accountColors[index % accountColors.length]
      : cardColors[index % cardColors.length];
  };

  const TRANSACTION_COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
  ];

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const bankAccounts = accountData.filter((item) => item.type === "account");
  const cards = accountData.filter((item) => item.type === "card");

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 py-6 px-2">
      <div className="bg-white border rounded-lg p-4 shadow-md dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 dark:text-gray-200">
          Balance Distribution
        </h2>
        <div className="flex flex-col h-[300px]">
          <div className="relative flex-1 min-h-[270px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={accountData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {accountData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getColor(entry.type, index)}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `$${value}`}
                  labelFormatter={(name) => `${name}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-around pb-2 ">
            {bankAccounts.length > 0 && (
              <div>
                <p className="font-medium text-gray-700 mb-2 dark:text-gray-200">Bank Accounts:</p>
                <div className="flex flex-col gap-2">
                  {bankAccounts.map((account, index) => (
                    <div key={account.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getColor("account", index) }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {account.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {cards.length > 0 && (
              <div>
                <p className="font-medium text-gray-700 mb-2 dark:text-gray-200">Cards:</p>
                <div className="flex flex-col gap-2">
                  {cards.map((card, index) => (
                    <div key={card.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getColor("card", index) }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{card.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 pt-4 border-t text-center">
            <p className="text-center text-2xl font-bold text-green-600">
              ${totalIncome.toFixed(2)}
            </p>
            <p className="text-center text-sm text-gray-600 dark:text-gray-200">Total balance</p>
          </div>
        </div>
      </div>

      <div className="bg-white border h-auto rounded-lg p-4 shadow-md dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 dark:text-gray-200">
          Recent Expenses
        </h2>
        <div className="space-y-3 overflow-y-auto">
          {transactions.slice(0, 5).map((transaction, index) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-neutral-600"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{
                    backgroundColor:
                      TRANSACTION_COLORS[index % TRANSACTION_COLORS.length],
                  }}
                />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-300">
                    {transaction.category}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-200">{transaction.date}</p>
                </div>
              </div>
              <p className="font-semibold text-red-600 dark:text-red-500">
                -${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-2xl font-bold text-red-600">
            -${Math.abs(totalExpenses).toFixed(2)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-200">Total expenses this month</p>
        </div>
      </div>
    </div>
  );
}
