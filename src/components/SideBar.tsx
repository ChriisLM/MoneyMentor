import { NavLink } from "react-router";
import {
  BarChartIcon,
  CoinIcon,
  GoalIcon,
  HomeIcon,
  PigCoinIcon,
  SelectorIcon,
  TransactionIcon,
} from "../icons/SideBarIcons";

const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Accounts", href: "/accounts", icon: PigCoinIcon },
  { name: "Budget", href: "/budget", icon: CoinIcon },
  { name: "Savings Goals", href: "/savings", icon: GoalIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionIcon },
  { name: "Reports", href: "/reports", icon: BarChartIcon },
];

export function SideBar() {
  return (
    <aside className="flex-col justify-between bg-gradient-to-b from-zinc-900 to-zinc-700 shadow-md w-56 hidden md:flex pt-3 h-screen dark:from-zinc-950 dark:to-zinc-800">
      <section>
        <div className="flex justify-center pb-4">
          <NavLink to={"/"} className="text-2xl py-1 font-bold text-gray-200">
            MoneyMentor
          </NavLink>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li className="text-gray-200" key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-3 hover:bg-zinc-700 ${
                      isActive ? "bg-zinc-700 text-blue-300 font-semibold" : ""
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
      </section>
      <div className="flex items-center justify-between rounded-lg hover:bg-zinc-800 mx-3 px-2 py-2 my-2 cursor-pointer">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4794/4794936.png"
            alt="avatar"
            className="bg-neutral-300 h-9 w-9 rounded-md"
          />
          <div className="flex flex-col justify-center text-xs text-gray-200 ml-2">
            <h5 className="font-bold">Nombre</h5>
            <span>m@example.com</span>
          </div>
        </div>
        <span>
          <SelectorIcon className="h-6 w-6 stroke-gray-200" />
        </span>
      </div>
    </aside>
  );
}
