import { Title } from "../components/Title";

export function Transactions() {
  return (
    <section className="px-8 py-4">
      <Title title="Transactions" />
      <div className="flex items-center justify-between py-6 px-2">
        <input
          className="w-64 px-5 py-2 rounded-lg focus:outline-neutral-400 border focus:outline-offset-4"
          type="text"
          placeholder="Search transactions..."
        />
        <button className="bg-gray-900 text-zinc-50 text-base px-5 py-2 rounded-lg font-medium hover:bg-gray-800">
          Add Transaction
        </button>
      </div>
      <div className="px-2 pb-6">
        <table className="text-left w-full">
          <thead className="text-gray-500">
            <tr className="grid grid-cols-4 py-3 px-3 border-b">
              <th className="font-medium">Date</th>
              <th className="font-medium">Description</th>
              <th className="font-medium">Category</th>
              <th className="text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-4 py-3 px-3 border-b">
              <td>2023-05-02</td>
              <td>Salary Deposit</td>
              <td>Income</td>
              <td className="text-right text-green-500">+$3,000.00</td>
            </tr>
            <tr className="grid grid-cols-4 py-3 px-3">
              <td>2023-05-01</td>
              <td>Grocery Shopping</td>
              <td>Food</td>
              <td className="text-right text-red-500">-$85.32</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center p-4 pt-8">
        <nav className="mr-6">
          <ul className="flex items-center space-x-2 text-gray-700">
            <li>
              <a
                href="#"
                className="px-3 py-1.5 mr-1 rounded-md font-medium hover:bg-gray-100"
              >
                &lt; Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 border rounded-md hover:bg-gray-100"
              >
                1
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-1.5 rounded-md hover:bg-gray-100">
                2
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-1.5 rounded-md hover:bg-gray-100">
                3
              </a>
            </li>
            <li className="px-3 py-1.5">...</li>
            <li>
              <a
                href="#"
                className="px-3 py-1.5 ml-1 rounded-md font-medium hover:bg-gray-100"
              >
                Next &gt;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
