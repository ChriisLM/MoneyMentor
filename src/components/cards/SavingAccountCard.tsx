import { useFinanceData } from "../../hooks/useFinanceData";
import { ChartUpIcon, WalletIcon } from "../../icons/Icons";
import { BarChartIcon, PigCoinIcon } from "../../icons/SideBarIcons";

export function SavingAccountCard() {
  const { accounts } = useFinanceData();
  const savingAccount = accounts.find(
    (goal) => goal.name === "Savings Account"
  );

  const monthlyGrowth = 2.5;
  const lastMonthBalance = savingAccount?.balance
    ? savingAccount.balance * 0.975
    : 0;
  const growthAmount = savingAccount?.balance
    ? savingAccount.balance - lastMonthBalance
    : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <PigCoinIcon className="w-5 h-5" />
            Savings Account
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            High-yield savings
          </p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
          <p className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center gap-1">
            <ChartUpIcon className="w-4 h-4" />
            {monthlyGrowth}% APY
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-200 text-2xl font-bold mb-1">
          ${savingAccount?.balance?.toLocaleString()}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-green-500 dark:text-green-400 text-sm font-medium flex items-center">
            <BarChartIcon className="w-4 h-4" />
            +${growthAmount.toLocaleString()}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            this month
          </span>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full flex items-center justify-center gap-2 bg-slate-600 hover:bg-gray-800 text-zinc-50 px-4 py-2 rounded-lg font-medium transition-colors">
          <WalletIcon className="w-5 h-5" />
          Make a Deposit
        </button>
      </div>
    </div>
  );
}

export default SavingAccountCard;
