import { create } from "zustand";
import db from "../data/db.json";
import { Account, Budget, SavingGoal, Transaction } from "../types";

interface FinanceState {
  transactions: Transaction[];
  budgets: Budget[];
  savingGoals: SavingGoal[];
  accounts: Account[];
  addTransaction: (transaction: Transaction) => void;
  addBudget: (budget: Budget) => void;
  addSavingGoal: (savingGoal: SavingGoal) => void;
  addAccount: (account: Account) => void;
}

export const useFinanceStore = create<FinanceState>((set) => ({
  transactions: db.transactions,
  budgets: db.budgets,
  savingGoals: db.savingGoals,
  accounts: db.accounts,

  addTransaction: (transaction) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),

  addBudget: (budget) =>
    set((state) => ({ budgets: [...state.budgets, budget] })),

  addSavingGoal: (savingGoal) =>
    set((state) => ({ savingGoals: [...state.savingGoals, savingGoal] })),

  addAccount: (account) =>
    set((state) => ({ accounts: [...state.accounts, account] })),
}));
