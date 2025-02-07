import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Transactions } from "./pages/Transactions";
import { Accounts } from "./pages/Accounts";
import { Budget } from "./pages/Budget";
import { Savings } from "./pages/Savings";
import { Reports } from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budget" element={<Budget />} />
          <Route path="savings" element={<Savings />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="reports" element={<Reports/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
