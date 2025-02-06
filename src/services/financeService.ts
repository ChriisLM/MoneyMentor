import { Transaction, SavingGoal, Account } from "../types/index";

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
