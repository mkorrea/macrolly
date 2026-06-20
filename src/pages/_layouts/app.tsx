import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useState } from "react";
// import { Footer } from "@/components/footer";

export function AppLayout() {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
  
  function handleToggleSidebarMode() {
    if(isSidebarOpen) {
      setIsSidebarOpen(false)
    }
    if(!isSidebarOpen) {
      setIsSidebarOpen(true)
    }
  }
  
  return (
    <div className="flex h-screen bg-bg max-h-screen font-default ">
      <Sidebar isSidebarOpen={isSidebarOpen}  handleToggleSidebarMode={handleToggleSidebarMode} />

      <div className="relative flex flex-col w-full overflow-y-auto no-scrollbar bg-bg text-text border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A]  md:mt-2 md:mr-2">
        <Header handleToggleSidebarMode={handleToggleSidebarMode} isSidebarOpen={isSidebarOpen}/>

        <main>
          <Outlet />
          {/* <Footer /> */}
        </main>

      </div>
    </div>
  );
}
