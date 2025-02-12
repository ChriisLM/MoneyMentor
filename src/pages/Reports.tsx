import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  ComposedChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { useFinanceData } from "../hooks/useFinanceData";
import { useMemo } from "react";
import { type Budget, type Transaction } from "../types";
import { Title } from "../components/Title";

interface MonthlyData {
  name: string;
  income: number;
  expenses: number;
  balance: number;
  transactionCount: number;
}

interface CategoryData {
  [key: string]: number;
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#775DD0",
];

export function Reports() {
  const { transactions, accounts, budgets, savingGoals } = useFinanceData();

  const monthlyData = useMemo(() => {
    const data: Record<string, MonthlyData> = {};

    transactions.forEach((transaction: Transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("default", { month: "long" });

      if (!data[month]) {
        data[month] = {
          name: month,
          income: 0,
          expenses: 0,
          balance: 0,
          transactionCount: 0,
        };
      }

      if (transaction.type === "income") {
        data[month].income += transaction.amount;
      } else {
        data[month].expenses += transaction.amount;
      }
      data[month].balance = data[month].income - data[month].expenses;
      data[month].transactionCount++;
    });

    return Object.values(data);
  }, [transactions]);

  const categoryData = useMemo(() => {
    const data = transactions
      .filter((t: Transaction) => t.type === "expense")
      .reduce((acc: CategoryData, t: Transaction) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});

    return Object.entries(data)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  const budgetData = useMemo(() => {
    return budgets.map((budget: Budget) => ({
      name: budget.category,
      limit: budget.limit,
      spent: budget.spent,
      remaining: budget.limit - budget.spent,
    }));
  }, [budgets]);

  const cashFlowData = useMemo(() => {
    const dailyData: Record<
      string,
      { date: string; income: number; expenses: number; balance: number }
    > = {};

    transactions
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .forEach((transaction) => {
        const date = transaction.date.split("T")[0];
        if (!dailyData[date]) {
          dailyData[date] = { date, income: 0, expenses: 0, balance: 0 };
        }

        if (transaction.type === "income") {
          dailyData[date].income += transaction.amount;
        } else {
          dailyData[date].expenses += transaction.amount;
        }

        dailyData[date].balance =
          dailyData[date].income - dailyData[date].expenses;
      });

    return Object.values(dailyData);
  }, [transactions]);

  const savingsProgressData = useMemo(() => {
    return savingGoals.map((goal) => ({
      name: goal.name,
      saved: goal.savedAmount,
      target: goal.targetAmount,
      progress: (goal.savedAmount / goal.targetAmount) * 100,
    }));
  }, [savingGoals]);

  const transactionDistribution = useMemo(() => {
    const ranges = [0, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
    const distribution = ranges.slice(0, -1).map((min, index) => ({
      range: `$${min}-${ranges[index + 1]}`,
      count: 0,
      min,
      max: ranges[index + 1],
    }));

    transactions.forEach((t) => {
      const amount = t.amount;
      const rangeIndex = distribution.findIndex(
        (r) => amount >= r.min && amount < r.max
      );
      if (rangeIndex !== -1) {
        distribution[rangeIndex].count++;
      }
    });

    return distribution;
  }, [transactions]);

  const financialHealthData = useMemo(() => {
    const totalIncome = transactions.reduce(
      (sum, t) => sum + (t.type === "income" ? t.amount : 0),
      0
    );
    const totalExpenses = transactions.reduce(
      (sum, t) => sum + (t.type === "expense" ? t.amount : 0),
      0
    );
    const totalSavings = savingGoals.reduce((sum, g) => sum + g.savedAmount, 0);

    return [
      {
        metric: "Savings Rate",
        value: Math.min(100, (totalSavings / totalIncome) * 100),
        fullMark: 100,
      },
      {
        metric: "Budget Adherence",
        value: Math.min(100, 100 - (totalExpenses / totalIncome) * 100),
        fullMark: 100,
      },
      {
        metric: "Goal Progress",
        value: Math.min(
          100,
          (totalSavings /
            savingGoals.reduce((sum, g) => sum + g.targetAmount, 0)) *
            100
        ),
        fullMark: 100,
      },
      {
        metric: "Account Diversity",
        value: Math.min(100, (accounts.length / 5) * 100),
        fullMark: 100,
      },
    ];
  }, [transactions, savingGoals, accounts]);

  return (
    <section className="px-8 pb-4">
      <Title title="Finance Reports" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 px-2">
        {/* Ingresos vs Gastos */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Monthly Income vs Expenses
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#10B981" name="Income" />
                <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Presupuestos */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Budget Overview
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={budgetData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="spent" stackId="a" fill="#EF4444" name="Spent" />
                <Bar
                  dataKey="remaining"
                  stackId="a"
                  fill="#10B981"
                  name="Remaining"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribución de Gastos */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Expense Distribution
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((_, index) => (
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

        {/* Salud Financiera */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Financial Health Overview
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={financialHealthData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Financial Health"
                  dataKey="value"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Flujo de Caja */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Cash Flow Timeline
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#10B981" name="Income" />
                <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#6366F1"
                  name="Balance"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Progreso de Metas de Ahorro */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Savings Goals Progress
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={savingsProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="saved" fill="#60A5FA" name="Saved" />
                <Bar dataKey="target" fill="#93C5FD" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribución de Transacciones */}
        <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-neutral-700 dark:shadow-neutral-500">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
            Transaction Size Distribution
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#8B5CF6"
                  name="Number of Transactions"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
