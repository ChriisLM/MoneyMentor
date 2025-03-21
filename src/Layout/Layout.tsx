import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export function Layout() {
  return (
    <main className="h-screen flex flex-col">
      <section className="flex flex-grow overflow-hidden">
        <SideBar />
        <div className="flex-grow overflow-y-auto bg-[#f5f5ea] dark:bg-zinc-800">
          <Header />
          <Outlet />
        </div>
      </section>
    </main>
  );
}
