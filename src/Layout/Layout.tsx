import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export function Layout() {
  return (
    <main>
      <Header />
      <section className="flex">
        <SideBar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
