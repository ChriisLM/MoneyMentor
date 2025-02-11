import { useFinanceStore } from "../stores/useFinanceStore";
import {
  calculateTotalBalance,
  calculateSpentByCategory,
  calculateSavingGoalProgress,
} from "../services/financeService";

export const useFinanceData = () => {
  const {
    transactions,
    budgets,
    savingGoals,
    accounts,
    addAccount,
    addBudget,
    addSavingGoal,
    addTransaction,
  } = useFinanceStore();

  const totalBalance = calculateTotalBalance(accounts);

  const spentByCategory = (category: string) => {
    return calculateSpentByCategory(transactions, category);
  };

  const savingGoalProgress = (id: string) => {
    const goal = savingGoals.find((goal) => goal.id === id);
    return goal ? calculateSavingGoalProgress(goal) : 0;
  };

  return {
    totalBalance,
    spentByCategory,
    savingGoalProgress,
    transactions,
    budgets,
    savingGoals,
    accounts,
    addAccount,
    addBudget,
    addSavingGoal,
    addTransaction,
  };
};
