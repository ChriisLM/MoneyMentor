import { useState } from "react";
import { useConvertCurrency } from "../../hooks/useConvertCurrency";
import { type Account } from "../../types";
import { ButtonAdd } from "../ButtonAdd";
import { FormAddDialog } from "../FormAddDialog";
import { useFinanceData } from "../../hooks/useFinanceData";

interface AccountCardProps {
  accounts: Account[];
}

export function AccountCard({ accounts }: AccountCardProps) {
  const { addAccount } = useFinanceData();
  const [open, setOpen] = useState(false);

  const currency = { label: "USD", value: "usd", symbol: "$" };
  const filteredAccounts = accounts.filter(
    (account) => account.type === "account"
  );

  const handleAddAccount = (data: Account) => {
    addAccount(data);
  };

  return (
    <div className="bg-white rounded-lg shadow border bg-card text-card-foreground dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      <div className="flex flex-row items-center justify-between pb-2 space-y-1.5 p-6">
        <h4 className="font-bold leading-none tracking-tight text-xl text-gray-800 dark:text-gray-200">
          Accounts
        </h4>
        <ButtonAdd icon onClick={() => setOpen(true)}>
          Add Account
        </ButtonAdd>
        <FormAddDialog
          type="account"
          open={open}
          onOpenChange={setOpen}
          onSubmit={(data) => handleAddAccount(data)}
        />
      </div>
      <div className="flex flex-col p-6 pt-0 text-black dark:text-gray-200">
        <ul className="space-y-2">
          {filteredAccounts.map((account) => {
            const { formattedValue } = useConvertCurrency(
              account.balance,
              currency
            );
            return (
              <li
                key={account.id}
                className="flex justify-between items-center"
              >
                <span className="text-gray-600 dark:text-gray-200">
                  {account.name}
                </span>
                <span className="font-semibold dark:text-neutral-400">
                  {formattedValue}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
