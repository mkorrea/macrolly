import { ListIcon } from "@phosphor-icons/react";
import { Sidebar } from "./components/sidebar";

export function App() {

  return (
    <div className="flex bg-[#FFFDFA] h-screen p-2 pb-0">
      <Sidebar />
      <main className="w-full p-2 bg-white border border-px border-[#DDDDDD] rounded-t-2xl shadow-[0px_0px_24px_#7171711A]">

        <header className="flex items-center justify-center">
          <div className="p-2 shadow-md w-fit rounded-lg">
            <ListIcon size={24} />
          </div>

          <h1 className="text-xl bg-linear-to-r from-[#FFA770] to-[#F86060] text-transparent bg-clip-text w-fit">macrolly</h1>
        </header>

        main
      </main>
    </div>
  )
}