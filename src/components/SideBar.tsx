import { NavLink } from "react-router";
import {
  BarChartIcon,
  CoinIcon,
  GoalIcon,
  HomeIcon,
  InvestmentIcon,
  SelectorIcon,
  TransactionIcon,
} from "../icons/SideBarIcons";

const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionIcon },
  { name: "Budget", href: "/budget", icon: CoinIcon },
  { name: "Savings Goals", href: "/savings", icon: GoalIcon },
  { name: "Investments", href: "/investments", icon: InvestmentIcon },
  { name: "Reports", href: "/reports", icon: BarChartIcon },
];

export function SideBar() {
  return (
    <aside className="flex-col justify-between bg-white shadow-md w-56 hidden md:flex pt-3 h-[90vh]">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 text-blue-500" : ""
                  }`
                }
              >
                <item.icon className="h-6 w-6 mr-3" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-between rounded-lg hover:bg-gray-100 mx-3 px-2 py-2 my-2 cursor-pointer">
        <div className="flex items-center">
          <img src="" alt="" className="bg-neutral-300 h-9 w-9 rounded-md" />
          <div className="flex flex-col justify-center text-xs text-gray-700 ml-2">
            <h5 className="font-bold">Nombre</h5>
            <span>m@example.com</span>
          </div>
        </div>
        <span>
          <SelectorIcon className="h-6 w-6 stroke-gray-700" />
        </span>
      </div>
    </aside>
  );
}
