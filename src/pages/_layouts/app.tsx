import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar/sidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-bg max-h-screen p-2 pb-0 font-default md:pl-1">
      <Sidebar />

        <div className="relative flex flex-col w-full overflow-y-auto no-scrollbar bg-white border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A] ">
          <Header />

          <main>
            <Outlet />
          </main>

      </div>
    </div>
  );
}
