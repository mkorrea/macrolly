import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar/sidebar";

export function AppLayout() {
  return (
    <div className="flex bg-bg h-screen pl-1 p-2 pb-0 font-default">
      <Sidebar />
      <div className="relative flex flex-col w-full overflow-y-scroll scroll bg-white border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A] ">
        <Header />

        <main className="h-dvh">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
