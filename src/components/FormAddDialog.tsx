interface FormAddDialogProps {
  type: "account" | "card" | "budget" | "goal" | "transaction";
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: any) => void;
}

export function FormAddDialog({
  type,
  open,
  onOpenChange,
  onSubmit,
}: FormAddDialogProps) {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const baseData = {
      id: crypto.randomUUID(),
    };

    let data;

    switch (type) {
      case "account":
      case "card":
        data = {
          ...baseData,
          name: formData.get("name"),
          type: type,
          balance: Number(formData.get("balance")),
        };
        break;

      case "budget":
        data = {
          ...baseData,
          category: formData.get("category"),
          limit: Number(formData.get("limit")),
          spent: 0,
        };
        break;

      case "goal":
        data = {
          ...baseData,
          name: formData.get("name"),
          targetAmount: Number(formData.get("targetAmount")),
          savedAmount: 0,
        };
        break;

      case "transaction":
        data = {
          ...baseData,
          type: formData.get("transactionType"),
          category: formData.get("category"),
          amount: Number(formData.get("amount")),
          date: formData.get("date"),
        };
        break;
    }

    onSubmit(data);
    onOpenChange(false);
  };

  const renderForm = () => {
    switch (type) {
      case "account":
      case "card":
        return (
          <>
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
            <input
              name="balance"
              type="number"
              placeholder="Balance"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
          </>
        );

      case "budget":
        return (
          <>
            <input
              name="category"
              placeholder="Category"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
            <input
              name="limit"
              type="number"
              placeholder="Monthly Limit"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
          </>
        );

      case "goal":
        return (
          <>
            <input
              name="name"
              placeholder="Goal Name"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
            <input
              name="targetAmount"
              type="number"
              placeholder="Target Amount"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
          </>
        );

      case "transaction":
        return (
          <>
            <select
              name="transactionType"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              name="category"
              placeholder="Category"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
            <input
              name="date"
              type="date"
              required
              className="w-full p-2 border rounded mb-3 dark:bg-zinc-600 dark:border-gray-400 focus:dark:outline-none dark:text-gray-300"
            />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black dark:text-gray-200 bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white p-6 rounded-lg w-full max-w-md dark:bg-neutral-600 dark:border-neutral-500 dark:border" >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-500 text-xl hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-400"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {renderForm()}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white p-2 rounded font-semibold dark:bg-slate-600 hover:bg-gray-800 hover:dark:bg-slate-700"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
