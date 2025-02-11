import { Transaction, SavingGoal, Account, Budget } from "../types/index";

export const calculateTotalBalance = (accounts: Account[]): number => {
  return accounts.reduce((total, account) => total + account.balance, 0);
};

export const calculateSpentByCategory = (
  transactions: Transaction[],
  category: string
): number => {
  return transactions
    .filter(
      (transaction) =>
        transaction.category === category && transaction.type === "expense"
    )
    .reduce((total, transaction) => total + transaction.amount, 0);
};

export const calculateSavingGoalProgress = (savingGoal: SavingGoal): number => {
  return (savingGoal.savedAmount / savingGoal.targetAmount) * 100;
};

export const calculateBudgetProgress = (budget: Budget): number => {
  return (budget.spent / budget.limit) * 100;
};

export const calculateBudgetTotal = (
  budgetList: Budget[]
): { totalSpent: number; totalLimit: number } => {
  return budgetList.reduce(
    (totals, budget) => ({
      totalSpent: totals.totalSpent + (budget.spent || 0),
      totalLimit: totals.totalLimit + (budget.limit || 0),
    }),
    { totalSpent: 0, totalLimit: 0 }
  );
};
