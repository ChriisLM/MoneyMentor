import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  LineChart,
  Line,
} from "recharts";
import { useFinanceData } from "../hooks/useFinanceData";

export function Reports() {
  const { transactions } = useFinanceData();

  const getMonthlyData = () => {
    const monthlyData: Record<string, { income: number; expenses: number }> =
      {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("default", { month: "long" });

      if (!monthlyData[month]) {
        monthlyData[month] = { income: 0, expenses: 0 };
      }

      if (transaction.type === "income") {
        monthlyData[month].income += transaction.amount;
      } else if (transaction.type === "expense") {
        monthlyData[month].expenses += transaction.amount;
      }
    });

    return Object.keys(monthlyData).map((month) => ({
      name: month,
      income: monthlyData[month].income,
      expenses: monthlyData[month].expenses,
    }));
  };

  const barLineData = getMonthlyData();

  const pieData = [
    {
      name: "Income",
      value: transactions
        .filter((t) => t.type === "income")
        .reduce((total, t) => total + t.amount, 0),
    },
    {
      name: "Expenses",
      value: transactions
        .filter((t) => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0),
    },
  ];

  const categoryData = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      if (!acc[t.category]) {
        acc[t.category] = 0;
      }
      acc[t.category] += t.amount;
      return acc;
    }, {} as Record<string, number>);

  const chartData = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Financial Reports</h2>

      <div className="w-full h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barLineData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#82ca9d" barSize={40} />
            <Bar dataKey="expenses" fill="#ff6b6b" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={barLineData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#82ca9d"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#ff6b6b"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
