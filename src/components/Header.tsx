import { BellIcon, DarkIcon, MenuIcon } from "../icons/Icons";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className=" z-10">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-end items-center pt-4 pb-1">
          <span className="flex items-center mx-1 md:hidden">
            <MenuIcon className="h-5 w-5" />
          </span>
          <div className="flex items-center space-x-4">
            <span className="bg-transparent rounded-md p-1 hover:bg-gray-200 hover:dark:hover:bg-zinc-700 cursor-pointer">
              <BellIcon className="h-6 w-6 dark:text-gray-200" />
            </span>
            <span className="bg-transparent rounded-md p-1 hover:bg-gray-200 hover:dark:hover:bg-zinc-700 cursor-pointer">
              <DarkIcon
                className="h-6 w-6 dark:text-gray-200"
                onClick={handleChangeTheme}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
