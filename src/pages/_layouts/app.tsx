import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useState } from "react";

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
    <div className="flex h-screen bg-bg max-h-screen font-default ml-2 md:ml-0">
      <Sidebar isSidebarOpen={isSidebarOpen}  handleToggleSidebarMode={handleToggleSidebarMode} />

      <div className="relative flex flex-col w-full mt-2 mr-2 overflow-y-auto no-scrollbar bg-white border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A] ">
        <Header handleToggleSidebarMode={handleToggleSidebarMode} isSidebarOpen={isSidebarOpen}/>

        <main>
          <Outlet />
        </main>

      </div>
    </div>
    // <div className="flex h-screen bg-bg max-h-screen p-2 pb-0 font-default md:pl-1">
    //   <Sidebar isSidebarOpen={isSidebarOpen} />

  //     <div className="relative flex flex-col w-full overflow-y-auto no-scrollbar bg-white border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A] ">
  //       <Header handleToggleSidebarMode={handleToggleSidebarMode} isSidebarOpen={isSidebarOpen}/>

  //       <main>
  //         <Outlet />
  //       </main>

    //   </div>
    // </div>
  );
}
