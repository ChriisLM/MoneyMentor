import { Link, NavLink } from "react-router";
import { BellIcon, DarkIcon, MenuIcon } from "../icons/Icons";

export function Header() {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="flex items-center mr-3 md:hidden">
              <MenuIcon className="h-5 w-5" />
            </span>
            <NavLink to={"/"} className="text-2xl font-bold text-gray-900">
              MoneyMentor
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {/* <select name="" id="">
              <option value="cop">COP</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select> */}
            <Link
              to={"/help"}
              className="text-gray-900 font-medium hover:text-blue-500 hover:underline"
            >
              Help
            </Link>
            <span className="bg-transparent rounded-md p-1 hover:bg-gray-100 cursor-pointer">
              <BellIcon className="h-6 w-6" />
            </span>
            <span className="bg-transparent rounded-md p-1 hover:bg-gray-100 cursor-pointer">
              <DarkIcon className="h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
