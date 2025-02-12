import { useState } from "react";
import { ButtonAdd } from "../components/ButtonAdd";
import { FormAddDialog } from "../components/FormAddDialog";
import { Title } from "../components/Title";
import { useFinanceData } from "../hooks/useFinanceData";
import { type Transaction } from "../types";

export function Transactions() {
  const { transactions, addTransaction } = useFinanceData();
  const [open, setOpen] = useState(false);

  const handleAddTransaction = (data: Transaction) => {
    addTransaction(data);
  };

  return (
    <section className="px-4 md:px-8 pb-4">
      <Title title="Transactions" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 px-2">
        <input
          className="w-full sm:w-64 px-5 py-2 rounded-lg focus:outline-neutral-400 border focus:outline-offset-4 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
          type="text"
          placeholder="Search transactions..."
        />
        <ButtonAdd icon onClick={() => setOpen(true)}>
          Add Transaction
        </ButtonAdd>
        <FormAddDialog
          type="transaction"
          open={open}
          onOpenChange={setOpen}
          onSubmit={(data) => handleAddTransaction(data)}
        />
      </div>
      <div className="px-2 pb-6 overflow-x-auto">
        <div className="block sm:hidden">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="mb-4 p-4 border rounded-lg dark:text-gray-200 bg-white dark:bg-zinc-800"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </span>
                <span
                  className={`px-3 py-1 text-sm ${
                    transaction.type === "income"
                      ? "bg-green-100 border border-green-300 text-green-700 text-center capitalize rounded-lg shadow-md dark:bg-green-300 dark:text-green-900 dark:border-green-500"
                      : "bg-red-100 border border-red-300 rounded-lg text-center capitalize shadow-md text-red-700 dark:bg-red-300 dark:text-red-900 dark:border-red-500"
                  }`}
                >
                  {transaction.type}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">{transaction.category}</span>
                <span
                  className={`font-bold ${
                    transaction.type === "income"
                      ? "text-green-500 dark:text-green-400"
                      : "text-red-500 dark:text-red-400"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <table className="text-left w-full">
            <thead className="text-gray-500 dark:text-gray-400">
              <tr className="grid grid-cols-4 py-3 px-3 border-b">
                <th className="font-medium">Date</th>
                <th className="font-medium">Category</th>
                <th className="font-medium">Type</th>
                <th className="text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="grid grid-cols-4 py-3 px-3 border-b dark:text-gray-200"
                >
                  <td>{transaction.date}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <span
                      className={`inline-block ${
                        transaction.type === "income"
                          ? "bg-green-100 border border-green-300 text-green-700 px-3 py-1 text-center capitalize rounded-lg shadow-md dark:bg-green-300 dark:text-green-900 dark:border-green-500"
                          : "bg-red-100 border border-red-300 rounded-lg px-3 py-1 text-center capitalize shadow-md text-red-700 dark:bg-red-300 dark:text-red-900 dark:border-red-500"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td
                    className={`text-right ${
                      transaction.type === "income"
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {transactions.length >= 10 && (
        <div className="flex justify-center p-4 pt-8 overflow-x-auto">
          <nav className="mr-6">
            <ul className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1.5 mr-1 rounded-md font-medium hover:bg-gray-300 hover:dark:bg-zinc-700 text-sm sm:text-base"
                >
                  &lt; Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1.5 border rounded-md hover:bg-gray-300 hover:dark:bg-zinc-700 text-sm sm:text-base"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1.5 rounded-md hover:bg-gray-300 hover:dark:bg-zinc-700 text-sm sm:text-base"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1.5 rounded-md hover:bg-gray-300 hover:dark:bg-zinc-700 text-sm sm:text-base"
                >
                  3
                </a>
              </li>
              <li className="px-2 sm:px-3 py-1.5 text-sm sm:text-base">...</li>
              <li>
                <a
                  href="#"
                  className="px-2 sm:px-3 py-1.5 ml-1 rounded-md font-medium hover:bg-gray-300 hover:dark:bg-zinc-700 text-sm sm:text-base"
                >
                  Next &gt;
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
}
