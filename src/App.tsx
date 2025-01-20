import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";

// Provicional
const Dashboard = () => <div>Dashboard Content</div>;
const Transactions = () => <div>Transactions Content</div>;
const Budget = () => <div>Budget Content</div>;
const Savings = () => <div>Savings Content</div>;
const Investments = () => <div>Investments Content</div>;
const Reports = () => <div>Reports Content</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budget" element={<Budget />} />
          <Route path="savings" element={<Savings />} />
          <Route path="investments" element={<Investments />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
