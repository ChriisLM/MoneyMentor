export interface Transaction {
  id: string;
  type: 'income' | 'expense' | string;
  category: string;
  amount: number;
  date: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
}

export interface SavingGoal {
  id: string;
  name: string;
  targetAmount: number;
  savedAmount: number;
}

export interface Account {
  id: string;
  name: string;
  type: "account" | "card" | string;
  balance: number;
}